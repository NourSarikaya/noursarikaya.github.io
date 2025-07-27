/* Updated: Personalized and Girly Green Themed Portfolio Config */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: false
};

const greeting = {
  username: "Nour Sarikaya",
  title: "Hi there, I'm Nour ✨",
  subTitle: emoji(
    "A creative and passionate developer 🌱 who loves crafting elegant, user-friendly experiences with JavaScript, React, and Python. Currently exploring ways to blend tech with everyday life."
  ),
  resumeLink: "./src/containers/greeting/resume.pdf",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/noursarikaya",
  linkedin: "https://www.linkedin.com/in/noursarikaya",
  gmail: "your-email@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I Love to Build",
  subTitle: "SOFTWARE CREATOR WITH A FLAIR FOR DESIGN AND FUNCTIONALITY",
  skills: [
    emoji("✨ Beautiful and accessible UIs with React and CSS"),
    emoji("🔍 Exploring clean and efficient backend systems"),
    emoji("🌟 Building real-world apps with purpose and style")
  ],
  softwareSkills: [
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "sass", fontAwesomeClassname: "fab fa-sass" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "nodejs", fontAwesomeClassname: "fab fa-node" },
    { skillName: "sql-database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" }
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
  experience: []
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Featured Projects",
  subtitle: "A FEW CREATIONS I'M PROUD OF",
  projects: [],
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
  title: emoji("Let's Connect 📢"),
  subtitle: "Feel free to reach out for collaboration or just a chat",
  number: "",
  email_address: "your-email@gmail.com"
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

