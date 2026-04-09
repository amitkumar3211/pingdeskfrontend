import { useState } from 'react';
import { events } from '../../lib/analytics';
import { updateSettings } from '../api';
import { FadeIn, SectionHeader } from '../components/shared';

const Settings = ({ token, workspace, onGoToUpgrade, onChange }) => {
  const [reminderHours, setReminderHours] = useState(workspace.reminder_hours);
  const [saving, setSaving] = useState(false);
  const [savedMsg, setSavedMsg] = useState('');

  const handleSave = async () => {
    setSaving(true);
    const res = await updateSettings(token, parseInt(reminderHours, 10));
    setSaving(false);
    if (res.success) {
      setSavedMsg('Saved');
      events.settingsUpdate('reminder_interval_hours');
      onChange?.();
      setTimeout(() => setSavedMsg(''), 2000);
    }
  };

  return (
    <>
      <SectionHeader
        title="Settings"
        description="Workspace preferences and plan information."
      />

      {/* Workspace info */}
      <FadeIn>
        <div className="mb-6 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <h3 className="text-sm font-bold text-gray-900 mb-4">Workspace</h3>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm">
            <div>
              <dt className="text-xs text-gray-400 font-medium">Name</dt>
              <dd className="text-gray-900 font-semibold mt-0.5">{workspace.name}</dd>
            </div>
            <div>
              <dt className="text-xs text-gray-400 font-medium">Plan</dt>
              <dd className="mt-0.5">
                <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                  workspace.is_pro ? 'bg-gradient-to-r from-violet-500 to-indigo-500 text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                  {workspace.plan}
                </span>
              </dd>
            </div>
            <div>
              <dt className="text-xs text-gray-400 font-medium">Seats</dt>
              <dd className="text-gray-900 font-semibold mt-0.5">
                {workspace.seats_used} of {workspace.seats_total} used
              </dd>
            </div>
            {workspace.subscription_ends_at && (
              <div>
                <dt className="text-xs text-gray-400 font-medium">Renews</dt>
                <dd className="text-gray-900 font-semibold mt-0.5">{workspace.subscription_ends_at}</dd>
              </div>
            )}
          </dl>
        </div>
      </FadeIn>

      {/* Reminder interval */}
      <FadeIn delay={100}>
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <h3 className="text-sm font-bold text-gray-900 mb-1">Reminder Interval</h3>
          <p className="text-xs text-gray-400 mb-4">
            How often Pingdesk should remind assignees about open requests.
          </p>

          {workspace.is_pro ? (
            <div className="flex items-end gap-3 flex-wrap">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">Hours</label>
                <input
                  type="number"
                  min="1"
                  max="168"
                  value={reminderHours}
                  onChange={(e) => setReminderHours(e.target.value)}
                  className="w-24 border border-gray-200 rounded-xl px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-shadow"
                />
              </div>
              <button
                onClick={handleSave}
                disabled={saving}
                className="bg-gray-900 text-white text-xs font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-800 transition-colors shadow-sm disabled:opacity-50"
              >
                {saving ? 'Saving...' : 'Save'}
              </button>
              {savedMsg && <span className="text-xs text-emerald-600 font-semibold animate-pulse">{savedMsg}</span>}
            </div>
          ) : (
            <div className="bg-gradient-to-br from-violet-50 to-indigo-50 border border-violet-100 rounded-xl p-5 flex items-center justify-between flex-wrap gap-3">
              <div>
                <p className="text-sm font-bold text-gray-900">Custom intervals are a Pro feature</p>
                <p className="text-xs text-gray-500 mt-0.5">Free workspaces use a 24-hour interval.</p>
              </div>
              <button
                onClick={onGoToUpgrade}
                className="bg-gray-900 text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-gray-800 transition-all shadow-sm"
              >
                Upgrade
              </button>
            </div>
          )}
        </div>
      </FadeIn>
    </>
  );
};

export default Settings;
