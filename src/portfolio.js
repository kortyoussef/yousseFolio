/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Youssef Kort",
  title: "Hi all, I'm Youssef",
  subTitle: emoji(
    "A creative and versatile tech enthusiast 🚀 with hands-on experience in developing Game Projects using Unity/C#, crafting Visual Designs with tools like Photoshop and Illustrator, and building smart IoT solutions using Python, microcontrollers, and real-time data. Passionate about blending code, creativity, and hardware to solve real-world problems."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1BPsvEPAyEN9Nme8NCfOHkgpfN91li_NK/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kortyoussef",
  linkedin: "https://www.linkedin.com/in/youssef-kort/",
  gmail: "kortyoussef93@gmail.com",
  facebook: "https://www.facebook.com/youssef.kort",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "MULTI-TALENTED CREATOR WHO LOVES TO CODE GAMES, DESIGN GRAPHICS, AND BUILD SMART IOT SYSTEMS 🚀",
  skills: [
    emoji(
      "⚡ Develop highly interactive front-end interfaces, engaging games, smart IoT systems, and stunning graphic visuals for web, mobile, and embedded platforms."
    ),
    emoji("⚡ Creating engaging web & mobile apps, immersive games, eye-catching designs, and smart IoT solutions using modern tech stacks"),
    emoji(
      "A passionate full-stack creator 🚀 skilled in building games with Unity, designing graphics with Adobe tools, and developing IoT projects using Python and hardware. Always eager to learn and explore new technologies."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
  skillName: "html-5",
  fontAwesomeClassname: "fab fa-html5"
},
{
  skillName: "css3",
  fontAwesomeClassname: "fab fa-css3-alt"
},
{
  skillName: "JavaScript",
  fontAwesomeClassname: "fab fa-js"
},
{
  skillName: "reactjs",
  fontAwesomeClassname: "fab fa-react"
},
{
  skillName: "sql-database",
  fontAwesomeClassname: "fas fa-database"
},
{
  skillName: "python",
  fontAwesomeClassname: "fab fa-python"
},
{
  skillName: "unity",
  fontAwesomeClassname: "fab fa-unity"
},
{
  skillName: "nodejs",
  fontAwesomeClassname: "fab fa-node-js"
},
{
  skillName: "git",
  fontAwesomeClassname: "fab fa-git-alt"
},
{
  skillName: "linux",
  fontAwesomeClassname: "fab fa-linux"
},
{
  skillName: "photoshop",
  fontAwesomeClassname: "fab fa-adobe"
},
{
  skillName: "illustrator",
  fontAwesomeClassname: "fab fa-adobe"
},
{
  skillName: "blender",
  fontAwesomeClassname: "fas fa-cube"
},
{
  skillName: "figma",
  fontAwesomeClassname: "fab fa-figma"
},
{
  skillName: "plsql",
  fontAwesomeClassname: "fas fa-database"
},
{
  skillName: "vhdl",
  fontAwesomeClassname: "fas fa-microchip"
}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Faculté des Sciences de Tunis",
      logo: require("./assets/images/FSTLOGO.svg.png"),
      subHeader: "license in comuter engineering",
      duration: "September 2023 - Present",
      desc: "Currently pursuing a license in computer engineering with a focus on software development and IoT systems.",
      descBullets: [
        "Participating in various projects related to game development, web design, and IoT solutions.",
        "Engaging in hands-on learning experiences to enhance practical skills in programming and system design."
      ]
    },
    {
      schoolName: "carthage hannibal high school",
      logo: require("./assets/images/hannibal.png"),
      subHeader: "bacalaureate in computer science",
      duration: "September 2019 - june 2023",
      desc: "successfully completed the bacalaureate in computer science with a mention of 'good'.",
      descBullets: ["Developed a strong foundation in programming, algorithms, and data structures.",]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "40%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "my projects",
  subtitle: "Here are a few projects I've worked on recently.IoT solutions, each project reflects my passion for technology and creativity.",
  projects: [
    {
      image: require("./assets/images/image (7).png"),
      projectName: "E-vive",
      projectDesc: "Tech waste management concept, won 3rd place at robogenesis hackathon. Our system uses intelligent swarm robotics. It combines advanced technology with environmental responsibility. This presentation explores our innovative approach.",
      footerLink: [
        {
          name: "learn more :",
          url: "https://drive.google.com/file/d/1nz0igDmxVh7ekHeVQvWJGcme94MkZzPj/view?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/trafficam.png"),
      projectName: "trafficam",
      projectDesc: "trafficam is a smart traffic management system that uses computer vision to monitor and control traffic flow in real-time. It aims to reduce congestion and improve road safety.",
      footerLink: [
        {
          name: "learn more :",
          url: "https://drive.google.com/file/d/1XYh40wlIHs5QSRAC9zHs1HZ_PMxfjmTM/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "third place at robogenesis hackathon",
      subtitle:
        "Participated in the robogenesis hackathon and secured the third place with our innovative project E-vive, a tech waste management concept using intelligent swarm robotics.",
      image: require("./assets/images/483511758_122096547128804862_8846322161941867014_n.jpg"),
      imageAlt: "Robogenesis Hackathon Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1MhxrQ0RtdzLLd8KHdjZDjCpZePDXtr02/view?usp=sharing"
        },
        {
          name: "robogenesis",
          url: "https://www.facebook.com/profile.php?id=61574145867209"
        }
      ]
    },
    {
      title: "riyeda 12th edition",
      subtitle:
        "helped as part of the organization committee in the 12th edition of Riyeda, a national event that brings together young entrepreneurs and innovators to showcase their projects and ideas.",
      image: require("./assets/images/459203797_925100289659925_2502814558774046848_n.jpg"),
      imageAlt: "riyeda logo",
      footerLink: [
        {
          name: "certificat",
          url: "https://drive.google.com/file/d/1Jc_K3bkVPXb5UhpDOkr5c_rnlAy-sfRx/view?usp=sharing"
        },
        {
          name: "view riyeda",
          url: "https://www.facebook.com/salonriyeda"
        }
      ]
    },

    {
      title: "cs jam 1.0 3rd place",
      subtitle: "Participated in the CS Jam 1.0 hackathon in collaboration with zied chebbi and secured the third place a game dev competition with the theme of chain reaction where i made a story game about the life of oppenheimer.",
      image: require("./assets/images/480563204_122097010346782374_196627048922570068_n.jpg"),
      imageAlt: "csjam Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1ivrp4RjQooEXFWqrKmQbNm2x47AjoM3u/view?usp=sharing"},
        {
          name: "project page",
          url: "https://zied.itch.io/oppenheimer"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "i also write article as part of my job at optima junior entreprise, where i share my knowledge and insights on various topics.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://optimajuniorentreprise.com/blog/2025/04/edge-computing-le-futur-de-lit/",
      title: "Edge computing : le futur de l’IT",
      description:
        "L’Edge Computing met l’informatique des entreprises connectées à la périphérie du réseau. En traitant les données à proximité de leur source, il réduit le temps de réponse, améliore la performance, et ouvre la voie à de nouvelles applications."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+216 25 535 404",
  email_address: "kortyoussef93@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "gorta", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
