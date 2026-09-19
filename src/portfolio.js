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
    "I’m a Data Engineer focused on data migration, validation, ETL pipelines, and automation. I work across Ab Initio, AWS S3, Control-M, Python, Shell, SQL, Java, and Spring Boot to build reliable systems for enterprise financial services workflows.",
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
  title: "What I Build",
  subTitle: "DATA ENGINEER WITH FINANCIAL SERVICES MIGRATION EXPERIENCE",
  skills: [
    emoji(
      "⚙️ Building and maintaining Ab Initio graphs for account validation and migration workflows"
    ),
    emoji("☁️ Automating reports and file movement across AWS S3 pipelines"),
    emoji(
      "📊 Creating DMLs, validating new data feeds, and monitoring pipeline health"
    ),
    emoji(
      "🛠️ Using Python, Shell, Control-M, GitHub, and SQL to support bank merger integration work"
    ),
    emoji(
      "🔐 Applying Java Spring Boot experience to secure card management and API projects"
    )
  ],
  softwareSkills: [
    {skillName: "Java", fontAwesomeClassname: "fab fa-java"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "SQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Shell Scripting", fontAwesomeClassname: "fas fa-terminal"},
    {skillName: "AWS S3", fontAwesomeClassname: "fab fa-aws"},
    {skillName: "Ab Initio", fontAwesomeClassname: "fas fa-project-diagram"},
    {skillName: "Control-M", fontAwesomeClassname: "fas fa-clock"},
    {skillName: "Spring Boot", fontAwesomeClassname: "fas fa-leaf"},
    {skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"}
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
        "Worked on smart hardware projects with real-time data feedback"
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
    {Stack: "Data Migration & Validation", progressPercentage: "88%"},
    {Stack: "ETL Pipelines & Ab Initio", progressPercentage: "84%"},
    {Stack: "Python & Shell Automation", progressPercentage: "82%"},
    {Stack: "AWS S3 & Control-M", progressPercentage: "78%"},
    {Stack: "Java Spring Boot APIs", progressPercentage: "76%"}
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Data Engineer",
      company: "Capgemini | Client: Major Financial Institution",
      companylogo: require("./assets/images/capgeminiLogo.svg"),
      date: "Jan 2026 – Sep 2026",
      desc: "Supported bank merger integration work across data migration, validation, automation, and pipeline monitoring.",
      descBullets: [
        "Built and maintained Ab Initio graphs for account validation with automated email alerting",
        "Developed Python and Shell tooling deployed via Control-M to generate migration reports from AWS S3 buckets",
        "Created Data Movement Layouts (DMLs) for onboarding new data feeds and validated them through account/control checks and Ab Initio parsing",
        "Developed automated variance-reporting and file-transfer scripts to flag abnormal ingress volume and manage movement between S3 buckets",
        "Provided overnight coverage and pipeline updates during migration events across Control-M, GitHub, Ab Initio, Python, Shell, and AWS"
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
        "Delivered a Java Spring Boot application with secure card data management, customer profiles, identity verification, Basic Auth + JWT authentication, PostgreSQL, and Swagger/OpenAPI documentation.",
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
  subtitle: "Open to both data engineering and software engineering positions.",
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
