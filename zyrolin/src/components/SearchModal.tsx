import { useEffect, useMemo, useRef, useState } from 'react';

export interface SearchItem {
  title: string;
  url: string;
  category: string;
  categoryName: string;
  accent: string;
  description: string;
  tags?: string[];
}

/** Normalize for forgiving matching: lowercase, strip accents, drop hyphens. */
function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '') // remove accents (á → a)
    .replace(/-/g, '') // "wi-fi" → "wifi"
    .replace(/\s+/g, ' ')
    .trim();
}

interface Props {
  items: SearchItem[];
  placeholder?: string;
  hint?: string;
}

/**
 * Site-wide command-palette search. Opens from any element with
 * [data-open-search] (it dispatches a `zyrolin:open-search` event), or with
 * Cmd/Ctrl+K or "/". Matching is accent- and hyphen-insensitive and every word
 * in the query must appear, so "wifi" finds "Wi-Fi" and "como" finds "cómo".
 */
export default function SearchModal({
  items,
  placeholder = 'Search a tutorial…',
  hint = 'Navigate ↑↓ · Open ↵ · Close Esc',
}: Props) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Pre-normalize each item's searchable text once.
  const indexed = useMemo(
    () =>
      items.map((it) => ({
        it,
        hay: normalize(
          `${it.title} ${it.description} ${it.categoryName} ${(it.tags ?? []).join(' ')}`,
        ),
      })),
    [items],
  );

  const results = useMemo(() => {
    const q = normalize(query);
    if (!q) return items.slice(0, 6); // suggestions when empty
    const words = q.split(' ');
    return indexed
      .filter(({ hay }) => words.every((w) => hay.includes(w)))
      .slice(0, 8)
      .map(({ it }) => it);
  }, [query, indexed, items]);

  useEffect(() => {
    function openNow() {
      setOpen(true);
    }
    function onKey(e: KeyboardEvent) {
      const k = e.key.toLowerCase();
      if ((e.metaKey || e.ctrlKey) && k === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (
        k === '/' &&
        !/(input|textarea|select)/i.test((e.target as HTMLElement)?.tagName) &&
        !(e.target as HTMLElement)?.isContentEditable
      ) {
        e.preventDefault();
        setOpen(true);
      } else if (k === 'escape') {
        setOpen(false);
      }
    }
    window.addEventListener('zyrolin:open-search', openNow as EventListener);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('zyrolin:open-search', openNow as EventListener);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery('');
      setActive(0);
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => inputRef.current?.focus());
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  function onInputKey(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      const t = results[active];
      if (t) window.location.href = t.url;
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[12vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Search"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl">
        <div className="flex items-center gap-3 border-b border-line px-4">
          <span className="text-muted">
            <SearchIcon />
          </span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={onInputKey}
            placeholder={placeholder}
            aria-label="Search tutorials"
            autoComplete="off"
            spellCheck={false}
            className="w-full rounded-lg bg-transparent py-4 text-base text-fg outline-none placeholder:text-muted focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand/40"
          />
          <kbd className="hidden rounded border border-line px-1.5 py-0.5 text-[0.65rem] text-muted sm:block">
            Esc
          </kbd>
        </div>

        <div className="max-h-[55vh] overflow-y-auto p-2">
          {results.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-muted">
              No tutorials found for “{query}”.
            </p>
          ) : (
            <ul>
              {results.map((it, i) => (
                <li key={it.url}>
                  <a
                    href={it.url}
                    onMouseEnter={() => setActive(i)}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition ${
                      i === active ? 'bg-surface-2' : ''
                    }`}
                  >
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-bold"
                      style={{
                        background: `color-mix(in oklab, ${it.accent} 18%, transparent)`,
                        color: it.accent,
                      }}
                    >
                      {it.categoryName.slice(0, 1)}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate font-medium text-fg">
                        {it.title}
                      </span>
                      <span className="block truncate text-xs text-muted">
                        {it.categoryName}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-line px-4 py-2 text-center text-[0.7rem] text-muted">
          {hint}
        </div>
      </div>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
