export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  category: 'Networking' | 'AI & ML' | 'Backend & Systems' | 'Full-Stack' | 'Mobile';
  featured: boolean;
  slug: string;
  tags: string[];
  githubUrl?: string;
  githubLabel?: string;
  liveUrl?: string;
  hasSpecialPage?: boolean;
  specialPagePath?: string;
  caseStudy: {
    overview: string;
    problem: string;
    challenges: string[];
    architecture: string;
    technologies: string[];
    engineeringDecisions: string[];
    results: string[];
    lessonsLearned: string[];
    futureImprovements: string[];
  };
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Proficient' | 'Competent';
    description: string;
    iconName: string;
  }[];
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  location: string;
  type: 'Education' | 'Experience' | 'Leadership' | 'Research';
  description: string;
  achievements: string[];
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  category: 'Cisco' | 'Machine Learning' | 'Leadership' | 'Python' | 'Cloud' | 'Networking' | 'AI' | 'Data Science';
  skills: string[];
  badgeColor: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  content: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  shortBio: string;
  fullBio: string;
  status: string;
  degree: string;
  university: string;
  scholarship: string;
  location: string;
  origin: string;
  email: string;
  phone?: string;
  phoneDisplay?: string;
  github: string;
  linkedin: string;
  twitter?: string;
  resumeUrl: string;
  targetRoles: string[];
}

export const personalInfo: PersonalInfo = {
  name: 'Valentin Zirimwabagabo',
  title: 'Software Engineer & Data Science Professional | Network Infrastructure',
  shortBio: 'Building robust software, secure networks, and intelligent systems.',
  fullBio: `Networking taught me how systems communicate. Software engineering taught me how to build those systems. Today, I am leveraging data science and machine learning to make those systems intelligent. As a multidisciplinary technology professional, I build practical, scalable solutions at the intersection of infrastructure, software, and data.`,
  status: 'Available for AI & Systems Engineering Roles',
  degree: 'Bachelor of Science in Applied Computer Technology',
  university: 'United States International University-Africa (USIU-Africa)',
  scholarship: 'Mastercard Foundation Scholar',
  location: 'Nairobi, Kenya',
  origin: 'Burundi',
  email: 'vzirimwabagabo0@gmail.com',
  phone: '+250786216601',
  phoneDisplay: '+250 786 216 601',
  github: 'https://github.com/vzirimwabagabo',
  linkedin: 'https://www.linkedin.com/in/valentin-zirimwabagabo/',
  resumeUrl: '/resume',
  targetRoles: [
    'AI/ML Intern',
    'Junior Machine Learning Engineer',
    'Data Analyst / Junior Data Scientist',
    'Software Engineer',
    'Backend / Full-Stack Developer',
    'Network Engineer',
    'Technical Researcher'
  ],
};

export interface StoryChapter {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  highlightBadge?: string;
  keyQuote?: string;
  content: string[];
}

