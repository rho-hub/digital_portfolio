/**
 * All site content lives here so copy/links can be edited in one place.
 * Swap the placeholder social URLs below for the real ones.
 */

export const CONTACT = {
  email: 'jeronorhodah@gmail.com',
  resume: '/uploads/Kipng\'eno Rhodah Jerono.pdf',
}

export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/rho-hub' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rhodahjerono/' },
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'Instagram', href: 'https://www.instagram.com/jerono.__?igsh=cHdmNTN4cWFoZ2J2' },
]

export const SKILLS = [
  {
    title: 'Building',
    accentSuffix: 'for the web & mobile',
    tags: ['React', 'Next.js', 'TypeScript', 'Kotlin', 'Flutter', 'Tailwind', 'Django', 'Laravel'],
  },
  {
    title: 'Working',
    accentSuffix: 'with data',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'SQL', 'Power BI', 'Tableau', 'Jupyter'],
  },
  {
    title: 'Keeping it',
    accentSuffix: 'all running',
    tags: ['Git', 'Docker', 'AWS', 'Azure', 'PostgreSQL', 'MongoDB', 'Firebase', 'Supabase'],
  },
]

export type Experience = {
  role: string
  org: string
  orgHref?: string
  date: string
  lead?: boolean
  body?: string
  bullets?: string[]
  stack?: string[]
}

export const EXPERIENCE: Experience[] = [
  {
    role: 'Software Developer',
    org: 'Onor Consultancy',
    date: 'March 2026 — present',
    lead: true,
    bullets: [
      'Shipped Vuna, a digital platform connecting the agricultural value chain',
      'Built Kodi, a property and rent management web app',
      'Developed an ERP system for small businesses in Kenya',
    ],
    stack: ['TypeScript', 'React', 'Supabase', 'MongoDB'],
  },
  {
    role: 'Junior Software Developer',
    org: 'Signvrse',
    orgHref: 'https://Signvrse.com',
    date: 'Sep 2025 — Jan 2026',
    body: 'Helped take Terp360, a sign-language-to-text product, from beta to production — automating the training-data pipeline and refining computer-vision models along the way.',
  },
  {
    role: 'IT & Legal Support Intern',
    org: 'EarthTree',
    date: 'May — Aug 2025',
    body: 'Automated field data collection and procurement workflows, cutting processing time by 40% and giving field teams faster, cleaner data.',
  },
  {
    role: 'Research & Technology Intern',
    org: 'Signvrse',
    orgHref: 'https://Signvrse.com',
    date: 'Jan — Apr 2025',
    body: 'Researched and built the first beta of the sign-language recognition tool using OpenCV, MediaPipe and LSTM networks.',
  },
]

export type ArchiveItem = {
  num: string
  name: string
  desc: string
  stack: string
  href: string
}

export const ARCHIVE: ArchiveItem[] = [
  {
    num: '01',
    name: 'Document Management System',
    desc: 'Store, find and retrieve documents without the headache',
    stack: 'TypeScript · Flask',
    href: 'https://github.com/rho-hub/Activities',
  },
  {
    num: '02',
    name: 'Weather App',
    desc: 'A clean, modern way to check the weather',
    stack: 'NextJS · Laravel',
    href: 'https://effulgent-mousse-5f3ee3.netlify.app/',
  },
  {
    num: '03',
    name: 'Purchase Enhancements',
    desc: 'An Odoo module that lets buyers compare bids from many vendors at once',
    stack: 'Python · Odoo',
    href: 'https://github.com/rho-hub/purchase_enhancements/',
  },
  {
    num: '04',
    name: 'Data Analysis & Visualization',
    desc: 'Cleaning messy datasets and turning them into clear answers',
    stack: 'Python · Tableau',
    href: 'https://github.com/rho-hub/Data_analysis.git',
  },
  {
    num: '05',
    name: 'Sentiment Analysis',
    desc: 'What do thousands of Amazon book reviews really feel about the books?',
    stack: 'NLTK · Roberta',
    href: 'https://www.kaggle.com/code/jeronorhodah/sentiment-analysis-python',
  },
  {
    num: '06',
    name: 'Fraud Detection Models',
    desc: 'Catching suspicious credit card transactions as they happen',
    stack: 'scikit-learn',
    href: 'https://github.com/rho-hub/Fraud-detection-Model-',
  },
  {
    num: '07',
    name: 'Fraud Prediction Model',
    desc: 'Scoring how likely a new transaction is to be fraud',
    stack: 'Random Forest',
    href: 'https://github.com/rho-hub/Fraud-prediction-Model',
  },
  {
    num: '08',
    name: 'MomHive',
    desc: 'A supportive community app for young mothers',
    stack: 'Flutter · Flask',
    href: 'https://github.com/yourusername/web-dev-platform',
  },
  {
    num: '09',
    name: 'BloomEra Website',
    desc: 'An online shop for a small flower business, payments included',
    stack: 'Flask · Daraja API',
    href: 'https://github.com/rho-hub/bloomera.git',
  },
  {
    num: '10',
    name: 'This Portfolio',
    desc: "Designed and built the website you're looking at",
    stack: 'React · TypeScript',
    href: 'https://github.com/rho-hub/digital_portfolio',
  },
]
