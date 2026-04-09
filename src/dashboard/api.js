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

export const createOrder = async (token) => {
  const res = await fetch(`${API}/${token}/create-order`, { method: 'POST' });
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

export const getExportUrl = (token, range = 'all') => {
  const qs = range && range !== 'all' ? `?range=${range}` : '';
  return `${API}/${token}/export${qs}`;
};
