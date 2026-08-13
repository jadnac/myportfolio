// TODO: replace with the real production domain once this is deployed.
// Referenced by metadataBase, canonical URLs, robots.txt, and sitemap.xml.
export const siteUrl = "https://jadnacouzi.com";

export const profile = {
  name: "Jad Nacouzi",
  title: "Lead / Consultant",
  jobTitle: "Senior Full Stack Developer & Technical Consultant",
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
  "Software Consultant",
  "Independent Technical Consultant",
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
  { value: "4+", label: "Years mentoring developers" },
  { value: "1,000+", label: "End users on apps I've shipped" },
];

export const whyIDoThis = {
  heading: "Why I do this",
  paragraphs: [
    "My vision is simple: help people get their time back. Every business I work with is buried in manual work, disconnected tools, or processes that were never designed to scale. The right piece of software, built well, quietly gives that time back so people can focus on what actually matters.",
    "That's the standard I hold every solution to: not more software for the sake of software, but the right tool, applied well, that makes someone's job genuinely easier. I split my time evenly between building those solutions and mentoring junior developers, because passing that standard on matters just as much as meeting it myself.",
  ],
};

export const about = {
  heading: "Who I am",
  paragraphs: [
    "I'm a Full Stack Developer and Consultant with 7+ years of experience turning business problems into working solutions. I've worked as a Scrum Master and technical lead inside enterprise teams, running sprints, managing stakeholders, and translating business needs into a roadmap engineers can actually execute. I've also worked independently as a consultant trusted to take a project from a first conversation to a live product real people use.",
    "Most recently, I led delivery at MADA, owning project and team direction, coordinating between business and engineering, and mentoring junior developers and trainees through code review and onboarding. Today I focus full-time on independent consulting, helping founders and small teams turn their process into a system that saves them time.",
  ],
};

export type SkillGroup = {
  category: string;
  icon: "backend" | "frontend" | "data" | "cloud" | "integrations" | "mobile" | "tools";
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    icon: "backend",
    items: ["Java (Spring Boot)", ".NET", "Node.js", "PHP", "Express.js", "Python (scripting)"],
  },
  {
    category: "Frontend",
    icon: "frontend",
    items: ["ReactJS", "Next.js", "TypeScript", "JavaScript", "Redux", "ASP.NET MVC (Razor)", "HTML", "CSS"],
  },
  {
    category: "Data & Search",
    icon: "data",
    items: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Prisma", "Sequelize", "Elasticsearch / ELK Stack"],
  },
  {
    category: "Cloud & DevOps",
    icon: "cloud",
    items: ["AWS", "Elastic Beanstalk", "CI/CD", "Google Firebase", "IIS", "Linux", "Bash"],
  },
  {
    category: "Integrations",
    icon: "integrations",
    items: ["REST & SOAP APIs", "Payment Gateway Integration", "Microsoft Graph API", "Third-Party API Integration"],
  },
  {
    category: "Mobile",
    icon: "mobile",
    items: ["React Native", "App Store & Google Play"],
  },
  {
    category: "Process & Tools",
    icon: "tools",
    items: ["Agile", "Scrum", "GitHub", "Bitbucket", "ClickUp", "Postman", "Swagger"],
  },
];

export type Service = {
  title: string;
  icon: "web" | "architecture" | "mobile" | "api" | "cloud" | "leadership" | "ai";
  description: string;
  tags: string[];
};

