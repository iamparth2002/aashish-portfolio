export const DATA = {
  resumeId: 1,
  name: 'Aashish Mandal',
  location: 'New Delhi, India',
  initials: 'DV',
  url: '',
  locationLink: '',
  description:
    'Software Developer who enjoys turning ideas into reality and solving complex problems. Always exploring new technologies. Active contributor on GitHub and Twitter.',
  summary:
    'Software Developer who juggles front-end and back-end code like a circus performer. I build web apps that look great, work smoothly, and might even make you laugh while you’re using them. In the past, I pursued a bachelor degree in Artificial Intelligence and Data Science, interned at bubbling startups , and built my own projects for fun. ',
  contact: {
    email: 'aashishmandal627@gmail.com',
    tel: '+91 8102-833-782',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/aashish18-mandal',
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/aashish-mandal-b39b5122b/',
      },
      X: {
        name: 'X',
        url: '',
      },
    },
  },
  work: [
    {
      company: 'Yatiken Software Solutions',
      href: '',
      badges: [],
      location: 'New Delhi, India',
      title: 'Full Stack Developer',
      logoUrl: '/bi.png',
      start: 'Mar 2024',
      end: 'Jun 2024',
      list: [
        `Developed full stack web applications using modern technologies like Next.js, React, Node.js, and Firebase, enhancing user experience and performance.`,
        `Collaborated with cross-functional teams to design, build, and maintain scalable RESTful APIs and server-side applications, improving operational efficiency.`,
        `Implemented robust authentication and role-based access control in multiple projects using tools like Clerk and JWT, ensuring secure and seamless user access.`,
      ],
      description: `Developed The Colorants, a full stack web application, handling both frontend (Next.js, Zod, React Hook Form, Tailwind CSS, ShadCN) and backend (Node.js, Express, MongoDB, Mongoose, Cloudinary for image storage), including deployment on AWS.`,
      technologies: [
        'Next.js',
        'Next Auth',
        'TailwindCSS',
        'MongoDB',
        'NodeJS',
        'Express',
        'MongoDB',
        'AWS',
        'ReactJS',
      ],
    },
    {
      company: 'VNIT Nagpur',
      href: '',
      badges: [],
      location: 'Nagpur, India',
      title: 'Cloud Computing Intern',
      logoUrl: '/accent-technosoft.png',
      start: 'Dec 2022',
      end: 'Jan 2023',
      list: [
       `Assisted in deploying and managing cloud-based infrastructure using AWS and Google Cloud, optimizing system performance and scalability.`,
       `Supported the implementation of cloud storage solutions and automated backup processes, ensuring data security and disaster recovery.`,
       `Collaborated on cloud-native application development by leveraging containerization tools like Docker and Kubernetes, improving deployment efficiency.`
      ],
      technologies: ['Python', 'SQL', 'AWS'],
    },
  ],
  projects: [
    {
      title: 'Youtube Clone',
      href: 'https://minimalist-youtube.vercel.app/',
      active: true,
      description:
        'YouTube clone Web Application created using ReactJS and Axios',
      technologies: ['React.js', 'Axios', 'TailwindCSS', 'Shadcn UI'],
      github: 'https://github.com/iamparth2002/promptopia-app',
      source: 'https://minimalist-youtube.vercel.app/',
      image: '/yt_clone.png',
    },
    {
      title: 'Filmpire',
      href: 'https://filmpire-wine.vercel.app/',
      active: true,
      description:
        'Web Application that provides all necessary information about movies and TV series ',
      technologies: [
        'Next.js',
        'Typescript',
        'Firestore',
        'Resend',
        'Firebase',
        'TailwindCSS',
        'Shadcn UI',
        'Magic UI',
      ],
      github: 'https://github.com/iamparth2002/cloudNova',
      source: 'https://filmpire-wine.vercel.app/',
      image: '/filmpire.png',
    },
    {
      title: 'CoinSearch',
      href: 'https://coin-search-app-delta.vercel.app/',
      active: true,
      description:
        '"Developed an AI-powered Resume Builder application enabling users to add information dynamically with AI assistance.',
      technologies: [
        'React.js',
        'Redux',
        'Tailwind CSS',
        'Material UI',
        'Axios',
      ],
      github: 'https://github.com/iamparth2002/ai-resume-builder',
      source: 'https://coin-search-app-delta.vercel.app/',
      image: '/restaurant.png',
    },
  ],
};
