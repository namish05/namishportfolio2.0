export const personalInfo = {
  name: "Namish Srivastava",
  shortName: "Namish",
  brand: "NAMISH®",
  title: "Web Developer",
  status: "AVAILABLE FOR INTERNSHIPS & ROLES",
  role: "Web Developer",
  location: "Gorakhpur, Uttar Pradesh, India",
  coords: "26.7606° N, 83.3732° E",
  phone: "+91 6388690890",
  phoneRaw: "6388690890",
  email: "snamish44@gmail.com",
  tagline: "Building digital experiences that don't feel ordinary.",
  education: {
    btech: {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Maharana Pratap Institute of Technology, Gorakhpur",
      period: "2025 – Present",
      short: "B.Tech IT (Pursuing)",
    },
    diploma: {
      degree: "Diploma in Computer Science",
      institution: "Mahamaya IT Polytechnic, Maharajganj",
      period: "2022 – 2025",
      short: "Diploma CSE",
    }
  },
  summary: "Enthusiastic and detail-oriented aspiring Web Developer with a strong foundation in HTML, CSS, and JavaScript. Currently pursuing a Bachelor of Technology in Information Technology, with hands-on experience in building responsive and user-friendly web applications. Seeking an internship opportunity to apply technical skills, gain real-world experience, and contribute effectively to a dynamic development team.",
  bio: "I'm Namish Srivastava, a Web Developer from Gorakhpur, Uttar Pradesh, currently pursuing my B.Tech in Information Technology at Maharana Pratap Institute of Technology. I combine solid procedural and object-oriented computer science foundations from my Diploma in CS with modern full-stack web engineering across React, Next.js, Node.js, and Express.js.",
  socials: {
    github: "https://github.com/namish05",
    linkedin: "https://www.linkedin.com/in/namish-srivastava-791b74324/",
    email: "snamish44@gmail.com",
    phone: "tel:+916388690890",
    whatsapp: "https://wa.me/916388690890?text=Hi%20Namish,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!",
  }
};

export const projects = [
  {
    id: "01",
    slug: "capacity-connect",
    title: "Capacity Connect",
    subtitle: "Digital Learning & Capacity-Building Portal",
    category: "Full-Stack LMS Platform",
    year: "2025",
    description: "Built and deployed Capacity Connect, a digital learning and capacity-building portal using React, Tailwind CSS, Node.js, Express.js, MongoDB, REST APIs, and JSON, contributing primarily to backend development, database management, API integration, and cloud deployment.",
    tags: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "REST APIs", "JSON", "Cloud Deployment"],
    features: [
      "Architected backend micro-services and RESTful API endpoints using Node.js & Express",
      "Designed and optimized MongoDB document schemas for multi-tier user roles and course tracking",
      "Integrated JSON payloads with secure session validation for role-based portal access",
      "Engineered automated cloud deployment on Vercel & Render with continuous delivery",
      "Responsive and intuitive trainee & administrator dashboards with high-touch UI"
    ],
    liveUrl: "https://capacityconnect-frontend.vercel.app/",
    githubUrl: "https://github.com/namish05",
    accent: "#CCFF00",
    gradient: "from-[#1a2310] via-[#0e1408] to-[#050505]",
    metric: "Full-Stack Production Architecture"
  },
  {
    id: "02",
    slug: "smartmailai",
    title: "SmartMailAI",
    subtitle: "AI-Powered Spam Detection & Classification System",
    category: "AI Web Application",
    year: "2025",
    description: "Developed an AI-based web application to classify email messages and PDF documents as Spam or Legitimate using text analysis techniques. Built a responsive and user-friendly interface using HTML, CSS, and JavaScript.",
    tags: ["JavaScript", "HTML5", "CSS3", "Text Analysis", "AI/ML Classification", "PDF Parsing", "Responsive UI"],
    features: [
      "Natural language and text analysis pipeline for email body spam score calculation",
      "Document ingestion engine to parse and classify attached PDF contents",
      "Instant visual classification feedback (Spam vs Legitimate indicator)",
      "Zero-latency clientside input sanitization and responsive interface",
      "Cross-browser tested and optimized for mobile, tablet, and desktop viewports"
    ],
    liveUrl: "https://smartmailaiproject.netlify.app/",
    githubUrl: "https://github.com/namish05",
    accent: "#60A5FA",
    gradient: "from-[#0d1c2e] via-[#08101a] to-[#050505]",
    metric: "AI Text & PDF Classification"
  },
  {
    id: "03",
    slug: "payment-gateway-web",
    title: "Payment Gateway Web",
    subtitle: "Modern Animated Checkout & Payment Experience",
    category: "Fintech & Interactive Web",
    year: "2025",
    description: "Developed a modern and responsive Payment Gateway website using HTML, CSS, and JavaScript with animated UI, glass-morphism design, and real-time form validation.",
    tags: ["HTML5", "CSS3", "JavaScript", "Glassmorphism", "Form Validation", "UI Animation", "Responsive Design"],
    features: [
      "Bespoke glassmorphic visual layer with layered blur and subtle specular highlights",
      "Real-time card number Luhn algorithm validation, expiry checking, and CVV masking",
      "Kinetic micro-interactions and smooth checkout stage transitions",
      "Responsive layout maintaining tactile touch targets on all mobile screen widths",
      "Secure client-side form event handling with visual transaction confirmation"
    ],
    liveUrl: "https://razorpayment.netlify.app/",
    githubUrl: "https://github.com/namish05",
    accent: "#FF3366",
    gradient: "from-[#290c14] via-[#14060a] to-[#050505]",
    metric: "Glassmorphic UI & Real-Time Validation"
  },
  {
    id: "04",
    slug: "hillwoods-academy",
    title: "Hillwood Academy",
    subtitle: "Next-Gen Animated Institutional Web Platform",
    category: "Full-Stack Web Experience",
    year: "2025",
    description: "An interactive, animated institutional portal designed for Hillwood Academy featuring dynamic noticeboards, admissions workflow, campus previews, and responsive mobile architecture.",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Node.js", "Express", "MongoDB"],
    features: [
      "Dynamic real-time notice board and announcement feed with MongoDB integration",
      "End-to-end student admissions application workflow with input validation",
      "Framer Motion-powered interactive campus gallery and fluid page transitions",
      "Fully accessible WCAG compliant responsive design across all devices"
    ],
    liveUrl: "https://hillwoodacademy.vercel.app/",
    githubUrl: "https://github.com/namish05",
    accent: "#FBBF24",
    gradient: "from-[#281c08] via-[#130d04] to-[#050505]",
    metric: "100% Responsive & Dynamic"
  }
];

