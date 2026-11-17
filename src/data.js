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
  { title: "Employee System", 
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
  whatsapp: "6281358153351", // format internasional, tanpa 0 di depan dan tanpa +
  linkedin: "https://www.linkedin.com/in/christiansidebang/"
};

export const EXPERIENCES = [
  {
    company: "PT. INDACO Warna Dunia",
    role: "Project Manager",
    period: "Aug 2026 - Present",
    project: "Internal Request Marketing Tools Event",
    facts: "4 modules · 2 weeks · team of 1",
    points: [
      "Analyzed project needs together with users and wrote the user requirements",
      "Developed the Android app with Flutter and Dart in Android Studio",
      "Ran testing and bug reporting using Google Sheets",
      "Managed project progress with Jira and Google Sheets"
    ],
    tools: ["Flutter", "Dart", "Android Studio", "Jira", "Google Sheets"]
  },
  {
    company: "PT. ANDAL SOFTWARE",
    role: "System Consultant",
    period: "Mar 2026 - Des 2026",
    project: "Internal Request Marketing Tools Event",
    facts: "4 modules · 2 weeks · team of 1",
    points: [
      "Analyzed project needs together with users and wrote the user requirements",
      "Developed the Android app with Flutter and Dart in Android Studio",
      "Ran testing and bug reporting using Google Sheets",
      "Managed project progress with Jira and Google Sheets"
    ],
    tools: ["Flutter", "Dart", "Android Studio", "Jira", "Google Sheets"]
  },
  {
    company: "PT. Accelist Lentera Indonesia",
    role: "System Consultant",
    period: "Mar 2026 - Des 2026",
    project: "Internal Request Marketing Tools Event",
    facts: "4 modules · 2 weeks · team of 1",
    points: [
      "Analyzed project needs together with users and wrote the user requirements",
      "Developed the Android app with Flutter and Dart in Android Studio",
      "Ran testing and bug reporting using Google Sheets",
      "Managed project progress with Jira and Google Sheets"
    ],
    tools: ["Flutter", "Dart", "Android Studio", "Jira", "Google Sheets"]
  }
];
