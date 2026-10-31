/**
 * Central portfolio data — generated from Mahi's resume.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Mahi',
  displayName: 'Mahi',
  firstName: 'MAHI',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A MAHI ORIGINAL',
  role: 'Computer Science Engineering Student',
  tagline: ['Computer Science Engineering', 'Java', 'Web Development'],
  intro:
    'A Computer Science & Engineering student at SSGMCE Shegaon with strong problem-solving skills, building responsive web applications and exploring Java, Python, and frontend technologies.',
  location: 'Buldhana, Maharashtra',
  phone: '9876543210',
  email: 'mahi123@gmail.com',
  links: {
    linkedin: 'https://linkedin.com/in/mahi',
    github: 'https://github.com/mahi',
  },
  resumePdf: '/assets/Mahi_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Mahi',
  },
  interests: ['Software Development', 'Data Structures & Algorithms', 'Web Development'],
};

export const education = [
  {
    school: 'Shri Sant Gajanan Maharaj College of Engineering (SSGMCE)',
    place: 'Shegaon',
    degree: 'Bachelor of Engineering — Computer Science & Engineering',
    period: 'Expected Graduation: 2028',
    score: 'CGPA 6.93 / 10',
  },
];

export const experience = [
  {
    company: 'Technical & Problem Solving Journey',
    role: 'Computer Science Student',
    place: 'SSGMCE, Shegaon',
    period: '2024 – Present',
    points: [
      'Solved 200+ data structures and algorithmic problems across LeetCode and GeeksforGeeks.',
      'Developed responsive and user-friendly web applications using HTML5, CSS3, JavaScript, and Bootstrap.',
      'Participated in college-level coding competitions and technical problem-solving events.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio Website',
    year: '2025',
    genre: 'Frontend • Responsive Design • Web',
    logline: 'A personal portfolio website to showcase skills, projects, and achievements.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages'],
    build: [
      'Developed a personal portfolio website to showcase technical skills, featured projects, and achievements.',
      'Implemented a responsive and user-friendly design using HTML, CSS, and modern JavaScript.',
      'Hosted the website live using GitHub Pages with continuous version control.',
    ],
    features: [
      'Showcase of skills, projects, and achievements',
      'Responsive and user-friendly UI design',
      'Interactive components with vanilla JavaScript',
      'Live hosting on GitHub Pages',
    ],
    metrics: [
      { value: '100%', label: 'responsive design' },
      { value: 'GitHub Pages', label: 'hosted live' },
      { value: 'Fast', label: 'clean lightweight code' },
    ],
    github: 'https://github.com/mahi',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'shield',
  },
  {
    id: 'todo-list-app',
    title: 'To-Do List Web Application',
    year: '2025',
    genre: 'Web App • Productivity • JavaScript',
    logline: 'A simple, intuitive task management web application to organize and track daily tasks.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    build: [
      'Created a simple to-do list application to manage daily tasks with interactive UI elements.',
      'Implemented core features including task creation, dynamic deletion, and marking tasks as completed.',
      'Focused on clean user interface, fast interactions, and responsive design across screen sizes.',
    ],
    features: [
      'Add, delete, and mark tasks as completed',
      'Clean and minimalist UI design',
      'Interactive task status updates',
      'Fully responsive layout for mobile and desktop',
    ],
    metrics: [
      { value: 'Clean UI', label: 'intuitive design' },
      { value: 'Instant', label: 'task management' },
      { value: 'Zero', label: 'dependencies' },
    ],
    github: 'https://github.com/mahi',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'leetcode-gfg',
    title: '200+ Problems Solved',
    org: 'LeetCode • GeeksforGeeks',
    detail: 'Solved 200+ algorithmic and data structures problems across LeetCode and GeeksforGeeks.',
    laurel: 'Competitive Coding',
    link: 'https://github.com/mahi',
  },
  {
    id: 'coding-competitions',
    title: 'Coding Competitions',
    org: 'SSGMCE Shegaon',
    detail: 'Participated in college-level coding challenges and algorithmic competitions.',
    laurel: 'College Competitions',
  },
  {
    id: 'course-certifications',
    title: 'Technical Certifications',
    org: 'Online Technical Certifications',
    detail: 'Completed certifications in Java, Web Development, Python, and Data Structures & Algorithms.',
    laurel: 'Continuous Learning',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Certification', name: 'Java Programming', link: 'https://github.com/mahi' },
  { issuer: 'Certification', name: 'Web Development (HTML, CSS & JavaScript)', link: 'https://github.com/mahi' },
  { issuer: 'Certification', name: 'Python (Basics)', link: 'https://github.com/mahi' },
  { issuer: 'Certification', name: 'Data Structures and Algorithms (DSA)', link: 'https://github.com/mahi' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Java is primary',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Primary' },
      { name: 'Python (Basics)', mono: 'Py' },
      { name: 'C', mono: 'C' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'web',
    title: 'Web Technologies',
    subtitle: 'Interfaces & Frontend',
    skills: [
      { name: 'HTML5', mono: 'H5' },
      { name: 'CSS3', mono: 'C3' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'Bootstrap', mono: 'Bs' },
      { name: 'React (Basics)', mono: 'Re' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Technologies',
    subtitle: 'Development workflow',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'Visual Studio Code', mono: 'Vs' },
      { name: 'MySQL', mono: 'My' },
      { name: 'Postman', mono: 'Pm' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'Core Fundamentals',
    subtitle: 'Problem solving',
    skills: [
      { name: 'Data Structures & Algorithms', mono: 'Ds' },
      { name: 'Object-Oriented Programming', mono: 'Oo' },
      { name: 'Database Management', mono: 'Db' },
    ],
  },
  {
    id: 'spoken-languages',
    title: 'Languages',
    subtitle: 'Communication',
    skills: [
      { name: 'English', mono: 'En' },
      { name: 'Hindi', mono: 'Hi' },
      { name: 'Marathi', mono: 'Mr' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: ['Java Programming Certification', 'Problem solving on LeetCode & GFG'],
  'Python (Basics)': ['Python (Basics) Certification'],
  C: ['Core C Programming coursework'],
  SQL: ['MySQL Relational Database'],
  HTML5: ['Personal Portfolio Website', 'To-Do List Web Application', 'Web Development Certification'],
  CSS3: ['Personal Portfolio Website', 'To-Do List Web Application', 'Web Development Certification'],
  JavaScript: ['Personal Portfolio Website', 'To-Do List Web Application', 'Web Development Certification'],
  Bootstrap: ['Responsive Web Development'],
  'React (Basics)': ['Frontend Development Exploration'],
  Git: ['Version control on GitHub'],
  GitHub: ['github.com/mahi', 'GitHub Pages Deployment'],
  'Visual Studio Code': ['Primary IDE for development'],
  MySQL: ['Database design & queries'],
  Postman: ['API testing & exploration'],
  'Data Structures & Algorithms': ['200+ problems on LeetCode & GeeksforGeeks', 'DSA Certification'],
  'Object-Oriented Programming': ['Java Programming Certification'],
  'Database Management': ['MySQL Database'],
  English: ['Professional communication'],
  Hindi: ['Verbal communication'],
  Marathi: ['Native language'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2024 – Present',
    synopsis: 'Computer Science Engineering at Shri Sant Gajanan Maharaj College of Engineering (SSGMCE), Shegaon.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The CS Engineer',
        description: 'Bachelor of Engineering in Computer Science & Engineering at SSGMCE, Shegaon (CGPA 6.93).',
        tags: ['B.E.', 'Computer Science', 'SSGMCE'],
        runtime: 'Graduating 2028',
        palette: violet,
      },
      {
        code: 'S01 E02',
        title: 'The Problem Solver',
        description: 'Solved 200+ algorithmic and data structure problems on LeetCode and GeeksforGeeks.',
        tags: ['DSA', 'LeetCode', 'GeeksforGeeks'],
        runtime: '200+ problems',
        palette: jade,
      },
    ],
  },
  {
    number: 2,
    title: 'Building Projects',
    period: '2025',
    synopsis: 'Web development with HTML, CSS, JavaScript, and responsive design.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Portfolio Showcase',
        description: 'Personal Portfolio Website built with HTML, CSS, and JavaScript hosted on GitHub Pages.',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages'],
        runtime: '2025',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'Task Management',
        description: 'To-Do List Web Application with task creation, deletion, and status toggles.',
        tags: ['JavaScript', 'Web App', 'CRUD'],
        runtime: '2025',
        palette: amber,
      },
    ],
  },
  {
    number: 3,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Deepening skills in Software Development, React, and Full-Stack Engineering.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Next Arc',
        description: 'Exploring full-stack applications, advanced DSA, and scalable software systems.',
        tags: ['Full-Stack', 'React', 'Software Engineering'],
        runtime: 'In progress',
        palette: crimson,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary language', title: 'Java', detail: 'Core programming language & certified', palette: amber },
  { label: 'Degree', title: 'B.E. Computer Science', detail: 'SSGMCE Shegaon • Expected 2028', palette: violet },
  { label: 'Competitive coding', title: '200+ Problems', detail: 'Solved on LeetCode & GeeksforGeeks', palette: crimson },
  { label: 'Featured project', title: 'Portfolio Website', detail: 'HTML, CSS, JS • Hosted on GitHub Pages', palette: ocean },
  { label: 'Productivity project', title: 'To-Do List App', detail: 'Task management with clean UI', palette: jade },
  { label: 'Certification', title: 'DSA Certification', detail: 'Data Structures and Algorithms', palette: crimson },
  { label: 'Web stack', title: 'JavaScript & React', detail: 'Responsive web technologies', palette: amber },
  { label: 'Database', title: 'MySQL & SQL', detail: 'Structured relational data', palette: jade },
  { label: 'Version control', title: 'Git & GitHub', detail: 'github.com/mahi', palette: ocean },
  { label: 'Location', title: 'Buldhana, MH', detail: 'Ready for software opportunities', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.E. Computer Science',
    lines: ['Shri Sant Gajanan Maharaj College of Engineering (SSGMCE)', 'Expected Graduation: 2028'],
    chips: ['CGPA 6.93'],
  },
  {
    kicker: 'Skills',
    title: 'Java & Web Stack',
    lines: ['Java, Python (Basics), C, SQL', 'HTML5, CSS3, JavaScript, Bootstrap, React (Basics)', 'Git, GitHub, VS Code, MySQL, Postman'],
    chips: ['Java', 'JavaScript', 'HTML/CSS', 'MySQL', 'Git'],
  },
  {
    kicker: 'Projects',
    title: 'Web Projects',
    lines: ['Personal Portfolio Website — GitHub Pages', 'To-Do List Web Application — Responsive CRUD'],
  },
  {
    kicker: 'Achievements',
    title: 'Problem Solving',
    lines: ['200+ problems solved on LeetCode & GeeksforGeeks', 'College-level coding competitions participant'],
  },
  {
    kicker: 'Certified',
    title: 'Core Certifications',
    lines: ['Java Programming · Web Development · Python · DSA'],
  },
];

export type ProfileId = 'mahi' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'mahi',
    name: 'Mahi',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & journey', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2025`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
