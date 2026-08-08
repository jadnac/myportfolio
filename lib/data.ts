// TODO: replace with the real production domain once this is deployed —
// referenced by metadataBase, canonical URLs, robots.txt, and sitemap.xml.
export const siteUrl = "https://jadnacouzi.com";

export const profile = {
  name: "Jad Nacouzi",
  title: "Lead / Consultant",
  jobTitle: "Senior Full Stack Developer & Team Lead",
  location: "Jbeil, Lebanon",
  email: "jadnacouzi@gmail.com",
  phone: "+961 76 190 574",
  whatsapp: "https://wa.me/96176190574",
  linkedin: "https://www.linkedin.com/in/jad-nacouzi-88a444144/",
  github: "https://github.com/jadnac",
  calendly: "https://calendly.com/jadnacouzi/30min",
};

export const seoKeywords = [
  "Jad Nacouzi",
  "Senior Full Stack Developer",
  "Full Stack Developer & Team Lead",
  "Software Consultant",
  "Independent Technical Consultant",
  "Technical Team Lead",
  "Scrum Master",
  "Java Spring Boot Developer",
  ".NET Developer",
  "React Developer",
  "Next.js Developer",
  "Node.js Developer",
  "PHP Developer",
  "React Native Developer",
  "Enterprise Software Consultant",
  "AI Integration Consultant",
  "Freelance Software Consultant Lebanon",
  "Software Developer Middle East",
  "Web Application Development",
  "Mobile App Development",
];

export const stats = [
  { value: "7+", label: "Years of experience" },
  { value: "20+", label: "Clients served" },
  { value: "2+", label: "Years mentoring developers" },
  { value: "1,000+", label: "End users on apps I've shipped" },
];

export const whyIDoThis = {
  heading: "Why I do this",
  paragraphs: [
    "My vision is simple: help people get their time back. Every business I work with is buried in manual work, disconnected tools, or processes that were never designed to scale — and the right piece of software, built well, quietly gives that time back so people can focus on what actually matters.",
    "That's the standard I hold every solution to — not more software for the sake of software, but the right tool, applied well, that makes someone's job genuinely easier. I split my time evenly between building those solutions and mentoring junior developers, because passing that standard on matters just as much as meeting it myself.",
  ],
};

export const about = {
  heading: "Who I am",
  paragraphs: [
    "I'm a Lead Full Stack Developer and Consultant with 7+ years of experience turning business problems into working solutions. I've led as a Scrum Master and technical lead inside enterprise teams — running sprints, managing stakeholders, and translating business needs into a roadmap engineers can actually execute — and independently as a consultant trusted to take a project from a first conversation to a live product real people use.",
    "Currently I lead delivery at MADA, where I own project and team direction, coordinate between business and engineering, and mentor junior developers and trainees through code review and onboarding. Outside of that, I take on consulting engagements for founders and small teams who need someone to turn their process into a system that saves them time.",
  ],
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    items: ["Java (Spring Boot)", ".NET", "Node.js", "PHP", "Express.js", "Python (scripting)"],
  },
  {
    category: "Frontend",
    items: ["ReactJS", "Next.js", "TypeScript", "JavaScript", "Redux", "ASP.NET MVC (Razor)", "HTML", "CSS"],
  },
  {
    category: "Data & Search",
    items: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Prisma", "Sequelize", "Elasticsearch / ELK Stack"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS EC2", "Elastic Beanstalk", "S3", "CI/CD", "Google Firebase", "IIS", "Linux", "Bash"],
  },
  {
    category: "Integrations",
    items: ["REST & SOAP APIs", "Payment Gateway Integration", "Microsoft Graph API", "Third-Party API Integration"],
  },
  {
    category: "Mobile",
    items: ["React Native", "App Store & Google Play"],
  },
  {
    category: "Process & Tools",
    items: ["Agile", "Scrum", "GitHub", "Bitbucket", "ClickUp", "Postman", "Swagger"],
  },
];

export type Service = {
  title: string;
  description: string;
  tags: string[];
};