export const skillCategories = [
  {
    id: "frontend",
    title: "FRONTEND",
    badge: "CLIENT-SIDE",
    skills: [
      { name: "HTML5", level: "Expert", desc: "Semantic markup, Accessibility, DOM hierarchy" },
      { name: "CSS3", level: "Expert", desc: "Flexbox, Grid, CSS Variables, Responsive design" },
      { name: "JavaScript", level: "Advanced", desc: "ES6+, Async/Await, DOM manipulation, Text analysis" },
      { name: "Responsive Web Design", level: "Expert", desc: "Mobile-first layouts, Fluid typography, Media queries" },
      { name: "React.js", level: "Advanced", desc: "Component lifecycle, Hooks, State management, SPA routing" },
      { name: "Next.js", level: "Intermediate", desc: "SSR, SSG, App Router, Production optimization" },
      { name: "Tailwind CSS", level: "Expert", desc: "Utility architecture, Custom themes, Glassmorphism" },
      { name: "Framer Motion / GSAP", level: "Advanced", desc: "Micro-animations, Timelines, ScrollTrigger" }
    ]
  },
  {
    id: "backend",
    title: "BACKEND & DB",
    badge: "SERVER-SIDE",
    skills: [
      { name: "Node.js", level: "Advanced", desc: "Event loop, Asynchronous I/O, REST services" },
      { name: "Express.js", level: "Advanced", desc: "RESTful APIs, Custom middleware, Routing, JSON payloads" },
      { name: "MongoDB", level: "Advanced", desc: "Document schemas, Mongoose ODM, CRUD operations" },
      { name: "REST APIs", level: "Advanced", desc: "Endpoint design, HTTP status codes, Data serialization" },
      { name: "JSON", level: "Expert", desc: "Data interchange, Schema parsing, API payload management" }
    ]
  },
  {
    id: "tools",
    title: "TOOLS & DEPLOYMENT",
    badge: "ENVIRONMENT",
    skills: [
      { name: "Visual Studio Code / Antigravity", level: "Power User", desc: "IDE workflows, AI pair programming, Debugging" },
      { name: "Git & GitHub", level: "Advanced", desc: "Version control, Branching, Pull requests, Collaboration" },
      { name: "Vercel", level: "Proficient", desc: "Frontend serverless hosting, Continuous deployments" },
      { name: "Render", level: "Proficient", desc: "Full-stack web service and API server hosting" },
      { name: "Netlify", level: "Proficient", desc: "Static & JAMstack web application hosting" }
    ]
  },
  {
    id: "soft",
    title: "SOFT SKILLS",
    badge: "PROFESSIONAL",
    skills: [
      { name: "Communication", level: "Core", desc: "Clear technical and interpersonal project articulation" },
      { name: "Adaptability", level: "Core", desc: "Rapid adoption of new web frameworks and developer tools" },
      { name: "Problem Solving", level: "Core", desc: "Algorithmic thinking, Debugging, Solution optimization" },
      { name: "Attention to Detail", level: "Core", desc: "Pixel perfection, Robust validation, Code clean-up" }
    ]
  }
];

