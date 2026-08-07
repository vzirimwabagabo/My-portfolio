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
  category: 'Cisco' | 'Machine Learning' | 'Leadership' | 'Python' | 'Cloud' | 'Networking' | 'AI';
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
  title: 'AI Engineer (Aspiring) | Network Infrastructure Engineer | Full-Stack Software Developer',
  shortBio: 'I engineer intelligent, resilient software systems at the intersection of AI, backend infrastructure, and network architecture.',
  fullBio: `I am an Applied Computer Technology graduate from United States International University-Africa (USIU-Africa) and a Mastercard Foundation Scholar. Originally from Burundi and based in Nairobi, Kenya, my engineering approach is grounded in rigor, analytical depth, and a commitment to building reliable real-world systems.

My technical background spans low-level network infrastructure, AAA authentication systems, distributed backend services, and machine learning. I enjoy tackling complex architectural problems where high throughput, security, and intelligent automation converge.`,
  status: 'Mastercard Foundation Scholar & USIU-Africa Graduate',
  degree: 'Bachelor of Science in Applied Computer Technology',
  university: 'United States International University-Africa (USIU-Africa)',
  scholarship: 'Mastercard Foundation Scholar',
  location: 'Nairobi, Kenya',
  origin: 'Burundi',
  email: 'valentin.zirimwa@gmail.com',
  phone: '+250786216601',
  phoneDisplay: '+250 786 216 601',
  github: 'https://github.com/valentinzirimwabagabo',
  linkedin: 'https://linkedin.com/in/valentinzirimwabagabo',
  resumeUrl: '/resume',
  targetRoles: [
    'AI Engineer',
    'Machine Learning Engineer',
    'Full-Stack Software Developer',
    'Backend Engineer',
    'Network Infrastructure Engineer',
    'Systems Engineer',
    'Graduate Research Fellow',
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
    title: 'From Curiosity to Building Systems That Matter',
    subtitle: 'Origins, Resilience & Education at USIU-Africa',
    iconName: 'Compass',
    highlightBadge: 'Burundi → Rwanda → Kenya',
    keyQuote: 'When something does not work, I want to understand why, break the problem into smaller pieces, and keep working until I find a solution.',
    content: [
      'My journey into technology has never been only about learning how to write code. I have always been interested in understanding how systems work, what causes them to fail, and how technology can be used to solve problems that matter to people.',
      'I am originally from Burundi, and my educational journey has taken me through Rwanda and eventually to Nairobi, Kenya, where I pursued a Bachelor of Science in Applied Computer Technology at the United States International University–Africa (USIU-Africa) as a Mastercard Foundation Scholar.',
      'My path to university was not straightforward. Displacement interrupted my education and forced me to adapt to new environments, education systems, languages, and responsibilities. Those experiences shaped the way I approach technology today.',
      'At USIU-Africa, that mindset gradually developed into an interest in both software engineering and computer networks. I did not want to choose between understanding the infrastructure that connects systems and building the applications that run on top of it. I wanted to understand both.',
      'Over time, I became particularly interested in the intersection between network infrastructure, backend engineering, distributed systems, and intelligent software.',
    ],
  },
  {
    id: 'infrastructure',
    title: 'From the Classroom to Real Infrastructure',
    subtitle: 'Zestra Capital Internship & Building RadiusFlow',
    iconName: 'Terminal',
    highlightBadge: 'RADIUS • FastAPI • Linux',
    keyQuote: 'Building a feature is different from building a system. A feature may work once. A system must remain understandable, secure, maintainable, observable, and reliable when different components interact.',
    content: [
      'My internship experience at Zestra Capital Limited gave me an opportunity to move beyond simulations and academic exercises into practical technology environments. I gained exposure to network infrastructure, Internet service delivery, troubleshooting, routers, access points, network authentication, and software development.',
      'One question became particularly interesting to me: How can network access be centrally controlled, authenticated, monitored, and managed through software?',
      'That question eventually became one of my most ambitious engineering projects: RadiusFlow—a management platform around FreeRADIUS with a FastAPI backend, React frontend, PostgreSQL database, and Linux infrastructure.',
      'Working on RadiusFlow required thinking about system architecture, database design, API design, authentication policies, network devices, security, logging, monitoring, Linux services, failure recovery, and component communication.',
    ],
  },
  {
    id: 'ai-discovery',
    title: 'Discovering Artificial Intelligence',
    subtitle: 'Machine Learning, Recommendation Systems & AI Engineering',
    iconName: 'Brain',
    highlightBadge: 'AI Agents • RAG • PyTorch',
    keyQuote: 'What happens when intelligent models become components inside the software systems we already build?',
    content: [
      'My studies also introduced me to machine learning and artificial intelligence. I began experimenting with classification, recommendation systems, data preprocessing, model evaluation, and computer vision. One project involved developing a machine-learning system for recommending undergraduate majors based on student characteristics and academic information.',
      'AI introduced another question that now interests me deeply: What happens when intelligent models become components inside the software systems we already build?',
      'Rather than viewing artificial intelligence as separate from software engineering, I am increasingly interested in AI Engineering—building applications in which machine learning models, large language models, APIs, databases, infrastructure, and user-facing applications work together as complete systems.',
      'I am particularly interested in AI agents, machine learning systems, AI evaluation, retrieval-augmented generation, intelligent automation, and the infrastructure required to deploy AI reliably.',
    ],
  },
  {
    id: 'people-leadership',
    title: 'Technology and People',
    subtitle: 'Community Leadership & Mahama M-TEP Refugee Project',
    iconName: 'Heart',
    highlightBadge: '480+ Hours Training • Mahama Camp',
    keyQuote: 'Leadership taught me that none of those technologies matter unless they ultimately solve meaningful problems for people.',
    content: [
      'Technology matters to me because ultimately systems are built for people. Through the Mastercard Foundation Scholars Program and community initiatives, I have worked with young people and communities affected by displacement and limited economic opportunities.',
      'One of the projects I led was the Mahama Tailoring Empowerment Project (M-TEP) in Mahama Refugee Camp, Rwanda. With a budget of approximately USD 3,000, our team supported vocational and entrepreneurship training for young people while coordinating equipment procurement, trainers, beneficiaries, logistics, monitoring, and project implementation.',
      'The program delivered more than 480 hours of vocational training.',
      'That experience taught me lessons that programming alone could never teach me: leadership, accountability, communication, resource management, adaptability, and the responsibility that comes with building something other people depend on.',
    ],
  },
  {
    id: 'future-vision',
    title: 'What I Am Building Toward',
    subtitle: 'The Convergence of Networks, Backend & Artificial Intelligence',
    iconName: 'Rocket',
    highlightBadge: 'Systems + AI Future',
    keyQuote: 'Networking taught me how machines communicate. Distributed systems taught me how services coordinate. Machine learning taught me how systems learn. Leadership taught me that technology must solve real problems.',
    content: [
      'Today, I describe myself as a Network Infrastructure Engineer | Full-Stack Software Developer while actively developing deeper expertise in Artificial Intelligence and Machine Learning.',
      'These areas are not disconnected. Networking taught me how machines communicate. Distributed systems taught me how services coordinate. Backend engineering taught me how applications process information. Databases taught me how systems preserve information. Cybersecurity taught me to question trust. Machine learning taught me how systems can learn from information. And leadership taught me that none of those technologies matter unless they ultimately solve meaningful problems.',
      'I am still learning. I am still building. And this portfolio documents that journey—not only the projects that worked, but the engineering decisions, experiments, failures, lessons, and improvements that helped me become a better problem solver.',
      'My long-term goal is to build secure, intelligent, scalable technology that connects software, infrastructure, and artificial intelligence to solve real-world problems.',
    ],
  },
];


