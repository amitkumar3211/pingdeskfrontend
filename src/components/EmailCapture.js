import { useState } from 'react';

const EmailCapture = ({ variant = 'default' }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('https://pindeskapi.himalayancoders.com/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={`${variant === 'sidebar' ? 'bg-violet-50 rounded-2xl p-6' : ''}`}>
        <p className="text-sm font-semibold text-emerald-600 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          You're subscribed! Check your inbox.
        </p>
      </div>
    );
  }

  if (variant === 'sidebar') {
    return (
      <div className="bg-violet-50 rounded-2xl p-6 border border-violet-100">
        <h3 className="text-base font-bold text-gray-900 mb-2">Get Slack productivity tips</h3>
        <p className="text-sm text-gray-500 mb-4">Weekly tips on managing requests, automating follow-ups, and keeping your Slack organized.</p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
            className="w-full px-4 py-2.5 rounded-xl border border-violet-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold px-4 py-2.5 rounded-xl text-sm transition-all disabled:opacity-50"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
          {status === 'error' && <p className="text-xs text-red-500">Something went wrong. Try again.</p>}
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <h3 className="text-sm font-bold text-gray-900 mb-2 text-center">Get Slack productivity tips weekly</h3>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          required
          className="flex-1 px-4 py-2.5 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-all disabled:opacity-50"
        >
          {status === 'loading' ? '...' : 'Subscribe'}
        </button>
      </form>
      {status === 'error' && <p className="text-xs text-red-500 text-center mt-2">Something went wrong. Try again.</p>}
    </div>
  );
};

export default EmailCapture;
