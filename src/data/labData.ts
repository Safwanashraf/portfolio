export interface QAItem {
  id: string;
  question: string;
  answer: string;
  category: 'CAREER' | 'PHILOSOPHY' | 'BUSINESS' | 'ENGINEERING';
  image?: string;
  imageCaption?: string;
}

export interface DecisionStep {
  stepNumber: string;
  title: string;
  description: string;
  keyQuestion: string;
}

export interface WrongTurnItem {
  id: string;
  experience: string;
  whatIThought: string;
  whatIActuallyLearned: string;
}

export const terminalCommands: Record<string, string> = {
  whoami: "Safwan — MERN Stack Developer / Software Engineer in the making.\nFormer sales closer, team leader (75 members), and business development executive.\nNow focused on building resilient full-stack web applications.",
  skills: "PRIMARY: React | Node.js | Express | MongoDB | JavaScript | HTML5 | CSS3 | Git | REST APIs\nSECONDARY: Sales Closing | Business Strategy | Team Leadership | Conflict Resolution | Active Listening",
  philosophy: "\"I took the long way to find what I want to build. Now I'm ready to build.\"\nPrinciple: Never climb a ladder by hurting someone else. Understand before deciding who is right or wrong.",
  quote: "\"The journey of a thousand miles begins with a single step.\" — Laozi",
  contact: "Email: safwan.dev@example.com | GitHub: github.com/Safwanashraf | LinkedIn: linkedin.com/in/safwan-ashraf",
  help: "Available commands:\n  whoami      - Display identity summary\n  skills      - Show technical & interpersonal skillset\n  philosophy  - Operating principles and philosophy\n  quote       - Favorite quote\n  contact     - Direct contact channels\n  clear       - Clear terminal screen"
};

export const askMeQuestions: QAItem[] = [
  {
    id: 'why-software-engineering',
    question: 'Why software engineering?',
    category: 'CAREER',
    answer: 'After exploring leadership, sales, entrepreneurship, and trading, I realized that software is the most powerful leverage tool in existence. In sales, you solve a problem for one customer at a time. In software, you engineer a solution once and deploy it to solve problems for thousands simultaneously.'
  },
  {
    id: 'why-not-conventional-path',
    question: 'Why didn\'t you follow the conventional college path?',
    category: 'CAREER',
    answer: 'I followed questions instead of a predetermined script. I wanted real-world immersion—leading people, handling customer objections, taking financial responsibility, and observing real human behavior firsthand. That non-linear exploration gave me deep clarity, maturity, and conviction when I chose software engineering.',
    image: '/images/about/safwan-portrait.jpg',
    imageCaption: 'HUMAN ARCHIVE // JOURNEY — Independent exploration and real-world immersion.'
  },
  {
    id: 'strongest-skill',
    question: 'What is your strongest skill?',
    category: 'PHILOSOPHY',
    answer: 'Systematic problem understanding. Whether analyzing a broken React state tree, a sales objection, or a project breakdown, I don\'t rush to react. I break the system down: Understand → Cause → Perspectives → Options → Risk/Reward → Decision → Refine.'
  },
  {
    id: 'what-sales-taught',
    question: 'What did sales teach you about engineering?',
    category: 'BUSINESS',
    answer: 'Sales taught me that users don\'t care about your tech stack; they care about their friction being solved quickly and intuitively. Clean APIs and fast load times are direct drivers of user trust and commercial retention.',
    image: '/images/journey/brototype.jpg',
    imageCaption: 'HUMAN ARCHIVE // SALES — Brototype BDE & MERN learning experience.'
  },
  {
    id: 'what-1500-conversations-taught',
    question: 'What did 1,500 conversations teach you?',
    category: 'PHILOSOPHY',
    answer: 'People have diverse motivations, fears, and hopes. Hearing hundreds of personal stories taught me deep empathy, active listening, and the importance of never making assumptions about what a user or teammate needs.',
    image: '/images/journey/calls.jpg',
    imageCaption: 'HUMAN ARCHIVE // 1,500 CALLS — Customer conversations and life perspectives.'
  },
  {
    id: 'biggest-lesson',
    question: 'What is your biggest personal lesson?',
    category: 'PHILOSOPHY',
    answer: 'Never climb a ladder by hurting someone else, and never be afraid to stop a direction that lacks conviction. Pausing an entrepreneurial venture in Alappuzha after evaluating realistic risks taught me that stopping is sometimes the most intelligent strategic choice.',
    image: '/images/journey/entrepreneurship.jpg',
    imageCaption: 'HUMAN ARCHIVE // ALAPPUZHA — Startup experiment & decisive pause.'
  },
  {
    id: 'why-cto-vision',
    question: 'Why do you want to become a CTO in the long term?',
    category: 'ENGINEERING',
    answer: 'Because a CTO sits precisely at the intersection of technical excellence, human leadership, and business strategy. My trajectory combines deep MERN engineering capability with proven team leadership and commercial acumen.'
  },
  {
    id: 'non-negotiable',
    question: 'What is something you refuse to compromise on?',
    category: 'PHILOSOPHY',
    answer: 'Integrity and honest execution. I refuse to fake statistics, over-promise capabilities, or cut ethical corners for short-term gain. Confidence should stem from real evidence and work.'
  }
];

