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
    url: 'https://images.unsplash.com/photo-1553484771-047a44eee27b?w=800&q=80&auto=format',
    alt: 'Customer support representative helping through chat system',
  },
  'slack-workflow-automation-guide': {
    url: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80&auto=format',
    alt: 'Code and automation workflow on computer screen',
  },
  'why-slack-ticketing-bot': {
    url: 'https://images.unsplash.com/photo-1531746790095-e5995edc1857?w=800&q=80&auto=format',
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
};

export default blogCovers;
