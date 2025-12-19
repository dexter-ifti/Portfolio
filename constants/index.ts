interface Project {
  name: string;
  slug: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
    source?: string;
  };
  urls: {
    githubUrl?: string;
    liveUrl?: string;
    [key: string]: string | undefined;
  };
  description: string;
  tags: string[];
}

export const Projects: Project[] = [
  {
    name: "tinyqueue - redis-backed job queue",
    slug: "tinyqueue",
    image: {
      url: "/tinyqueue.png",
      width: 400,
      height: 200,
      alt: "TinyQueue - Redis-Backed Job Queue"
    },
    urls: {
      githubUrl: "https://github.com/dexter-ifti/tinyqueue"
    },
    description: "Redis-backed job queue with FIFO processing, concurrent worker pools, automatic retry with exponential backoff, and real-time job state monitoring.",
    tags: [
      "TypeScript",
      "Express.js",
      "Redis",
      "Bun",
      "Job Queue",
      "Background Workers",
      "FIFO",
      "Exponential Backoff",
      "Real-time Monitoring"
    ]
  },
  {
    name: "streaker",
    slug: "streaker",
    image: {
      url: "/streaker.png",
      width: 400,
      height: 200,
      alt: "Streaker - Habit Tracking Web App"
    },
    urls: {
      liveUrl: "https://streaker.ifti.tech",
      githubUrl: "https://github.com/dexter-ifti/streaker"
    },
    description: "A full-stack habit tracking application with user-friendly interface for tracking habits and streaks. Built with modern tech stack and scalable serverless architecture.",
    tags: [
      "HonoJS",
      "PostgreSQL",
      "Prisma ORM",
      "ReactJS",
      "Tailwind CSS",
      "TypeScript",
      "Cloudflare Workers",
      "Tanstack React Query"
    ]
  },
  {
    name: "mini-cursor",
    slug: "mini-cursor",
    image: {
      url: "/mini-cursor.png",
      width: 400,
      height: 200,
      alt: "Mini-Cursor - AI Coding Assistant"
    },
    urls: {
      githubUrl: "https://github.com/dexter-ifti/mini-cursor"
    },
    description: "A terminal-based AI coding assistant for streamlining full-stack project development with AI capabilities to generate boilerplate code. Integrated LangGraph and LangChain frameworks for advanced AI workflow orchestration and enabled direct command execution from terminal.",
    tags: [
      "Python",
      "LangGraph",
      "LangChain",
      "AI",
      "Terminal",
      "Workflow Orchestration",
      "Code Generation",
      "CLI"
    ]
  },
  {
    name: "customizable caching api",
    slug: "customizable-caching-api",
    image: {
      url: "/cache-api.png",
      width: 400,
      height: 200,
      alt: "Customizable Caching API"
    },
    urls: {
      liveUrl: "https://my-cache-r4kn.onrender.com",
      apiDocUrl: "https://my-cache-r4kn.onrender.com/doc",
      githubUrl: "https://github.com/dexter-ifti/my-cache"
    },
    description: "A RESTful API service implementing a customizable caching system with size limitations, comprehensive documentation, and robust error handling.",
    tags: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "REST API",
      "Redis"
    ]
  },
  {
    name: "paypulse",
    slug: "paypulse",
    image: {
      url: "/paypulse.png",
      width: 400,
      height: 200,
      alt: "PayPulse - Payment App"
    },
    urls: {
      liveUrl: "https://paypulse.ifti.tech",
      githubUrl: "https://github.com/dexter-ifti/PayPulse"
    },
    description: "A Paytm-like payment application enabling secure money transfers and balance checking with robust financial transaction handling and data integrity.",
    tags: [
      "ReactJS",
      "ExpressJS",
      "MongoDB",
      "Tailwind CSS",
      "Zod",
      "JWT",
      "Database Transactions"
    ]
  },
  {
    name: "pencraft",
    slug: "pencraft",
    image: {
      url: "/pencraft.png",
      width: 400,
      height: 200,
      alt: "Pencraft - Blog Website"
    },
    urls: {
      liveUrl: "https://pencraft.ifti.tech",
      githubUrl: "https://github.com/dexter-ifti/Pencraft"
    },
    description: "A dynamic blog platform allowing users to create and modify blog posts with efficient backend operations and optimal database management.",
    tags: [
      "ReactJS",
      "Hono",
      "Cloudflare Workers",
      "PostgreSQL",
      "Prisma ORM",
      "Tailwind CSS",
      "Zod",
      "JWT"
    ]
  },
  {
    name: "social media api",
    slug: "social-media-api",
    image: {
      url: "/social-media-api.png",
      width: 400,
      height: 200,
      alt: "Social Media API"
    },
    urls: {
      githubUrl: "https://github.com/dexter-ifti/anonymous-media"
    },
    description: "A comprehensive backend for a social media app with RESTful APIs for user profiles, friend requests, comment functionality, and enhanced security features.",
    tags: [
      "ExpressJS",
      "MongoDB",
      "JWT",
      "REST API",
      "Password Hashing",
      "Authentication"
    ]
  },
  {
    name: "task manager api",
    slug: "task-manager-api",
    image: {
      url: "/task-manager-api.png",
      width: 400,
      height: 200,
      alt: "Task Manager API"
    },
    urls: {
      githubUrl: "https://github.com/dexter-ifti/task-manager-backend",
      apiUrl: "https://youse-ai-task.vercel.app"
    },
    description: "A backend API for task management with JWT authentication, CRUD operations, filtering/sorting capabilities, and MVC architecture.",
    tags: [
      "Node.js",
      "ExpressJS",
      "JWT",
      "REST API",
      "CRUD Operations",
      "MVC Architecture",
      "Authentication"
    ]
  },
  {
    name: "url shortener",
    slug: "url-shortener",
    image: {
      url: "/url-shortener.png",
      width: 400,
      height: 200,
      alt: "URL Shortener"
    },
    urls: {
      githubUrl: "https://github.com/dexter-ifti/100Xdevs/tree/main/04-react/07-pass-generator"
    },
    description: "A URL shortening service with analytics tracking capabilities, providing shortened URLs for long web addresses.",
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Analytics",
      "URL Shortening"
    ]
  },
  {
    name: "currency converter",
    slug: "currency-converter",
    image: {
      url: "/currency-convertor.png",
      width: 400,
      height: 200,
      alt: "Currency Converter"
    },
    urls: {
      liveUrl: "https://main--gilded-cheesecake-66b01e.netlify.app/",
      githubUrl: "https://github.com/dexter-ifti/currency-converter"
    },
    description: "A real-time currency conversion application with responsive design and custom React hooks for efficient data fetching and state management.",
    tags: [
      "ReactJS",
      "HTML",
      "Tailwind CSS",
      "Custom Hooks",
      "Responsive Design",
      "Real-time Data"
    ]
  },
];