export const decisionFrameworkSteps: DecisionStep[] = [
  {
    stepNumber: '01',
    title: 'PROBLEM',
    description: 'Clearly define the symptom or friction being experienced.',
    keyQuestion: 'What exact breakdown or friction is occurring?'
  },
  {
    stepNumber: '02',
    title: 'UNDERSTAND',
    description: 'Gather objective context without rushing to assign blame or quick fixes.',
    keyQuestion: 'What are the underlying facts and user realities?'
  },
  {
    stepNumber: '03',
    title: 'CAUSE',
    description: 'Trace the symptom back to root structural or technical causes.',
    keyQuestion: 'Why did this failure actually occur?'
  },
  {
    stepNumber: '04',
    title: 'PERSPECTIVES',
    description: 'Evaluate viewpoints from engineering, user, and business stakeholders.',
    keyQuestion: 'How does each stakeholder experience this issue?'
  },
  {
    stepNumber: '05',
    title: 'OPTIONS',
    description: 'Brainstorm viable solution paths ranging from quick patches to root rewrites.',
    keyQuestion: 'What are the distinct ways to resolve this?'
  },
  {
    stepNumber: '06',
    title: 'RISK / REWARD',
    description: 'Assess trade-offs, implementation timelines, and unexpected edge cases.',
    keyQuestion: 'What could go wrong with each option?'
  },
  {
    stepNumber: '07',
    title: 'DECISION',
    description: 'Commit decisively to the optimal balance of speed, security, and quality.',
    keyQuestion: 'Which path delivers the highest net value?'
  },
  {
    stepNumber: '08',
    title: 'REFINE',
    description: 'Implement, monitor telemetry, gather feedback, and iterate on learnings.',
    keyQuestion: 'What did the result teach us for future iterations?'
  }
];

export const wrongTurnsMatrix: WrongTurnItem[] = [
  {
    id: 'trading',
    experience: 'Financial Trading & Market Analysis',
    whatIThought: 'I thought I’d master fast financial freedom and algorithmic market trends.',
    whatIActuallyLearned: 'I learned strict emotional discipline, risk-to-reward calculation, and how quickly assumption-based thinking leads to severe drawdown.'
  },
  {
    id: 'direct-sales',
    experience: 'High-Volume Direct Sales & Closing',
    whatIThought: 'I thought sales was about persuasive speaking and clever techniques.',
    whatIActuallyLearned: 'I learned sales is 80% listening, asking sharp questions, understanding human psychology, and removing friction.'
  },
  {
    id: 'alappuzha-startup',
    experience: 'Alappuzha Startup Venture',
    whatIThought: 'I thought raw enthusiasm and hard work alone could override market timeline risks.',
    whatIActuallyLearned: 'I learned to evaluate unit economics brutally early and realized that pivoting or pausing is high-level strategic intelligence.'
  },
  {
    id: 'home-construction',
    experience: 'Supervising Family Home Construction',
    whatIThought: 'I thought it would be a simple side-coordination project.',
    whatIActuallyLearned: 'I learned site coordination, vendor negotiation, supply chain delays, structural dependencies, and managing unexpected cost overruns.'
  }
];