export const myStoryChapters: StoryChapter[] = [
  {
    id: 'curiosity',
    title: 'Displacement, Resilience & Education',
    subtitle: 'From Burundi to Nairobi via USIU-Africa',
    iconName: 'Compass',
    highlightBadge: 'Burundi → Rwanda → Kenya',
    keyQuote: 'Overcoming significant interruptions in education taught me how to adapt, rebuild, and commit to finding practical solutions to complex problems.',
    content: [
      'My journey into technology has been defined by resilience, adaptability, and a drive to solve complex problems. Originating from Burundi and navigating displacement to Rwanda, I learned early on how to overcome significant interruptions and build pathways forward.',
      'This perspective shaped my work ethic and my commitment to leveraging technology for practical impact.',
      'I earned my Bachelor of Science in Applied Computer Technology from USIU-Africa, where I developed a strong foundation in software engineering, database systems, and cryptography.'
    ],
  },
  {
    id: 'infrastructure',
    title: 'How Systems Communicate',
    subtitle: 'Networking, Infrastructure, and Security',
    iconName: 'Terminal',
    highlightBadge: 'Networks & Operations',
    keyQuote: 'My technical career began at the infrastructure layer—configuring networks and ensuring secure communication.',
    content: [
      'Through my coursework and my experience at Zestra Capital Limited, I gained hands-on exposure to network infrastructure, routing, access points, and service delivery.',
      'That foundation naturally evolved into full-stack software development, where I build applications that sit on top of those networks.',
      'Working on projects like RadiusFlow required thinking about system architecture, authentication policies, network devices, security, failure recovery, and component communication.'
    ],
  },
  {
    id: 'ai-discovery',
    title: 'Making Systems Intelligent',
    subtitle: 'Data Science & Applied AI',
    iconName: 'Brain',
    highlightBadge: 'UTokyo • Data Science',
    keyQuote: 'Understanding how systems communicate and how to construct them is the perfect primer for making them intelligent.',
    content: [
      'Most recently, I completed specialized training in Data Science at the University of Tokyo’s Matsuo-Iwasawa Laboratory. I am currently focused on applied Artificial Intelligence and Machine Learning.',
      'Rather than viewing artificial intelligence as separate from software engineering, I am interested in building applications in which machine learning models, APIs, databases, infrastructure, and user-facing applications work together as complete systems.',
      'Whether I am decoupling a AAA network architecture, building a platform to connect refugees with opportunities, or training a machine learning model, my focus remains consistent: engineering reliable, scalable, and purposeful technology.'
    ],
  },
  {
    id: 'people-leadership',
    title: 'Purpose-Driven Engineering',
    subtitle: 'Technology for Social Impact',
    iconName: 'Heart',
    highlightBadge: 'Leadership & Impact',
    keyQuote: 'None of these technologies matter unless they ultimately solve meaningful problems for people.',
    content: [
      'Technology matters to me because systems are built for people. Through the Mastercard Foundation Scholars Program and community initiatives, I have worked to empower communities affected by displacement and limited economic opportunities.',
      'Leading the Mahama Tailoring Empowerment Project (M-TEP) taught me essential lessons in leadership, accountability, communication, resource management, and adaptability.',
      'I apply that same sense of responsibility to the software I write and the systems I design.'
    ],
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Software Engineering & Backend',
    description: 'Core languages and frameworks for scalable server architecture and APIs.',
    skills: [
      { name: 'Python', level: 'Advanced', description: 'FastAPI, Scikit-Learn, Async pipelines', iconName: 'Code' },
      { name: 'JavaScript / TypeScript', level: 'Advanced', description: 'Next.js App Router, Node.js microservices', iconName: 'FileCode' },
      { name: 'FastAPI', level: 'Advanced', description: 'Asynchronous REST APIs, Pydantic validation', iconName: 'Zap' },
      { name: 'Node.js / Express', level: 'Proficient', description: 'Backend services, Non-blocking I/O routines', iconName: 'Server' },
      { name: 'C++ / Arduino', level: 'Proficient', description: 'Embedded systems, IoT programming', iconName: 'Cpu' },
    ],
  },
  {
    category: 'Data Science & AI',
    description: 'Applied machine learning, data processing, and intelligence integration.',
    skills: [
      { name: 'Machine Learning', level: 'Proficient', description: 'Supervised learning, Scikit-Learn, Models', iconName: 'Brain' },
      { name: 'Data Preprocessing', level: 'Advanced', description: 'Data cleaning, Normalization, Standardization', iconName: 'BarChart' },
      { name: 'Classification Algorithms', level: 'Proficient', description: 'KNN, Decision Trees, Random Forests', iconName: 'Target' },
      { name: 'PCA', level: 'Proficient', description: 'Principal Component Analysis, Dimensionality reduction', iconName: 'Layers' },
    ],
  },
  {
    category: 'Networking & Infrastructure',
    description: 'Network engineering, routing, AAA protocols, and access control.',
    skills: [
      { name: 'FreeRADIUS / AAA', level: 'Advanced', description: 'RADIUS server administration, Authentication', iconName: 'Radio' },
      { name: 'TCP/IP & HTTP', level: 'Advanced', description: 'Packet analysis, Socket programming, Protocol stack', iconName: 'Network' },
      { name: 'Network Security', level: 'Advanced', description: 'Cryptography, RSA, VPNs, SSL/TLS', iconName: 'Lock' },
      { name: 'MikroTik', level: 'Proficient', description: 'RouterOS configuration, Hotspot gateways', iconName: 'Cpu' },
      { name: 'Wireshark', level: 'Proficient', description: 'Network troubleshooting and packet capture analysis', iconName: 'Terminal' },
    ],
  },
  {
    category: 'Frontend & Full-Stack',
    description: 'Responsive, accessible user interfaces and modern full-stack workflows.',
    skills: [
      { name: 'React', level: 'Advanced', description: 'Component composition, State management', iconName: 'Layout' },
      { name: 'Next.js', level: 'Advanced', description: 'App Router, Server Components, SSR', iconName: 'Globe' },
    ],
  },
  {
    category: 'Databases & Cloud',
    description: 'Storage solutions and infrastructure management.',
    skills: [
      { name: 'PostgreSQL', level: 'Advanced', description: 'Relational data modeling, Complex queries', iconName: 'Database' },
      { name: 'MongoDB', level: 'Proficient', description: 'NoSQL schemas, Document storage', iconName: 'Database' },
      { name: 'Cloud & Linux', level: 'Proficient', description: 'VPS Hardening, Docker containerization', iconName: 'Cloud' },
    ],
  }
];

