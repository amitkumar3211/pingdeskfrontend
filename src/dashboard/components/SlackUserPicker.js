import { useEffect, useRef, useState } from 'react';
import { searchSlackUsers } from '../api';
import { Avatar } from './shared';

/**
 * Modal that lets the admin pick a Slack user from the workspace.
 * - excludeIds: array of slack_user_ids already in the list (greyed out)
 * - onPick(user): called when a user is selected
 */
const SlackUserPicker = ({ token, excludeIds = [], title = 'Add member', onClose, onPick }) => {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    const t = setTimeout(async () => {
      try {
        const res = await searchSlackUsers(token, query);
        if (!cancelled) setUsers(res.users || []);
      } catch {
        if (!cancelled) setUsers([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }, query ? 200 : 0); // debounce search input
    return () => { cancelled = true; clearTimeout(t); };
  }, [token, query]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const excludedSet = new Set(excludeIds);

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center pt-20 px-4 bg-gray-900/40 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[70vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-base font-bold text-gray-900">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-5 py-3 border-b border-gray-100">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search Slack users..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:bg-white focus:border-violet-300 focus:ring-2 focus:ring-violet-100 outline-none transition"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {loading ? (
            <div className="py-12 flex justify-center">
              <div className="w-6 h-6 rounded-full border-2 border-violet-100 border-t-violet-500 animate-spin" />
            </div>
          ) : users.length === 0 ? (
            <div className="py-12 text-center text-sm text-gray-400">No users found</div>
          ) : (
            <ul className="py-1">
              {users.map((u) => {
                const excluded = excludedSet.has(u.id);
                return (
                  <li key={u.id}>
                    <button
                      disabled={excluded}
                      onClick={() => { if (!excluded) onPick(u); }}
                      className={`w-full px-5 py-2.5 flex items-center gap-3 text-left transition-colors ${
                        excluded ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-50 cursor-pointer'
                      }`}
                    >
                      <Avatar name={u.name} src={u.avatar} size="w-8 h-8" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{u.name}</p>
                      </div>
                      {excluded && <span className="text-[10px] font-semibold text-gray-400 uppercase">Already added</span>}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SlackUserPicker;
