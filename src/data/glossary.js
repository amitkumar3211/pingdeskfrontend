const glossary = [
  // ─── IT / ITSM ───
  {
    slug: 'sla',
    term: 'SLA (Service Level Agreement)',
    shortDef: 'A formal commitment between a service provider and customer defining expected service standards and response times.',
    definition: `A Service Level Agreement (SLA) is a documented contract between a service provider and its customers that outlines the expected level of service, including metrics like uptime, response time, and resolution time. SLAs set clear expectations and create accountability for both parties.

SLAs typically include specific, measurable targets such as "99.9% uptime" or "first response within 1 hour." When these targets are missed, the agreement often specifies penalties or remediation steps. SLAs are fundamental to IT service management and help organizations maintain consistent quality.

In practice, SLAs are used across internal IT teams, managed service providers, and SaaS companies. They provide a shared language for discussing service quality and help prioritize work based on contractual obligations.`,
    relatedTerms: ['service-level-agreement', 'first-response-time', 'mean-time-to-resolve', 'itsm', 'incident-management'],
    howPingdeskHelps: 'Pingdesk tracks SLA timers on every ticket created in Slack, alerting your team before deadlines are breached so nothing slips through the cracks.',
  },
  {
    slug: 'itsm',
    term: 'ITSM (IT Service Management)',
    shortDef: 'A set of practices for designing, delivering, managing, and improving how IT services are used within an organization.',
    definition: `IT Service Management (ITSM) refers to the entirety of activities, processes, and policies used to plan, design, deliver, operate, and control information technology services. Unlike simple IT support, ITSM takes a strategic approach to managing technology as a service to the business.

ITSM encompasses practices like incident management, change management, problem management, and service request fulfillment. Frameworks such as ITIL provide structured guidance for implementing ITSM practices effectively.

Modern ITSM is evolving beyond traditional rigid processes toward more agile, user-centric approaches. Many organizations now embed ITSM workflows into collaboration tools like Slack, reducing friction and improving the employee experience.`,
    relatedTerms: ['itil', 'service-desk', 'incident-management', 'change-management', 'service-catalog'],
    howPingdeskHelps: 'Pingdesk brings ITSM workflows directly into Slack, letting teams manage incidents, requests, and approvals without switching tools.',
  },
  {
    slug: 'itil',
    term: 'ITIL (Information Technology Infrastructure Library)',
    shortDef: 'A widely adopted framework of best practices for delivering and managing IT services effectively.',
    definition: `ITIL (Information Technology Infrastructure Library) is the most widely recognized framework for IT service management. Originally developed by the UK government in the 1980s, ITIL provides a comprehensive set of best practices for aligning IT services with business needs.

ITIL 4, the latest version, organizes guidance around a service value system that includes a service value chain, guiding principles, governance, practices, and continual improvement. It emphasizes flexibility and integration with modern methodologies like Agile and DevOps.

Organizations adopt ITIL to standardize their IT operations, reduce costs, improve service quality, and create a common vocabulary across teams. While full ITIL adoption can be complex, many teams selectively implement the practices most relevant to their needs.`,
    relatedTerms: ['itsm', 'incident-management', 'change-management', 'problem-management', 'service-catalog'],
    howPingdeskHelps: 'Pingdesk supports ITIL-aligned workflows like incident management and service requests, all within your existing Slack workspace.',
  },
  {
    slug: 'incident-management',
    term: 'Incident Management',
    shortDef: 'The process of identifying, analyzing, and resolving unplanned interruptions to IT services as quickly as possible.',
    definition: `Incident management is the practice of restoring normal service operation as quickly as possible after an unplanned interruption or reduction in quality. The goal is to minimize business impact and ensure service availability.

A typical incident management process includes detection, logging, categorization, prioritization, investigation, resolution, and closure. Each stage is critical — proper categorization ensures the right team is engaged, while thorough documentation enables future prevention.

Effective incident management requires clear escalation paths, defined roles, and fast communication channels. Many organizations are moving away from email-based incident workflows toward real-time messaging platforms where responders can collaborate instantly.`,
    relatedTerms: ['problem-management', 'escalation', 'mean-time-to-resolve', 'ticket', 'sla'],
    howPingdeskHelps: 'Pingdesk turns Slack messages into tracked incidents with automatic assignment, priority levels, and SLA timers — no separate tool needed.',
  },
  {
    slug: 'change-management',
    term: 'Change Management',
    shortDef: 'A structured process for planning, approving, and implementing changes to IT systems while minimizing risk.',
    definition: `Change management in IT refers to the systematic approach to proposing, evaluating, approving, implementing, and reviewing changes to IT infrastructure and services. The goal is to ensure that changes are made with minimal disruption and risk.

Changes are typically categorized as standard (pre-approved, low-risk), normal (require assessment and approval), or emergency (urgent fixes that bypass normal approval). A Change Advisory Board (CAB) often reviews and approves significant changes.

Good change management balances speed with safety. Modern approaches incorporate automation, CI/CD practices, and lightweight approval workflows to maintain governance without creating bottlenecks.`,
    relatedTerms: ['itil', 'itsm', 'incident-management', 'deployment', 'ci-cd'],
    howPingdeskHelps: 'Pingdesk streamlines change approvals in Slack with structured request forms and approval workflows, keeping an audit trail of every decision.',
  },
  {
    slug: 'service-desk',
    term: 'Service Desk',
    shortDef: 'A centralized point of contact where employees or customers can request help, report issues, and access IT services.',
    definition: `A service desk is the primary interface between an IT organization and its users. It serves as a single point of contact for reporting issues, requesting services, and getting information. Unlike a simple help desk, a service desk takes a broader approach to managing the full lifecycle of IT service delivery.

Service desks handle a wide range of activities including incident management, service request fulfillment, knowledge management, and basic change management. They often serve as the first line of support, triaging and routing requests to the appropriate teams.

Modern service desks are evolving to meet users where they already work. Instead of forcing employees to navigate a separate portal, leading organizations embed service desk functionality directly into tools like Slack and Microsoft Teams.`,
    relatedTerms: ['help-desk', 'ticketing-system', 'service-request', 'knowledge-base', 'itsm'],
    howPingdeskHelps: 'Pingdesk transforms your Slack workspace into a full-featured service desk — employees simply send a message to get help, and everything is tracked automatically.',
  },
  {
    slug: 'help-desk',
    term: 'Help Desk',
    shortDef: 'A resource that provides users with information and support for troubleshooting technical problems.',
    definition: `A help desk is a support function focused on helping users resolve technical issues and answer questions. It typically handles break-fix scenarios — something is broken, and the help desk helps fix it.

Help desks are often organized into tiers. Tier 1 handles common issues using scripts and knowledge base articles. More complex issues are escalated to Tier 2 or Tier 3 specialists. This tiered approach ensures efficient use of specialized expertise.

While the terms "help desk" and "service desk" are sometimes used interchangeably, a help desk is traditionally more reactive and narrowly focused on troubleshooting, whereas a service desk takes a broader, more strategic approach to service delivery.`,
    relatedTerms: ['service-desk', 'tier-1-support', 'tier-2-support', 'ticketing-system', 'knowledge-base'],
    howPingdeskHelps: 'Pingdesk provides a modern help desk experience inside Slack, replacing clunky portals with conversational support that employees actually enjoy using.',
  },
  {
    slug: 'service-catalog',
    term: 'Service Catalog',
    shortDef: 'A structured list of all IT services available to users, including descriptions, SLAs, and how to request them.',
    definition: `A service catalog is a centralized directory of all IT services available within an organization. It acts as a menu of services that users can browse and request, typically including descriptions, expected delivery times, approval requirements, and costs.

A well-designed service catalog empowers users to self-serve by making it easy to find and request the services they need. Common entries include software installation requests, access provisioning, hardware orders, and account resets.

The service catalog is distinct from a service portfolio, which includes services in development and retired services. The catalog focuses only on currently available, customer-facing services and is a key component of IT service management.`,
    relatedTerms: ['service-desk', 'service-request', 'itsm', 'self-service', 'itil'],
    howPingdeskHelps: 'Pingdesk lets you build a service catalog with customizable request forms directly in Slack, so employees can request services without leaving their workflow.',
  },
  {
    slug: 'cmdb',
    term: 'CMDB (Configuration Management Database)',
    shortDef: 'A database that stores information about hardware, software, and configuration items and their relationships within an IT environment.',
    definition: `A Configuration Management Database (CMDB) is a centralized repository that stores information about all significant configuration items (CIs) within an IT environment. These items include servers, software applications, network devices, and their relationships to one another.

The CMDB enables IT teams to understand the impact of changes, quickly identify root causes of incidents, and maintain an accurate picture of the IT landscape. When an incident occurs, the CMDB helps responders understand which services depend on the affected component.

Maintaining a CMDB requires discipline and often automation. Discovery tools can automatically populate and update the CMDB, reducing manual effort and improving accuracy. A well-maintained CMDB is invaluable for change management, incident response, and capacity planning.`,
    relatedTerms: ['itsm', 'itil', 'change-management', 'incident-management', 'service-catalog'],
    howPingdeskHelps: null,
  },
  {
    slug: 'problem-management',
    term: 'Problem Management',
    shortDef: 'The process of identifying and managing the root causes of incidents to prevent future occurrences.',
    definition: `Problem management is an ITSM practice focused on identifying, investigating, and eliminating the underlying causes of incidents. While incident management restores service quickly, problem management prevents incidents from recurring.

The process typically involves trend analysis of incident data, root cause analysis, and the creation of known error records. When a root cause is identified but a permanent fix is not yet available, a workaround is documented and shared with the service desk.

Problem management operates in two modes: reactive (triggered by recurring incidents) and proactive (identifying potential problems before they cause incidents). Both modes are essential for continual service improvement and reducing the volume of incidents over time.`,
    relatedTerms: ['incident-management', 'itsm', 'itil', 'mean-time-to-resolve', 'knowledge-base'],
    howPingdeskHelps: 'Pingdesk helps identify recurring issues by tracking patterns across tickets, making it easier to spot underlying problems that need permanent fixes.',
  },
  {
    slug: 'service-level-agreement',
    term: 'Service Level Agreement',
    shortDef: 'A formal contract specifying measurable service targets like uptime, response time, and resolution time between provider and customer.',
    definition: `A Service Level Agreement (SLA) defines the level of service expected from a provider. It lays out metrics by which that service is measured, and the remedies or penalties if the agreed-upon levels are not achieved.

Key components of an SLA include service descriptions, performance metrics (such as response time and uptime), measurement methods, reporting frequency, and escalation procedures. SLAs may be customer-facing or internal (OLAs — Operational Level Agreements — between internal teams).

Writing effective SLAs requires balancing ambition with realism. Targets should be achievable yet challenging. Regular reviews ensure SLAs remain aligned with evolving business needs and customer expectations.`,
    relatedTerms: ['sla', 'first-response-time', 'mean-time-to-resolve', 'itsm', 'resolution-time'],
    howPingdeskHelps: 'Pingdesk enforces SLAs by tracking response and resolution timers on every ticket, automatically escalating when deadlines approach.',
  },
  {
    slug: 'mean-time-to-resolve',
    term: 'Mean Time to Resolve (MTTR)',
    shortDef: 'The average time it takes to fully resolve an incident or ticket from the moment it is reported.',
    definition: `Mean Time to Resolve (MTTR) measures the average elapsed time from when an incident is reported to when it is fully resolved. It is one of the most important metrics in IT service management and support operations.

MTTR includes all time spent on the incident: initial response, investigation, diagnosis, fix implementation, and verification. It is distinct from Mean Time to Respond (which measures only the first response) and Mean Time Between Failures (which measures reliability).

Tracking MTTR helps organizations identify bottlenecks in their resolution process, set realistic SLA targets, and measure improvement over time. A decreasing MTTR trend typically indicates improving processes, better tooling, or more effective knowledge management.`,
    relatedTerms: ['first-response-time', 'resolution-time', 'sla', 'incident-management', 'ticketing-system'],
    howPingdeskHelps: 'Pingdesk automatically calculates MTTR for every ticket, giving you real-time dashboards and trend reports to track support performance.',
  },
  {
    slug: 'first-response-time',
    term: 'First Response Time',
    shortDef: 'The elapsed time between a user submitting a request and receiving the first meaningful response from a support agent.',
    definition: `First Response Time (FRT) measures how long a user waits between submitting a support request and receiving the first meaningful, human response. It is a critical metric because it directly impacts user satisfaction and perception of support quality.

FRT is distinct from acknowledgment — an automated "we received your ticket" message does not count. The first response should demonstrate that a real person has reviewed the issue and is working on it.

Research consistently shows that fast first response times significantly improve customer satisfaction, even when total resolution time is longer. Users who receive a quick initial response feel heard and are more patient during the resolution process.`,
    relatedTerms: ['response-time', 'mean-time-to-resolve', 'sla', 'csat', 'ticket'],
    howPingdeskHelps: 'Pingdesk tracks first response time on every Slack-based ticket and alerts agents when FRT SLA targets are at risk of being breached.',
  },
  {
    slug: 'escalation',
    term: 'Escalation',
    shortDef: 'The process of transferring a support issue to a higher-level team or manager when it cannot be resolved at the current tier.',
    definition: `Escalation is the process of moving a support issue to a more experienced team, specialized group, or higher authority when it cannot be adequately resolved at the current level. Escalation ensures complex or sensitive issues receive the appropriate level of attention and expertise.

There are two main types of escalation: functional (or hierarchical), where an issue is passed to a higher tier of support; and managerial, where a manager is brought in due to the severity of the issue or customer dissatisfaction.

Effective escalation processes include clear criteria for when to escalate, defined escalation paths, and communication protocols. Over-escalation wastes specialist time, while under-escalation leads to frustrated users and prolonged outages.`,
    relatedTerms: ['tier-1-support', 'tier-2-support', 'incident-management', 'ticket-routing', 'sla'],
    howPingdeskHelps: 'Pingdesk supports automatic escalation rules based on priority, SLA timers, or topic, routing tickets to the right team in Slack instantly.',
  },
  {
    slug: 'ticket',
    term: 'Ticket',
    shortDef: 'A record that documents a user request, issue, or task and tracks it through to resolution.',
    definition: `A ticket (also called a case, issue, or work item) is a digital record that captures all relevant information about a user request, incident, or task. It serves as the primary unit of work in support and service management systems.

A typical ticket includes the requester's details, a description of the issue, priority level, category, assigned agent, status, timestamps, and a log of all communications and actions taken. This structured data enables tracking, reporting, and process improvement.

Tickets provide accountability by creating an auditable record of who did what and when. They also enable workload management, as teams can see the queue of outstanding work and prioritize accordingly.`,
    relatedTerms: ['ticketing-system', 'ticket-routing', 'ticket-triage', 'ticket-priority', 'service-request'],
    howPingdeskHelps: 'Pingdesk creates tickets from Slack messages with a single click, capturing full context from the conversation thread automatically.',
  },
  {
    slug: 'ticketing-system',
    term: 'Ticketing System',
    shortDef: 'Software that creates, manages, and tracks support tickets from submission through resolution.',
    definition: `A ticketing system is a software application that manages and tracks the lifecycle of support requests from submission to resolution. It provides a centralized platform for organizing, prioritizing, assigning, and monitoring work.

Key features of ticketing systems include automatic ticket creation, routing rules, SLA tracking, status workflows, reporting dashboards, and integration with communication channels. Modern systems often include AI-powered features like auto-categorization and suggested responses.

The best ticketing systems minimize friction for both requesters and agents. Traditional web-based portals are increasingly being supplemented or replaced by conversational interfaces that let users submit and track tickets within tools they already use, like Slack or Microsoft Teams.`,
    relatedTerms: ['ticket', 'service-desk', 'help-desk', 'ticket-routing', 'sla'],
    howPingdeskHelps: 'Pingdesk is a modern ticketing system built natively in Slack — no portals, no context-switching, just seamless ticket management where your team already works.',
  },
  {
    slug: 'service-request',
    term: 'Service Request',
    shortDef: 'A formal user request for something to be provided, such as access to a service, information, or a standard change.',
    definition: `A service request is a formal request from a user for something to be provided — such as access to a system, a new piece of hardware, information, or a pre-approved standard change. Unlike incidents (which are unplanned disruptions), service requests are planned, routine activities.

Service request fulfillment typically follows predefined workflows with known steps, approvals, and timelines. Examples include requesting a new laptop, adding a user to a software license, or setting up a new email distribution list.

Efficient service request management involves cataloging available services, defining clear fulfillment processes, automating where possible, and providing self-service options to reduce the burden on support teams.`,
    relatedTerms: ['service-catalog', 'service-desk', 'ticket', 'self-service', 'itsm'],
    howPingdeskHelps: 'Pingdesk lets employees submit service requests through structured forms in Slack, with automatic routing and approval workflows built in.',
  },
  {
    slug: 'knowledge-base',
    term: 'Knowledge Base',
    shortDef: 'A centralized repository of articles, FAQs, and documentation that helps users and agents find answers to common questions.',
    definition: `A knowledge base is a self-service library of information about a product, service, or organization. It typically includes how-to guides, FAQs, troubleshooting articles, and process documentation designed to help users find answers without contacting support.

An effective knowledge base reduces ticket volume by enabling self-service, speeds up agent resolution by providing ready-made solutions, and captures institutional knowledge that might otherwise exist only in people's heads.

Knowledge management is an ongoing practice. Articles must be regularly reviewed, updated, and retired. Analytics on search terms and article views help identify gaps and prioritize content creation. The best knowledge bases are easy to search, clearly written, and integrated into the support workflow.`,
    relatedTerms: ['self-service', 'service-desk', 'help-desk', 'problem-management', 'chatbot'],
    howPingdeskHelps: 'Pingdesk surfaces relevant knowledge base articles when tickets are created in Slack, helping users self-serve and agents resolve issues faster.',
  },

  // ─── Workplace ───
  {
    slug: 'async-communication',
    term: 'Async Communication',
    shortDef: 'A communication style where participants exchange messages without requiring everyone to be online at the same time.',
    definition: `Asynchronous (async) communication is any form of communication where the sender and receiver do not need to be engaged simultaneously. Examples include email, recorded video messages, shared documents, and message threads in tools like Slack.

Async communication is foundational to distributed and remote teams operating across time zones. It allows people to respond thoughtfully on their own schedule, reduces meeting fatigue, and creates a written record of decisions and discussions.

However, async communication requires intentionality. Messages need to be clear and self-contained since the recipient cannot ask immediate follow-up questions. Teams that thrive asynchronously invest in clear writing, structured updates, and well-defined processes for when to go sync versus async.`,
    relatedTerms: ['sync-communication', 'remote-work', 'distributed-team', 'slack-thread', 'workplace-productivity'],
    howPingdeskHelps: 'Pingdesk is built for async workflows — tickets created in Slack can be picked up and resolved across time zones without any real-time handoff.',
  },
  {
    slug: 'sync-communication',
    term: 'Sync Communication',
    shortDef: 'Real-time communication where all participants engage simultaneously, such as meetings, phone calls, or live chat.',
    definition: `Synchronous (sync) communication happens in real time, with all participants engaged at the same time. Examples include face-to-face meetings, video calls, phone calls, and live chat conversations.

Sync communication excels for complex discussions, brainstorming, relationship building, and situations requiring rapid back-and-forth. It provides immediate feedback and allows for nuanced conversation including tone of voice and body language.

The downside of sync communication is that it requires schedule coordination, can be draining, and interrupts deep work. Effective teams are intentional about when sync communication is truly necessary versus when async alternatives are more efficient.`,
    relatedTerms: ['async-communication', 'slack-huddle', 'standup-meeting', 'live-chat', 'workplace-productivity'],
    howPingdeskHelps: null,
  },
  {
    slug: 'standup-meeting',
    term: 'Standup Meeting',
    shortDef: 'A brief daily team meeting where each member shares what they did, what they plan to do, and any blockers they face.',
    definition: `A standup meeting (also called a daily scrum) is a short, time-boxed meeting — typically 15 minutes or less — where team members share quick updates. Each person answers three questions: what they accomplished since the last standup, what they plan to work on next, and whether anything is blocking their progress.

Standups originated in Agile software development but have been widely adopted across many types of teams. The "standup" name comes from the practice of standing during the meeting to keep it short and focused.

Effective standups keep the team aligned, surface blockers early, and maintain momentum. Common pitfalls include letting them run too long, turning them into status reports for managers, or losing engagement when done poorly in remote settings.`,
    relatedTerms: ['agile', 'scrum', 'sprint', 'retrospective', 'async-communication'],
    howPingdeskHelps: null,
  },
  {
    slug: 'retrospective',
    term: 'Retrospective',
    shortDef: 'A team meeting held after a sprint or project to reflect on what went well, what did not, and how to improve.',
    definition: `A retrospective (or "retro") is a structured meeting where a team reflects on a recent period of work — typically a sprint or project milestone — to identify successes, challenges, and actionable improvements.

The classic retrospective format asks three questions: What went well? What didn't go well? What should we change? Many variations exist, including Start/Stop/Continue, 4Ls (Liked, Learned, Lacked, Longed for), and timeline-based formats.

Retrospectives are a cornerstone of continuous improvement in Agile teams. The key to effective retros is psychological safety — team members need to feel comfortable sharing honest feedback. Action items from retrospectives should be tracked and reviewed to ensure follow-through.`,
    relatedTerms: ['agile', 'scrum', 'sprint', 'standup-meeting', 'accountability'],
    howPingdeskHelps: null,
  },
  {
    slug: 'sprint',
    term: 'Sprint',
    shortDef: 'A fixed time period, usually 1-4 weeks, during which a team works to complete a defined set of tasks or deliverables.',
    definition: `A sprint is a time-boxed iteration in Agile development, typically lasting one to four weeks, during which a team commits to completing a specific set of work items. Sprints provide a predictable rhythm that helps teams plan, execute, and deliver incrementally.

Each sprint follows a cycle: sprint planning (defining what to work on), daily standups (staying aligned), the sprint itself (doing the work), sprint review (demonstrating completed work), and sprint retrospective (reflecting and improving).

Sprints create healthy pressure to finish work within a defined period while preventing scope creep. They also provide regular checkpoints for stakeholders to see progress and adjust priorities if needed.`,
    relatedTerms: ['agile', 'scrum', 'sprint-planning', 'backlog', 'velocity'],
    howPingdeskHelps: null,
  },
  {
    slug: 'kanban',
    term: 'Kanban',
    shortDef: 'A visual workflow management method that uses boards and cards to track work items as they move through stages.',
    definition: `Kanban is a lean method for managing and improving work across human systems. It uses a visual board divided into columns representing stages of work (such as To Do, In Progress, Done) with cards representing individual work items.

A core principle of Kanban is limiting work in progress (WIP). By restricting how many items can be in any given stage simultaneously, teams avoid overcommitting and improve flow. This leads to shorter lead times and more predictable delivery.

Kanban is flexible and can be applied to any type of work, from software development to HR requests to marketing campaigns. Unlike Scrum, it doesn't require fixed-length iterations, making it well-suited for teams handling continuous streams of incoming work.`,
    relatedTerms: ['agile', 'project-board', 'task-management', 'backlog', 'request-tracking'],
    howPingdeskHelps: 'Pingdesk provides Kanban-style views of tickets and requests in Slack, letting teams visualize their workflow and spot bottlenecks at a glance.',
  },
  {
    slug: 'agile',
    term: 'Agile',
    shortDef: 'A project management philosophy that emphasizes iterative development, collaboration, and rapid adaptation to change.',
    definition: `Agile is a project management and software development philosophy based on iterative progress, cross-functional collaboration, and responsiveness to change. It emerged from the Agile Manifesto (2001), which prioritizes individuals and interactions, working software, customer collaboration, and responding to change.

Agile is not a single methodology but an umbrella term encompassing frameworks like Scrum, Kanban, XP, and others. What unites them is a focus on delivering small increments of value frequently, gathering feedback, and continuously adapting.

Agile has expanded far beyond software development. Marketing, HR, finance, and operations teams all apply Agile principles. The key benefits include faster time to value, better alignment with customer needs, and improved team morale through autonomy and purpose.`,
    relatedTerms: ['scrum', 'kanban', 'sprint', 'retrospective', 'cross-functional-team'],
    howPingdeskHelps: null,
  },
  {
    slug: 'scrum',
    term: 'Scrum',
    shortDef: 'An Agile framework that organizes work into sprints with defined roles, ceremonies, and artifacts for iterative delivery.',
    definition: `Scrum is the most popular Agile framework, providing a structured approach to iterative development. It defines three roles (Product Owner, Scrum Master, Development Team), five events (Sprint, Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective), and three artifacts (Product Backlog, Sprint Backlog, Increment).

Scrum works in time-boxed sprints, typically two weeks, during which the team delivers a potentially shippable product increment. The Product Owner prioritizes the backlog, the Scrum Master facilitates the process, and the team self-organizes to complete the work.

Scrum provides transparency through its ceremonies and artifacts, enabling inspection and adaptation. While it requires discipline and commitment to the framework, many teams find that Scrum's structure helps them deliver more consistently and with higher quality.`,
    relatedTerms: ['agile', 'sprint', 'standup-meeting', 'retrospective', 'sprint-planning'],
    howPingdeskHelps: null,
  },
  {
    slug: 'cross-functional-team',
    term: 'Cross-Functional Team',
    shortDef: 'A team composed of members with different areas of expertise working together toward a shared goal.',
    definition: `A cross-functional team brings together people from different departments, disciplines, or areas of expertise to work collaboratively toward a common objective. Unlike siloed teams organized by function (e.g., all designers, all engineers), cross-functional teams include a mix of skills needed to deliver end-to-end.

Cross-functional teams reduce handoffs, speed up decision-making, and create shared ownership of outcomes. They are a fundamental concept in Agile methodologies, where teams are expected to be self-sufficient in delivering complete features.

Challenges with cross-functional teams include navigating different working styles, managing reporting relationships, and ensuring knowledge sharing. Effective cross-functional teams invest in clear communication, shared goals, and collaborative tools that bridge functional boundaries.`,
    relatedTerms: ['agile', 'distributed-team', 'delegation', 'stakeholder', 'workplace-productivity'],
    howPingdeskHelps: 'Pingdesk helps cross-functional teams collaborate on requests and issues within Slack, breaking down silos between departments like IT, HR, and Operations.',
  },
  {
    slug: 'remote-work',
    term: 'Remote Work',
    shortDef: 'A work arrangement where employees perform their duties from outside a traditional office, typically from home or co-working spaces.',
    definition: `Remote work is a flexible work arrangement where employees perform their job duties from a location other than a central office — most commonly from home, but also from co-working spaces, cafes, or while traveling.

Remote work has grown dramatically, accelerated by the COVID-19 pandemic. It offers benefits including elimination of commute time, access to a global talent pool, improved work-life balance, and often increased productivity for focused work. However, it also presents challenges around communication, collaboration, team cohesion, and maintaining work-life boundaries.

Successful remote work depends heavily on tooling and culture. Teams need robust async communication practices, clear documentation, and collaborative platforms that keep everyone connected and aligned regardless of location.`,
    relatedTerms: ['hybrid-work', 'distributed-team', 'async-communication', 'slack-workspace', 'workplace-productivity'],
    howPingdeskHelps: 'Pingdesk is ideal for remote teams — it centralizes requests and support in Slack, the tool remote teams already depend on for daily communication.',
  },
  {
    slug: 'hybrid-work',
    term: 'Hybrid Work',
    shortDef: 'A work model that combines remote work and in-office work, allowing employees to split time between locations.',
    definition: `Hybrid work is a flexible model where employees divide their time between working remotely and working from a physical office. It aims to combine the benefits of both arrangements — the collaboration and social connection of office work with the flexibility and focus of remote work.

Hybrid work models vary widely. Some organizations mandate specific in-office days, while others let employees choose. Some designate certain activities (like brainstorming or onboarding) as in-person and others as remote-friendly.

The biggest challenge of hybrid work is avoiding a two-tier experience where in-office employees have advantages over remote ones. Successful hybrid organizations design meetings, tools, and processes to be "remote-first" — ensuring equitable access to information and participation regardless of location.`,
    relatedTerms: ['remote-work', 'distributed-team', 'async-communication', 'workplace-productivity', 'employee-engagement'],
    howPingdeskHelps: 'Pingdesk ensures hybrid teams have equal access to support and request workflows — whether someone is in the office or working from home, everything runs through Slack.',
  },
  {
    slug: 'distributed-team',
    term: 'Distributed Team',
    shortDef: 'A team whose members work from multiple geographic locations, often across different time zones and countries.',
    definition: `A distributed team is one where members are spread across different geographic locations, often multiple cities, countries, or time zones. Unlike a remote team that might be concentrated in one region, distributed teams intentionally operate across geographies.

Distributed teams face unique challenges including time zone coordination, cultural differences, communication latency, and building trust without frequent in-person interaction. These challenges require deliberate investment in processes, tools, and culture.

The advantages of distributed teams include access to diverse talent, round-the-clock productivity ("follow the sun" support), and proximity to different markets. Organizations with distributed teams rely heavily on async communication, thorough documentation, and tools that create transparency across locations.`,
    relatedTerms: ['remote-work', 'hybrid-work', 'async-communication', 'cross-functional-team', 'slack-workspace'],
    howPingdeskHelps: 'Pingdesk keeps distributed teams aligned with async-friendly ticket management in Slack — handoffs across time zones happen naturally through threaded conversations.',
  },
  {
    slug: 'workplace-productivity',
    term: 'Workplace Productivity',
    shortDef: 'The efficiency with which employees complete meaningful work, measured by output relative to time and resources invested.',
    definition: `Workplace productivity refers to how efficiently individuals and teams convert their time, effort, and resources into meaningful output. It goes beyond simply being busy — true productivity means accomplishing important work effectively.

Factors that influence workplace productivity include tool quality, process efficiency, communication clarity, workload management, employee wellbeing, and environmental conditions. Context switching — constantly jumping between tasks and tools — is one of the biggest productivity killers in modern knowledge work.

Improving workplace productivity often involves reducing friction: streamlining processes, consolidating tools, automating repetitive tasks, and protecting focus time. The goal is to help people spend more time on high-value work and less time on administrative overhead.`,
    relatedTerms: ['workflow-automation', 'async-communication', 'task-management', 'employee-engagement', 'self-service'],
    howPingdeskHelps: 'Pingdesk boosts workplace productivity by eliminating tool-switching — employees handle requests, approvals, and issues without leaving Slack.',
  },
  {
    slug: 'employee-engagement',
    term: 'Employee Engagement',
    shortDef: 'The level of enthusiasm, commitment, and emotional investment employees have toward their work and organization.',
    definition: `Employee engagement measures the degree to which employees feel passionate about their work, committed to their organization, and willing to put in discretionary effort. Engaged employees are more productive, creative, and likely to stay with the company.

Key drivers of engagement include meaningful work, growth opportunities, recognition, manager quality, work-life balance, and having the right tools and resources. A frustrating internal support experience — like waiting days for IT help — can significantly impact engagement.

Organizations measure engagement through surveys, pulse checks, and behavioral indicators like participation in optional activities. Improving engagement requires addressing systemic issues, not just surface-level perks.`,
    relatedTerms: ['workplace-productivity', 'onboarding', 'self-service', 'hybrid-work', 'remote-work'],
    howPingdeskHelps: 'Pingdesk improves employee engagement by making internal support fast and frictionless — employees get help quickly without frustrating portal experiences.',
  },
  {
    slug: 'onboarding',
    term: 'Onboarding',
    shortDef: 'The process of integrating new employees into an organization, including training, access provisioning, and cultural orientation.',
    definition: `Onboarding is the comprehensive process of integrating a new hire into an organization. It encompasses everything from administrative tasks (paperwork, system access, equipment setup) to social integration (meeting the team, understanding culture) and role-specific training.

Effective onboarding significantly impacts retention, productivity, and employee satisfaction. Research shows that organizations with structured onboarding programs see 50% greater new hire retention and faster time to full productivity.

Modern onboarding involves many stakeholders — HR, IT, the hiring manager, and the new hire's team. Coordinating across these groups requires clear processes and good tooling. Many organizations now manage onboarding tasks through ticketing systems and workflow automation to ensure nothing falls through the cracks.`,
    relatedTerms: ['offboarding', 'service-request', 'employee-engagement', 'task-management', 'workflow-automation'],
    howPingdeskHelps: 'Pingdesk streamlines onboarding by managing all new hire requests — equipment, access, training — as tracked tickets in Slack with automated task checklists.',
  },
  {
    slug: 'offboarding',
    term: 'Offboarding',
    shortDef: 'The process of managing an employee\'s departure, including revoking access, retrieving equipment, and knowledge transfer.',
    definition: `Offboarding is the process that occurs when an employee leaves an organization, whether through resignation, termination, or retirement. It includes revoking system access, retrieving company equipment, conducting exit interviews, transferring knowledge, and handling administrative tasks like final pay.

Proper offboarding is critical for security — failing to revoke access promptly can create vulnerabilities. It also matters for knowledge retention, as departing employees often hold important institutional knowledge that should be documented.

Like onboarding, offboarding involves multiple teams and many tasks that must be completed in a specific sequence. Using checklists, workflows, and ticket tracking ensures thoroughness and compliance.`,
    relatedTerms: ['onboarding', 'service-request', 'sso', 'task-management', 'workflow-automation'],
    howPingdeskHelps: 'Pingdesk coordinates offboarding across IT, HR, and facilities with structured task lists and Slack-based workflows, ensuring no steps are missed.',
  },

  // ─── Slack ───
  {
    slug: 'slack-workspace',
    term: 'Slack Workspace',
    shortDef: 'A dedicated Slack environment for an organization, containing channels, members, apps, and shared resources.',
    definition: `A Slack workspace is a self-contained environment where an organization's team members communicate and collaborate. Each workspace has its own set of channels, members, apps, and settings, functioning as the digital headquarters for the organization.

Workspaces can be organized in different ways. Some companies use a single workspace for the entire organization, while others on Slack Enterprise Grid use multiple connected workspaces for different divisions or regions.

The workspace is the foundation of the Slack experience. Its configuration — including channel structure, app integrations, notification policies, and data retention settings — significantly impacts how effectively teams communicate and collaborate.`,
    relatedTerms: ['slack-channel', 'slack-app', 'slack-integration', 'slack-connect', 'slack-bot'],
    howPingdeskHelps: 'Pingdesk installs into your Slack workspace in minutes, instantly turning it into a powerful service desk without any complex infrastructure.',
  },
  {
    slug: 'slack-channel',
    term: 'Slack Channel',
    shortDef: 'A dedicated space within a Slack workspace for organizing conversations around a specific topic, team, or project.',
    definition: `A Slack channel is a conversation space organized around a topic, project, team, or any other organizing principle. Channels can be public (visible and joinable by anyone in the workspace) or private (invitation-only).

Good channel structure is essential for effective Slack usage. Common patterns include team channels (#marketing, #engineering), project channels (#project-launch-2024), topic channels (#help-it, #announcements), and social channels (#random, #watercooler).

Channels create transparency by making conversations discoverable and searchable. They reduce reliance on DMs and email, ensuring that knowledge and decisions are visible to relevant stakeholders rather than locked in private threads.`,
    relatedTerms: ['slack-workspace', 'slack-thread', 'slack-dm', 'slack-notification', 'async-communication'],
    howPingdeskHelps: 'Pingdesk monitors designated Slack channels for support requests, automatically converting messages into tracked tickets with full context.',
  },
  {
    slug: 'slack-thread',
    term: 'Slack Thread',
    shortDef: 'A reply chain attached to a specific Slack message, keeping related discussion organized within a channel.',
    definition: `A Slack thread is a series of replies connected to a specific message in a channel. Threads keep detailed discussions organized without cluttering the main channel view, allowing multiple conversations to happen in a channel simultaneously.

Threads are essential for maintaining channel readability, especially in busy channels. They allow focused discussion on a specific topic while keeping the main channel available for new topics and announcements.

Thread etiquette matters. Best practices include replying in threads rather than the main channel, using "Also send to channel" sparingly, and starting new threads for new topics rather than hijacking existing ones.`,
    relatedTerms: ['slack-channel', 'slack-workspace', 'async-communication', 'slack-notification', 'slack-dm'],
    howPingdeskHelps: 'Pingdesk uses Slack threads as the native conversation space for ticket updates, keeping all context about an issue in one organized place.',
  },
  {
    slug: 'slack-bot',
    term: 'Slack Bot',
    shortDef: 'An automated program that operates within Slack to perform tasks, send notifications, or interact with users conversationally.',
    definition: `A Slack bot is an automated program that interacts with users within Slack. Bots can respond to messages, send notifications, collect information through forms, perform actions in external systems, and automate repetitive tasks.

Bots range from simple notification bots that post alerts from external systems to sophisticated conversational bots that can triage support requests, answer questions from a knowledge base, or guide users through multi-step workflows.

Well-designed Slack bots feel like natural extensions of the workspace, reducing context-switching by bringing functionality directly into the conversation flow. Poorly designed bots can be noisy and disruptive, so thoughtful notification and interaction design is critical.`,
    relatedTerms: ['slack-app', 'slack-workflow', 'chatbot', 'slack-integration', 'slash-command'],
    howPingdeskHelps: 'Pingdesk\'s Slack bot handles ticket creation, assignment, status updates, and notifications — your team interacts with it naturally in conversation.',
  },
  {
    slug: 'slack-app',
    term: 'Slack App',
    shortDef: 'A third-party or custom application that extends Slack\'s functionality with new features and integrations.',
    definition: `A Slack app is a software application built on Slack's platform that adds functionality to a workspace. Apps can integrate external services, automate workflows, add interactive components like buttons and forms, and extend what teams can accomplish without leaving Slack.

The Slack App Directory contains thousands of apps from third-party developers, covering categories like project management, customer support, developer tools, HR, and analytics. Organizations can also build custom apps tailored to their specific needs.

Apps interact with Slack through APIs, webhooks, and event subscriptions. They can post messages, respond to user actions, access channel data (with permissions), and create rich interactive experiences using Block Kit, Slack's UI framework.`,
    relatedTerms: ['slack-bot', 'slack-integration', 'slack-workflow', 'slash-command', 'webhook'],
    howPingdeskHelps: 'Pingdesk is a Slack app purpose-built for internal service management — it installs from the Slack App Directory and works instantly in your workspace.',
  },
  {
    slug: 'slack-connect',
    term: 'Slack Connect',
    shortDef: 'A Slack feature that allows channels to include members from different organizations for cross-company collaboration.',
    definition: `Slack Connect allows organizations to create shared channels between separate Slack workspaces, enabling cross-company collaboration. Instead of using email to communicate with partners, vendors, or clients, teams can work together in real-time Slack channels.

Slack Connect channels support the same features as internal channels — threads, file sharing, app integrations, and workflows. This makes external collaboration as seamless as internal communication.

Security and administration controls let organizations manage who can create Slack Connect channels, which external organizations can be invited, and what data retention policies apply. This ensures that cross-company collaboration happens within appropriate governance frameworks.`,
    relatedTerms: ['slack-channel', 'slack-workspace', 'slack-dm', 'omnichannel-support', 'customer-support'],
    howPingdeskHelps: null,
  },
  {
    slug: 'slack-huddle',
    term: 'Slack Huddle',
    shortDef: 'A lightweight audio or video call that can be started instantly within any Slack channel, DM, or thread.',
    definition: `A Slack huddle is a lightweight, informal audio (and optionally video) call that can be started with a single click in any channel, DM, or group conversation. Huddles are designed for quick, spontaneous conversations — the digital equivalent of tapping someone on the shoulder.

Unlike scheduled video calls, huddles have no calendar invite, no meeting link, and no formal start/end time. Participants can join and leave freely, share their screen, and continue messaging in the channel simultaneously. This makes them ideal for quick questions, pair working, or impromptu discussions.

Huddles bridge the gap between async messaging and formal meetings, providing a low-friction option for when text-based communication isn't quite enough but a full video call isn't necessary.`,
    relatedTerms: ['sync-communication', 'slack-channel', 'slack-dm', 'slack-thread', 'live-chat'],
    howPingdeskHelps: null,
  },
  {
    slug: 'slack-workflow',
    term: 'Slack Workflow',
    shortDef: 'An automated sequence of steps in Slack that can collect information, send messages, and connect to external services.',
    definition: `Slack Workflow Builder allows users to create automated workflows directly within Slack without writing code. Workflows can be triggered by channel actions, emoji reactions, scheduled times, or webhook events, and can include steps like sending messages, collecting form responses, and connecting to external services.

Common workflow use cases include onboarding checklists, PTO request forms, standup collection, incident response procedures, and approval processes. Workflows reduce manual coordination and ensure consistent processes.

Slack's newer automation platform (built on Deno) extends workflows with custom functions, data stores, and more sophisticated logic, enabling power users and developers to build complex automations that previously required separate tools.`,
    relatedTerms: ['workflow-automation', 'slack-bot', 'slack-app', 'slash-command', 'automation'],
    howPingdeskHelps: 'Pingdesk goes beyond basic Slack workflows with purpose-built service management automation — SLA tracking, routing, escalations, and reporting that Workflow Builder cannot provide.',
  },
  {
    slug: 'slash-command',
    term: 'Slash Command',
    shortDef: 'A text command starting with "/" typed in Slack to quickly trigger actions, search, or interact with apps.',
    definition: `A slash command is a shortcut in Slack that lets users trigger actions by typing a forward slash followed by a keyword. Built-in slash commands include /remind, /mute, and /invite. Apps can register custom slash commands to provide quick access to their functionality.

Slash commands are powerful because they're fast and keyboard-friendly. Instead of navigating through menus or clicking buttons, users type a command and get immediate results. They can accept parameters for more specific actions (e.g., /pingdesk create "Laptop not working").

Custom slash commands are a common entry point for Slack apps. When a user types a registered command, Slack sends a request to the app's server, which processes it and responds in the channel or with an ephemeral (only visible to the user) message.`,
    relatedTerms: ['slack-app', 'slack-bot', 'slack-workflow', 'slack-integration', 'slack-channel'],
    howPingdeskHelps: 'Pingdesk provides intuitive slash commands for creating tickets, checking status, and managing requests — all without leaving the Slack message box.',
  },
  {
    slug: 'slack-integration',
    term: 'Slack Integration',
    shortDef: 'A connection between Slack and an external tool or service that enables data sharing and automated actions between them.',
    definition: `A Slack integration connects Slack with an external tool or service, enabling data to flow between them and actions to be triggered across systems. Integrations range from simple webhook-based notifications to full bidirectional syncs with rich interactive components.

Common integration patterns include posting alerts from monitoring tools, syncing tasks between project management apps, triggering CI/CD pipelines, creating tickets in external systems, and pulling data into Slack on demand.

Integrations are what transform Slack from a messaging tool into a work hub. By bringing information and actions into the conversation, integrations reduce context-switching and help teams work more efficiently.`,
    relatedTerms: ['slack-app', 'webhook', 'api', 'slack-bot', 'slack-workflow'],
    howPingdeskHelps: 'Pingdesk integrates deeply with Slack — not just notifications, but full ticket lifecycle management including creation, assignment, updates, and resolution.',
  },
  {
    slug: 'slack-notification',
    term: 'Slack Notification',
    shortDef: 'An alert in Slack that informs a user about new messages, mentions, reactions, or app-generated events.',
    definition: `Slack notifications alert users to new messages, @mentions, reactions, app events, and other activities. They can appear as badges, banners, sounds, or email digests, depending on the user's notification preferences and the notification type.

Managing notification settings is crucial for productivity. Users can customize notifications per channel (all messages, mentions only, or muted), set "Do Not Disturb" schedules, and configure keyword notifications to be alerted about specific topics across all channels.

For apps and bots, thoughtful notification design is critical. Over-notifying leads to alert fatigue and users muting or ignoring the app. Best practices include batching related notifications, allowing users to customize their preferences, and only sending truly actionable alerts.`,
    relatedTerms: ['slack-channel', 'slack-dm', 'slack-thread', 'slack-bot', 'escalation'],
    howPingdeskHelps: 'Pingdesk sends smart notifications only when action is needed — new ticket assignments, SLA warnings, and status changes — without contributing to notification fatigue.',
  },
  {
    slug: 'slack-dm',
    term: 'Slack DM (Direct Message)',
    shortDef: 'A private one-on-one or small group conversation in Slack, separate from public or private channels.',
    definition: `A Slack DM (Direct Message) is a private conversation between two people or a small group (up to 9 in a group DM). DMs are separate from channels and are only visible to the participants.

While DMs have their place for sensitive or personal conversations, over-reliance on DMs can create knowledge silos. Important decisions, technical discussions, and project updates are better suited to channels where they can be discovered and referenced by the broader team.

Organizations often encourage a "default to channels" culture, reserving DMs for truly private matters. This transparency improves knowledge sharing, reduces duplicate questions, and makes it easier for new team members to find context.`,
    relatedTerms: ['slack-channel', 'slack-thread', 'slack-notification', 'slack-workspace', 'async-communication'],
    howPingdeskHelps: 'Pingdesk discourages support requests via DMs by providing a structured channel-based experience where requests are visible and trackable by the whole team.',
  },

  // ─── Support ───
  {
    slug: 'customer-support',
    term: 'Customer Support',
    shortDef: 'The assistance provided to customers before, during, and after purchasing a product or service.',
    definition: `Customer support encompasses all the activities and interactions aimed at helping customers successfully use a product or service. It includes answering questions, troubleshooting problems, processing requests, and gathering feedback.

Modern customer support operates across multiple channels — email, chat, phone, social media, and self-service portals. The trend is toward omnichannel support, where customers can seamlessly move between channels while maintaining context.

Great customer support goes beyond reactive problem-solving. It includes proactive outreach, self-service resources, community building, and feedback loops that drive product improvement. Customer support quality directly impacts retention, satisfaction, and brand reputation.`,
    relatedTerms: ['internal-support', 'csat', 'nps', 'omnichannel-support', 'live-chat'],
    howPingdeskHelps: null,
  },
  {
    slug: 'internal-support',
    term: 'Internal Support',
    shortDef: 'Help and services provided to employees within an organization, covering IT, HR, facilities, and other operational needs.',
    definition: `Internal support refers to the help and services provided to employees within an organization. Unlike customer-facing support, internal support addresses the needs of the workforce — IT issues, HR questions, facilities requests, finance inquiries, and more.

Internal support is often fragmented across departments, each with their own tools, processes, and communication channels. This fragmentation creates confusion for employees who don't know where to go for help and results in inefficient operations.

Progressive organizations are unifying internal support into a single experience, often called an "employee service desk" or "internal help desk." By providing one place to go for all types of requests, they reduce friction, improve response times, and gain visibility into the overall employee experience.`,
    relatedTerms: ['service-desk', 'help-desk', 'customer-support', 'self-service', 'ticket-routing'],
    howPingdeskHelps: 'Pingdesk unifies internal support in Slack — IT, HR, facilities, and any other team can manage requests from a single, familiar interface.',
  },
  {
    slug: 'tier-1-support',
    term: 'Tier 1 Support',
    shortDef: 'The first level of technical support that handles common issues using scripts, knowledge bases, and basic troubleshooting.',
    definition: `Tier 1 (or Level 1 / L1) support is the first line of technical assistance that users encounter. Tier 1 agents handle the most common and straightforward issues — password resets, basic troubleshooting, software installation guidance, and FAQ-type questions.

Tier 1 support typically works from scripts, runbooks, and knowledge base articles. Agents are generalists trained to handle a wide variety of basic issues efficiently. When an issue exceeds their scope or expertise, they escalate it to Tier 2.

The effectiveness of Tier 1 support is measured by first-contact resolution rate — the percentage of issues resolved without escalation. A high first-contact resolution rate indicates good training, comprehensive knowledge bases, and appropriate scope definition.`,
    relatedTerms: ['tier-2-support', 'escalation', 'help-desk', 'knowledge-base', 'first-response-time'],
    howPingdeskHelps: 'Pingdesk empowers Tier 1 support with suggested responses and knowledge base articles surfaced directly in Slack, improving first-contact resolution rates.',
  },
  {
    slug: 'tier-2-support',
    term: 'Tier 2 Support',
    shortDef: 'A more specialized level of technical support that handles complex issues escalated from Tier 1.',
    definition: `Tier 2 (or Level 2 / L2) support handles more complex technical issues that Tier 1 cannot resolve. These agents have deeper expertise in specific systems, applications, or domains and can perform more advanced troubleshooting and investigation.

Tier 2 support often involves diagnosing root causes, applying non-standard fixes, configuring systems, and working with vendor support. These agents may specialize in areas like networking, security, specific applications, or infrastructure.

The handoff from Tier 1 to Tier 2 is a critical moment in the support experience. A smooth escalation includes complete documentation of what has already been tried, relevant system information, and clear communication to the user about what's happening next.`,
    relatedTerms: ['tier-1-support', 'escalation', 'incident-management', 'problem-management', 'ticket-routing'],
    howPingdeskHelps: 'Pingdesk preserves full Slack conversation context when escalating from Tier 1 to Tier 2, so specialists never have to ask the user to repeat themselves.',
  },
  {
    slug: 'csat',
    term: 'CSAT (Customer Satisfaction Score)',
    shortDef: 'A metric measuring customer satisfaction with a specific interaction, typically collected through a post-interaction survey.',
    definition: `Customer Satisfaction Score (CSAT) is a metric that measures how satisfied a customer or employee is with a specific interaction, transaction, or experience. It is typically collected through a short survey asking users to rate their satisfaction on a scale (often 1-5 or 1-10).

CSAT is popular because it's simple to understand, easy to collect, and directly tied to a specific interaction. It provides immediate, actionable feedback about individual interactions and agents. The standard formula is: (Positive responses / Total responses) x 100.

CSAT has limitations — it measures satisfaction with a single interaction rather than overall loyalty, and response rates can be low. It's most powerful when combined with other metrics like NPS (overall loyalty) and CES (effort required). Tracking CSAT trends over time reveals whether support quality is improving or declining.`,
    relatedTerms: ['nps', 'first-response-time', 'resolution-time', 'customer-support', 'internal-support'],
    howPingdeskHelps: 'Pingdesk collects CSAT ratings directly in Slack after ticket resolution, making it effortless for users to provide feedback and easy for teams to track satisfaction.',
  },
  {
    slug: 'nps',
    term: 'NPS (Net Promoter Score)',
    shortDef: 'A metric measuring customer loyalty by asking how likely someone is to recommend a product or service to others.',
    definition: `Net Promoter Score (NPS) measures customer loyalty by asking a single question: "How likely are you to recommend [product/service] to a friend or colleague?" on a scale of 0-10. Respondents are categorized as Promoters (9-10), Passives (7-8), or Detractors (0-6).

NPS is calculated as: % Promoters - % Detractors, yielding a score between -100 and +100. It's widely used because of its simplicity and correlation with business growth. A positive NPS means more promoters than detractors.

Unlike CSAT, which measures satisfaction with specific interactions, NPS captures overall sentiment and loyalty. It's typically surveyed periodically (quarterly or annually) rather than after each interaction. The follow-up question "Why did you give that score?" often provides the most actionable insights.`,
    relatedTerms: ['csat', 'customer-support', 'employee-engagement', 'resolution-time', 'response-time'],
    howPingdeskHelps: null,
  },
  {
    slug: 'response-time',
    term: 'Response Time',
    shortDef: 'The elapsed time between a user submitting a support request and receiving any response from the support team.',
    definition: `Response time measures the duration between when a user submits a request and when they receive a response. It is one of the most visible and impactful metrics in support operations, directly affecting user satisfaction and perception of service quality.

Response time can be measured in several ways: first response time (time to first human reply), average response time (average across all replies), and median response time (middle value, less affected by outliers). Each provides a different perspective on responsiveness.

Expectations for response time vary by channel and urgency. Chat and Slack-based support is expected to be fast (minutes), email within hours, and complex requests within a business day. Setting clear expectations and meeting them consistently is more important than being the fastest.`,
    relatedTerms: ['first-response-time', 'resolution-time', 'sla', 'csat', 'mean-time-to-resolve'],
    howPingdeskHelps: 'Pingdesk measures response time automatically on every Slack ticket and provides real-time alerts when targets are at risk.',
  },
  {
    slug: 'resolution-time',
    term: 'Resolution Time',
    shortDef: 'The total time elapsed from when a support issue is reported to when it is fully resolved and closed.',
    definition: `Resolution time is the total duration from when an issue is first reported to when it is fully resolved and the ticket is closed. It encompasses all phases of the support process — initial response, investigation, troubleshooting, fix implementation, and verification.

Resolution time is a key SLA metric and a strong indicator of support team efficiency. It can be measured as average resolution time, median resolution time, or percentile-based (e.g., 90% of tickets resolved within X hours).

Factors that affect resolution time include issue complexity, team expertise, tool quality, process efficiency, and dependency on external parties. Analyzing resolution time by category, priority, and team helps identify specific areas for improvement.`,
    relatedTerms: ['mean-time-to-resolve', 'response-time', 'sla', 'first-response-time', 'ticket'],
    howPingdeskHelps: 'Pingdesk tracks resolution time for every ticket from creation to close, providing analytics to help teams identify bottlenecks and improve performance.',
  },
  {
    slug: 'self-service',
    term: 'Self-Service',
    shortDef: 'A support model that empowers users to find answers and resolve issues independently without contacting a support agent.',
    definition: `Self-service is a support model where users can find information, troubleshoot issues, and complete requests without direct assistance from a support agent. Common self-service resources include knowledge bases, FAQs, community forums, chatbots, and automated portals.

Self-service benefits everyone: users get instant answers without waiting, and support teams can focus on complex issues that truly require human expertise. Research shows that most users prefer self-service for simple issues — they'd rather find the answer themselves than wait for a response.

Effective self-service requires investment in content creation, intuitive search, regular maintenance, and analytics to identify gaps. The best self-service experiences are contextual — surfacing relevant resources at the moment of need rather than requiring users to go looking.`,
    relatedTerms: ['knowledge-base', 'chatbot', 'service-catalog', 'customer-support', 'internal-support'],
    howPingdeskHelps: 'Pingdesk enables self-service by surfacing relevant knowledge base articles and answers directly in Slack before a ticket is even created.',
  },
  {
    slug: 'chatbot',
    term: 'Chatbot',
    shortDef: 'An automated program that simulates conversation with users to answer questions, triage requests, or guide them through processes.',
    definition: `A chatbot is a software application that conducts conversations with users through text or voice. In a support context, chatbots can answer common questions, collect information for ticket creation, triage requests, guide users through troubleshooting steps, and route issues to the right team.

Modern chatbots range from rule-based (following predefined decision trees) to AI-powered (using natural language processing to understand intent and generate responses). AI chatbots can handle a wider variety of queries and learn from interactions over time.

Chatbots are most effective when they handle routine queries confidently and gracefully hand off to humans when they can't help. Transparency is important — users should know they're talking to a bot and have a clear path to reach a human when needed.`,
    relatedTerms: ['slack-bot', 'self-service', 'live-chat', 'knowledge-base', 'automation'],
    howPingdeskHelps: 'Pingdesk\'s intelligent bot in Slack can answer common questions, collect structured information for ticket creation, and seamlessly escalate to human agents.',
  },
  {
    slug: 'live-chat',
    term: 'Live Chat',
    shortDef: 'A real-time messaging channel that connects users directly with a support agent for immediate assistance.',
    definition: `Live chat is a real-time communication channel where users can message directly with a support agent. It combines the immediacy of a phone call with the convenience of text-based communication, making it one of the most popular support channels.

Live chat typically offers faster response times than email, allows agents to handle multiple conversations simultaneously (increasing efficiency), and creates a written record of the conversation. Modern live chat tools include features like canned responses, file sharing, screen sharing, and chatbot handoff.

In internal support contexts, Slack-based support is increasingly replacing traditional live chat widgets. Since employees already use Slack throughout their day, handling support conversations there eliminates the need for a separate chat interface.`,
    relatedTerms: ['chatbot', 'customer-support', 'sync-communication', 'omnichannel-support', 'response-time'],
    howPingdeskHelps: 'Pingdesk transforms Slack into a live chat-like support experience for internal teams, with the added benefit of automatic ticket tracking and SLA management.',
  },
  {
    slug: 'omnichannel-support',
    term: 'Omnichannel Support',
    shortDef: 'A unified support approach where users can reach out via any channel and receive consistent, context-aware assistance.',
    definition: `Omnichannel support provides a seamless, consistent experience across all support channels — whether a user reaches out via email, chat, phone, social media, or a self-service portal. The key differentiator from multichannel support is context continuity: the user's history and conversation follow them across channels.

In an omnichannel environment, a customer might start a conversation via chat, follow up by email, and call for an urgent update — and the agent in each interaction has full context of the previous ones. This eliminates the frustrating experience of repeating information.

Implementing true omnichannel support requires a unified platform that aggregates interactions from all channels, provides agents with a single view of the user's history, and maintains context across channel switches.`,
    relatedTerms: ['customer-support', 'live-chat', 'self-service', 'ticket-routing', 'internal-support'],
    howPingdeskHelps: null,
  },
  {
    slug: 'ticket-routing',
    term: 'Ticket Routing',
    shortDef: 'The process of automatically or manually directing support tickets to the appropriate agent or team for resolution.',
    definition: `Ticket routing is the process of directing incoming support tickets to the most appropriate agent, team, or queue for resolution. Effective routing ensures that tickets reach someone with the right skills and availability to resolve them quickly.

Routing can be manual (agents or dispatchers assign tickets) or automated (rules, round-robin, skills-based, or AI-driven assignment). Common routing criteria include ticket category, priority, customer tier, agent skills, current workload, and time zone.

Good ticket routing significantly impacts key metrics like response time, resolution time, and CSAT. Poor routing — tickets bouncing between teams or sitting unassigned — is one of the most common sources of support delays and customer frustration.`,
    relatedTerms: ['ticket-triage', 'ticket-priority', 'escalation', 'ticketing-system', 'workflow-automation'],
    howPingdeskHelps: 'Pingdesk automatically routes tickets to the right Slack channel and team based on category, keywords, and custom rules — no manual triage required.',
  },
  {
    slug: 'ticket-triage',
    term: 'Ticket Triage',
    shortDef: 'The process of evaluating incoming support tickets to categorize, prioritize, and assign them appropriately.',
    definition: `Ticket triage is the initial evaluation of incoming support tickets to determine their category, priority, and appropriate assignment. Like medical triage, it ensures that the most critical issues receive immediate attention while less urgent requests are queued appropriately.

Triage typically involves reading the ticket, understanding the issue, categorizing it (e.g., hardware, software, access), assessing priority (based on impact and urgency), and routing it to the right team or agent.

Manual triage can be a bottleneck, especially during high-volume periods. Many organizations automate parts of the triage process using rules-based systems or AI that can categorize and prioritize tickets based on keywords, historical patterns, and contextual information.`,
    relatedTerms: ['ticket-routing', 'ticket-priority', 'ticketing-system', 'escalation', 'incident-management'],
    howPingdeskHelps: 'Pingdesk automates ticket triage in Slack using smart categorization and priority detection, reducing manual effort and speeding up response times.',
  },
  {
    slug: 'ticket-priority',
    term: 'Ticket Priority',
    shortDef: 'A classification assigned to a support ticket indicating its urgency and importance relative to other tickets.',
    definition: `Ticket priority is a classification that determines how urgently a support ticket should be addressed relative to others. Priority is typically based on two factors: impact (how many people or systems are affected) and urgency (how quickly the issue needs resolution).

Common priority levels include Critical/P1 (major business impact, requires immediate attention), High/P2 (significant impact, needs prompt resolution), Medium/P3 (moderate impact, normal queue), and Low/P4 (minimal impact, can be scheduled).

Consistent prioritization requires clear definitions and examples for each level. Without standardized criteria, priority becomes subjective and loses its usefulness. SLA targets are typically tied to priority levels, with higher priorities having shorter response and resolution time requirements.`,
    relatedTerms: ['ticket-triage', 'sla', 'escalation', 'incident-management', 'ticket-routing'],
    howPingdeskHelps: 'Pingdesk lets teams set priority levels on tickets directly in Slack with associated SLA timers that automatically escalate when deadlines approach.',
  },

  // ─── Project Management ───
  {
    slug: 'task-management',
    term: 'Task Management',
    shortDef: 'The process of organizing, tracking, and completing individual work items from creation to completion.',
    definition: `Task management is the process of managing a task through its entire lifecycle — from creation and assignment through execution and completion. It involves breaking down work into manageable units, assigning ownership, setting deadlines, tracking progress, and ensuring completion.

Effective task management requires clarity on what needs to be done, who is responsible, when it's due, and how it fits into the bigger picture. Tools range from simple to-do lists to sophisticated project management platforms with dependencies, automations, and reporting.

In practice, task management often happens across multiple tools — project boards for planned work, ticketing systems for requests, and messaging tools for ad-hoc tasks. This fragmentation can lead to things falling through the cracks, making it important to have a clear system of record.`,
    relatedTerms: ['request-tracking', 'project-board', 'kanban', 'delegation', 'backlog'],
    howPingdeskHelps: 'Pingdesk turns Slack conversations into trackable tasks and requests, ensuring nothing gets lost in the message stream.',
  },
  {
    slug: 'request-tracking',
    term: 'Request Tracking',
    shortDef: 'The practice of logging, monitoring, and managing requests from submission through completion to ensure accountability.',
    definition: `Request tracking is the systematic practice of logging, monitoring, and managing incoming requests from the moment they are submitted until they are fulfilled or resolved. It provides visibility into what has been asked for, who is working on it, and what the current status is.

Without request tracking, organizations rely on memory, scattered messages, and ad-hoc follow-ups. This leads to lost requests, duplicated work, missed deadlines, and frustrated requesters. Tracking creates accountability and enables measurement.

Modern request tracking integrates with communication tools, automatically capturing requests from conversations and providing status updates without requiring users to check a separate system. This reduces the overhead of tracking while maintaining the benefits of visibility and accountability.`,
    relatedTerms: ['task-management', 'ticket', 'ticketing-system', 'follow-up', 'accountability'],
    howPingdeskHelps: 'Pingdesk is built specifically for request tracking in Slack — every request becomes a tracked ticket with status, owner, and timeline visibility.',
  },
  {
    slug: 'follow-up',
    term: 'Follow-Up',
    shortDef: 'The act of checking on the status or progress of a previous request, task, or conversation to ensure completion.',
    definition: `A follow-up is the act of revisiting a previous request, conversation, or commitment to check on progress, provide additional information, or ensure completion. Follow-ups are essential for maintaining momentum and accountability in any workflow.

In support contexts, follow-ups happen in both directions: agents follow up with users to check if their issue is resolved, and users follow up to check on the status of pending requests. Both types are important for a good support experience.

Effective follow-up should be systematic rather than relying on individual memory. Automated reminders, status tracking, and scheduled check-ins ensure that nothing is forgotten. Too many manual follow-ups often indicate a lack of visibility into request status.`,
    relatedTerms: ['accountability', 'request-tracking', 'task-management', 'ticket', 'sla'],
    howPingdeskHelps: 'Pingdesk eliminates the need for manual follow-ups by providing real-time status visibility and automated reminders for pending tickets in Slack.',
  },
  {
    slug: 'accountability',
    term: 'Accountability',
    shortDef: 'The practice of clearly assigning ownership for tasks and requests, ensuring someone is responsible for each outcome.',
    definition: `Accountability in the workplace means clearly assigning ownership of tasks, decisions, and outcomes so that every item has a responsible party. It ensures that work gets done, commitments are met, and there is a clear person to contact for status updates.

Accountability requires three elements: clear assignment (who is responsible), visibility (everyone can see who owns what), and follow-through (mechanisms to track completion). Without all three, tasks fall through the cracks and "I thought someone else was handling it" becomes a common refrain.

Creating accountability doesn't mean creating blame culture. Healthy accountability is about clarity and support — making sure everyone knows their responsibilities and has the resources to fulfill them. Tools that provide visibility into assignments and progress are essential for maintaining accountability at scale.`,
    relatedTerms: ['delegation', 'task-management', 'request-tracking', 'follow-up', 'ticket'],
    howPingdeskHelps: 'Pingdesk creates clear accountability by assigning every ticket to a specific owner in Slack, with visible status and deadline tracking.',
  },
  {
    slug: 'delegation',
    term: 'Delegation',
    shortDef: 'The process of assigning responsibility for a task or decision to another person, typically a team member or direct report.',
    definition: `Delegation is the act of assigning responsibility for a task, project, or decision to another person. Effective delegation involves selecting the right person, clearly communicating expectations, providing necessary context and authority, and following up appropriately.

Good delegation empowers team members, develops their skills, and frees up leaders to focus on higher-level work. Poor delegation — micromanaging, unclear instructions, or delegating without authority — undermines trust and productivity.

In service management, delegation often involves routing requests to the appropriate specialist or team. The quality of delegation directly affects resolution time and user experience. Clear handoffs with full context are essential.`,
    relatedTerms: ['accountability', 'task-management', 'ticket-routing', 'escalation', 'cross-functional-team'],
    howPingdeskHelps: 'Pingdesk makes delegation seamless — reassign tickets to any team member in Slack with full context preserved in the conversation thread.',
  },
  {
    slug: 'project-board',
    term: 'Project Board',
    shortDef: 'A visual tool that displays tasks and work items organized by status, priority, or category for team visibility.',
    definition: `A project board is a visual management tool that displays work items organized into columns, typically representing stages of a workflow (e.g., To Do, In Progress, Review, Done). Project boards provide at-a-glance visibility into what the team is working on and where things stand.

Project boards can be physical (sticky notes on a wall) or digital (tools like Trello, Jira, or Asana). Digital boards offer additional features like filters, labels, automation, and integrations. The visual nature of boards makes them intuitive and accessible to both technical and non-technical team members.

Common board layouts include Kanban-style (workflow stages), sprint boards (current sprint work), and priority-based boards. The best layout depends on the team's work style and the nature of their tasks.`,
    relatedTerms: ['kanban', 'task-management', 'backlog', 'sprint', 'request-tracking'],
    howPingdeskHelps: 'Pingdesk provides a project board view of all tickets and requests, giving teams visual clarity on workload and progress alongside Slack-based workflows.',
  },
  {
    slug: 'sprint-planning',
    term: 'Sprint Planning',
    shortDef: 'A meeting at the start of a sprint where the team selects and commits to a set of work items to complete during the sprint.',
    definition: `Sprint planning is a collaborative meeting held at the beginning of each sprint where the team decides what work to commit to for the upcoming iteration. The Product Owner presents the highest-priority items from the backlog, and the team discusses, estimates, and selects the items they can realistically complete.

Effective sprint planning involves understanding the team's capacity, breaking down complex items into smaller tasks, identifying dependencies and risks, and reaching consensus on the sprint goal. The output is a sprint backlog — the committed list of work items.

Sprint planning sets the direction and pace for the sprint. Too much work leads to burnout and missed commitments; too little leads to underutilization. Over time, teams develop a sense of their velocity and can plan more accurately.`,
    relatedTerms: ['sprint', 'backlog', 'velocity', 'scrum', 'agile'],
    howPingdeskHelps: null,
  },
  {
    slug: 'backlog',
    term: 'Backlog',
    shortDef: 'A prioritized list of tasks, features, bugs, and requests that a team plans to work on in the future.',
    definition: `A backlog is a prioritized list of all the work a team intends to do — features, improvements, bugs, technical debt, and requests. It serves as the team's single source of truth for planned work and the primary input for sprint planning or work selection.

A well-maintained backlog is prioritized (most important items at the top), refined (items are clear and estimated), and manageable (not so large that it becomes overwhelming). Regular backlog grooming sessions keep it current and actionable.

Backlogs exist at different levels: product backlogs (strategic features and epics), sprint backlogs (work committed for the current sprint), and support backlogs (pending tickets and requests). Managing the support backlog is particularly important because growing backlogs directly impact response and resolution times.`,
    relatedTerms: ['sprint-planning', 'sprint', 'task-management', 'velocity', 'scope-creep'],
    howPingdeskHelps: 'Pingdesk helps teams manage their support backlog by tracking all open tickets in Slack with priority, age, and SLA status visible at a glance.',
  },
  {
    slug: 'burndown-chart',
    term: 'Burndown Chart',
    shortDef: 'A graph that shows the amount of remaining work over time during a sprint or project, tracking progress toward completion.',
    definition: `A burndown chart is a graphical representation of remaining work over time. The x-axis shows time (days in a sprint or project timeline), and the y-axis shows remaining work (in story points, hours, or number of tasks). An ideal burndown line shows steady progress from total work to zero.

Burndown charts provide a quick visual indicator of whether a team is on track. If the actual burndown line is above the ideal line, the team is behind; if below, they're ahead. This makes it easy to spot problems early and adjust.

Burndown charts are most commonly used in Scrum sprints but can be applied to any time-boxed work period. Related visualizations include burnup charts (showing completed work accumulating) and cumulative flow diagrams (showing work in each stage over time).`,
    relatedTerms: ['sprint', 'velocity', 'backlog', 'scrum', 'agile'],
    howPingdeskHelps: null,
  },
  {
    slug: 'velocity',
    term: 'Velocity',
    shortDef: 'A metric measuring the amount of work a team completes in a sprint, used for future planning and capacity estimation.',
    definition: `Velocity is an Agile metric that measures the amount of work a team completes during a sprint, typically expressed in story points. It is used primarily for planning — by understanding how much work the team typically completes per sprint, they can make more accurate commitments.

Velocity is calculated by summing the story points (or other estimation units) of all completed items at the end of each sprint. Over several sprints, velocity stabilizes and becomes a reliable predictor of the team's capacity.

Important caveats: velocity is a planning tool, not a performance metric. Comparing velocity between teams is meaningless since story point scales differ. Pressuring teams to increase velocity leads to point inflation rather than actual improvement. It should be used to improve predictability, not to measure productivity.`,
    relatedTerms: ['sprint', 'burndown-chart', 'sprint-planning', 'backlog', 'agile'],
    howPingdeskHelps: null,
  },
  {
    slug: 'stakeholder',
    term: 'Stakeholder',
    shortDef: 'Any person or group who has an interest in or is affected by the outcome of a project, decision, or service.',
    definition: `A stakeholder is anyone who has a vested interest in or is affected by the outcome of a project, product, or service. Stakeholders can be internal (executives, team members, other departments) or external (customers, partners, regulators).

Effective stakeholder management involves identifying all stakeholders, understanding their needs and expectations, communicating appropriately, and managing competing interests. Different stakeholders have different levels of influence and interest, requiring different engagement strategies.

In service management, stakeholders include the service recipients (users), service providers (support teams), service owners (responsible for overall service quality), and leadership (who need visibility into service performance). Keeping all stakeholders informed and aligned is essential for successful service delivery.`,
    relatedTerms: ['deliverable', 'milestone', 'accountability', 'cross-functional-team', 'scope-creep'],
    howPingdeskHelps: null,
  },
  {
    slug: 'deliverable',
    term: 'Deliverable',
    shortDef: 'A tangible or intangible output produced as a result of a project or task, typically provided to a stakeholder.',
    definition: `A deliverable is any tangible or intangible output that is produced and handed over as part of a project or task. Deliverables can be documents, software features, reports, designs, installations, or any other work product that satisfies a requirement.

Deliverables are defined by their acceptance criteria — specific conditions that must be met for the deliverable to be considered complete. Clear acceptance criteria prevent misunderstandings and scope creep by establishing shared expectations upfront.

In project management, deliverables are tied to milestones and form the basis for measuring progress. In service management, every resolved ticket is essentially a deliverable — the user submitted a request, and the team delivered a resolution.`,
    relatedTerms: ['milestone', 'stakeholder', 'scope-creep', 'sprint', 'accountability'],
    howPingdeskHelps: null,
  },
  {
    slug: 'milestone',
    term: 'Milestone',
    shortDef: 'A significant checkpoint or achievement in a project timeline that marks the completion of a major phase or deliverable.',
    definition: `A milestone is a significant point or event in a project timeline that marks the completion of a major deliverable, phase, or decision. Milestones help teams and stakeholders track progress at a high level without getting lost in the details of individual tasks.

Milestones are typically zero-duration events — they mark achievements rather than work periods. Examples include "Design approved," "Beta launch," "Security audit complete," or "Go-live." They provide natural checkpoints for review and decision-making.

Effective use of milestones involves setting them at meaningful intervals, tying them to concrete deliverables (not just dates), and using them as communication tools for stakeholders who don't need task-level detail.`,
    relatedTerms: ['deliverable', 'stakeholder', 'sprint', 'project-board', 'scope-creep'],
    howPingdeskHelps: null,
  },
  {
    slug: 'scope-creep',
    term: 'Scope Creep',
    shortDef: 'The gradual, uncontrolled expansion of a project\'s scope beyond its original objectives, often without adjusting time or resources.',
    definition: `Scope creep is the gradual expansion of a project's scope beyond its original boundaries — often happening incrementally through small additions that seem reasonable individually but collectively derail the project. It's one of the most common reasons projects exceed their timelines and budgets.

Scope creep typically occurs when requirements are poorly defined, change control processes are weak, stakeholders add requests without understanding trade-offs, or teams have difficulty saying no. The result is delayed delivery, team burnout, and compromised quality.

Preventing scope creep requires clear initial scope definition, a formal change request process, regular scope reviews, and transparent communication about the impact of additions. When new requests arise, the team should evaluate the trade-off: "We can add this, but it means removing or delaying something else."`,
    relatedTerms: ['backlog', 'stakeholder', 'deliverable', 'milestone', 'sprint-planning'],
    howPingdeskHelps: null,
  },

  // ─── General Tech ───
  {
    slug: 'api',
    term: 'API (Application Programming Interface)',
    shortDef: 'A set of rules and protocols that allows different software applications to communicate and exchange data with each other.',
    definition: `An Application Programming Interface (API) is a set of defined rules and protocols that enables different software applications to communicate with each other. APIs specify how software components should interact, abstracting the underlying complexity and exposing only what's needed.

APIs are fundamental to modern software architecture. They enable integration between services, allow third-party developers to build on existing platforms, and support modular design where specialized services handle specific functions. Common API styles include REST, GraphQL, and gRPC.

In everyday terms, an API is like a waiter in a restaurant — it takes your request (order), communicates it to the kitchen (backend system), and brings back the result (response). APIs are what make it possible for your apps, tools, and services to work together seamlessly.`,
    relatedTerms: ['rest-api', 'webhook', 'slack-integration', 'saas', 'automation'],
    howPingdeskHelps: 'Pingdesk provides APIs for integrating ticket data with your existing tools and building custom workflows on top of the platform.',
  },
  {
    slug: 'webhook',
    term: 'Webhook',
    shortDef: 'An automated HTTP callback that sends real-time data from one application to another when a specific event occurs.',
    definition: `A webhook is an HTTP callback — a mechanism where one application sends real-time data to another application's URL when a specific event occurs. Unlike APIs where you poll for data, webhooks "push" data to you as events happen, enabling real-time integrations.

Common webhook use cases include receiving notifications when a ticket status changes, triggering a workflow when a form is submitted, updating a dashboard when a deployment completes, or syncing data between two systems in real time.

Webhooks are simpler than full API integrations for event-driven scenarios. They require the receiving application to expose an endpoint (URL) that can accept incoming HTTP requests. Security considerations include verifying webhook signatures, using HTTPS, and validating payloads.`,
    relatedTerms: ['api', 'rest-api', 'slack-integration', 'automation', 'workflow-automation'],
    howPingdeskHelps: 'Pingdesk supports webhooks to notify external systems when ticket events occur, enabling seamless integration with your existing toolchain.',
  },
  {
    slug: 'sso',
    term: 'SSO (Single Sign-On)',
    shortDef: 'An authentication method that allows users to access multiple applications with a single set of login credentials.',
    definition: `Single Sign-On (SSO) is an authentication scheme that allows users to log in once and gain access to multiple related but independent software systems without re-entering credentials. SSO is implemented through identity providers (IdPs) like Okta, Azure AD, or Google Workspace.

SSO improves security by reducing password fatigue (users don't need to remember dozens of passwords), enabling centralized access control (IT can provision and revoke access from one place), and supporting stronger authentication methods like MFA.

SSO also improves the user experience — employees can access all their tools seamlessly after a single login. For IT teams, SSO simplifies onboarding (grant access to all tools at once) and offboarding (revoke all access from one place).`,
    relatedTerms: ['2fa', 'oauth', 'onboarding', 'offboarding', 'saas'],
    howPingdeskHelps: 'Pingdesk supports SSO through Slack, so users are automatically authenticated — no separate login required.',
  },
  {
    slug: '2fa',
    term: '2FA (Two-Factor Authentication)',
    shortDef: 'A security method requiring two different forms of verification to prove identity when logging into an account.',
    definition: `Two-Factor Authentication (2FA) is a security method that requires users to provide two distinct forms of identification before gaining access. Typically, this combines something you know (password) with something you have (phone, security key) or something you are (biometrics).

Common 2FA methods include SMS codes, authenticator app codes (TOTP), push notifications, hardware security keys (FIDO2/WebAuthn), and biometric verification. Hardware keys and authenticator apps are more secure than SMS, which is vulnerable to SIM-swapping attacks.

2FA dramatically reduces the risk of account compromise — even if a password is stolen, the attacker still needs the second factor. Organizations should mandate 2FA for all accounts, especially those with access to sensitive systems, admin panels, and customer data.`,
    relatedTerms: ['sso', 'oauth', 'saas', 'offboarding', 'api'],
    howPingdeskHelps: null,
  },
  {
    slug: 'oauth',
    term: 'OAuth',
    shortDef: 'An open authorization standard that allows applications to access user data from another service without exposing passwords.',
    definition: `OAuth (Open Authorization) is an open standard for access delegation. It allows users to grant third-party applications limited access to their resources on another service without sharing their password. OAuth is the mechanism behind "Sign in with Google/Slack/GitHub" buttons.

OAuth 2.0 (the current version) defines several grant types for different use cases: Authorization Code (web apps), Client Credentials (server-to-server), and others. The flow typically involves redirecting the user to the service's login page, where they authorize specific permissions, and receiving a token that the application uses for API access.

OAuth is foundational to modern app ecosystems. It enables secure integration between services while giving users control over what data they share. When you install a Slack app and it requests permissions, that's OAuth in action.`,
    relatedTerms: ['sso', '2fa', 'api', 'slack-app', 'rest-api'],
    howPingdeskHelps: 'Pingdesk uses OAuth to securely connect to your Slack workspace, requesting only the permissions needed to manage tickets and workflows.',
  },
  {
    slug: 'rest-api',
    term: 'REST API',
    shortDef: 'A web API architectural style that uses standard HTTP methods to create, read, update, and delete resources.',
    definition: `A REST (Representational State Transfer) API is a web service that follows REST architectural principles. REST APIs use standard HTTP methods — GET (read), POST (create), PUT/PATCH (update), DELETE (remove) — to perform operations on resources identified by URLs.

REST APIs are the most common type of web API due to their simplicity, scalability, and compatibility with HTTP infrastructure. They are stateless (each request contains all the information needed to process it), use standard status codes, and typically exchange data in JSON format.

REST APIs power the modern web — from social media feeds to payment processing to SaaS integrations. They enable the modular, service-oriented architectures that make it possible to build complex applications from specialized components.`,
    relatedTerms: ['api', 'webhook', 'oauth', 'saas', 'slack-integration'],
    howPingdeskHelps: null,
  },
  {
    slug: 'saas',
    term: 'SaaS (Software as a Service)',
    shortDef: 'A software delivery model where applications are hosted in the cloud and accessed via the internet on a subscription basis.',
    definition: `Software as a Service (SaaS) is a cloud-based software delivery model where applications are hosted by a provider and accessed by users over the internet, typically through a web browser. Users pay a subscription fee rather than purchasing and installing software locally.

SaaS offers significant advantages: no infrastructure to manage, automatic updates, accessibility from any device, predictable subscription costs, and rapid deployment. Examples include Slack, Salesforce, Google Workspace, and thousands of other business applications.

The SaaS model has transformed how organizations consume software. Instead of lengthy procurement and installation processes, teams can sign up for new tools in minutes. This democratization of software access has accelerated innovation but also created challenges around SaaS sprawl, shadow IT, and data governance.`,
    relatedTerms: ['paas', 'api', 'sso', 'no-code', 'automation'],
    howPingdeskHelps: 'Pingdesk is a SaaS product that installs instantly into Slack — no servers to manage, no software to install, just add it to your workspace and start tracking requests.',
  },
  {
    slug: 'paas',
    term: 'PaaS (Platform as a Service)',
    shortDef: 'A cloud computing model that provides a platform for developers to build, deploy, and manage applications without managing infrastructure.',
    definition: `Platform as a Service (PaaS) is a cloud computing model that provides a complete development and deployment environment in the cloud. Developers can build, test, deploy, and manage applications without worrying about underlying infrastructure like servers, storage, and networking.

PaaS offerings include runtime environments, databases, development tools, and middleware. Examples include Heroku, Google App Engine, and AWS Elastic Beanstalk. PaaS sits between Infrastructure as a Service (IaaS), which provides raw compute resources, and Software as a Service (SaaS), which provides complete applications.

PaaS accelerates development by removing infrastructure management overhead, providing pre-built components and services, and enabling easy scaling. It's particularly valuable for teams that want to focus on application logic rather than operational concerns.`,
    relatedTerms: ['saas', 'api', 'ci-cd', 'deployment', 'low-code'],
    howPingdeskHelps: null,
  },
  {
    slug: 'no-code',
    term: 'No-Code',
    shortDef: 'A development approach that allows users to build applications and automations using visual interfaces without writing any code.',
    definition: `No-code is a software development approach that enables people without programming skills to create applications, workflows, and automations using visual drag-and-drop interfaces, templates, and configuration rather than traditional coding.

No-code platforms have expanded dramatically, covering use cases from website building (Webflow, Squarespace) to databases (Airtable) to automation (Zapier) to internal tools (Retool). They democratize software creation, enabling business users to solve their own problems without waiting for engineering resources.

No-code is transformative for operational teams. Instead of submitting a request to IT for every process change, teams can build and modify their own workflows. However, no-code has limitations around customization, performance, and complexity — sophisticated requirements may still need traditional development.`,
    relatedTerms: ['low-code', 'automation', 'workflow-automation', 'saas', 'slack-workflow'],
    howPingdeskHelps: 'Pingdesk is a no-code solution for internal service management — set up forms, workflows, and automations in Slack without any technical expertise.',
  },
  {
    slug: 'low-code',
    term: 'Low-Code',
    shortDef: 'A development approach that minimizes hand-coding by providing visual tools and pre-built components, while still allowing custom code when needed.',
    definition: `Low-code is a software development approach that uses visual development environments, pre-built components, and drag-and-drop interfaces to minimize the amount of hand-coding required. Unlike no-code, low-code platforms still allow developers to write custom code when needed for advanced functionality.

Low-code platforms like OutSystems, Mendix, and Microsoft Power Platform accelerate development by providing building blocks for common functionality. Developers can focus on unique business logic rather than boilerplate code, dramatically reducing time to market.

Low-code bridges the gap between no-code simplicity and full-code flexibility. It's particularly popular for building internal tools, process automation, and line-of-business applications where speed and business alignment matter more than cutting-edge technical architecture.`,
    relatedTerms: ['no-code', 'automation', 'workflow-automation', 'saas', 'api'],
    howPingdeskHelps: null,
  },
  {
    slug: 'automation',
    term: 'Automation',
    shortDef: 'The use of technology to perform tasks or processes with minimal human intervention, increasing efficiency and consistency.',
    definition: `Automation is the use of technology to perform tasks or processes with minimal human intervention. In the workplace, automation ranges from simple email rules and scheduled reports to complex multi-system workflows and AI-driven decision-making.

Common automation targets include data entry, report generation, notifications, approval routing, system provisioning, and routine support tasks. The best candidates for automation are tasks that are repetitive, rule-based, time-consuming, and prone to human error.

Automation delivers compounding returns — once a process is automated, it runs consistently without ongoing effort. However, successful automation requires clear process understanding, good data quality, proper error handling, and ongoing maintenance as requirements evolve.`,
    relatedTerms: ['workflow-automation', 'no-code', 'low-code', 'slack-workflow', 'chatbot'],
    howPingdeskHelps: 'Pingdesk automates routine support tasks — ticket routing, notifications, escalations, and status updates — so your team can focus on solving problems instead of managing process.',
  },
  {
    slug: 'workflow-automation',
    term: 'Workflow Automation',
    shortDef: 'The design and execution of automated sequences of tasks that move work through a defined process without manual intervention.',
    definition: `Workflow automation is the practice of designing and implementing automated sequences of tasks, actions, and decisions that move work through a process with minimal manual intervention. It goes beyond automating individual tasks to orchestrating entire end-to-end processes.

Examples include automated onboarding (trigger: new hire → create accounts → assign equipment → schedule training → notify manager), ticket escalation (trigger: SLA approaching → notify agent → if unresolved → escalate to manager), and approval chains (trigger: request submitted → route to approver → if approved → fulfill → notify requester).

Workflow automation tools range from simple if-then platforms (Zapier, IFTTT) to sophisticated process orchestration engines. The key is starting with well-understood processes, automating incrementally, and building in error handling and human override capabilities.`,
    relatedTerms: ['automation', 'slack-workflow', 'no-code', 'ticket-routing', 'escalation'],
    howPingdeskHelps: 'Pingdesk provides purpose-built workflow automation for service management — from ticket creation and routing to escalation and resolution, all orchestrated within Slack.',
  },
  {
    slug: 'ci-cd',
    term: 'CI/CD (Continuous Integration / Continuous Deployment)',
    shortDef: 'A software development practice that automates code integration, testing, and deployment to deliver changes frequently and reliably.',
    definition: `CI/CD combines Continuous Integration (automatically building and testing code changes as they are committed) with Continuous Delivery/Deployment (automatically releasing tested changes to production). Together, they create an automated pipeline from code commit to production deployment.

Continuous Integration ensures that code changes from multiple developers are regularly merged and tested, catching integration issues early. Continuous Deployment extends this by automatically deploying every change that passes tests to production, enabling rapid, frequent releases.

CI/CD pipelines are essential to modern software development. They reduce manual effort, catch bugs earlier, enable faster feedback loops, and make deployments routine rather than risky events. Common CI/CD tools include GitHub Actions, GitLab CI, Jenkins, and CircleCI.`,
    relatedTerms: ['deployment', 'automation', 'api', 'change-management', 'webhook'],
    howPingdeskHelps: null,
  },
  {
    slug: 'deployment',
    term: 'Deployment',
    shortDef: 'The process of releasing and installing a software application or update into a production environment for end users.',
    definition: `Deployment is the process of making a software application or update available in a target environment — typically production, where end users can access it. It encompasses all activities needed to move code from development through testing to live operation.

Modern deployment strategies include blue-green deployments (running two identical environments and switching traffic), canary deployments (gradually rolling out to a subset of users), rolling deployments (updating instances one at a time), and feature flags (deploying code but controlling feature visibility).

Good deployment practices minimize risk and downtime. Automated deployment pipelines, rollback capabilities, health checks, and monitoring are essential. The goal is to make deployments boring — frequent, routine events rather than stressful, error-prone occasions.`,
    relatedTerms: ['ci-cd', 'change-management', 'automation', 'webhook', 'saas'],
    howPingdeskHelps: null,
  },
];

export default glossary;