export const services: Service[] = [
  {
    title: "Full-Stack Web Development",
    description:
      "End-to-end product builds — React/Next.js frontends backed by Spring Boot, .NET, or Node/Express APIs, owned from database schema to production deploy.",
    tags: ["React", "Next.js", "Spring Boot", ".NET", "Node.js"],
  },
  {
    title: "Enterprise System Architecture",
    description:
      "Designing backend architecture and database schemas that hold up under real load, including search optimization with Elasticsearch.",
    tags: ["System Design", "SQL Server", "PostgreSQL", "Elasticsearch"],
  },
  {
    title: "Mobile App Development",
    description:
      "Hybrid mobile apps with React Native, shipped through to the App Store and Google Play.",
    tags: ["React Native", "iOS", "Android"],
  },
  {
    title: "API Design & Integration",
    description:
      "REST & SOAP APIs, payment gateway integration, and third-party services like Microsoft Graph API — designed for real frontend consumption, documented with Swagger and tested with Postman.",
    tags: ["REST", "SOAP", "Payment Gateways", "Microsoft Graph API"],
  },
  {
    title: "Cloud Deployment & DevOps",
    description:
      "Deploying and maintaining applications on AWS — EC2, Elastic Beanstalk, S3, and CI/CD pipelines that make shipping boring (in a good way).",
    tags: ["AWS", "CI/CD", "EC2", "S3"],
  },
  {
    title: "Team Leadership & Mentorship",
    description:
      "Running Agile ceremonies as Scrum Master, and mentoring junior developers and trainees through code review and technical onboarding.",
    tags: ["Scrum Master", "Code Review", "Mentorship"],
  },
  {
    title: "AI Integration",
    description:
      "Adding AI-powered features and automation into existing products — from LLM-backed workflows to intelligent search — so teams get real time back, not just a demo.",
    tags: ["AI Integration", "LLM APIs", "Automation"],
  },
];

export type Project = {
  name: string;
  code: string;
  role: string;
  description: string;
  tags: string[];
  url?: string;
  /** Optional path under /public (e.g. "/logos/pigrun.png"). Falls back to the generated monogram cover when unset. */
  logo?: string;
};

