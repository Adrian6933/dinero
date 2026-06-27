import { useEffect, useMemo, useRef, useState } from 'react';

export interface SearchItem {
  title: string;
  url: string;
  category: string;
  categoryName: string;
  accent: string;
  description: string;
}

interface Props {
  items: SearchItem[];
  placeholder?: string;
}

/**
 * Client-side instant search over all articles. The full index is passed in at
 * build time (the site is small enough that shipping it beats an API).
 */
export default function SearchBar({
  items,
  placeholder = 'Search a tutorial… e.g. "speed up my PC"',
}: Props) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return items
      .filter((item) => {
        const haystack =
          `${item.title} ${item.description} ${item.categoryName}`.toLowerCase();
        return haystack.includes(q);
      })
      .slice(0, 8);
  }, [query, items]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  function onKeyDown(e: React.KeyboardEvent) {
    if (!results.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      const target = results[activeIndex];
      if (target) window.location.href = target.url;
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  }

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-5 flex items-center text-muted">
          <SearchIcon />
        </span>
        <input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            setActiveIndex(0);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          aria-label="Search tutorials"
          className="w-full rounded-full border border-line bg-surface py-4 pl-14 pr-5 text-base text-fg shadow-lg shadow-black/5 outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/20"
        />
      </div>

      {open && query.trim() && (
        <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl">
          {results.length === 0 ? (
            <p className="px-5 py-4 text-left text-sm text-muted">
              No tutorials found for “{query}”. Try different words.
            </p>
          ) : (
            <ul>
              {results.map((item, i) => (
                <li key={item.url}>
                  <a
                    href={item.url}
                    className={`flex items-center gap-3 px-5 py-3 text-left transition ${
                      i === activeIndex ? 'bg-surface-2' : ''
                    }`}
                    onMouseEnter={() => setActiveIndex(i)}
                  >
                    <span
                      className="h-2 w-2 shrink-0 rounded-full"
                      style={{ background: item.accent }}
                    />
                    <span className="min-w-0">
                      <span className="block truncate font-medium text-fg">
                        {item.title}
                      </span>
                      <span className="block truncate text-xs text-muted">
                        {item.categoryName}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
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
