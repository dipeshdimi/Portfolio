import {
  CodeBracketIcon,
  SparklesIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon,
  PencilIcon
} from "@heroicons/react/24/outline";

import portfolioImg1 from "/portfolio/1.png";
import portfolioImg2 from "/portfolio/2.png";
import portfolioImg3 from "/portfolio/3.gif";
import portfolioImg4 from "/portfolio/4.png";
import portfolioImg5 from "/portfolio/5.png";
import portfolioImg6 from "/portfolio/6.png";
import portfolioImg7 from "/portfolio/7.png";
import portfolioImg8 from "/portfolio/8.png";
import portfolioImg9 from "/portfolio/9.png";
import portfolioImg10 from "/portfolio/10.png";
import portfolioImg11 from "/portfolio/11.png";
import portfolioImg12 from "/portfolio/12.png";

export interface NavbarInterface {
  name: string;
  href: string;
}
export const navbar: NavbarInterface[] = [
  { name: "home", href: "#hero" },
  { name: "skills", href: "#skills" },
  { name: "portfolio", href: "#portfolio" },
  { name: "education & experience", href: "#timeline" },
];

export interface navigationInterface {
  solutions: {
    name: string;
    href: string;
  }[];
  support: {
    name: string;
    href: string;
    info?: string;
  }[];
  socials: {
    name: string;
    href: string;
    info?: string;
  }[];
}

export interface skillsListInterface {
  id: number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  content: string;
}
export const SkillsList: skillsListInterface[] = [
  {
    id: 1,
    icon: CodeBracketIcon,
    title: "Programming Languages",
    content:
      "C, C++, Python, JavaScript & TypeScript",
  },
  {
    id: 2,
    icon: SparklesIcon,
    title: "Front End Technologies",
    content:
      "HTML, CSS, JavaScript, TypeScript, React.js, Next.js, SCSS, Bootstrap, Mantine & Bootstrap",
  },
  {
    id: 3,
    icon: WrenchScrewdriverIcon,
    title: "Back End Technologies",
    content:
      "Node.js, Express.js, Google Firebase & EJS",
  },
  {
    id: 4,
    icon: CircleStackIcon,
    title: "Databases",
    content:
      "MySQL & NoSQL (MongoDB, Google Firestore)",
  },
  {
    id: 5,
    icon: PencilIcon,
    title: "Tools",
    content:
      "Postman, Git, Figma & Tableau",
  },
];

export interface PortfolioInterface {
  id: number;
  image: string;
  title: string;
  stack: string;
  liveLink?: string;
  githubLink?: string;
  description: string;
}

export const Portfoio: PortfolioInterface[] = [
  {
    id: 1,
    image: portfolioImg1,
    title: "TechOn Pixel",
    stack: "Front End Project",
    liveLink: "https://www.techonpixel.com/about",
    description: "TechOn Pixel's website I worked on while interning there. Built using Next.js, Typescript & SCSS."
  },
  {
    id: 2,
    image: portfolioImg2,
    title: "National People's Party",
    stack: "Front End Project",
    liveLink: "https://npp-self.vercel.app/en-US/home",
    description: "Client project during my internship at TechOn Pixel - National People's Party (NPP). Built using Next.js, Typescript & SCSS."
  },  
  {
    id: 3,
    image: portfolioImg3,
    title: "Gitfolio Tracker*",
    stack: "Full Stack Project",
    liveLink: "https://gitfolio-tracker.onrender.com/",
    githubLink: "https://github.com/dipeshdimi/Gitfolio-Tracker",
    description: "Track, explore, and manage GitHub profiles and repositories (built using MERN stack)."
  },
  {
    id: 4,
    image: portfolioImg4,
    title: "Real-Time Chat Application",
    stack: "Full Stack Project",
    liveLink: "https://chat-application-m55y.vercel.app/",
    githubLink: "https://github.com/dipeshdimi/ChatApp",
    description: "A chat application built using React, Firebase (Firestore database), CSS, and EmailJS (for OTP verification)."
  },
  {
    id: 5,
    image: portfolioImg5,
    stack: "Machine Learning Project",
    title: "Credit Card Fraud Detection System",
    liveLink: "https://colab.research.google.com/drive/1B1IJKPkXi4PAGA9NjJeBSmEQlck9u55-?usp=sharing",
    githubLink: "https://github.com/dipeshdimi/Credit_Card_Fraud_Detection",
    description: "A logistic regression based machine learning model for detecting fraudulent credit card transactions."
  },
  {
    id: 6,
    image: portfolioImg6,
    title: "E-Commerce Store",
    stack: "Front End Project",
    liveLink: "https://e-commerce-roan-nu.vercel.app/",
    githubLink: "https://github.com/dipeshdimi/E-Commerce",
    description: "Simple E-Commerce web app fetching products from FakeStoreAPI, featuring search, category filtering, and responsive design for seamless user interaction."
  },
  {
    id: 7,
    image: portfolioImg7,
    title: "Text Utility Application",
    stack: "Front End Project",
    liveLink: "https://text-utility-application.vercel.app/",
    githubLink: "https://github.com/dipeshdimi/Text-Utility-Application",
    description: "Text Utility Application built with React & Bootstrap5"
  },
  {
    id: 8,
    image: portfolioImg8,
    title: "Wellness Retreat",
    stack: "Front End Project",
    liveLink: "https://wellness-retreat-rust.vercel.app/",
    githubLink: "https://github.com/dipeshdimi/Wellness-Retreat",
    description: "A React-based responsive web application platform for booking wellness retreats, featuring options to filter retreats by date and type, and a search functionality to find specific retreats."
  },
  {
    id: 9,
    image: portfolioImg9,
    title: "Message Board",
    stack: "Full Stack Project",
    githubLink: "https://github.com/dipeshdimi/Message-Board",
    description: "A message board web application for displaying and posting notices, with three API endpoints - 2 GET & 1 POST."
  },
  {
    id: 10,
    image: portfolioImg10,
    title: "Resume Builder Application",
    stack: "Front End Project",
    liveLink: "https://resume-builder-application.vercel.app/",
    githubLink: "https://github.com/dipeshdimi/Resume_Builder_Application",
    description: "Resume Builder Web Application in React.js"
  },
  {
    id: 11,
    image: portfolioImg11,
    title: "Telegram UI Clone",
    stack: "Front End Project",
    liveLink: "https://telegram-beyond-chats.vercel.app/",
    githubLink: "https://github.com/dipeshdimi/Telegram_BeyondChats",
    description: "A React-based web application that simulates a responsive messaging interface similar to Telegram."
  },
  {
    id: 12,
    image: portfolioImg12,
    title: "URL Shortener Service",
    stack: "Back End Project",
    githubLink: "https://github.com/dipeshdimi/URLShortener",
    description: "URL Shortening Backend Service using Node, Express and MongoDB."
  },
];
