const industries = [
  {
    slug: "saas",
    name: "SaaS Teams",
    headline: "Slack Ticketing for SaaS Teams",
    description:
      "Streamline internal requests across product, engineering, and customer success teams. Pingdesk turns Slack messages into trackable tickets so nothing slips through the cracks.",
    painPoints: [
      "Feature requests from customers get lost in Slack threads and never reach the product team",
      "Cross-functional handoffs between sales, support, and engineering lack visibility",
      "No single place to track bug reports, escalations, and internal asks",
      "Teams waste hours context-switching between Slack, Jira, and email to follow up on requests",
    ],
    useCases: [
      {
        title: "Customer Escalation Tracking",
        description:
          "Customer success managers file escalations directly from Slack and track resolution status without leaving their workspace.",
      },
      {
        title: "Internal Feature Requests",
        description:
          "Product managers collect and prioritize feature requests submitted by any team member through a simple Slack command.",
      },
      {
        title: "Cross-Team Handoffs",
        description:
          "Automatically route requests between sales, engineering, and support with full context preserved in every ticket.",
      },
      {
        title: "Sprint Support Intake",
        description:
          "Engineering teams manage incoming bug reports and support requests in a dedicated Slack channel with structured triage.",
      },
    ],
    stats: {
      metric: "Resolution Time",
      value: "62%",
      description:
        "SaaS teams using Pingdesk resolve internal requests 62% faster by eliminating Slack thread chaos.",
    },
  },
  {
    slug: "it-teams",
    name: "IT Teams",
    headline: "Slack-Based IT Helpdesk That Actually Works",
    description:
      "Replace clunky IT ticketing portals with a helpdesk that lives where your employees already work. Pingdesk lets IT teams manage requests, approvals, and asset tracking directly in Slack.",
    painPoints: [
      "Employees avoid filing IT tickets because the portal is too cumbersome",
      "Password resets and access requests pile up in DMs with no tracking",
      "IT has no way to measure response times or identify recurring issues",
      "Onboarding and offboarding checklists are managed manually in spreadsheets",
    ],
    useCases: [
      {
        title: "Access & Permission Requests",
        description:
          "Employees request software access from Slack and IT teams approve or deny with a single click, creating a full audit trail.",
      },
      {
        title: "Hardware & Asset Requests",
        description:
          "Track laptop, monitor, and equipment requests from submission to delivery without a separate asset management tool.",
      },
      {
        title: "Employee Onboarding",
        description:
          "Trigger automated onboarding checklists when new hires join, ensuring every account and tool is provisioned on time.",
      },
      {
        title: "Incident Reporting",
        description:
          "Employees report outages or issues instantly from Slack while IT tracks resolution progress in real time.",
      },
    ],
    stats: {
      metric: "Ticket Adoption",
      value: "3x",
      description:
        "IT teams see 3x more issues reported when employees can submit tickets directly from Slack instead of a portal.",
    },
  },
  {
    slug: "hr-teams",
    name: "HR Teams",
    headline: "Handle Every HR Request Without Leaving Slack",
    description:
      "From PTO approvals to policy questions, HR teams field hundreds of repetitive requests. Pingdesk gives HR a structured way to manage employee inquiries directly in Slack.",
    painPoints: [
      "Employees DM HR with questions that should be tracked and documented",
      "PTO, benefits, and policy questions are answered repeatedly with no knowledge base",
      "Sensitive requests like accommodations or complaints need confidential handling",
      "HR has no metrics on request volume, response time, or common topics",
    ],
    useCases: [
      {
        title: "PTO & Leave Requests",
        description:
          "Employees submit leave requests from Slack and managers approve them with a click, keeping everything documented.",
      },
      {
        title: "Benefits & Policy Questions",
        description:
          "Route common employee questions to HR with auto-suggested answers from previous responses to reduce repetitive work.",
      },
      {
        title: "Confidential Complaints",
        description:
          "Handle sensitive employee concerns through private ticket channels that maintain confidentiality while creating proper records.",
      },
      {
        title: "Onboarding Support",
        description:
          "New hires submit their first-week questions through Slack and HR tracks every request to ensure a smooth start.",
      },
    ],
    stats: {
      metric: "Time Saved",
      value: "15 hrs/week",
      description:
        "HR teams save an average of 15 hours per week by handling employee requests through structured Slack tickets instead of scattered DMs.",
    },
  },
  {
    slug: "engineering",
    name: "Engineering Teams",
    headline: "Slack Ticketing Built for Engineering Workflows",
    description:
      "Engineering teams are constantly interrupted by requests from other departments. Pingdesk creates a structured intake process in Slack so engineers can stay focused while requests are properly tracked.",
    painPoints: [
      "Random Slack DMs from product, sales, and support constantly interrupt deep work",
      "Bug reports arrive in different formats with missing reproduction steps",
      "No visibility into how much engineering time is spent on internal requests vs. planned work",
      "Requests from non-technical teams lack the context engineers need to take action",
    ],
    useCases: [
      {
        title: "Bug Report Intake",
        description:
          "Structured bug report forms in Slack capture severity, reproduction steps, and environment details before reaching the engineering queue.",
      },
      {
        title: "Infrastructure Requests",
        description:
          "Teams request new environments, database changes, or deployment support through a dedicated Slack workflow with proper approvals.",
      },
      {
        title: "Technical Debt Tracking",
        description:
          "Engineers log technical debt items directly from Slack conversations and vote on priorities during planning sessions.",
      },
      {
        title: "On-Call Escalation",
        description:
          "Route production issues to the right on-call engineer with full context, severity classification, and automatic escalation timers.",
      },
    ],
    stats: {
      metric: "Focus Time",
      value: "40%",
      description:
        "Engineering teams reclaim 40% more focus time by channeling all internal requests through Pingdesk instead of ad-hoc DMs.",
    },
  },
  {
    slug: "design-teams",
    name: "Design Teams",
    headline: "Manage Design Requests Right From Slack",
    description:
      "Design teams are flooded with ad-hoc requests from every department. Pingdesk brings structure to creative intake so designers can prioritize work and deliver faster.",
    painPoints: [
      "Design requests arrive via DMs, emails, and random Slack mentions with no brief attached",
      "Stakeholders have no visibility into the design queue or expected delivery timelines",
      "Revision requests and feedback are scattered across threads and channels",
      "Designers spend more time managing requests than actually designing",
    ],
    useCases: [
      {
        title: "Creative Brief Intake",
        description:
          "Requestors fill out structured briefs in Slack that capture objectives, dimensions, brand guidelines, and deadlines before entering the design queue.",
      },
      {
        title: "Revision Management",
        description:
          "Track feedback rounds and revision requests as threaded updates on the original ticket so nothing gets lost.",
      },
      {
        title: "Design Queue Visibility",
        description:
          "Give stakeholders a live view of the design backlog so they understand priorities and expected turnaround times.",
      },
      {
        title: "Brand Asset Requests",
        description:
          "Teams request logos, templates, and brand materials through Slack and receive approved assets directly in the thread.",
      },
    ],
    stats: {
      metric: "Request Clarity",
      value: "75%",
      description:
        "Design teams report 75% fewer back-and-forth messages when requests come through structured Pingdesk intake forms.",
    },
  },
  {
    slug: "marketing",
    name: "Marketing Teams",
    headline: "Slack Ticketing That Keeps Marketing On Track",
    description:
      "Marketing teams juggle campaign requests, content approvals, and cross-functional asks daily. Pingdesk centralizes it all in Slack so nothing falls through the cracks.",
    painPoints: [
      "Campaign requests from sales and product arrive without clear goals, assets, or deadlines",
      "Content review and approval cycles drag on because feedback is spread across tools",
      "No way to track how marketing bandwidth is allocated across departments",
      "Last-minute requests constantly derail planned marketing sprints",
    ],
    useCases: [
      {
        title: "Campaign Request Intake",
        description:
          "Sales and product teams submit campaign requests with structured briefs, target audience details, and timelines through Slack.",
      },
      {
        title: "Content Approval Workflows",
        description:
          "Route blog posts, social copy, and landing pages through multi-step approval chains directly in Slack.",
      },
      {
        title: "Event Support Requests",
        description:
          "Internal teams request marketing support for webinars, conferences, and launches with all details captured upfront.",
      },
      {
        title: "Brand Guideline Questions",
        description:
          "Answer recurring brand, tone, and style questions through tracked tickets that build a searchable knowledge base.",
      },
    ],
    stats: {
      metric: "Campaign Delivery",
      value: "45%",
      description:
        "Marketing teams deliver campaigns 45% faster when all requests flow through a structured Slack-based intake process.",
    },
  },
  {
    slug: "customer-support",
    name: "Customer Support",
    headline: "Escalate and Resolve Support Issues Faster in Slack",
    description:
      "Customer support teams need fast answers from engineering, product, and leadership. Pingdesk makes internal escalations seamless so agents can resolve customer issues without delays.",
    painPoints: [
      "Escalations to engineering disappear into Slack threads with no follow-up",
      "Support agents waste time chasing down answers from other departments",
      "No visibility into how long internal escalations take to resolve",
      "Knowledge gaps force agents to ask the same questions repeatedly",
    ],
    useCases: [
      {
        title: "Engineering Escalations",
        description:
          "Agents escalate technical issues to engineering with structured context, reproduction steps, and customer impact details.",
      },
      {
        title: "Billing & Account Issues",
        description:
          "Route billing disputes and account changes to finance with full customer context and required approvals.",
      },
      {
        title: "Feature Request Collection",
        description:
          "Capture customer feature requests from support conversations and funnel them to product with usage data and frequency.",
      },
      {
        title: "Knowledge Base Gaps",
        description:
          "Flag undocumented issues as tickets for the content team so the knowledge base stays current and reduces repeat inquiries.",
      },
    ],
    stats: {
      metric: "Escalation Speed",
      value: "70%",
      description:
        "Support teams resolve internal escalations 70% faster when engineers receive structured tickets instead of Slack DMs.",
    },
  },
  {
    slug: "finance",
    name: "Finance Teams",
    headline: "Streamline Finance Requests and Approvals in Slack",
    description:
      "Finance teams handle expense approvals, budget questions, and vendor payments across the organization. Pingdesk creates an auditable, efficient request system right in Slack.",
    painPoints: [
      "Expense and reimbursement requests arrive in scattered emails and DMs with missing receipts",
      "Budget approval chains are slow because requests sit unnoticed in inboxes",
      "No audit trail for who approved what and when",
      "Vendor payment inquiries from every department overwhelm the finance team",
    ],
    useCases: [
      {
        title: "Expense Approvals",
        description:
          "Employees submit expense reports with receipts through Slack and managers approve them with a click, creating a complete audit trail.",
      },
      {
        title: "Purchase Order Requests",
        description:
          "Department heads request new software or vendor purchases through structured forms with budget codes and justification.",
      },
      {
        title: "Invoice & Payment Status",
        description:
          "Vendors and internal teams check payment status through Slack tickets instead of emailing the finance team directly.",
      },
      {
        title: "Budget Allocation Questions",
        description:
          "Teams submit budget queries with department and project context so finance can respond accurately and track patterns.",
      },
    ],
    stats: {
      metric: "Approval Speed",
      value: "55%",
      description:
        "Finance teams process approvals 55% faster when requests arrive with complete information through structured Slack forms.",
    },
  },
  {
    slug: "legal",
    name: "Legal Teams",
    headline: "Track Legal Requests and Reviews in Slack",
    description:
      "Legal teams are bottlenecks for contract reviews, compliance questions, and policy approvals. Pingdesk helps legal manage intake, set priorities, and maintain confidentiality in Slack.",
    painPoints: [
      "Contract review requests arrive with no context about urgency, deal size, or deadline",
      "Teams bypass legal entirely because the review process feels too slow",
      "Sensitive legal matters are discussed in public Slack channels by mistake",
      "No way to track how legal bandwidth is allocated or measure turnaround times",
    ],
    useCases: [
      {
        title: "Contract Review Requests",
        description:
          "Sales and procurement teams submit contracts for review with deal value, deadline, and key terms flagged upfront.",
      },
      {
        title: "Compliance Questions",
        description:
          "Employees ask compliance-related questions through private tickets that keep sensitive information confidential and documented.",
      },
      {
        title: "NDA & Template Requests",
        description:
          "Teams request standard legal documents through Slack and receive approved templates without scheduling a meeting.",
      },
      {
        title: "Policy Approval Workflows",
        description:
          "Route new policies and policy changes through multi-stakeholder approval chains with version tracking and sign-off records.",
      },
    ],
    stats: {
      metric: "Contract Turnaround",
      value: "50%",
      description:
        "Legal teams cut contract review turnaround by 50% when requests include structured context from day one.",
    },
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    headline: "Slack Ticketing for Healthcare Operations Teams",
    description:
      "Healthcare organizations manage complex internal requests across clinical, administrative, and IT teams. Pingdesk provides a secure, trackable system for operational requests in Slack.",
    painPoints: [
      "Equipment and supply requests from clinical staff get lost in email chains",
      "IT support tickets for EHR systems take too long because context is missing",
      "Credentialing and compliance requests lack visibility into where they stand",
      "Administrative teams spend hours chasing approvals across departments",
    ],
    useCases: [
      {
        title: "Equipment & Supply Requests",
        description:
          "Clinical staff request supplies and equipment through Slack with location, urgency, and quantity details captured automatically.",
      },
      {
        title: "EHR Support Tickets",
        description:
          "Staff report EHR issues with screenshots and error details through Slack so IT can diagnose and resolve problems faster.",
      },
      {
        title: "Credentialing Requests",
        description:
          "Track provider credentialing and recredentialing requests through structured workflows with deadline alerts and status updates.",
      },
      {
        title: "Facility Maintenance",
        description:
          "Report facility issues with location tags and photos so maintenance teams can prioritize and dispatch repairs efficiently.",
      },
    ],
    stats: {
      metric: "Request Tracking",
      value: "80%",
      description:
        "Healthcare operations teams report 80% fewer dropped requests when using structured Slack-based intake instead of email.",
    },
  },
  {
    slug: "education",
    name: "Education",
    headline: "Slack Ticketing for Schools and Universities",
    description:
      "Educational institutions handle requests from faculty, staff, and students across dozens of departments. Pingdesk brings order to campus operations with Slack-based request management.",
    painPoints: [
      "Faculty IT support requests go unanswered because they are buried in shared inboxes",
      "Facilities and maintenance requests lack location details and priority levels",
      "Student services teams answer the same questions hundreds of times each semester",
      "Cross-department requests between admissions, registrar, and financial aid are slow and opaque",
    ],
    useCases: [
      {
        title: "Faculty IT Support",
        description:
          "Professors and staff submit classroom technology and software issues through Slack with room numbers and device details.",
      },
      {
        title: "Facilities Requests",
        description:
          "Report maintenance issues with building, floor, and room details so facilities teams can route and prioritize work orders.",
      },
      {
        title: "Student Services Inquiries",
        description:
          "Track and respond to student questions about enrollment, financial aid, and housing through organized Slack tickets.",
      },
      {
        title: "Event & Room Booking",
        description:
          "Faculty and student organizations request event spaces and AV support with date, capacity, and equipment needs captured upfront.",
      },
    ],
    stats: {
      metric: "Response Time",
      value: "60%",
      description:
        "Educational institutions cut staff response times by 60% when support requests flow through Pingdesk instead of email.",
    },
  },
  {
    slug: "agencies",
    name: "Agencies",
    headline: "Slack Ticketing for Creative and Digital Agencies",
    description:
      "Agencies juggle requests from multiple clients and internal teams simultaneously. Pingdesk helps agencies manage client requests, internal ops, and cross-team handoffs without leaving Slack.",
    painPoints: [
      "Client requests arrive through email, Slack, and calls with no central tracking",
      "Account managers spend hours relaying requests between clients and production teams",
      "Resource allocation is invisible so teams are constantly over- or under-utilized",
      "Internal operations requests like IT, HR, and finance are deprioritized behind client work",
    ],
    useCases: [
      {
        title: "Client Request Intake",
        description:
          "Account managers log client requests in Slack with project codes, deadlines, and scope details so production teams get everything they need.",
      },
      {
        title: "Internal Ops Requests",
        description:
          "Staff submit IT, HR, and office requests through Slack so internal operations are tracked alongside client work.",
      },
      {
        title: "Creative Review Cycles",
        description:
          "Route deliverables through client review and internal QA with structured feedback threads and approval tracking.",
      },
      {
        title: "Resource & Staffing Requests",
        description:
          "Project managers request additional team members or freelancers with skill requirements, availability, and budget details.",
      },
    ],
    stats: {
      metric: "Client Satisfaction",
      value: "35%",
      description:
        "Agencies see a 35% improvement in client satisfaction scores when requests are tracked transparently through Pingdesk.",
    },
  },
];

export default industries;
