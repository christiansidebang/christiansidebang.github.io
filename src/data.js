// Edit data di sini; halaman About & Projects otomatis ikut berubah.
export const SOFT_SKILLS = ["Teamwork", "Leadership", "Communication", "Problem Solving", "Client Management"];

export const SKILLS = [
  { name: "C#", level: 80 },
  { name: "JavaScript", level: 75 },
  { name: "PHP | HTML | CSS", level: 85 },
  { name: "ASP.NET Core", level: 80 },
  { name: "Vue.JS", level: 70 },
  { name: "SQL Server | PostgreSQL", level: 80 },
  { name: "API & Integration", level: 80 },
  { name: "UML | DFD | ERD | URD | Business Process Mapping", level: 85 },
  { name: "HRIS & Payroll Expertise", level: 85 }
];

export const PROJECTS = [
  {
    title: "Employee System",
    img: "HDI.png",
    desc: "Web system for managing employee data using PHP and MySQL.",
    tech: "PHP, MySQL",
    role: "Fullstack",
    feat: "CRUD, Login, Report System",
    github: "",   // contoh: "https://github.com/csidebang02/nama-repo"
    demo: "",     // contoh: "https://demo-kamu.com"
    problem: "",  // masalah yang diselesaikan
    solution: "", // solusi yang kamu buat
    result: ""    // hasilnya, mis. "mengurangi input manual payroll"
  },
  { title: "Recruitment System", 
    img: "Recruitmen-Tracking.png", 
    desc: "System for tracking recruitment process and applicants.", 
    tech: "C#, ASP.Net Core, SQLite",
    role: "Software Engineer", 
    feat: "CRUD, Login, Report System",
    github: "",   // contoh: "https://github.com/csidebang02/nama-repo"
    demo: "",     // contoh: "https://demo-kamu.com"
    problem: "",  // masalah yang diselesaikan
    solution: "", // solusi yang kamu buat
    result: ""    // hasilnya, mis. "mengurangi input manual payroll"
  },
  { title: "Employee Data", 
    img: "Indofood.png", 
    desc: "Simple web-based employee data management system.", 
    tech: "PHP, MySQL", 
    role: "Fullstack", 
    feat: "CRUD, Login",
    github: "",   // contoh: "https://github.com/csidebang02/nama-repo"
    demo: "",     // contoh: "https://demo-kamu.com"
    problem: "",  // masalah yang diselesaikan
    solution: "", // solusi yang kamu buat
    result: ""    // hasilnya, mis. "mengurangi input manual payroll"
  },
  { title: "Item Lab", 
    img: "Item Lab - Silaom.png", 
    desc: "Simple web-based item lab data management system.", 
    tech: "JavaScript, Vue.js, SQL Server", 
    role: "Fullstack", 
    feat: "CRUD, Report System",
    github: "",   // contoh: "https://github.com/csidebang02/nama-repo"
    demo: "",     // contoh: "https://demo-kamu.com"
    problem: "",  // masalah yang diselesaikan
    solution: "", // solusi yang kamu buat
    result: ""    // hasilnya, mis. "mengurangi input manual payroll"
  },
  { title: "Smart Material Store", 
    img: "Smart Material Store - Bungasari.png", 
    desc: "Inventory management system.", 
    tech: "C#, ASP.Net MVC, Azure, SQL Server", 
    role: "Dotnet Developer", 
    feat: "CRUD, Login, Report System",
    github: "",   // contoh: "https://github.com/csidebang02/nama-repo"
    demo: "",     // contoh: "https://demo-kamu.com"
    problem: "",  // masalah yang diselesaikan
    solution: "", // solusi yang kamu buat
    result: ""    // hasilnya, mis. "mengurangi input manual payroll"
  },
  { title: "Preventive (CMMS)", 
    img: "Akebono Web Preventive.png", 
    desc: "Maintenance management system.", 
    tech: "PHP, Laravel, SQL Server", 
    role: "Fullstack", 
    feat: "CRUD, Login, Report System",
    github: "",   // contoh: "https://github.com/csidebang02/nama-repo"
    demo: "",     // contoh: "https://demo-kamu.com"
    problem: "",  // masalah yang diselesaikan
    solution: "", // solusi yang kamu buat
    result: ""    // hasilnya, mis. "mengurangi input manual payroll"
  }
];

export const SOCIALS = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/christiansidebang/" },
  { name: "Github", url: "https://github.com/csidebang02" },
  { name: "Twitter", url: "https://twitter.com/christiansideb1" },
  { name: "Instagram", url: "https://instagram.com/christiansidebang" }
];

export const PAGES = [
  { id: "home", path: "/", label: "Home" },
  { id: "about", path: "/about", label: "About" },
  { id: "experience", path: "/experience", label: "Experience" },
  { id: "projects", path: "/projects", label: "Projects" },
  { id: "contact", path: "/contact", label: "Contact" }
];

