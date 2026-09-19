/* Updated: Personalized and Girly Green Themed Portfolio Config */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Nour Sarikaya",
  title: "Hey! I'm Nour",
  subTitle:
    "I’m a backend-focused developer building reliable Java, Spring Boot, SQL, and REST API solutions with a growing focus on enterprise financial services systems.",
  resumeLink: "./src/containers/greeting/resume.pdf",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/noursarikaya",
  linkedin: "https://www.linkedin.com/in/noursarikaya",
  gmail: "noursarikaya2001@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I Love to Build",
  subTitle:
    "BACKEND DEVELOPER WITH ENTERPRISE AND FINANCIAL SERVICES EXPERIENCE",
  skills: [
    emoji(
      "🛠️ Building maintainable backend services with Java, Spring Boot, and layered architecture"
    ),
    emoji("🔗 Designing RESTful APIs for real business workflows"),
    emoji("📊 Modeling, querying, and validating relational data with SQL"),
    emoji(
      "🧪 Writing cleaner code through testing, debugging, and Git-based collaboration"
    ),
    emoji(
      "🏦 Applying onboarding experience from enterprise financial services client work"
    )
  ],
  softwareSkills: [
    {skillName: "Java", fontAwesomeClassname: "fab fa-java"},
    {skillName: "Spring Boot", fontAwesomeClassname: "fas fa-leaf"},
    {skillName: "REST APIs", fontAwesomeClassname: "fas fa-network-wired"},
    {skillName: "SQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "React", fontAwesomeClassname: "fab fa-react"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "Agile", fontAwesomeClassname: "fas fa-users"}
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Illinois at Urbana-Champaign",
      logo: require("./assets/images/uiucLogo.png"),
      subHeader: "B.S. in Computer Engineering",
      duration: "2022 - 2024",
      desc: "Graduated with hands-on experience in embedded systems, software development, and IoT integration.",
      descBullets: [
        "Worked on smart hardware projects with real-time data feedback",
        "Participated in design and innovation competitions"
      ]
    },
    {
      schoolName: "William Rainey Harper College",
      logo: require("./assets/images/harperLogo.png"),
      subHeader: "Associate in Engineering Science",
      duration: "2019 - 2021",
      desc: "Strong foundation in engineering principles and mathematics"
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "Java & Spring Boot", progressPercentage: "88%"},
    {Stack: "REST API Development", progressPercentage: "86%"},
    {Stack: "SQL & Data Modeling", progressPercentage: "82%"},
    {Stack: "Enterprise Onboarding", progressPercentage: "78%"},
    {Stack: "React & Frontend Integration", progressPercentage: "72%"}
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "Capgemini | Major Financial Services Client",
      date: "2025 – Present",
      desc: "Supporting enterprise onboarding and delivery work for a major financial services client, with a focus on backend systems, team workflows, and client-aligned engineering practices.",
      descBullets: [
        "Completed client onboarding activities and ramped into enterprise standards, tools, and delivery expectations",
        "Collaborated in an Agile environment with attention to documentation, code quality, and secure development practices",
        "Applied Java, Spring Boot, SQL, Git, and API fundamentals to financial services project work"
      ]
    },
    {
      role: "Back-End Developer Trainee",
      company: "Revature Pre-Employment Program",
      companylogo: require("./assets/images/revatureLogo.png"),
      date: "Dec 2024 – Feb 2025",
      desc: "Participated in a full-time backend engineering training program focused on Java, Spring Boot, SQL, and RESTful APIs.",
      descBullets: [
        "Built RESTful APIs using Spring Boot with Test Driven Development principles",
        "Gained practical experience with Java, SQL, and REST API construction",
        "Practiced object-oriented programming and version control using Git"
      ]
    }
  ]
};
const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Featured Projects",
  subtitle: "A FEW CREATIONS I'M PROUD OF",
  projects: [
    {
      image: require("./assets/images/blogApiLogo.png"),
      projectName: "Card Management System",
      projectDesc:
        "Built a backend card management application focused on account workflows, data persistence, and service-layer organization.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/NourSarikaya/card-management-system.git"
        }
      ]
    },
    {
      image: require("./assets/images/blogApiLogo.png"),
      projectName: "Spring Social Media Blog API",
      projectDesc:
        "Developed a RESTful API for a social media platform using Spring Boot, with features like user authentication and CRUD operations.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/NourSarikaya/Spring-Social-Media-Blog-API.git"
        }
      ]
    },
    {
      image: require("./assets/images/catLaserLogo.png"),
      projectName: "Interactive Laser Toy",
      projectDesc:
        "Designed random path generator and sensor integration for a cat laser toy using Python, LiDAR, and motion sensors.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/NourSarikaya/CatLaserTowerProject.git"
        }
      ]
    },
    {
      image: require("./assets/images/kernelLogo.png"),
      projectName: "Functional Kernel",
      projectDesc:
        "Built a minimal functional kernel using C and x86 Assembly, with IDT, syscalls, terminal driver, and basic scheduling.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/NourSarikaya/Functional-Kernel.git"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements 🏆"),
  subtitle: "Recognitions and certifications from my journey in tech",
  achievementsCards: [],
  display: false
};

const blogSection = {
  title: "My Blog",
  subtitle: "Writing about things I learn and love",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "Talks",
  subtitle: emoji("Knowledge Sharing 📚"),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎵"),
  subtitle: "Occasional conversations on tech & creativity",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Take a look at my resume or download it",
  display: true
};

const contactInfo = {
  title: emoji("Let's Connect"),
  subtitle:
    "Open to backend engineering opportunities, collaboration, and meaningful tech conversations.",
  number: "",
  email_address: "noursarikaya2001@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
