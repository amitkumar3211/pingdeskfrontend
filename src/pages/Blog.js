import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import EmailCapture from '../components/EmailCapture';
import allPosts from '../data/blogPosts';

const inlinePosts = [
  {
    slug: 'how-to-track-requests-in-slack',
    title: 'How to Track Requests in Slack Without Losing Your Mind',
    excerpt: 'Slack is great for communication, but terrible for tracking requests. Learn how teams use Pingdesk to turn Slack messages into trackable, follow-up-able requests.',
    category: 'Guide',
    date: 'Jun 5, 2026',
    readTime: '5 min read',
    content: `
## The Problem With Slack Requests

Every team has the same problem: someone posts a request in Slack, it gets buried under 50 messages, and nobody follows up. Sound familiar?

According to our data, **the average Slack message gets buried within 23 minutes** in active channels. For requests that need action, this is a disaster.

## Why Email and Tickets Don't Work

You might think "just use email" or "create a Jira ticket." But here's the reality:

- **Email** takes people out of Slack, where they already work
- **Jira/Linear** tickets are overkill for simple requests like "review this design" or "approve this copy"
- **Spreadsheets** get outdated within hours

## The /request Solution

Pingdesk adds a simple \`/request\` command to Slack. Here's how it works:

1. **Create**: Type \`/request Review homepage design @sarah\` in any channel
2. **Track**: Pingdesk creates a trackable card with status, assignee, and timeline
3. **Follow up**: If there's no response, Pingdesk automatically sends polite reminders
4. **Complete**: The assignee clicks "Mark as Done" — everyone is notified

## Real Results

Teams using Pingdesk report:
- **Zero lost requests** (down from 3-4 per week)
- **5+ hours saved** per week on manual follow-ups
- **98% follow-up rate** on all requests

## Get Started Free

Pingdesk is free for teams up to 3 users. Install it in 60 seconds — no configuration needed.
    `,
  },
  {
    slug: 'slack-request-management-best-practices',
    title: '7 Best Practices for Managing Requests in Slack',
    excerpt: 'From dedicated channels to automated follow-ups, here are the proven strategies top teams use to keep Slack requests organized and accountable.',
    category: 'Best Practices',
    date: 'May 28, 2026',
    readTime: '4 min read',
    content: `
## 1. Use a Dedicated Request Channel

Create a channel like \`#requests\` or \`#team-requests\` where all formal requests go. This prevents requests from getting lost in \`#general\` noise.

## 2. Always Assign an Owner

A request without an owner is a request that won't get done. Always tag someone specific: \`/request Review Q3 report @david\`.

## 3. Set Clear Deadlines

When creating requests, mention the timeline. Pingdesk tracks creation time and sends automatic reminders, so nothing slips through the cracks.

## 4. Use Status Updates

Don't leave people guessing. Mark requests as "In Progress" when you start working on them. This eliminates the "hey, did you see my message?" follow-ups.

## 5. Review Open Requests Weekly

Use Pingdesk's dashboard to review all open requests in your weekly standup. Sort by oldest-first to catch anything falling through the cracks.

## 6. Automate Follow-ups

Manual follow-ups are awkward and time-consuming. Let Pingdesk handle reminders automatically — it sends polite nudges at configurable intervals.

## 7. Celebrate Completion

When requests are marked as done, the whole channel sees it. This creates accountability and gives a sense of progress.

## Start Today

These practices work with or without tools, but Pingdesk makes them effortless. Try it free.
    `,
  },
  {
    slug: 'slack-vs-email-for-internal-requests',
    title: 'Slack vs Email for Internal Requests: Which Is Better?',
    excerpt: 'Both have pros and cons. We break down when to use Slack for requests, when email wins, and how to get the best of both worlds.',
    category: 'Comparison',
    date: 'May 20, 2026',
    readTime: '6 min read',
    content: `
## The Case for Email

Email has been the default for decades. Its strengths:
- **Persistent**: Messages don't disappear in a feed
- **Threaded**: Each conversation is self-contained
- **External**: Works across organizations

## The Case for Slack

Most teams have moved to Slack because:
- **Speed**: Messages are instant, responses are faster
- **Context**: You're already in Slack 8+ hours a day
- **Integrations**: Everything connects to Slack

## The Problem With Both

**Email requests** get buried in overflowing inboxes. The average professional receives 121 emails per day — your request is competing with spam, newsletters, and CC-all chains.

**Slack requests** get buried in fast-moving channels. A message posted at 10am might be 200 messages deep by noon.

## The Best of Both Worlds

The answer isn't choosing one over the other — it's adding **structure** to Slack.

Pingdesk turns Slack messages into structured, trackable requests:
- **Assigned**: Every request has a clear owner
- **Tracked**: Status is visible to everyone
- **Followed up**: Automatic reminders if no action is taken
- **Searchable**: Dashboard view of all requests

You get Slack's speed and context, with email's persistence and accountability.

## The Verdict

For internal team requests, **Slack + Pingdesk beats email**. You stay where you work, and nothing falls through the cracks.

For external communication, email still wins. But for your team? Stop sending "per my last email" and start using \`/request\`.
    `,
  },
  {
    slug: 'best-slack-apps-for-project-management',
    title: 'Best Slack Apps for Project Management in 2026',
    excerpt: 'A curated list of Slack apps that help teams manage projects, track tasks, and stay organized — without leaving Slack.',
    category: 'Roundup',
    date: 'May 12, 2026',
    readTime: '7 min read',
    content: `
## 1. Pingdesk — Request Tracking

**Best for**: Teams that need to track internal requests and ensure follow-through.

Pingdesk turns Slack messages into trackable requests with automatic reminders. Use \`/request\` to create, assign, and track requests without leaving Slack.

- Free plan for up to 3 users
- Automatic follow-up reminders
- Web dashboard with analytics
- Setup in under 60 seconds

## 2. Linear — Issue Tracking

**Best for**: Engineering teams that need full project management.

Linear's Slack integration lets you create issues, update status, and get notifications. It's more heavyweight than Pingdesk but offers full sprint planning.

## 3. Notion — Documentation

**Best for**: Teams that need a central knowledge base alongside task management.

Notion's Slack bot lets you search docs, create pages, and get notified about updates. Great for documentation-heavy teams.

## 4. Standup.ly — Async Standups

**Best for**: Remote teams that want to run standups without meetings.

Runs daily async standups in Slack, collecting updates from team members and posting summaries.

## 5. Polly — Quick Polls

**Best for**: Getting team input on decisions quickly.

Create polls in Slack with multiple choice, rating scales, or open text. Great for making group decisions fast.

## Which Should You Choose?

It depends on your biggest pain point:
- **Requests getting lost?** → Pingdesk
- **Need full project boards?** → Linear
- **Need a knowledge base?** → Notion
- **Want async standups?** → Standup.ly

Most teams use 2-3 of these together. Pingdesk pairs especially well with Linear (lightweight requests in Pingdesk, complex issues in Linear).
    `,
  },
  {
    slug: 'automate-slack-follow-ups',
    title: 'How to Automate Follow-ups in Slack (Stop Chasing People)',
    excerpt: 'Manual follow-ups waste hours every week and create awkward conversations. Here\'s how to automate them with Pingdesk.',
    category: 'Guide',
    date: 'May 5, 2026',
    readTime: '4 min read',
    content: `
## The Follow-up Problem

You send a request in Slack. Two days later, nothing. So you write the dreaded follow-up:

> "Hey, just circling back on this..."

We've all been there. And according to surveys, **follow-ups are the #1 most awkward workplace communication**.

## Why Manual Follow-ups Fail

- **They're easy to forget** — you lose track of what's pending
- **They're uncomfortable** — nobody likes nagging coworkers
- **They're time-consuming** — checking in on 10 requests manually takes 30+ minutes

## Automate It With Pingdesk

Pingdesk sends automatic follow-up reminders for pending requests. Here's how:

### Default Behavior
When you create a request with \`/request\`, Pingdesk starts a 24-hour timer. If the request isn't acted on, it sends a polite reminder to the assignee.

### Customize Intervals
Pro plan users can set custom reminder intervals (1-168 hours). Set shorter intervals for urgent requests, longer for low-priority ones.

### What Reminders Look Like
Reminders appear as Slack messages in the original channel:

> **Reminder** | #047
> @sarah — "Review homepage design" is still pending.
> [Mark as Done] [In Progress]

### Respecting Boundaries
- Reminders only go to the assigned person
- They stop automatically once the request is marked "In Progress" or "Done"
- The assignee controls the response, not the requester

## The Result

Teams using Pingdesk's auto-follow-ups report:
- **98% response rate** on all requests
- **5+ hours saved** per week per team
- **Zero awkward follow-up conversations**

## Try It Free

Pingdesk is free for up to 3 users. Auto-follow-ups are included on all plans.
    `,
  },
  {
    slug: 'slack-task-management-apps',
    title: 'Best Slack Apps for Task Management in 2026',
    excerpt: 'From lightweight request tracking to full project boards, these Slack apps help your team stay on top of tasks without leaving the workspace.',
    category: 'Roundup',
    date: 'Jun 8, 2026',
    readTime: '6 min read',
    content: `
## Why Manage Tasks in Slack?

Your team spends 8+ hours a day in Slack. Switching to a separate task management tool creates friction, and friction kills adoption. The best approach: manage tasks where the work already happens.

## Top Slack Task Management Apps

### 1. Pingdesk — Request & Task Tracking

**Best for**: Tracking requests, follow-ups, and ad-hoc tasks.

Pingdesk lets you create tasks with \`/request\` and assign them to teammates. Every task has a status (Pending, In Progress, Done) and automatic follow-up reminders if it goes unanswered.

- Free for up to 3 users
- Auto follow-up reminders
- Web dashboard with analytics
- 60-second setup

### 2. Linear — Engineering Task Management

**Best for**: Sprint planning and issue tracking for engineering teams.

Linear's Slack integration lets you create issues, sync status updates, and get notifications. It's a full project management tool, not just Slack-native.

### 3. Asana — Cross-functional Project Management

**Best for**: Marketing, ops, and cross-functional teams that need project timelines.

Create Asana tasks from Slack messages and get due date reminders. More heavyweight than Pingdesk but offers Gantt charts, portfolios, and resource management.

### 4. Todoist — Personal Task Lists

**Best for**: Individual productivity within Slack.

Add personal tasks from Slack and get reminders. Best for individual contributors, not team request tracking.

### 5. Workast — Task Manager Built for Slack

**Best for**: Teams that want Kanban boards inside Slack.

Create tasks from any Slack message and organize them on boards. More project-management-focused than Pingdesk.

## When to Use What

| Need | Best Tool |
|------|-----------|
| Track team requests with follow-ups | Pingdesk |
| Engineering sprint planning | Linear |
| Cross-functional project management | Asana |
| Personal task lists | Todoist |
| Kanban boards in Slack | Workast |

## Try Pingdesk

If your main problem is requests getting lost in Slack, Pingdesk is the fastest solution. Free to start, 60-second setup, auto follow-ups included.
    `,
  },
  {
    slug: 'slack-follow-up-automation',
    title: 'How to Never Miss a Follow-up in Slack Again',
    excerpt: 'Tired of manually tracking who owes you a response? Here are 3 ways to automate Slack follow-ups, from built-in features to dedicated tools.',
    category: 'Guide',
    date: 'Jun 6, 2026',
    readTime: '5 min read',
    content: `
## The Follow-up Tax

Every team pays a "follow-up tax" — time spent tracking down responses to requests, reminders, and approvals. For the average team, this is **5+ hours per week** spent on manual follow-ups.

## Method 1: Slack Reminders (Free, Limited)

Slack has built-in reminders: \`/remind @sarah to review the design in 2 hours\`. The problem? You're still manually tracking every request. And if Sarah ignores the reminder, you're back to square one.

**Pros**: Free, built-in
**Cons**: Manual setup for every request, no tracking, no accountability

## Method 2: Slack Workflow Builder (Free, More Setup)

Slack's Workflow Builder can create basic automated flows. You could build a workflow that sends a follow-up message after a time delay. But it requires setup per workflow, can't track status, and doesn't adapt based on whether someone responded.

**Pros**: Free, customizable
**Cons**: Complex setup, no status tracking, doesn't know if someone responded

## Method 3: Pingdesk (Best — Automatic & Intelligent)

Pingdesk automates follow-ups as a core feature. When you create a request with \`/request\`, Pingdesk:

1. **Tracks status automatically** — Pending, In Progress, Done
2. **Sends reminders if no action** — After 24 hours (configurable), Pingdesk sends a polite reminder to the assignee
3. **Stops when resolved** — Once the assignee clicks "In Progress" or "Mark as Done," reminders stop
4. **Shows everything in a dashboard** — See all pending requests, who's blocked, and what's overdue

### Why This Works Better

- **Zero manual effort** — You don't have to remember to follow up
- **Not awkward** — The bot follows up, not you
- **Accountable** — Everyone can see the status in the channel
- **Configurable** — Set reminder intervals from 1 hour to 7 days

## The Math

If your team sends 20 requests per week and each manual follow-up takes 5 minutes:

- Manual: 20 requests x 5 min = **100 minutes/week** (1.7 hours)
- With Pingdesk: **0 minutes** — it's automatic

Over a year, that's **85+ hours saved** — more than two full work weeks.

## Get Started

Pingdesk is free for up to 3 users. Install in 60 seconds, and your first automatic follow-up happens within 24 hours.
    `,
  },
  {
    slug: 'slack-approval-workflow',
    title: 'How to Build an Approval Workflow in Slack',
    excerpt: 'Need approvals for expenses, time off, or content reviews? Here\'s how to build a simple approval workflow in Slack using Pingdesk.',
    category: 'Guide',
    date: 'Jun 3, 2026',
    readTime: '5 min read',
    content: `
## Why Approval Workflows in Slack?

Most approvals happen via email: someone sends a request, the approver sees it 4 hours later, replies "approved," and the requester doesn't see the reply until the next morning. Total cycle time: 24+ hours for something that should take 2 minutes.

Moving approvals to Slack cuts this cycle to minutes — if you have the right structure.

## The Simple Approach: Pingdesk

You don't need a complex workflow engine for most approvals. Here's how teams use Pingdesk:

### Step 1: Create an approval request

\`\`\`
/request Approve Q3 marketing budget @finance-lead
\`\`\`

Pingdesk creates a trackable request card in the channel with:
- Title: "Approve Q3 marketing budget"
- Assigned to: @finance-lead
- Status: Pending
- Action buttons: Mark as Done, In Progress

### Step 2: Approver takes action

The approver sees the request in their Slack feed and clicks **"Mark as Done"** to approve, or **"In Progress"** to indicate they're reviewing it.

### Step 3: Auto follow-up if needed

If the approver doesn't respond within 24 hours, Pingdesk sends an automatic reminder. No more chasing approvers.

### Step 4: Track in dashboard

All approval requests are visible in the Pingdesk dashboard. Filter by status to see what's pending, who's blocking, and what's been approved.

## Common Approval Workflows Teams Build

- **Expense approvals**: \`/request Approve $500 conference budget @manager\`
- **PTO requests**: \`/request PTO Dec 23-27 @hr-team\`
- **Content review**: \`/request Approve blog post draft @editor\`
- **Design sign-off**: \`/request Sign off on homepage redesign @product-lead\`
- **Vendor onboarding**: \`/request Approve new vendor contract @legal\`

## When You Need More

Pingdesk covers 80% of approval needs with zero configuration. If you need conditional routing (e.g., "if amount > $1000, route to VP"), you'll want a dedicated workflow tool like Wrangle or Jira SM.

But for most teams, a simple \`/request\` + auto follow-up is all you need.

## Start Building Approval Workflows

Install Pingdesk free. Your first approval workflow is one slash command away.
    `,
  },
];

