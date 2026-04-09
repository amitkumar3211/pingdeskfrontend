import { useCallback, useEffect, useState } from 'react';
import { addAdmin, fetchAdmins, removeAdmin } from '../api';
import SlackUserPicker from '../components/SlackUserPicker';
import { Avatar, EmptyState, FadeIn, SectionHeader } from '../components/shared';

const Admins = ({ token, workspace, onGoToUpgrade }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [error, setError] = useState('');

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const d = await fetchAdmins(token);
      setData(d);
    } catch {
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => { load(); }, [load]);

  const handleAdd = async (user) => {
    setError('');
    const res = await addAdmin(token, user.id);
    if (res.error) {
      setError(res.error);
    } else {
      setPickerOpen(false);
      await load();
    }
  };

  const handleRemove = async (slackUserId, name) => {
    if (!window.confirm(`Remove ${name} as a workspace admin?`)) return;
    const res = await removeAdmin(token, slackUserId);
    if (!res.error) {
      await load();
    } else {
      setError(res.error);
    }
  };

  if (loading) {
    return <div className="py-20 flex justify-center"><div className="w-8 h-8 rounded-full border-2 border-violet-100 border-t-violet-500 animate-spin" /></div>;
  }

  if (!data) {
    return <p className="text-sm text-gray-400">Could not load admins.</p>;
  }

  const adminIds = data.admins.map((a) => a.slack_user_id);

  return (
    <>
      <SectionHeader
        title="Admins"
        description="Workspace admins can edit/delete any request and manage team access."
        action={
          workspace.features?.multi_admin ? (
            <button
              onClick={() => { setError(''); setPickerOpen(true); }}
              className="text-xs font-bold px-5 py-2.5 rounded-full transition-all shadow-sm bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:shadow-md hover:-translate-y-0.5"
            >
              + Add Admin
            </button>
          ) : (
            <button
              onClick={onGoToUpgrade}
              className="text-xs font-bold px-5 py-2.5 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-all shadow-sm"
            >
              Upgrade to add admins
            </button>
          )
        }
      />

      {!workspace.features?.multi_admin && (
        <FadeIn>
          <div className="mb-6 bg-gradient-to-br from-violet-50 to-indigo-50 border border-violet-100 rounded-2xl p-5 flex items-start gap-4">
            <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">Multiple admins is a Growth feature</p>
              <p className="text-xs text-gray-500 mt-1">Starter workspaces have a single admin (the installer). Upgrade to Growth or higher to delegate admin access to multiple people.</p>
            </div>
          </div>
        </FadeIn>
      )}

      {error && (
        <div className="mb-4 bg-red-50 border border-red-100 text-red-700 text-xs px-4 py-3 rounded-xl">
          {error}
        </div>
      )}

      <FadeIn delay={100}>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {data.admins.length === 0 ? (
            <EmptyState
              icon={<svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
              title="No admins"
              description="Reinstall the app to register the installer as the first admin."
            />
          ) : (
            <ul>
              {data.admins.map((a, idx) => (
                <li
                  key={a.slack_user_id}
                  className={`flex items-center gap-4 px-6 py-4 ${idx !== data.admins.length - 1 ? 'border-b border-gray-50' : ''} hover:bg-gray-50/60 transition-colors`}
                >
                  <Avatar name={a.name} size="w-10 h-10" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-sm font-semibold text-gray-900 truncate">{a.name}</p>
                      {a.is_installer && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-violet-600 bg-violet-50 px-2 py-0.5 rounded-full">
                          Installer
                        </span>
                      )}
                    </div>
                  </div>
                  {a.is_installer ? (
                    <span className="text-xs text-gray-300 px-3 py-1.5">Cannot remove</span>
                  ) : (
                    <button
                      onClick={() => handleRemove(a.slack_user_id, a.name)}
                      className="text-xs font-semibold text-gray-400 hover:text-red-600 px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors"
                    >
                      Remove
                    </button>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </FadeIn>

      {pickerOpen && (
        <SlackUserPicker
          token={token}
          excludeIds={adminIds}
          title="Add admin"
          onClose={() => setPickerOpen(false)}
          onPick={handleAdd}
        />
      )}
    </>
  );
};

export default Admins;
