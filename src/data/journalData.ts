export interface JournalArticle {
  slug: string;
  title: string;
  category: 'BUILD' | 'THINK' | 'LEARN' | 'FAIL' | 'OBSERVE' | 'BUSINESS' | 'CAREER';
  date: string;
  readTime: string;
  description: string;
  content: string[];
  takeaway: string;
  image: string;
  imageCaption: string;
}

export const journalArticles: JournalArticle[] = [
  {
    slug: 'what-1500-conversations-taught-me',
    title: 'What 1,500 Conversations Taught Me About People and Software',
    category: 'OBSERVE',
    date: 'Aug 2024',
    readTime: '4 min read',
    description: 'When you sit across 1,500 people listening to their financial regrets and career anxieties, you stop viewing users as abstract analytics data.',
    image: '/images/journey/calls.jpg',
    imageCaption: '2022-2023 / 1,500 CALLS — High-volume customer interaction environment.',
    takeaway: 'Behind every bounce rate or click drop-off is a real human being experiencing confusion or friction. Software engineering is applied human empathy.',
    content: [
      'In 2022, I spent two intense months building a sales team for a lifestyle company while taking on high-volume customer calls directly. Over 1,500 conversations later, my worldview on human decision-making had permanently shifted.',
      'Most software dashboards treat users as conversion percentages or click metrics. But behind every bounce rate is a human being who felt confused, overwhelmed, or distrustful of an interface.',
      'When I code today, I ask myself: "Does this workflow respect the user\'s time? Is this error message helpful or degrading?" Software engineering is applied human empathy.'
    ]
  },
  {
    slug: 'why-i-stopped-straight-path',
    title: 'Why I Stopped Trying to Follow a Straight Path',
    category: 'CAREER',
    date: 'Jul 2024',
    readTime: '5 min read',
    description: 'The conventional script promises safety. But exploring leadership, sales, and business gave me something far more valuable: clarity.',
    image: '/images/about/safwan-portrait.jpg',
    imageCaption: 'SAFWAN ASHRAF — Intentional discovery leading to full-stack software engineering.',
    takeaway: 'Non-linear exploration isn\'t aimless wandering—it is the process of acquiring deep clarity before committing to a lifelong craft.',
    content: [
      'Society loves linear narratives: high school → university degree → entry-level job → middle manager. But when you follow a script blindly, you risk mastering a direction you never actually wanted.',
      'By stepping into sales, leading a 75-member team, managing physical construction sites, and co-founding an exploratory startup in Alappuzha, I tested different fields in real-world environments.',
      'That exploration was not a lack of direction—it was intentional discovery. It brought me to software engineering with 100% conviction.'
    ]
  },
  {
    slug: 'what-sales-taught-me-about-software',
    title: 'What Sales Taught Me About Software Products',
    category: 'BUSINESS',
    date: 'Jun 2024',
    readTime: '4 min read',
    description: 'I’ve sold technology before I’ve built it. Here is why sales experience makes you a vastly superior engineer.',
    image: '/images/journey/brototype.jpg',
    imageCaption: '2022 / BROTOTYPE — Business development executive experience.',
    takeaway: 'If your product takes 10 clicks to explain, you lose the deal. If your UI requires a manual, you lose the user.',
    content: [
      'In sales, if your product takes 10 clicks to explain, you lose the deal. In software engineering, if your user interface requires a manual, you lose the user.',
      'Selling taught me to obsess over friction reduction. When building MERN stack apps today, I apply the same rule: minimize unnecessary state transitions, optimize page render speeds, and craft instant feedback loops.'
    ]
  },
  {
    slug: 'solving-problems-vs-winning-arguments',
    title: 'The Difference Between Solving a Problem and Winning an Argument',
    category: 'THINK',
    date: 'May 2024',
    readTime: '3 min read',
    description: 'In team management and code review, proving you are right is often the fastest way to lose momentum.',
    image: '/images/journey/2021-team.jpg',
    imageCaption: '2021 / FIRST TEAM — 75-member team leadership dynamics.',
    takeaway: 'The best technical solution is not the one written by the loudest voice—it is the one that solves the underlying cause cleanly while keeping team trust intact.',
    content: [
      'Early in team leadership, it is tempting to focus on winning arguments or proving your technical approach superior. But winning an argument while destroying team morale is a net loss.',
      'In software engineering, the best solution is not the one written by the loudest voice—it is the one that solves the underlying cause cleanly while keeping team trust intact.'
    ]
  },
  {
    slug: 'why-i-killed-a-business-idea',
    title: 'Why I Killed a Business Idea After 4 Months in Alappuzha',
    category: 'FAIL',
    date: 'Apr 2024',
    readTime: '5 min read',
    description: 'We relocated to Alappuzha, built a team, and worked 14-hour days. Here is why choosing to pause was our smartest decision.',
    image: '/images/journey/entrepreneurship.jpg',
    imageCaption: '2023 / ALAPPUZHA — Cross-functional team startup experiment.',
    takeaway: 'Sunk cost fallacy destroys capital and momentum. Learning to pause a project without ego is high-level strategic intelligence.',
    content: [
      'Sunk cost fallacy is a silent killer in business and engineering. When you invest time and money into a project, admitting it lacks long-term viability feels uncomfortable.',
      'In Alappuzha, after evaluating risk vs. reward, unit margins, and growth timelines, our team realized the return did not justify the capital risk. Pausing allowed us to redirect our energy toward higher-leverage technical pursuits.'
    ]
  },
  {
    slug: 'leading-75-people-at-19',
    title: 'What I Learned From Leading 75 People at Age 19',
    category: 'BUILD',
    date: 'Mar 2024',
    readTime: '4 min read',
    description: 'Leadership at 19 is a trial by fire. Title authority means nothing; clarity and consistency mean everything.',
    image: '/images/journey/2021-team.jpg',
    imageCaption: '2021 / LEADERSHIP — Nurturing the 15-20 active core team members.',
    takeaway: 'People do not follow titles. They follow clarity, consistency, and genuine support.',
    content: [
      'When you are 19 leading team members older than yourself, artificial authority crumbles instantly. The only currency that works is radical transparency, active listening, and leading by personal example.',
      'Out of 75 total members, 15 to 20 formed the active core. Focusing on nurturing and supporting that core taught me how high-performing engineering teams function.'
    ]
  },
  {
    slug: 'why-i-chose-software-engineering',
    title: 'Why I Chose Software Engineering as My Lifelong Craft',
    category: 'CAREER',
    date: 'Feb 2024',
    readTime: '4 min read',
    description: 'After all the wandering, building software is the one discipline I keep coming back to with endless curiosity.',
    image: '/images/journey/engineering.jpg',
    imageCaption: 'PRESENT / MERN STACK ENGINEERING — Full-stack web application development.',
    takeaway: 'Software offers an extraordinary blend of creative creation, logical rigor, and real-world leverage. Building solutions once to serve thousands.',
    content: [
      'Building software offers an extraordinary blend of creative creation, logical rigor, and real-world leverage. You can conceive an architecture in the morning and have users interacting with it by evening.',
      'My long-term ambition is clear: master full-stack software development, step into technical team leadership, and eventually drive CTO-level product vision.'
    ]
  }
];
