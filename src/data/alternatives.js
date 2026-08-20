import { CURATED_ALTERNATIVES } from './curated.js';

const alternatives = [
  // ===== HELP DESK / TICKETING =====
  {
    slug: "zendesk",
    name: "Zendesk",
    category: "Help Desk",
    tagline: "Cloud-based customer service and support ticketing platform.",
    pricing: "$19/agent/mo",
    limitations: [
      "Complex setup and steep learning curve for small teams",
      "Pricing escalates quickly as you add agents and features",
      "Requires switching context away from Slack to manage tickets",
      "Overwhelming number of features most teams never use"
    ],
    whyPingdesk: "Pingdesk lets your team handle internal requests directly inside Slack, with zero setup complexity. No need to train anyone on a new tool — just create tickets from messages your team already sends."
  },
  {
    slug: "freshdesk",
    name: "Freshdesk",
    category: "Help Desk",
    tagline: "Omnichannel customer support software by Freshworks.",
    pricing: "$15/agent/mo",
    limitations: [
      "Free tier is very limited and pushes you to upgrade quickly",
      "Agents must leave Slack to check and update tickets",
      "Automation rules can be confusing to configure",
      "Slow customer support response times on lower plans"
    ],
    whyPingdesk: "Pingdesk keeps your team in Slack where they already work. No extra logins, no tab switching — just fast, lightweight ticket management for internal teams."
  },
  {
    slug: "help-scout",
    name: "Help Scout",
    category: "Help Desk",
    tagline: "Email-based help desk for customer conversations.",
    pricing: "$20/user/mo",
    limitations: [
      "Primarily email-focused, not designed for Slack-first teams",
      "Limited internal ticketing capabilities",
      "No native Slack integration for creating or managing tickets",
      "Reporting features are basic on the standard plan"
    ],
    whyPingdesk: "If your team lives in Slack, Pingdesk is the natural fit. Turn any Slack message into a trackable ticket without forcing people to email or use a separate portal."
  },
  {
    slug: "kayako",
    name: "Kayako",
    category: "Help Desk",
    tagline: "Unified customer service platform with live chat and help desk.",
    pricing: "$30/agent/mo",
    limitations: [
      "Expensive per-agent pricing for small teams",
      "Interface feels outdated compared to modern tools",
      "Limited Slack-native workflows",
      "Migration from older Kayako versions is painful"
    ],
    whyPingdesk: "Pingdesk gives you modern, Slack-native ticketing at a fraction of the cost. No clunky interface — just simple ticket management where your team already communicates."
  },
  {
    slug: "liveagent",
    name: "LiveAgent",
    category: "Help Desk",
    tagline: "All-in-one help desk with live chat, call center, and ticketing.",
    pricing: "$9/agent/mo",
    limitations: [
      "UI is cluttered with features most internal teams do not need",
      "Slack integration is limited and not a core workflow",
      "Designed primarily for external customer support",
      "Setup requires significant configuration time"
    ],
    whyPingdesk: "Pingdesk is purpose-built for internal teams on Slack. Skip the call center features you do not need and get straight to resolving team requests in minutes."
  },
  {
    slug: "osticket",
    name: "osTicket",
    category: "Help Desk",
    tagline: "Open-source support ticket system.",
    pricing: "Free (self-hosted)",
    limitations: [
      "Requires self-hosting and server maintenance",
      "No native Slack integration out of the box",
      "Dated user interface that feels stuck in 2010",
      "Limited reporting and analytics capabilities"
    ],
    whyPingdesk: "Pingdesk is a managed SaaS that works inside Slack — no servers to maintain, no interfaces to design. Get up and running in minutes instead of days."
  },
  {
    slug: "happyfox",
    name: "HappyFox",
    category: "Help Desk",
    tagline: "Help desk and customer support software.",
    pricing: "$29/agent/mo",
    limitations: [
      "High per-agent cost adds up for growing teams",
      "Slack integration exists but is not the primary workflow",
      "Knowledge base requires a separate purchase",
      "Limited customization on lower-tier plans"
    ],
    whyPingdesk: "Pingdesk delivers the ticket tracking you need without the premium price tag. Your Slack workspace becomes the help desk — no extra tools required."
  },
  {
    slug: "groove",
    name: "Groove",
    category: "Help Desk",
    tagline: "Simple help desk for small businesses.",
    pricing: "$12/user/mo",
    limitations: [
      "Limited to email-based support workflows",
      "No robust Slack-native ticket creation",
      "Minimal automation and workflow features",
      "Reporting is basic even on paid plans"
    ],
    whyPingdesk: "Pingdesk takes the simplicity Groove offers and moves it into Slack. No email required — your team creates and resolves tickets without leaving their workspace."
  },
  {
    slug: "spiceworks",
    name: "Spiceworks",
    category: "Help Desk",
    tagline: "Free IT help desk and network management tools.",
    pricing: "Free (ad-supported)",
    limitations: [
      "Ad-supported experience can be distracting",
      "Limited to IT use cases, not flexible for other departments",
      "No Slack integration for ticket management",
      "Cloud version has fewer features than the legacy desktop app"
    ],
    whyPingdesk: "Pingdesk is ad-free and works for any department — IT, HR, Design, and more. Manage all internal requests in Slack without the clutter of ads."
  },
  {
    slug: "zoho-desk",
    name: "Zoho Desk",
    category: "Help Desk",
    tagline: "Context-aware help desk software by Zoho.",
    pricing: "$14/agent/mo",
    limitations: [
      "Best experience requires buying into the full Zoho ecosystem",
      "Slack integration is an add-on, not the core experience",
      "Interface can be overwhelming for simple internal ticketing",
      "Free tier limits you to 3 agents"
    ],
    whyPingdesk: "Pingdesk works standalone in Slack — no ecosystem lock-in. Your team gets simple, fast internal ticketing without needing to adopt an entire software suite."
  },
  {
    slug: "otrs",
    name: "OTRS",
    category: "Help Desk",
    tagline: "Open-source IT service management and ticketing.",
    pricing: "Custom pricing",
    limitations: [
      "Complex setup requiring dedicated IT resources",
      "Steep learning curve for agents and administrators",
      "No native Slack workflow integration",
      "Enterprise-focused pricing is opaque"
    ],
    whyPingdesk: "Pingdesk removes the complexity entirely. Install the Slack app, and your team starts creating tickets from messages immediately — no IT project required."
  },
  {
    slug: "request-tracker",
    name: "Request Tracker",
    category: "Help Desk",
    tagline: "Open-source enterprise-grade issue tracking system.",
    pricing: "Free (self-hosted)",
    limitations: [
      "Requires Perl expertise for customization and maintenance",
      "Dated interface that is not intuitive for modern users",
      "Self-hosting demands ongoing server management",
      "No Slack integration without custom development"
    ],
    whyPingdesk: "Pingdesk is a modern, zero-maintenance alternative. Your team tracks requests in Slack without writing any code or managing any servers."
  },
  {
    slug: "mojo-helpdesk",
    name: "Mojo Helpdesk",
    category: "Help Desk",
    tagline: "Simple cloud-based help desk for internal and external tickets.",
    pricing: "$14/agent/mo",
    limitations: [
      "Limited Slack integration capabilities",
      "Basic automation compared to larger competitors",
      "Reporting features are minimal on lower plans",
      "No real-time collaboration features"
    ],
    whyPingdesk: "Pingdesk takes the simplicity of Mojo and puts it directly in Slack. Real-time collaboration happens naturally because tickets live where your team already talks."
  },
  {
    slug: "sysaid",
    name: "SysAid",
    category: "Help Desk",
    tagline: "IT service management and help desk automation.",
    pricing: "Custom pricing",
    limitations: [
      "Primarily designed for IT departments only",
      "Interface can feel outdated and clunky",
      "Pricing is not transparent — requires a sales call",
      "Slack integration is limited to basic notifications"
    ],
    whyPingdesk: "Pingdesk works for every department, not just IT. Any team can create and track requests in Slack with a modern, intuitive experience."
  },
  {
    slug: "ivanti",
    name: "Ivanti",
    category: "Help Desk",
    tagline: "Enterprise IT service management and security platform.",
    pricing: "Custom pricing",
    limitations: [
      "Enterprise-grade complexity overkill for most teams",
      "Expensive licensing and implementation costs",
      "Requires dedicated admin resources to maintain",
      "No Slack-first workflow support"
    ],
    whyPingdesk: "Pingdesk gives you the ticket tracking essentials without enterprise bloat. Perfect for teams that want simplicity over complexity."
  },
  {
    slug: "bmc-helix",
    name: "BMC Helix",
    category: "Help Desk",
    tagline: "AI-powered enterprise service management platform.",
    pricing: "Custom pricing",
    limitations: [
      "Designed for large enterprises with massive IT budgets",
      "Implementation can take months with consultants",
      "Overkill for internal team request management",
      "No lightweight Slack-native option"
    ],
    whyPingdesk: "Pingdesk delivers what most teams actually need: a simple way to track and resolve requests in Slack. Deploy in minutes, not months."
  },
  {
    slug: "topdesk",
    name: "TOPdesk",
    category: "Help Desk",
    tagline: "Service management software for IT and facilities teams.",
    pricing: "Custom pricing",
    limitations: [
      "Pricing requires contacting sales",
      "Primarily focused on European market and ITIL processes",
      "Slack integration is not a core feature",
      "Can be over-engineered for simple request tracking"
    ],
    whyPingdesk: "Pingdesk is the lightweight, Slack-native alternative for teams that want to track requests without adopting heavy ITIL processes."
  },
  {
    slug: "solarwinds-service-desk",
    name: "SolarWinds Service Desk",
    category: "Help Desk",
    tagline: "Cloud-based IT service management solution.",
    pricing: "$19/agent/mo",
    limitations: [
      "Built for IT teams, not flexible for cross-department use",
      "Slack integration is basic notification-only",
      "Asset management focus adds unnecessary complexity",
      "Reporting requires higher-tier plans"
    ],
    whyPingdesk: "Pingdesk is built for any team that uses Slack. Skip the IT-specific features and get straight to tracking and resolving requests."
  },

  // ===== ITSM =====
  {
    slug: "servicenow",
    name: "ServiceNow",
    category: "ITSM",
    tagline: "Enterprise IT service management and digital workflow platform.",
    pricing: "Custom pricing (typically $100+/agent/mo)",
    limitations: [
      "Extremely expensive and complex to implement",
      "Requires dedicated administrators and consultants",
      "Massive overkill for teams that just need request tracking",
      "Months-long implementation timelines"
    ],
    whyPingdesk: "Pingdesk is the anti-ServiceNow. Get Slack-based ticket management running in minutes, not months, at a fraction of the cost."
  },
  {
    slug: "jira-service-management",
    name: "Jira Service Management",
    category: "ITSM",
    tagline: "IT service management by Atlassian, built on Jira.",
    pricing: "$17.65/agent/mo",
    limitations: [
      "Inherits Jira's complexity and steep learning curve",
      "Agents must leave Slack to manage and update tickets",
      "Configuration requires Jira admin expertise",
      "Can be slow and resource-heavy for simple use cases"
    ],
    whyPingdesk: "Pingdesk gives you ticket tracking without the Jira complexity. Your team stays in Slack and resolves requests faster without context switching."
  },
  {
    slug: "manageengine",
    name: "ManageEngine ServiceDesk Plus",
    category: "ITSM",
    tagline: "Comprehensive IT help desk and asset management.",
    pricing: "$10/tech/mo",
    limitations: [
      "Interface is functional but not modern or intuitive",
      "Primarily designed for IT departments",
      "Slack integration is limited to basic notifications",
      "On-premise version requires server management"
    ],
    whyPingdesk: "Pingdesk modernizes request management with a Slack-first approach. Any department can use it, and there are no servers to manage."
  },
  {
    slug: "cherwell",
    name: "Cherwell",
    category: "ITSM",
    tagline: "IT service management with codeless configuration.",
    pricing: "Custom pricing",
    limitations: [
      "Acquired by Ivanti, future direction is uncertain",
      "Enterprise-focused with complex implementation",
      "No Slack-native workflow support",
      "Requires significant training for administrators"
    ],
    whyPingdesk: "Pingdesk requires zero training. Your team already knows Slack — that is all they need to start creating and resolving tickets."
  },
  {
    slug: "hornbill",
    name: "Hornbill",
    category: "ITSM",
    tagline: "Collaborative IT service management platform.",
    pricing: "Custom pricing",
    limitations: [
      "Less well-known with a smaller community and ecosystem",
      "Enterprise-focused pricing and feature set",
      "No Slack-first ticket management",
      "Implementation requires professional services"
    ],
    whyPingdesk: "Pingdesk brings collaborative ticketing to where collaboration already happens — Slack. No professional services needed."
  },
  {
    slug: "easyvista",
    name: "EasyVista",
    category: "ITSM",
    tagline: "IT service management and self-service platform.",
    pricing: "Custom pricing",
    limitations: [
      "Designed for large IT organizations",
      "Pricing is opaque and requires sales engagement",
      "Self-service portals add complexity teams may not need",
      "No Slack-native ticket creation or management"
    ],
    whyPingdesk: "Pingdesk is the self-service your team already wants — they just message in Slack. No portals to build or maintain."
  },
  {
    slug: "teamdynamix",
    name: "TeamDynamix",
    category: "ITSM",
    tagline: "IT service management for higher education and enterprise.",
    pricing: "Custom pricing",
    limitations: [
      "Niche focus on higher education limits flexibility",
      "Complex configuration for simple ticket tracking needs",
      "No Slack-first approach to request management",
      "Requires significant onboarding and training"
    ],
    whyPingdesk: "Pingdesk works for any organization. Install the Slack app and start tracking requests in minutes — no specialized training required."
  },
  {
    slug: "invgate",
    name: "InvGate",
    category: "ITSM",
    tagline: "IT service desk and asset management solution.",
    pricing: "Custom pricing",
    limitations: [
      "Primarily focused on IT asset management alongside ticketing",
      "Limited Slack integration capabilities",
      "Requires setup and configuration time",
      "Not designed for cross-department request management"
    ],
    whyPingdesk: "Pingdesk focuses on what matters most — getting requests resolved fast. Every department can use it, right inside Slack."
  },

  // ===== PROJECT MANAGEMENT =====
  {
    slug: "jira",
    name: "Jira",
    category: "Project Management",
    tagline: "Issue tracking and project management for software teams.",
    pricing: "$7.75/user/mo",
    limitations: [
      "Notoriously complex for non-technical users",
      "Context switching between Jira and Slack slows teams down",
      "Overkill for simple internal requests and approvals",
      "Configuration requires a dedicated Jira administrator"
    ],
    whyPingdesk: "Pingdesk handles the internal requests Jira was never designed for. Keep Jira for engineering sprints and use Pingdesk for everything else — all in Slack."
  },
  {
    slug: "asana",
    name: "Asana",
    category: "Project Management",
    tagline: "Work management platform for team collaboration.",
    pricing: "$10.99/user/mo",
    limitations: [
      "Requires team adoption of yet another tool outside Slack",
      "Not designed for quick service requests and approvals",
      "Can become cluttered with mixed project and request tasks",
      "Learning curve for teams used to simpler workflows"
    ],
    whyPingdesk: "Pingdesk is for requests, not projects. Turn Slack messages into trackable tickets without adding another tool your team needs to check."
  },
  {
    slug: "monday",
    name: "Monday.com",
    category: "Project Management",
    tagline: "Work operating system for managing projects and workflows.",
    pricing: "$8/seat/mo",
    limitations: [
      "Per-seat pricing gets expensive for large teams",
      "Too feature-rich for simple request tracking",
      "Teams must leave Slack to update task statuses",
      "Boards can become complex and hard to navigate"
    ],
    whyPingdesk: "Pingdesk keeps request tracking simple and Slack-native. No boards to design, no seats to purchase for every team member."
  },
  {
    slug: "trello",
    name: "Trello",
    category: "Project Management",
    tagline: "Visual kanban board for task and project management.",
    pricing: "$5/user/mo",
    limitations: [
      "Kanban boards are not ideal for tracking service requests",
      "No built-in SLA tracking or request routing",
      "Cards get lost as boards grow large",
      "Limited reporting on request resolution times"
    ],
    whyPingdesk: "Pingdesk is purpose-built for requests, not projects. Track who asked for what, when it was resolved, and never lose a request in a crowded board."
  },
  {
    slug: "clickup",
    name: "ClickUp",
    category: "Project Management",
    tagline: "All-in-one productivity and project management platform.",
    pricing: "$7/member/mo",
    limitations: [
      "Feature bloat makes it overwhelming for simple use cases",
      "Steep learning curve with constant new feature additions",
      "Slack integration exists but is not the primary interface",
      "Performance can be slow with large workspaces"
    ],
    whyPingdesk: "Pingdesk does one thing well — Slack-based ticket management. No feature bloat, no learning curve, just simple request tracking."
  },
  {
    slug: "basecamp",
    name: "Basecamp",
    category: "Project Management",
    tagline: "Project management and team communication tool.",
    pricing: "$11/user/mo",
    limitations: [
      "Not designed for service request or ticket workflows",
      "Limited customization for different department needs",
      "No SLA tracking or automated ticket routing",
      "Competes with Slack for team communication"
    ],
    whyPingdesk: "Pingdesk complements Slack rather than competing with it. Turn conversations into trackable requests without adding another communication tool."
  },
  {
    slug: "wrike",
    name: "Wrike",
    category: "Project Management",
    tagline: "Versatile project management and collaboration platform.",
    pricing: "$9.80/user/mo",
    limitations: [
      "Complex interface with a steep learning curve",
      "Not optimized for quick internal request handling",
      "Slack integration is supplementary, not core",
      "Per-user pricing adds up for large organizations"
    ],
    whyPingdesk: "Pingdesk replaces the complexity with Slack simplicity. Your team submits and tracks requests where they already work, with zero learning curve."
  },
  {
    slug: "smartsheet",
    name: "Smartsheet",
    category: "Project Management",
    tagline: "Spreadsheet-based project and work management platform.",
    pricing: "$7/user/mo",
    limitations: [
      "Spreadsheet interface is not ideal for ticket tracking",
      "No native Slack-first request management",
      "Complex formulas and automations require training",
      "Not designed for real-time request resolution"
    ],
    whyPingdesk: "Pingdesk moves you beyond spreadsheets to proper Slack-based ticketing. Real-time updates, automatic tracking, and no formulas to maintain."
  },
  {
    slug: "teamwork",
    name: "Teamwork",
    category: "Project Management",
    tagline: "Project management for client work and team collaboration.",
    pricing: "$5.99/user/mo",
    limitations: [
      "Focused on client projects, not internal request management",
      "No built-in service desk or ticketing functionality",
      "Slack integration is limited to notifications",
      "Requires context switching for internal requests"
    ],
    whyPingdesk: "Pingdesk fills the gap Teamwork leaves — fast, Slack-native internal request management that does not require a project setup."
  },
  {
    slug: "hive",
    name: "Hive",
    category: "Project Management",
    tagline: "Project management platform with AI-powered features.",
    pricing: "$5/user/mo",
    limitations: [
      "Relatively new with a smaller feature set than competitors",
      "Not purpose-built for service request workflows",
      "Slack integration is basic",
      "Limited SLA and request tracking capabilities"
    ],
    whyPingdesk: "Pingdesk is purpose-built for what Hive is not — tracking and resolving internal requests directly inside Slack."
  },
  {
    slug: "workfront",
    name: "Workfront",
    category: "Project Management",
    tagline: "Enterprise work management platform by Adobe.",
    pricing: "Custom pricing",
    limitations: [
      "Enterprise pricing puts it out of reach for smaller teams",
      "Complex setup and configuration process",
      "Designed for marketing operations, not general request tracking",
      "No Slack-native request management"
    ],
    whyPingdesk: "Pingdesk democratizes request management. Any team, any size, can track requests in Slack without enterprise complexity or pricing."
  },
  {
    slug: "airtable",
    name: "Airtable",
    category: "Project Management",
    tagline: "Flexible database and spreadsheet hybrid for teams.",
    pricing: "$10/seat/mo",
    limitations: [
      "Requires building your own ticketing workflow from scratch",
      "No built-in SLA tracking or ticket routing",
      "Team members must leave Slack to update records",
      "Gets expensive as your data and team grows"
    ],
    whyPingdesk: "Pingdesk gives you a ready-made ticketing system in Slack — no database design required. Stop building and start resolving requests."
  },
  {
    slug: "notion",
    name: "Notion",
    category: "Project Management",
    tagline: "All-in-one workspace for notes, docs, and project management.",
    pricing: "$8/user/mo",
    limitations: [
      "Not designed for ticket tracking or request management",
      "Databases require manual setup for ticketing workflows",
      "No SLA tracking or automatic ticket routing",
      "Team members must leave Slack to update ticket statuses"
    ],
    whyPingdesk: "Pingdesk does what Notion databases try to do — but natively in Slack with built-in ticket workflows, tracking, and resolution."
  },
  {
    slug: "linear",
    name: "Linear",
    category: "Project Management",
    tagline: "Fast issue tracking for modern software teams.",
    pricing: "$8/user/mo",
    limitations: [
      "Focused on engineering teams and software development",
      "Not designed for cross-department internal requests",
      "Non-technical users find it intimidating",
      "Limited to issue tracking, not service requests"
    ],
    whyPingdesk: "Pingdesk extends request tracking beyond engineering. Every department gets Slack-based ticketing that is as fast and simple as Linear."
  },
  {
    slug: "shortcut",
    name: "Shortcut",
    category: "Project Management",
    tagline: "Project management for software development teams.",
    pricing: "$8.50/user/mo",
    limitations: [
      "Engineering-focused, not suitable for all departments",
      "No service request or internal ticketing workflows",
      "Requires team adoption outside of Slack",
      "Limited to software development use cases"
    ],
    whyPingdesk: "Pingdesk brings the simplicity of modern issue trackers to every department — all inside Slack, no engineering background needed."
  },
  {
    slug: "todoist",
    name: "Todoist",
    category: "Task Management",
    tagline: "Personal and team task management application.",
    pricing: "$4/user/mo",
    limitations: [
      "Personal task tool, not designed for team request tracking",
      "No ticket routing, SLA tracking, or assignment workflows",
      "Cannot track request status across teams",
      "No visibility into team-wide request queues"
    ],
    whyPingdesk: "Pingdesk replaces personal task lists with team-wide request tracking in Slack. See every request, who owns it, and when it was resolved."
  },
  {
    slug: "any-do",
    name: "Any.do",
    category: "Task Management",
    tagline: "Task management and daily planner app.",
    pricing: "$3/user/mo",
    limitations: [
      "Designed for personal productivity, not team workflows",
      "No ticketing or request management features",
      "Cannot handle multi-team request routing",
      "No Slack integration for request creation"
    ],
    whyPingdesk: "Pingdesk turns Slack conversations into team tickets — something personal task apps were never built to do."
  },
  {
    slug: "ticktick",
    name: "TickTick",
    category: "Task Management",
    tagline: "Task management and habit tracking app.",
    pricing: "$2.79/mo",
    limitations: [
      "Personal productivity focus, not team collaboration",
      "No service request workflows or ticket tracking",
      "Cannot route requests between departments",
      "No Slack-based ticket creation"
    ],
    whyPingdesk: "Pingdesk is built for team requests, not personal habits. Track, assign, and resolve internal tickets directly in Slack."
  },
  {
    slug: "workast",
    name: "Workast",
    category: "Task Management",
    tagline: "Task management app built for Slack.",
    pricing: "$5.99/user/mo",
    limitations: [
      "Task management only, lacks ticketing-specific features",
      "No SLA tracking or request categorization",
      "Limited reporting on resolution times",
      "Not designed for service request workflows"
    ],
    whyPingdesk: "Pingdesk goes beyond tasks to proper ticketing — with categories, assignments, tracking, and resolution workflows all in Slack."
  },

  // ===== COMMUNICATION =====
  {
    slug: "microsoft-teams",
    name: "Microsoft Teams",
    category: "Communication",
    tagline: "Business communication and collaboration platform by Microsoft.",
    pricing: "$4/user/mo",
    limitations: [
      "No built-in ticketing or request tracking system",
      "Messages get buried in channels with no follow-up tracking",
      "Requires third-party apps for any service desk functionality",
      "Teams-based organizations still lose track of requests"
    ],
    whyPingdesk: "For Slack-based teams, Pingdesk adds the request tracking layer that messaging apps lack. Never lose a request in the chat stream again."
  },
  {
    slug: "email-based-ticketing",
    name: "Email",
    category: "Communication",
    tagline: "Traditional email-based request management.",
    pricing: "Free",
    limitations: [
      "Requests get buried in crowded inboxes",
      "No visibility into request status or ownership",
      "Impossible to track SLAs or resolution times",
      "Email threads become confusing with multiple stakeholders"
    ],
    whyPingdesk: "Pingdesk replaces email chaos with structured Slack tickets. Every request is visible, assigned, and trackable — no more inbox archaeology."
  },
  {
    slug: "workplace-from-meta",
    name: "Workplace from Meta",
    category: "Communication",
    tagline: "Enterprise communication platform by Meta.",
    pricing: "$4/person/mo",
    limitations: [
      "Being shut down by Meta in 2026",
      "No built-in ticketing or request management",
      "Teams migrating away need a new communication workflow",
      "Limited integration ecosystem compared to Slack"
    ],
    whyPingdesk: "As teams migrate from Workplace to Slack, Pingdesk provides the request management layer from day one. Make the transition productive immediately."
  },
  {
    slug: "google-chat",
    name: "Google Chat",
    category: "Communication",
    tagline: "Team messaging platform integrated with Google Workspace.",
    pricing: "Included with Google Workspace ($6/user/mo)",
    limitations: [
      "No ticketing or request tracking capabilities",
      "Messages disappear in busy Spaces with no accountability",
      "Limited third-party app ecosystem compared to Slack",
      "No way to convert messages into trackable requests"
    ],
    whyPingdesk: "Pingdesk is built for Slack-first teams who need request tracking. If your team uses Slack, Pingdesk turns conversations into accountability."
  },
  {
    slug: "webex",
    name: "Webex",
    category: "Communication",
    tagline: "Video conferencing and team messaging by Cisco.",
    pricing: "$12/user/mo",
    limitations: [
      "Primarily a video and meeting tool, not for request management",
      "No internal ticketing or service request features",
      "Limited app ecosystem for workflow automation",
      "Not where most modern teams do asynchronous work"
    ],
    whyPingdesk: "Pingdesk lives where async work happens — Slack. For teams that collaborate in Slack, Pingdesk adds structured request management."
  },

  // ===== CRM / SUPPORT =====
  {
    slug: "salesforce-service-cloud",
    name: "Salesforce Service Cloud",
    category: "CRM",
    tagline: "Enterprise customer service and support platform.",
    pricing: "$25/user/mo",
    limitations: [
      "Extremely expensive and complex for internal ticketing",
      "Designed for external customer support, not internal teams",
      "Requires Salesforce ecosystem buy-in and admin expertise",
      "Implementation and customization costs are significant"
    ],
    whyPingdesk: "Pingdesk is the lightweight internal ticketing that Salesforce is not. No CRM needed — just Slack-based request management for your team."
  },
  {
    slug: "hubspot-service-hub",
    name: "HubSpot Service Hub",
    category: "CRM",
    tagline: "Customer service software tied to HubSpot CRM.",
    pricing: "$15/seat/mo",
    limitations: [
      "Tightly coupled with HubSpot CRM ecosystem",
      "Not designed for internal team request management",
      "Per-seat pricing makes company-wide adoption expensive",
      "Overkill for teams that just need internal ticketing"
    ],
    whyPingdesk: "Pingdesk does not require a CRM. It is pure, simple Slack-based ticketing for internal teams — no marketing stack needed."
  },
  {
    slug: "intercom",
    name: "Intercom",
    category: "CRM",
    tagline: "Customer messaging and support automation platform.",
    pricing: "$39/seat/mo",
    limitations: [
      "Very expensive for internal use cases",
      "Designed for customer-facing chat, not internal requests",
      "Complex feature set for teams that need simple ticketing",
      "No Slack-native internal ticket management"
    ],
    whyPingdesk: "Pingdesk brings the simplicity of chat-based support to your internal teams — at a fraction of Intercom's price, all inside Slack."
  },
  {
    slug: "drift",
    name: "Drift",
    category: "CRM",
    tagline: "Conversational marketing and sales platform.",
    pricing: "Custom pricing",
    limitations: [
      "Focused on sales and marketing, not internal operations",
      "Expensive for non-revenue-generating use cases",
      "No internal ticketing or request management features",
      "Not designed for Slack-based workflows"
    ],
    whyPingdesk: "Pingdesk takes the conversational approach and applies it internally. Your team chats in Slack, Pingdesk tracks the requests that come out of those chats."
  },
  {
    slug: "crisp",
    name: "Crisp",
    category: "CRM",
    tagline: "Business messaging platform for startups and SMBs.",
    pricing: "$25/workspace/mo",
    limitations: [
      "Customer-facing chat focus, not internal operations",
      "Limited Slack integration for internal workflows",
      "No internal ticket tracking or request management",
      "Workspace pricing limits scalability"
    ],
    whyPingdesk: "Pingdesk is built for internal teams, not customers. Track every internal request in Slack without repurposing a customer chat tool."
  },
  {
    slug: "tidio",
    name: "Tidio",
    category: "CRM",
    tagline: "Live chat and chatbot platform for customer support.",
    pricing: "$19/mo",
    limitations: [
      "Designed for website chat, not internal Slack requests",
      "No internal ticketing capabilities",
      "Chatbot features are irrelevant for internal operations",
      "No Slack-native workflow support"
    ],
    whyPingdesk: "Pingdesk is the internal version of what Tidio does externally. Turn Slack conversations into structured, trackable internal tickets."
  },
  {
    slug: "livechat",
    name: "LiveChat",
    category: "CRM",
    tagline: "Customer service platform with live chat and help desk.",
    pricing: "$20/agent/mo",
    limitations: [
      "Built for external customer conversations",
      "Per-agent pricing is expensive for internal-only use",
      "No Slack-native request management",
      "Requires a separate product (HelpDesk) for ticketing"
    ],
    whyPingdesk: "Pingdesk combines chat and ticketing in one Slack-native experience. No separate products, no external-facing features you do not need."
  },
  {
    slug: "olark",
    name: "Olark",
    category: "CRM",
    tagline: "Simple live chat for sales and customer support.",
    pricing: "$29/seat/mo",
    limitations: [
      "Website chat only, no internal request tracking",
      "No Slack-based ticket creation or management",
      "Limited to customer-facing conversations",
      "No workflow automation for internal processes"
    ],
    whyPingdesk: "Pingdesk takes the simplicity of live chat and applies it to internal requests — all within Slack where your team already communicates."
  },
  {
    slug: "tawk-to",
    name: "tawk.to",
    category: "CRM",
    tagline: "Free live chat software for customer support.",
    pricing: "Free",
    limitations: [
      "Designed for website visitors, not internal teams",
      "No ticket management or request tracking for employees",
      "No Slack integration for internal workflows",
      "Ad-supported free model may not suit all organizations"
    ],
    whyPingdesk: "Pingdesk gives your internal teams what tawk.to gives your customers — fast, chat-based support, but inside Slack."
  },
  {
    slug: "freshchat",
    name: "Freshchat",
    category: "CRM",
    tagline: "Modern messaging for customer engagement by Freshworks.",
    pricing: "$15/agent/mo",
    limitations: [
      "Customer messaging tool, not designed for internal requests",
      "Requires the Freshworks ecosystem for full functionality",
      "No Slack-native ticket management",
      "Per-agent pricing adds up for internal-only use"
    ],
    whyPingdesk: "Pingdesk is chat-based ticketing built for internal teams. No customer engagement features you do not need — just Slack tickets."
  },

  // ===== APPROVAL / WORKFLOW =====
  {
    slug: "wrangle",
    name: "Wrangle",
    category: "Approval / Workflow",
    tagline: "Slack-based ticketing and request management.",
    pricing: "$5/user/mo",
    limitations: [
      "Limited feature set compared to full help desk solutions",
      "Smaller company with fewer resources and integrations",
      "Basic reporting and analytics capabilities",
      "Limited customization options for complex workflows"
    ],
    whyPingdesk: "Pingdesk offers a richer Slack-native ticketing experience with better tracking, reporting, and workflow capabilities while staying simple to use."
  },
  {
    slug: "clearfeed",
    name: "ClearFeed",
    category: "Approval / Workflow",
    tagline: "Slack-based customer and internal support platform.",
    pricing: "$15/agent/mo",
    limitations: [
      "Primarily focused on customer support via Slack",
      "Higher per-agent pricing for internal-only use cases",
      "Feature set oriented toward external customer management",
      "Can be more than needed for simple internal requests"
    ],
    whyPingdesk: "Pingdesk is laser-focused on internal team requests. Get exactly what you need for internal ticketing without paying for customer support features."
  },
  {
    slug: "suptask",
    name: "Suptask",
    category: "Approval / Workflow",
    tagline: "Ticketing system that works directly inside Slack.",
    pricing: "$7/agent/mo",
    limitations: [
      "Relatively new product with evolving feature set",
      "Limited integration ecosystem outside of Slack",
      "Reporting capabilities are still developing",
      "Fewer workflow automation options than established tools"
    ],
    whyPingdesk: "Pingdesk delivers a mature, feature-rich Slack ticketing experience with robust tracking, flexible workflows, and comprehensive reporting."
  },
  {
    slug: "halp",
    name: "Halp",
    category: "Approval / Workflow",
    tagline: "Slack and Teams ticketing by Atlassian.",
    pricing: "$15/agent/mo",
    limitations: [
      "Acquired by Atlassian, being merged into Jira Service Management",
      "Future as a standalone product is uncertain",
      "Requires Atlassian ecosystem for full functionality",
      "Pricing has increased since acquisition"
    ],
    whyPingdesk: "Pingdesk is an independent, dedicated Slack ticketing platform. No ecosystem lock-in, no uncertain product roadmap — just reliable Slack-based ticketing."
  },
  {
    slug: "polly",
    name: "Polly",
    category: "Approval / Workflow",
    tagline: "Surveys, polls, and workflow automation in Slack.",
    pricing: "$2/user/mo",
    limitations: [
      "Polling and survey tool, not a ticketing system",
      "Cannot track request status or ownership",
      "No SLA tracking or resolution workflows",
      "Not designed for service request management"
    ],
    whyPingdesk: "Pingdesk goes beyond surveys to actual ticket management. Track requests from creation to resolution, not just collect poll responses."
  },
  {
    slug: "workato",
    name: "Workato",
    category: "Approval / Workflow",
    tagline: "Enterprise automation and integration platform.",
    pricing: "Custom pricing (typically $10K+/year)",
    limitations: [
      "Extremely expensive for simple ticketing needs",
      "Requires building custom workflows from scratch",
      "Not a ticketing tool — it is an automation platform",
      "Complex setup requires technical expertise"
    ],
    whyPingdesk: "Pingdesk gives you Slack ticketing out of the box. No custom workflows to build, no enterprise pricing — just install and start tracking requests."
  },
  {
    slug: "zapier",
    name: "Zapier",
    category: "Approval / Workflow",
    tagline: "No-code automation platform connecting thousands of apps.",
    pricing: "$19.99/mo",
    limitations: [
      "Automation tool, not a ticketing system",
      "Building a ticketing workflow requires multiple Zaps",
      "No built-in ticket UI, tracking, or reporting",
      "Zaps can break and require ongoing maintenance"
    ],
    whyPingdesk: "Pingdesk is a complete ticketing solution, not a DIY automation. Get Slack-based ticket management without stitching together Zaps."
  },
  {
    slug: "make",
    name: "Make",
    category: "Approval / Workflow",
    tagline: "Visual automation platform (formerly Integromat).",
    pricing: "$9/mo",
    limitations: [
      "Automation platform, not designed for ticketing",
      "Building ticket workflows requires technical knowledge",
      "No native ticket interface or reporting",
      "Scenarios require ongoing maintenance and monitoring"
    ],
    whyPingdesk: "Pingdesk is a purpose-built Slack ticketing tool. Skip the scenario building and get a complete ticket management system in minutes."
  },

  // ===== INTERNAL TOOLS =====
  {
    slug: "retool",
    name: "Retool",
    category: "Internal Tools",
    tagline: "Platform for building custom internal tools quickly.",
    pricing: "$10/user/mo",
    limitations: [
      "Requires building your own ticketing interface from scratch",
      "Developer time needed to create and maintain the tool",
      "No out-of-the-box Slack ticket management",
      "Ongoing maintenance burden for custom applications"
    ],
    whyPingdesk: "Pingdesk is the internal tool you do not have to build. Get Slack-based ticketing immediately without developer time or custom code."
  },
  {
    slug: "budibase",
    name: "Budibase",
    category: "Internal Tools",
    tagline: "Open-source low-code platform for internal tools.",
    pricing: "Free (self-hosted) / $5/user/mo",
    limitations: [
      "Must design and build your own ticketing application",
      "Self-hosted version requires infrastructure management",
      "No Slack-native experience out of the box",
      "Time investment to build what dedicated tools offer for free"
    ],
    whyPingdesk: "Pingdesk saves you the build time. Instead of creating a custom ticketing app, install Pingdesk and manage requests in Slack immediately."
  },
  {
    slug: "appsmith",
    name: "Appsmith",
    category: "Internal Tools",
    tagline: "Open-source framework for building internal apps.",
    pricing: "Free (self-hosted) / $40/user/mo",
    limitations: [
      "Requires building a ticketing app from scratch",
      "Development and maintenance overhead",
      "No native Slack ticket management",
      "Expensive cloud-hosted pricing per user"
    ],
    whyPingdesk: "Pingdesk eliminates the build-vs-buy debate for internal ticketing. Ready-made Slack ticketing that works in minutes, not weeks."
  },
  {
    slug: "internal-ticketing-spreadsheets",
    name: "Internal Ticketing Spreadsheets",
    category: "Internal Tools",
    tagline: "Using Google Sheets or Excel to track internal requests.",
    pricing: "Free",
    limitations: [
      "No automation, notifications, or SLA tracking",
      "Manual updates lead to stale and inaccurate data",
      "No accountability — anyone can edit or delete entries",
      "Impossible to scale as request volume grows"
    ],
    whyPingdesk: "Pingdesk replaces your spreadsheet with automated Slack ticketing. Tickets are created from messages, assigned automatically, and tracked in real-time."
  },
  {
    slug: "shared-inboxes",
    name: "Shared Inboxes",
    category: "Internal Tools",
    tagline: "Using shared email inboxes (e.g., support@, it@) for requests.",
    pricing: "Free",
    limitations: [
      "Emails get buried and requests are missed",
      "No clear ownership or assignment tracking",
      "Duplicate responses when multiple people reply",
      "Zero visibility into request status or resolution times"
    ],
    whyPingdesk: "Pingdesk replaces shared inboxes with Slack-based tickets that have clear ownership, status tracking, and no duplicate responses."
  },

  // ===== ADDITIONAL HELP DESK / TICKETING =====
  {
    slug: "deskpro",
    name: "Deskpro",
    category: "Help Desk",
    tagline: "Multi-channel help desk software for support teams.",
    pricing: "$29/agent/mo",
    limitations: [
      "Multi-channel complexity is unnecessary for internal teams",
      "Per-agent pricing is expensive for company-wide use",
      "Requires agents to work outside of Slack",
      "Configuration and setup takes significant time"
    ],
    whyPingdesk: "Pingdesk is single-channel simplicity — Slack. No multi-channel overhead for internal teams that already communicate in one place."
  },
  {
    slug: "jitbit",
    name: "Jitbit Helpdesk",
    category: "Help Desk",
    tagline: "Simple, fast help desk for IT support teams.",
    pricing: "$29/agent/mo",
    limitations: [
      "Email-centric design does not match modern Slack workflows",
      "Limited Slack integration capabilities",
      "Self-hosted version requires server management",
      "Primarily designed for IT, not cross-department use"
    ],
    whyPingdesk: "Pingdesk modernizes the help desk experience by putting it where your team works — Slack. No email required, no servers to manage."
  },
  {
    slug: "teamviewer-servicecamp",
    name: "TeamViewer Service Desk",
    category: "Help Desk",
    tagline: "Service desk integrated with TeamViewer remote support.",
    pricing: "$8.90/agent/mo",
    limitations: [
      "Tightly coupled with TeamViewer remote access",
      "Limited standalone ticketing capabilities",
      "No Slack-native request management",
      "Best suited for IT remote support, not general requests"
    ],
    whyPingdesk: "Pingdesk works independently in Slack for any type of internal request — no remote access software needed."
  },
  {
    slug: "freshservice",
    name: "Freshservice",
    category: "ITSM",
    tagline: "Cloud-based IT service management by Freshworks.",
    pricing: "$19/agent/mo",
    limitations: [
      "Focused on ITIL processes that most teams do not need",
      "Per-agent pricing increases costs as teams grow",
      "Requires agents to work outside Slack",
      "Asset management features add unnecessary complexity"
    ],
    whyPingdesk: "Pingdesk strips away ITIL complexity and gives your team Slack-native ticketing. Handle requests fast without formal processes getting in the way."
  },
  {
    slug: "connectwise-manage",
    name: "ConnectWise Manage",
    category: "Help Desk",
    tagline: "Business management platform for IT solution providers.",
    pricing: "Custom pricing",
    limitations: [
      "Designed for managed service providers, not internal teams",
      "Extremely complex with steep learning curve",
      "No Slack-native workflow support",
      "Pricing requires sales engagement"
    ],
    whyPingdesk: "Pingdesk is built for internal teams, not MSPs. Simple Slack ticketing without the managed-services complexity."
  },
  {
    slug: "autotask",
    name: "Datto Autotask",
    category: "Help Desk",
    tagline: "PSA platform for managed service providers.",
    pricing: "Custom pricing",
    limitations: [
      "MSP-focused tool, not for internal company use",
      "Complex billing and project management features are irrelevant",
      "No Slack integration for internal request management",
      "Requires Datto ecosystem investment"
    ],
    whyPingdesk: "Pingdesk focuses purely on internal request management in Slack — no MSP features, no billing modules, just clean ticketing."
  },
  {
    slug: "supportbee",
    name: "SupportBee",
    category: "Help Desk",
    tagline: "Email-based customer support ticketing system.",
    pricing: "$13/user/mo",
    limitations: [
      "Email-only approach does not work for Slack-first teams",
      "No real-time collaboration on tickets",
      "Limited automation and workflow capabilities",
      "No Slack-native ticket creation or management"
    ],
    whyPingdesk: "Pingdesk moves beyond email to real-time Slack ticketing. Collaborate on requests instantly instead of waiting for email replies."
  },
  {
    slug: "supportpal",
    name: "SupportPal",
    category: "Help Desk",
    tagline: "Self-hosted customer support help desk software.",
    pricing: "$99/license (self-hosted)",
    limitations: [
      "Self-hosted requires server infrastructure and maintenance",
      "No native Slack integration",
      "Dated interface compared to modern SaaS tools",
      "Customer support focused, not for internal operations"
    ],
    whyPingdesk: "Pingdesk is a cloud SaaS that works in Slack — no self-hosting, no infrastructure costs, and it is built for internal teams."
  },
  {
    slug: "useresponse",
    name: "UseResponse",
    category: "Help Desk",
    tagline: "Customer feedback and support suite.",
    pricing: "$49/agent/mo",
    limitations: [
      "High per-agent cost for a feedback-focused tool",
      "More suited for customer feedback than internal requests",
      "No Slack-first ticket management",
      "Complex feature set for simple internal needs"
    ],
    whyPingdesk: "Pingdesk handles internal requests at a lower cost with a simpler interface, all within the Slack your team already uses."
  },

  // ===== ADDITIONAL PROJECT MANAGEMENT =====
  {
    slug: "microsoft-planner",
    name: "Microsoft Planner",
    category: "Project Management",
    tagline: "Task management tool within Microsoft 365.",
    pricing: "Included with Microsoft 365 ($6/user/mo)",
    limitations: [
      "Basic task boards without ticketing features",
      "Tightly coupled with Microsoft Teams ecosystem",
      "No SLA tracking or request routing",
      "Not suitable for service request management"
    ],
    whyPingdesk: "For Slack-based teams, Pingdesk is the native alternative. Real ticketing features, not just task boards, right in Slack."
  },
  {
    slug: "microsoft-project",
    name: "Microsoft Project",
    category: "Project Management",
    tagline: "Enterprise project management by Microsoft.",
    pricing: "$10/user/mo",
    limitations: [
      "Heavy project management tool, not for quick requests",
      "Requires Microsoft 365 ecosystem",
      "Steep learning curve with Gantt charts and resource planning",
      "No Slack integration for request management"
    ],
    whyPingdesk: "Pingdesk handles the quick requests and approvals that project management tools are too heavy for — all inside Slack."
  },
  {
    slug: "pivotal-tracker",
    name: "Pivotal Tracker",
    category: "Project Management",
    tagline: "Agile project management for software teams.",
    pricing: "$10/user/mo",
    limitations: [
      "Engineering-focused agile tool, not for general requests",
      "Velocity-based workflow is confusing for non-developers",
      "No internal service request capabilities",
      "No Slack-native experience"
    ],
    whyPingdesk: "Pingdesk is agile without the agile jargon. Every team tracks requests in Slack with simple, intuitive workflows."
  },
  {
    slug: "nifty",
    name: "Nifty",
    category: "Project Management",
    tagline: "Project management with milestones and task tracking.",
    pricing: "$5/member/mo",
    limitations: [
      "Project-focused, not designed for service requests",
      "No ticketing workflow or SLA management",
      "Slack integration limited to notifications",
      "Cannot handle request routing between departments"
    ],
    whyPingdesk: "Pingdesk adds the request management layer that project tools miss. Route, track, and resolve requests across departments in Slack."
  },
  {
    slug: "height",
    name: "Height",
    category: "Project Management",
    tagline: "AI-powered project management for autonomous teams.",
    pricing: "$6.99/user/mo",
    limitations: [
      "Newer tool with a smaller user community",
      "Engineering-oriented, not built for cross-department requests",
      "No service desk or internal ticketing features",
      "Limited Slack integration depth"
    ],
    whyPingdesk: "Pingdesk brings request tracking to every team, not just engineering. AI-powered or not, the simplest solution is the one that lives where you work."
  },
  {
    slug: "pendo",
    name: "Pendo",
    category: "Project Management",
    tagline: "Product analytics and user feedback platform.",
    pricing: "Custom pricing",
    limitations: [
      "Product analytics tool, not for internal requests",
      "Expensive enterprise pricing for non-core use",
      "No internal ticketing or request management",
      "Focused on user behavior, not team operations"
    ],
    whyPingdesk: "Pingdesk handles the internal operational requests that product analytics tools were never designed for — simply and efficiently in Slack."
  },
  {
    slug: "coda",
    name: "Coda",
    category: "Project Management",
    tagline: "Collaborative document and workflow platform.",
    pricing: "$10/doc maker/mo",
    limitations: [
      "Requires building custom ticket tracking documents",
      "No built-in ticketing workflows or SLA tracking",
      "Team must learn a new tool outside of Slack",
      "Custom docs require ongoing maintenance"
    ],
    whyPingdesk: "Pingdesk is a ready-made ticketing system for Slack. No docs to build or maintain — just install and start tracking requests."
  },
  {
    slug: "zoho-projects",
    name: "Zoho Projects",
    category: "Project Management",
    tagline: "Online project management by Zoho.",
    pricing: "$4/user/mo",
    limitations: [
      "Best experience requires broader Zoho ecosystem adoption",
      "Not designed for internal service requests",
      "Slack integration is minimal",
      "Aimed at project tracking, not quick request resolution"
    ],
    whyPingdesk: "Pingdesk is standalone Slack ticketing — no ecosystem required. Perfect for teams that just want to track and resolve requests fast."
  },
  {
    slug: "meistertask",
    name: "MeisterTask",
    category: "Project Management",
    tagline: "Intuitive kanban-style task management.",
    pricing: "$6.50/user/mo",
    limitations: [
      "Task boards are not optimized for ticket workflows",
      "No SLA tracking or automatic request routing",
      "Team members must leave Slack to manage tasks",
      "Limited reporting for service request metrics"
    ],
    whyPingdesk: "Pingdesk provides ticket-specific workflows that task boards cannot match — with SLA tracking, assignments, and status updates in Slack."
  },
  {
    slug: "freedcamp",
    name: "Freedcamp",
    category: "Project Management",
    tagline: "Free project management and collaboration tool.",
    pricing: "Free / $1.49/user/mo",
    limitations: [
      "Very basic feature set on free plan",
      "No ticketing or service request management",
      "No meaningful Slack integration",
      "Limited scalability for growing teams"
    ],
    whyPingdesk: "Pingdesk gives you more than a free project tool — proper ticket management in Slack that scales with your team."
  },
  {
    slug: "podio",
    name: "Podio",
    category: "Project Management",
    tagline: "Customizable work management platform by Citrix.",
    pricing: "$11.20/user/mo",
    limitations: [
      "Requires heavy customization to function as a ticketing tool",
      "Citrix ecosystem dependency",
      "Learning curve for building custom workflows",
      "No out-of-the-box Slack ticketing"
    ],
    whyPingdesk: "Pingdesk needs zero customization. Install it in Slack and your team immediately has a working ticketing system."
  },

  // ===== ADDITIONAL CRM / SUPPORT =====
  {
    slug: "zendesk-chat",
    name: "Zendesk Chat",
    category: "CRM",
    tagline: "Live chat software for customer engagement.",
    pricing: "$19/agent/mo",
    limitations: [
      "Customer-facing chat, not for internal team requests",
      "Part of the expensive Zendesk suite",
      "No Slack-native internal ticketing",
      "Requires separate ticketing product for full workflow"
    ],
    whyPingdesk: "Pingdesk is chat-based ticketing built for internal teams inside Slack. No customer-facing features to pay for when you need internal request tracking."
  },
  {
    slug: "front",
    name: "Front",
    category: "CRM",
    tagline: "Shared inbox for team email and customer communication.",
    pricing: "$19/seat/mo",
    limitations: [
      "Email-first approach that duplicates Slack conversations",
      "Expensive per-seat pricing for internal-only use",
      "Not designed for Slack-native request management",
      "Adding another communication tool increases complexity"
    ],
    whyPingdesk: "Pingdesk keeps everything in Slack instead of adding another inbox. Manage internal requests where the conversation already happens."
  },
  {
    slug: "helpjuice",
    name: "Helpjuice",
    category: "Help Desk",
    tagline: "Knowledge base software for internal and external use.",
    pricing: "$120/4 users/mo",
    limitations: [
      "Knowledge base only, no ticketing or request management",
      "Very expensive for small teams",
      "Does not handle active requests or approvals",
      "No Slack-native request creation"
    ],
    whyPingdesk: "Pingdesk handles the requests that knowledge bases cannot — active tickets that need assignment, tracking, and resolution in Slack."
  },
  {
    slug: "document360",
    name: "Document360",
    category: "Help Desk",
    tagline: "AI-powered knowledge base platform.",
    pricing: "$149/project/mo",
    limitations: [
      "Documentation tool, not a ticketing system",
      "Cannot track or manage active requests",
      "Expensive for what is essentially a documentation tool",
      "No Slack-based request management"
    ],
    whyPingdesk: "Pingdesk handles the requests that documentation alone cannot solve. When teams need action, not just information, Pingdesk tracks it in Slack."
  },
  {
    slug: "guru",
    name: "Guru",
    category: "Internal Tools",
    tagline: "Knowledge management platform for teams.",
    pricing: "$5/user/mo",
    limitations: [
      "Knowledge sharing tool, not a request tracker",
      "Cannot manage tickets, assignments, or SLAs",
      "Slack integration is for knowledge lookup, not ticketing",
      "Does not replace the need for actual request management"
    ],
    whyPingdesk: "Pingdesk handles the requests that Guru cards cannot — active tickets that need real-time tracking and resolution in Slack."
  },
  {
    slug: "confluence",
    name: "Confluence",
    category: "Internal Tools",
    tagline: "Team wiki and knowledge management by Atlassian.",
    pricing: "$5.75/user/mo",
    limitations: [
      "Documentation tool, not for active request management",
      "Pages get stale and are hard to find",
      "No ticketing, assignment, or SLA capabilities",
      "Requires Atlassian ecosystem for best experience"
    ],
    whyPingdesk: "Pingdesk handles what wikis cannot — active, time-sensitive requests that need assignment and resolution tracking. All in Slack."
  },

  // ===== ADDITIONAL COMMUNICATION =====
  {
    slug: "slack-workflows",
    name: "Slack Workflows (Built-in)",
    category: "Communication",
    tagline: "Native Slack workflow builder for simple automations.",
    pricing: "Included with Slack",
    limitations: [
      "Very basic form-based workflows without proper ticketing",
      "No dashboard, reporting, or SLA tracking",
      "Cannot track ticket lifecycle or resolution status",
      "Breaks down when request volume grows"
    ],
    whyPingdesk: "Pingdesk builds on Slack's foundation with proper ticketing — dashboards, SLA tracking, assignments, and reporting that native Workflows cannot provide."
  },
  {
    slug: "discord",
    name: "Discord",
    category: "Communication",
    tagline: "Community and team communication platform.",
    pricing: "Free / $2.99/mo",
    limitations: [
      "Designed for communities, not professional request management",
      "No ticketing, SLA tracking, or request workflows",
      "Messages get lost in busy channels",
      "Limited business integrations"
    ],
    whyPingdesk: "For teams using Slack professionally, Pingdesk adds the request management structure that communication platforms lack."
  },
  {
    slug: "mattermost",
    name: "Mattermost",
    category: "Communication",
    tagline: "Open-source team messaging and collaboration.",
    pricing: "Free (self-hosted) / $10/user/mo",
    limitations: [
      "Self-hosting requires infrastructure management",
      "Smaller app ecosystem than Slack",
      "No built-in ticketing or request management",
      "Less familiar to teams already using Slack"
    ],
    whyPingdesk: "For Slack teams, Pingdesk is the perfect addition — native ticket management without leaving the platform your team already knows and uses."
  },

  // ===== ADDITIONAL APPROVAL / WORKFLOW =====
  {
    slug: "kissflow",
    name: "Kissflow",
    category: "Approval / Workflow",
    tagline: "Digital workplace platform for process and project management.",
    pricing: "$1500/mo (50 users)",
    limitations: [
      "Expensive minimum commitment for small teams",
      "Complex workflow builder for simple request needs",
      "No Slack-native experience",
      "Requires significant setup and configuration"
    ],
    whyPingdesk: "Pingdesk delivers simple request management in Slack without the enterprise pricing or complex workflow builders."
  },
  {
    slug: "process-street",
    name: "Process Street",
    category: "Approval / Workflow",
    tagline: "Checklist and workflow automation for recurring processes.",
    pricing: "$25/user/mo",
    limitations: [
      "Checklist-focused, not a ticketing system",
      "Cannot track ad-hoc requests or one-off tickets",
      "Expensive per-user pricing",
      "No Slack-native ticket management"
    ],
    whyPingdesk: "Pingdesk handles both recurring processes and ad-hoc requests — all as trackable Slack tickets."
  },
  {
    slug: "pipefy",
    name: "Pipefy",
    category: "Approval / Workflow",
    tagline: "Business process management and workflow automation.",
    pricing: "Free / $25/user/mo",
    limitations: [
      "Workflow tool that requires building ticket processes from scratch",
      "No out-of-the-box Slack ticketing",
      "Per-user pricing escalates quickly",
      "Complex pipe configuration for simple needs"
    ],
    whyPingdesk: "Pingdesk gives you ticketing without pipe building. Install it in Slack and start managing requests immediately."
  },
  {
    slug: "typeform",
    name: "Typeform",
    category: "Approval / Workflow",
    tagline: "Interactive form builder for surveys and data collection.",
    pricing: "$25/mo",
    limitations: [
      "Form builder, not a ticketing or request management tool",
      "No ticket tracking, assignment, or resolution workflows",
      "Responses require manual processing",
      "No Slack-native request management"
    ],
    whyPingdesk: "Pingdesk turns Slack messages into trackable tickets — no forms to build, no responses to manually process."
  },
  {
    slug: "jotform",
    name: "Jotform",
    category: "Approval / Workflow",
    tagline: "Online form builder and data collection platform.",
    pricing: "Free / $34/mo",
    limitations: [
      "Form collection tool, not a request management system",
      "No ticket lifecycle management or SLA tracking",
      "Submissions require manual follow-up",
      "No Slack-based ticket creation"
    ],
    whyPingdesk: "Pingdesk manages the full lifecycle of requests — from creation in Slack to resolution — not just the initial submission."
  },
  {
    slug: "power-automate",
    name: "Microsoft Power Automate",
    category: "Approval / Workflow",
    tagline: "Workflow automation platform by Microsoft.",
    pricing: "$15/user/mo",
    limitations: [
      "Requires building ticketing workflows from scratch",
      "Best with Microsoft ecosystem, limited Slack support",
      "Complex flow designer for simple ticket needs",
      "No out-of-the-box ticketing interface"
    ],
    whyPingdesk: "Pingdesk is ready-made Slack ticketing. No flows to design — just install and start tracking team requests."
  },
  {
    slug: "servicetitan",
    name: "ServiceTitan",
    category: "Help Desk",
    tagline: "Field service management software for home services.",
    pricing: "Custom pricing",
    limitations: [
      "Designed for field service businesses, not office teams",
      "Extremely complex for internal request management",
      "No Slack integration for office-based workflows",
      "Industry-specific features are irrelevant for most teams"
    ],
    whyPingdesk: "Pingdesk is for office teams that work in Slack. Simple internal request management without field service complexity."
  },

  // ===== ADDITIONAL INTERNAL TOOLS =====
  {
    slug: "google-forms",
    name: "Google Forms",
    category: "Internal Tools",
    tagline: "Free form builder for data collection.",
    pricing: "Free",
    limitations: [
      "Submissions go to a spreadsheet with no ticket management",
      "No assignment, tracking, or resolution workflows",
      "Manual follow-up required for every submission",
      "No integration with Slack for real-time management"
    ],
    whyPingdesk: "Pingdesk automates the entire request lifecycle in Slack. No manual spreadsheet review needed — tickets are created, assigned, and tracked automatically."
  },
  {
    slug: "microsoft-forms",
    name: "Microsoft Forms",
    category: "Internal Tools",
    tagline: "Survey and form builder within Microsoft 365.",
    pricing: "Included with Microsoft 365",
    limitations: [
      "Form responses require manual processing",
      "No ticket tracking or assignment capabilities",
      "Designed for data collection, not request management",
      "No Slack-native workflow"
    ],
    whyPingdesk: "Pingdesk replaces forms with Slack-native ticket creation. Your team just messages — Pingdesk handles the tracking automatically."
  },
  {
    slug: "servicechannel",
    name: "ServiceChannel",
    category: "Help Desk",
    tagline: "Facilities management and service automation platform.",
    pricing: "Custom pricing",
    limitations: [
      "Facilities management focused, not general request tracking",
      "Complex for non-facilities use cases",
      "No Slack-native experience",
      "Industry-specific pricing and features"
    ],
    whyPingdesk: "Pingdesk handles facilities requests alongside every other type of internal request — all in Slack, one simple tool."
  },

  // ===== MORE HELP DESK TOOLS =====
  {
    slug: "teamwork-desk",
    name: "Teamwork Desk",
    category: "Help Desk",
    tagline: "Customer support desk integrated with Teamwork.",
    pricing: "$8.50/agent/mo",
    limitations: [
      "Customer support focus, not designed for internal teams",
      "Best used with Teamwork project management",
      "No Slack-native request management",
      "Limited standalone value without Teamwork ecosystem"
    ],
    whyPingdesk: "Pingdesk works standalone in Slack. No ecosystem required — just install and start resolving internal requests."
  },
  {
    slug: "hiver",
    name: "Hiver",
    category: "Help Desk",
    tagline: "Gmail-based help desk for customer support.",
    pricing: "$15/user/mo",
    limitations: [
      "Gmail-only approach does not serve Slack-based teams",
      "Requires Google Workspace",
      "No Slack-native ticketing capabilities",
      "Email-centric workflow is not ideal for real-time teams"
    ],
    whyPingdesk: "Pingdesk is for Slack teams, not Gmail teams. Real-time ticket management where your conversations already happen."
  },
  {
    slug: "dixa",
    name: "Dixa",
    category: "Help Desk",
    tagline: "Conversational customer service platform.",
    pricing: "$39/agent/mo",
    limitations: [
      "Expensive per-agent pricing",
      "Customer-facing tool, not for internal request management",
      "No Slack-native experience",
      "Complex for simple internal ticketing needs"
    ],
    whyPingdesk: "Pingdesk brings conversational support to internal teams at a fraction of the cost — all within Slack."
  },
  {
    slug: "kustomer",
    name: "Kustomer",
    category: "CRM",
    tagline: "CRM platform for customer service and support.",
    pricing: "$89/user/mo",
    limitations: [
      "Extremely expensive per-user pricing",
      "CRM features are irrelevant for internal ticketing",
      "Customer-focused platform, not for internal teams",
      "No Slack-native workflow"
    ],
    whyPingdesk: "Pingdesk delivers internal ticketing for a fraction of the cost. Your team does not need a CRM — they need Slack-based request management."
  },
  {
    slug: "gladly",
    name: "Gladly",
    category: "CRM",
    tagline: "People-centered customer service platform.",
    pricing: "$150/hero/mo",
    limitations: [
      "Extremely expensive per-agent pricing",
      "Designed for customer support, not internal teams",
      "No Slack integration for internal requests",
      "Enterprise-only pricing model"
    ],
    whyPingdesk: "Pingdesk is people-centered too — your team members who need help fast. At a fraction of the cost, all in Slack."
  },

  // ===== ADDITIONAL WORKFLOW AND MISC =====
  {
    slug: "statuspage",
    name: "Atlassian Statuspage",
    category: "Communication",
    tagline: "Status page for communicating incidents and downtime.",
    pricing: "$29/mo",
    limitations: [
      "Status communication only, not for request management",
      "Cannot track individual tickets or requests",
      "One-way communication, no collaboration",
      "No Slack-native ticket creation"
    ],
    whyPingdesk: "Pingdesk handles the individual incident reports and requests that status pages cannot — with real-time tracking and resolution in Slack."
  },
  {
    slug: "pagerduty",
    name: "PagerDuty",
    category: "ITSM",
    tagline: "Incident management and on-call scheduling platform.",
    pricing: "$21/user/mo",
    limitations: [
      "Incident-focused, not for general internal requests",
      "Expensive for non-engineering teams",
      "Complex alerting setup for simple request needs",
      "Overkill for non-critical requests"
    ],
    whyPingdesk: "Pingdesk handles the non-critical requests that PagerDuty is too heavy for — everyday team requests tracked and resolved in Slack."
  },
  {
    slug: "opsgenie",
    name: "Opsgenie",
    category: "ITSM",
    tagline: "Alert and incident management by Atlassian.",
    pricing: "$9/user/mo",
    limitations: [
      "Alerting tool, not designed for general request management",
      "Focused on on-call and incident response",
      "Not suitable for HR, legal, marketing, or other department requests",
      "Requires Atlassian ecosystem for best experience"
    ],
    whyPingdesk: "Pingdesk manages the everyday requests every department has — not just engineering incidents. All tracked in Slack."
  },
  {
    slug: "statuscast",
    name: "StatusCast",
    category: "Communication",
    tagline: "Status page and incident communication platform.",
    pricing: "$49/mo",
    limitations: [
      "Status communication tool, not request management",
      "No individual ticket tracking or assignment",
      "Cannot manage internal team requests",
      "No Slack-based ticketing"
    ],
    whyPingdesk: "Pingdesk tracks and resolves the individual requests behind every incident — with full lifecycle management in Slack."
  },
  {
    slug: "uservoice",
    name: "UserVoice",
    category: "CRM",
    tagline: "Product feedback and feature request management.",
    pricing: "Custom pricing",
    limitations: [
      "Customer feedback tool, not for internal requests",
      "Expensive enterprise pricing",
      "No internal ticketing or Slack-based management",
      "Designed for product teams, not cross-department use"
    ],
    whyPingdesk: "Pingdesk handles internal feature requests and every other type of team request — all in Slack without enterprise pricing."
  },
  {
    slug: "aha",
    name: "Aha!",
    category: "Project Management",
    tagline: "Product roadmap and strategy software.",
    pricing: "$59/user/mo",
    limitations: [
      "Product strategy tool, not for internal request management",
      "Very expensive per-user pricing",
      "Complex for simple ticketing needs",
      "No Slack-native request management"
    ],
    whyPingdesk: "Pingdesk handles the tactical internal requests that roadmap tools are not built for — simply and affordably in Slack."
  },
  {
    slug: "productboard",
    name: "Productboard",
    category: "Project Management",
    tagline: "Product management platform for feature prioritization.",
    pricing: "$20/maker/mo",
    limitations: [
      "Product management tool, not for operational requests",
      "Cannot handle IT, HR, or other department requests",
      "No Slack-based ticket creation or management",
      "Focused on feature prioritization, not request resolution"
    ],
    whyPingdesk: "Pingdesk manages the cross-department requests that product tools cannot handle — with simple Slack-based ticket tracking."
  },

  // ===== FINAL BATCH TO REACH 200+ =====
  {
    slug: "mantis-bug-tracker",
    name: "MantisBT",
    category: "Ticketing",
    tagline: "Open-source web-based bug tracking system.",
    pricing: "Free (self-hosted)",
    limitations: [
      "Bug tracking only, not for general internal requests",
      "Dated interface that has not been modernized",
      "Self-hosting requires server management",
      "No Slack integration for ticket management"
    ],
    whyPingdesk: "Pingdesk handles bugs and every other type of request in Slack. No self-hosting, no dated interfaces — just modern ticketing."
  },
  {
    slug: "bugzilla",
    name: "Bugzilla",
    category: "Ticketing",
    tagline: "Web-based bug tracking system by Mozilla.",
    pricing: "Free (self-hosted)",
    limitations: [
      "Exclusively a bug tracker, not for general requests",
      "Very dated user interface",
      "Requires self-hosting and maintenance",
      "No Slack-native capabilities"
    ],
    whyPingdesk: "Pingdesk modernizes request tracking for all teams — not just bug reports. Everything runs in Slack with a modern, intuitive experience."
  },
  {
    slug: "redmine",
    name: "Redmine",
    category: "Project Management",
    tagline: "Open-source project management and issue tracking.",
    pricing: "Free (self-hosted)",
    limitations: [
      "Requires self-hosting and Ruby on Rails expertise",
      "Outdated user interface",
      "No Slack-native ticket management",
      "Limited plugin ecosystem compared to modern tools"
    ],
    whyPingdesk: "Pingdesk replaces self-hosted trackers with cloud-based Slack ticketing. No servers, no Ruby — just install and go."
  },
  {
    slug: "youtrack",
    name: "YouTrack",
    category: "Project Management",
    tagline: "Issue tracking and project management by JetBrains.",
    pricing: "Free (up to 10 users) / $3.67/user/mo",
    limitations: [
      "Engineering-focused issue tracker",
      "Not designed for cross-department internal requests",
      "No Slack-first request management",
      "Best experience requires JetBrains ecosystem"
    ],
    whyPingdesk: "Pingdesk extends request tracking to every department with Slack-native simplicity. No engineering background needed."
  },
  {
    slug: "github-issues",
    name: "GitHub Issues",
    category: "Ticketing",
    tagline: "Issue tracking built into GitHub repositories.",
    pricing: "Free / $4/user/mo",
    limitations: [
      "Developer-only tool tied to code repositories",
      "Non-technical teams cannot easily use it",
      "No Slack-native ticket management",
      "Limited to software development context"
    ],
    whyPingdesk: "Pingdesk is for everyone — not just developers. Track any team request in Slack without needing a GitHub account."
  },
  {
    slug: "gitlab-issues",
    name: "GitLab Issues",
    category: "Ticketing",
    tagline: "Issue tracking within GitLab DevOps platform.",
    pricing: "Free / $29/user/mo",
    limitations: [
      "Tied to GitLab repositories and DevOps workflows",
      "Not suitable for non-technical team requests",
      "No Slack-first experience for request management",
      "Requires GitLab platform knowledge"
    ],
    whyPingdesk: "Pingdesk removes the technical barrier. Anyone in your Slack workspace can create and track requests — no DevOps knowledge needed."
  },
  {
    slug: "azure-devops",
    name: "Azure DevOps",
    category: "Project Management",
    tagline: "Development collaboration tools by Microsoft.",
    pricing: "Free (up to 5 users) / $6/user/mo",
    limitations: [
      "Developer-focused platform with steep learning curve",
      "Not designed for cross-department requests",
      "No Slack-native experience",
      "Requires Azure ecosystem for best experience"
    ],
    whyPingdesk: "Pingdesk serves every department in Slack while Azure DevOps serves developers. Use both — Pingdesk for internal requests, Azure DevOps for code."
  },
  {
    slug: "bitrix24",
    name: "Bitrix24",
    category: "CRM",
    tagline: "All-in-one business management and CRM platform.",
    pricing: "Free / $49/5 users/mo",
    limitations: [
      "Tries to do everything, excels at nothing",
      "Overwhelming interface with too many features",
      "No focused Slack-native request management",
      "Per-user pricing is confusing with bundled tiers"
    ],
    whyPingdesk: "Pingdesk does one thing exceptionally well — Slack-based ticket management. No bloat, no confusion, just effective request tracking."
  },
  {
    slug: "suitecrm",
    name: "SuiteCRM",
    category: "CRM",
    tagline: "Open-source CRM for customer relationship management.",
    pricing: "Free (self-hosted)",
    limitations: [
      "CRM tool, not designed for internal request management",
      "Requires self-hosting and maintenance",
      "No Slack integration for internal ticketing",
      "Complex CRM features are irrelevant for team requests"
    ],
    whyPingdesk: "Pingdesk is the internal-facing complement to your CRM. Handle team requests in Slack without repurposing customer tools."
  },
  {
    slug: "insightly",
    name: "Insightly",
    category: "CRM",
    tagline: "CRM and project management for growing businesses.",
    pricing: "$29/user/mo",
    limitations: [
      "CRM-focused with limited internal ticketing",
      "Expensive for non-sales use cases",
      "No Slack-native request management",
      "Project features are secondary to CRM"
    ],
    whyPingdesk: "Pingdesk handles internal requests without CRM overhead. Simple, Slack-native ticket tracking for any team."
  },
  {
    slug: "wix-answers",
    name: "Wix Answers",
    category: "Help Desk",
    tagline: "Customer support platform by Wix.",
    pricing: "$24/agent/mo",
    limitations: [
      "Tied to Wix ecosystem",
      "Customer support focused, not for internal teams",
      "No Slack-native ticket management",
      "Limited customization outside Wix"
    ],
    whyPingdesk: "Pingdesk is platform-independent and internal-team-focused. Manage requests in Slack regardless of your website platform."
  },
  {
    slug: "acquired-helpshift",
    name: "Helpshift",
    category: "Help Desk",
    tagline: "In-app customer service and support platform.",
    pricing: "Custom pricing",
    limitations: [
      "Mobile-app focused customer support",
      "Not designed for internal team request management",
      "No Slack integration for internal workflows",
      "Complex SDK integration required"
    ],
    whyPingdesk: "Pingdesk needs no SDK — just add it to Slack. Internal team requests are managed where your team already works."
  },
  {
    slug: "proprofs-help-desk",
    name: "ProProfs Help Desk",
    category: "Help Desk",
    tagline: "Simple customer support and help desk software.",
    pricing: "$20/agent/mo",
    limitations: [
      "Customer support tool, not for internal operations",
      "No Slack-first ticket management",
      "Basic feature set for the price",
      "Limited automation capabilities"
    ],
    whyPingdesk: "Pingdesk is simpler and more affordable for internal teams. Track requests in Slack without paying for customer support features."
  },
  {
    slug: "acquire",
    name: "Acquire",
    category: "CRM",
    tagline: "Customer engagement platform with chat and video.",
    pricing: "Custom pricing",
    limitations: [
      "Customer engagement tool, not for internal ticketing",
      "Expensive enterprise pricing",
      "Video and cobrowsing features are irrelevant internally",
      "No Slack-based request management"
    ],
    whyPingdesk: "Pingdesk focuses on what internal teams actually need — tracking and resolving requests in Slack. No video calls required."
  },
  {
    slug: "gorgias",
    name: "Gorgias",
    category: "Help Desk",
    tagline: "E-commerce customer support help desk.",
    pricing: "$10/50 tickets/mo",
    limitations: [
      "E-commerce focused, not for internal operations",
      "Per-ticket pricing model can be unpredictable",
      "Shopify and e-commerce integrations are irrelevant internally",
      "No Slack-native ticketing"
    ],
    whyPingdesk: "Pingdesk is e-commerce-agnostic internal ticketing. Manage any team request in Slack without e-commerce feature overhead."
  },
  {
    slug: "re-amaze",
    name: "Re:amaze",
    category: "Help Desk",
    tagline: "Customer support and messaging for online businesses.",
    pricing: "$29/agent/mo",
    limitations: [
      "Online business support, not internal request management",
      "No Slack-first experience for internal teams",
      "Expensive per-agent pricing for internal use",
      "Features tailored for e-commerce and online businesses"
    ],
    whyPingdesk: "Pingdesk serves internal teams regardless of industry. Slack-based ticketing for any request, any department."
  },
  {
    slug: "richpanel",
    name: "Richpanel",
    category: "CRM",
    tagline: "Customer service CRM for e-commerce brands.",
    pricing: "$29/agent/mo",
    limitations: [
      "E-commerce CRM, not for internal team operations",
      "Shopify-centric features are irrelevant for most internal teams",
      "No Slack-native request management",
      "Per-agent pricing for customer-facing use"
    ],
    whyPingdesk: "Pingdesk is the internal counterpart to customer-facing tools. Track team requests in Slack without any e-commerce baggage."
  },
  {
    slug: "missive",
    name: "Missive",
    category: "Communication",
    tagline: "Team inbox and chat for collaborative email.",
    pricing: "$14/user/mo",
    limitations: [
      "Email-centric collaboration tool",
      "Adds another communication layer on top of Slack",
      "No ticketing workflow or SLA tracking",
      "Not designed for structured request management"
    ],
    whyPingdesk: "Pingdesk consolidates request management into Slack instead of adding another tool. One place for all internal tickets."
  },
  {
    slug: "spike",
    name: "Spike",
    category: "Communication",
    tagline: "Conversational email and team collaboration.",
    pricing: "Free / $5/user/mo",
    limitations: [
      "Email reimagined as chat, but still email-based",
      "No proper ticketing or request management",
      "Competes with Slack for team communication",
      "Cannot track request lifecycle or SLAs"
    ],
    whyPingdesk: "Pingdesk adds request management to Slack without reinventing email. Track tickets where your team already communicates."
  },
  {
    slug: "fibery",
    name: "Fibery",
    category: "Project Management",
    tagline: "Connected workspace for product teams.",
    pricing: "$10/user/mo",
    limitations: [
      "Product team focused, not for cross-department requests",
      "Complex workspace builder requires setup time",
      "No Slack-native ticket management",
      "Steep learning curve for non-product teams"
    ],
    whyPingdesk: "Pingdesk is ready-to-use Slack ticketing for every department. No workspace building needed — just install and track requests."
  },
  {
    slug: "tempo-timesheets",
    name: "Tempo Timesheets",
    category: "Project Management",
    tagline: "Time tracking and resource planning for Jira.",
    pricing: "$10/user/mo",
    limitations: [
      "Time tracking tool, not a ticketing system",
      "Requires Jira for functionality",
      "Cannot manage service requests or internal tickets",
      "No Slack integration for request management"
    ],
    whyPingdesk: "Pingdesk tracks requests, not time. Simple Slack-based ticketing that helps teams resolve issues, not log hours."
  },
  {
    slug: "kantata",
    name: "Kantata",
    category: "Project Management",
    tagline: "Professional services automation platform.",
    pricing: "Custom pricing",
    limitations: [
      "Professional services focused, not general request management",
      "Expensive enterprise pricing",
      "No Slack-native internal ticketing",
      "Complex for simple internal request tracking"
    ],
    whyPingdesk: "Pingdesk is simple, affordable, and Slack-native. Perfect for internal requests without professional services complexity."
  },
  {
    slug: "accelo",
    name: "Accelo",
    category: "Project Management",
    tagline: "Client work management for professional services.",
    pricing: "$20/user/mo",
    limitations: [
      "Client-work focused, not for internal operations",
      "Complex feature set for internal ticketing needs",
      "No Slack-first experience",
      "Per-user pricing adds up for internal use"
    ],
    whyPingdesk: "Pingdesk handles internal operations while Accelo handles clients. Simple Slack ticketing for your team's requests."
  },
  {
    slug: "freshping",
    name: "Freshping",
    category: "ITSM",
    tagline: "Website monitoring and status page tool.",
    pricing: "Free / $15/mo",
    limitations: [
      "Monitoring tool, not a request management system",
      "Cannot track or manage team requests",
      "No ticketing or assignment features",
      "Limited to uptime monitoring"
    ],
    whyPingdesk: "Pingdesk manages the requests that monitoring tools generate. When something goes down, track the fix in Slack."
  },
  {
    slug: "uptime-robot",
    name: "UptimeRobot",
    category: "ITSM",
    tagline: "Website and server uptime monitoring.",
    pricing: "Free / $7/mo",
    limitations: [
      "Monitoring only, no request or ticket management",
      "Cannot assign or track resolution of issues",
      "No Slack-based ticketing workflows",
      "Alerts need to be manually converted to action items"
    ],
    whyPingdesk: "Pingdesk turns monitoring alerts into trackable Slack tickets. Know who is fixing what and when it will be resolved."
  },
  {
    slug: "formstack",
    name: "Formstack",
    category: "Approval / Workflow",
    tagline: "Online form builder and workflow automation.",
    pricing: "$50/mo",
    limitations: [
      "Form builder, not a request management tool",
      "Submissions require manual processing and follow-up",
      "No ticket lifecycle management",
      "Expensive for form-only functionality"
    ],
    whyPingdesk: "Pingdesk eliminates forms entirely. Your team creates tickets by messaging in Slack — instant, trackable, and automatically managed."
  },
  {
    slug: "smartsupp",
    name: "Smartsupp",
    category: "CRM",
    tagline: "Live chat and chatbot for customer service.",
    pricing: "Free / $19.50/mo",
    limitations: [
      "Website live chat tool, not for internal teams",
      "No internal ticketing capabilities",
      "No Slack-based request management",
      "Customer-facing chatbot features are irrelevant internally"
    ],
    whyPingdesk: "Pingdesk is the internal team equivalent of live chat — fast, conversational ticket management right in Slack."
  },
  {
    slug: "zenkit",
    name: "Zenkit",
    category: "Project Management",
    tagline: "Project management with multiple view options.",
    pricing: "$8/user/mo",
    limitations: [
      "General project management, not ticketing-focused",
      "No SLA tracking or request routing",
      "Limited Slack integration",
      "Not designed for service request workflows"
    ],
    whyPingdesk: "Pingdesk provides dedicated ticket workflows that project management views cannot replicate — purpose-built for Slack."
  }
];

// Only the curated set is published; the rest 301 to a surviving page.
// `alternatives` still holds every entry so redirects can be generated from it.
export const allAlternatives = alternatives;

export default alternatives.filter((x) => CURATED_ALTERNATIVES.includes(x.slug));