export const journeyTimeline = [
  {
    period: "JUN 2026 — AUG 2026",
    role: "Full-Stack Web Developer Intern",
    organization: "DATAMINDX TECH , BANGALORE",
    status: "UPCOMING INTERNSHIP",
    description: "Contributing to full-stack web application development using React.js, Next.js, Node.js, and Express.js. Working on testing, debugging, performance optimization, and maintenance of production web applications.",
    highlights: ["React.js & Next.js Development", "Node.js & Express.js APIs", "Performance Profiling & Testing", "Production Codebase Maintenance"]
  },
  {
    period: "2025 — PRESENT",
    role: "Bachelor of Technology in Information Technology",
    organization: "Maharana Pratap Institute of Technology, Gorakhpur",
    status: "CURRENT DEGREE",
    description: "Pursuing B.Tech in IT with focused coursework on advanced data structures, computer networks, database management, and modern software engineering principles.",
    highlights: ["Information Technology", "Gorakhpur, Uttar Pradesh", "Web Application Architecture"]
  },
  {
    period: "JUL 2025 — AUG 2025",
    role: "Web Development Intern",
    organization: "CODSOFT , West Bengal",
    status: "INTERNSHIP",
    description: "Developed and maintained web applications using HTML, CSS, and JavaScript. Gained hands-on experience with version control systems like Git and GitHub while collaborating in structured development sprints.",
    highlights: ["HTML, CSS & JavaScript Engineering", "Version Control via Git & GitHub", "Responsive Web Implementation"]
  },
  {
    period: "2022 — 2025",
    role: "Diploma in Computer Science",
    organization: "Mahamaya IT Polytechnic, Maharajganj",
    status: "COMPLETED",
    description: "Earned Diploma in Computer Science with rigorous foundations in programming fundamentals, operating systems, database principles, and computational problem solving.",
    highlights: ["Computer Science Fundamentals", "Maharajganj, Uttar Pradesh", "3-Year Technical Engineering Foundation"]
  }
];

export const services = [
  {
    num: "01",
    title: "RESPONSIVE WEB DESIGN",
    short: "Mobile-first, user-friendly, and accessible websites.",
    description: "Building responsive, modern web applications that adapt flawlessly to desktops, tablets, and smartphones using semantic HTML5, modern CSS3, and fluid styling.",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Tailwind CSS"]
  },
  {
    num: "02",
    title: "FULL-STACK WEB DEVELOPMENT",
    short: "End-to-end React, Node.js, and Express.js platforms.",
    description: "Crafting scalable web applications combining reactive user interfaces with robust backend business logic, session validation, and clean REST APIs.",
    stack: ["React.js", "Next.js", "Node.js", "Express.js", "REST APIs"]
  },
  {
    num: "03",
    title: "AI & INTELLIGENT WEB APPS",
    short: "Smart text analysis, document parsing, and classification.",
    description: "Developing practical AI-powered web solutions like SmartMailAI for email and PDF text classification with real-time feedback and intuitive dashboards.",
    stack: ["JavaScript", "Text Analysis", "PDF Document Parsing", "Algorithms"]
  },
  {
    num: "04",
    title: "DATABASE & API INTEGRATION",
    short: "Reliable data modeling with MongoDB and JSON REST APIs.",
    description: "Designing structured NoSQL database schemas, write-optimized collections, and JSON serialization for seamless client-server synchronization.",
    stack: ["MongoDB", "Mongoose", "JSON", "REST APIs", "Express"]
  },
  {
    num: "05",
    title: "CLOUD DEPLOYMENT & TOOLING",
    short: "Continuous deployment and modern workflow execution.",
    description: "Deploying and managing production web apps across Vercel, Render, and Netlify with automated Git/GitHub version control pipelines.",
    stack: ["Git", "GitHub", "Vercel", "Render", "Netlify", "VS Code"]
  }
];

export const githubStats = {
  contributionsThisYear: "1,240+",
  publicRepos: "12+",
  pullRequests: "30+",
  streak: "Active Continuous Learning",
  pinnedRepos: [
    {
      name: "capacity-connect-lms",
      desc: "Digital learning and capacity-building portal using React, Tailwind CSS, Node.js, Express.js, MongoDB, REST APIs, and JSON.",
      stars: 18,
      forks: 5,
      lang: "JavaScript",
      langColor: "#f1e05a"
    },
    {
      name: "smartmailai-spam-detection",
      desc: "AI-based web application to classify email messages and PDF documents as Spam or Legitimate using text analysis.",
      stars: 14,
      forks: 4,
      lang: "JavaScript",
      langColor: "#f1e05a"
    },
    {
      name: "payment-gateway-web",
      desc: "Modern and responsive Payment Gateway website using HTML, CSS, and JavaScript with animated UI & glassmorphism.",
      stars: 12,
      forks: 3,
      lang: "CSS / JS",
      langColor: "#563d7c"
    },
    {
      name: "hillwoods-academy-web",
      desc: "Full-stack institutional web portal with dynamic admissions & event notice system.",
      stars: 16,
      forks: 4,
      lang: "React",
      langColor: "#61dafb"
    }
  ]
};
