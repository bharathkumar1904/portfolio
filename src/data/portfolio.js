import {
  Search,
  Heart,
  Shield,
  Database,
  FileText,
  Bot,
  Siren,
  Stethoscope,
  Trophy,
  Target,
  CreditCard,
  Package,
  Truck,
  BarChart3,
} from 'lucide-react'

/* ===== Personal info ===== */
export const personalInfo = {
  name: 'Bharath Kumar Peddireddy',
  shortName: 'Bharath',
  role: 'Full-Stack & AI Developer',
  degree: 'B.Tech in Computer Science & Engineering',
  cgpa: '8.77',
  tagline:
    'Computer Science Engineering student at KL University with strong problem-solving and data analysis skills, developing practical, innovative solutions.',
  summary:
    'Currently pursuing a B.Tech in Computer Science Engineering at KL University, with strong problem-solving skills, data analysis, and developing practical, innovative solutions.',
  email: 'bharathkumarnaidu8143@gmail.com',
  phone: '(+91) 9989422865',
  location: 'Andhra Pradesh, India',
  github: 'https://github.com/bharathkumar1904',
  linkedin: 'https://www.linkedin.com/in/bharath-kumar-b9080333b',
  resumeUrl: '/resume.pdf',
  image: '/profile.jpg',
  availability: 'Open to Software Engineering & Internship Opportunities',
}

/* ===== About stats ===== */
export const stats = [
  { value: '8.77', label: 'CGPA' },
  { value: '96.9%', label: 'Intermediate Board' },
  { value: '1500+', label: 'CodeChef Rating' },
  { value: '3', label: 'Projects Shipped' },
]

export const focusAreas = [
  'Full-Stack Development',
  'AI & Machine Learning',
  'Backend & REST APIs',
  'Data Structures & OOP',
  'Cloud Deployment',
]