export const projects: Project[] = [
  {
    id: 'radiusflow',
    title: 'RadiusFlow',
    subtitle: 'FreeRADIUS Management Platform',
    description: 'A decoupled management platform and dashboard for FreeRADIUS network architecture that separates the AAA data plane from the management plane.',
    category: 'Networking',
    featured: true,
    slug: 'radiusflow',
    tags: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'FreeRADIUS', 'MikroTik'],
    caseStudy: {
      overview: 'Engineered a decoupled architecture where FreeRADIUS handles live AAA traffic efficiently, while a dedicated management application handles logic, provisioning, and reporting.',
      problem: 'Traditional FreeRADIUS setups intermingle the AAA data plane with management logic, making it difficult to scale, monitor, and securely administer network access.',
      challenges: [
        'Synchronizing state between the PostgreSQL management database and the live FreeRADIUS service without introducing latency into the authentication flow.',
        'Implementing granular Role-Based Access Control (RBAC) for administrators.',
      ],
      architecture: 'FastAPI backend interfaces with PostgreSQL and FreeRADIUS, providing secure APIs to a React-based administrative dashboard.',
      technologies: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'FreeRADIUS', 'RADIUS AAA', 'MikroTik'],
      engineeringDecisions: [
        'Decoupled the management logic from the AAA processing plane to ensure authentication performance is unaffected by administrative dashboard queries.'
      ],
      results: [
        'Created a scalable blueprint for ISP/enterprise network access management that separates concerns and improves auditability.'
      ],
      lessonsLearned: [
        'Separating state between high-frequency operational systems and administrative systems is crucial for stability.'
      ],
      futureImprovements: ['Adding deeper AI-driven anomaly detection for network access logs.'],
    },
  },
  {
    id: 'zestra-delivery-dashboard',
    title: 'Zestra Delivery Administration Dashboard',
    subtitle: 'Operations & Fleet Logistics Admin Platform',
    description: 'A React-based administration dashboard engineered during my internship at Zestra Capital Limited, integrated with the delivery backend to manage orders, deliveries, riders, agents, and access control.',
    category: 'Full-Stack',
    featured: true,
    slug: 'zestra-delivery-dashboard',
    tags: ['React', 'JavaScript', 'React Router', 'Context API', 'REST APIs', 'RBAC', 'Authentication', 'Google Maps'],
    githubUrl: 'https://github.com/josephpetersw/zestra-delivery-backend',
    githubLabel: 'Associated Backend Repo',
    caseStudy: {
      overview: 'Contributed to the frontend engineering of the Zestra Delivery Administration Dashboard during my internship at Zestra Capital Limited. Built with React, JavaScript, React Router, and Context API, the platform serves as an operational control hub for managing Agents, Orders, Deliveries, Users, Riders, Rider Activity Logs, and Admin Profiles—integrated with the existing delivery REST backend.',
      problem: 'Operations and dispatch teams needed a centralized, responsive interface to supervise multi-stage delivery workflows, assign dispatch riders, audit delivery history, and manage administrator access securely without exposing raw database tables or backend endpoints.',
      challenges: [
        'Implementing client-side authentication with protected route guards and granular Role-Based Access Control (RBAC) across administrative tiers.',
        'Integrating diverse REST API endpoints for Orders, Deliveries, Riders, and Agents with robust handling for pagination, multi-parameter search, and status filtering.',
        'Enforcing rigorous form and input validation alongside responsive loading skeletons and defensive error recovery states.',
        'Dynamically transforming delivery latitude/longitude coordinates into direct Google Maps navigation links for rapid geographical dispatch verification.',
      ],
      architecture: 'Single Page Application (SPA) architecture utilizing React Router for protected route enforcement, Context API for global session and authentication state, modular service layers for REST API consumption, and reusable data table/filter UI components.',
      technologies: ['React', 'JavaScript (ES6+)', 'React Router', 'Context API', 'REST APIs', 'JWT & RBAC', 'Google Maps Links', 'Git'],
      engineeringDecisions: [
        'Modularized key operational domains (Agents, Orders, Deliveries, Users, Riders, Rider Logs, Admin Profile) into independent view modules to ensure code maintainability.',
        'Established dedicated API service abstractions interfacing with the existing delivery backend (josephpetersw/zestra-delivery-backend), keeping components decoupled from network logic.',
        'Built centralized pagination and filtering handlers to manage large order volumes without UI degradation.',
        'Constructed coordinate utility helpers converting raw delivery point coordinates into instant Google Maps routing links.',
      ],
      results: [
        'Centralized the supervision of active deliveries, rider assignments, and order states into a single operational interface.',
        'Prevented unauthorized access to privileged administrator functions through strict RBAC route barriers and session checks.',
        'Seamlessly integrated the React frontend with the existing Zestra delivery backend, establishing reliable end-to-end operational workflows.',
      ],
      lessonsLearned: [
        'Working on a frontend client integrated with an established backend emphasized the critical necessity of strict API payload contracts, graceful error boundaries, and comprehensive loading feedback for operators.',
        'Designing internal admin tooling requires prioritizing UX predictability, fast search/filtering, and reliable coordinate-level spatial context.',
      ],
      futureImprovements: ['Implementing real-time WebSocket notifications for instant rider status updates and live delivery tracking maps.'],
    },
  },
  {
    id: 'talenthub',
    title: 'TalentHub / RefuTalent',
    subtitle: 'Connecting Displaced Talent with Opportunities',
    description: 'A full-stack digital platform designed to help refugees showcase their talents and connect with professional opportunities and supporters.',
    category: 'Full-Stack',
    featured: true,
    slug: 'talenthub',
    tags: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    caseStudy: {
      overview: 'A scalable web application featuring authenticated profiles, opportunity matching algorithms, and integrated messaging designed for social impact.',
      problem: 'Refugees often possess strong professional skills but lack verifiable platforms to showcase their portfolios to global opportunities and sponsors.',
      challenges: [
        'Designing a flexible MongoDB schema to accommodate highly varied professional backgrounds.',
        'Implementing secure JWT-based session management to protect vulnerable user data.',
      ],
      architecture: 'Next.js frontend communicating with a Node.js/Express REST API, backed by a MongoDB database.',
      technologies: ['React', 'Next.js', 'Node.js', 'Express', 'TypeScript', 'MongoDB', 'JWT'],
      engineeringDecisions: [
        'Opted for NoSQL (MongoDB) to handle the varied schema requirements of different professional backgrounds (tailors, developers, artists, etc.).'
      ],
      results: [
        'Delivered a functional MVP that successfully bridges the gap between technology and measurable social impact.'
      ],
      lessonsLearned: [
        'Security and privacy considerations are exponentially more critical when handling data for vulnerable populations.'
      ],
      futureImprovements: ['Adding localization and AI-assisted resume translation.'],
    },
  },
  {
    id: 'ml-face-recognition',
    title: 'Machine Learning Face Recognition',
    subtitle: 'Computer Vision Classification Pipeline',
    description: 'A machine learning pipeline that standardizes image data, reduces dimensionality, and classifies identities using a tuned nearest-neighbors approach.',
    category: 'AI & ML',
    featured: true,
    slug: 'ml-face-recognition',
    tags: ['Python', 'scikit-learn', 'StandardScaler', 'PCA', 'KNN'],
    caseStudy: {
      overview: 'A computer vision machine learning pipeline focused on efficient dimensionality reduction and identity classification.',
      problem: 'Identifying individuals from image data requires dimensionality reduction to process efficiently while maintaining high classification accuracy.',
      challenges: [
        'Determining the optimal number of principal components to retain variance without overfitting.',
        'Experimenting with distance thresholds to accurately flag "unknown" persons not present in the training set.',
      ],
      architecture: 'End-to-end Python pipeline using scikit-learn for preprocessing, dimensionality reduction, and model training.',
      technologies: ['Python', 'scikit-learn', 'StandardScaler', 'PCA', 'K-Nearest Neighbors (KNN)'],
      engineeringDecisions: [
        'Used PCA for feature extraction to reduce computational overhead while preserving facial variance.',
        'Tuned KNN distance metrics to handle out-of-distribution (unknown) inputs.'
      ],
      results: [
        'Demonstrated practical understanding of the end-to-end ML pipeline, from data preprocessing to model evaluation.'
      ],
      lessonsLearned: [
        'Handling negative space / unknown classifications is often harder than classifying known entities.'
      ],
      futureImprovements: ['Transitioning from classical ML techniques to deep learning (CNNs/ResNet).'],
    },
  },
  {
    id: 'rsa-secure-communication',
    title: 'RSA Secure Communication System',
    subtitle: 'Applied Cryptography & Sockets',
    description: 'A two-party secure communication application demonstrating applied cryptography and TCP socket programming.',
    category: 'Backend & Systems',
    featured: false,
    slug: 'rsa-secure-communication',
    tags: ['Cryptography', 'RSA', 'TCP/IP', 'Sockets', 'GUI'],
    caseStudy: {
      overview: 'Developed a client/server GUI application that encrypts socket communication using the RSA cryptographic algorithm.',
      problem: 'Transmitting data over standard TCP sockets leaves communication vulnerable to interception and packet sniffing.',
      challenges: [
        'Implementing secure key generation and exchange between two distinct network endpoints.',
      ],
      architecture: 'Client-server model over raw TCP sockets, utilizing RSA for payload encryption and decryption before rendering to a GUI.',
      technologies: ['RSA Cryptography', 'TCP Sockets', 'Client/Server Networking', 'GUI Framework'],
      engineeringDecisions: [
        'Built directly on TCP sockets to demonstrate low-level understanding of network transport layers.'
      ],
      results: [
        'Translated theoretical network security and cryptography concepts into a functional, secure software implementation.'
      ],
      lessonsLearned: [
        'Real-world cryptography requires careful attention to key management and initialization vectors.'
      ],
      futureImprovements: ['Implementing hybrid encryption (RSA for key exchange, AES for stream cipher) to improve performance.'],
    },
  },
  {
    id: 'iot-smart-irrigation',
    title: 'IoT Smart Irrigation & Automation',
    subtitle: 'Sensor-Driven Embedded System',
    description: 'An Arduino-based embedded system that reads environmental metrics to automatically trigger physical hardware controls.',
    category: 'Backend & Systems',
    featured: false,
    slug: 'iot-smart-irrigation',
    tags: ['C++', 'Arduino', 'IoT', 'Sensors', 'Embedded Systems'],
    caseStudy: {
      overview: 'An automated, sensor-driven hardware system for environmental monitoring and control.',
      problem: 'Manual irrigation and climate control lead to resource waste and suboptimal agricultural conditions.',
      challenges: [
        'Calibrating analog sensors to accurately reflect real-world soil moisture and temperature levels.',
      ],
      architecture: 'Arduino microcontroller reading analog/digital inputs from sensors and driving relay modules to control high-power pumps and fans.',
      technologies: ['C++', 'Arduino', 'Sensors (Moisture, Temperature)', 'Relays / Pump Control'],
      engineeringDecisions: [
        'Implemented threshold-based state machines to prevent relay flickering near trigger points.'
      ],
      results: [
        'Successfully bridged software logic with physical hardware execution in real-time.'
      ],
      lessonsLearned: [
        'Hardware systems require robust fault tolerance against power fluctuations and sensor degradation.'
      ],
      futureImprovements: ['Connecting the system to a cloud backend via ESP32 for remote monitoring.'],
    },
  },
];

