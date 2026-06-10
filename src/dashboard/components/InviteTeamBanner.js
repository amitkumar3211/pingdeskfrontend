import { useState } from 'react';
import { searchSlackUsers, addTeamMember } from '../api';

const InviteTeamBanner = ({ token, workspace, onInvited }) => {
  const [dismissed, setDismissed] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [invited, setInvited] = useState([]);
  const [searching, setSearching] = useState(false);

  if (dismissed) return null;

  const search = async (q) => {
    setQuery(q);
    if (q.length < 1) { setUsers([]); return; }
    setSearching(true);
    try {
      const res = await searchSlackUsers(token, q);
      setUsers((res.users || res).slice(0, 6));
    } catch { /* ignore */ }
    setSearching(false);
  };

  const invite = async (user) => {
    setLoading(true);
    try {
      await addTeamMember(token, user.id || user.slack_user_id);
      setInvited((prev) => [...prev, user.id || user.slack_user_id]);
      if (onInvited) onInvited();
    } catch { /* ignore */ }
    setLoading(false);
  };

  const isInvited = (user) => invited.includes(user.id || user.slack_user_id);

  return (
    <div className="mb-6 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 rounded-2xl px-6 py-5 relative">
      <button
        onClick={() => setDismissed(true)}
        className="absolute top-3 right-3 text-gray-300 hover:text-gray-500 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
        </div>
        <div>
          <h3 className="text-sm font-bold text-gray-900">Invite your teammates</h3>
          <p className="text-xs text-gray-500 mt-0.5">
            Pingdesk works best with your team. Add people so they can create and manage requests too.
          </p>
        </div>
      </div>

      {!showPicker ? (
        <button
          onClick={() => setShowPicker(true)}
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Add teammates
        </button>
      ) : (
        <div className="mt-3">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => search(e.target.value)}
              placeholder="Search by name..."
              autoFocus
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400"
            />
            {searching && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <div className="w-4 h-4 border-2 border-emerald-300 border-t-transparent rounded-full animate-spin" />
              </div>
            )}
          </div>

          {users.length > 0 && (
            <div className="mt-2 bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
              {users.map((user) => (
                <div
                  key={user.id || user.slack_user_id}
                  className="flex items-center justify-between px-4 py-2.5 hover:bg-gray-50 border-b border-gray-50 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white text-[10px] font-bold">
                      {(user.name || user.real_name || '?').substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{user.real_name || user.name}</p>
                      {user.name && user.real_name && (
                        <p className="text-[11px] text-gray-400">@{user.name}</p>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => invite(user)}
                    disabled={loading || isInvited(user)}
                    className={`text-xs font-bold px-4 py-1.5 rounded-full transition-all ${
                      isInvited(user)
                        ? 'bg-emerald-50 text-emerald-600'
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
                    }`}
                  >
                    {isInvited(user) ? 'Added' : 'Add'}
                  </button>
                </div>
              ))}
            </div>
          )}

          {invited.length > 0 && (
            <p className="mt-3 text-xs text-emerald-600 font-medium">
              {invited.length} teammate{invited.length > 1 ? 's' : ''} added! They can now use /request in Slack.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default InviteTeamBanner;
