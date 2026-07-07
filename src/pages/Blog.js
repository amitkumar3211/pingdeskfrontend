import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import EmailCapture from '../components/EmailCapture';
import allPosts from '../data/blogPosts';
import blogCovers from '../data/blogCovers';

// Category colors and icons
const categoryStyles = {
  Guide: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', gradient: 'from-blue-500 to-cyan-500', icon: '📘' },
  'Best Practices': { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', gradient: 'from-emerald-500 to-teal-500', icon: '✅' },
  Comparison: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', gradient: 'from-orange-500 to-red-500', icon: '⚖️' },
  Roundup: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', gradient: 'from-purple-500 to-pink-500', icon: '📋' },
  Productivity: { bg: 'bg-violet-50', text: 'text-violet-600', border: 'border-violet-200', gradient: 'from-violet-500 to-indigo-500', icon: '⚡' },
  Security: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200', gradient: 'from-red-500 to-rose-500', icon: '🔒' },
  Leadership: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200', gradient: 'from-amber-500 to-yellow-500', icon: '👔' },
  Research: { bg: 'bg-cyan-50', text: 'text-cyan-600', border: 'border-cyan-200', gradient: 'from-cyan-500 to-blue-500', icon: '📊' },
};
const defaultStyle = { bg: 'bg-violet-50', text: 'text-violet-600', border: 'border-violet-200', gradient: 'from-violet-500 to-indigo-500', icon: '📝' };
const getStyle = (cat) => categoryStyles[cat] || defaultStyle;

// Reading progress bar
const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-100">
      <div className="h-full bg-gradient-to-r from-violet-600 to-indigo-600 transition-all duration-150" style={{ width: `${progress}%` }} />
    </div>
  );
};

// Extract headings for table of contents
const extractTOC = (content) => {
  if (!content) return [];
  return content.split('\n')
    .filter(l => l.startsWith('## ') && !l.startsWith('### '))
    .map((l, i) => ({ id: `section-${i}`, text: l.replace('## ', '') }));
};

// Blog hero — real image with gradient overlay fallback
const BlogHeroIllustration = ({ category, slug }) => {
  const style = getStyle(category);
  const cover = blogCovers[slug];

  if (cover) {
    return (
      <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden mb-10 group">
        <img
          src={cover.url}
          alt={cover.alt}
          loading="eager"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        <div className="absolute bottom-4 left-5">
          <span className={`text-xs font-bold text-white ${style.bg.replace('bg-', 'bg-')}/90 backdrop-blur-sm px-3 py-1.5 rounded-full`}>
            {style.icon} {category}
          </span>
        </div>
      </div>
    );
  }

  // Fallback gradient if no image
  return (
    <div className={`relative w-full h-56 md:h-72 rounded-2xl bg-gradient-to-br ${style.gradient} overflow-hidden mb-10`}>
      <div className="absolute inset-0">
        <div className="absolute top-6 left-8 w-16 h-16 bg-white/10 rounded-2xl animate-float-slow" />
        <div className="absolute top-16 right-12 w-10 h-10 bg-white/15 rounded-full animate-float-medium" />
        <div className="absolute bottom-8 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-float-fast" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-6xl md:text-8xl opacity-90 animate-bounce-slow">{style.icon}</span>
      </div>
    </div>
  );
};

// Render a markdown line with better formatting
const renderLine = (line, i, headingIndex) => {
  if (!line || line.trim() === '') return null;

  // H2 with anchor and visual separator
  if (line.startsWith('## ')) {
    const text = line.replace('## ', '');
    const idx = headingIndex.current++;
    return (
      <h2 key={i} id={`section-${idx}`} className="scroll-mt-24 group flex items-center gap-3">
        <span className="w-1 h-8 bg-gradient-to-b from-violet-500 to-indigo-500 rounded-full flex-shrink-0" />
        {text}
      </h2>
    );
  }

  // H3
  if (line.startsWith('### ')) {
    return <h3 key={i}>{line.replace('### ', '')}</h3>;
  }

  // Blockquote with styled card
  if (line.startsWith('> ')) {
    return (
      <blockquote key={i} className="not-prose my-6 border-l-4 border-violet-400 bg-violet-50/60 rounded-r-xl px-5 py-4">
        <p className="text-gray-700 italic leading-relaxed">{line.replace('> ', '')}</p>
      </blockquote>
    );
  }

  // Table rows
  if (line.startsWith('|') && line.endsWith('|')) {
    return null; // Tables handled separately
  }

  // Bold list items with icon
  if (line.startsWith('- **')) {
    const match = line.match(/^- \*\*(.+?)\*\*(.*)$/);
    if (match) {
      return (
        <li key={i} className="flex items-start gap-3 py-1">
          <span className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2.5 flex-shrink-0" />
          <span><strong className="text-gray-900">{match[1]}</strong><span className="text-gray-600">{match[2]}</span></span>
        </li>
      );
    }
  }

  // Numbered list items
  const numMatch = line.match(/^(\d+)\.\s+\*\*(.+?)\*\*(.*)$/);
  if (numMatch) {
    return (
      <li key={i} className="flex items-start gap-3 py-1.5 list-none">
        <span className="w-7 h-7 bg-violet-100 text-violet-700 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{numMatch[1]}</span>
        <span><strong className="text-gray-900">{numMatch[2]}</strong><span className="text-gray-600">{numMatch[3]}</span></span>
      </li>
    );
  }
  const numMatch2 = line.match(/^(\d+)\.\s+(.*)$/);
  if (numMatch2) {
    return (
      <li key={i} className="flex items-start gap-3 py-1 list-none">
        <span className="w-7 h-7 bg-violet-100 text-violet-700 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{numMatch2[1]}</span>
        <span className="text-gray-600" dangerouslySetInnerHTML={{ __html: numMatch2[2].replace(/\*\*(.+?)\*\*/g, '<strong class="text-gray-900">$1</strong>').replace(/`(.+?)`/g, '<code class="bg-violet-50 text-violet-700 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>') }} />
      </li>
    );
  }

  // Regular list items
  if (line.startsWith('- ')) {
    const content = line.replace('- ', '');
    return (
      <li key={i} className="flex items-start gap-3 py-1">
        <span className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2.5 flex-shrink-0" />
        <span className="text-gray-600" dangerouslySetInnerHTML={{ __html: content.replace(/\*\*(.+?)\*\*/g, '<strong class="text-gray-900">$1</strong>').replace(/`(.+?)`/g, '<code class="bg-violet-50 text-violet-700 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>') }} />
      </li>
    );
  }

  // Paragraph with inline formatting
  const formatted = line
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-gray-900">$1</strong>')
    .replace(/`(.+?)`/g, '<code class="bg-violet-50 text-violet-700 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>');
  return <p key={i} dangerouslySetInnerHTML={{ __html: formatted }} />;
};

