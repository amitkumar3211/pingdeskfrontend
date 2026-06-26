// Blog cover images — Unsplash images optimized for web (w=800, q=80)
// Each image is relevant to the blog post topic
const blogCovers = {
  'how-to-track-requests-in-slack': {
    url: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80&auto=format',
    alt: 'Team collaborating on Slack messages on laptop screen',
  },
  'slack-request-management-best-practices': {
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format',
    alt: 'Team meeting discussing best practices on whiteboard',
  },
  'slack-vs-email-for-internal-requests': {
    url: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80&auto=format',
    alt: 'Email inbox on screen comparing communication tools',
  },
  'best-slack-apps-for-project-management': {
    url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80&auto=format',
    alt: 'Project management dashboard with tasks and timelines',
  },
  'automate-slack-follow-ups': {
    url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80&auto=format',
    alt: 'Robot hand representing automation and follow-up reminders',
  },
  'slack-task-management-apps': {
    url: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80&auto=format',
    alt: 'Task list and checklist on notebook for task management',
  },
  'slack-follow-up-automation': {
    url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80&auto=format',
    alt: 'Person checking notifications on phone for follow-up automation',
  },
  'slack-approval-workflow': {
    url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80&auto=format',
    alt: 'Person signing document representing approval workflow',
  },
  'internal-help-desk-slack': {
    url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80&auto=format',
    alt: 'Support team working at desks with headsets for help desk',
  },
  'slack-request-management-remote-teams': {
    url: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80&auto=format',
    alt: 'Remote worker on video call managing requests from home',
  },
  'reduce-slack-noise-stay-productive': {
    url: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&q=80&auto=format',
    alt: 'Clean minimal desk setup representing focused productivity',
  },
  'it-request-tracking-slack': {
    url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format',
    alt: 'IT server room with monitoring screens for request tracking',
  },
  'slack-based-support-system': {
    url: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80&auto=format',
    alt: 'Customer support representative helping through chat system',
  },
  'slack-workflow-automation-guide': {
    url: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80&auto=format',
    alt: 'Code and automation workflow on computer screen',
  },
  'why-slack-ticketing-bot': {
    url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format',
    alt: 'Chat bot interface representing Slack ticketing automation',
  },
  'track-design-requests-slack': {
    url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80&auto=format',
    alt: 'Designer working on UI mockups tracking design requests',
  },
  'slack-vs-jira-internal-requests': {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format',
    alt: 'Dashboard comparison of project management tools',
  },
  'manage-cross-team-requests-slack': {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format',
    alt: 'Cross-functional team collaborating around a table',
  },
  'ultimate-slack-productivity-guide-2026': {
    url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80&auto=format',
    alt: 'Laptop and coffee on desk representing productivity guide',
  },
  'automated-reminders-slack': {
    url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80&auto=format',
    alt: 'Calendar and reminders on desk for automated scheduling',
  },
  'best-slack-integrations-2026': {
    url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80&auto=format',
    alt: 'Developer workspace with multiple app integrations on screen',
  },
  'slack-for-customer-support': {
    url: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=800&q=80&auto=format',
    alt: 'Customer support agent using chat tools on computer',
  },
  'slack-channel-organization-tips': {
    url: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80&auto=format',
    alt: 'Organized folders and files representing channel structure',
  },
  'slack-onboarding-new-employees': {
    url: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80&auto=format',
    alt: 'New employee handshake during onboarding process',
  },
  'slack-notification-management': {
    url: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=800&q=80&auto=format',
    alt: 'Phone with notification badges for notification management',
  },
  'slack-vs-microsoft-teams': {
    url: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&q=80&auto=format',
    alt: 'Video call interface comparing collaboration platforms',
  },
  'slack-etiquette-rules': {
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80&auto=format',
    alt: 'Professional team in office following workplace etiquette',
  },
  'reduce-meetings-with-slack': {
    url: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80&auto=format',
    alt: 'Empty meeting room representing reduced unnecessary meetings',
  },
  'slack-security-best-practices': {
    url: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80&auto=format',
    alt: 'Cybersecurity lock on screen for Slack security practices',
  },
  'slack-project-management-without-jira': {
    url: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80&auto=format',
    alt: 'Kanban board with sticky notes for lightweight project management',
  },
  'slack-tips-for-managers': {
    url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80&auto=format',
    alt: 'Manager leading team discussion on laptops',
  },
  'how-to-build-slack-bot': {
    url: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&q=80&auto=format',
    alt: 'Robot representing building a Slack bot with no code',
  },
  'slack-standup-meetings-async': {
    url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format',
    alt: 'Team doing async standup updates on their laptops',
  },
  'internal-ticketing-system-small-business': {
    url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80&auto=format',
    alt: 'Small business team working together on ticketing system',
  },
  'slack-emoji-reactions-workflow': {
    url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80&auto=format',
    alt: 'Colorful emoji reactions used as workflow indicators',
  },
  'team-accountability-without-micromanaging': {
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format',
    alt: 'Team leader building accountability through trust and systems',
  },
  'slack-vs-asana-task-management': {
    url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format',
    alt: 'Person comparing task management tools on laptop',
  },
  'it-help-desk-slack-setup': {
    url: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&q=80&auto=format',
    alt: 'IT technician setting up help desk support system',
  },
  'slack-productivity-stats-2026': {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format',
    alt: 'Analytics dashboard showing productivity statistics and graphs',
  },
  'request-tracking-spreadsheet-vs-tool': {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format',
    alt: 'Spreadsheet on screen being compared to dedicated tracking tool',
  },

  // Best X roundups
  'best-slack-apps-for-hr-teams': {
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&auto=format',
    alt: 'HR team professionals collaborating in a modern office',
  },
  'best-slack-apps-for-customer-support': {
    url: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=800&q=80&auto=format',
    alt: 'Customer support team working with headsets at their desks',
  },
  'best-slack-apps-for-engineering-teams': {
    url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80&auto=format',
    alt: 'Software engineers coding at dual monitor workstations',
  },
  'best-slack-apps-for-sales-teams': {
    url: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80&auto=format',
    alt: 'Sales team celebrating a deal in a bright open office',
  },
  'best-slack-apps-for-startups': {
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format',
    alt: 'Startup office with open workspace and whiteboards',
  },
  'best-internal-ticketing-tools-2026': {
    url: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=800&q=80&auto=format',
    alt: 'Ticketing dashboard on a laptop screen in an office setting',
  },
  'best-free-helpdesk-software-small-business': {
    url: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80&auto=format',
    alt: 'Small business owner managing customer support at a desk',
  },
  'best-slack-bots-for-productivity': {
    url: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&auto=format',
    alt: 'AI bot interface and automation icons on a screen',
  },
  'best-request-management-software': {
    url: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80&auto=format',
    alt: 'Request management dashboard displaying sorted tasks',
  },
  'best-slack-apps-for-remote-teams': {
    url: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&q=80&auto=format',
    alt: 'Remote worker on video call with distributed team members',
  },
  'best-it-ticketing-system-small-business': {
    url: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&q=80&auto=format',
    alt: 'IT support technician helping with ticketing on a laptop',
  },
  'best-slack-integrations-for-project-management': {
    url: 'https://images.unsplash.com/photo-1545987796-200677ee1011?w=800&q=80&auto=format',
    alt: 'Connected app integrations and project boards on screen',
  },
  'best-team-collaboration-tools-2026': {
    url: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80&auto=format',
    alt: 'Diverse team collaborating around a table with laptops',
  },
  'best-slack-apps-for-operations-teams': {
    url: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800&q=80&auto=format',
    alt: 'Operations team reviewing workflows on multiple screens',
  },
  'best-workflow-automation-tools-for-slack': {
    url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format',
    alt: 'Automated workflow diagram on whiteboard with sticky notes',
  },

  // How to guides
  'how-to-reduce-slack-noise': {
    url: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80&auto=format',
    alt: 'Person sitting quietly and focused at a clean minimal desk',
  },
  'how-to-set-up-slack-helpdesk': {
    url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80&auto=format',
    alt: 'Help desk setup with computer and support tools on desk',
  },
  'how-to-improve-team-accountability': {
    url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80&auto=format',
    alt: 'Team members shaking hands and committing to shared goals',
  },
  'how-to-track-employee-requests': {
    url: 'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=800&q=80&auto=format',
    alt: 'Manager tracking employee tasks on a project board',
  },
  'how-to-automate-workflows-in-slack': {
    url: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80&auto=format',
    alt: 'Workflow automation nodes connected on a digital screen',
  },
  'how-to-manage-it-requests-without-jira': {
    url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80&auto=format',
    alt: 'IT manager handling requests on a laptop without heavy tooling',
  },
  'how-to-stop-losing-messages-in-slack': {
    url: 'https://images.unsplash.com/photo-1526628953301-3cd40e3f0060?w=800&q=80&auto=format',
    alt: 'Organized inbox and message threads on a computer screen',
  },
  'how-to-build-a-request-tracking-system': {
    url: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80&auto=format',
    alt: 'Developer building a system with code and sticky notes',
  },
  'how-to-manage-approvals-in-slack': {
    url: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80&auto=format',
    alt: 'Business person approving a document with digital signature',
  },
  'how-to-reduce-meeting-overload-async-requests': {
    url: 'https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?w=800&q=80&auto=format',
    alt: 'Empty conference room representing reduced meeting culture',
  },
  'how-to-onboard-employees-using-slack': {
    url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80&auto=format',
    alt: 'New employee being welcomed and onboarded by colleagues',
  },
  'how-to-measure-team-response-time': {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format',
    alt: 'Analytics dashboard showing response time metrics and graphs',
  },
  'how-to-create-slas-in-slack': {
    url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80&auto=format',
    alt: 'Person reviewing a service level agreement document',
  },
  'how-to-manage-vendor-requests': {
    url: 'https://images.unsplash.com/photo-1521791055366-0d553872952f?w=800&q=80&auto=format',
    alt: 'Professional handshake between vendor and client',
  },
  'how-to-manage-cross-team-requests': {
    url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format',
    alt: 'Cross-functional teams collaborating across departments',
  },

  // X vs Y comparisons
  'jira-vs-slack-for-internal-requests': {
    url: 'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=800&q=80&auto=format',
    alt: 'Side by side comparison of project management tool interfaces',
  },
  'email-vs-slack-for-team-communication': {
    url: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80&auto=format',
    alt: 'Email inbox versus chat app on dual screens comparison',
  },
  'zendesk-vs-slack-for-internal-support': {
    url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80&auto=format',
    alt: 'Support tools comparison on laptop screen in office',
  },
  'notion-vs-slack-for-task-management': {
    url: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80&auto=format',
    alt: 'Note-taking and task management apps compared on screen',
  },
  'microsoft-teams-vs-slack-for-ticketing': {
    url: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&q=80&auto=format',
    alt: 'Video conferencing and chat tools side by side on laptop',
  },
  'asana-vs-slack-for-request-tracking': {
    url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format',
    alt: 'Project board and chat interface compared on computer screens',
  },
  'freshdesk-vs-slack-based-helpdesk': {
    url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80&auto=format',
    alt: 'Helpdesk software interfaces compared on screen',
  },
  'clickup-vs-slack-for-team-requests': {
    url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80&auto=format',
    alt: 'Productivity tools comparison with task lists and chat',
  },
  'monday-com-vs-slack-for-request-management': {
    url: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80&auto=format',
    alt: 'Kanban board versus messaging tool comparison on desktop',
  },
  'trello-vs-slack-for-tracking-tasks': {
    url: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80&auto=format',
    alt: 'Kanban card board compared with chat interface on screen',
  },

  // Country-specific
  'how-indian-startups-manage-internal-requests': {
    url: 'https://images.unsplash.com/photo-1596079890744-c1a0462d0975?w=800&q=80&auto=format',
    alt: 'Indian tech startup team working in a vibrant co-working space',
  },
  'slack-productivity-tips-remote-teams-uk': {
    url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&auto=format',
    alt: 'UK office skyline with professionals working on laptops',
  },
  'internal-helpdesk-best-practices-australian-companies': {
    url: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=80&auto=format',
    alt: 'Modern Australian office space with team working together',
  },
  'how-canadian-teams-automate-slack-workflows': {
    url: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80&auto=format',
    alt: 'Canadian tech team in clean collaborative office setting',
  },
  'slack-request-tracking-german-enterprises': {
    url: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80&auto=format',
    alt: 'German enterprise office with structured team workflow',
  },
  'managing-cross-timezone-requests-singapore-teams': {
    url: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80&auto=format',
    alt: 'Singapore city skyline with global clocks representing timezones',
  },
  'how-uae-businesses-handle-internal-ticketing': {
    url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80&auto=format',
    alt: 'Dubai modern office building with business professionals',
  },
  'slack-workflow-automation-brazilian-tech': {
    url: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80&auto=format',
    alt: 'Brazilian tech workers collaborating in a modern city office',
  },
  'internal-request-management-south-africa': {
    url: 'https://images.unsplash.com/photo-1489545792252-a5a03a5e4d3e?w=800&q=80&auto=format',
    alt: 'South African business team managing requests in an office',
  },
  'how-japanese-companies-improve-slack-accountability': {
    url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80&auto=format',
    alt: 'Japanese office professionals working with precision and accountability',
  },
};

export default blogCovers;
