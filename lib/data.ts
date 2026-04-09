export const projects = [
  {
    id: 1,
    title: "Eduhakyo",
    category: "Learning Management System",
    year: "2025",
    image: "/projects/eduhakyo/thumbnail.jpg",
    description:
      "A comprehensive Learning Management System (LMS) tailored for Korean language education. It streamlines the learning process by integrating automated Zoom meeting notifications, ensuring students and teachers never miss a session.",
    client: "Eduhakyo",
    role: "Fullstack Developer",
    stack: "Next.js, Tailwind CSS, Django, PostgreSQL",
    live: "https://main.d25wm2ilpkytv2.amplifyapp.com/",
    challenge:
      "The primary challenge was translating a highly complex and intricate UI/UX design into a functional web application. The design required pixel-perfect precision while maintaining high performance and responsiveness across devices.",
    solution:
      "I leveraged Tailwind CSS to efficiently handle the complex styling requirements, reducing CSS bloat. To ensure scalability and maintainability, I architected a system of reusable UI components, allowing for rapid development and consistent design across the entire platform.",
    images: [
      "/projects/eduhakyo/eduhakyo-1.png",
      "/projects/eduhakyo/eduhakyo-2.png",
      "/projects/eduhakyo/eduhakyo-3.png",
      "/projects/eduhakyo/eduhakyo-4.png",
      "/projects/eduhakyo/eduhakyo-5.png",
      "/projects/eduhakyo/eduhakyo-6.png",
      "/projects/eduhakyo/eduhakyo-7.png",
    ],
  },
  {
    id: 2,
    title: "Bistem",
    category: "Enterprise Resource Planning",
    year: "2023",
    image: "/projects/bistem/thumbnail.jpg",
    description:
      "An advanced Enterprise Resource Planning platform designed to digitize and streamline complex hiring workflows. It serves as a central hub for managing candidate data, automated scoring, and resource budgeting with high precision.",
    client: "Bistem",
    role: "Fullstack Developer",
    stack: "Next.js, Tailwind CSS, Django, PostgreSQL",
    live: "https://bismart.bistem.co.id/",
    challenge:
      "The project involved dealing with highly complex calculation models for candidate scoring and budget forecasting. Previous manual methods (spreadsheets) were prone to human error and could not handle the dynamic variables required for multi-tiered recruitment scenarios.",
    solution:
      "I engineered a robust backend calculation engine using Python (Django) to automate these intricate formulas. This system processes data in real-time, ensuring 100% accuracy in scoring and budgeting while drastically reducing the time needed for administrative tasks.",
    images: [
      "/projects/bistem/bistem-1.png",
      "/projects/bistem/bistem-2.png",
      "/projects/bistem/bistem-3.png",
      "/projects/bistem/bistem-4.png",
    ],
  },
  {
    id: 3,
    title: "Politeknik Meta Industri",
    category: "Landing Page",
    year: "2025",
    image: "/projects/poltekmeta/thumbnail.jpg",
    description:
      "The official digital gateway for Politeknik Meta Industri, designed to establish institutional credibility. The platform serves as a primary information hub for prospective students, focusing on clarity, professionalism, and ease of access.",
    client: "Politeknik Meta Industri",
    role: "Frontend Developer",
    stack: "Next.js, Tailwind CSS",
    live: "https://politeknikmeta.maleotech.id/",
    challenge:
      "The main challenge was strictly on Visual Communication and UX. The institution required a digital presence that reflects professionalism and academic rigor without feeling outdated or cluttered. The goal was to organize diverse academic information into a structure that is intuitive for students and partners.",
    solution:
      "I implemented a modern, minimalist design approach using Tailwind CSS to ensure visual consistency and a formal tone. By utilizing Next.js, I optimized the site for high performance and SEO, ensuring fast load times and a seamless browsing experience that reinforces the institution's reliable image.",
    images: [
      "/projects/poltekmeta/poltekmeta-1.png",
      "/projects/poltekmeta/poltekmeta-2.png",
      "/projects/poltekmeta/poltekmeta-3.png",
      "/projects/poltekmeta/poltekmeta-4.png",
    ],
  },
  {
    id: 4,
    title: "Exam Educourse",
    category: "Computer-Based Test Platform",
    year: "2022",
    image: "/projects/exam/thumbnail.jpg",
    description:
      "A secure and robust Computer-Based Test (CBT) platform designed to facilitate large-scale online examinations with high reliability. It focuses on exam integrity, minimizing latency, and providing a distraction-free interface for students.",
    client: "Educourse",
    role: "Fullstack Developer",
    stack: "Next.js, Tailwind CSS, Django, PostgreSQL, Redis",
    live: "https://exam.educourse.id/",
    challenge:
      "The critical challenges were ensuring exam integrity (preventing cheating) and data persistence under unstable network conditions. Additionally, the system needed to handle high concurrency when hundreds of students submit answers simultaneously without crashing the server or causing latency.",
    solution:
      "I engineered a fault-tolerant system with auto-save functionality that syncs answers to the backend while keeping a local backup to prevent data loss. I implemented server-side timer validation to prevent manipulation and browser event listeners (visibility change, context menu block) to detect and mitigate cheating attempts.",
    images: [
      "/projects/exam/exam-1.png",
      "/projects/exam/exam-2.png",
      "/projects/exam/exam-3.png",
      "/projects/exam/exam-4.png",
    ],
  },
];