export const CONTACT = {
  email: "csidebang02@gmail.com",
  whatsapp: "6285803626746", // format internasional, tanpa 0 di depan dan tanpa +
  linkedin: "https://www.linkedin.com/in/christiansidebang/",
  formKey: "31186734-fe03-45c4-b09d-e9539c84ba71",
  scriptUrl: "https://script.google.com/macros/s/AKfycbwHnAaExK0w5eLqJJPBVXKlIWTM2EqQuuPG6NRBcmR2bEiYdQawKHkenVYeZlA57aYJEA/exec"
};

export const EXPERIENCES = [
  {
    company: "PT. INDACO Warna Dunia",
    role: "Project Manager",
    period: "Aug 2026 - Present",
    points: [ 
      "Manage multiple internal tools projects simultaneously, overseeing scope, timelines, and delivery",
      "Defined user requirements and designed database structures based on user needs analysis",
      "Tracked tasks in Jira and Google Sheets; performed manual testing and bug reporting",
      "Contributed to Android development with Flutter (Dart) in Android Studio"
    ],
    tools: ["Jira", "Google Sheets", "Flutter", "Dart", "Android Studio"]
  },
  { // UBAH: seluruh entri
    company: "PT. Andal Software Sejahtera",
    role: "System Consultant",
    period: "Mar 2025 - Dec 2025",
    project: "Andal Kharisma HRIS & Payroll",
    points: [
      "End-to-end implementation of the Andal Kharisma HRIS & Payroll system",
      "Analyzed client requirements and prepared detailed User Requirement Documents (URD)",
      "Executed secure data migration and delivered successful project handovers",
      "Strong HRIS domain knowledge: payroll, attendance, organizational structure, and regulatory compliance",
      "Developed custom reports and managed workflows in Jira; analyzed data with SQL Server, PostgreSQL, and Excel"
    ],
    tools: ["SQL Server", "PostgreSQL", "Excel", "Jira"]
  },
  { 
    company: "PT. Accelist Lentera Indonesia",
    role: "Dotnet Developer",
    period: "Sep 2024 - Mar 2025",
    project: "Web CONFINS Foundation R3",
    points: [
      "Vendor for Adicipta Inovation Technology: developed and maintained applications for the BFI Finance client",
      "Resolved bugs and issues"
    ],
    tools: ["C#", "ASP.NET Core", "Angular", "TypeScript", "API", "SQL Server", "PostgreSQL", "Jira", "Bitbucket"]
  },
  { 
    company: "PT. Akebono Brake Astra Indonesia",
    role: "Full Stack Developer",
    period: "Jul 2024 - Sep 2024",
    project: "Scheduling Preventive (Web CMMS)",
    points: [
      "Completed user-requested projects individually: analysis, UI/UX, development, testing, and go live",
      "Resolved bugs and issues, and added features requested by users"
    ],
    tools: ["PHP", "Laravel", "API", "SQL Server", "Figma", "GitLab"]
  },
  { 
    company: "PT Bungasari Flour Mills Indonesia",
    role: "Dotnet Developer",
    period: "Dec 2023 - Jul 2024",
    project: "Smart Material Store (SMS), Workflow NPR Form Request",
    points: [
      "Completed user-requested projects individually: project management, UI/UX, development, testing, and go live",
      "Handled SAP Plant Maintenance (PM) and SAP Materials Management (MM)",
      "Collaborated with users to gather requirements and deliver tailored solutions"
    ],
    tools: ["C#", "ASP.NET MVC", "SQL Server", "Figma", "SAP PM", "SAP MM"]
  },
  { 
    company: "Siloam Hospitals Group",
    role: "Full Stack Developer Intern",
    period: "Oct 2023 - Dec 2023",
    project: "Main Web App CMS for Item Lab",
    points: [
      "Participated in conception, design, development, implementation, and deployment of web-based user interface systems",
      "Directly involved in design, development, and maintenance of the website"
    ],
    tools: ["HTML", "CSS", "JavaScript", "Vue.js"]
  },
  { 
    company: "Formulatrix Indonesia",
    role: "Dotnet Developer (Bootcamp)",
    period: "Jul 2023 - Sep 2023",
    project: "Web App Recruitment Tracing v2.0",
    points: [
      "Learned .NET, ASP.NET, Entity Framework, design patterns, and debugging in a C# back-end bootcamp",
      "Worked on both solo and team projects"
    ],
    tools: ["C#", "ASP.NET Core", "Entity Framework", "SQLite"]
  },
  {
    company: "PT HDI Adi Raharja",
    role: "Web Developer",
    period: "Jan 2019 - Mar 2019",
    project: "Employee Database & Report System",
    points: [
      "Built a website for the employee database and employee report collection in a team",
      "Created the admin interface display"
    ],
    tools: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap 4", "MySQL"]
  }
];