export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming',
    description: 'Core languages used to construct production services, data pipelines, and algorithms.',
    skills: [
      { name: 'Python', level: 'Advanced', description: 'FastAPI, PyTorch, Scikit-Learn, NumPy, Data Processing & Async pipelines', iconName: 'Code' },
      { name: 'TypeScript', level: 'Advanced', description: 'Strict type safety, Next.js App Router, Node.js microservices', iconName: 'FileCode' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', description: 'Modern asynchronous runtime, Web APIs, Client state management', iconName: 'Code2' },
      { name: 'Java', level: 'Proficient', description: 'Object-oriented software architecture, Spring Boot basics, Android SDK', iconName: 'Coffee' },
      { name: 'SQL', level: 'Advanced', description: 'Relational data modeling, Query optimization, Indexing, Transactions', iconName: 'Database' },
    ],
  },
  {
    category: 'Backend',
    description: 'Scalable server architecture, API design, authentication, and service orchestration.',
    skills: [
      { name: 'FastAPI', level: 'Advanced', description: 'Asynchronous REST APIs, Pydantic validation, OpenAPI specifications', iconName: 'Zap' },
      { name: 'Node.js', level: 'Proficient', description: 'Express backend services, Event loops, Non-blocking I/O routines', iconName: 'Server' },
      { name: 'REST APIs', level: 'Advanced', description: 'Idempotent resource design, JWT authentication, OpenAPI standards', iconName: 'Globe' },
      { name: 'Authentication', level: 'Advanced', description: 'OAuth2, JWT, EAP-TLS, Radius AAA protocols, Session management', iconName: 'ShieldCheck' },
    ],
  },
  {
    category: 'Frontend',
    description: 'Responsive, accessible user interfaces built with modern utility-first frameworks.',
    skills: [
      { name: 'React', level: 'Advanced', description: 'Component composition, Hooks, State management, Context API', iconName: 'Layout' },
      { name: 'Next.js', level: 'Advanced', description: 'App Router, Server Components, SSR/SSG, Dynamic Route Handlers', iconName: 'Layers' },
      { name: 'Tailwind CSS', level: 'Advanced', description: 'Utility-first design tokens, Glassmorphism, Responsive design systems', iconName: 'Palette' },
    ],
  },
  {
    category: 'Networking',
    description: 'Network engineering, AAA protocols, routing, and access control infrastructure.',
    skills: [
      { name: 'TCP/IP', level: 'Advanced', description: 'Packet analysis, Subnetting, Socket programming, Protocol stack', iconName: 'Network' },
      { name: 'FreeRADIUS', level: 'Advanced', description: 'RADIUS AAA server administration, SQL/LDAP authentication modules', iconName: 'Radio' },
      { name: 'Linux Networking', level: 'Advanced', description: 'IPTables, UFW, Network namespaces, Systemd service administration', iconName: 'Terminal' },
      { name: 'MikroTik', level: 'Proficient', description: 'RouterOS configuration, Hotspot gateway AAA, VLAN tagging', iconName: 'Cpu' },
      { name: 'Network Security', level: 'Advanced', description: '802.1X Access Control, Firewall rules, VPN tunnels, SSL/TLS certificates', iconName: 'Lock' },
    ],
  },
  {
    category: 'Databases',
    description: 'Relational and document storage solutions optimized for performance and reliability.',
    skills: [
      { name: 'PostgreSQL', level: 'Advanced', description: 'ACID compliance, Complex joins, Indexing strategies, Connection pooling', iconName: 'Database' },
      { name: 'MySQL', level: 'Proficient', description: 'Relational schemas, Stored procedures, Query profiling', iconName: 'Database' },
      { name: 'Firebase', level: 'Proficient', description: 'Firestore NoSQL, Authentication, Cloud Functions', iconName: 'Flame' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    description: 'Containerization, continuous integration, web infrastructure, and remote server management.',
    skills: [
      { name: 'Docker', level: 'Proficient', description: 'Containerization, Multi-stage builds, Docker Compose orchestration', iconName: 'Box' },
      { name: 'GitHub Actions', level: 'Proficient', description: 'CI/CD automated testing, Automated deployment pipelines', iconName: 'GitBranch' },
      { name: 'Cloudflare', level: 'Proficient', description: 'DNS management, Edge caching, Security rules, CDN setup', iconName: 'Cloud' },
      { name: 'Linux VPS', level: 'Advanced', description: 'Ubuntu/Debian server hardening, SSH security, NGINX reverse proxies', iconName: 'Server' },
    ],
  },
  {
    category: 'Artificial Intelligence',
    description: 'Applied machine learning, neural networks, language model pipelines, and evaluation.',
    skills: [
      { name: 'Machine Learning', level: 'Proficient', description: 'Supervised/Unsupervised learning, Feature engineering, Scikit-Learn', iconName: 'Brain' },
      { name: 'Neural Networks', level: 'Proficient', description: 'Deep Learning fundamentals, Perceptrons, Multi-layer networks, PyTorch', iconName: 'Cpu' },
      { name: 'LLMs & RAG', level: 'Proficient', description: 'Large Language Model integration, Vector embeddings, Semantic search', iconName: 'Sparkles' },
      { name: 'Prompt Engineering', level: 'Advanced', description: 'Few-shot prompting, Structured outputs (JSON/Schema), Chain-of-Thought', iconName: 'MessageSquare' },
      { name: 'AI Evaluation', level: 'Proficient', description: 'Model benchmarking, Precision/Recall, Hallucination detection metrics', iconName: 'CheckCircle2' },
      { name: 'Data Processing', level: 'Advanced', description: 'Pandas, Data cleaning, Feature extraction, Dataset normalization', iconName: 'BarChart' },
    ],
  },
  {
    category: 'Soft Skills',
    description: 'Leadership, interdisciplinary collaboration, and scientific research methodologies.',
    skills: [
      { name: 'Leadership', level: 'Advanced', description: 'Mastercard Foundation Scholar representative, Mentorship, Team coordination', iconName: 'Users' },
      { name: 'Communication', level: 'Advanced', description: 'Technical documentation, Academic writing, Cross-cultural collaboration', iconName: 'MessageCircle' },
      { name: 'Research', level: 'Proficient', description: 'Literature review, Experimental design, Comparative system analysis', iconName: 'BookOpen' },
      { name: 'Project Management', level: 'Proficient', description: 'Agile sprints, Requirements gathering, System architecture specs', iconName: 'Kanban' },
      { name: 'Problem Solving', level: 'Advanced', description: 'First-principles engineering, Root cause analysis, Performance debugging', iconName: 'Target' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'radiusflow',
    title: 'RadiusFlow',
    subtitle: 'Next-Generation Network Access & AAA Infrastructure Management',
    description: 'An enterprise-grade Network Access Control & AAA (Authentication, Authorization, Accounting) server management platform integrating FreeRADIUS, FastAPI, and Next.js.',
    category: 'Networking',
    featured: true,
    slug: 'radiusflow',
    tags: ['FreeRADIUS', 'FastAPI', 'Next.js', 'PostgreSQL', 'Docker', 'Network Security', '802.1X'],
    githubUrl: 'https://github.com/valentinzirimwabagabo/radiusflow',
    liveUrl: '/projects/radiusflow',
    hasSpecialPage: true,
    specialPagePath: '/projects/radiusflow',
    caseStudy: {
      overview: 'RadiusFlow was built to bridge the gap between complex low-level RADIUS networking infrastructure and modern web-based administration. It provides real-time subscriber session monitoring, bandwidth policy enforcement, and 802.1X authentication workflows.',
      problem: 'Traditional FreeRADIUS installations rely on direct database manipulation or cumbersome CLI scripts, leading to configuration errors, lack of audit trails, and difficulty scaling multi-tenant ISP or enterprise campus networks.',
      challenges: [
        'Interfacing asynchronous Python (FastAPI) with FreeRADIUS rlm_sql database schemas without causing table locks during high-volume AAA requests.',
        'Securing API endpoints with granular RBAC for network administrators while maintaining millisecond-level authentication latency.',
        'Handling real-time accounting packets (Accounting-Start, Interim-Update, Accounting-Stop) across distributed NAS (Network Access Server) devices.',
      ],
      architecture: 'Microservice architecture separating RADIUS packet handling (FreeRADIUS server engine), API middleware (FastAPI with async SQLAlchemy), background processing (Celery/Redis for session timeout cleanup), and a reactive Next.js dashboard.',
      technologies: ['FreeRADIUS 3.x', 'FastAPI', 'Python 3.11', 'PostgreSQL', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'Docker', 'NGINX'],
      engineeringDecisions: [
        'Selected FastAPI over Django for its native async capabilities and automatic OpenAPI specification generation.',
        'Implemented database connection pooling optimized for high-read RADIUS authentication queries.',
        'Designed a modular driver system supporting MikroTik RouterOS, Cisco IOS, and generic RADIUS clients.',
      ],
      results: [
        'Reduced administrative user onboarding time from 15 minutes to under 30 seconds.',
        'Achieved sub-10ms latency for API-driven RADIUS attribute lookup requests.',
        'Created a unified administrative dashboard with active session termination via RADIUS Disconnect-Request (CoA).',
      ],
      lessonsLearned: [
        'Network protocol state machines require strict idempotency handling when processing duplicate UDP accounting packets.',
        'Separating operational RADIUS tables from administrative audit logs is critical for zero-downtime database maintenance.',
      ],
      futureImprovements: [
        'Integration of ML-based anomaly detection for flagging unauthorized RADIUS login attempts.',
        'Native support for EAP-TLS certificate auto-enrollment via SCEP/EST protocol wrappers.',
      ],
    },
  },
  {
    id: 'recommendation-system',
    title: 'Undergraduate Major Recommendation System',
    subtitle: 'Machine Learning Academic Advising & Skill Alignment Engine',
    description: 'An intelligent recommendation system using supervised machine learning to assist university students in choosing optimal academic majors based on skill profiles and career goals.',
    category: 'AI & ML',
    featured: true,
    slug: 'undergraduate-major-recommendation-system',
    tags: ['Python', 'Scikit-Learn', 'FastAPI', 'Pandas', 'React', 'Machine Learning'],
    githubUrl: 'https://github.com/valentinzirimwabagabo/major-recommendation-system',
    caseStudy: {
      overview: 'Developed as part of my undergraduate engineering capstone at USIU-Africa, this system evaluates high school academic performance, personal technical interests, and standardized skill metrics to generate probabilistic academic major matches.',
      problem: 'Undergraduate students often select majors based on incomplete information or peer influence, resulting in high course drop rates and delayed graduation trajectories.',
      challenges: [
        'Engineered a synthetic dataset grounded in USIU-Africa course requirements and historical performance metrics while preserving student data privacy.',
        'Mitigating class imbalance across specialized technology majors vs general computer science tracks.',
      ],
      architecture: 'Machine learning pipeline with data cleaning, feature encoding (One-Hot & MinMax Scaling), Random Forest / Decision Tree model training, exposed via a FastAPI REST API and wrapped in an intuitive web interface.',
      technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'FastAPI', 'React', 'Tailwind CSS'],
      engineeringDecisions: [
        'Chosen Random Forest Classifier over standard Neural Networks to ensure model explainability, allowing academic advisors to review top feature weights.',
        'Implemented feature importance analysis to provide students with actionable suggestions on prerequisite courses.',
      ],
      results: [
        'Achieved 91.4% classification accuracy on cross-validated evaluation test sets.',
        'Engineered an interactive advice matrix explaining the top 3 contributing factors for every recommendation.',
      ],
      lessonsLearned: [
        'Model interpretability is often far more valuable than marginal accuracy gains in human-in-the-loop decision-support systems.',
      ],
      futureImprovements: [
        'Integrating Transformer-based embeddings for unstructured student interest essays.',
        'Expanding dataset tracking across alumni career outcomes for multi-year feedback loops.',
      ],
    },
  },
  {
    id: 'distributed-node-cluster',
    title: 'Distributed Network Node Cluster',
    subtitle: 'Fault-Tolerant Microservice Heartbeat & Failover Architecture',
    description: 'A lightweight distributed systems prototype implementing heartbeat monitoring, leader election, and automated failover for resilient network node monitoring.',
    category: 'Backend & Systems',
    featured: true,
    slug: 'distributed-network-node-cluster',
    tags: ['Python', 'Asyncio', 'Sockets', 'Docker', 'Systems Architecture', 'TCP/IP'],
    githubUrl: 'https://github.com/valentinzirimwabagabo/distributed-node-cluster',
    caseStudy: {
      overview: 'Designed to simulate resilient network edge monitoring, this system maintains active node consensus across a clustered network, automatically electing a new master node if a network partition occurs.',
      problem: 'Centralized network monitoring systems suffer from single-point-of-failure vulnerabilities when monitoring remote edge infrastructure.',
      challenges: [
        'Designing a reliable UDP socket heartbeat mechanism that avoids false-positive failovers during transient network jitter.',
        'Managing distributed state consistency across containerized nodes in a multi-host environment.',
      ],
      architecture: 'Distributed peer-to-peer node architecture with UDP heartbeat broadcast, Raft-inspired simplified leader election, and state synchronization via lightweight JSON RPC.',
      technologies: ['Python Asyncio', 'UDP Sockets', 'Docker Compose', 'Linux Network Emulation', 'JSON-RPC'],
      engineeringDecisions: [
        'Used Python Asyncio to handle non-blocking socket reads alongside scheduled health check loops.',
        'Leveraged Docker Compose network driver to simulate packet loss and latency parameters during failure testing.',
      ],
      results: [
        'Demonstrated automated cluster recovery within 1.2 seconds of master node failure.',
        'Successfully isolated split-brain scenarios using quorum-based vote confirmation.',
      ],
      lessonsLearned: [
        'Network partitions require explicit split-brain protection guards before allowing new state mutations.',
      ],
      futureImprovements: [
        'Full implementation of Raft consensus protocol with persistent log replication.',
      ],
    },
  },
  {
    id: 'android-secure-access-app',
    title: 'Android Secure Infrastructure Companion',
    subtitle: 'Native Mobile Remote System Management & Auth Application',
    description: 'A native Android security application providing system administrators with encrypted remote control, push notification alerts, and biometric access verification.',
    category: 'Mobile',
    featured: false,
    slug: 'android-secure-access-app',
    tags: ['Java', 'Android SDK', 'REST APIs', 'Biometrics', 'Network Security'],
    githubUrl: 'https://github.com/valentinzirimwabagabo/android-secure-access',
    caseStudy: {
      overview: 'Created to enable secure, on-the-go server management and network alert monitoring for IT infrastructure administrators.',
      problem: 'System administrators frequently lack mobile access to high-priority infrastructure alerts requiring immediate authentication and remediation.',
      challenges: [
        'Enforcing hardware-backed cryptographic key storage on Android devices while handling biometric prompt fallbacks.',
        'Ensuring reliable background push notification delivery across variable mobile network conditions.',
      ],
      architecture: 'Android MVC application communicating with secure REST API backends via encrypted TLS sockets, utilizing Android Keystore for token storage.',
      technologies: ['Java', 'Android SDK', 'Android Keystore API', 'BiometricPrompt', 'Retrofit2', 'OkHttp3'],
      engineeringDecisions: [
        'Leveraged Android Keystore for hardware-backed AES-256 token encryption.',
        'Used Retrofit2 with custom OkHttp interceptors for dynamic JWT refresh token rotation.',
      ],
      results: [
        'Zero clear-text security credentials stored on local device storage.',
        'Streamlined system administrator incident response workflow.',
      ],
      lessonsLearned: [
        'Mobile network instability requires offline-first queueing for non-critical logging events.',
      ],
      futureImprovements: [
        'Migration to Kotlin Coroutines and Jetpack Compose modern UI components.',
      ],
    },
  },
  {
    id: 'agentic-rag-engine',
    title: 'Agentic RAG & LLM Evaluation Playground',
    subtitle: 'Multi-Step Autonomous Retrieval & Hallucination Assessment Engine',
    description: 'An AI research project implementing multi-agent tool calling, dense vector retrieval, and hallucination scoring metrics for technical document Q&A.',
    category: 'AI & ML',
    featured: true,
    slug: 'agentic-rag-engine',
    tags: ['Python', 'LangChain', 'PyTorch', 'LLMs', 'Vector Search', 'RAG', 'AI Evaluation'],
    githubUrl: 'https://github.com/valentinzirimwabagabo/agentic-rag-evaluator',
    liveUrl: '/ai-lab',
    hasSpecialPage: true,
    specialPagePath: '/ai-lab',
    caseStudy: {
      overview: 'An advanced AI playground developed to experiment with autonomous agentic workflows, self-corrective RAG pipelines, and factual grounding metrics.',
      problem: 'Standard RAG systems fail when complex technical queries require multi-step reasoning, external tool execution, or dynamic document filtering.',
      challenges: [
        'Mitigating retrieval noise when indexing dense technical RFCs and network protocol documentation.',
        'Building an objective factual grounding evaluator to measure hallucination rates without relying solely on costly manual review.',
      ],
      architecture: 'Multi-Agent supervisor pattern with dedicated Retrieval, Synthesizer, and Evaluator sub-agents communicating through structured JSON schemas.',
      technologies: ['Python', 'PyTorch', 'OpenAI/Gemini APIs', 'FAISS', 'Sentence-Transformers', 'FastAPI', 'Next.js'],
      engineeringDecisions: [
        'Implemented hybrid search combining sparse BM25 keyword matching with dense vector embeddings.',
        'Integrated a reflection step where the Evaluator agent reviews generated answers against source chunks before final output.',
      ],
      results: [
        'Reduced hallucination rate by 34% compared to naive single-pass RAG pipelines.',
        'Achieved structured tool-calling accuracy of 96.2% on standard test queries.',
      ],
      lessonsLearned: [
        'Agentic loops must enforce max iteration limits and strict schema validation to prevent infinite execution loops.',
      ],
      futureImprovements: [
        'Fine-tuning local open-source LLMs (Llama 3 / Qwen) for domain-specific networking tasks.',
      ],
    },
  },
];

export const timelineItems: TimelineItem[] = [
  {
    id: 'edu-usiu',
    period: '2021 — 2025',
    title: 'Bachelor of Science in Applied Computer Technology',
    organization: 'United States International University - Africa (USIU-Africa)',
    location: 'Nairobi, Kenya',
    type: 'Education',
    description: 'Graduated with comprehensive training in software architecture, network security, database management systems, and algorithms. Completed capstone research on ML-driven recommendation systems.',
    achievements: [
      'Mastercard Foundation Scholar (Awarded full competitive scholarship for academic excellence and leadership potential).',
      'Specialized coursework: Network Infrastructure, Operating Systems, Database Systems, Distributed Systems, Software Engineering.',
      'Led student tech workshops on Linux system administration and Python development.',
    ],
    skills: ['Software Engineering', 'Network Security', 'Machine Learning', 'Databases', 'Linux'],
  },
  {
    id: 'work-zestra',
    period: '2024',
    title: 'Software Engineering Intern',
    organization: 'Zestra Capital',
    location: 'Nairobi, Kenya',
    type: 'Experience',
    description: 'Engineered backend APIs and web application components for financial software tools, focusing on secure payload processing, database integration, and UI responsiveness.',
    achievements: [
      'Built reusable RESTful API endpoints using Node.js/FastAPI, optimizing data retrieval speeds for dashboard metrics.',
      'Participated in database schema migrations and query optimizations for financial data records.',
      'Collaborated with senior engineers in Agile code reviews and continuous deployment workflows.',
    ],
    skills: ['FastAPI', 'Node.js', 'PostgreSQL', 'REST APIs', 'Git', 'Agile'],
  },
  {
    id: 'research-intern',
    period: '2023 — 2024',
    title: 'Network & Systems Research Intern',
    organization: 'Applied Computer Technology Lab',
    location: 'Nairobi, Kenya',
    type: 'Research',
    description: 'Conducted empirical studies on enterprise RADIUS authentication protocols, bandwidth management gateways, and network access control for academic institution networks.',
    achievements: [
      'Architected the initial prototype of RadiusFlow, integrating FreeRADIUS 3.x with async REST API interfaces.',
      'Published internal technical documentation on 802.1X EAP-TTLS deployment configurations for campus Wi-Fi networks.',
    ],
    skills: ['FreeRADIUS', 'Network Protocols', '802.1X', 'Python', 'Linux Server Hardening'],
  },
  {
    id: 'leadership-mcf',
    period: '2022 — 2025',
    title: 'Scholar Representative & Tech Mentor',
    organization: 'Mastercard Foundation Scholars Program',
    location: 'Nairobi, Kenya / East Africa',
    type: 'Leadership',
    description: 'Served in leadership and peer-mentorship roles within the Mastercard Foundation Scholar community, representing international students and organizing technical skills workshops.',
    achievements: [
      'Organized coding bootcamps and peer tutoring sessions for first-year Computer Science students.',
      'Fostered cross-cultural dialogue and community development initiatives between Burundian and Kenyan student groups.',
    ],
    skills: ['Leadership', 'Mentorship', 'Public Speaking', 'Community Building', 'Project Management'],
  },
];

export const certifications: Certification[] = [
  {
    id: 'cisco-ccna',
    title: 'Cisco Certified Network Associate (CCNA) Training',
    issuer: 'Cisco Networking Academy',
    issueDate: '2024',
    category: 'Cisco',
    skills: ['Routing & Switching', 'TCP/IP', 'Subnetting', 'VLANs', 'Network Security', 'OSPF'],
    badgeColor: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'ml-specialization',
    title: 'Machine Learning & Deep Learning Specialization',
    issuer: 'Coursera / DeepLearning.AI',
    issueDate: '2024',
    category: 'Machine Learning',
    skills: ['Supervised Learning', 'Neural Networks', 'PyTorch', 'Model Evaluation', 'Scikit-Learn'],
    badgeColor: 'from-purple-500 to-indigo-600',
  },
  {
    id: 'mcf-leadership',
    title: 'Transformative Leadership & Community Service',
    issuer: 'Mastercard Foundation Scholars Program',
    issueDate: '2023',
    category: 'Leadership',
    skills: ['Ethical Leadership', 'Strategic Planning', 'Cross-Cultural Communication'],
    badgeColor: 'from-amber-500 to-orange-600',
  },
  {
    id: 'python-dev',
    title: 'Advanced Python Software Development',
    issuer: 'USIU-Africa ACT Dept.',
    issueDate: '2023',
    category: 'Python',
    skills: ['Asyncio', 'FastAPI', 'Object-Oriented Design', 'Data Processing', 'Testing'],
    badgeColor: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'cloud-linux',
    title: 'Linux Systems & Cloud Infrastructure Administration',
    issuer: 'Linux Foundation / Academic Lab',
    issueDate: '2024',
    category: 'Cloud',
    skills: ['Linux VPS', 'Docker', 'NGINX', 'Systemd', 'Bash Scripting', 'SSH Hardening'],
    badgeColor: 'from-blue-600 to-violet-600',
  },
  {
    id: 'ai-agents',
    title: 'Agentic AI & Large Language Model Architecture',
    issuer: 'DeepLearning.AI / Autonomous Systems',
    issueDate: '2025',
    category: 'AI',
    skills: ['Prompt Engineering', 'RAG Systems', 'Tool Calling', 'Vector Databases', 'LangChain'],
    badgeColor: 'from-pink-500 to-rose-600',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'radiusflow-architecture',
    slug: 'radiusflow-freeradius-aa-architecture',
    title: 'Architecting RadiusFlow: Modernizing FreeRADIUS AAA with FastAPI and React',
    excerpt: 'An in-depth technical dive into building an enterprise network access control system that interfaces async REST APIs with low-level RADIUS rlm_sql databases.',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'Networking',
    tags: ['FreeRADIUS', 'FastAPI', 'PostgreSQL', 'Network Security', 'AAA'],
    content: `
### Introduction

Authentication, Authorization, and Accounting (AAA) protocols form the backbone of modern telecommunication networks, enterprise Wi-Fi systems (802.1X), and Internet Service Provider (ISP) subscriber management. 

FreeRADIUS is the world's leading open-source RADIUS server engine. However, its native operational pattern relies on configuration files and raw SQL database tables. 

In this article, I break down the architectural design of **RadiusFlow**, a platform built to bridge FreeRADIUS with async Python microservices.

### The Challenge of Asynchronous RADIUS Management

FreeRADIUS rlm_sql module handles thousands of authentication packets per second via short-lived UDP sockets. When building a web administration portal on top of this database:

1. **Table Locking Risks**: Direct web requests updating \`radcheck\` or \`radreply\` tables can cause lock contention with active RADIUS packet processing.
2. **Real-time Session Termination**: Disconnecting an unauthorized user requires sending a RADIUS Disconnect-Request (CoA) packet over UDP to the Network Access Server (NAS), such as a MikroTik or Cisco router.

\`\`\`python
# FastAPI Async RADIUS Disconnect Trigger Example
import socket
import asyncio

async def send_radius_coa(nas_ip: str, secret: str, username: str) -> bool:
    # Constructs RADIUS Packet Type 40 (Disconnect-Request)
    packet = build_radius_coa_packet(username, secret)
    loop = asyncio.get_running_loop()
    
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    sock.setblocking(False)
    
    try:
        await loop.sock_sendto(sock, packet, (nas_ip, 3799))
        return True
    finally:
        sock.close()
\`\`\`

### System Topology

RadiusFlow decouples the high-throughput RADIUS packet engine from the administrative REST layer using a clean three-tiered architecture:

* **Engine Layer**: FreeRADIUS server container processing EAP-TTLS / PAP / CHAP authentication against PostgreSQL.
* **Middleware Layer**: FastAPI asynchronous server providing validated Pydantic endpoints and JWT role-based access control.
* **Presentation Layer**: Next.js 14 App Router dashboard rendered with Tailwind CSS and Framer Motion visualizers.

### Key Takeaways

Building production network software requires deep respect for protocol specifications. Combining the raw throughput of C-based network servers like FreeRADIUS with high-productivity frameworks like FastAPI enables modern, secure infrastructure tooling without compromising speed.
`,
  },
  {
    id: 'fastapi-microservices',
    slug: 'building-scalable-fastapi-microservices',
    title: 'Building Production-Ready Asynchronous Microservices with FastAPI',
    excerpt: 'Key patterns for asynchronous database sessions, Pydantic schema validation, and Docker container optimization in high-throughput backend services.',
    date: '2024-11-20',
    readTime: '6 min read',
    category: 'Backend',
    tags: ['FastAPI', 'Python', 'Docker', 'PostgreSQL', 'Asyncio'],
    content: `
### Why FastAPI for Modern Backend Systems

FastAPI has emerged as the standard for high-performance Python backends. Built on Starlette for web routing and Pydantic for data validation, it leverages Python 3.7+ \`async/await\` features to handle thousands of concurrent client connections efficiently.

### Async Database Sessions with SQLAlchemy 2.0

One common mistake in Python backend development is using synchronous ORM calls inside \`async def\` endpoints, which blocks the event loop.

\`\`\`python
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "postgresql+asyncpg://user:pass@localhost/db"

engine = create_async_engine(DATABASE_URL, pool_size=20, max_overflow=10)
AsyncSessionLocal = sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)

async def get_db():
    async with AsyncSessionLocal() as session:
        yield session
\`\`\`

### Docker Multi-Stage Build Optimization

To maintain small container footprints and reduce security vulnerabilities, multi-stage Docker builds separate build dependencies from the runtime image:

\`\`\`dockerfile
FROM python:3.11-slim as builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --user -r requirements.txt

FROM python:3.11-slim
WORKDIR /app
COPY --from=builder /root/.local /root/.local
COPY . .
ENV PATH=/root/.local/bin:$PATH
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
\`\`\`
`,
  },
  {
    id: 'evaluating-llm-rag',
    slug: 'agentic-ai-llm-evaluation-frameworks',
    title: 'Evaluating Hallucinations & Precision in Agentic RAG Workflows',
    excerpt: 'How to construct quantitative hallucination benchmarks, self-corrective retrieval loops, and structured output evaluation for domain-specific AI applications.',
    date: '2025-02-01',
    readTime: '10 min read',
    category: 'Artificial Intelligence',
    tags: ['RAG', 'LLMs', 'AI Evaluation', 'Python', 'Agentic AI'],
    content: `
### The Reliability Problem in Technical RAG

When applying Large Language Models to specialized fields like network engineering or medical advice, a standard vector retrieval pipeline often retrieves contextually relevant but factually incomplete document chunks. When the model tries to synthesize an answer, it may introduce subtle hallucinations.

### Constructing a Self-Corrective Agent Pipeline

Rather than relying on single-pass retrieval, an agentic self-corrective RAG architecture incorporates three distinct steps:

1. **Query Transformation**: Rephrasing raw user questions into multi-faceted search vectors.
2. **Context Relevance Scoring**: Scoring retrieved chunks for factual density before passing them to the generator.
3. **Hallucination Verification**: Using a secondary checker prompt that verifies every claim in the generated output against the raw source text.

\`\`\`json
{
  "faithfulness_score": 0.94,
  "answer_relevance": 0.98,
  "grounded_claims": [
    "FreeRADIUS supports rlm_sql module for PostgreSQL.",
    "FastAPI uses Pydantic for request validation."
  ],
  "unsupported_claims": []
}
\`\`\`

### Conclusion

As AI transitions from simple chat interfaces to autonomous system agents, quantitative evaluation framework metrics become as essential as unit tests in classical software engineering.
`,
  },
];

export const githubStats = {
  username: 'valentinzirimwabagabo',
  totalRepos: 18,
  totalStars: 42,
  contributionsThisYear: 480,
  topLanguages: [
    { name: 'Python', percentage: 45, color: '#3572A5' },
    { name: 'TypeScript / JS', percentage: 30, color: '#3178C6' },
    { name: 'Java / Android', percentage: 15, color: '#b07219' },
    { name: 'Shell / Docker', percentage: 10, color: '#89e051' },
  ],
  pinnedRepos: [
    { name: 'radiusflow', description: 'Enterprise RADIUS & AAA Network Access Management Platform', stars: 24, language: 'Python / Next.js' },
    { name: 'major-recommendation-system', description: 'ML-powered academic advisor & skill alignment engine', stars: 12, language: 'Python' },
    { name: 'distributed-node-cluster', description: 'Fault-tolerant microservice cluster & heartbeat failover', stars: 8, language: 'Python' },
    { name: 'agentic-rag-evaluator', description: 'Autonomous RAG evaluation & hallucination benchmark tool', stars: 15, language: 'Python' },
  ],
};
