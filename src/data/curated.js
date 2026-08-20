// Curated slug allow-lists for the programmatic SEO sections.
//
// These sections were originally generated at ~200 and ~150 pages with roughly
// 50 words of unique copy each, which reads to search engines as doorway
// content and drags on the whole domain's quality signal. We keep only the
// tools with real search demand and a genuine connection to Slack ticketing,
// and 301 everything else (see scripts/generate-redirects.js).

export const CURATED_INTEGRATIONS = [
  // Development / on-call
  'github', 'gitlab', 'bitbucket', 'sentry', 'datadog', 'pagerduty',
  'opsgenie', 'statuspage', 'vercel', 'aws', 'github-actions',
  // Project management
  'jira', 'asana', 'monday-com', 'trello', 'clickup', 'basecamp',
  'wrike', 'smartsheet', 'airtable', 'notion', 'linear',
  // Communication
  'zoom', 'google-meet', 'microsoft-teams', 'loom', 'calendly',
  // Design
  'figma', 'miro',
  // Analytics
  'google-analytics', 'mixpanel', 'amplitude', 'segment',
  // HR
  'bamboohr', 'gusto', 'rippling', 'workday', 'deel', 'greenhouse', 'lever',
  // Finance
  'quickbooks', 'xero', 'stripe', 'expensify', 'ramp', 'brex',
  // Sales / CRM
  'hubspot', 'salesforce', 'pipedrive',
  // Support
  'zendesk', 'freshdesk', 'intercom-support', 'help-scout', 'servicenow',
  // Security / identity
  'okta', 'auth0', '1password', 'cloudflare', 'snyk',
  // Docs & productivity
  'confluence', 'gitbook', 'google-workspace', 'microsoft-365', 'dropbox',
  'zapier', 'make',
];

export const CURATED_ALTERNATIVES = [
  // Core help desk competitors
  'zendesk', 'freshdesk', 'help-scout', 'zoho-desk', 'happyfox', 'groove',
  'liveagent', 'kayako', 'osticket', 'spiceworks', 'front', 'hiver',
  'gorgias', 'dixa', 'kustomer', 'gladly', 're-amaze', 'deskpro',
  // ITSM / service desk
  'freshservice', 'jira-service-management', 'servicenow', 'manageengine',
  'solarwinds-service-desk', 'sysaid', 'topdesk',
  // Suite support products
  'salesforce-service-cloud', 'hubspot-service-hub',
  // Live chat / messaging
  'intercom', 'crisp', 'tidio', 'livechat', 'freshchat', 'zendesk-chat',
  // Direct Slack-native competitors — highest intent
  'halp', 'clearfeed', 'suptask', 'wrangle', 'slack-workflows',
  // Status-quo workflows people are replacing
  'microsoft-teams', 'google-chat', 'email-based-ticketing', 'shared-inboxes',
  'internal-ticketing-spreadsheets',
  // Work trackers used as ad-hoc ticketing
  'jira', 'trello', 'asana', 'linear', 'notion', 'confluence', 'github-issues',
];
