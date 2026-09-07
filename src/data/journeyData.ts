export interface JourneyMilestone {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  category: 'LEADERSHIP' | 'SALES' | 'BUSINESS' | 'EXPLORATION' | 'SOFTWARE';
  summary: string;
  story: string[];
  keyTakeaways: string[];
  metrics?: string;
  image: string;
  caption: string;
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: 'mlm-leadership-2021',
    year: '2021',
    title: 'Leading a 75-Member Organization',
    subtitle: 'Multilevel Marketing Leadership',
    category: 'LEADERSHIP',
    image: '/images/journey/2021-team.jpg',
    caption: '2021 / FIRST TEAM — 75 members, 15-20 active core. First trial in human guidance and responsibility.',
    summary: 'At 19, led a 75-person team with 15–20 core active members. First immersive trial in human guidance, motivation, and responsibility.',
    story: [
      'Stepping into team leadership at a young age forced an immediate realization: people do not follow titles, they follow clarity, consistency, and genuine care.',
      'Managing a 75-member network required daily communication, setting performance benchmarks, resolving interpersonal conflicts, and keeping 15–20 core active members aligned toward shared goals.',
      'This experience demystified team dynamics early on and taught me how to communicate expectations clearly while providing hands-on support.'
    ],
    keyTakeaways: [
      'Leadership is about unlocking momentum in others, not demanding authority.',
      'Consistent active engagement matters far more than total team size.',
      'Empathy and clear direction are non-negotiable for long-term retention.'
    ],
    metrics: '75 Team Members / 15-20 Active Core'
  },
  {
    id: 'brototype-bde',
    year: '2022',
    title: 'Brototype & First Revenue Milestone',
    subtitle: 'MERN Stack Learning & Business Development Executive',
    category: 'BUSINESS',
    image: '/images/journey/brototype.jpg',
    caption: '2022 / BROTOTYPE — ₹1L+ generated in Month 1 while mastering MERN stack fundamentals.',
    summary: 'Spent ~6 months learning MERN stack fundamentals while driving business development. Generated >₹1 Lakh in the first month as BDE.',
    story: [
      'Joined Brototype to immerse myself in the MERN stack (MongoDB, Express, React, Node.js) while simultaneously stepping into a Business Development Executive role.',
      'In my very first month, generated over ₹1 Lakh in revenue by connecting with prospective students, understanding their career bottlenecks, and guiding them toward IT software engineering pathways.',
      'Directly counselled students, parents, siblings, and teachers. Taught fundamental programming concepts to beginners, bridging technical potential with real career decisions.'
    ],
    keyTakeaways: [
      'Technical concepts become infinitely more powerful when explained simply.',
      'Empathy in sales builds immediate trust; people want genuine career clarity, not a sales pitch.',
      'Bridging software skills with business needs creates massive leverage.'
    ],
    metrics: '>₹1,00,000 Revenue in Month 1'
  },
  {
    id: 'lifestyle-sales-1500',
    year: '2022 - 2023',
    title: '1,500 Customer Conversations',
    subtitle: 'Lifestyle Company & Sales Team Building',
    category: 'SALES',
    image: '/images/journey/calls.jpg',
    caption: '2022-2023 / 1,500 CALLS — Hearing 500+ unique life stories across high-volume customer interactions.',
    summary: 'Spent ~2 months building a sales engine and conducting over 1,500 direct customer conversations, hearing hundreds of human life stories.',
    story: [
      'Helped build and train a dedicated sales unit for a lifestyle company while taking on high-volume customer interactions directly.',
      'Engaged in over 1,500 direct conversations. Beyond pitch closing, I actively listened to customers share their personal challenges, financial goals, career regrets, and family hopes.',
      'Encountering over 500 unique life perspectives reshaped how I think about product-market fit: software and products exist to serve human emotions and real-world friction.'
    ],
    keyTakeaways: [
      'Every customer interaction is an unfiltered user research session.',
      'Listening deeply yields insights that data dashboards miss.',
      'Closing a sale is simply helping someone cross a decision boundary safely.'
    ],
    metrics: '1,500+ Conversations / 500+ Unique Stories'
  },
  {
    id: 'alappuzha-experiment',
    year: '2023',
    title: 'The Alappuzha Entrepreneurial Venture',
    subtitle: 'Cross-Functional Startup Exploration',
    category: 'EXPLORATION',
    image: '/images/journey/entrepreneurship.jpg',
    caption: '2023 / ALAPPUZHA — 3-4 months on-ground business testing with software and operations peers.',
    summary: 'Co-founded a cross-functional team with software and operations peers, relocated to Alappuzha, and explored a new business model for 3–4 months.',
    story: [
      'Assembled a compact team consisting of software developers and business operations specialists. Relocated to Alappuzha to validate an on-ground business hypothesis.',
      'Spent 3 to 4 months working side-by-side: analyzing market demand, building operational workflows, testing customer feedback, and evaluating financial projections.',
      'After rigorous evaluation of unit economics, timeline risks, and market dynamics, we made the conscious choice to pause the business rather than burn capital on low-conviction odds.'
    ],
    keyTakeaways: [
      'Knowing when to stop is as crucial as knowing when to start.',
      'Decisive execution beats passive deliberation every time.',
      'Failure to scale a concept is not a personal failure—it is valuable market data.'
    ],
    metrics: '3-4 Months Intensive Execution'
  },
  {
    id: 'real-world-engineering-foundations',
    year: '2023 - 2024',
    title: 'Real-World Operations & Independent Learning',
    subtitle: 'Construction Supervision, Trading & IGNOU BBA',
    category: 'EXPLORATION',
    image: '/images/journey/construction.jpg',
    caption: '2023-2024 / PHYSICAL SITE SUPERVISION — Site ownership, material quotes, and structural discipline.',
    summary: 'Managed the full physical construction of the family home, traded financial markets, assisted friends’ ventures, and pursued a BBA via IGNOU.',
    story: [
      'Outside digital spaces, took complete ownership of managing the construction of our family home: material vendor comparison, price negotiations, site supervision, and workflow coordination between contractors.',
      'Engaged in financial trading to understand market psychology, risk management, and capital allocation under uncertainty.',
      'Continued formal academic growth via BBA through IGNOU while supporting friends’ local business operations, honing a grounded, practical view of commerce.'
    ],
    keyTakeaways: [
      'Physical construction shares exact parallels with software architecture: foundations must be solid before building up.',
      'Risk management in markets translates directly to software decision-making.',
      'Real ownership means taking responsibility when unexpected budget or site issues arise.'
    ],
    metrics: 'Full Site Supervision & Budget Control'
  },
  {
    id: 'software-engineering-focus',
    year: 'Present',
    title: 'Dedicated Software Engineering Journey',
    subtitle: 'Full-Stack MERN Development & Technical Ambition',
    category: 'SOFTWARE',
    image: '/images/journey/engineering.jpg',
    caption: 'PRESENT / MERN STACK MASTERY — Channeling all past leadership and business lessons into software engineering.',
    summary: 'Channelled all past lessons in leadership, sales, and business strategy into full-time MERN stack development with a long-term goal of technical leadership.',
    story: [
      'All previous explorations brought singular clarity: software engineering is where my problem-solving ability, technical curiosity, and human understanding converge.',
      'Now focused on building robust full-stack applications with React, Node.js, Express, and MongoDB, while mastering system design and API architecture.',
      'Positioned to grow from software engineer into technical lead and eventually CTO-level executive responsibility.'
    ],
    keyTakeaways: [
      'I have sold technology before building it; now I am building technology with deep user context.',
      'Software engineering is not just writing syntax—it is engineering solutions for human problems.',
      'The long path was not wandering; it was building an unbreakable foundation.'
    ],
    metrics: 'Full-Stack MERN Mastery'
  }
];
