import { getLoginUrl } from '../api';

const ERROR_MESSAGES = {
  not_admin: 'Only Pingdesk admins of this workspace can open the dashboard. Ask the person who installed Pingdesk to add you as an admin.',
  wrong_workspace: 'You signed in to a different Slack workspace than the one this dashboard belongs to. Please sign in with the matching workspace.',
  invalid_state: 'Your sign-in session expired or the request could not be verified. Please try again.',
  cancelled: 'Sign-in was cancelled.',
  slack_error: 'Slack could not complete the sign-in. Please try again.',
  missing_code: 'Slack did not return an authorization code. Please try again.',
  not_found: 'This dashboard link is invalid.',
  session_expired: 'Your session has expired. Please sign in again.',
};

const SlackMark = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.271 0a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.164 0a2.528 2.528 0 0 1 2.521 2.522v6.312zM15.164 18.956a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.164 24a2.528 2.528 0 0 1-2.521-2.522v-2.522h2.521zm0-1.271a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.314A2.528 2.528 0 0 1 24 15.164a2.528 2.528 0 0 1-2.522 2.521h-6.314z" />
  </svg>
);

/**
 * Shown when there is no valid dashboard login for this workspace link.
 * The only way in is "Sign in with Slack", which the backend verifies against
 * the workspace's admin list.
 */
const SignIn = ({ token, error }) => {
  const message = error ? (ERROR_MESSAGES[error] || 'Sign-in failed. Please try again.') : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-violet-50/30 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl shadow-violet-500/5 border border-gray-100 p-8 sm:p-10 text-center">
        <div className="w-14 h-14 mx-auto mb-6 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-500/20">
          <span className="text-white font-black text-xl">P</span>
        </div>

        <h1 className="text-2xl font-black text-gray-900 tracking-tight mb-2">Sign in to your dashboard</h1>
        <p className="text-sm text-gray-500 mb-8">
          This dashboard is private to your Slack workspace. Sign in with Slack to confirm you're a Pingdesk admin.
        </p>

        {message && (
          <div className="mb-6 text-left text-sm text-amber-800 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
            {message}
          </div>
        )}

        <a
          href={getLoginUrl(token)}
          className="inline-flex w-full items-center justify-center gap-2.5 bg-gray-900 hover:bg-gray-800 text-white font-bold text-sm px-6 py-3.5 rounded-full transition-all shadow-lg hover:-translate-y-0.5"
        >
          <SlackMark />
          Sign in with Slack
        </a>

        <p className="mt-6 text-[12px] text-gray-400">
          Not an admin? Ask the person who installed Pingdesk to add you from the Admins page, or type{' '}
          <code className="font-mono text-gray-500">/pingdesk-request help</code> in Slack.
        </p>
      </div>
    </div>
  );
};

export default SignIn;
