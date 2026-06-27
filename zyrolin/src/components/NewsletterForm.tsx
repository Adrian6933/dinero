import { useState } from 'react';
import { SITE } from '../data/site';

/**
 * Newsletter signup. Submits to FormSubmit.co (no backend needed) so new
 * subscriber emails land in your inbox. Once you pick a real email provider
 * (Beehiiv, Brevo, ConvertKit, Mailchimp), point `submit()` at it instead.
 * Note: FormSubmit's AJAX endpoint works only after the email is activated —
 * confirm the first message from the contact form to activate it.
 * Sits on the brand gradient section, so colors are fixed (not theme tokens).
 */
export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>(
    'idle',
  );

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch(SITE.formEndpointAjax, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email,
          _subject: 'New Zyrolin newsletter subscriber',
        }),
      });
      if (!res.ok) throw new Error('request failed');
      setStatus('done');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <p className="text-center text-base font-medium text-white">
        You're in. Check your inbox to confirm.
      </p>
    );
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'error') setStatus('idle');
          }}
          placeholder="your@email.com"
          aria-label="Your email address"
          autoComplete="email"
          inputMode="email"
          spellCheck={false}
          className="w-full rounded-full border-0 bg-white px-5 py-3 text-[#0b0c10] outline-none focus:ring-4 focus:ring-white/40"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="shrink-0 rounded-full bg-[#0b0c10] px-6 py-3 font-semibold text-white transition hover:bg-black disabled:opacity-60"
        >
          {status === 'loading' ? 'Joining…' : 'Subscribe'}
        </button>
      </form>
      {status === 'error' && (
        <p className="mt-2 text-sm text-white/90">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
