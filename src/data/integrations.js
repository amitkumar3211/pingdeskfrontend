const integrations = [
  // ===== DEVELOPMENT =====
  {
    slug: "github",
    name: "GitHub",
    category: "Development",
    description: "GitHub is the world's leading platform for version control and collaborative software development.",
    howItWorks: "Pingdesk surfaces GitHub notifications—pull requests, issues, and CI results—directly in your Slack channels. Teams can review, approve, and merge without leaving the conversation, keeping development velocity high.",
    benefits: ["Faster PR reviews in Slack", "Instant issue alerts", "Merge without context-switching", "Unified dev notifications"]
  },
  {
    slug: "gitlab",
    name: "GitLab",
    category: "Development",
    description: "GitLab is a complete DevOps platform delivered as a single application for the entire software development lifecycle.",
    howItWorks: "Pingdesk routes GitLab pipeline statuses, merge requests, and deployment alerts into the right Slack channels. Your team stays informed about builds and releases without constantly checking the GitLab UI.",
    benefits: ["Pipeline alerts in Slack", "Merge request notifications", "Deploy tracking", "Reduced context-switching"]
  },
  {
    slug: "bitbucket",
    name: "Bitbucket",
    category: "Development",
    description: "Bitbucket is Atlassian's Git-based source code repository hosting service for teams.",
    howItWorks: "Pingdesk connects Bitbucket events like pull requests, branch updates, and build statuses to your Slack workspace. Developers get real-time code review notifications right where they collaborate.",
    benefits: ["PR notifications in Slack", "Build status alerts", "Branch update tracking", "Streamlined code reviews"]
  },
  {
    slug: "vs-code",
    name: "VS Code",
    category: "Development",
    description: "Visual Studio Code is a lightweight but powerful source code editor from Microsoft.",
    howItWorks: "Pingdesk bridges VS Code activity with your Slack workspace, enabling teams to share code snippets, debug sessions, and Live Share links instantly. Developers collaborate on code issues without leaving their editor or Slack.",
    benefits: ["Share code snippets instantly", "Live Share links in Slack", "Debug collaboration", "Faster pair programming"]
  },
  {
    slug: "sentry",
    name: "Sentry",
    category: "Development",
    description: "Sentry is an application monitoring platform that helps developers identify and fix crashes in real time.",
    howItWorks: "Pingdesk delivers Sentry error alerts to the appropriate Slack channels based on project and severity. Teams can triage, assign, and resolve issues collaboratively without switching to the Sentry dashboard.",
    benefits: ["Real-time error alerts", "Triage errors in Slack", "Assign issues from chat", "Reduce mean time to resolution"]
  },
  {
    slug: "datadog",
    name: "Datadog",
    category: "Development",
    description: "Datadog is a monitoring and analytics platform for cloud-scale applications and infrastructure.",
    howItWorks: "Pingdesk channels Datadog alerts and dashboards into Slack, giving on-call engineers instant visibility into infrastructure health. Teams can acknowledge incidents and coordinate responses directly from Slack.",
    benefits: ["Infrastructure alerts in Slack", "Dashboard snapshots", "Incident coordination", "Faster response times"]
  },
  {
    slug: "pagerduty",
    name: "PagerDuty",
    category: "Development",
    description: "PagerDuty is an incident management platform that helps teams detect and resolve infrastructure problems.",
    howItWorks: "Pingdesk routes PagerDuty incidents into dedicated Slack channels, enabling rapid team mobilization. On-call engineers can acknowledge, escalate, and resolve incidents without leaving Slack.",
    benefits: ["Incident alerts in Slack", "One-click acknowledgment", "Escalation management", "Post-incident coordination"]
  },
  {
    slug: "circleci",
    name: "CircleCI",
    category: "Development",
    description: "CircleCI is a continuous integration and delivery platform that automates the build, test, and deploy process.",
    howItWorks: "Pingdesk posts CircleCI build results and deployment statuses to your Slack channels in real time. Failed builds get immediate attention, and successful deploys are celebrated automatically.",
    benefits: ["Build notifications in Slack", "Failed build alerts", "Deploy status updates", "Faster CI/CD feedback"]
  },
  {
    slug: "jenkins",
    name: "Jenkins",
    category: "Development",
    description: "Jenkins is an open-source automation server that enables continuous integration and continuous delivery.",
    howItWorks: "Pingdesk forwards Jenkins build outcomes, pipeline statuses, and job failures to the relevant Slack channels. Teams can monitor long-running jobs and get notified the moment builds complete or fail.",
    benefits: ["Build result notifications", "Pipeline monitoring", "Job failure alerts", "Reduced dashboard checking"]
  },
  {
    slug: "vercel",
    name: "Vercel",
    category: "Development",
    description: "Vercel is a cloud platform for frontend developers that enables instant deployments and serverless functions.",
    howItWorks: "Pingdesk notifies your Slack channels about Vercel deployments, preview URLs, and build errors. Frontend teams can share preview links and coordinate releases without leaving their conversation.",
    benefits: ["Deploy notifications", "Preview URL sharing", "Build error alerts", "Release coordination"]
  },
  {
    slug: "netlify",
    name: "Netlify",
    category: "Development",
    description: "Netlify is a platform for automating modern web projects with continuous deployment and serverless backends.",
    howItWorks: "Pingdesk sends Netlify deploy statuses and build logs to your Slack channels. Teams get instant feedback on site builds and can share deploy previews for review directly in chat.",
    benefits: ["Deploy status in Slack", "Build log alerts", "Preview link sharing", "Faster site iteration"]
  },
  {
    slug: "aws",
    name: "AWS",
    category: "Development",
    description: "Amazon Web Services provides on-demand cloud computing platforms and APIs to individuals, companies, and governments.",
    howItWorks: "Pingdesk consolidates AWS CloudWatch alarms, billing alerts, and service notifications into Slack. Operations teams can monitor cloud infrastructure health and respond to incidents without juggling multiple consoles.",
    benefits: ["CloudWatch alerts in Slack", "Billing notifications", "Service health updates", "Centralized cloud monitoring"]
  },
  {
    slug: "gcp",
    name: "Google Cloud Platform",
    category: "Development",
    description: "Google Cloud Platform is a suite of cloud computing services that runs on the same infrastructure Google uses internally.",
    howItWorks: "Pingdesk routes GCP monitoring alerts, deployment notifications, and billing updates to your Slack workspace. Teams can stay on top of cloud resources and costs without switching between dashboards.",
    benefits: ["Monitoring alerts in Slack", "Deployment notifications", "Budget alerts", "Unified cloud oversight"]
  },
  {
    slug: "azure",
    name: "Microsoft Azure",
    category: "Development",
    description: "Microsoft Azure is a cloud computing platform for building, testing, deploying, and managing applications through Microsoft-managed data centers.",
    howItWorks: "Pingdesk delivers Azure DevOps pipeline results, resource alerts, and service health updates to Slack. Teams coordinate cloud operations and incident response in the channels where they already communicate.",
    benefits: ["Pipeline alerts in Slack", "Resource monitoring", "Service health updates", "Incident coordination"]
  },
  {
    slug: "docker",
    name: "Docker",
    category: "Development",
    description: "Docker is a platform for developing, shipping, and running applications in lightweight, portable containers.",
    howItWorks: "Pingdesk surfaces Docker Hub image updates, container health checks, and registry events in Slack. Development teams stay informed about image builds and container status without monitoring Docker dashboards.",
    benefits: ["Image build notifications", "Container health alerts", "Registry event updates", "Simplified container ops"]
  },
  {
    slug: "kubernetes",
    name: "Kubernetes",
    category: "Development",
    description: "Kubernetes is an open-source container orchestration system for automating deployment, scaling, and management.",
    howItWorks: "Pingdesk forwards Kubernetes cluster events, pod failures, and scaling alerts to Slack. SRE and DevOps teams can monitor cluster health and respond to issues collaboratively from their Slack channels.",
    benefits: ["Cluster event alerts", "Pod failure notifications", "Scaling alerts", "Collaborative incident response"]
  },
  {
    slug: "terraform",
    name: "Terraform",
    category: "Development",
    description: "Terraform is an infrastructure-as-code tool that lets teams define and provision cloud infrastructure declaratively.",
    howItWorks: "Pingdesk notifies Slack channels about Terraform plan results, apply statuses, and drift detections. Infrastructure teams can review and approve changes collaboratively before they go live.",
    benefits: ["Plan result notifications", "Apply status alerts", "Drift detection alerts", "Collaborative infra reviews"]
  },
  {
    slug: "new-relic",
    name: "New Relic",
    category: "Development",
    description: "New Relic is an observability platform that helps engineers monitor, debug, and improve their entire technology stack.",
    howItWorks: "Pingdesk sends New Relic alerts, anomaly detections, and performance summaries to your Slack channels. Engineering teams can triage performance issues and coordinate fixes without leaving their workflow.",
    benefits: ["Performance alerts in Slack", "Anomaly detection", "Incident triage", "Application health summaries"]
  },
  {
    slug: "grafana",
    name: "Grafana",
    category: "Development",
    description: "Grafana is an open-source platform for monitoring and observability with beautiful, flexible dashboards.",
    howItWorks: "Pingdesk routes Grafana alert notifications and dashboard snapshots into Slack. Teams can visualize metrics and respond to threshold breaches without opening the Grafana UI.",
    benefits: ["Alert notifications in Slack", "Dashboard snapshots", "Threshold breach alerts", "Visual metric sharing"]
  },
  {
    slug: "supabase",
    name: "Supabase",
    category: "Development",
    description: "Supabase is an open-source Firebase alternative providing a backend-as-a-service with a Postgres database.",
    howItWorks: "Pingdesk delivers Supabase database events, authentication alerts, and edge function logs to Slack. Backend teams monitor their Supabase project health and user activity from their Slack workspace.",
    benefits: ["Database event alerts", "Auth notifications", "Edge function logs", "Project health monitoring"]
  },
  {
    slug: "firebase",
    name: "Firebase",
    category: "Development",
    description: "Firebase is Google's app development platform that helps build, improve, and grow mobile and web apps.",
    howItWorks: "Pingdesk channels Firebase Crashlytics alerts, performance metrics, and Cloud Messaging stats into Slack. Mobile teams can track app stability and user engagement without switching contexts.",
    benefits: ["Crash alerts in Slack", "Performance monitoring", "Cloud Messaging stats", "App stability tracking"]
  },
  {
    slug: "mongodb",
    name: "MongoDB",
    category: "Development",
    description: "MongoDB is a document-oriented NoSQL database used for high-volume data storage and flexible schemas.",
    howItWorks: "Pingdesk surfaces MongoDB Atlas alerts, slow query notifications, and cluster health updates in Slack. Database teams can respond to performance issues and scaling events in real time from chat.",
    benefits: ["Atlas alert notifications", "Slow query alerts", "Cluster health updates", "Real-time DBA coordination"]
  },
  {
    slug: "postgresql",
    name: "PostgreSQL",
    category: "Development",
    description: "PostgreSQL is a powerful, open-source object-relational database system with a strong reputation for reliability.",
    howItWorks: "Pingdesk routes PostgreSQL monitoring alerts—replication lag, connection pool exhaustion, and slow queries—into Slack. DBAs and backend engineers stay on top of database health collaboratively.",
    benefits: ["Replication lag alerts", "Connection pool monitoring", "Slow query notifications", "Collaborative DBA workflows"]
  },
  {
    slug: "redis",
    name: "Redis",
    category: "Development",
    description: "Redis is an in-memory data structure store used as a database, cache, message broker, and queue.",
    howItWorks: "Pingdesk sends Redis health metrics, memory alerts, and eviction warnings to your Slack channels. Teams can monitor cache performance and respond to capacity issues before they affect users.",
    benefits: ["Memory usage alerts", "Eviction warnings", "Cache health monitoring", "Proactive capacity planning"]
  },
  {
    slug: "elasticsearch",
    name: "Elasticsearch",
    category: "Development",
    description: "Elasticsearch is a distributed search and analytics engine built on Apache Lucene for all types of data.",
    howItWorks: "Pingdesk delivers Elasticsearch cluster health alerts, indexing errors, and search performance metrics to Slack. Operations teams can monitor search infrastructure and troubleshoot issues collaboratively.",
    benefits: ["Cluster health alerts", "Indexing error notifications", "Search performance metrics", "Collaborative troubleshooting"]
  },

  // ===== PROJECT MANAGEMENT =====
  {
    slug: "jira",
    name: "Jira",
    category: "Project Management",
    description: "Jira is Atlassian's issue and project tracking tool used by agile software development teams worldwide.",
    howItWorks: "Pingdesk brings Jira ticket updates, sprint changes, and release events into your Slack channels. Teams can create, update, and transition issues directly from Slack, keeping project workflows seamless.",
    benefits: ["Ticket updates in Slack", "Create issues from chat", "Sprint change alerts", "Seamless project tracking"]
  },
  {
    slug: "asana",
    name: "Asana",
    category: "Project Management",
    description: "Asana is a web and mobile work management platform designed to help teams organize, track, and manage their work.",
    howItWorks: "Pingdesk syncs Asana task updates, project milestones, and due date reminders to Slack. Team members can mark tasks complete and add comments without leaving their Slack conversation.",
    benefits: ["Task update notifications", "Due date reminders", "Complete tasks from Slack", "Milestone tracking"]
  },
  {
    slug: "monday-com",
    name: "Monday.com",
    category: "Project Management",
    description: "Monday.com is a work operating system that powers teams to run processes, projects, and workflows in one place.",
    howItWorks: "Pingdesk delivers Monday.com board updates, status changes, and deadline alerts to your Slack channels. Teams stay aligned on project progress without switching between Monday.com and Slack.",
    benefits: ["Board update notifications", "Status change alerts", "Deadline reminders", "Cross-tool alignment"]
  },
  {
    slug: "trello",
    name: "Trello",
    category: "Project Management",
    description: "Trello is a visual collaboration tool that organizes projects into boards, lists, and cards.",
    howItWorks: "Pingdesk posts Trello card movements, due dates, and comment notifications to Slack. Teams can manage their Kanban boards conversationally, moving cards and adding notes right from chat.",
    benefits: ["Card movement alerts", "Due date notifications", "Manage boards from Slack", "Visual project updates"]
  },
  {
    slug: "clickup",
    name: "ClickUp",
    category: "Project Management",
    description: "ClickUp is an all-in-one productivity platform that serves as a hub for tasks, docs, goals, and chat.",
    howItWorks: "Pingdesk routes ClickUp task updates, goal progress, and time tracking summaries to Slack. Teams can create tasks and update statuses from Slack, reducing the need to switch between apps.",
    benefits: ["Task notifications in Slack", "Goal progress updates", "Create tasks from chat", "Time tracking summaries"]
  },
  {
    slug: "basecamp",
    name: "Basecamp",
    category: "Project Management",
    description: "Basecamp is a project management and team communication tool that organizes work around projects.",
    howItWorks: "Pingdesk surfaces Basecamp to-do updates, message board posts, and schedule events in Slack. Remote teams can stay on top of project communication without checking Basecamp separately.",
    benefits: ["To-do notifications", "Message board alerts", "Schedule event reminders", "Unified project comms"]
  },
  {
    slug: "wrike",
    name: "Wrike",
    category: "Project Management",
    description: "Wrike is a collaborative work management platform that helps teams plan, manage, and complete work at scale.",
    howItWorks: "Pingdesk delivers Wrike task assignments, status changes, and approval requests to your Slack channels. Teams can respond to requests and update task progress without leaving the conversation.",
    benefits: ["Task assignment alerts", "Status change notifications", "Approval request routing", "In-chat task updates"]
  },
  {
    slug: "smartsheet",
    name: "Smartsheet",
    category: "Project Management",
    description: "Smartsheet is a platform for enterprise work management that combines spreadsheets with project management.",
    howItWorks: "Pingdesk sends Smartsheet row updates, approval requests, and sheet change notifications to Slack. Teams can act on updates and approvals directly from their Slack workspace.",
    benefits: ["Row update notifications", "Approval routing in Slack", "Sheet change alerts", "Faster decision-making"]
  },
  {
    slug: "airtable",
    name: "Airtable",
    category: "Project Management",
    description: "Airtable is a cloud-based platform that combines the simplicity of a spreadsheet with the power of a database.",
    howItWorks: "Pingdesk notifies your Slack channels about Airtable record changes, form submissions, and automation triggers. Teams can interact with their data workflows without leaving Slack.",
    benefits: ["Record change alerts", "Form submission notifications", "Automation trigger updates", "Data workflow in Slack"]
  },
  {
    slug: "notion",
    name: "Notion",
    category: "Project Management",
    description: "Notion is an all-in-one workspace for notes, tasks, wikis, and databases used by teams worldwide.",
    howItWorks: "Pingdesk routes Notion page updates, database changes, and comment mentions to your Slack channels. Teams can stay informed about documentation and project changes without switching to Notion.",
    benefits: ["Page update alerts", "Database change notifications", "Comment mention routing", "Wiki update tracking"]
  },
  {
    slug: "linear",
    name: "Linear",
    category: "Project Management",
    description: "Linear is a modern issue tracker built for speed, designed to streamline software project management.",
    howItWorks: "Pingdesk delivers Linear issue updates, cycle progress, and project milestones to Slack. Engineering teams can triage new issues and update statuses directly from their Slack channels.",
    benefits: ["Issue update notifications", "Cycle progress alerts", "Triage from Slack", "Milestone tracking"]
  },
  {
    slug: "shortcut",
    name: "Shortcut",
    category: "Project Management",
    description: "Shortcut is a project management platform purpose-built for software teams to plan, build, and ship.",
    howItWorks: "Pingdesk sends Shortcut story updates, iteration progress, and blocker alerts to Slack. Teams can manage their workflow and unblock tasks collaboratively from chat.",
    benefits: ["Story update alerts", "Iteration progress", "Blocker notifications", "Workflow management in Slack"]
  },
  {
    slug: "teamwork",
    name: "Teamwork",
    category: "Project Management",
    description: "Teamwork is a project management tool designed to help teams deliver client work on time and on budget.",
    howItWorks: "Pingdesk routes Teamwork task updates, time log entries, and milestone changes to Slack. Client-facing teams stay aligned on deliverables and deadlines without leaving their chat workspace.",
    benefits: ["Task update notifications", "Time log alerts", "Milestone tracking", "Client project alignment"]
  },
  {
    slug: "hive",
    name: "Hive",
    category: "Project Management",
    description: "Hive is a project management platform that centralizes all team tasks, projects, and collaboration.",
    howItWorks: "Pingdesk delivers Hive action updates, project status changes, and deadline reminders to your Slack channels. Teams can manage actions and track progress without leaving the conversation.",
    benefits: ["Action update alerts", "Project status notifications", "Deadline reminders", "Centralized progress tracking"]
  },
  {
    slug: "workfront",
    name: "Workfront",
    category: "Project Management",
    description: "Workfront is Adobe's enterprise work management platform for planning, executing, and delivering work at scale.",
    howItWorks: "Pingdesk routes Workfront request updates, approval workflows, and project milestones to Slack. Enterprise teams can approve work and track progress from their Slack workspace.",
    benefits: ["Request update alerts", "Approval workflow routing", "Project milestone tracking", "Enterprise work visibility"]
  },

  // ===== COMMUNICATION =====
  {
    slug: "zoom",
    name: "Zoom",
    category: "Communication",
    description: "Zoom is a video communications platform for meetings, webinars, and virtual events.",
    howItWorks: "Pingdesk integrates Zoom meeting summaries, recording links, and scheduling updates into Slack. Teams can start Zoom calls from Slack and get automatic meeting notes posted back to the channel.",
    benefits: ["Meeting summaries in Slack", "Recording link sharing", "One-click Zoom from Slack", "Automatic meeting notes"]
  },
  {
    slug: "google-meet",
    name: "Google Meet",
    category: "Communication",
    description: "Google Meet is Google's video conferencing service for secure and reliable online meetings.",
    howItWorks: "Pingdesk posts Google Meet links, meeting reminders, and post-meeting summaries to your Slack channels. Teams can join calls instantly and review meeting outcomes without leaving Slack.",
    benefits: ["Meeting link sharing", "Calendar reminders", "Post-meeting summaries", "Quick join from Slack"]
  },
  {
    slug: "microsoft-teams",
    name: "Microsoft Teams",
    category: "Communication",
    description: "Microsoft Teams is a collaboration platform that combines chat, video meetings, and file sharing.",
    howItWorks: "Pingdesk bridges Microsoft Teams and Slack, syncing messages and notifications between both platforms. Organizations using both tools can keep communication flowing without information silos.",
    benefits: ["Cross-platform sync", "Unified notifications", "Bridge Teams and Slack", "No information silos"]
  },
  {
    slug: "loom",
    name: "Loom",
    category: "Communication",
    description: "Loom is an async video messaging platform that lets you record and share videos quickly.",
    howItWorks: "Pingdesk delivers Loom video notifications and view alerts to Slack. Teams can share recorded walkthroughs, bug reports, and updates asynchronously with rich previews in their Slack channels.",
    benefits: ["Video notifications in Slack", "Rich video previews", "Async communication", "View tracking alerts"]
  },
  {
    slug: "calendly",
    name: "Calendly",
    category: "Communication",
    description: "Calendly is a scheduling automation platform that eliminates the back-and-forth of finding meeting times.",
    howItWorks: "Pingdesk sends Calendly booking confirmations, cancellations, and reminders to Slack. Sales and support teams get instant visibility into upcoming meetings and schedule changes.",
    benefits: ["Booking alerts in Slack", "Cancellation notifications", "Meeting reminders", "Schedule visibility"]
  },
  {
    slug: "slack",
    name: "Slack",
    category: "Communication",
    description: "Slack is a channel-based messaging platform that brings teams together for collaboration.",
    howItWorks: "Pingdesk is built natively for Slack, transforming it from a messaging app into a unified command center. All your tool notifications, workflows, and team interactions flow through Pingdesk-enhanced Slack channels.",
    benefits: ["Native Slack integration", "Unified command center", "Enhanced channel workflows", "Zero context-switching"]
  },
  {
    slug: "discord",
    name: "Discord",
    category: "Communication",
    description: "Discord is a communication platform with voice, video, and text channels originally built for communities.",
    howItWorks: "Pingdesk bridges Discord community activity and Slack workspace communication. Teams managing open-source projects or communities can route Discord alerts and highlights into their internal Slack channels.",
    benefits: ["Community alerts in Slack", "Cross-platform bridging", "Open-source coordination", "Community highlight routing"]
  },
  {
    slug: "webex",
    name: "Webex",
    category: "Communication",
    description: "Webex by Cisco is a video conferencing and collaboration platform for enterprise communication.",
    howItWorks: "Pingdesk integrates Webex meeting scheduling, recording availability, and call summaries into Slack. Enterprise teams can coordinate calls and access meeting artifacts without leaving their Slack workspace.",
    benefits: ["Meeting scheduling alerts", "Recording notifications", "Call summaries in Slack", "Enterprise call coordination"]
  },
  {
    slug: "goto-meeting",
    name: "GoTo Meeting",
    category: "Communication",
    description: "GoTo Meeting is an online meeting and video conferencing platform for businesses of all sizes.",
    howItWorks: "Pingdesk posts GoTo Meeting links, reminders, and post-call notes to Slack. Teams can start and join meetings directly from Slack and get automated follow-up summaries.",
    benefits: ["Meeting link sharing", "Automated reminders", "Post-call notes in Slack", "Quick meeting launch"]
  },

  // ===== DESIGN =====
  {
    slug: "figma",
    name: "Figma",
    category: "Design",
    description: "Figma is a collaborative interface design tool that enables teams to create, prototype, and hand off designs.",
    howItWorks: "Pingdesk delivers Figma file updates, comment notifications, and design review requests to Slack. Design teams can share feedback, approve designs, and track changes without leaving their chat workflow.",
    benefits: ["Design update notifications", "Comment alerts in Slack", "Review request routing", "Faster design feedback"]
  },
  {
    slug: "canva",
    name: "Canva",
    category: "Design",
    description: "Canva is a graphic design platform that makes it easy to create professional designs with drag-and-drop tools.",
    howItWorks: "Pingdesk shares Canva design completion notifications and collaboration invites in Slack. Marketing and design teams can review assets and approve content directly from their Slack channels.",
    benefits: ["Design completion alerts", "Collaboration invites", "Asset review in Slack", "Faster content approval"]
  },
  {
    slug: "adobe-xd",
    name: "Adobe XD",
    category: "Design",
    description: "Adobe XD is a vector-based UX design tool for crafting prototypes and wireframes.",
    howItWorks: "Pingdesk routes Adobe XD share links, prototype updates, and design spec changes to Slack. Teams can review prototypes and provide feedback without switching between Adobe XD and Slack.",
    benefits: ["Prototype update alerts", "Share link routing", "Design spec notifications", "Streamlined feedback loops"]
  },
  {
    slug: "sketch",
    name: "Sketch",
    category: "Design",
    description: "Sketch is a digital design toolkit for creating interfaces, prototypes, and collaboration on Mac.",
    howItWorks: "Pingdesk sends Sketch document updates, library changes, and version history alerts to Slack. Design teams stay synchronized on the latest designs and component updates.",
    benefits: ["Document update alerts", "Library change notifications", "Version history tracking", "Team design sync"]
  },
  {
    slug: "invision",
    name: "InVision",
    category: "Design",
    description: "InVision is a digital product design platform for prototyping, collaboration, and workflow management.",
    howItWorks: "Pingdesk delivers InVision prototype comments, board updates, and design handoff notifications to Slack. Designers and developers can collaborate on handoffs directly from their Slack channels.",
    benefits: ["Prototype comment alerts", "Board update notifications", "Design handoff routing", "Developer-designer collaboration"]
  },
  {
    slug: "miro",
    name: "Miro",
    category: "Design",
    description: "Miro is an online collaborative whiteboard platform for distributed teams to brainstorm and plan.",
    howItWorks: "Pingdesk routes Miro board updates, comment notifications, and session invites to Slack. Teams can jump into whiteboarding sessions and track brainstorm outcomes without leaving their workflow.",
    benefits: ["Board update alerts", "Session invites in Slack", "Comment notifications", "Brainstorm outcome tracking"]
  },
  {
    slug: "figjam",
    name: "FigJam",
    category: "Design",
    description: "FigJam is Figma's online whiteboard tool for brainstorming, diagramming, and team collaboration.",
    howItWorks: "Pingdesk sends FigJam board activity, sticky note additions, and voting results to Slack. Teams can track workshop outcomes and action items directly from their Slack channels.",
    benefits: ["Board activity alerts", "Workshop outcome tracking", "Voting result notifications", "Action item routing"]
  },
  {
    slug: "zeplin",
    name: "Zeplin",
    category: "Design",
    description: "Zeplin is a connected workspace for product teams to hand off designs with accurate specs and assets.",
    howItWorks: "Pingdesk delivers Zeplin screen updates, style guide changes, and component uploads to Slack. Design-to-development handoffs become seamless with notifications flowing to the right engineering channels.",
    benefits: ["Screen update notifications", "Style guide alerts", "Component upload notifications", "Seamless dev handoffs"]
  },
  {
    slug: "abstract",
    name: "Abstract",
    category: "Design",
    description: "Abstract is a design version control and collaboration platform for managing Sketch and XD files.",
    howItWorks: "Pingdesk routes Abstract branch merges, review requests, and collection updates to Slack. Design teams can manage version control and approvals collaboratively from their Slack workspace.",
    benefits: ["Branch merge notifications", "Review request routing", "Collection update alerts", "Design version control in Slack"]
  },

  // ===== ANALYTICS =====
  {
    slug: "google-analytics",
    name: "Google Analytics",
    category: "Analytics",
    description: "Google Analytics is a web analytics service that tracks and reports website traffic and user behavior.",
    howItWorks: "Pingdesk delivers Google Analytics traffic summaries, goal completions, and anomaly alerts to Slack. Marketing and product teams can monitor key metrics and react to trends without opening analytics dashboards.",
    benefits: ["Traffic summary alerts", "Goal completion notifications", "Anomaly detection", "Metric monitoring in Slack"]
  },
  {
    slug: "mixpanel",
    name: "Mixpanel",
    category: "Analytics",
    description: "Mixpanel is a product analytics platform that helps teams analyze user behavior and measure engagement.",
    howItWorks: "Pingdesk sends Mixpanel funnel alerts, retention reports, and event-based notifications to Slack. Product teams can track key metrics and make data-driven decisions from their Slack workspace.",
    benefits: ["Funnel alerts in Slack", "Retention report summaries", "Event notifications", "Data-driven Slack discussions"]
  },
  {
    slug: "amplitude",
    name: "Amplitude",
    category: "Analytics",
    description: "Amplitude is a digital analytics platform that helps teams understand user behavior across products.",
    howItWorks: "Pingdesk routes Amplitude chart alerts, cohort updates, and experiment results to Slack. Product and growth teams stay informed about user behavior changes and can discuss insights in real time.",
    benefits: ["Chart alert notifications", "Experiment result updates", "Cohort change alerts", "Real-time insight sharing"]
  },
  {
    slug: "segment",
    name: "Segment",
    category: "Analytics",
    description: "Segment is a customer data platform that collects, cleans, and activates customer data across tools.",
    howItWorks: "Pingdesk delivers Segment source health alerts, integration errors, and data pipeline status to Slack. Data teams can monitor their customer data infrastructure and respond to issues from chat.",
    benefits: ["Source health alerts", "Integration error notifications", "Pipeline status updates", "Data infrastructure monitoring"]
  },
  {
    slug: "hotjar",
    name: "Hotjar",
    category: "Analytics",
    description: "Hotjar is a behavior analytics tool that reveals what users do on your site through heatmaps and recordings.",
    howItWorks: "Pingdesk sends Hotjar survey responses, feedback alerts, and heatmap summaries to Slack. Product and UX teams can review user feedback and behavior insights without leaving their workflow.",
    benefits: ["Survey response alerts", "Feedback notifications", "Heatmap summaries", "User insight sharing"]
  },
  {
    slug: "fullstory",
    name: "FullStory",
    category: "Analytics",
    description: "FullStory is a digital experience analytics platform that captures and analyzes every user interaction.",
    howItWorks: "Pingdesk routes FullStory rage click alerts, error session notifications, and key metric changes to Slack. UX teams can investigate user frustration and fix issues collaboratively from chat.",
    benefits: ["Rage click alerts", "Error session notifications", "Metric change alerts", "UX issue collaboration"]
  },
  {
    slug: "heap",
    name: "Heap",
    category: "Analytics",
    description: "Heap is an analytics platform that automatically captures every user interaction for complete behavioral data.",
    howItWorks: "Pingdesk delivers Heap metric alerts, funnel drop-off notifications, and usage trend summaries to Slack. Teams can track product adoption and user journeys from their Slack channels.",
    benefits: ["Metric alert notifications", "Funnel drop-off alerts", "Usage trend summaries", "Product adoption tracking"]
  },
  {
    slug: "looker",
    name: "Looker",
    category: "Analytics",
    description: "Looker is a business intelligence and data analytics platform now part of Google Cloud.",
    howItWorks: "Pingdesk sends Looker dashboard alerts, scheduled report links, and data anomaly notifications to Slack. Business teams can access key reports and discuss data insights directly from their channels.",
    benefits: ["Dashboard alert notifications", "Scheduled report delivery", "Data anomaly alerts", "In-chat data discussions"]
  },
  {
    slug: "metabase",
    name: "Metabase",
    category: "Analytics",
    description: "Metabase is an open-source business intelligence tool that lets anyone ask questions about their data.",
    howItWorks: "Pingdesk delivers Metabase alert notifications, scheduled question results, and dashboard pulse summaries to Slack. Teams democratize data access by bringing insights directly to where they collaborate.",
    benefits: ["Alert notifications in Slack", "Scheduled question results", "Dashboard pulse delivery", "Democratized data access"]
  },
  {
    slug: "tableau",
    name: "Tableau",
    category: "Analytics",
    description: "Tableau is a visual analytics platform that helps people see and understand data through interactive dashboards.",
    howItWorks: "Pingdesk routes Tableau subscription notifications, extract refresh alerts, and data-driven alerts to Slack. Analysts can share dashboard snapshots and discuss findings with stakeholders in chat.",
    benefits: ["Subscription notifications", "Extract refresh alerts", "Data-driven alert routing", "Dashboard snapshot sharing"]
  },
  {
    slug: "power-bi",
    name: "Power BI",
    category: "Analytics",
    description: "Power BI is Microsoft's business analytics service for interactive visualizations and business intelligence.",
    howItWorks: "Pingdesk sends Power BI data alerts, report refresh statuses, and dashboard notifications to Slack. Business teams can monitor KPIs and share insights without switching to the Power BI portal.",
    benefits: ["Data alert notifications", "Report refresh status", "Dashboard notifications", "KPI monitoring in Slack"]
  },

  // ===== HR =====
  {
    slug: "bamboohr",
    name: "BambooHR",
    category: "HR",
    description: "BambooHR is a human resources software that provides a centralized hub for employee data and HR workflows.",
    howItWorks: "Pingdesk delivers BambooHR time-off requests, onboarding tasks, and employee announcements to Slack. HR teams can approve requests and welcome new hires directly from their Slack workspace.",
    benefits: ["Time-off request routing", "Onboarding task alerts", "Employee announcements", "Approve requests from Slack"]
  },
  {
    slug: "gusto",
    name: "Gusto",
    category: "HR",
    description: "Gusto is a cloud-based payroll, benefits, and HR management platform for small and medium businesses.",
    howItWorks: "Pingdesk sends Gusto payroll processing alerts, benefits enrollment reminders, and compliance notifications to Slack. HR teams stay on top of payroll deadlines and employee requests from chat.",
    benefits: ["Payroll processing alerts", "Benefits enrollment reminders", "Compliance notifications", "Deadline tracking in Slack"]
  },
  {
    slug: "rippling",
    name: "Rippling",
    category: "HR",
    description: "Rippling is a workforce management platform that unifies HR, IT, and finance operations.",
    howItWorks: "Pingdesk routes Rippling onboarding workflows, device provisioning alerts, and policy updates to Slack. IT and HR teams can coordinate employee lifecycle events from their Slack channels.",
    benefits: ["Onboarding workflow alerts", "Device provisioning updates", "Policy change notifications", "Cross-team coordination"]
  },
  {
    slug: "workday",
    name: "Workday",
    category: "HR",
    description: "Workday is an enterprise cloud application for finance, HR, and planning used by large organizations.",
    howItWorks: "Pingdesk delivers Workday approval requests, time tracking reminders, and performance review notifications to Slack. Employees and managers can act on HR tasks without logging into the Workday portal.",
    benefits: ["Approval request routing", "Time tracking reminders", "Performance review alerts", "Reduced portal logins"]
  },
  {
    slug: "adp",
    name: "ADP",
    category: "HR",
    description: "ADP is a comprehensive human capital management platform for payroll, tax, HR, and benefits administration.",
    howItWorks: "Pingdesk sends ADP payroll summaries, tax filing alerts, and benefits notifications to Slack. HR and finance teams can monitor payroll cycles and compliance requirements from their workspace.",
    benefits: ["Payroll summary notifications", "Tax filing alerts", "Benefits notifications", "Compliance monitoring"]
  },
  {
    slug: "deel",
    name: "Deel",
    category: "HR",
    description: "Deel is a global payroll and compliance platform that helps companies hire and pay international contractors and employees.",
    howItWorks: "Pingdesk routes Deel contract signing notifications, payment processing alerts, and compliance updates to Slack. Global teams can manage international hiring workflows from their Slack channels.",
    benefits: ["Contract signing alerts", "Payment processing notifications", "Compliance updates", "Global hiring coordination"]
  },
  {
    slug: "remote-com",
    name: "Remote.com",
    category: "HR",
    description: "Remote.com is an HR platform for hiring, managing, and paying remote employees and contractors globally.",
    howItWorks: "Pingdesk delivers Remote.com onboarding updates, payroll alerts, and document requests to Slack. Distributed teams can manage global employment tasks without leaving their Slack workspace.",
    benefits: ["Onboarding update alerts", "Payroll notifications", "Document request routing", "Global team management"]
  },
  {
    slug: "lattice",
    name: "Lattice",
    category: "HR",
    description: "Lattice is a people management platform that combines performance management, engagement, and career development.",
    howItWorks: "Pingdesk sends Lattice review cycle reminders, feedback requests, and engagement survey alerts to Slack. Managers and employees can stay on top of performance workflows from their daily chat.",
    benefits: ["Review cycle reminders", "Feedback request routing", "Survey alerts in Slack", "Performance workflow tracking"]
  },
  {
    slug: "15five",
    name: "15Five",
    category: "HR",
    description: "15Five is a performance management platform focused on continuous feedback, check-ins, and OKR tracking.",
    howItWorks: "Pingdesk delivers 15Five check-in reminders, high-five notifications, and OKR progress alerts to Slack. Teams can maintain a culture of continuous feedback without leaving their collaboration workspace.",
    benefits: ["Check-in reminders", "High-five notifications", "OKR progress alerts", "Continuous feedback culture"]
  },
  {
    slug: "culture-amp",
    name: "Culture Amp",
    category: "HR",
    description: "Culture Amp is an employee experience platform for surveys, performance management, and people analytics.",
    howItWorks: "Pingdesk routes Culture Amp survey launch notifications, action plan reminders, and engagement trend alerts to Slack. HR and leadership teams can act on employee feedback faster from their Slack channels.",
    benefits: ["Survey launch notifications", "Action plan reminders", "Engagement trend alerts", "Faster feedback action"]
  },

  // ===== FINANCE =====
  {
    slug: "quickbooks",
    name: "QuickBooks",
    category: "Finance",
    description: "QuickBooks is Intuit's accounting software for small businesses to manage invoices, expenses, and payroll.",
    howItWorks: "Pingdesk sends QuickBooks invoice payment alerts, expense approvals, and overdue payment reminders to Slack. Finance teams can track cash flow and approve expenses without opening the accounting software.",
    benefits: ["Payment alert notifications", "Expense approval routing", "Overdue reminders", "Cash flow monitoring"]
  },
  {
    slug: "xero",
    name: "Xero",
    category: "Finance",
    description: "Xero is a cloud-based accounting software platform for small and medium-sized businesses.",
    howItWorks: "Pingdesk delivers Xero invoice updates, bank reconciliation alerts, and expense claim notifications to Slack. Finance teams stay on top of bookkeeping tasks directly from their Slack workspace.",
    benefits: ["Invoice update alerts", "Reconciliation notifications", "Expense claim routing", "Streamlined bookkeeping"]
  },
  {
    slug: "stripe",
    name: "Stripe",
    category: "Finance",
    description: "Stripe is a technology company that builds economic infrastructure for internet businesses to accept payments.",
    howItWorks: "Pingdesk routes Stripe payment notifications, subscription events, and dispute alerts to Slack. Revenue and engineering teams can monitor transactions and respond to payment issues in real time.",
    benefits: ["Payment notifications in Slack", "Subscription event alerts", "Dispute alerts", "Real-time revenue monitoring"]
  },
  {
    slug: "brex",
    name: "Brex",
    category: "Finance",
    description: "Brex is a corporate card and spend management platform built for growing businesses.",
    howItWorks: "Pingdesk sends Brex transaction alerts, budget threshold notifications, and receipt reminders to Slack. Finance teams can monitor company spending and enforce policies from their chat workspace.",
    benefits: ["Transaction alerts", "Budget threshold notifications", "Receipt reminders", "Spend policy enforcement"]
  },
  {
    slug: "ramp",
    name: "Ramp",
    category: "Finance",
    description: "Ramp is a corporate card and expense management platform that helps companies save time and money.",
    howItWorks: "Pingdesk delivers Ramp spending alerts, reimbursement requests, and savings insights to Slack. Teams can approve expenses and track budgets without switching to the Ramp dashboard.",
    benefits: ["Spending alert notifications", "Reimbursement request routing", "Savings insights", "Budget tracking in Slack"]
  },
  {
    slug: "expensify",
    name: "Expensify",
    category: "Finance",
    description: "Expensify is an expense management platform that simplifies receipt tracking, expense reports, and reimbursements.",
    howItWorks: "Pingdesk routes Expensify report submissions, approval requests, and reimbursement statuses to Slack. Employees and managers can handle expense workflows entirely from their Slack channels.",
    benefits: ["Report submission alerts", "Approval request routing", "Reimbursement status updates", "Simplified expense workflows"]
  },
  {
    slug: "bill-com",
    name: "Bill.com",
    category: "Finance",
    description: "Bill.com is a cloud-based platform that automates accounts payable and accounts receivable processes.",
    howItWorks: "Pingdesk sends Bill.com payment approval requests, invoice receipt notifications, and payment status updates to Slack. AP and AR teams can process payments faster without leaving their workspace.",
    benefits: ["Payment approval routing", "Invoice receipt alerts", "Payment status updates", "Faster payment processing"]
  },
  {
    slug: "freshbooks",
    name: "FreshBooks",
    category: "Finance",
    description: "FreshBooks is cloud-based accounting software designed for small business owners and freelancers.",
    howItWorks: "Pingdesk delivers FreshBooks invoice payment notifications, late payment reminders, and expense alerts to Slack. Small teams can manage their finances and client billing from Slack.",
    benefits: ["Invoice payment alerts", "Late payment reminders", "Expense notifications", "Client billing tracking"]
  },
  {
    slug: "wave",
    name: "Wave",
    category: "Finance",
    description: "Wave is a free financial software platform for small businesses with invoicing, accounting, and receipt scanning.",
    howItWorks: "Pingdesk sends Wave invoice updates, payment received notifications, and financial report summaries to Slack. Small business owners can track their finances without leaving their daily communication tool.",
    benefits: ["Invoice update alerts", "Payment received notifications", "Report summaries", "Financial tracking in Slack"]
  },

  // ===== MARKETING =====
  {
    slug: "hubspot",
    name: "HubSpot",
    category: "Marketing",
    description: "HubSpot is an inbound marketing, sales, and CRM platform that helps companies grow better.",
    howItWorks: "Pingdesk delivers HubSpot lead notifications, form submissions, and campaign performance alerts to Slack. Marketing and sales teams can act on hot leads and track campaigns without leaving their chat workflow.",
    benefits: ["Lead notifications in Slack", "Form submission alerts", "Campaign performance updates", "Faster lead response"]
  },
  {
    slug: "mailchimp",
    name: "Mailchimp",
    category: "Marketing",
    description: "Mailchimp is an all-in-one marketing platform for email campaigns, automations, and audience management.",
    howItWorks: "Pingdesk sends Mailchimp campaign performance stats, subscriber alerts, and automation triggers to Slack. Marketing teams can monitor email campaigns and react to engagement trends from their workspace.",
    benefits: ["Campaign stat notifications", "Subscriber alerts", "Automation trigger updates", "Email engagement tracking"]
  },
  {
    slug: "marketo",
    name: "Marketo",
    category: "Marketing",
    description: "Marketo is Adobe's marketing automation platform for lead management, email marketing, and analytics.",
    howItWorks: "Pingdesk routes Marketo lead scoring changes, campaign completions, and engagement alerts to Slack. Marketing ops teams can monitor automation performance and lead quality from their Slack channels.",
    benefits: ["Lead score change alerts", "Campaign completion notifications", "Engagement alerts", "Marketing ops monitoring"]
  },
  {
    slug: "intercom-marketing",
    name: "Intercom",
    category: "Marketing",
    description: "Intercom is a customer messaging platform for marketing, sales, and support with live chat and bots.",
    howItWorks: "Pingdesk surfaces Intercom conversation starts, lead captures, and campaign metrics in Slack. Growth and marketing teams can engage with website visitors and track messaging performance from Slack.",
    benefits: ["Conversation start alerts", "Lead capture notifications", "Campaign metric updates", "Visitor engagement tracking"]
  },
  {
    slug: "drift",
    name: "Drift",
    category: "Marketing",
    description: "Drift is a conversational marketing platform that uses chatbots and live chat to generate leads.",
    howItWorks: "Pingdesk delivers Drift conversation alerts, meeting bookings, and lead qualification notifications to Slack. Sales and marketing teams can follow up on qualified leads instantly from their workspace.",
    benefits: ["Conversation alerts in Slack", "Meeting booking notifications", "Lead qualification updates", "Instant lead follow-up"]
  },
  {
    slug: "activecampaign",
    name: "ActiveCampaign",
    category: "Marketing",
    description: "ActiveCampaign is a customer experience automation platform combining email marketing, automation, and CRM.",
    howItWorks: "Pingdesk sends ActiveCampaign automation triggers, deal updates, and campaign results to Slack. Marketing teams can monitor automation workflows and customer journeys from their Slack channels.",
    benefits: ["Automation trigger alerts", "Deal update notifications", "Campaign result summaries", "Journey monitoring in Slack"]
  },
  {
    slug: "convertkit",
    name: "ConvertKit",
    category: "Marketing",
    description: "ConvertKit is an email marketing platform built for creators to grow and monetize their audience.",
    howItWorks: "Pingdesk delivers ConvertKit subscriber milestones, broadcast performance, and automation alerts to Slack. Creator teams can track audience growth and email engagement from their daily workspace.",
    benefits: ["Subscriber milestone alerts", "Broadcast performance stats", "Automation notifications", "Audience growth tracking"]
  },
  {
    slug: "buffer",
    name: "Buffer",
    category: "Marketing",
    description: "Buffer is a social media management platform for scheduling posts and analyzing performance across channels.",
    howItWorks: "Pingdesk sends Buffer post scheduling confirmations, performance analytics, and engagement alerts to Slack. Social media teams can coordinate content calendars and track results from Slack.",
    benefits: ["Post scheduling alerts", "Performance analytics", "Engagement notifications", "Content calendar coordination"]
  },
  {
    slug: "hootsuite",
    name: "Hootsuite",
    category: "Marketing",
    description: "Hootsuite is a social media management platform for managing multiple social networks and measuring campaign results.",
    howItWorks: "Pingdesk routes Hootsuite social media alerts, mention notifications, and campaign analytics to Slack. Marketing teams can respond to social engagement and track campaigns from their workspace.",
    benefits: ["Social media alerts", "Mention notifications", "Campaign analytics", "Social engagement tracking"]
  },
  {
    slug: "sprout-social",
    name: "Sprout Social",
    category: "Marketing",
    description: "Sprout Social is a social media management and intelligence platform for brands and agencies.",
    howItWorks: "Pingdesk delivers Sprout Social engagement alerts, review notifications, and social listening insights to Slack. Teams can manage brand reputation and respond to social activity from their chat workspace.",
    benefits: ["Engagement alert routing", "Review notifications", "Social listening insights", "Brand reputation management"]
  },
  {
    slug: "semrush",
    name: "SEMrush",
    category: "Marketing",
    description: "SEMrush is an all-in-one digital marketing toolkit for SEO, content marketing, and competitive research.",
    howItWorks: "Pingdesk sends SEMrush ranking changes, site audit alerts, and competitor movement notifications to Slack. SEO and marketing teams can react to search visibility changes directly from their Slack channels.",
    benefits: ["Ranking change alerts", "Site audit notifications", "Competitor movement alerts", "SEO monitoring in Slack"]
  },
  {
    slug: "ahrefs",
    name: "Ahrefs",
    category: "Marketing",
    description: "Ahrefs is an SEO toolset for backlink analysis, keyword research, competitor analysis, and rank tracking.",
    howItWorks: "Pingdesk delivers Ahrefs backlink alerts, keyword ranking updates, and site health notifications to Slack. SEO teams can monitor their search performance and react to changes from their workspace.",
    benefits: ["Backlink alert notifications", "Keyword ranking updates", "Site health alerts", "SEO performance tracking"]
  },

  // ===== SALES =====
  {
    slug: "salesforce",
    name: "Salesforce",
    category: "Sales",
    description: "Salesforce is the world's leading CRM platform for managing customer relationships and sales pipelines.",
    howItWorks: "Pingdesk routes Salesforce deal updates, lead assignments, and forecast changes to Slack. Sales teams can update opportunities, log activities, and collaborate on deals without leaving their workspace.",
    benefits: ["Deal update notifications", "Lead assignment alerts", "Forecast change updates", "CRM updates from Slack"]
  },
  {
    slug: "pipedrive",
    name: "Pipedrive",
    category: "Sales",
    description: "Pipedrive is a sales CRM and pipeline management tool designed to help small teams close more deals.",
    howItWorks: "Pingdesk sends Pipedrive deal stage changes, activity reminders, and won/lost deal notifications to Slack. Sales reps can manage their pipeline and stay on top of follow-ups from their Slack channels.",
    benefits: ["Deal stage change alerts", "Activity reminders", "Won/lost notifications", "Pipeline management in Slack"]
  },
  {
    slug: "close",
    name: "Close",
    category: "Sales",
    description: "Close is an all-in-one CRM built for inside sales teams with calling, email, and SMS features.",
    howItWorks: "Pingdesk delivers Close lead updates, call log summaries, and task reminders to Slack. Inside sales teams can track outreach activity and manage their pipeline from their daily chat tool.",
    benefits: ["Lead update notifications", "Call log summaries", "Task reminders", "Outreach activity tracking"]
  },
  {
    slug: "apollo",
    name: "Apollo",
    category: "Sales",
    description: "Apollo is a sales intelligence and engagement platform for prospecting, enrichment, and outreach.",
    howItWorks: "Pingdesk routes Apollo prospect alerts, sequence engagement notifications, and data enrichment updates to Slack. Sales development teams can act on hot prospects and track outreach from their workspace.",
    benefits: ["Prospect alert routing", "Sequence engagement updates", "Data enrichment notifications", "Hot prospect tracking"]
  },
  {
    slug: "outreach",
    name: "Outreach",
    category: "Sales",
    description: "Outreach is a sales execution platform that helps revenue teams create and close more pipeline.",
    howItWorks: "Pingdesk sends Outreach sequence performance, meeting booking alerts, and prospect engagement notifications to Slack. Sales teams can optimize their outreach cadences from their Slack channels.",
    benefits: ["Sequence performance updates", "Meeting booking alerts", "Engagement notifications", "Cadence optimization in Slack"]
  },
  {
    slug: "gong",
    name: "Gong",
    category: "Sales",
    description: "Gong is a revenue intelligence platform that captures and analyzes customer interactions to improve sales outcomes.",
    howItWorks: "Pingdesk delivers Gong call summaries, deal risk alerts, and coaching insights to Slack. Sales managers and reps can review call highlights and act on deal intelligence from their workspace.",
    benefits: ["Call summary delivery", "Deal risk alerts", "Coaching insight notifications", "Revenue intelligence in Slack"]
  },
  {
    slug: "chorus",
    name: "Chorus",
    category: "Sales",
    description: "Chorus is a conversation intelligence platform that records, transcribes, and analyzes sales calls.",
    howItWorks: "Pingdesk routes Chorus call recordings, key moment highlights, and deal update summaries to Slack. Sales teams can review critical call moments and share winning talk tracks from their channels.",
    benefits: ["Call recording notifications", "Key moment highlights", "Deal summary updates", "Talk track sharing"]
  },
  {
    slug: "zoominfo",
    name: "ZoomInfo",
    category: "Sales",
    description: "ZoomInfo is a B2B data platform that provides contact and company information for go-to-market teams.",
    howItWorks: "Pingdesk sends ZoomInfo intent signals, contact update alerts, and buying committee notifications to Slack. Sales and marketing teams can act on buyer intent data directly from their workspace.",
    benefits: ["Intent signal alerts", "Contact update notifications", "Buying committee alerts", "Buyer intent tracking"]
  },
  {
    slug: "lusha",
    name: "Lusha",
    category: "Sales",
    description: "Lusha is a B2B contact data platform that helps sales teams find accurate prospect information.",
    howItWorks: "Pingdesk delivers Lusha enrichment results, prospect data updates, and credit usage alerts to Slack. Sales teams can access prospect contact information and manage data credits from their workspace.",
    benefits: ["Enrichment result delivery", "Prospect data updates", "Credit usage alerts", "Contact data in Slack"]
  },

  // ===== SUPPORT =====
  {
    slug: "zendesk",
    name: "Zendesk",
    category: "Support",
    description: "Zendesk is a customer service platform that provides ticketing, self-service, and customer engagement tools.",
    howItWorks: "Pingdesk routes Zendesk ticket notifications, CSAT scores, and escalation alerts to Slack. Support teams can triage, respond to, and resolve customer issues collaboratively from their Slack channels.",
    benefits: ["Ticket notifications in Slack", "CSAT score alerts", "Escalation routing", "Collaborative ticket resolution"]
  },
  {
    slug: "freshdesk",
    name: "Freshdesk",
    category: "Support",
    description: "Freshdesk is a cloud-based customer support software that helps businesses manage customer conversations.",
    howItWorks: "Pingdesk sends Freshdesk ticket assignments, SLA breach warnings, and customer satisfaction alerts to Slack. Support agents can manage their ticket queue and collaborate on complex issues from chat.",
    benefits: ["Ticket assignment alerts", "SLA breach warnings", "Satisfaction alerts", "Queue management in Slack"]
  },
  {
    slug: "intercom-support",
    name: "Intercom",
    category: "Support",
    description: "Intercom is a customer messaging platform that combines live chat, bots, and a help desk for support teams.",
    howItWorks: "Pingdesk delivers Intercom conversation assignments, unresolved ticket alerts, and customer feedback notifications to Slack. Support teams can handle live chats and manage their inbox from Slack.",
    benefits: ["Conversation assignment routing", "Unresolved ticket alerts", "Customer feedback notifications", "Live chat management"]
  },
  {
    slug: "help-scout",
    name: "Help Scout",
    category: "Support",
    description: "Help Scout is a customer support platform with shared inboxes, live chat, and a knowledge base.",
    howItWorks: "Pingdesk routes Help Scout conversation updates, assignment notifications, and happiness ratings to Slack. Support teams can collaborate on customer emails and track team performance from their workspace.",
    benefits: ["Conversation update alerts", "Assignment notifications", "Happiness rating tracking", "Email collaboration in Slack"]
  },
  {
    slug: "servicenow",
    name: "ServiceNow",
    category: "Support",
    description: "ServiceNow is an enterprise IT service management platform for automating workflows and managing digital operations.",
    howItWorks: "Pingdesk sends ServiceNow incident updates, change request approvals, and SLA alerts to Slack. IT teams can manage service desk operations and approve changes directly from their Slack channels.",
    benefits: ["Incident update routing", "Change request approvals", "SLA alert notifications", "Service desk in Slack"]
  },
  {
    slug: "kayako",
    name: "Kayako",
    category: "Support",
    description: "Kayako is a unified customer service platform that delivers personalized support across channels.",
    howItWorks: "Pingdesk delivers Kayako ticket notifications, live chat alerts, and customer journey updates to Slack. Support teams can provide omnichannel service while staying in their Slack workflow.",
    benefits: ["Ticket notifications", "Live chat alerts", "Customer journey updates", "Omnichannel support in Slack"]
  },
  {
    slug: "liveagent",
    name: "LiveAgent",
    category: "Support",
    description: "LiveAgent is an all-in-one help desk software with ticketing, live chat, and call center features.",
    howItWorks: "Pingdesk routes LiveAgent ticket assignments, chat requests, and call notifications to Slack. Support teams can manage all their customer communication channels from a single Slack workspace.",
    benefits: ["Ticket assignment routing", "Chat request alerts", "Call notifications", "Unified channel management"]
  },
  {
    slug: "crisp",
    name: "Crisp",
    category: "Support",
    description: "Crisp is a customer messaging platform with live chat, chatbot, and knowledge base features for startups.",
    howItWorks: "Pingdesk sends Crisp live chat notifications, chatbot handoff alerts, and visitor activity updates to Slack. Startup support teams can engage with website visitors directly from their Slack channels.",
    benefits: ["Live chat notifications", "Chatbot handoff alerts", "Visitor activity updates", "Website engagement from Slack"]
  },

  // ===== SECURITY =====
  {
    slug: "okta",
    name: "Okta",
    category: "Security",
    description: "Okta is an identity and access management platform that provides secure authentication and single sign-on.",
    howItWorks: "Pingdesk routes Okta security alerts, suspicious login notifications, and MFA events to Slack. Security teams can monitor identity threats and respond to access issues in real time from their workspace.",
    benefits: ["Security alert notifications", "Suspicious login alerts", "MFA event tracking", "Real-time threat monitoring"]
  },
  {
    slug: "auth0",
    name: "Auth0",
    category: "Security",
    description: "Auth0 is a flexible authentication and authorization platform for building secure access to applications.",
    howItWorks: "Pingdesk delivers Auth0 login anomaly alerts, brute force attack notifications, and user registration events to Slack. Engineering and security teams can respond to auth issues without checking logs manually.",
    benefits: ["Login anomaly alerts", "Brute force notifications", "Registration event tracking", "Auth issue response"]
  },
  {
    slug: "1password",
    name: "1Password",
    category: "Security",
    description: "1Password is a password manager that helps teams secure their credentials and share sensitive information safely.",
    howItWorks: "Pingdesk sends 1Password vault sharing notifications, security audit alerts, and team activity updates to Slack. IT and security teams can monitor credential hygiene and respond to policy violations from chat.",
    benefits: ["Vault sharing notifications", "Security audit alerts", "Team activity updates", "Credential hygiene monitoring"]
  },
  {
    slug: "lastpass",
    name: "LastPass",
    category: "Security",
    description: "LastPass is a password management solution that stores encrypted passwords and provides secure access for teams.",
    howItWorks: "Pingdesk delivers LastPass security dashboard alerts, password health reports, and sharing notifications to Slack. IT teams can enforce password policies and monitor security posture from their workspace.",
    benefits: ["Security dashboard alerts", "Password health reports", "Sharing notifications", "Policy enforcement in Slack"]
  },
  {
    slug: "crowdstrike",
    name: "CrowdStrike",
    category: "Security",
    description: "CrowdStrike is a cybersecurity platform that provides endpoint protection, threat intelligence, and incident response.",
    howItWorks: "Pingdesk routes CrowdStrike threat detections, endpoint alerts, and incident response updates to Slack. Security operations teams can coordinate threat response and containment from their Slack channels.",
    benefits: ["Threat detection alerts", "Endpoint protection notifications", "Incident response coordination", "SOC workflow in Slack"]
  },
  {
    slug: "sentinelone",
    name: "SentinelOne",
    category: "Security",
    description: "SentinelOne is an autonomous endpoint security platform that prevents, detects, and responds to cyber attacks.",
    howItWorks: "Pingdesk sends SentinelOne threat alerts, quarantine notifications, and remediation updates to Slack. Security teams can track threats and coordinate response actions directly from their workspace.",
    benefits: ["Threat alert notifications", "Quarantine alerts", "Remediation updates", "Threat response coordination"]
  },
  {
    slug: "snyk",
    name: "Snyk",
    category: "Security",
    description: "Snyk is a developer-first security platform that finds and fixes vulnerabilities in code, dependencies, and containers.",
    howItWorks: "Pingdesk delivers Snyk vulnerability alerts, license compliance issues, and fix pull request notifications to Slack. Development teams can address security issues before they reach production from their chat workflow.",
    benefits: ["Vulnerability alert routing", "License compliance alerts", "Fix PR notifications", "Shift-left security in Slack"]
  },

  // ===== DOCUMENTATION =====
  {
    slug: "confluence",
    name: "Confluence",
    category: "Documentation",
    description: "Confluence is Atlassian's team workspace for creating, organizing, and collaborating on documents and knowledge bases.",
    howItWorks: "Pingdesk sends Confluence page creation alerts, comment notifications, and space update summaries to Slack. Teams can stay informed about documentation changes and collaborate on content from their workspace.",
    benefits: ["Page creation alerts", "Comment notifications", "Space update summaries", "Doc collaboration in Slack"]
  },
  {
    slug: "notion-docs",
    name: "Notion",
    category: "Documentation",
    description: "Notion is a connected workspace that combines wikis, docs, and project management for teams.",
    howItWorks: "Pingdesk routes Notion page edits, database updates, and mention notifications to Slack. Teams can track knowledge base changes and respond to document comments without opening Notion.",
    benefits: ["Page edit notifications", "Database update alerts", "Mention routing", "Knowledge base tracking"]
  },
  {
    slug: "gitbook",
    name: "GitBook",
    category: "Documentation",
    description: "GitBook is a modern documentation platform for teams to create, manage, and publish beautiful documentation.",
    howItWorks: "Pingdesk delivers GitBook change request notifications, merge alerts, and content update summaries to Slack. Documentation teams can review and approve changes from their Slack channels.",
    benefits: ["Change request notifications", "Merge alerts", "Content update summaries", "Doc review in Slack"]
  },
  {
    slug: "readme",
    name: "ReadMe",
    category: "Documentation",
    description: "ReadMe is a developer hub platform for creating interactive API documentation and developer portals.",
    howItWorks: "Pingdesk sends ReadMe API changelog updates, developer feedback, and documentation usage analytics to Slack. Developer relations teams can track API adoption and respond to feedback from their workspace.",
    benefits: ["Changelog update alerts", "Developer feedback routing", "Usage analytics summaries", "API adoption tracking"]
  },
  {
    slug: "docusaurus",
    name: "Docusaurus",
    category: "Documentation",
    description: "Docusaurus is a static site generator by Meta for building optimized documentation websites.",
    howItWorks: "Pingdesk notifies your Slack channels about Docusaurus build statuses, deployment completions, and content PR merges. Documentation teams can track site updates and coordinate releases from Slack.",
    benefits: ["Build status notifications", "Deployment completion alerts", "Content PR tracking", "Release coordination"]
  },
  {
    slug: "slite",
    name: "Slite",
    category: "Documentation",
    description: "Slite is a knowledge base tool that helps teams organize and share their collective knowledge.",
    howItWorks: "Pingdesk delivers Slite document updates, collection changes, and ask-an-expert requests to Slack. Teams can maintain their knowledge base and answer questions without leaving their chat workflow.",
    benefits: ["Document update alerts", "Collection change notifications", "Expert request routing", "Knowledge sharing in Slack"]
  },
  {
    slug: "almanac",
    name: "Almanac",
    category: "Documentation",
    description: "Almanac is a modern document collaboration platform with version control and approval workflows.",
    howItWorks: "Pingdesk routes Almanac document approval requests, version updates, and comment notifications to Slack. Teams can review and approve documents collaboratively from their Slack channels.",
    benefits: ["Approval request routing", "Version update alerts", "Comment notifications", "Document review in Slack"]
  },

  // ===== PRODUCTIVITY =====
  {
    slug: "google-workspace",
    name: "Google Workspace",
    category: "Productivity",
    description: "Google Workspace is a suite of cloud productivity and collaboration tools including Gmail, Docs, Drive, and Calendar.",
    howItWorks: "Pingdesk surfaces Google Workspace notifications—document shares, calendar invites, and Drive updates—in Slack. Teams can respond to collaboration requests and manage their workday without switching between Google apps and Slack.",
    benefits: ["Document share alerts", "Calendar invite routing", "Drive update notifications", "Unified workspace in Slack"]
  },
  {
    slug: "microsoft-365",
    name: "Microsoft 365",
    category: "Productivity",
    description: "Microsoft 365 is a suite of productivity applications including Word, Excel, PowerPoint, and Outlook.",
    howItWorks: "Pingdesk delivers Microsoft 365 document collaboration invites, email highlights, and calendar updates to Slack. Teams using both Microsoft and Slack can bridge their productivity workflows seamlessly.",
    benefits: ["Document collaboration alerts", "Email highlight delivery", "Calendar update routing", "Cross-platform productivity"]
  },
  {
    slug: "dropbox",
    name: "Dropbox",
    category: "Productivity",
    description: "Dropbox is a cloud storage and file synchronization service for storing, sharing, and collaborating on files.",
    howItWorks: "Pingdesk sends Dropbox file share notifications, folder update alerts, and comment notifications to Slack. Teams can access and collaborate on shared files without leaving their Slack workspace.",
    benefits: ["File share notifications", "Folder update alerts", "Comment notifications", "File collaboration in Slack"]
  },
  {
    slug: "box",
    name: "Box",
    category: "Productivity",
    description: "Box is a cloud content management and file sharing service for businesses with enterprise-grade security.",
    howItWorks: "Pingdesk routes Box file updates, approval workflows, and access request notifications to Slack. Enterprise teams can manage content workflows and permissions from their Slack channels.",
    benefits: ["File update notifications", "Approval workflow routing", "Access request alerts", "Content management in Slack"]
  },
  {
    slug: "onedrive",
    name: "OneDrive",
    category: "Productivity",
    description: "OneDrive is Microsoft's cloud storage service for storing, sharing, and syncing files across devices.",
    howItWorks: "Pingdesk delivers OneDrive file sharing alerts, sync status notifications, and collaboration invites to Slack. Teams can manage their cloud storage and access shared files from their workspace.",
    benefits: ["File sharing alerts", "Sync status notifications", "Collaboration invites", "Cloud storage in Slack"]
  },
  {
    slug: "evernote",
    name: "Evernote",
    category: "Productivity",
    description: "Evernote is a note-taking and organization app for capturing ideas, managing tasks, and organizing information.",
    howItWorks: "Pingdesk sends Evernote notebook share notifications, note update alerts, and reminder notifications to Slack. Teams can share notes and capture meeting insights directly from their Slack channels.",
    benefits: ["Notebook share alerts", "Note update notifications", "Reminder routing", "Meeting insight sharing"]
  },
  {
    slug: "todoist",
    name: "Todoist",
    category: "Productivity",
    description: "Todoist is a task management app that helps individuals and teams organize, plan, and collaborate on projects.",
    howItWorks: "Pingdesk delivers Todoist task reminders, project updates, and completion notifications to Slack. Team members can manage their personal and shared task lists from their Slack workspace.",
    benefits: ["Task reminder delivery", "Project update alerts", "Completion notifications", "Task management in Slack"]
  },
  {
    slug: "things-3",
    name: "Things 3",
    category: "Productivity",
    description: "Things 3 is an award-winning personal task manager for Apple devices that helps organize life and work.",
    howItWorks: "Pingdesk bridges Things 3 task deadlines and project milestones with Slack notifications. Apple users can stay on top of their personal task management while collaborating with their team in Slack.",
    benefits: ["Task deadline reminders", "Project milestone alerts", "Personal productivity in Slack", "Apple ecosystem integration"]
  },
  {
    slug: "obsidian",
    name: "Obsidian",
    category: "Productivity",
    description: "Obsidian is a knowledge management app that uses linked Markdown files for personal and team knowledge bases.",
    howItWorks: "Pingdesk enables sharing Obsidian vault highlights and linked notes to Slack channels. Knowledge workers can surface relevant research and documentation from their vaults in team conversations.",
    benefits: ["Vault highlight sharing", "Linked note surfacing", "Knowledge base in Slack", "Research collaboration"]
  },

  // ===== CRM =====
  {
    slug: "salesforce-crm",
    name: "Salesforce CRM",
    category: "CRM",
    description: "Salesforce CRM is the leading customer relationship management platform for tracking leads, opportunities, and customer interactions.",
    howItWorks: "Pingdesk routes Salesforce CRM opportunity updates, contact changes, and dashboard alerts to Slack. Revenue teams can manage the entire customer lifecycle collaboratively from their Slack workspace.",
    benefits: ["Opportunity update routing", "Contact change alerts", "Dashboard alert delivery", "Customer lifecycle in Slack"]
  },
  {
    slug: "hubspot-crm",
    name: "HubSpot CRM",
    category: "CRM",
    description: "HubSpot CRM is a free customer relationship management platform with contact management, deals, and reporting.",
    howItWorks: "Pingdesk delivers HubSpot CRM deal stage changes, contact activity alerts, and task reminders to Slack. Sales teams can manage their pipeline and customer relationships without leaving their chat tool.",
    benefits: ["Deal stage change alerts", "Contact activity notifications", "Task reminders", "Pipeline management in Slack"]
  },
  {
    slug: "zoho-crm",
    name: "Zoho CRM",
    category: "CRM",
    description: "Zoho CRM is an online sales CRM platform that helps businesses manage sales, marketing, and support.",
    howItWorks: "Pingdesk sends Zoho CRM lead notifications, deal updates, and workflow alerts to Slack. Teams can act on customer data and manage sales processes from their Slack channels.",
    benefits: ["Lead notifications", "Deal update alerts", "Workflow notifications", "Sales process management"]
  },
  {
    slug: "copper",
    name: "Copper",
    category: "CRM",
    description: "Copper is a CRM built for Google Workspace that automatically captures and organizes customer data.",
    howItWorks: "Pingdesk routes Copper relationship updates, pipeline changes, and activity reminders to Slack. Google Workspace teams can manage customer relationships from both their inbox and Slack.",
    benefits: ["Relationship update alerts", "Pipeline change notifications", "Activity reminders", "Google Workspace CRM in Slack"]
  },
  {
    slug: "freshsales",
    name: "Freshsales",
    category: "CRM",
    description: "Freshsales is an AI-powered CRM by Freshworks for managing leads, deals, and customer engagement.",
    howItWorks: "Pingdesk delivers Freshsales lead scoring alerts, deal progression notifications, and AI insights to Slack. Sales teams can act on AI-driven recommendations from their Slack workspace.",
    benefits: ["Lead scoring alerts", "Deal progression notifications", "AI insight delivery", "Smart sales in Slack"]
  },
  {
    slug: "insightly",
    name: "Insightly",
    category: "CRM",
    description: "Insightly is a CRM platform that combines relationship management with project delivery for growing businesses.",
    howItWorks: "Pingdesk sends Insightly project updates, contact relationship changes, and opportunity alerts to Slack. Teams can manage both customer relationships and project delivery from their workspace.",
    benefits: ["Project update notifications", "Relationship change alerts", "Opportunity notifications", "CRM + PM in Slack"]
  },
  {
    slug: "nimble",
    name: "Nimble",
    category: "CRM",
    description: "Nimble is a social CRM that enriches contacts with social data and manages relationships across platforms.",
    howItWorks: "Pingdesk delivers Nimble contact enrichment updates, social engagement alerts, and deal notifications to Slack. Teams can leverage social intelligence and manage relationships from their Slack channels.",
    benefits: ["Contact enrichment updates", "Social engagement alerts", "Deal notifications", "Social CRM in Slack"]
  },

  // ===== DEVOPS =====
  {
    slug: "github-actions",
    name: "GitHub Actions",
    category: "DevOps",
    description: "GitHub Actions is a CI/CD platform that automates build, test, and deployment workflows directly from GitHub.",
    howItWorks: "Pingdesk delivers GitHub Actions workflow results, deployment statuses, and failed job alerts to Slack. DevOps teams can monitor and manage CI/CD pipelines from their Slack channels.",
    benefits: ["Workflow result notifications", "Deployment status updates", "Failed job alerts", "CI/CD monitoring in Slack"]
  },
  {
    slug: "argocd",
    name: "Argo CD",
    category: "DevOps",
    description: "Argo CD is a declarative GitOps continuous delivery tool for Kubernetes applications.",
    howItWorks: "Pingdesk routes Argo CD sync statuses, health check results, and deployment drift alerts to Slack. Platform teams can monitor GitOps deployments and respond to sync failures from their workspace.",
    benefits: ["Sync status notifications", "Health check alerts", "Deployment drift warnings", "GitOps monitoring in Slack"]
  },
  {
    slug: "ansible",
    name: "Ansible",
    category: "DevOps",
    description: "Ansible is an open-source IT automation engine for configuration management, application deployment, and orchestration.",
    howItWorks: "Pingdesk sends Ansible playbook execution results, task failures, and inventory changes to Slack. Operations teams can monitor automation runs and troubleshoot failures from their Slack channels.",
    benefits: ["Playbook result notifications", "Task failure alerts", "Inventory change tracking", "Automation monitoring"]
  },
  {
    slug: "puppet",
    name: "Puppet",
    category: "DevOps",
    description: "Puppet is an infrastructure automation platform for managing server configurations at scale.",
    howItWorks: "Pingdesk delivers Puppet run reports, configuration drift alerts, and compliance summaries to Slack. Infrastructure teams can monitor configuration compliance and respond to drift from their workspace.",
    benefits: ["Run report delivery", "Configuration drift alerts", "Compliance summaries", "Infra monitoring in Slack"]
  },
  {
    slug: "chef",
    name: "Chef",
    category: "DevOps",
    description: "Chef is a configuration management tool that transforms infrastructure into code for automated server management.",
    howItWorks: "Pingdesk routes Chef convergence results, cookbook update alerts, and compliance scan notifications to Slack. DevOps teams can track infrastructure changes and compliance status from their channels.",
    benefits: ["Convergence result alerts", "Cookbook update notifications", "Compliance scan updates", "Infrastructure tracking"]
  },
  {
    slug: "vault",
    name: "HashiCorp Vault",
    category: "DevOps",
    description: "HashiCorp Vault is a secrets management tool that secures, stores, and controls access to tokens, passwords, and certificates.",
    howItWorks: "Pingdesk sends Vault access alerts, secret rotation notifications, and policy change updates to Slack. Security and DevOps teams can monitor secrets management and respond to access events from chat.",
    benefits: ["Access alert notifications", "Secret rotation reminders", "Policy change updates", "Secrets management in Slack"]
  },
  {
    slug: "consul",
    name: "HashiCorp Consul",
    category: "DevOps",
    description: "HashiCorp Consul is a service mesh and service discovery tool for connecting and securing distributed applications.",
    howItWorks: "Pingdesk delivers Consul service health checks, node failure alerts, and configuration changes to Slack. Platform teams can monitor service mesh health and respond to failures from their workspace.",
    benefits: ["Service health notifications", "Node failure alerts", "Config change tracking", "Service mesh monitoring"]
  },
  {
    slug: "prometheus",
    name: "Prometheus",
    category: "DevOps",
    description: "Prometheus is an open-source monitoring and alerting toolkit designed for reliability and scalability.",
    howItWorks: "Pingdesk routes Prometheus alert manager notifications, metric threshold breaches, and scrape failures to Slack. SRE teams can monitor system reliability and respond to alerts from their Slack channels.",
    benefits: ["Alert manager notifications", "Threshold breach alerts", "Scrape failure warnings", "SRE workflow in Slack"]
  },
  {
    slug: "splunk",
    name: "Splunk",
    category: "DevOps",
    description: "Splunk is a platform for searching, monitoring, and analyzing machine-generated big data via a web-style interface.",
    howItWorks: "Pingdesk sends Splunk alert notifications, saved search results, and dashboard summaries to Slack. Operations teams can monitor log data and respond to security events from their workspace.",
    benefits: ["Alert notifications in Slack", "Saved search results", "Dashboard summaries", "Log monitoring in chat"]
  },
  {
    slug: "nagios",
    name: "Nagios",
    category: "DevOps",
    description: "Nagios is an open-source monitoring system for networks, infrastructure, and applications.",
    howItWorks: "Pingdesk delivers Nagios host and service check alerts, downtime notifications, and recovery messages to Slack. IT teams can monitor infrastructure health and coordinate incident response from Slack.",
    benefits: ["Host check alerts", "Service monitoring notifications", "Downtime alerts", "Recovery message delivery"]
  },

  // ===== Additional tools to reach 200+ =====
  {
    slug: "twilio",
    name: "Twilio",
    category: "Communication",
    description: "Twilio is a cloud communications platform that enables developers to add messaging, voice, and video capabilities.",
    howItWorks: "Pingdesk routes Twilio SMS delivery reports, call logs, and messaging alerts to Slack. Development and support teams can monitor communication workflows and debug delivery issues from chat.",
    benefits: ["SMS delivery reports", "Call log notifications", "Messaging alerts", "Comms debugging in Slack"]
  },
  {
    slug: "sendgrid",
    name: "SendGrid",
    category: "Marketing",
    description: "SendGrid is a cloud-based email delivery platform for transactional and marketing emails at scale.",
    howItWorks: "Pingdesk delivers SendGrid email delivery stats, bounce alerts, and spam report notifications to Slack. Email teams can monitor deliverability and react to issues from their Slack workspace.",
    benefits: ["Delivery stat notifications", "Bounce alerts", "Spam report routing", "Email deliverability tracking"]
  },
  {
    slug: "cloudflare",
    name: "Cloudflare",
    category: "Security",
    description: "Cloudflare is a web infrastructure and security company providing CDN, DDoS protection, and DNS services.",
    howItWorks: "Pingdesk sends Cloudflare security alerts, DDoS mitigation notifications, and performance analytics to Slack. Engineering teams can monitor site security and performance from their workspace.",
    benefits: ["Security alert routing", "DDoS mitigation notifications", "Performance analytics", "Site protection monitoring"]
  },
  {
    slug: "postman",
    name: "Postman",
    category: "Development",
    description: "Postman is an API platform for designing, building, testing, and iterating APIs collaboratively.",
    howItWorks: "Pingdesk routes Postman monitor results, API test failures, and collection run summaries to Slack. API teams can track endpoint health and debug failures from their Slack channels.",
    benefits: ["Monitor result alerts", "API test failure notifications", "Collection run summaries", "API health tracking"]
  },
  {
    slug: "zapier",
    name: "Zapier",
    category: "Productivity",
    description: "Zapier is a workflow automation platform that connects apps and automates tasks without coding.",
    howItWorks: "Pingdesk delivers Zapier task execution logs, error alerts, and automation summaries to Slack. Teams can monitor their automated workflows and debug failed Zaps from their Slack workspace.",
    benefits: ["Task execution logs", "Error alert notifications", "Automation summaries", "Workflow debugging in Slack"]
  },
  {
    slug: "make",
    name: "Make",
    category: "Productivity",
    description: "Make (formerly Integromat) is a visual automation platform for connecting apps and designing complex workflows.",
    howItWorks: "Pingdesk sends Make scenario execution results, error notifications, and data transfer summaries to Slack. Automation teams can monitor complex workflows and fix issues from their workspace.",
    benefits: ["Scenario execution alerts", "Error notifications", "Data transfer summaries", "Visual workflow monitoring"]
  },
  {
    slug: "typeform",
    name: "Typeform",
    category: "Marketing",
    description: "Typeform is an online form builder that creates conversational, engaging forms and surveys.",
    howItWorks: "Pingdesk delivers Typeform submission notifications, response summaries, and completion rate alerts to Slack. Teams can review survey responses and act on customer feedback in real time from chat.",
    benefits: ["Submission notifications", "Response summaries", "Completion rate alerts", "Real-time feedback review"]
  },
  {
    slug: "surveymonkey",
    name: "SurveyMonkey",
    category: "Marketing",
    description: "SurveyMonkey is an online survey platform for creating and analyzing surveys, polls, and quizzes.",
    howItWorks: "Pingdesk sends SurveyMonkey response alerts, survey completion notifications, and result summaries to Slack. Research teams can track survey engagement and share findings from their Slack channels.",
    benefits: ["Response alert notifications", "Completion notifications", "Result summaries", "Research sharing in Slack"]
  },
  {
    slug: "coda",
    name: "Coda",
    category: "Productivity",
    description: "Coda is a collaborative document platform that combines documents, spreadsheets, and apps into one surface.",
    howItWorks: "Pingdesk routes Coda document updates, button press notifications, and automation results to Slack. Teams can interact with their Coda docs and track changes from their Slack workspace.",
    benefits: ["Document update alerts", "Button press notifications", "Automation results", "Doc interaction in Slack"]
  },
  {
    slug: "webflow",
    name: "Webflow",
    category: "Design",
    description: "Webflow is a visual web development platform that empowers designers to build professional websites without code.",
    howItWorks: "Pingdesk delivers Webflow site publish notifications, form submission alerts, and CMS updates to Slack. Design and marketing teams can track website changes and leads from their workspace.",
    benefits: ["Site publish notifications", "Form submission alerts", "CMS update tracking", "Website management in Slack"]
  },
  {
    slug: "wordpress",
    name: "WordPress",
    category: "Marketing",
    description: "WordPress is the world's most popular content management system powering over 40% of all websites.",
    howItWorks: "Pingdesk sends WordPress post publication notifications, comment alerts, and plugin update reminders to Slack. Content teams can manage their editorial workflow from their Slack channels.",
    benefits: ["Post publication alerts", "Comment notifications", "Plugin update reminders", "Editorial workflow in Slack"]
  },
  {
    slug: "shopify",
    name: "Shopify",
    category: "Sales",
    description: "Shopify is an e-commerce platform that allows businesses to create online stores and sell products.",
    howItWorks: "Pingdesk delivers Shopify order notifications, inventory alerts, and customer activity updates to Slack. E-commerce teams can manage their store operations and respond to orders from their workspace.",
    benefits: ["Order notifications in Slack", "Inventory alerts", "Customer activity updates", "Store operations management"]
  },
  {
    slug: "woocommerce",
    name: "WooCommerce",
    category: "Sales",
    description: "WooCommerce is an open-source e-commerce plugin for WordPress that turns any site into an online store.",
    howItWorks: "Pingdesk sends WooCommerce order alerts, stock level warnings, and customer review notifications to Slack. Store owners can manage their e-commerce operations from their Slack channels.",
    benefits: ["Order alert notifications", "Stock level warnings", "Customer review alerts", "E-commerce ops in Slack"]
  },
  {
    slug: "ghost",
    name: "Ghost",
    category: "Marketing",
    description: "Ghost is a professional publishing platform for bloggers, journalists, and content creators.",
    howItWorks: "Pingdesk delivers Ghost post publication alerts, subscriber milestone notifications, and newsletter performance stats to Slack. Publishing teams can track content performance from their workspace.",
    benefits: ["Publication alert notifications", "Subscriber milestone alerts", "Newsletter performance stats", "Content performance tracking"]
  },
  {
    slug: "pendo",
    name: "Pendo",
    category: "Analytics",
    description: "Pendo is a product experience platform that provides user analytics, in-app guidance, and feedback tools.",
    howItWorks: "Pingdesk routes Pendo feature adoption alerts, NPS responses, and guide engagement metrics to Slack. Product teams can track user onboarding and feature usage from their Slack channels.",
    benefits: ["Feature adoption alerts", "NPS response notifications", "Guide engagement metrics", "User onboarding tracking"]
  },
  {
    slug: "launchdarkly",
    name: "LaunchDarkly",
    category: "DevOps",
    description: "LaunchDarkly is a feature management platform that enables teams to safely deploy and control feature flags.",
    howItWorks: "Pingdesk sends LaunchDarkly flag change notifications, rollout progress updates, and experiment results to Slack. Engineering teams can manage feature releases and track experiments from their workspace.",
    benefits: ["Flag change notifications", "Rollout progress updates", "Experiment result alerts", "Feature management in Slack"]
  },
  {
    slug: "opsgenie",
    name: "OpsGenie",
    category: "DevOps",
    description: "OpsGenie is an incident management platform by Atlassian for alerting, on-call scheduling, and escalations.",
    howItWorks: "Pingdesk routes OpsGenie alerts, on-call schedule changes, and escalation notifications to Slack. On-call teams can acknowledge and manage incidents collaboratively from their Slack channels.",
    benefits: ["Alert routing to Slack", "On-call schedule updates", "Escalation notifications", "Incident management in chat"]
  },
  {
    slug: "statuspage",
    name: "Statuspage",
    category: "DevOps",
    description: "Statuspage by Atlassian is a communication tool for real-time status and incident updates for customers.",
    howItWorks: "Pingdesk delivers Statuspage incident creation alerts, component status changes, and maintenance notifications to Slack. Teams can coordinate incident communication from their workspace.",
    benefits: ["Incident creation alerts", "Component status updates", "Maintenance notifications", "Incident communication coordination"]
  },
  {
    slug: "sonarqube",
    name: "SonarQube",
    category: "Development",
    description: "SonarQube is a code quality and security analysis platform that detects bugs, vulnerabilities, and code smells.",
    howItWorks: "Pingdesk sends SonarQube quality gate results, vulnerability alerts, and code smell notifications to Slack. Engineering teams can maintain code quality standards from their Slack channels.",
    benefits: ["Quality gate result alerts", "Vulnerability notifications", "Code smell alerts", "Code quality monitoring"]
  },
  {
    slug: "github-copilot",
    name: "GitHub Copilot",
    category: "Development",
    description: "GitHub Copilot is an AI-powered code completion tool that suggests code as you write.",
    howItWorks: "Pingdesk shares GitHub Copilot usage analytics and productivity metrics with engineering leads in Slack. Teams can track AI-assisted development adoption and measure productivity improvements.",
    benefits: ["Usage analytics sharing", "Productivity metric tracking", "Adoption monitoring", "Team productivity insights"]
  },
  {
    slug: "linear-dev",
    name: "Linear",
    category: "Development",
    description: "Linear is a modern issue tracker that streamlines software development with speed and simplicity.",
    howItWorks: "Pingdesk routes Linear issue assignments, status changes, and sprint updates to Slack. Development teams can manage their backlog and stay synchronized from their daily communication tool.",
    benefits: ["Issue assignment routing", "Status change alerts", "Sprint update notifications", "Backlog management in Slack"]
  },
  {
    slug: "retool",
    name: "Retool",
    category: "Development",
    description: "Retool is a low-code platform for building internal tools and business applications quickly.",
    howItWorks: "Pingdesk delivers Retool app usage alerts, error notifications, and workflow trigger results to Slack. Teams can monitor internal tools and debug issues from their Slack workspace.",
    benefits: ["App usage alerts", "Error notifications", "Workflow trigger results", "Internal tool monitoring"]
  },
  {
    slug: "snowflake",
    name: "Snowflake",
    category: "Analytics",
    description: "Snowflake is a cloud data platform for data warehousing, data lakes, and data sharing.",
    howItWorks: "Pingdesk sends Snowflake query failure alerts, warehouse usage notifications, and data pipeline completions to Slack. Data teams can monitor their warehouse and respond to issues from their channels.",
    benefits: ["Query failure alerts", "Warehouse usage notifications", "Pipeline completion updates", "Data ops in Slack"]
  },
  {
    slug: "dbt",
    name: "dbt",
    category: "Analytics",
    description: "dbt is a data transformation tool that enables analytics engineers to transform data in their warehouse using SQL.",
    howItWorks: "Pingdesk delivers dbt run results, test failures, and freshness alerts to Slack. Data teams can monitor their transformation pipelines and fix issues from their workspace.",
    benefits: ["Run result notifications", "Test failure alerts", "Freshness monitoring", "Transform pipeline tracking"]
  },
  {
    slug: "fivetran",
    name: "Fivetran",
    category: "Analytics",
    description: "Fivetran is an automated data integration platform that delivers ready-to-query data into cloud warehouses.",
    howItWorks: "Pingdesk sends Fivetran sync completion alerts, connector failure notifications, and schema change warnings to Slack. Data engineers can monitor data pipelines and respond to issues from chat.",
    benefits: ["Sync completion alerts", "Connector failure notifications", "Schema change warnings", "Pipeline monitoring in Slack"]
  },
  {
    slug: "lever",
    name: "Lever",
    category: "HR",
    description: "Lever is a talent acquisition suite that combines ATS and CRM capabilities for modern recruiting teams.",
    howItWorks: "Pingdesk routes Lever candidate stage changes, interview reminders, and offer approval requests to Slack. Recruiting teams can manage their hiring pipeline from their Slack workspace.",
    benefits: ["Candidate stage alerts", "Interview reminders", "Offer approval routing", "Hiring pipeline in Slack"]
  },
  {
    slug: "greenhouse",
    name: "Greenhouse",
    category: "HR",
    description: "Greenhouse is a hiring platform that helps companies structure their recruiting process for better results.",
    howItWorks: "Pingdesk delivers Greenhouse interview scheduling alerts, scorecard reminders, and hiring decision notifications to Slack. Hiring teams can coordinate interviews and share feedback from their channels.",
    benefits: ["Interview scheduling alerts", "Scorecard reminders", "Hiring decision notifications", "Recruiting coordination"]
  },
  {
    slug: "chargebee",
    name: "Chargebee",
    category: "Finance",
    description: "Chargebee is a subscription billing and revenue management platform for SaaS and subscription businesses.",
    howItWorks: "Pingdesk sends Chargebee subscription events, failed payment alerts, and MRR change notifications to Slack. Revenue teams can monitor subscription health and respond to churn risks from chat.",
    benefits: ["Subscription event alerts", "Failed payment notifications", "MRR change tracking", "Churn risk monitoring"]
  },
  {
    slug: "recurly",
    name: "Recurly",
    category: "Finance",
    description: "Recurly is a subscription management platform that simplifies recurring billing for businesses.",
    howItWorks: "Pingdesk delivers Recurly subscription lifecycle events, dunning alerts, and revenue summaries to Slack. Finance teams can track recurring revenue and manage billing issues from their workspace.",
    benefits: ["Lifecycle event notifications", "Dunning alerts", "Revenue summaries", "Billing issue management"]
  },
  {
    slug: "paddle",
    name: "Paddle",
    category: "Finance",
    description: "Paddle is a complete payments infrastructure for SaaS companies handling billing, taxes, and compliance.",
    howItWorks: "Pingdesk routes Paddle payment notifications, subscription changes, and tax compliance alerts to Slack. SaaS finance teams can monitor revenue and compliance from their Slack channels.",
    benefits: ["Payment notifications", "Subscription change alerts", "Tax compliance updates", "Revenue monitoring in Slack"]
  },
  {
    slug: "talkdesk",
    name: "Talkdesk",
    category: "Support",
    description: "Talkdesk is a cloud contact center platform that helps companies deliver better customer experiences.",
    howItWorks: "Pingdesk sends Talkdesk call queue alerts, agent performance summaries, and CSAT notifications to Slack. Contact center teams can monitor service levels from their Slack workspace.",
    benefits: ["Call queue alerts", "Agent performance summaries", "CSAT notifications", "Service level monitoring"]
  },
  {
    slug: "aircall",
    name: "Aircall",
    category: "Support",
    description: "Aircall is a cloud-based phone system for sales and support teams with CRM integrations.",
    howItWorks: "Pingdesk delivers Aircall missed call alerts, voicemail notifications, and call summary logs to Slack. Teams can track phone activity and follow up on missed calls from their workspace.",
    benefits: ["Missed call alerts", "Voicemail notifications", "Call summary delivery", "Phone activity tracking"]
  },
  {
    slug: "clicksend",
    name: "ClickSend",
    category: "Communication",
    description: "ClickSend is a cloud-based communication platform for SMS, email, voice, fax, and direct mail.",
    howItWorks: "Pingdesk routes ClickSend delivery reports, campaign results, and communication logs to Slack. Teams can monitor multi-channel communication campaigns from their Slack workspace.",
    benefits: ["Delivery report alerts", "Campaign result notifications", "Communication logs", "Multi-channel monitoring"]
  },
  {
    slug: "grammarly",
    name: "Grammarly",
    category: "Productivity",
    description: "Grammarly is an AI-powered writing assistant that helps with grammar, clarity, and tone across platforms.",
    howItWorks: "Pingdesk shares Grammarly team writing analytics and style guide compliance summaries in Slack. Content teams can maintain writing quality standards and track improvements from their workspace.",
    benefits: ["Writing analytics sharing", "Style guide compliance", "Team writing reports", "Quality standard tracking"]
  },
  {
    slug: "clockify",
    name: "Clockify",
    category: "Productivity",
    description: "Clockify is a free time tracking app for teams to track work hours across projects and tasks.",
    howItWorks: "Pingdesk delivers Clockify time tracking reminders, weekly summaries, and project hour alerts to Slack. Teams can track their time and review project budgets from their Slack channels.",
    benefits: ["Time tracking reminders", "Weekly summary delivery", "Project hour alerts", "Budget tracking in Slack"]
  },
  {
    slug: "harvest",
    name: "Harvest",
    category: "Productivity",
    description: "Harvest is a time tracking and invoicing tool that helps teams track time, gain insights, and get paid.",
    howItWorks: "Pingdesk sends Harvest timesheet reminders, project budget alerts, and invoice notifications to Slack. Teams can manage time tracking and billing workflows from their daily workspace.",
    benefits: ["Timesheet reminders", "Project budget alerts", "Invoice notifications", "Billing workflow management"]
  },
  {
    slug: "notion-pm",
    name: "Notion Projects",
    category: "Project Management",
    description: "Notion Projects brings native project management with timelines, sprints, and views into the Notion workspace.",
    howItWorks: "Pingdesk routes Notion Projects sprint updates, task assignments, and timeline changes to Slack. Teams can track project progress and manage sprints from their Slack channels.",
    benefits: ["Sprint update alerts", "Task assignment routing", "Timeline change notifications", "Project tracking in Slack"]
  },
  {
    slug: "render",
    name: "Render",
    category: "Development",
    description: "Render is a unified cloud platform for building and running apps and websites with free TLS, global CDN, and auto deploys.",
    howItWorks: "Pingdesk delivers Render deploy statuses, service health alerts, and build log summaries to Slack. Teams can monitor their cloud services and respond to deploy failures from their workspace.",
    benefits: ["Deploy status notifications", "Service health alerts", "Build log summaries", "Cloud service monitoring"]
  },
  {
    slug: "fly-io",
    name: "Fly.io",
    category: "Development",
    description: "Fly.io is a platform for running full-stack apps and databases close to users worldwide.",
    howItWorks: "Pingdesk sends Fly.io deployment alerts, machine health checks, and scaling notifications to Slack. Teams can monitor their globally distributed apps from their Slack workspace.",
    benefits: ["Deployment alerts", "Health check notifications", "Scaling alerts", "Global app monitoring"]
  },
  {
    slug: "railway",
    name: "Railway",
    category: "Development",
    description: "Railway is a deployment platform that makes it easy to provision infrastructure, develop locally, and deploy to the cloud.",
    howItWorks: "Pingdesk routes Railway deployment completions, build failures, and usage alerts to Slack. Developers can track their deployments and respond to issues from their Slack channels.",
    benefits: ["Deployment completion alerts", "Build failure notifications", "Usage alerts", "Dev workflow in Slack"]
  },
  {
    slug: "plausible",
    name: "Plausible",
    category: "Analytics",
    description: "Plausible is a lightweight, open-source, and privacy-friendly alternative to Google Analytics.",
    howItWorks: "Pingdesk delivers Plausible traffic spike alerts, goal completions, and weekly traffic summaries to Slack. Teams can monitor website performance with privacy-first analytics from their workspace.",
    benefits: ["Traffic spike alerts", "Goal completion notifications", "Weekly summaries", "Privacy-first analytics in Slack"]
  },
  {
    slug: "n8n",
    name: "n8n",
    category: "Productivity",
    description: "n8n is a fair-code workflow automation tool that lets you connect anything to everything with a visual editor.",
    howItWorks: "Pingdesk sends n8n workflow execution results, error alerts, and trigger notifications to Slack. Automation teams can monitor their workflows and debug failures from their Slack channels.",
    benefits: ["Execution result alerts", "Error notifications", "Trigger alerts", "Workflow monitoring in Slack"]
  },
  {
    slug: "papertrail",
    name: "Papertrail",
    category: "DevOps",
    description: "Papertrail is a cloud-hosted log management service for searching, filtering, and analyzing log data.",
    howItWorks: "Pingdesk routes Papertrail log alerts, saved search notifications, and anomaly detections to Slack. Operations teams can monitor logs and respond to issues from their Slack workspace.",
    benefits: ["Log alert notifications", "Saved search alerts", "Anomaly detection", "Log monitoring in Slack"]
  },
  {
    slug: "slab",
    name: "Slab",
    category: "Documentation",
    description: "Slab is a knowledge base platform that organizes team knowledge with a beautiful editor and powerful search.",
    howItWorks: "Pingdesk delivers Slab post updates, topic changes, and comment notifications to Slack. Teams can stay informed about knowledge base changes and contribute to documentation from their workspace.",
    benefits: ["Post update alerts", "Topic change notifications", "Comment routing", "Knowledge base in Slack"]
  }
];

export default integrations;
