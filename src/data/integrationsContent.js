// Long-form, per-integration copy merged into integrations.js at export time.
//
// The generated integration entries carry ~50 words each, which is too thin to
// rank. Everything here is written per tool — overview, workflows, setup and
// FAQs — so each page has substantive unique content rather than a template
// with the product name swapped in.
//
// Slugs not present here fall back to the short entry, so this can be filled in
// batches without breaking the build.

const integrationsContent = {
  github: {
    overview: [
      'Engineering teams lose a surprising amount of time to the gap between where work is discussed and where it is tracked. A bug gets reported in a Slack channel, someone says they will file an issue, and three days later nobody can remember whether it was filed at all. GitHub is where the work lives, but Slack is where the conversation happens, and the handoff between the two is almost always manual.',
      'Pingdesk closes that gap by making Slack a first-class entry point for GitHub work. When a teammate raises something in a channel, you turn the message into a tracked request without leaving the thread. The request carries an owner, a due date, and a status, and Pingdesk follows up automatically until it is closed. Nothing depends on someone remembering to switch tabs.',
      'The result is that your GitHub backlog reflects reality. Requests that come in through Slack stop evaporating, and engineers stop context-switching between the editor, the issue tracker, and a dozen unread channels just to figure out what they owe people.',
    ],
    workflows: [
      { title: 'Bug reports from any channel', desc: 'Someone posts a bug in #support or #product. Instead of asking them to file an issue, you convert the message into a tracked request with one action. The reporter gets status updates automatically, so they stop asking whether anyone saw it.' },
      { title: 'Pull request follow-through', desc: 'PRs that sit unreviewed are the most common source of silent delay. Pingdesk tracks review requests as first-class items with owners and reminders, so a stale PR surfaces as an overdue request rather than disappearing into notification noise.' },
      { title: 'Cross-team engineering asks', desc: 'When design, sales, or support needs something from engineering, the ask usually arrives as a Slack DM. Routing it through Pingdesk gives it a queue position and an owner instead of relying on one engineer\'s memory.' },
      { title: 'Incident follow-ups', desc: 'After an incident, the action items get discussed in the channel and then forgotten. Capturing each one as a tracked request means the postmortem items actually get done, with visible status for whoever asks.' },
    ],
    setupSteps: [
      'Install Pingdesk into your Slack workspace. The free tier covers up to three users, so you can trial the workflow with a small group before rolling it out.',
      'Invite the Pingdesk bot to the channels where engineering requests already arrive — typically your support, product, and team channels.',
      'Agree on a lightweight convention for what becomes a tracked request. Most teams start with anything that would otherwise become a GitHub issue.',
      'Use /pingdesk-request in any channel, or convert an existing message directly, to capture the ask with an owner and a due date.',
      'Review the open queue in your weekly engineering sync. Because every request has a status, the standing "what is blocked?" question answers itself.',
    ],
    faqs: [
      { q: 'Does Pingdesk replace GitHub Issues?', a: 'No. GitHub Issues remains where engineering work is tracked and planned. Pingdesk handles the layer before that — the requests, questions, and asks that arrive in Slack and need an owner and follow-up before anyone decides whether they become an issue at all.' },
      { q: 'Do requesters need a GitHub account?', a: 'No, and that is much of the point. People outside engineering — support, sales, operations — can raise and track requests entirely from Slack without needing a GitHub seat or learning the issue tracker.' },
      { q: 'Will this add more notifications to an already noisy Slack?', a: 'Pingdesk is designed to reduce noise rather than add to it. Reminders go to the request owner rather than the whole channel, and status updates replace the manual "any update on this?" messages that generate most of the noise today.' },
      { q: 'Can we see what engineering currently owes other teams?', a: 'Yes. Every tracked request has an owner and a status, so you can see the full open queue at any time. This is usually the first thing teams find valuable, because that list has never existed in one place before.' },
      { q: 'How long does it take to set up?', a: 'Installing the Slack app and inviting the bot to a few channels takes a few minutes. There is no GitHub configuration required to start, because Pingdesk works alongside your existing repositories rather than modifying them.' },
    ],
  },

  jira: {
    overview: [
      'Jira is where structured work gets tracked, but most work does not arrive structured. It arrives as a Slack message from someone in another team who needs something and does not know which project, issue type, or field values to use. The usual outcome is that the request either gets filed badly or does not get filed at all.',
      'Pingdesk gives those requests a home before they become Jira tickets. A request raised in Slack gets an owner, a due date, and automatic follow-up, and the person who raised it can see its status without having Jira access or knowing your workflow scheme. Requests that turn out to need formal tracking can be escalated into Jira with the context already gathered.',
      'For teams running service desks, this removes the most common failure mode: intake. The queue stops depending on whether a requester managed to navigate a ticket form correctly, and the team stops fielding the same "did you see my message?" question in five different channels.',
    ],
    workflows: [
      { title: 'Intake without the ticket form', desc: 'Requesters describe what they need in plain language in Slack. The request is captured with an owner and a deadline immediately, rather than being lost while someone works out which Jira project it belongs in.' },
      { title: 'Triage before ticket creation', desc: 'Many requests are questions, duplicates, or five-minute fixes that never needed a ticket. Handling those in Pingdesk keeps your Jira backlog reflecting real project work instead of accumulating noise.' },
      { title: 'Status visibility for non-Jira users', desc: 'Stakeholders without Jira licenses can follow their request from Slack. This alone removes a large share of the status-chasing messages most teams field every week.' },
      { title: 'SLA-style follow-up', desc: 'Pingdesk chases the owner as a due date approaches, so requests do not go stale silently. The escalation happens before the requester has to complain.' },
    ],
    setupSteps: [
      'Add Pingdesk to your Slack workspace and invite the bot to the channels where requests currently arrive.',
      'Identify the two or three channels that generate the most ad-hoc asks — usually a team help channel and one or two partner-team channels.',
      'Set a default owner or rotation for each channel so incoming requests always land with someone rather than sitting unassigned.',
      'Start capturing requests with /pingdesk-request. Keep using Jira exactly as you do now for planned project work.',
      'After two weeks, compare the Pingdesk queue against your Jira intake. Most teams find a meaningful share of requests were never reaching Jira at all.',
    ],
    faqs: [
      { q: 'Is this a replacement for Jira Service Management?', a: 'It is a lighter alternative for teams whose requests arrive in Slack and who find a full service desk too heavy. If you already run JSM successfully and your requesters use the portal, Pingdesk mainly helps with the asks that bypass the portal and land in Slack anyway.' },
      { q: 'Do requesters need Jira licenses?', a: 'No. Requests are raised and tracked entirely in Slack, which is usually the reason teams adopt it — Jira seats for occasional requesters are expensive and most people never learn the interface.' },
      { q: 'Can we still create Jira issues for real project work?', a: 'Yes, and you should. Pingdesk handles intake and follow-up; Jira remains your system of record for planned work. The two are complementary rather than overlapping.' },
      { q: 'What happens to requests nobody picks up?', a: 'They stay visible in the open queue and the assigned owner gets reminders as the due date approaches. Unowned work surfaces rather than quietly aging, which is the main thing Slack alone cannot do.' },
      { q: 'Does it work for teams other than engineering?', a: 'Yes. IT, HR, finance, and legal teams use the same pattern, because the underlying problem — requests arriving as chat messages with no tracking — is identical across functions.' },
    ],
  },

  zendesk: {
    overview: [
      'Zendesk is built for external customer support, and it does that well. Internal support is a different problem. When an employee needs something from IT, HR, or finance, they do not open a customer support portal — they send a Slack message, because that is where they already are and it takes four seconds.',
      'That behaviour is not going to change, so the practical question is whether those internal requests get tracked. Without something in place they usually do not. They sit in DMs and channels, get handled inconsistently, and leave no record of what was asked, who handled it, or how long it took.',
      'Pingdesk tracks internal requests where they actually happen. Employees keep using Slack exactly as they do now, and the team fielding those requests gets ownership, due dates, automatic follow-up, and a queue they can actually report on — without asking anyone to log into a separate portal.',
    ],
    workflows: [
      { title: 'IT help requests', desc: 'Access requests, hardware issues, and account problems arrive in Slack and get tracked with an owner and a due date instead of living in one person\'s DMs.' },
      { title: 'HR and people questions', desc: 'Sensitive requests can be raised without broadcasting them to a channel, while still being tracked so nothing gets missed during busy periods like onboarding.' },
      { title: 'Finance and procurement asks', desc: 'Expense questions, vendor approvals, and purchase requests get a queue position and a visible status, which removes most of the back-and-forth chasing.' },
      { title: 'Reporting on internal load', desc: 'Because every request is tracked, you can finally answer how many requests your team handles and where the time goes — data that does not exist when everything lives in chat.' },
    ],
    setupSteps: [
      'Install Pingdesk in Slack. Keep Zendesk running for customer-facing support; this is about the internal queue.',
      'Invite the bot to your internal help channels — typically #it-help, #people-ops, or the equivalent for your team.',
      'Set an owner or rotation per channel so requests are assigned automatically rather than waiting for someone to volunteer.',
      'Tell the team to keep asking in Slack exactly as before. The tracking happens on your side, so there is no behaviour change to roll out.',
      'Review the queue weekly. The volume figure is usually the most useful output in the first month.',
    ],
    faqs: [
      { q: 'Should we replace Zendesk with Pingdesk?', a: 'Not if you use Zendesk for external customers — that is what it is designed for. Pingdesk is aimed at internal requests, where a customer support portal is heavier than the situation warrants and employees route around it anyway.' },
      { q: 'Why not just use a Zendesk internal help centre?', a: 'You can, and some teams do. The practical objection is adoption: employees have to remember to visit it. Pingdesk works in the place people already ask, which is why tracked volume tends to be much higher.' },
      { q: 'Can we report on response times?', a: 'Yes. Requests carry timestamps, owners, and statuses, so you can measure volume and turnaround — usually for the first time, since chat-based requests leave no measurable record.' },
      { q: 'Is it suitable for sensitive HR requests?', a: 'Requests can be raised privately rather than in an open channel, so sensitive topics stay between the requester and the handling team while remaining tracked.' },
      { q: 'What does it cost to try?', a: 'The free tier covers up to three users, which is enough to run a real trial with a single team before deciding whether to expand it.' },
    ],
  },
  asana: {
    overview: [
      'Asana is good at holding planned work: projects with owners, sections, and due dates that someone deliberately set up. The trouble is that a large share of what teams actually do never enters that structure. It arrives as a Slack message — a favour, a question, a small ask from another team — and it gets handled or forgotten depending on who happened to be paying attention.',
      'Those unplanned asks are exactly the ones that damage trust between teams, because there is no record of them. The requester assumes it is being handled, the person asked forgets, and nobody finds out until someone follows up a week later. Adding every one of them to Asana is not realistic; most are too small to justify a task, and requesters outside the team often do not have access anyway.',
      'Pingdesk gives this category of work somewhere to live. A Slack message becomes a tracked request with an owner and a due date in a couple of seconds, and Pingdesk chases it until it closes. Asana keeps holding your planned project work, and the ad-hoc layer above it stops being invisible.',
    ],
    workflows: [
      { title: 'Cross-team favours', desc: 'Marketing needs a number from analytics, or design needs a copy review. These never warrant an Asana project but reliably get forgotten. Tracking them takes seconds and removes the follow-up chasing entirely.' },
      { title: 'Requests from people without Asana access', desc: 'Contractors, partner teams, and occasional stakeholders can raise and follow requests from Slack without needing a seat or learning your project structure.' },
      { title: 'Pre-project intake', desc: 'Many requests turn out to be duplicates or quick answers. Handling those in Pingdesk keeps your Asana projects reflecting real committed work rather than filling with speculative tasks.' },
      { title: 'Deadline follow-up that is not nagging', desc: 'Pingdesk reminds the owner privately as a due date approaches, so the requester does not have to send the passive-aggressive check-in message.' },
    ],
    setupSteps: [
      'Install Pingdesk into Slack and invite the bot to the channels where your team receives ad-hoc asks.',
      'Leave Asana exactly as it is. This is deliberately additive — you are capturing the work that was never going to reach Asana.',
      'Nominate a default owner per channel so requests land with a person immediately rather than waiting for a volunteer.',
      'Start converting Slack messages into requests with /pingdesk-request whenever someone asks for something that needs doing.',
      'After a fortnight, look at the closed queue. The volume of tracked-but-previously-invisible work is usually the number that convinces the rest of the team.',
    ],
    faqs: [
      { q: 'Why not just create an Asana task for every request?', a: 'You can, but in practice teams do not, because the overhead is disproportionate for a two-minute ask and requesters often lack access. Pingdesk lowers the cost of tracking to roughly the cost of sending the message, which is why the capture rate is much higher.' },
      { q: 'Does this duplicate our Asana projects?', a: 'No. Pingdesk holds short-lived requests, not multi-week project work. Anything substantial enough to need planning still belongs in Asana.' },
      { q: 'Do requesters need an Asana licence?', a: 'No. Requests are raised and tracked in Slack, which is the main reason teams use this for cross-functional and external-facing asks.' },
      { q: 'Can we see everything our team currently owes?', a: 'Yes — the open queue shows every outstanding request with its owner and status. Most teams have never had that list in one place before.' },
      { q: 'Is there a free tier to test it?', a: 'Yes, up to three users, which is enough to trial the workflow with one team before committing to a wider rollout.' },
    ],
  },

  notion: {
    overview: [
      'Notion tends to become the place a team writes things down, which means it also becomes the place where requests get buried. Someone adds a row to a request database, or leaves a comment on a page, and then waits. Notion has no real concept of chasing an owner, so whether the thing gets done depends entirely on someone remembering to check the right view.',
      'Meanwhile the actual conversation is happening in Slack. People ask there because it is faster and because they know someone will see it. The Notion database ends up as a partial record of a process that really runs on chat, which makes it worse than useless for knowing what is outstanding.',
      'Pingdesk handles the request layer where it actually happens, and leaves Notion to do what it is genuinely good at — documentation, specs, and knowledge. Requests get owners, due dates, and automatic follow-up in Slack; Notion stops pretending to be a ticketing system.',
    ],
    workflows: [
      { title: 'Replacing a Notion request database', desc: 'Teams running an intake table in Notion usually find it half-stale. Moving intake to Slack captures far more requests, because raising one costs nothing.' },
      { title: 'Documentation requests', desc: 'When someone asks for a page to be written or updated, the ask gets an owner and a deadline rather than sitting as an unresolved comment nobody is notified about.' },
      { title: 'Onboarding checklists that actually complete', desc: 'Notion holds the process; Pingdesk chases the individual steps that need a specific person to act, so new-hire setup does not stall silently.' },
      { title: 'Keeping Notion as the source of truth', desc: 'Requests can reference the relevant Notion page, so the documentation stays canonical while the chasing happens somewhere built for it.' },
    ],
    setupSteps: [
      'Add Pingdesk to Slack and invite it to the channels where requests currently arrive.',
      'If you run an intake database in Notion, leave it in place for now and run both for two weeks so you can compare capture rates.',
      'Set a default owner per channel so nothing lands unassigned.',
      'Use /pingdesk-request to capture asks, linking the relevant Notion page where useful.',
      'Compare the two queues after two weeks. The gap between them is the work that was previously invisible.',
    ],
    faqs: [
      { q: 'Should we stop using Notion for requests?', a: 'For tracking and chasing, yes — Notion has no follow-up mechanism, so request tables reliably go stale. Keep Notion for documentation and specs, which is what it is genuinely strong at.' },
      { q: 'Can requests link to Notion pages?', a: 'Yes. Most teams reference the relevant spec or runbook in the request, so context lives in Notion and the tracking lives in Slack.' },
      { q: 'Do requesters need Notion access?', a: 'No. Requests are raised entirely in Slack, so people outside your workspace structure can still ask for things and follow progress.' },
      { q: 'What happens to our existing Notion request table?', a: 'Nothing automatic — you can keep it, archive it, or run both in parallel while you compare. Most teams archive it once they see the capture-rate difference.' },
      { q: 'Is it free to try?', a: 'The free tier covers three users, which is enough to run a genuine side-by-side trial before deciding.' },
    ],
  },

  servicenow: {
    overview: [
      'ServiceNow is a serious ITSM platform, and for regulated, auditable, enterprise-scale processes it earns its place. But its weight is also its problem at the intake stage. Employees who need something small do not open ServiceNow, navigate the catalogue, and pick a request type. They message someone in Slack, because it takes four seconds and they know it works.',
      'The result in most ServiceNow shops is a shadow queue. A meaningful share of real internal demand never enters the system of record at all, which means your ticket volume understates actual load and your team spends its day on work that is officially invisible.',
      'Pingdesk captures that shadow queue where it forms. Requests raised in Slack get an owner, a due date, and automatic follow-up, and anything that genuinely needs formal ITSM handling can be escalated into ServiceNow with the context already gathered. You keep the system of record; you stop losing the requests that were never going to reach it.',
    ],
    workflows: [
      { title: 'Capturing the shadow queue', desc: 'Asks that arrive as DMs and channel messages get tracked instead of handled informally, so your reporting reflects actual demand rather than only the portal-submitted subset.' },
      { title: 'Filtering before formal tickets', desc: 'Questions, duplicates, and quick fixes get resolved without consuming a ServiceNow ticket, keeping the formal queue meaningful.' },
      { title: 'Status without a licence', desc: 'Requesters follow progress in Slack rather than needing a ServiceNow seat or learning the portal, which removes most status-chasing traffic.' },
      { title: 'Escalation with context', desc: 'When something does need formal handling, the discussion and detail are already captured rather than being reconstructed from memory.' },
    ],
    setupSteps: [
      'Install Pingdesk in Slack. ServiceNow stays exactly as it is — this sits in front of it, not instead of it.',
      'Invite the bot to the channels where employees already ask IT for things informally.',
      'Set an owner or rotation per channel so requests are assigned on arrival.',
      'Capture incoming asks with /pingdesk-request, escalating to ServiceNow only where formal tracking is genuinely required.',
      'After a month, compare Pingdesk volume against ServiceNow ticket volume. The difference is the demand your reporting has been missing.',
    ],
    faqs: [
      { q: 'Are you suggesting we replace ServiceNow?', a: 'No. For enterprises with audit, compliance, or change-management requirements, ServiceNow remains the system of record. Pingdesk addresses intake — the requests that bypass the portal and land in chat regardless of policy.' },
      { q: 'Does this undermine our ITSM process?', a: 'It tends to strengthen it. Requests that were previously handled invisibly become tracked, and the ones that genuinely need formal process arrive with better context.' },
      { q: 'Do employees need ServiceNow licences to raise requests?', a: 'Not for Pingdesk requests. They work entirely in Slack, which is usually why informal asks happen in the first place.' },
      { q: 'Can we report on the requests handled this way?', a: 'Yes. Volume, owner, and turnaround are all tracked, which is typically the first visibility teams get into their informal workload.' },
      { q: 'How disruptive is the rollout?', a: 'Minimal, because employees do not change behaviour — they keep asking in Slack. The change is entirely on the handling side.' },
    ],
  },
linear: {
    overview: [
      'Linear is deliberately opinionated about what belongs in it. Issues are meant to be real, scoped engineering work, and teams that keep it that way get a fast, clean backlog. The discipline that makes Linear good, though, means most incoming asks never make it in — they are too vague, too small, or come from someone without access.',
      'So those requests stay in Slack. Someone asks whether a bug is known, whether a feature is planned, whether engineering can pull something forward. The answer depends on whoever happens to read the message, and there is no record that the question was ever asked.',
      'Pingdesk holds that pre-issue layer. Requests get an owner, a due date, and automatic follow-up in Slack, and the ones that turn out to be genuine engineering work get promoted into Linear with the context already captured. Your Linear backlog stays clean, and the asks that used to evaporate stop evaporating.',
    ],
    workflows: [
      { title: 'Triage before an issue exists', desc: 'Not every report deserves a Linear issue. Handling questions and duplicates as requests keeps the backlog reflecting committed work rather than filling with speculative items.' },
      { title: 'Requests from non-engineers', desc: 'Sales, support, and success can raise and follow requests from Slack without a Linear seat or an understanding of your cycle structure.' },
      { title: 'Bug reports with a paper trail', desc: 'A bug raised in a channel becomes a tracked request immediately, so the reporter can see it was received even before anyone decides whether it becomes an issue.' },
      { title: 'Keeping cycles honest', desc: 'Ad-hoc interruptions get tracked separately from cycle work, which makes it possible to show how much unplanned load the team is actually absorbing.' },
    ],
    setupSteps: [
      'Install Pingdesk in Slack and invite the bot to the channels where engineering fields questions from other teams.',
      'Leave Linear untouched — the point is to protect its cleanliness, not to duplicate it.',
      'Assign a default owner or a rotating triage role per channel so requests never sit unclaimed.',
      'Capture incoming asks with /pingdesk-request, promoting to Linear only once something is confirmed as real work.',
      'Review tracked-but-not-promoted requests monthly. That list is a good signal of recurring friction worth fixing properly.',
    ],
    faqs: [
      { q: 'Does this compete with Linear?', a: 'No. Linear holds committed engineering work; Pingdesk holds the requests and questions that arrive before anyone has decided something is work. Teams that value a clean Linear backlog tend to find the separation useful.' },
      { q: 'Do requesters need Linear access?', a: 'No. Everything happens in Slack, which is why teams use it for asks coming from sales, support, and other non-engineering functions.' },
      { q: 'Can we measure unplanned interruption load?', a: 'Yes. Because ad-hoc requests are tracked separately from cycle work, you get a number for how much unplanned demand the team absorbs — usually higher than anyone estimates.' },
      { q: 'What stops the request queue becoming its own backlog?', a: 'Requests carry owners and due dates, and Pingdesk chases them. Anything that keeps being deferred is visible rather than quietly aging, which makes it easier to either do it or decline it.' },
      { q: 'Can we trial it on one team?', a: 'Yes — the free tier covers three users, so a single squad can run it before anyone commits to a wider rollout.' },
    ],
  },

  'help-scout': {
    overview: [
      'Help Scout is built around shared inboxes for customer conversations, and teams that use it for that purpose generally like it. The gap shows up with internal requests. When a colleague needs something, they do not email the support inbox — they send a Slack message, and that message is outside every workflow Help Scout provides.',
      'Teams often try to solve this by creating an internal mailbox and asking people to email it. Adoption is usually poor, for a simple reason: sending an email is slower than sending a Slack message to someone you can see is online, and people optimise for their own convenience rather than your reporting.',
      'Pingdesk tracks requests in the place people already make them. Nobody has to change how they ask; the team fielding the requests gains owners, due dates, automatic follow-up, and a queue they can report on. Help Scout keeps handling customers, and internal demand stops being invisible.',
    ],
    workflows: [
      { title: 'Internal help without an inbox', desc: 'Colleagues ask in Slack as they always have. The request is tracked on your side, so adoption is not something you have to campaign for.' },
      { title: 'Separating internal from customer load', desc: 'Keeping internal requests out of your customer mailbox stops response-time metrics being distorted by colleagues asking quick questions.' },
      { title: 'Requests that need a specific person', desc: 'Shared inboxes are weak when an ask genuinely needs one named individual. Pingdesk assigns an owner and chases that person directly.' },
      { title: 'Visibility for the requester', desc: 'People can see the status of their own request in Slack, which removes most of the follow-up messages a shared inbox generates.' },
    ],
    setupSteps: [
      'Install Pingdesk in Slack. Help Scout continues handling customer conversations unchanged.',
      'Invite the bot to the channels where internal requests currently land.',
      'Set an owner or rotation per channel so requests are assigned as they arrive.',
      'Tell colleagues nothing — deliberately. They keep asking in Slack, and the tracking happens on the handling side.',
      'Review volume after a month to see how much internal demand was never reaching any system.',
    ],
    faqs: [
      { q: 'Should we move customer support to Pingdesk?', a: 'No. Help Scout is designed for customer conversations over email and does that well. Pingdesk addresses internal requests arriving through Slack, which is a different problem with different expectations.' },
      { q: 'Why not create an internal Help Scout mailbox?', a: 'Many teams try. The usual outcome is low adoption, because emailing an inbox is slower than messaging a colleague. Tracking where people already ask avoids fighting that behaviour.' },
      { q: 'Will internal requests pollute our support metrics?', a: 'Not if they are tracked separately, which is the point. Keeping colleague questions out of the customer mailbox makes your customer response times meaningful again.' },
      { q: 'Can several people share responsibility for the queue?', a: 'Yes. You can rotate ownership per channel so the load is shared rather than defaulting to whoever is most responsive.' },
      { q: 'How much does it cost to start?', a: 'The free tier covers three users, enough to trial it with one internal-facing team.' },
    ],
  },
trello: {
    overview: [
      'Trello works because it is simple. A board, some lists, cards you drag between them — there is almost nothing to learn. That simplicity is also why Trello boards decay: there is no mechanism to chase anyone. A card sits in "To Do" indefinitely and nothing about the tool objects.',
      'Teams usually notice this when a request goes stale. Someone made a card, assumed that meant it was handled, and only discovered weeks later that nobody had picked it up. The board looked healthy because a card existed; the work had not moved.',
      'Pingdesk adds the missing accountability layer without adding process. Requests raised in Slack carry an owner and a due date, and Pingdesk follows up with that person as the deadline approaches. Trello keeps giving you the visual overview it is good at, and the requests that matter stop drifting.',
    ],
    workflows: [
      { title: 'Requests that need chasing', desc: 'A card with no due date and no owner has no mechanism to surface itself. A tracked request does, so the things people are actually waiting on get attention.' },
      { title: 'Intake from people without board access', desc: 'Clients, partner teams, and colleagues can raise requests from Slack without being added to a board or learning your list structure.' },
      { title: 'Cutting board sprawl', desc: 'Teams often create boards purely to track incoming asks. Handling those in Slack means fewer half-abandoned boards nobody checks.' },
      { title: 'Deadline reminders without nagging', desc: 'Pingdesk reminds the owner directly, so nobody has to post the public "any update?" message that makes everyone uncomfortable.' },
    ],
    setupSteps: [
      'Add Pingdesk to Slack and invite it to the channels where requests arrive.',
      'Keep your Trello boards for planned and visual work — this is aimed at the asks that never made it onto a board.',
      'Set a default owner per channel so incoming requests are assigned immediately.',
      'Use /pingdesk-request to capture asks, referencing the relevant Trello card where one exists.',
      'After a few weeks, check how many tracked requests never corresponded to a card. That gap is the work Trello was never seeing.',
    ],
    faqs: [
      { q: 'Does Pingdesk replace Trello?', a: 'No. Trello gives you a visual board for work you have already decided to do. Pingdesk handles incoming requests that need an owner and follow-up before anyone decides whether they belong on a board.' },
      { q: 'Why do our Trello cards go stale?', a: 'Because Trello has no chasing mechanism. Cards do not escalate, and nobody is reminded. Adding due dates helps a little, but the notification is easy to ignore compared with a direct reminder.' },
      { q: 'Can external people raise requests?', a: 'Yes, from Slack, without needing access to your boards — which is usually simpler than managing board permissions for occasional requesters.' },
      { q: 'Will this mean maintaining two systems?', a: 'In practice most teams end up maintaining fewer, because the ad-hoc boards created purely for intake stop being necessary.' },
      { q: 'Is there a free tier?', a: 'Yes, up to three users, which is enough to test the workflow alongside your existing boards.' },
    ],
  },

  confluence: {
    overview: [
      'Confluence is a documentation tool that teams repeatedly try to use as a request system, usually by creating a page with a table on it. It never works well for long. Pages do not notify anyone, tables do not enforce ownership, and there is no way to escalate something that has been sitting untouched for a month.',
      'The requests themselves are still happening — they arrive in Slack, get discussed, and are either handled immediately or forgotten. The Confluence table becomes a partial, out-of-date record of a process that actually runs on chat, which is worse than having no record at all because it creates false confidence.',
      'Pingdesk handles the request lifecycle where it happens, with owners, due dates, and automatic follow-up. Confluence goes back to holding documentation, runbooks, and decisions — the things it is genuinely good at and that benefit from being written down carefully.',
    ],
    workflows: [
      { title: 'Retiring the request table', desc: 'Teams running intake through a Confluence page usually find it stale within weeks. Moving intake to Slack raises capture rates because raising a request costs almost nothing.' },
      { title: 'Documentation requests', desc: 'Asks to write or update a page get an owner and a deadline rather than sitting as a page comment that generates no follow-up.' },
      { title: 'Linking process to action', desc: 'Requests can reference the Confluence runbook that describes how to handle them, so the documentation stays canonical while the chasing happens elsewhere.' },
      { title: 'Onboarding steps that complete', desc: 'Confluence holds the onboarding guide; Pingdesk chases the individual steps that need a named person to act.' },
    ],
    setupSteps: [
      'Install Pingdesk in Slack and invite it to the channels where requests currently arrive.',
      'Leave your Confluence spaces alone — documentation stays where it is.',
      'If you have an intake table, run both in parallel for two weeks rather than migrating immediately.',
      'Capture requests with /pingdesk-request, linking the relevant Confluence page for context.',
      'Compare the two after a fortnight. The difference is the demand your table was never capturing.',
    ],
    faqs: [
      { q: 'Can Confluence work as a ticketing system?', a: 'Only poorly. It has no ownership enforcement, no reminders, and no escalation, so request tables reliably go stale. It is excellent for documentation, which is a different job.' },
      { q: 'Do we have to migrate our existing pages?', a: 'No. Documentation stays in Confluence. Only the request-tracking table becomes redundant, and you can keep it running in parallel while you compare.' },
      { q: 'Can requests reference our runbooks?', a: 'Yes, and most teams do — the request links to the Confluence page describing the process, keeping a single source of truth.' },
      { q: 'Do requesters need Confluence access?', a: 'No. Requests are raised and tracked in Slack, so people outside your Atlassian licences can still ask and follow progress.' },
      { q: 'How long does a trial take to set up?', a: 'A few minutes to install and invite the bot. The free tier covers three users, so you can run a real comparison before deciding.' },
    ],
  },
};

export default integrationsContent;
