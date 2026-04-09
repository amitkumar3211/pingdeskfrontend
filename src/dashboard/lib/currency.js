/**
 * Currency detection — single source of truth.
 *
 * Strategy (in order of accuracy):
 *   1. Explicit user choice from localStorage  → use it (manual override always wins)
 *   2. Cached IP-country lookup from a previous visit → use it
 *   3. Browser timezone (Asia/Kolkata) → INR
 *   4. Browser locale (en-IN) → INR
 *   5. Default → USD
 *
 * After the first render, we kick off an async IP lookup so the next visit
 * is even more accurate. This means a brand-new visitor gets a "best guess"
 * immediately and the right answer on the next page load.
 */

const STORAGE_KEY = 'pingdesk_currency';
const IP_CACHE_KEY = 'pingdesk_ip_country';
const IP_CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

/**
 * Synchronous best-effort detection. Returns 'INR' or 'USD' immediately,
 * without making any network calls.
 */
export const detectCurrencySync = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'INR' || stored === 'USD') return stored;

    // Check cached IP country from a previous visit
    const cachedRaw = localStorage.getItem(IP_CACHE_KEY);
    if (cachedRaw) {
      try {
        const cached = JSON.parse(cachedRaw);
        if (cached.expires > Date.now()) {
          return cached.country === 'IN' ? 'INR' : 'USD';
        }
      } catch { /* ignore corrupt cache */ }
    }

    // Browser timezone — covers ~99% of real users
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (tz === 'Asia/Kolkata' || tz === 'Asia/Calcutta') return 'INR';

    // Browser locale — fallback for users with weird timezones
    const lang = (navigator.language || '').toLowerCase();
    if (lang === 'en-in' || lang.endsWith('-in')) return 'INR';

    return 'USD';
  } catch {
    return 'USD';
  }
};

/**
 * Async IP-country lookup. Updates the cache and returns the new currency.
 * Safe to call from useEffect — doesn't throw, doesn't block.
 *
 * Uses ipapi.co — 30k free requests/month, no API key. The endpoint returns
 * `{ country_code: "IN", ... }` so we can map it to currency.
 */
export const refreshCurrencyFromIp = async () => {
  try {
    // Don't re-fetch if we already have a fresh cache
    const cachedRaw = localStorage.getItem(IP_CACHE_KEY);
    if (cachedRaw) {
      const cached = JSON.parse(cachedRaw);
      if (cached.expires > Date.now()) return cached.country === 'IN' ? 'INR' : 'USD';
    }

    const res = await fetch('https://ipapi.co/json/', { cache: 'no-store' });
    if (!res.ok) return null;
    const data = await res.json();
    const country = (data.country_code || '').toUpperCase();
    if (!country) return null;

    localStorage.setItem(IP_CACHE_KEY, JSON.stringify({
      country,
      expires: Date.now() + IP_CACHE_TTL_MS,
    }));

    return country === 'IN' ? 'INR' : 'USD';
  } catch {
    return null;
  }
};

/**
 * Persist the user's manual choice. Lock-in: once they pick a currency,
 * we stop guessing.
 */
export const setCurrencyChoice = (currency) => {
  if (currency !== 'INR' && currency !== 'USD') return;
  try { localStorage.setItem(STORAGE_KEY, currency); } catch { /* ignore */ }
};

/**
 * Display a number in the right currency format.
 * `amount` is in major units (rupees or dollars), not paise/cents.
 */
export const formatPrice = (amount, currency) => {
  if (currency === 'USD') {
    return `$${amount.toLocaleString('en-US')}`;
  }
  return `₹${amount.toLocaleString('en-IN')}`;
};