export const services: Service[] = [
  {
    title: "AI Integration & Solutions",
    icon: "ai",
    description:
      "Building AI-powered solutions from scratch and adding AI features into existing products, from LLM-backed workflows to intelligent search, so teams get real time back, not just a demo.",
    tags: ["AI Solutions", "AI Integration", "LLM APIs", "Automation"],
  },
  {
    title: "Full-Stack Web Development",
    icon: "web",
    description:
      "End-to-end product builds: React/Next.js frontends backed by Spring Boot, .NET, or Node/Express APIs, owned from database schema to production deploy.",
    tags: ["React", "Next.js", "Spring Boot", ".NET", "Node.js"],
  },
  {
    title: "Enterprise System Architecture",
    icon: "architecture",
    description:
      "Designing backend architecture and database schemas that hold up under real load, including search optimization with Elasticsearch.",
    tags: ["System Design", "SQL Server", "PostgreSQL", "Elasticsearch"],
  },
  {
    title: "Mobile App Development",
    icon: "mobile",
    description:
      "Hybrid mobile apps with React Native, shipped through to the App Store and Google Play.",
    tags: ["React Native", "iOS", "Android"],
  },
  {
    title: "API Design & Integration",
    icon: "api",
    description:
      "REST & SOAP APIs, payment gateway integration, and third-party services like Microsoft Graph API. Designed for real frontend consumption, documented with Swagger, and tested with Postman.",
    tags: ["REST", "SOAP", "Payment Gateways", "Microsoft Graph API"],
  },
  {
    title: "Cloud Deployment & DevOps",
    icon: "cloud",
    description:
      "Deploying and maintaining applications on AWS and Elastic Beanstalk, with CI/CD pipelines that make shipping boring (in a good way).",
    tags: ["AWS", "Elastic Beanstalk", "CI/CD"],
  },
  {
    title: "Team Leadership & Mentorship",
    icon: "leadership",
    description:
      "Running Agile ceremonies as Scrum Master, and mentoring junior developers and trainees through code review and technical onboarding.",
    tags: ["Scrum Master", "Code Review", "Mentorship"],
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
    name: "PartOf · Fondation LLJ (Switzerland)",
    code: "PF",
    logo: "/logos/partof.png",
    role: "Independent Consultant",
    description:
      "Led delivery of a multi-platform product (mobile application, public website, and administrative dashboard) for an international client, coordinating scope across all three channels and managing App Store publication.",
    tags: ["Mobile", "React", "Admin Dashboard", "Switzerland"],
  },
  {
    name: "PTPTIPS / SPSTIPS",
    code: "PT",
    logo: "/logos/ptptips.png",
    role: "SBW Group · Full Stack Developer",
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
    name: "ANHS · Andre Nacouzi Academy",
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
  summary: string;
};

export const experience: ExperienceItem[] = [
  {
    company: "MADA",
    role: "Senior Full Stack Developer & Team Lead",
    period: "11/2023 – 08/2026",
    summary:
      "Led a team of developers and trainees as Scrum Master, running delivery across concurrent enterprise projects: an enterprise billing platform, national public-sector programs, a document-processing OCR solution, a GRC portal, and mobile app enhancements. I set technical direction, established QA practice within the team, and acted as the bridge between business, QA, and client-side stakeholders.",
  },
  {
    company: "Independent Consultant",
    role: "Solution Delivery & Technical Advisory",
    period: "Concurrent",
    summary:
      "Advise businesses across 7+ engagements in Europe, North America, and the Middle East as sole point of contact, assessing needs, scoping work, and delivering end to end. Projects span a multi-platform product for Fondation LLJ, role-based dashboards for PigRun Solutions, a corporate site for Waspo Energy, a CRM for Pulse Plus, an event platform for Web Events, a digital menu system for COCKTELLI, and production support for ECCO2.",
  },
  {
    company: "Massyve Tech",
    role: "Full Stack Developer",
    period: "01/2023 – 07/2023",
    summary:
      "Built and shipped a commercial Shopify application giving merchants data backup, export, and restore capability, and worked directly with client-side managers to turn operational pain points into a prioritised enhancement roadmap.",
  },
  {
    company: "SBW Group",
    role: "Full Stack Developer",
    period: "07/2020 – 01/2023",
    summary:
      "Delivered and maintained two revenue-generating platforms serving 1,000+ customers, including a proprietary statistics engine and affiliate integrations with four international sportsbook operators. Ran regular working sessions with company owners to translate business goals into delivery plans, and owned cloud deployment and CI/CD.",
  },
  {
    company: "Indevco Consultancy",
    role: "Automation Developer",
    period: "06/2020 – 07/2020",
    summary:
      "Structured the sales pipeline in Microsoft Dynamics 365 and built Power BI dashboards, giving management self-service visibility into sales and operational performance that had previously been tracked manually.",
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