/* ===== Skills ===== */
export const skills = [
  {
    category: 'Languages',
    icon: 'code',
    items: [
      { name: 'Java', icon: 'java' },
      { name: 'Python', icon: 'python' },
      { name: 'C', icon: 'c' },
      { name: 'JavaScript (ES6+)', icon: 'javascript' },
    ],
  },
  {
    category: 'Web Development',
    icon: 'layout',
    items: [
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS3', icon: 'css' },
      { name: 'Responsive Design', icon: 'responsive' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    icon: 'package',
    items: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
    ],
  },
  {
    category: 'Databases',
    icon: 'database',
    items: [
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Firebase Firestore', icon: 'firestore' },
      { name: 'MySQL', icon: 'mysql' },
    ],
  },
  {
    category: 'Core CS',
    icon: 'book',
    items: [
      { name: 'Data Structures', icon: 'dsa' },
      { name: 'OOP', icon: 'oop' },
      { name: 'Machine Learning', icon: 'ml' },
    ],
  },
  {
    category: 'APIs & Integrations',
    icon: 'plug',
    items: [
      { name: 'REST APIs', icon: 'restapi' },
      { name: 'API Integration', icon: 'api' },
      { name: 'Authentication & Authorization', icon: 'auth' },
    ],
  },
]

/* ===== Tools & platforms ===== */
export const toolGroups = [
  {
    label: 'AI, Data & BI',
    items: [
      { name: 'Kaggle', icon: 'kaggle' },
      { name: 'Groq AI', icon: 'groq' },
      { name: 'scikit-learn', icon: 'scikitlearn' },
      { name: 'Pandas', icon: 'pandas' },
      { name: 'NumPy', icon: 'numpy' },
      { name: 'Power BI', icon: 'powerbi' },
    ],
  },
  {
    label: 'Cloud & Deployment',
    items: [
      { name: 'Vercel', icon: 'vercel' },
      { name: 'Railway', icon: 'railway' },
      { name: 'Netlify', icon: 'netlify' },
      { name: 'AWS', icon: 'aws' },
      { name: 'Google Cloud', icon: 'gcp' },
    ],
  },
  {
    label: 'Backend & Data Stores',
    items: [
      { name: 'Supabase', icon: 'supabase' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Cloud Firestore', icon: 'firestore' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'MySQL', icon: 'mysql' },
    ],
  },
  {
    label: 'Payments & Messaging',
    items: [
      { name: 'Razorpay', icon: 'razorpay' },
      { name: 'EmailJS', icon: 'emailjs' },
      { name: 'Capacitor', icon: 'capacitor' },
    ],
  },
  {
    label: 'Developer Tooling',
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Postman', icon: 'postman' },
      { name: 'Vite', icon: 'vite' },
      { name: 'Jupyter', icon: 'jupyter' },
      { name: 'Anaconda', icon: 'anaconda' },
      { name: 'Android Studio', icon: 'androidstudio' },
      { name: 'VS Code', icon: 'vscode' },
      { name: 'Windows Terminal', icon: 'windowsTerminal' },
    ],
  },
  {
    label: 'Design',
    items: [
      { name: 'Figma', icon: 'figma' },
      { name: 'Canva', icon: 'canva' },
    ],
  },
]

/* Flat list, used by the hero marquee */
export const allTools = toolGroups.flatMap((group) => group.items)

/* ===== Projects ===== */
export const featuredProject = {
  title: 'AAYUH',
  subtitle: 'Smart Healthcare & Medical Management System',
  problem:
    'Patients struggle to get reliable medicine information, understand their symptoms, and keep medical history organised — leading to fragmented and delayed care.',
  solution:
    'A full-stack, multi-platform health companion with an AI-powered symptom checker, medicine intelligence, medical history tracking, emergency SOS and doctor discovery.',
  tech: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Firebase',
    'Groq AI',
    'Capacitor',
    'Node.js (API proxy)',
    'Vercel',
    'Railway',
  ],
  features: [
    { icon: Bot, text: 'AI symptom checker powered by Groq (Llama 3.3-70B)' },
    { icon: Search, text: 'US FDA open drug database lookups' },
    { icon: FileText, text: 'Medical history tracking' },
    { icon: Siren, text: 'Emergency SOS' },
    { icon: Stethoscope, text: 'Doctor discovery' },
  ],
  highlights: [
    'Built a full-stack, multi-platform health companion with AI-powered symptom checker, medicine intelligence, medical history tracking, emergency SOS, and doctor discovery.',
    'Integrated Groq (Llama 3.3-70B) through a private Node.js API proxy for symptom analysis, medicine explanations, and an AI health chatbot.',
    'Integrated the US FDA open drug database for real-time medicine lookups with AI-generated patient-friendly summaries.',
    'Built complete authentication system with Firebase Auth and medical records storage using Firebase Firestore.',
  ],
  contribution:
    'Designed the system architecture, built the Groq (Llama 3.3-70B) integration behind a private Node.js API proxy so the Groq key never ships to the client, and wired up Firebase Auth and Firestore end-to-end.',
  liveUrl: 'https://aayuh.co.in/',
  repos: [
    { label: 'AAYUH', url: 'https://github.com/bharathkumar1904/AAYUH-' },
    { label: 'aayuh-ml', url: 'https://github.com/bharathkumar1904/aayuh-ml' },
    { label: 'aayuh-proxy', url: 'https://github.com/bharathkumar1904/aayuh-proxy' },
  ],
  github: 'https://github.com/bharathkumar1904/AAYUH-',
}