export const projects: Project[] = [
  {
    name: "PartOf — Fondation LLJ (Switzerland)",
    code: "PF",
    logo: "/logos/partof.png",
    role: "Independent Consultant",
    description:
      "Led delivery of a multi-platform product — mobile application, public website, and administrative dashboard — for an international client, coordinating scope across all three channels and managing App Store publication.",
    tags: ["Mobile", "React", "Admin Dashboard", "Switzerland"],
  },
  {
    name: "PTPTIPS / SPSTIPS",
    code: "PT",
    logo: "/logos/ptptips.png",
    role: "SBW Group — Full Stack Developer",
    description:
      "Delivered and maintained two revenue-generating platforms serving 1,000+ customers, including a proprietary statistics engine and affiliate integrations with four international sportsbook operators.",
    tags: ["ReactJS", "Express.js", "AWS", "CI/CD"],
    url: "https://ptptips.com",
  },
  {
    name: "PigRun Solutions (Canada)",
    code: "PR",
    logo: "/logos/pigrun.png",
    role: "Independent Consultant",
    description:
      "Delivered a web application with role-based dashboards structured around distinct business functions, working across time zones with a fully remote client.",
    tags: ["React", "Dashboards", "Role-based Access", "Canada"],
    url: "https://pigrun.ca/",
  },
  {
    name: "ECCO2 (Switzerland)",
    code: "EC",
    logo: "/logos/ecco2.png",
    role: "Independent Consultant",
    description:
      "Took over maintenance and deployment ownership of an inherited production application, managing releases into a live environment.",
    tags: ["PWA", "Production Support", "Switzerland"],
    url: "https://ecco2.ch/",
  },
  {
    name: "Web Events",
    code: "WE",
    logo: "/logos/webevents.png",
    role: "Independent Consultant",
    description:
      "Delivered an event invitation platform with configurable templates, built for non-technical operators to run independently.",
    tags: ["React", "Dashboard", "Templates"],
    url: "https://webevents.com/",
  },
  {
    name: "Pulse Plus CRM",
    code: "PP",
    logo: "/logos/pulseplus.png",
    role: "Independent Consultant",
    description:
      "Designed and delivered a CRM solution for sales and inventory management, mapping manual business processes into a supporting system.",
    tags: ["CRM", "Sales", "Inventory"],
  },
  {
    name: "COCKTELLI",
    code: "CK",
    logo: "/logos/cocktelli.png",
    role: "Independent Consultant",
    description: "Delivered a QR-based digital menu solution from concept through rollout.",
    tags: ["QR Code", "React"],
    url: "https://cocktelli.web.app/",
  },
  {
    name: "Waspo Energy (Middle East)",
    code: "WP",
    logo: "/logos/waspo.png",
    role: "Independent Consultant",
    description:
      "Delivered a corporate web presence for an energy-sector client, managing expectations and revision cycles to fixed timelines.",
    tags: ["Corporate Site", "Web", "Middle East"],
    url: "https://waspoenergy.com/",
  },
  {
    name: "ANHS — Andre Nacouzi Academy",
    code: "AN",
    role: "Independent Consultant",
    description: "Developed an informational website for Andre Nacouzi Academy.",
    tags: ["Education", "Web"],
    url: "https://anhs.web.app",
  },
];

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "MADA",
    role: "Senior Full Stack Developer & Team Lead",
    period: "11/2023 – Present",
    highlights: [
      "Team leadership: Lead a team of developers and trainees — owning task breakdown, capacity planning, code review standards, and technical onboarding.",
      "Agile delivery: Serve as Scrum Master across concurrent workstreams, running sprint planning, stand-ups, and retrospectives to keep delivery predictable against competing project deadlines.",
      "Solution advisory: Assess business requirements and recommend the appropriate technical approach, introducing modern technologies and AI-based solutions where they address a real business need rather than for their own sake.",
      "Enterprise billing system: Delivered features and modules across an enterprise billing platform, contributing to design decisions and implementation within the development team.",
      "Public-sector programs: Led delivery of two national programs for a government social insurance institution — coordinating directly with institutional stakeholders and translating regulatory and procedural requirements into workable system design under compliance-sensitive timelines.",
      "Solution portfolio: Directed delivery of a document-processing OCR solution and a GRC (Governance, Risk & Compliance) portal, defining scope and architecture for each and adapting delivery to distinct business domains.",
      "Mobile delivery: Delivered enhancements to a production mobile application, coordinating changes across the mobile and backend layers and managing release into the app stores.",
      "Solution planning & scoping: Led pre-build planning for two further solutions — an eSIM mobile product and a web platform for a national telecommunications provider — gathering requirements, defining scope, and setting the technical approach ahead of development.",
      "Quality ownership: Established QA practice within the team — test coverage expectations, review gates, and defect triage — reducing issues reaching production.",
      "Cross-functional collaboration: Act as the technical bridge between business analysts, QA, and client-side stakeholders, resolving scope ambiguity before it reaches development.",
    ],
  },
  {
    company: "Independent Consultant",
    role: "Solution Delivery & Technical Advisory",
    period: "Concurrent",
    highlights: [
      "Advised businesses across 7+ engagements in Europe, North America, and the Middle East — assessing operational needs, recommending solutions, scoping and estimating work, and delivering end to end as sole point of contact.",
      "Acted as external technical advisor for organisations without in-house technical capability, translating business objectives into system requirements and guiding platform and vendor decisions.",
      "Fondation LLJ — PartOf (Switzerland): Led delivery of a multi-platform product — mobile application, public website, and administrative dashboard — coordinating scope across all three channels and managing app store publication for an international client.",
      "PigRun Solutions (Canada): Delivered a web application with role-based dashboards structured around distinct business functions, working across time zones with a fully remote client.",
      "Waspo Energy (Middle East): Delivered a corporate web presence for an energy-sector client, managing expectations and revision cycles to fixed timelines.",
      "Pulse Plus: Designed and delivered a CRM solution for sales and inventory management, mapping manual business processes into a supporting system.",
      "Web Events: Delivered an event invitation platform with configurable templates, built for non-technical operators to run independently.",
      "COCKTELLI: Delivered a QR-based digital menu solution from concept through rollout.",
      "ECCO2 (Switzerland): Took over maintenance and deployment ownership of an inherited production application, managing releases into a live environment.",
    ],
  },
  {
    company: "Massyve Tech",
    role: "Full Stack Developer",
    period: "01/2023 – 07/2023",
    highlights: [
      "Built and shipped a commercial Shopify application providing merchants with data backup, export, and restore capability — protecting stores against data loss and giving merchants control over their own data.",
      "Led discovery meetings with client-side managers to surface operational pain points, then converted those findings into a prioritised enhancement roadmap for the platform.",
      "Acted as the technical point of contact for client stakeholders, translating non-technical problem statements into deliverable scope.",
    ],
  },
  {
    company: "SBW Group",
    role: "Full Stack Developer",
    period: "07/2020 – 01/2023",
    highlights: [
      "Delivered and maintained two revenue-generating platforms serving 1,000+ customers, with full responsibility for production reliability and performance.",
      "Statistical engine: Designed and built a proprietary algorithm generating performance percentages and statistical insights — the core differentiator of the product and the basis of its customer value proposition.",
      "Partnership integrations: Built affiliate integrations with four major international sportsbook operators, including the tracking and reporting layer underpinning the company's affiliate revenue stream.",
      "Executive advisory: Ran regular working sessions with company owners, presenting technical options and trade-offs to inform commercial decisions and translating business goals into a delivery plan.",
      "Owned cloud deployment and CI/CD pipelines, reducing release friction across both platforms.",
    ],
  },
  {
    company: "Indevco Consultancy",
    role: "Automation Developer",
    period: "06/2020 – 07/2020",
    highlights: [
      "Structured the sales pipeline in Microsoft Dynamics 365, giving management visibility over lead progression and opportunity value that had previously been tracked informally.",
      "Built Power BI dashboards surfacing sales and operational performance to decision-makers, replacing manual reporting cycles with self-service access to current figures.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Computer Science",
  school: "Arts, Sciences and Technology University in Lebanon (AUL)",
  period: "02/2017 – 08/2020",
};

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Advanced" },
  { name: "French", level: "Basic" },
];
