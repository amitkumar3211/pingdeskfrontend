import { useCallback, useEffect, useState } from 'react';
import { addTeamMember, fetchTeam, removeTeamMember } from '../api';
import SlackUserPicker from '../components/SlackUserPicker';
import { Avatar, EmptyState, FadeIn, SectionHeader } from '../components/shared';

const Team = ({ token, workspace, onGoToUpgrade, onChange }) => {
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [error, setError] = useState('');

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const t = await fetchTeam(token);
      setTeam(t);
    } catch {
      setTeam(null);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => { load(); }, [load]);

  const handleAdd = async (user) => {
    setError('');
    const res = await addTeamMember(token, user.id);
    if (res.error) {
      setError(res.error);
    } else {
      setPickerOpen(false);
      await load();
      onChange?.();
    }
  };

  const handleRemove = async (slackUserId, name) => {
    if (!window.confirm(`Remove ${name} from the team?\n\nTheir existing requests stay in the dashboard, but they won't be able to create new ones.`)) return;
    const res = await removeTeamMember(token, slackUserId);
    if (!res.error) {
      await load();
      onChange?.();
    }
  };

  if (loading) {
    return <div className="py-20 flex justify-center"><div className="w-8 h-8 rounded-full border-2 border-violet-100 border-t-violet-500 animate-spin" /></div>;
  }

  if (!team) {
    return <p className="text-sm text-gray-400">Could not load team.</p>;
  }

  const seatsRemaining = team.seats_remaining;
  const isFull = seatsRemaining === 0;
  const usagePct = team.seats_total > 0 ? Math.round((team.seats_used / team.seats_total) * 100) : 0;
  const memberIds = team.members.map((m) => m.slack_user_id);

  return (
    <>
      <SectionHeader
        title="Team"
        description="People who can create new requests in this workspace."
        action={
          <button
            onClick={() => { setError(''); setPickerOpen(true); }}
            disabled={isFull}
            className={`text-xs font-bold px-5 py-2.5 rounded-full transition-all shadow-sm ${
              isFull
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:shadow-md hover:-translate-y-0.5'
            }`}
          >
            + Add Member
          </button>
        }
      />

      {/* Seats progress */}
      <FadeIn>
        <div className="mb-6 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
            <div>
              <p className="text-sm font-semibold text-gray-900">{team.seats_used} of {team.seats_total} seats used</p>
              <p className="text-xs text-gray-400 mt-0.5">
                {isFull
                  ? 'All seats are taken. Remove a member or add more seats to grant access to new users.'
                  : `${seatsRemaining} ${seatsRemaining === 1 ? 'seat' : 'seats'} remaining.`}
              </p>
            </div>
            <span className={`text-xl font-black ${isFull ? 'text-red-500' : 'text-violet-600'}`}>{usagePct}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
            <div
              className={`h-2.5 rounded-full transition-all duration-1000 ease-out ${isFull ? 'bg-red-500' : 'bg-gradient-to-r from-violet-500 to-indigo-500'}`}
              style={{ width: `${usagePct}%` }}
            />
          </div>
          {isFull && !workspace.is_pro && (
            <button
              onClick={onGoToUpgrade}
              className="mt-4 text-xs font-bold text-violet-600 hover:text-violet-700"
            >
              Upgrade to Pro to add more seats →
            </button>
          )}
          {isFull && workspace.is_pro && (
            <button
              onClick={onGoToUpgrade}
              className="mt-4 text-xs font-bold text-violet-600 hover:text-violet-700"
            >
              Buy more seats →
            </button>
          )}
        </div>
      </FadeIn>

      {error && (
        <div className="mb-4 bg-red-50 border border-red-100 text-red-700 text-xs px-4 py-3 rounded-xl">
          {error}
        </div>
      )}

      {/* Members list */}
      <FadeIn delay={100}>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {team.members.length === 0 ? (
            <EmptyState
              icon={<svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-5.13a4 4 0 11-8 0 4 4 0 018 0zm6 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
              title="No team members yet"
              description="Add people to grant them access to create requests."
            />
          ) : (
            <ul>
              {team.members.map((m, idx) => (
                <li
                  key={m.slack_user_id}
                  className={`flex items-center gap-4 px-6 py-4 ${idx !== team.members.length - 1 ? 'border-b border-gray-50' : ''} hover:bg-gray-50/60 transition-colors`}
                >
                  <Avatar name={m.name} size="w-10 h-10" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">{m.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Added {m.added_at}{m.added_by && m.added_by !== 'auto' ? ` by ${m.added_by}` : ' automatically'}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemove(m.slack_user_id, m.name)}
                    className="text-xs font-semibold text-gray-400 hover:text-red-600 px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </FadeIn>

      {pickerOpen && (
        <SlackUserPicker
          token={token}
          excludeIds={memberIds}
          title="Add team member"
          onClose={() => setPickerOpen(false)}
          onPick={handleAdd}
        />
      )}
    </>
  );
};

export default Team;