export const experiences = [
  {
    id: 1,
    year: "Mar 2026 — Present",
    company: "PT. KMS Konsultasi Solusi",
    role: "Full Stack Developer",
    description:
      "Contributing to the development of a cutting-edge SaaS platform for. Collaborating with cross-functional teams to implement new features and optimize existing ones using Next.js and Azure Cosmos DB. Gaining hands-on experience in cloud-based application development and deployment.",
    stack: ["Typescript", "Tailwindcss", "Azure Cosmos DB", "Azure Functions"],
    images: [],
  },
  {
    id: 2,
    year: "Nov 2024 — Nov 2025",
    company: "PT. Maleo Teknologi Indonesia",
    role: "Full Stack Developer",
    description:
      "Responsible for developing enterprise web applications from scratch. Collaborating closely with the team to translate complex business requirements into functional features using Next.js and Django. Actively involved in solving technical challenges and ensuring system stability.",
    stack: ["Next.js", "Django", "PostgreSQL", "Tailwind CSS"],
    images: [
      "/moments/fulltime/fulltime-1.png",
      "/moments/fulltime/fulltime-2.jpeg",
      "/moments/fulltime/fulltime-3.jpeg",
      "/moments/fulltime/fulltime-4.jpeg",
    ],
  },
  {
    id: 3,
    year: "Jan 2024 — Nov 2024",
    company: "Freelance",
    role: "Full Stack Developer",
    description:
      "Delivered end-to-end web solutions for diverse clients independently. Specialized in translating client requirements into robust applications. Managed timeline estimation and full-stack implementation, reinforcing self-management and problem-solving skills.",
    stack: ["React", "Node.js", "Tailwind CSS", "MongoDB"],
    images: [],
  },
  {
    id: 4,
    year: "Aug 2023 — Dec 2023",
    company: "PT. Maleo Teknologi Indonesia",
    role: "Full Stack Developer Intern",
    description:
      "Contributed to critical web applications in a cross-functional agile environment. Engineered robust RESTful APIs and seamless frontend interfaces using Next.js and MongoDB. Collaborated closely with senior developers to optimize application performance.",
    stack: ["Next.js", "MongoDB", "Express", "Vercel"],
    images: [
      "/moments/intern/intern-1.JPG",
      "/moments/intern/intern-6.jpeg",
      "/moments/intern/intern-2.jpg",
      "/moments/intern/intern-3.JPG",
      "/moments/intern/intern-4.JPG",
      "/moments/intern/intern-5.jpg",
    ],
  },
  {
    id: 5,
    year: "Jun 2023 — Aug 2023",
    company: "East Java Manpower Dept.",
    role: "Software Engineer Intern",
    description:
      "Spearheaded the digitalization of internal employee management through 'SIKANGEN'. Architected the backend using CodeIgniter 4 and MySQL, significantly improving administrative efficiency and data accuracy for the government department.",
    stack: ["CodeIgniter 4", "MySQL", "Bootstrap", "PHP"],
    images: [],
  },
  {
    id: 6,
    year: "Feb 2023 — Jun 2023",
    company: "Alterra Academy",
    role: "Front-End Engineering Mentee",
    description:
      "Completed an intensive engineering bootcamp focused on the React ecosystem. Mastered component-based architecture, state management, and collaborative workflows using Git, setting a strong foundation for professional development.",
    stack: ["React.js", "Redux", "Git", "REST API", "GraphQL"],
    images: [
      "/moments/alta/alta-1.jpg",
      "/moments/alta/alta-2.png",
      "/moments/alta/alta-3.png",
      "/moments/alta/alta-4.png",
    ],
  },
];