export const timelineItems: TimelineItem[] = [
  {
    id: 'edu-usiu',
    period: '2021 — 2025',
    title: 'Bachelor of Science in Applied Computer Technology',
    organization: 'United States International University-Africa (USIU-Africa)',
    location: 'Nairobi, Kenya',
    type: 'Education',
    description: 'Developed a strong foundation in software engineering, database systems, cryptography, artificial intelligence, and applied machine learning.',
    achievements: [
      'Mastercard Foundation Scholar',
      'Coursework included Computer Networks, Cryptography & Network Security, Distributed Systems, Systems Analysis & Design.'
    ],
    skills: ['Software Engineering', 'Network Security', 'Machine Learning', 'Databases', 'Cloud Computing'],
  },
  {
    id: 'work-zestra',
    period: '2024',
    title: 'Technical Intern (Software & Network Operations)',
    organization: 'Zestra Capital Limited',
    location: 'Kenya',
    type: 'Experience',
    description: 'Provided technical support across network operations and software development for an internet service provider.',
    achievements: [
      'Configured and maintained network infrastructure to ensure reliable internet service delivery.',
      'Diagnosed routing and connectivity issues utilizing network troubleshooting protocols.',
      'Contributed to the React-based Zestra Delivery Administration Dashboard, engineering core operational views (Orders, Deliveries, Riders, Agents, RBAC) integrated with the delivery REST backend.',
      'Contributed to web application and software development initiatives to support internal operations.'
    ],
    skills: ['React', 'JavaScript', 'REST APIs', 'RBAC', 'Network Infrastructure', 'Troubleshooting'],
  },
  {
    id: 'leadership-mtep',
    period: '2022 — 2024',
    title: 'Initiative Leader / Organizer',
    organization: 'Mahama Tailoring Empowerment Project (M-TEP)',
    location: 'Rwanda',
    type: 'Leadership',
    description: 'Coordinated a youth skills development program designed to provide practical livelihood skills to the community.',
    achievements: [
      'Managed project planning, budgeting, and monitoring to ensure resource efficiency and measurable social impact.',
      'Delivered over 480+ hours of training and vocational development.'
    ],
    skills: ['Leadership', 'Project Planning', 'Budget Management', 'Community Engagement'],
  },
];