export const projects = [
  {
    title: 'Sasi Arts',
    subtitle: 'E-Commerce Website',
    description:
      'Responsive e-commerce website for personalized gifts and customised products, with a dual checkout path, server-verified payments and a full admin panel.',
    features: [
      { icon: Package, text: 'Product categories' },
      { icon: CreditCard, text: 'Razorpay payments' },
      { icon: Truck, text: 'Order tracking' },
      { icon: BarChart3, text: 'Admin panel & invoices' },
    ],
    tech: [
      'JavaScript',
      'HTML5',
      'CSS3',
      'Node.js',
      'Supabase',
      'PostgreSQL',
      'Razorpay',
      'EmailJS',
      'Vercel',
    ],
    highlights: [
      'Built a responsive e-commerce website with product categories, Razorpay payment integration, and order tracking.',
      'Implemented a dual-checkout system (online payments + WhatsApp ordering) with server-side HMAC SHA256 payment verification.',
      'Designed an admin panel with Supabase Auth for managing products, orders, inventory, and generating invoices.',
      'Deployed on Vercel with a Supabase PostgreSQL backend protected by Row-Level Security policies.',
    ],
    liveUrl: 'http://sasiarts.website/',
    github: 'https://github.com/bharathkumar1904/sasi-arts',
  },
  {
    title: 'Life Tag',
    subtitle: 'Emergency Identification Web Platform',
    description:
      'Web-based emergency response system that enables accident victims to be identified and get their emergency contacts by searching their vehicle number or scanning a QR code.',
    features: [
      { icon: Search, text: 'Vehicle number search' },
      { icon: Shield, text: 'QR code identification' },
      { icon: Heart, text: 'Emergency contact alerts' },
    ],
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Firebase', 'QR Code'],
    highlights: [
      'Developed a web-based emergency response system that enables accident victims to be identified and get their emergency contacts by searching their vehicle number or scanning a QR code.',
      'Implemented an emergency contact retrieval feature to instantly display registered contacts during critical situations.',
    ],
    liveUrl: '#',
    github: 'https://github.com/bharathkumar1904',
  },
]

/* ===== Education ===== */
export const education = [
  {
    type: 'Education',
    degree: 'Bachelor of Technology — Computer Science & Engineering',
    institution: 'Koneru Lakshmaiah University (KL University)',
    location: 'Andhra Pradesh, India',
    period: 'July 2024 – Present',
    score: 'CGPA: 8.77',
    highlights: ['Data Structures', 'OOP', 'Database Systems', 'Machine Learning'],
  },
  {
    type: 'Education',
    degree: 'Intermediate — PCM',
    institution: 'Sasi Junior College',
    location: 'Andhra Pradesh, India',
    period: 'June 2022 – June 2024',
    score: 'Percentage: 96.9%',
    highlights: ['Physics', 'Chemistry', 'Mathematics'],
  },
  {
    type: 'Education',
    degree: 'Secondary School Certificate (SSC) — Class 10',
    institution: 'Sasi High School',
    location: 'Andhra Pradesh, India',
    period: '2020 – 2022',
    score: '',
    highlights: ['Mathematics', 'Science', 'English'],
  },
]

/* ===== Certifications ===== */
export const certifications = [
  {
    title: 'AI Infrastructure and Operations Fundamentals',
    issuer: 'NVIDIA',
    year: '2024',
  },
  {
    title: 'Learn React',
    issuer: 'Scrimba',
    year: '2024',
  },
  {
    title: 'Dynamic Programming & Greedy Algorithms',
    issuer: 'University of Colorado Boulder',
    year: '2024',
  },
]

/* ===== Achievements ===== */
export const achievements = [
  {
    title: 'Smart India Hackathon 2025',
    description: 'Participated in SIH 2025 and was nominated at the inter-college level.',
    icon: Target,
    category: 'Hackathon',
  },
  {
    title: 'CodeChef Programmer — 1500+ Rating',
    description:
      'Sustained a CodeChef rating above 1500, reflecting consistent competitive programming practice.',
    icon: Trophy,
    category: 'Competitive Programming',
  },
]

/* ===== Social links ===== */
export const socialLinks = [
  { icon: 'github', href: 'https://github.com/bharathkumar1904', label: 'GitHub' },
  {
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/bharath-kumar-b9080333b',
    label: 'LinkedIn',
  },
  { icon: 'email', href: 'mailto:bharathkumarnaidu8143@gmail.com', label: 'Email' },
]
