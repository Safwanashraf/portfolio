export interface ChapterStory {
  chapterNumber: string;
  title: string;
  excerpt: string;
  paragraphs: string[];
  imagePlaceholder?: string;
  imageCaption?: string;
}

export interface FieldNoteItem {
  id: string;
  number: string;
  quote: string;
  context: string;
  experienceSource: string;
  year: string;
}

export const fullAboutChapters: ChapterStory[] = [
  {
    chapterNumber: '01',
    title: 'The First Team & Human Dynamics',
    excerpt: 'Stepping into leadership at 19 with a 75-member organization.',
    imagePlaceholder: '/images/journey/2021-team.jpg',
    imageCaption: '2021 / FIRST TEAM — Leading 75 people at age 19. My first raw encounter with team dynamics.',
    paragraphs: [
      'At 19 years old, while most of my peers were navigating conventional classroom routines, I found myself leading a 75-member multilevel marketing team. Within that larger network, 15 to 20 members formed the active daily core.',
      'It was my first raw encounter with team dynamics. I quickly realized that leading people requires far more than enthusiasm—it demands setting clear expectations, resolving conflicts, and supporting individuals through their personal slumps.',
      'Through this experience, I became an intense observer of human behavior: how individuals react under pressure, why people hesitate to take initiative, and how clarity of direction transforms anxiety into execution.'
    ]
  },
  {
    chapterNumber: '02',
    title: 'Sales, Counselling & First Revenue Milestone',
    excerpt: 'Stepping into direct business development while learning MERN stack fundamentals.',
    imagePlaceholder: '/images/journey/brototype.jpg',
    imageCaption: '2022 / BROTOTYPE — Combining full-stack MERN learning with direct business development.',
    paragraphs: [
      'Transitioning into sales was a deliberate choice to test myself in high-stakes environments. I joined Brototype as a Business Development Executive while simultaneously diving into MERN stack fundamentals (MongoDB, Express, React, Node.js).',
      'In my very first month as a BDE, I generated over ₹1 Lakh in revenue. But more than the financial metric, what mattered was the realization that sales is fundamentally about problem-solving.',
      'I guided prospective software students, engaged with anxious parents, addressed siblings’ concerns, and counselled teachers. When you help someone see a clear path to their future, closing deals becomes a natural byproduct.'
    ]
  },
  {
    chapterNumber: '03',
    title: '1,500 Conversations & Real-World Friction',
    excerpt: 'Immersion in high-volume customer interactions and human life stories.',
    imagePlaceholder: '/images/journey/calls.jpg',
    imageCaption: '2022-2023 / 1,500 CALLS — Building sales units and hearing over 500 unvarnished human life stories.',
    paragraphs: [
      'During this period of intense work, a pivotal conversation with my father reshaped my perspective. He asked me to reflect not just on immediate sales wins, but on what enduring craft I was building for the long term.',
      'Later, joining a lifestyle company for ~2 months, I helped build a sales team and conducted over 1,500 direct customer conversations.',
      'Across those interactions, I listened to over 500 people share their personal life stories, financial struggles, career regrets, and family ambitions. It taught me profound humility: software and products aren\'t abstract code—they are tools designed to ease real human burdens.'
    ]
  },
  {
    chapterNumber: '04',
    title: 'The Alappuzha Venture & Knowing When to Stop',
    excerpt: 'Relocating to Alappuzha with a cross-functional startup team.',
    imagePlaceholder: '/images/journey/entrepreneurship.jpg',
    imageCaption: '2023 / ALAPPUZHA — On-ground operational testing and evaluating unit economics with a cross-functional team.',
    paragraphs: [
      'Hungry for real venture creation, I assembled a small team of software developers and business operations peers and relocated to Alappuzha.',
      'For 3 to 4 months, we worked tirelessly: building operational workflows, testing customer demand, and analyzing unit economics on the ground.',
      'After rigorous evaluation of timeline risks and capital requirements, we realized the venture did not hold strong risk-to-reward margins. We made the conscious choice to stop. Learning when to pause a project without personal ego was one of the most mature business lessons of my life.'
    ]
  },
  {
    chapterNumber: '05',
    title: 'Building Beyond Digital',
    excerpt: 'Supervising house construction, trading risk management, and BBA studies.',
    imagePlaceholder: '/images/journey/construction.jpg',
    imageCaption: '2023-2024 / PHYSICAL SITE SUPERVISION — Managing full site operations and vendor contracts for family home construction.',
    paragraphs: [
      'Outside digital spaces, I managed the physical construction of our family home—handling vendor cost comparisons, material procurement, contractor scheduling, and daily site supervision.',
      'Simultaneously, I explored financial market trading to understand risk management under uncertainty and pursued my BBA through IGNOU.',
      'Managing physical construction proved that building a house requires the exact same structural discipline as architecting software: foundations must be solid before you build upward.'
    ]
  },
  {
    chapterNumber: '06',
    title: 'Full-Stack Engineering Mastery',
    excerpt: 'Committing 100% to software engineering & MERN stack craft.',
    imagePlaceholder: '/images/journey/engineering.jpg',
    imageCaption: 'PRESENT / SOFTWARE ENGINEERING — Full-time focus on React, Node.js, Express, and MongoDB web architectures.',
    paragraphs: [
      'All previous explorations brought singular clarity: software engineering is where my problem-solving ability, technical curiosity, and human understanding converge.',
      'I am fully dedicated to Software Engineering as a MERN Stack Developer, mastering React, Node.js, Express, MongoDB, and modern system design.',
      'My long-term trajectory is clear: build robust software as a full-stack developer, step into technical team leadership, and eventually assume CTO-level executive responsibility. One step at a time, thousands to go.'
    ]
  }
];

export const fieldNotesData: FieldNoteItem[] = [
  {
    id: 'fn-1',
    number: '01',
    quote: 'People don\'t follow titles. They follow clarity, consistency, and genuine care.',
    context: 'Learned while leading a 75-member team at age 19. Managing team dynamics required daily communication and setting clear benchmarks rather than asserting authority.',
    experienceSource: '2021 Team Leadership Experience',
    year: '2021'
  },
  {
    id: 'fn-2',
    number: '02',
    quote: 'Sales taught me that understanding someone\'s friction is more useful than convincing them.',
    context: 'Derived from counselling students & families as a BDE at Brototype and engaging in over 1,500 direct customer calls.',
    experienceSource: 'Brototype & Lifestyle Sales Experience',
    year: '2022'
  },
  {
    id: 'fn-3',
    number: '03',
    quote: 'Knowing when to stop a project without ego is as important as knowing when to start.',
    context: 'Discovered during the Alappuzha startup experiment. After 3-4 months of testing unit economics, pausing the venture saved capital and provided crucial market data.',
    experienceSource: 'Alappuzha Entrepreneurial Experiment',
    year: '2023'
  },
  {
    id: 'fn-4',
    number: '04',
    quote: 'Physical site supervision taught me that software architecture shares the same rule as concrete: foundations must be solid before building up.',
    context: 'Gained while supervising the physical construction of our family home—managing contractors, vendor quotes, and structural deadlines.',
    experienceSource: 'Home Construction Ownership',
    year: '2023 - 2024'
  },
  {
    id: 'fn-5',
    number: '05',
    quote: 'Writing code isn\'t just about syntax—it is engineering solutions for real human problems.',
    context: 'Channelled into my current work as a MERN Stack Developer, building full-stack applications with deep user context.',
    experienceSource: 'MERN Stack Engineering Path',
    year: 'Present'
  }
];
