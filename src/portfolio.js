/* Updated: Personalized and Girly Green Themed Portfolio Config */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 

const splashScreen = {
  enabled: false,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: false
};

const greeting = {
  username: "Nour Sarikaya",
  title: "Hey! I'm Nour",
  subTitle: (
    "I’m a backend-focused developer who blends logic and creativity 💡. I love Python, system design, and bringing tech ideas to life with purpose and clarity."
  ),
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
  subTitle: "BACKEND ENTHUSIAST WITH A PASSION FOR SYSTEMS AND DATA",
  skills: [
    emoji("🛠️ Building scalable and maintainable backend services with Java and Spring Boot"),
    emoji("🔗 Designing and consuming RESTful APIs"),
    emoji("🧠 Applying object-oriented design and system design principles"),
    emoji("📊 Managing and querying relational databases using SQL")
  ],
  softwareSkills: [
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Spring Boot", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" }
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
    { Stack: "Backend Development", progressPercentage: "85%" },
    { Stack: "System Design & Architecture", progressPercentage: "75%" },
    { Stack: "Database Management", progressPercentage: "80%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
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
      image: require("./assets/images/catlaserLogo.png"),
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
          url: "https://github.com/NourSarikaya/Functional-Kernel.git"        }
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
  subtitle: "Feel free to reach out for collaboration or just a chat",
  number: "773-225-01-72",
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

