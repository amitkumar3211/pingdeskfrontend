const API_ROOT = 'https://pindeskapi.himalayancoders.com';
const API = `${API_ROOT}/api/dashboard`;

/* ────────────────────────────────────────────────────────────────────
 * Dashboard login (Sign in with Slack)
 *
 * Knowing the dashboard URL is not enough to read or change a workspace.
 * The backend issues a bearer token after the user signs in with Slack and
 * is verified to be an admin of that workspace. We keep it in localStorage,
 * keyed by dashboard token, and attach it to every API call.
 * ──────────────────────────────────────────────────────────────────── */

export const UNAUTHENTICATED_EVENT = 'pingdesk:unauthenticated';

const sessionKey = (token) => `pingdesk_session_${token}`;

export const getSessionToken = (token) => {
  try { return localStorage.getItem(sessionKey(token)) || null; } catch { return null; }
};
export const setSessionToken = (token, session) => {
  try { localStorage.setItem(sessionKey(token), session); } catch { /* ignore */ }
};
export const clearSessionToken = (token) => {
  try { localStorage.removeItem(sessionKey(token)); } catch { /* ignore */ }
};

export const getLoginUrl = (token) =>
  `${API_ROOT}/auth/slack/login?token=${encodeURIComponent(token)}`;

export class UnauthenticatedError extends Error {
  constructor(payload) {
    super(payload?.message || 'Sign in required');
    this.name = 'UnauthenticatedError';
    this.code = payload?.error || 'unauthenticated';
  }
}

/** fetch() with the dashboard bearer token. A 401 clears the session and notifies the app. */
const authFetch = async (token, url, options = {}) => {
  const headers = { ...(options.headers || {}) };
  const session = getSessionToken(token);
  if (session) headers.Authorization = `Bearer ${session}`;

  const res = await fetch(url, { ...options, headers });

  if (res.status === 401) {
    let payload = null;
    try { payload = await res.json(); } catch { /* ignore */ }
    clearSessionToken(token);
    window.dispatchEvent(new CustomEvent(UNAUTHENTICATED_EVENT, { detail: { token, ...payload } }));
    throw new UnauthenticatedError(payload);
  }
  return res;
};

const json = (body) => ({
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

export const logout = async (token) => {
  try {
    await authFetch(token, `${API}/${token}/logout`, { method: 'POST' });
  } catch { /* already signed out */ }
  clearSessionToken(token);
};

/* ──────────────────────────── Dashboard ──────────────────────────── */

export const fetchDashboard = async (token, status = '', page = 1, range = 'all') => {
  const params = new URLSearchParams();
  if (status) params.set('status', status);
  if (page > 1) params.set('page', page);
  if (range && range !== 'all') params.set('range', range);
  const res = await authFetch(token, `${API}/${token}?${params}`);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
};

export const updateSettings = async (token, reminderHours) => {
  const res = await authFetch(token, `${API}/${token}/settings`, {
    method: 'PUT',
    ...json({ reminder_interval_hours: reminderHours }),
  });
  return res.json();
};

// Plans + subscriptions (autopay)
export const fetchPlans = async (token) => {
  const res = await authFetch(token, `${API}/${token}/plans`);
  if (!res.ok) throw new Error('Failed to load plans');
  return res.json();
};

export const createSubscription = async (token, plan, currency = 'INR') => {
  const res = await authFetch(token, `${API}/${token}/subscription`, {
    method: 'POST',
    ...json({ plan, currency }),
  });
  return res.json();
};

export const verifySubscription = async (token, data) => {
  const res = await authFetch(token, `${API}/${token}/subscription/verify`, {
    method: 'POST',
    ...json(data),
  });
  return res.json();
};

export const cancelSubscription = async (token) => {
  const res = await authFetch(token, `${API}/${token}/subscription/cancel`, { method: 'POST' });
  return res.json();
};

export const fetchInvoices = async (token) => {
  const res = await authFetch(token, `${API}/${token}/invoices`);
  if (!res.ok) throw new Error('Failed to load invoices');
  return res.json();
};

// Team (seat) management. `added_by` is derived server-side from the signed-in user.
export const fetchTeam = async (token) => {
  const res = await authFetch(token, `${API}/${token}/team`);
  if (!res.ok) throw new Error('Failed to load team');
  return res.json();
};
export const addTeamMember = async (token, slackUserId) => {
  const res = await authFetch(token, `${API}/${token}/team`, {
    method: 'POST',
    ...json({ slack_user_id: slackUserId }),
  });
  return res.json();
};
export const removeTeamMember = async (token, slackUserId) => {
  const res = await authFetch(token, `${API}/${token}/team/${slackUserId}`, { method: 'DELETE' });
  return res.json();
};

// Admin management
export const fetchAdmins = async (token) => {
  const res = await authFetch(token, `${API}/${token}/admins`);
  if (!res.ok) throw new Error('Failed to load admins');
  return res.json();
};
export const addAdmin = async (token, slackUserId) => {
  const res = await authFetch(token, `${API}/${token}/admins`, {
    method: 'POST',
    ...json({ slack_user_id: slackUserId }),
  });
  return res.json();
};
export const removeAdmin = async (token, slackUserId) => {
  const res = await authFetch(token, `${API}/${token}/admins/${slackUserId}`, { method: 'DELETE' });
  return res.json();
};

// Slack workspace user picker
export const searchSlackUsers = async (token, q = '') => {
  const url = new URL(`${API}/${token}/slack-users`);
  if (q) url.searchParams.set('q', q);
  const res = await authFetch(token, url.toString());
  if (!res.ok) throw new Error('Failed to search users');
  return res.json();
};

/**
 * CSV export. A plain <a href> can't carry the Authorization header, so we
 * fetch the file with the token and trigger a download from a blob.
 */
export const downloadExport = async (token, range = 'all') => {
  const qs = range && range !== 'all' ? `?range=${range}` : '';
  const res = await authFetch(token, `${API}/${token}/export${qs}`);
  if (!res.ok) throw new Error('Export failed');
  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `pingdesk-requests-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
};