export const certifications: Certification[] = [
  {
    id: 'utokyo-data-science',
    title: 'Data Science Training Program',
    issuer: 'Matsuo-Iwasawa Laboratory, The University of Tokyo',
    issueDate: 'August 2026',
    category: 'Data Science',
    skills: ['Data Science', 'Machine Learning Theories', 'Technical Implementation'],
    badgeColor: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'mcf-leadership',
    title: 'Mastercard Foundation & GMI Mentorship Initiatives',
    issuer: 'Mastercard Foundation',
    issueDate: '2023',
    category: 'Leadership',
    skills: ['Leadership', 'Mentorship', 'Professional Development'],
    badgeColor: 'from-amber-500 to-orange-600',
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'radiusflow-architecture',
    slug: 'radiusflow-freeradius-aa-architecture',
    title: 'Architecting RadiusFlow: Modernizing FreeRADIUS AAA',
    excerpt: 'An in-depth technical dive into building an enterprise network access control system.',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'Networking',
    tags: ['FreeRADIUS', 'FastAPI', 'PostgreSQL', 'Network Security', 'AAA'],
    content: `More content coming soon...`,
  }
];

export const githubStats = {
  username: 'vzirimwabagabo',
  totalRepos: 18,
  totalStars: 42,
  contributionsThisYear: 480,
  topLanguages: [
    { name: 'Python', percentage: 45, color: '#3572A5' },
    { name: 'TypeScript / JS', percentage: 30, color: '#3178C6' },
    { name: 'Java / C++', percentage: 15, color: '#b07219' },
    { name: 'Shell / Docker', percentage: 10, color: '#89e051' },
  ],
  pinnedRepos: [
    { name: 'radiusflow', description: 'Enterprise RADIUS & AAA Network Access Management Platform', stars: 24, language: 'Python / React' },
    { name: 'talenthub', description: 'Connecting displaced talent with opportunities', stars: 12, language: 'Next.js' },
  ]
};
