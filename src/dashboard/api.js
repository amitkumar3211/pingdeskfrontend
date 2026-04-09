const API = 'https://pindeskapi.himalayancoders.com/api/dashboard';

export const fetchDashboard = async (token, status = '', page = 1, range = 'all') => {
  const params = new URLSearchParams();
  if (status) params.set('status', status);
  if (page > 1) params.set('page', page);
  if (range && range !== 'all') params.set('range', range);
  const res = await fetch(`${API}/${token}?${params}`);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
};

export const updateSettings = async (token, reminderHours) => {
  const res = await fetch(`${API}/${token}/settings`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ reminder_interval_hours: reminderHours }),
  });
  return res.json();
};

export const createOrder = async (token, seats = 3) => {
  const res = await fetch(`${API}/${token}/create-order`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ seats }),
  });
  return res.json();
};

export const verifyPayment = async (token, data) => {
  const res = await fetch(`${API}/${token}/verify-payment`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
};

// Team (seat) management
export const fetchTeam = async (token) => {
  const res = await fetch(`${API}/${token}/team`);
  if (!res.ok) throw new Error('Failed to load team');
  return res.json();
};
export const addTeamMember = async (token, slackUserId, addedBy = null) => {
  const res = await fetch(`${API}/${token}/team`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ slack_user_id: slackUserId, added_by: addedBy }),
  });
  return res.json();
};
export const removeTeamMember = async (token, slackUserId) => {
  const res = await fetch(`${API}/${token}/team/${slackUserId}`, { method: 'DELETE' });
  return res.json();
};

// Admin management
export const fetchAdmins = async (token) => {
  const res = await fetch(`${API}/${token}/admins`);
  if (!res.ok) throw new Error('Failed to load admins');
  return res.json();
};
export const addAdmin = async (token, slackUserId, addedBy = null) => {
  const res = await fetch(`${API}/${token}/admins`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ slack_user_id: slackUserId, added_by: addedBy }),
  });
  return res.json();
};
export const removeAdmin = async (token, slackUserId) => {
  const res = await fetch(`${API}/${token}/admins/${slackUserId}`, { method: 'DELETE' });
  return res.json();
};

// Slack workspace user picker
export const searchSlackUsers = async (token, q = '') => {
  const url = new URL(`${API}/${token}/slack-users`);
  if (q) url.searchParams.set('q', q);
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error('Failed to search users');
  return res.json();
};

export const getExportUrl = (token, range = 'all') => {
  const qs = range && range !== 'all' ? `?range=${range}` : '';
  return `${API}/${token}/export${qs}`;
};
