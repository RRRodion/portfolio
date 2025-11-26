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
  selfEducation,
  psu,
  courses,
  army,
  collections,
  maps,
  todo,
  threejs,
} from "../assets";

import certifiсateItransition from "../assets/certificates/sertificate.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Node Developer",
    icon: backend,
  },
  {
    title: "Software Engineer (Web)",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Faculty of Information Technology",
    company_name: "Polotsk State University",
    icon: psu,
    iconBg: "#383E56",
    date: "Sep 2020 - Jun 2024",
    points: [
        "Completed comprehensive training in programming and software development.",
        "Learned the fundamentals of algorithms, data structures, OOP, and modern programming languages.",
        "Developed academic projects ranging from simple scripts to full web applications with both client and server functionality.",
        "Gained hands-on experience with HTML, CSS, JavaScript, and basic backend development.",
        "Participated in team projects: task planning, and collaborative development.",
    ],
  },
  {
    title: "Internships & Courses",
    company_name: "Self-education & Online platforms",
    icon: courses,
    iconBg: "#E6DEDD",
    date: "Sep 2020 - Jun 2024",
    points: [
        "Completed courses on JavaScript, TypeScript, and modern frontend development.",
        "Gained practical experience building applications with React, Redux, and React Query.",
        "Learned Git basics, code review practices, and team workflow.",
        "Participated in internships and practical projects focused on creating UI components and optimizing application performance.",
        "Developed an understanding of best practices: clean code, reusable components, error handling, and scalable architecture.",
    ],
  },
  {
    title: "Compulsory Military Service",
    company_name: "Armed Forces of Belarus",
    icon: army,
    iconBg: "#383E56",
    date: "Okt 2024 - Okt 2025",
    points: [
        "Completed military service, developed discipline, responsibility, and stress-resistance.",
        "Improved communication skills and the ability to work in a team under pressure.",
        "Continued studying frontend development during free time when possible.",
    ],
  },
  {
    title: "Modern Web Development",
    company_name: "Personal Projects",
    icon: selfEducation,
    iconBg: "#E6DEDD",
    date: "Okt 2025 - Present",
    points: [
        "Creating different web applications: landing pages, dashboards, game demos, and real-world interfaces.",
        "Working with React, TypeScript, Tailwind, Three.js, and modern frontend tooling.",
        "Building full-stack applications with Node.js, Express, SQLite/PostgreSQL.",
        "Developing pet-projects: game prototypes, Telegram/Adsgram integrations, TON wallet apps.",
        "Improving code quality using clean architecture principles.",
        "Constantly learning new technologies and improving skills to grow into a top-tier frontend developer.",
    ],
  },
];

const testimonials = [
  {
    company: "ITransition",
    image: certifiсateItransition,
  },

];

const projects = [
  {
    name: "Collection App",
    description:
      "Full-stack app with client, server, and database for managing a personal collection: adding/editing/viewing items.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
        {
            name: "jwt",
            color: "",
        },
        {
            name: "node js",
            color: "blue-text-gradient",
        },
        {
            name: "express",
            color: "green-text-gradient",
        },
        {
            name: "sequelize",
            color: "pink-text-gradient",
        },
        {
            name: "mySQL",
            color: "yellow-text-gradient",
        },
    ],
    image: collections,
    source_code_link: "https://github.com/RRRodion/Server",
  },
  {
    name: "Maps App",
    description:
      "Web application for working with geodata: viewing maps, adding and editing markers, tracking locations, and interacting with the map in real time.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "leaflet",
        color: "red-text-gradient",
      },
    ],
    image: maps,
    source_code_link: "https://github.com/RRRodion/Maps",
  },
  {
    name: "ToDo App",
    description:
      "Simple and user-friendly React web application for task management: adding, deleting, marking as completed, and editing tasks.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/RRRodion/todo-list-react",
  },
];

export { services, technologies, experiences, testimonials, projects };