// Parse and render markdown tables
const renderTable = (lines) => {
  const tableBlocks = [];
  let current = [];
  let inTable = false;

  lines.forEach((line, i) => {
    if (line.startsWith('|') && line.endsWith('|')) {
      if (!inTable) inTable = true;
      current.push({ line, index: i });
    } else {
      if (inTable) {
        tableBlocks.push([...current]);
        current = [];
        inTable = false;
      }
    }
  });
  if (current.length) tableBlocks.push(current);

  return tableBlocks.map((block, bi) => {
    const rows = block
      .filter(r => !r.line.match(/^\|[\s-|]+\|$/))
      .map(r => r.line.split('|').filter(c => c.trim()).map(c => c.trim()));

    if (rows.length < 2) return null;
    const header = rows[0];
    const body = rows.slice(1);

    return (
      <div key={`table-${bi}`} className="my-8 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              {header.map((h, hi) => (
                <th key={hi} className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((row, ri) => (
              <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                {row.map((cell, ci) => (
                  <td key={ci} className="px-4 py-3 text-gray-600 border-b border-gray-100" dangerouslySetInnerHTML={{ __html: cell.replace(/\*\*(.+?)\*\*/g, '<strong class="text-gray-900">$1</strong>') }} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  });
};

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

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);
  const headingIndex = useRef(0);

  useEffect(() => {
    headingIndex.current = 0;
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="bg-white font-sans text-gray-900 antialiased min-h-screen flex items-center justify-center">
        <Navbar />
        <div className="text-center pt-32">
          <h1 className="text-3xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-violet-600 hover:underline">Back to blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const toc = extractTOC(post.content);
  const lines = post.content ? post.content.split('\n') : [];
  const style = getStyle(post.category);

  const renderedContent = () => {
    headingIndex.current = 0;
    const elements = [];
    const tableLines = [];
    let inTable = false;

    lines.forEach((line, i) => {
      const isTableLine = line.startsWith('|') && line.endsWith('|');
      if (isTableLine) {
        if (!inTable) inTable = true;
        tableLines.push(line);
      } else {
        if (inTable) {
          // Render accumulated table
          const tables = renderTable(tableLines);
          tables.forEach((t, ti) => { if (t) elements.push(<div key={`tbl-${i}-${ti}`}>{t}</div>); });
          tableLines.length = 0;
          inTable = false;
        }
        const el = renderLine(line, i, headingIndex);
        if (el) elements.push(el);
      }
    });
    if (tableLines.length) {
      const tables = renderTable(tableLines);
      tables.forEach((t, ti) => { if (t) elements.push(<div key={`tbl-end-${ti}`}>{t}</div>); });
    }
    return elements;
  };

  return (
    <div className="bg-white font-sans text-gray-900 antialiased overflow-x-hidden">
      <ReadingProgress />
      <SEO
        title={`${post.title} | Pingdesk Blog`}
        description={post.excerpt}
        canonical={`https://www.getpingdesk.com/blog/${post.slug}`}
        ogImage={blogCovers[post.slug]?.url || 'https://www.getpingdesk.com/logo512.png'}
        type="article"
        articleDate={post.date}
        articleCategory={post.category}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          image: blogCovers[post.slug]?.url || 'https://www.getpingdesk.com/logo512.png',
          datePublished: post.date,
          author: { '@type': 'Organization', name: 'Pingdesk', url: 'https://www.getpingdesk.com' },
          publisher: { '@type': 'Organization', name: 'Pingdesk', logo: { '@type': 'ImageObject', url: 'https://www.getpingdesk.com/logo512.png' } },
          mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.getpingdesk.com/blog/${post.slug}` },
        }}
      />
      <Navbar />
      <article className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-violet-600 font-medium mb-8 transition-colors group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to blog
          </Link>

          {/* Hero illustration */}
          <BlogHeroIllustration category={post.category} slug={post.slug} />

          <div className="flex items-center gap-3 mb-6">
            <span className={`text-xs font-bold ${style.text} ${style.bg} px-3 py-1 rounded-full`}>{post.category}</span>
            <span className="text-xs text-gray-400">{post.date}</span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" /></svg>
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          {/* Excerpt as lead paragraph */}
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-10 border-l-4 border-violet-300 pl-5">
            {post.excerpt}
          </p>

          {/* Table of Contents */}
          {toc.length > 2 && (
            <nav className="mb-12 bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" /></svg>
                In this article
              </h2>
              <ol className="space-y-2">
                {toc.map((item, i) => (
                  <li key={i}>
                    <a
                      href={`#${item.id}`}
                      className="text-sm text-gray-500 hover:text-violet-600 transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-5 h-5 bg-violet-100 text-violet-600 rounded text-[10px] font-bold flex items-center justify-center flex-shrink-0 group-hover:bg-violet-200 transition-colors">{i + 1}</span>
                      {item.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* Blog content */}
          <div className="prose prose-gray prose-lg max-w-none
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-5
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-5
            prose-li:text-gray-600 prose-li:my-0
            prose-strong:text-gray-900
            prose-code:bg-violet-50 prose-code:text-violet-700 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
          ">
            {renderedContent()}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-br from-gray-900 via-gray-900 to-violet-950 rounded-2xl px-8 py-12 text-center relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-4 left-8 w-24 h-24 bg-violet-500/10 rounded-full blur-2xl" />
              <div className="absolute bottom-4 right-8 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />
            </div>
            <div className="relative">
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
          </div>

          {/* Related Posts */}
          {(() => {
            const related = posts
              .filter(p => p.slug !== post.slug && (p.category === post.category || p.title.split(' ').some(w => w.length > 4 && post.title.toLowerCase().includes(w.toLowerCase()))))
              .slice(0, 3);
            if (related.length === 0) return null;
            return (
              <div className="mt-16">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {related.map(r => (
                    <Link key={r.slug} to={`/blog/${r.slug}`} className="group border border-gray-100 rounded-xl p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                      {blogCovers[r.slug] && (
                        <img src={blogCovers[r.slug].url} alt={blogCovers[r.slug].alt} loading="lazy" className="w-full h-28 object-cover rounded-lg mb-3" />
                      )}
                      <span className={`text-[10px] font-bold ${getStyle(r.category).text} ${getStyle(r.category).bg} px-2 py-0.5 rounded-full`}>{r.category}</span>
                      <h4 className="text-sm font-bold text-gray-900 mt-2 group-hover:text-violet-600 transition-colors leading-snug">{r.title}</h4>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })()}

          {/* Email capture */}
          <div className="mt-12">
            <EmailCapture variant="sidebar" />
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

const BlogIndex = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(posts.map(p => p.category))];
  const filtered = filter === 'All' ? posts : posts.filter(p => p.category === filter);

  return (
    <div className="bg-white font-sans text-gray-900 antialiased overflow-x-hidden">
      <SEO
        title="Slack Productivity Tips & Guides | Pingdesk Blog"
        description="Learn how to track requests, automate follow-ups, and keep your Slack workspace organized. Tips and guides for productive teams."
        canonical="https://www.getpingdesk.com/blog"
      />
      <Navbar />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-3">Blog</p>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-4">
              Slack productivity tips & guides
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              {posts.length} articles on request tracking, follow-ups, and keeping your Slack workspace organized.
            </p>
          </div>

          {/* Category filter pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/25'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {cat !== 'All' && <span className="mr-1.5">{getStyle(cat).icon}</span>}
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => {
              const s = getStyle(post.category);
              return (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="text-left bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group block"
                >
                  {/* Card cover image */}
                  <div className="relative h-40 overflow-hidden">
                    {blogCovers[post.slug] ? (
                      <img
                        src={blogCovers[post.slug].url}
                        alt={blogCovers[post.slug].alt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${s.gradient} flex items-center justify-center`}>
                        <span className="text-4xl opacity-80">{s.icon}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-[10px] font-bold ${s.text} ${s.bg} px-2.5 py-1 rounded-full uppercase tracking-wider`}>{post.category}</span>
                      <span className="text-[11px] text-gray-400">{post.readTime}</span>
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 group-hover:text-violet-600 transition-colors mb-3 leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="text-xs font-semibold text-violet-600 group-hover:text-violet-700 transition-colors inline-flex items-center gap-1">
                      Read article
                      <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export { posts, BlogPost, BlogIndex };
export default BlogIndex;