// Merge: use inline content for existing posts, data file content for new posts
const inlineContentMap = Object.fromEntries(inlinePosts.map((p) => [p.slug, p.content]));
const posts = allPosts.map((p) => ({
  ...p,
  content: p.content || inlineContentMap[p.slug] || '',
}));

const BlogPost = ({ post, onBack }) => (
  <div className="bg-white font-sans text-gray-900 antialiased overflow-x-hidden">
    <SEO
      title={`${post.title} | Pingdesk Blog`}
      description={post.excerpt}
      canonical={`https://www.getpingdesk.com/blog/${post.slug}`}
    />
    <Navbar />
    <article className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-violet-600 font-medium mb-8 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to blog
        </button>

        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-bold text-violet-600 bg-violet-50 px-3 py-1 rounded-full">{post.category}</span>
          <span className="text-xs text-gray-400">{post.date}</span>
          <span className="text-xs text-gray-400">{post.readTime}</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-8">
          {post.title}
        </h1>

        <div className="prose prose-gray prose-lg max-w-none
          prose-headings:font-bold prose-headings:tracking-tight
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-gray-600 prose-p:leading-relaxed
          prose-li:text-gray-600
          prose-strong:text-gray-900
          prose-code:bg-violet-50 prose-code:text-violet-700 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
          prose-blockquote:border-violet-300 prose-blockquote:bg-violet-50/50 prose-blockquote:rounded-r-lg prose-blockquote:py-1
        ">
          {post.content.split('\n').map((line, i) => {
            if (line.startsWith('## ')) return <h2 key={i}>{line.replace('## ', '')}</h2>;
            if (line.startsWith('### ')) return <h3 key={i}>{line.replace('### ', '')}</h3>;
            if (line.startsWith('> ')) return <blockquote key={i}><p>{line.replace('> ', '')}</p></blockquote>;
            if (line.startsWith('- **')) {
              const match = line.match(/^- \*\*(.+?)\*\*(.*)$/);
              if (match) return <li key={i}><strong>{match[1]}</strong>{match[2]}</li>;
            }
            if (line.startsWith('- ')) return <li key={i}>{line.replace('- ', '')}</li>;
            if (line.trim() === '') return null;
            // Inline formatting
            const formatted = line
              .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
              .replace(/`(.+?)`/g, '<code>$1</code>');
            return <p key={i} dangerouslySetInnerHTML={{ __html: formatted }} />;
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-br from-gray-900 via-gray-900 to-violet-950 rounded-2xl px-8 py-12 text-center">
          <h3 className="text-2xl font-black text-white mb-3">Ready to try Pingdesk?</h3>
          <p className="text-gray-400 mb-6">Free for up to 3 users. Install in 60 seconds.</p>
          <a
            href="https://pindeskapi.himalayancoders.com/slack/install"
            className="inline-flex items-center gap-2.5 bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.271 0a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.164 0a2.528 2.528 0 0 1 2.521 2.522v6.312zM15.164 18.956a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.164 24a2.528 2.528 0 0 1-2.521-2.522v-2.522h2.521zm0-1.271a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.314A2.528 2.528 0 0 1 24 15.164a2.528 2.528 0 0 1-2.522 2.521h-6.314z" />
            </svg>
            Add to Slack — Free
          </a>
        </div>

        {/* Email capture */}
        <div className="mt-12">
          <EmailCapture variant="sidebar" />
        </div>
      </div>
    </article>
    <Footer />
  </div>
);

const BlogIndex = ({ onSelectPost }) => (
  <div className="bg-white font-sans text-gray-900 antialiased overflow-x-hidden">
    <SEO
      title="Slack Productivity Tips & Guides | Pingdesk Blog"
      description="Learn how to track requests, automate follow-ups, and keep your Slack workspace organized. Tips and guides for productive teams."
      canonical="https://www.getpingdesk.com/blog"
    />
    <Navbar />
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-3">Blog</p>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-4">
            Slack productivity tips & guides
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Learn how to track requests, automate follow-ups, and keep your Slack workspace organized.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <button
              key={post.slug}
              onClick={() => onSelectPost(post)}
              className="text-left bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-bold text-violet-600 bg-violet-50 px-2.5 py-1 rounded-full uppercase tracking-wider">{post.category}</span>
                <span className="text-[11px] text-gray-400">{post.readTime}</span>
              </div>
              <h2 className="text-lg font-bold text-gray-900 group-hover:text-violet-600 transition-colors mb-3 leading-snug">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <span className="text-xs font-semibold text-violet-600 group-hover:text-violet-700 transition-colors inline-flex items-center gap-1">
                Read more
                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  if (selectedPost) {
    return <BlogPost post={selectedPost} onBack={() => setSelectedPost(null)} />;
  }

  return <BlogIndex onSelectPost={setSelectedPost} />;
};

export { posts };
export default Blog;
