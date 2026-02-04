const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 12, suffix: "+", label: "Satisfied Clients" },
  { value: 21, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "\"Zach brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.\"",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2024 - Nov 2025",
    responsibilities: [
      "Developed and maintained user-facing features for the Crucial Tools website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review: "\"Working with Zach was a game-changer for Gamers Arena. He crafted our entire e-commerce platform from scratch, delivering an intuitive, lightning-fast shopping experience that our customers love. His technical expertise and creative vision transformed our online presence completely.\"",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer (Freelancing)",
    date: "June 2023 - December 2023",
    responsibilities: [
      "Designed and developed Gamers Arena's compl\n" +
      "    logoPath: \"/images/logo3.png\",\n" +
      "    title: \"React Native Developer\",\n" +
      "    date: \"March 2024 - Nov 2024ete e-commerce platform from scratch, focusing on performance and user experience.",
      "Integrated payment gateways, inventory management APIs, and shopping cart functionality for seamless transactions.",
      "Implemented responsive design and optimized page load speeds, resulting in improved conversion rates and customer satisfaction.",
    ],
  },
  {
    review: "\"Zach reached out to The Nairobi Hospital with AfyaPulse, a patient appointment booking solution that directly addresses our scheduling challenges. His demo and user guide clearly showed us what the system could do, and we were impressed. The interface is clean and intuitive, easy for patients to use while giving our medical staff the tools they need to manage appointments efficiently. What really stood out was how the system captures the most relevant patient information, ensuring appointments are scheduled appropriately and our physicians come prepared. We're exploring integration options and genuinely believe AfyaPulse could enhance both patient satisfaction and our operational workflow.\"",
    imgPath: "/images/exp3.png",
    responsibilities: [
      "Designed and developed AfyaPulse from the ground up using Next.js and TypeScript, creating a scalable, type-safe patient appointment booking system with modern web standards.",
      "Leveraged Appwrite's backend services to handle user authentication, database operations, and file storage, ensuring secure management of sensitive patient health information and appointment data.",
      "Implemented sophisticated form validation using Zod schemas combined with Shadcn UI components, creating an intuitive booking interface that guides patients through the appointment scheduling process while preventing data entry errors.",
      "Integrated Twilio's messaging API to automate SMS notifications for appointment confirmations, reminders, and updates, significantly reducing no-show rates and improving patient-physician communication.",
      "Deployed Sentry monitoring to track application performance, detect runtime errors, and analyze user interactions, enabling data-driven improvements to the booking workflow and user experience.",
      "Optimized the platform's performance through code splitting, lazy loading, and Next.js server-side rendering, resulting in lightning-fast page loads and seamless navigation for users on all devices.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Nelson Kimani",
    mentions: "96kimnel@gmail.com",
    review:
      "I can't say enough good things about Zach. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Rachael Wangui",
    mentions: "rachaelgitau203@gmail.com",
    review:
        "Collaborating with Zach was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Zach's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Zach is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Magdalene Wanjiru",
    mentions: "gkmagdalene00@gmail.com",
    review:
        "Working with Zach was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },

]

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];


const myProjects = [
  {
    name: "NexBank",
    description:
      "Everyday banking made simple with NexBank, a powerful and easy-to-use app. A web app built with React, JavaScript, & TailwindCSS for a fast, user-friendly experience.",
    tags: [
      {
        name: "react",
        color: "text-blue-500",
      },
      {
        name: "javascript",
        color: "text-yellow-500",
      },
      {
        name: "tailwindcss",
        color: "text-cyan-500",
      },
    ],
    image: "/images/project1.png",
    source_code_link: "https://github.com/bjornmoggy001/NexBank",
    live_link: "https://nexbank-app.vercel.app/",
  },
  {
    name: "CoinVault",
    description:
      "Crypto Screener App with a built-in High-Frequency Terminal & Dashboard for tracking and analyzing cryptocurrency markets in real-time.",
    tags: [
      {
        name: "nextjs",
        color: "text-blue-500",
      },
      {
        name: "coingecko_api",
        color: "text-green-500",
      },
      {
        name: "inngest",
        color: "text-purple-500",
      },
    ],
    image: "/images/project5.png",
    source_code_link: "https://github.com/bjornmoggy001/CoinVault",
    live_link: "https://coinvault-one.vercel.app/",
  },
  {
    name: "Vixa",
    description:
        "AI Video Editing SaaS platform that enables users to edit videos using artificial intelligence, automating complex editing tasks with ease.",
    tags: [
      {
        name: "nextjs",
        color: "text-blue-500",
      },
      {
        name: "ai",
        color: "text-pink-500",
      },
      {
        name: "saas",
        color: "text-orange-500",
      },
    ],
    image: "/images/project3.png",
    source_code_link: "https://github.com/bjornmoggy001/Vixa",
    live_link: "https://vixa-ai.vercel.app",
  },

  {
    name: "AfyaPulse",
    description:
        "Say goodbye to long wait times with AfyaPulse, an intelligent patient appointment booking system. A full-stack solution built with Next.js, TypeScript, & Appwrite for efficient healthcare management..",
    tags: [
      {
        name: "react",
        color: "text-blue-500",
      },
      {
        name: "javascript",
        color: "text-yellow-500",
      },
      {
        name: "tailwindcss",
        color: "text-cyan-500",
      },
      {
        name: "appwrite",
        color: "text-red-500",
      },
    ],
    image: "/images/project2.png",
    source_code_link: "https://github.com/bjornmoggy001/AfyaPulse",
    live_link: "https://afya-pulse-healthcare.vercel.app",
  },
  {
    name: "Horizon Bank",
    description:
        "Horizon is a modern banking platform for everyone. Manage all your bank accounts effortlessly in one dashboard, powered by Plaid and Dwolla for secure, seamless integration.",
    tags: [
      {
        name: "nextjs",
        color: "text-blue-500",
      },
      {
        name: "typescript",
        color: "text-green-500",
      },
      {
        name: "plaid",
        color: "text-purple-500",
      },
      {
        name: "dwolla",
        color: "text-green-500",
      },
      {
        name: "appwrite",
        color: "text-purple-500",
      },
    ],
    image: "/images/project4.png",
    source_code_link: "https://github.com/bjornmoggy001/Horizon-Bank",
    live_link: "https://horizon-bank-io.vercel.app/",
  },
  {
    name: "Gamers Arena",
    description:
        "Gamers Arena is your battleground for the latest gaming accessories. Discover premium consoles, controllers, headsets, keyboards, and more. Built for champions who play to win!",
    tags: [
      {
        name: "nextjs",
        color: "text-blue-500",
      },
      {
        name: "typescript",
        color: "text-pink-500",
      },
      {
        name: "appwrite",
        color: "text-orange-500",
      },
    ],
    image: "/images/project6.png",
    source_code_link: "https://github.com/bjornmoggy001/vixa",
    live_link: "https://gamers-arena.vercel.app",
  },


];

// UPDATE YOUR EXPORT STATEMENT - Add myProjects to the list
export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  myProjects, // ADD THIS LINE
};