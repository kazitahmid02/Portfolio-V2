import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

// 🔗 NAV LINKS
export const navLinks = [
  { id: "hero", title: "Home" },
  { id: "experience", title: "Experience" },
  { id: "works", title: "Portfolio" },
  { id: "tech", title: "Skills" },
  { id: "feedbacks", title: "Testimonials" },
  { id: "contact", title: "Contact" },
];

// 🧠 SERVICES (your core roles)
const services = [
  { title: "IT Support Specialist", icon: backend },
  { title: "Software QA Engineer", icon: web },
  { title: "Web Developer", icon: mobile },
  { title: "Data Analyst", icon: creator },
];

// ⚙️ TECHNOLOGIES (aligned with resume)
const technologies = [
  // 📊 Data & Analytics
  { name: "SQL", icon: mongodb },
  { name: "R", icon: typescript },
  { name: "Tableau", icon: redux },
  { name: "Google Sheets", icon: tailwind },
  { name: "Excel", icon: html },
  { name: "Data Cleaning", icon: css },
  { name: "Dashboard Creation", icon: javascript },
  { name: "KPI Tracking", icon: web },

  // 🎨 UX & Design
  { name: "Figma", icon: figma },
  { name: "User Journey Mapping", icon: threejs },
  { name: "Wireframing", icon: html },
  { name: "Prototyping", icon: css },
  { name: "Accessibility", icon: javascript },
  { name: "Usability Testing", icon: docker },

  // 🔐 Cybersecurity & IT
  { name: "Python", icon: typescript },
  { name: "Linux CLI", icon: backend },
  { name: "System Monitoring", icon: redux },
  { name: "Risk Analysis", icon: tailwind },
  { name: "Incident Response", icon: threejs },

  // 🗂️ Project Management
  { name: "Agile", icon: web },
  { name: "Scrum", icon: backend },
  { name: "Kanban", icon: creator },
  { name: "Stakeholder Communication", icon: reactjs },
  { name: "Risk Management", icon: docker },
  { name: "Jira", icon: git },
  { name: "ClickUp", icon: nodejs },

  // 💻 Web Development
  { name: "React", icon: reactjs },
  { name: "Vite", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node.js", icon: nodejs },
  { name: "Express", icon: docker },
  { name: "REST APIs", icon: backend },
  { name: "Firebase", icon: mongodb },
  { name: "Git", icon: git },
  { name: "GitHub", icon: backend },

  // 🧰 Office & Tools
  { name: "Microsoft Office Suite", icon: web },
  { name: "Google Workspace", icon: backend },
  { name: "Documentation", icon: html },
  { name: "Calendar Management", icon: css },
];


// 🧾 EXPERIENCE (copied directly from your resume)
const experiences = [
  {
    title: "Freelance Web Developer",
    company_name: "Fiverr – Remote",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jun 2023 – Present",
    points: [
      "Develop and deploy responsive websites using HTML, CSS, JavaScript, and React with AI-assisted tools.",
      "Translate design ideas into functional sites emphasizing UX and mobile responsiveness",
      "Build portfolio projects demonstrating modern, scalable, and accessible design.",
    ],
  },
  {
    title: "Software QA Engineer",
    company_name: "Saldo Apps Inc. – New York, NY",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Fall 2023",
    points: [
      "Tested iOS, Android, and web apps for performance, usability, and UI consistency.",
      "Designed test cases in TestRail and performed functional and regression testing.",
      "Reported and tracked defects in Jira, collaborating closely with developers.",
    ],
  },
  {
    title: "Software QA Analyst",
    company_name: "Equities Lab – Remote",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Summer 2023",
    points: [
      "Executed test plans for desktop applications (Windows, macOS) to identify performance issues.",
      "Documented and tracked issues in Jira; collaborated to improve testing coverage.",
      "Participated in Scrum meetings to enhance development efficiency.",
    ],
  },
];

// 🎓 EDUCATION (from your resume)
const education = [
  {
    degree: "Bachelor's Degree in Information Systems",
    institution: "CUNY School of Professional Studies – New York, NY",
    date: "Expected Graduation: June 2026",
    details: ["Asynchronous program focusing on IT systems, data, and management."],
  },
  {
    degree: "Associate’s Degree in Business Administration",
    institution: "Borough of Manhattan Community College – New York, NY",
    date: "Graduated: Jan 2023",
    details: ["Foundation in business systems, operations, and analytics."],
  },
];

// 📜 CERTIFICATIONS (Google + Careerist)
const certifications = [
  { title: "Quality Assurance Mastery Certificate", provider: "Careerist (Remote)" },
  { title: "Google Data Analytics Specialization", provider: "Coursera (Remote)" },
  { title: "Google IT Support", provider: "Coursera (Remote)" },
  { title: "Google Project Management", provider: "Coursera (Remote)" },
  { title: "Google UX Design", provider: "Coursera (Remote)" },
  { title: "Google Cybersecurity Specialization", provider: "Coursera (Remote)" },
];

// 🏆 TESTIMONIALS (full text, no truncation)
const testimonials = [
  {
    testimonial:
      "Working with Kazi has been an exceptional experience. His expertise in front-end development is impressive, and he utilizes a wide array of technologies with great proficiency. He consistently demonstrates a high level of intelligence, often providing solutions that exceed expectations. His perseverance is remarkable, he tackles every challenge with determination and doesn't rest until a solution is found. Kazi is also willing to put in extra time to ensure that the job is done right, displaying a strong commitment to quality. His communication skills are excellent, making collaboration smooth and efficient. Additionally, he is skilled at organizing the backend for databases, ensuring they are structured and optimized effectively. What stands out most is his dedication to going beyond the given requirements to achieve the best possible results. I highly recommend Kazi for any project and would gladly work with him again. I give him a 5/5.",
    name: "Catherine Snnow",
    designation: "Founder",
    company: "Up Unik Self Inc",
  },
  {
    testimonial:
      "During our early startup stage, Kazi was the driving force who transformed Texties from an idea into a functioning, scalable brand. His technical vision, design precision, and hands-on leadership built the foundation for everything we operate on today, from our digital systems to our creative identity. Kazi has a rare ability to take initiative, think strategically, and execute with excellence. His commitment during those early stages shaped the core of our company’s culture and set the standard for how we approach innovation and quality. Texties would not have achieved its momentum or confidence without his contributions.",
    name: "Jasir Jamal",
    designation: "CEO",
    company: "Texties Inc",
  },
  {
    testimonial:
      "Working with Kazi at Equities Lab was an excellent experience. He showed great attention to detail in executing test plans and ensuring that every feature met the highest standard of quality before release. His methodical approach and ability to spot issues early helped maintain the stability and consistency of our platform. Kazi also demonstrated strong initiative by supporting our marketing efforts, taking the lead in identifying and connecting with potential clients. His curiosity and willingness to learn made him adaptable across both technical and communication-driven tasks. He consistently delivered dependable results, met deadlines, and maintained a professional attitude that made collaboration easy and productive. What stood out most was his commitment to contributing wherever he could to help the company grow. I would gladly recommend Kazi for any role that requires reliability, versatility, and genuine dedication.",
    name: "John Mcgriskin",
    designation: "Project Manager",
    company: "Equities Lab",
  },
];

// 💼 PROJECTS
const projects = [
  {
    name: "Texties.net",
    description:
      "Texties.net is a global wholesale clothing supplier catering to fashion brands. I contribute on a volunteer basis, overseeing the website’s technical development, including front-end architecture, backend integration, and performance optimization.",
    tags: [
      { name: "react", color: "yellow-text-gradient" },
      { name: "vite", color: "yellow-text-gradient" },
      { name: "tailwindcss", color: "yellow-text-gradient" },
      { name: "javascript", color: "yellow-text-gradient" },,
      { name: "framer-motion", color: "yellow-text-gradient" },,
      { name: "valtio", color: "yellow-text-gradient" },,
      { name: "firebase", color: "yellow-text-gradient" },
      { name: "axios", color: "yellow-text-gradient" },
  
    ],
    image: carrent,
    source_code_link: "https://texties.net/",
  },
  {
    name: "E-Commerce Platform",
    description:
      "A full-stack e-commerce app with a dynamic catalog, cart, secure Stripe payments, and an admin CMS for managing products, orders, and analytics.",
    tags: [
      { name: "nextjs", color: "yellow-text-gradient" },
      { name: "react", color: "yellow-text-gradient" },
      { name: "nodejs", color: "yellow-text-gradient" },
      { name: "expressjs", color: "yellow-text-gradient" },
      { name: "mongodb", color: "yellow-text-gradient" },
      { name: "stripe", color: "yellow-text-gradient" },
      { name: "tailwindcss", color: "yellow-text-gradient" },
      { name: "redux", color: "yellow-text-gradient" },
      { name: "axios", color: "yellow-text-gradient" },
      { name: "jwt", color: "yellow-text-gradient" },
      { name: "nextauth", color: "yellow-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/kazitahmid02/e-commerce",
  },
  {
    name: "UpUnikSelf Inc.",
    description:
      "Developed a full-stack e-commerce website for UpUnikSelf Inc. under a one-time Fiverr contract, following client-provided Figma designs. Built with React, Node.js, Express, MongoDB, and hosted on AWS.",
    tags: [
      { name: "react", color: "yellow-text-gradient" },
      { name: "nodejs", color: "yellow-text-gradient" },
      { name: "expressjs", color: "yellow-text-gradient" },
      { name: "mongodb", color: "yellow-text-gradient" },
      { name: "aws", color: "yellow-text-gradient" },
      { name: "figma", color: "yellow-text-gradient" },
      { name: "ecommerce", color: "yellow-text-gradient" },
      { name: "freelance", color: "yellow-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://www.upunikself.xyz",
  },
  {
    name: "TinDog Landing Page",
    description:
      "A simple responsive landing page for a fictional dog dating app, built with HTML, CSS, and Bootstrap to demonstrate layout design and responsive styling.",
    tags: [
      { name: "html", color: "yellow-text-gradient" },
      { name: "css", color: "yellow-text-gradient" },
      { name: "bootstrap", color: "yellow-text-gradient" },
    ],
    image:
      "https://res.cloudinary.com/drvkbxl0q/image/upload/v1760231026/TinDog_a7g5sx.png",
    source_code_link: "https://github.com/kazitahmid02/TinDog",
  },
];



// ✅ EXPORT ALL
export {
  services,
  technologies,
  experiences,
  education,
  certifications,
  testimonials,
  projects,
};
