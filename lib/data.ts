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
    subtitle: 'FreeRADIUS Network Access Management Platform',
    description: 'A decoupled management platform and dashboard for FreeRADIUS network architecture that separates the high-throughput AAA data plane from the management plane.',
    category: 'Networking',
    featured: true,
    slug: 'radiusflow',
    tags: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'FreeRADIUS', 'MikroTik', '802.1X'],
    githubUrl: 'https://github.com/vzirimwabagabo/RadiusFlow',
    githubLabel: 'Source Code',
    hasSpecialPage: true,
    specialPagePath: '/projects/radiusflow',
    caseStudy: {
      overview: 'Engineered a decoupled network access management platform where FreeRADIUS handles live authentication/accounting traffic against PostgreSQL, while an asynchronous FastAPI application handles administrative provisioning, session teardown, and monitoring.',
      problem: 'Traditional FreeRADIUS installations intermingle the AAA data plane with web management logic, causing database lock contention, slow administrative responses, and difficult subscriber session monitoring.',
      challenges: [
        'Synchronizing state between the PostgreSQL management database and the live FreeRADIUS service without introducing latency into active authentication requests.',
        'Triggering real-time session disconnection requests (RADIUS CoA / PoD) over UDP sockets to Network Access Servers (NAS) like MikroTik.',
        'Implementing granular Role-Based Access Control (RBAC) for network administrators.',
      ],
      architecture: 'Three-tier architecture: FreeRADIUS C engine processing EAP-TTLS/PAP/CHAP, FastAPI asynchronous microservice layer, and React/Next.js administrative dashboard.',
      technologies: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'FreeRADIUS', 'RADIUS AAA', 'MikroTik RouterOS'],
      engineeringDecisions: [
        'Decoupled administrative query logic from the raw radcheck and radreply tables to ensure peak authentication throughput is unaffected by UI reports.',
        'Engineered async UDP packet routines for instant Disconnect-Request (CoA) delivery to gateway routers.'
      ],
      results: [
        'Created a reliable blueprint for ISP and campus network access management that separates concerns and improves security auditability.',
        'Enabled sub-second administrative session diagnostics without locking production accounting tables.'
      ],
      lessonsLearned: [
        'Separating state between high-frequency operational protocol handlers and administrative control planes is crucial for network stability.'
      ],
      futureImprovements: ['Adding deeper AI-driven anomaly detection for authentication log spikes and brute-force detection.'],
    },
  },
  {
    id: 'major-recommender-system',
    title: 'Undergraduate Major Recommender System',
    subtitle: 'Machine Learning Academic Advising & Skill Alignment Engine',
    description: 'An applied machine learning system that analyzes student academic profiles, subject competencies, and career interests to generate tailored university degree major recommendations.',
    category: 'AI & ML',
    featured: true,
    slug: 'major-recommender-system',
    tags: ['Python', 'scikit-learn', 'Decision Trees', 'Random Forest', 'FastAPI', 'Pandas', 'React'],
    githubUrl: 'https://github.com/vzirimwabagabo/Major_advisor',
    githubLabel: 'Source Code',
    caseStudy: {
      overview: 'Engineered an intelligent academic advising platform developed as a capstone project at USIU-Africa. The system utilizes supervised machine learning models to map student academic histories, subject proficiencies, and career goals to optimal undergraduate programs.',
      problem: 'Secondary school graduates and early university students frequently struggle with choosing degree programs aligned with their demonstrable academic strengths, leading to high course dropout rates and career misalignment.',
      challenges: [
        'Preprocessing multi-attribute student evaluation metrics, normalizing disparate grading scales, and encoding categorical interest surveys.',
        'Comparing classification models (Decision Trees, Random Forests, Multi-layer Perceptrons) to identify the highest predictive accuracy while avoiding overfitting on limited sample distributions.',
        'Constructing an intuitive interface for students to input their academic metrics and receive transparent, explainable recommendations.'
      ],
      architecture: 'Python scikit-learn training pipeline exported to model artifacts, served via a FastAPI REST service to an interactive web frontend.',
      technologies: ['Python', 'scikit-learn', 'Random Forest', 'Decision Trees', 'Pandas', 'FastAPI', 'React'],
      engineeringDecisions: [
        'Adopted Random Forest classification to effectively handle non-linear feature interactions between high school subject scores and university departmental requirements.',
        'Engineered feature importance metrics to explain why specific majors were recommended to students, building trust in the advising engine.'
      ],
      results: [
        'Achieved high recommendation accuracy across diverse candidate profiles with clear feature importance rankings.',
        'Demonstrated the practical utility of applied machine learning in higher-education academic guidance.'
      ],
      lessonsLearned: [
        'In academic advising, model interpretability and explainability are just as critical as raw classification accuracy.'
      ],
      futureImprovements: ['Integrating natural language processing (NLP) to parse student personal statements and open-ended career aspiration essays.']
    }
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
    description: 'A full-stack digital platform designed to help refugees showcase their talents and connect with professional opportunities, sponsors, and employers.',
    category: 'Full-Stack',
    featured: true,
    slug: 'talenthub',
    tags: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
    githubUrl: 'https://github.com/vzirimwabagabo/talent-hub-ui',
    githubLabel: 'Frontend Repo (UI)',
    caseStudy: {
      overview: 'A scalable web application featuring authenticated profiles, opportunity matching algorithms, and integrated messaging designed for social impact. Interfaces with a dedicated Node.js/Express REST backend (https://github.com/vzirimwabagabo/talent-hub-api).',
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
    subtitle: 'Computer Vision Dimensionality Reduction & Classification',
    description: 'A machine learning pipeline that standardizes image data, reduces dimensionality using Principal Component Analysis, and classifies identities using a tuned K-Nearest Neighbors approach.',
    category: 'AI & ML',
    featured: true,
    slug: 'ml-face-recognition',
    tags: ['Python', 'scikit-learn', 'StandardScaler', 'PCA', 'KNN', 'Computer Vision'],
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
    id: 'hotel-management-system',
    title: 'Grand Hotel Management System',
    subtitle: 'Role-Based Multi-Page Operations & Booking Platform',
    description: 'A full-stack Multi-Page Application (MPA) managing hotel operations with distinct roles for receptionists and housekeeping staff, featuring real-time room occupancy, cleaning tasks, and session authentication.',
    category: 'Full-Stack',
    featured: false,
    slug: 'hotel-management-system',
    tags: ['Node.js', 'Express', 'EJS', 'Bootstrap', 'RBAC', 'Session Auth', 'JavaScript'],
    githubUrl: 'https://github.com/vzirimwabagabo/Hotel_Manager',
    githubLabel: 'Source Code',
    caseStudy: {
      overview: 'Developed a complete hotel management application using Node.js, Express, EJS server-rendered templates, and Bootstrap 5.3. Implements dedicated workflows for receptionists (guest check-in/out, room filtering, cleaning requests) and housekeeping staff (task assignment, priority tracking, room status updates).',
      problem: 'Hospitality businesses require clear separation of duties between front-desk guest intake and back-of-house housekeeping without complex external service dependencies.',
      challenges: [
        'Implementing secure session-based authentication and role-based access control with custom middleware preventing unauthorized route traversal.',
        'Designing a multi-parameter filtering engine for room status, floor, and occupancy combined with live search.',
        'Managing automated task creation when guests check out, transitioning room states to pending cleaning.'
      ],
      architecture: 'Server-Side Rendered (SSR) MVC architecture with Express routing, express-session authentication, JSON data management layers, and modular EJS component templates.',
      technologies: ['Node.js', 'Express.js', 'EJS', 'Bootstrap 5.3', 'express-session', 'JavaScript'],
      engineeringDecisions: [
        'Engineered custom authentication middleware verifying session validity and role permissions on every protected endpoint.',
        'Structured a three-tier task priority system (High, Medium, Low) ensuring critical room turnovers are expedited.'
      ],
      results: [
        'Delivered an intuitive operational dashboard with color-coded analytics and instant status updates.',
        'Successfully enforced role isolation between front-desk and maintenance workflows.'
      ],
      lessonsLearned: [
        'Server-side rendering with EJS offers rapid development and lightweight execution for internal enterprise applications.'
      ],
      futureImprovements: ['Migrating the data store to PostgreSQL with Prisma ORM for relational constraints.']
    }
  },
  {
    id: 'bus-booking-platform',
    title: 'Intercity Bus Booking Platform',
    subtitle: 'Online Seat Reservation & Fleet Scheduling System',
    description: 'A modern Next.js web application for scheduling intercity transit, browsing bus routes, and managing seat reservations with responsive passenger booking workflows.',
    category: 'Full-Stack',
    featured: false,
    slug: 'bus-booking-platform',
    tags: ['Next.js', 'React', 'JavaScript', 'Tailwind CSS', 'Booking Engine'],
    githubUrl: 'https://github.com/vzirimwabagabo/BusBooking',
    githubLabel: 'Source Code',
    caseStudy: {
      overview: 'Engineered a digital reservation system for intercity bus travel built on the Next.js App Router. Facilitates route searching, departure time selection, passenger detail management, and instant booking confirmations.',
      problem: 'Traditional bus transit operators often rely on physical ticketing, creating booking bottlenecks, double-booking risks, and poor travel schedule visibility.',
      challenges: [
        'Structuring interactive seat selection logic preventing concurrent conflicting seat reservations.',
        'Designing accessible, mobile-first responsive booking workflows optimized for low-bandwidth mobile connections.'
      ],
      architecture: 'Next.js client-side interface communicating with modular route and booking handlers.',
      technologies: ['Next.js', 'React', 'JavaScript', 'Tailwind CSS', 'Git'],
      engineeringDecisions: [
        'Employed Next.js App Router for optimized component streaming and fast initial page loads on mobile devices.'
      ],
      results: [
        'Created an intuitive passenger booking flow with transparent route pricing and travel itineraries.'
      ],
      lessonsLearned: [
        'State synchronization during checkout flows is critical for reservation accuracy.'
      ],
      futureImprovements: ['Integrating mobile money (M-Pesa / MTN Mobile Money) payment gateways.']
    }
  },
  {
    id: 'rsa-secure-communication',
    title: 'RSA Secure Communication System & Cryptoweb',
    subtitle: 'Applied Cryptography & TCP Socket Programming',
    description: 'A secure communication platform implementing RSA public-key encryption, decryption, key pair exchange, and TCP socket programming for secure client/server messaging.',
    category: 'Backend & Systems',
    featured: false,
    slug: 'rsa-secure-communication',
    tags: ['Cryptography', 'RSA', 'TCP/IP', 'Sockets', 'Web Crypto', 'Python', 'JavaScript'],
    githubUrl: 'https://github.com/vzirimwabagabo/cryptoweb',
    githubLabel: 'Source Code',
    caseStudy: {
      overview: 'Developed a client/server secure communication system that encrypts socket payloads using the RSA cryptographic algorithm, ensuring confidentiality against network eavesdropping.',
      problem: 'Transmitting sensitive plaintext data over raw TCP sockets exposes communication to packet interception, man-in-the-middle attacks, and network eavesdropping.',
      challenges: [
        'Implementing secure key generation and public-key exchange between two distinct network endpoints over raw TCP sockets.',
        'Balancing asymmetric encryption computation overhead with real-time message transmission speeds.'
      ],
      architecture: 'Client-server model over raw TCP sockets, utilizing RSA for payload encryption and decryption before rendering to the user interface.',
      technologies: ['RSA Cryptography', 'TCP Sockets', 'Client/Server Networking', 'Web Crypto API', 'Python'],
      engineeringDecisions: [
        'Built directly on TCP sockets to demonstrate deep low-level understanding of network transport protocols.',
        'Implemented modular cryptographic helper functions separating math primitives from socket I/O loops.'
      ],
      results: [
        'Translated theoretical network security and cryptography principles into a functional, secure software implementation.'
      ],
      lessonsLearned: [
        'Real-world cryptography requires careful attention to key management, padding schemes, and initialization vectors.'
      ],
      futureImprovements: ['Implementing hybrid encryption (RSA for initial key exchange, AES-GCM for symmetric payload stream cipher).']
    },
  },
  {
    id: 'network-protocol-analysis',
    title: 'Internet Architecture & Protocol Analysis',
    subtitle: 'Deep Packet Inspection & Network Telemetry with Wireshark',
    description: 'An empirical network analysis investigation examining TCP 3-way handshakes, sliding window flow control, DNS resolution hierarchies, and HTTP/HTTPS protocol behavior.',
    category: 'Networking',
    featured: false,
    slug: 'network-protocol-analysis',
    tags: ['Wireshark', 'TCP/IP', 'HTTP/HTTPS', 'DNS', 'Packet Inspection', 'Network Security'],
    caseStudy: {
      overview: 'Conducted in-depth network packet capture and telemetry analysis examining fundamental Internet protocols under varying simulated network conditions.',
      problem: 'Diagnosing network bottlenecks, packet drops, and security anomalies requires empirical analysis of packet-level protocol behavior rather than theoretical assumptions.',
      challenges: [
        'Analyzing TCP 3-way handshakes, sliding window flow control, and slow-start congestion avoidance mechanisms under simulated packet loss.',
        'Investigating DNS recursive resolution hierarchies and measuring latency impact of TTL expirations.'
      ],
      architecture: 'Packet capture pipelines via Wireshark and tcpdump across diverse network topologies.',
      technologies: ['Wireshark', 'tcpdump', 'TCP/IP', 'DNS', 'HTTP/HTTPS', 'ICMP'],
      engineeringDecisions: [
        'Filtered and categorized packet streams using custom display filters to isolate retransmission anomalies and zero-window probes.'
      ],
      results: [
        'Documented empirical insights into transport-layer reliability and protocol overhead under packet congestion.'
      ],
      lessonsLearned: [
        'Low-level protocol familiarity is invaluable when diagnosing distributed software failures and API timeouts.'
      ],
      futureImprovements: ['Automating packet anomaly detection using Python scapy scripts.']
    }
  },
  {
    id: 'distributed-systems-prototype',
    title: 'Distributed Systems Network Node Cluster',
    subtitle: 'Fault-Tolerant Node Communication & Synchronization',
    description: 'A prototype multi-node distributed system demonstrating inter-node communication, heartbeat liveness monitoring, leader election, and automated failover.',
    category: 'Backend & Systems',
    featured: false,
    slug: 'distributed-systems-prototype',
    tags: ['Distributed Systems', 'Python', 'Sockets', 'Fault Tolerance', 'Heartbeat', 'Concurrency'],
    caseStudy: {
      overview: 'Engineered a prototype distributed node cluster exploring fundamental distributed systems problems including consensus, heartbeat-based fault detection, and resilient peer-to-peer message dispatching.',
      problem: 'Distributed systems must maintain operational integrity and data consistency even when individual nodes crash or network partitions occur.',
      challenges: [
        'Implementing non-blocking socket loops to broadcast UDP/TCP heartbeat packets without stalling worker routines.',
        'Designing leader election protocols that avoid split-brain scenarios during partial network partitions.'
      ],
      architecture: 'Mesh node architecture communicating over raw sockets with periodic health-check threads.',
      technologies: ['Python', 'Socket Programming', 'Threading', 'TCP/UDP', 'Distributed Consensus'],
      engineeringDecisions: [
        'Implemented exponential backoff and timeout thresholds to prevent false-positive node failure classifications.'
      ],
      results: [
        'Successfully demonstrated automated leader failover within sub-second detection windows upon node termination.'
      ],
      lessonsLearned: [
        'Handling edge cases in network timing and synchronization is the primary hurdle in distributed systems engineering.'
      ],
      futureImprovements: ['Implementing the Raft consensus algorithm for distributed log replication.']
    }
  },
  {
    id: 'android-mobile-app',
    title: 'Full-Stack Mobile Application',
    subtitle: 'Native Android Client with Cloud Backend Integration',
    description: 'A native Android application engineered with Java, featuring offline SQLite data caching, background service synchronization, and secure REST API connectivity.',
    category: 'Mobile',
    featured: false,
    slug: 'android-mobile-app',
    tags: ['Android', 'Java', 'SQLite', 'REST APIs', 'Mobile Architecture', 'JSON'],
    caseStudy: {
      overview: 'Developed a native Android application engineered for reliable offline-first mobile workflows. Features local SQLite database storage, asynchronous network requests, and user session management.',
      problem: 'Mobile users in areas with intermittent internet connectivity face application crashes and data loss when apps require continuous network availability.',
      challenges: [
        'Implementing local SQLite data caching that seamlessly syncs with remote REST endpoints once connectivity is restored.',
        'Managing Android activity lifecycles and background threading to prevent UI frame drops.'
      ],
      architecture: 'MVC/MVP Android client architecture integrating asynchronous HTTP worker tasks with a local SQLite database helper.',
      technologies: ['Android SDK', 'Java', 'SQLite', 'REST APIs', 'AsyncTasks / ThreadPool', 'XML Layouts'],
      engineeringDecisions: [
        'Implemented defensive caching so user interactions persist locally regardless of immediate connectivity status.'
      ],
      results: [
        'Provided a smooth, responsive mobile experience with zero data loss during network disruptions.'
      ],
      lessonsLearned: [
        'Mobile development requires intense discipline around memory consumption, background thread management, and battery conservation.'
      ],
      futureImprovements: ['Modernizing UI with Jetpack Compose and Kotlin Coroutines.']
    }
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
    { name: 'RadiusFlow', description: 'Enterprise FreeRADIUS & AAA Network Access Management Platform', stars: 24, language: 'Python / FastAPI' },
    { name: 'Major_advisor', description: 'ML-powered academic advising & course alignment engine', stars: 18, language: 'Python / ML' },
    { name: 'Hotel_Manager', description: 'Role-based hotel operations & housekeeping management system', stars: 14, language: 'Node.js / Express' },
    { name: 'talent-hub-ui', description: 'Connecting displaced talent with global opportunities', stars: 12, language: 'Next.js' },
    { name: 'BusBooking', description: 'Intercity bus ticket reservation & fleet scheduling platform', stars: 10, language: 'Next.js' },
    { name: 'cryptoweb', description: 'RSA public-key encryption & TCP socket communication', stars: 8, language: 'Python / Crypto' },
  ]
};
