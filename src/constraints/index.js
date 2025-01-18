import project1 from "../assets/image_recognition.jpg"
import project2 from "../assets/bruteforce.png"
import project3 from "../assets/star.png"
import project4 from "../assets/rms.png"
import project5 from "../assets/drone.png"



export const HERO_CONTENT = 'I am an aspiring tech enthusiast and developer with expertise in Python programming, machine learning, and full-stack development. With hands-on experience in building innovative projects like a Criminal Recognition System and a BruteForce Password Calculator, I have a solid foundation in technologies such as MERN stack, OpenCV, and cybersecurity tools. My goal is to continually explore diverse domains in IT and create impactful solutions that solve real-world challenges.';

export const ABOUT_TEXT = `I am a passionate and adaptable tech enthusiast currently pursuing a Master of Computer Applications (MCA). My expertise spans Python programming, machine learning, and full-stack development, with hands-on experience in building innovative projects such as a Criminal Recognition System, a BruteForce Password Calculator, and a mid-sized drone for aerial applications. I am also exploring cybersecurity through an internship at IBM, where I am gaining valuable insights into network security and vulnerability assessment. My journey in technology is fueled by curiosity and a drive to solve real-world challenges through creative and impactful solutions. Outside of coding, I enjoy experimenting with new technologies and exploring diverse fields within IT to broaden my skill set.`;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Cyber Security Intern",
    company: "IBM",
    description: `Gaining hands-on experience in cybersecurity principles and practices, including vulnerability assessment, penetration testing, and incident analysis. Collaborating with senior professionals to enhance network security and develop strategies for mitigating cyber threats.`,
    technologies: ["Cybersecurity", "Vulnerability Assessment", "Penetration Testing", "Incident Analysis"],
  },
];


export const PROJECTS = [
  {
    title: "Criminal Recognition System",
    image: project1,
    description:
      "A real-time face recognition system integrated with a web interface to identify individuals against a criminal database. Includes features for storing suspect details, managing logs, and live video analysis.",
    technologies: ["Python", "OpenCV", "React", "Node.js", "MongoDB"],
  },
  {
    title: "BruteForce Password Calculator",
    image: project2,
    description:
      "A Bash script to estimate password brute-force cracking times based on hash rates and password complexity, highlighting the importance of strong passwords.",
    technologies: ["Bash", "Shell Scripting", "Cybersecurity"],
  },
  {
    title: "Star-Shaped LED Display",
    image: project3,
    description:
      "A custom LED display project using Arduino and SMD LEDs with various lighting patterns, including chaining and line-following effects.",
    technologies: ["Arduino", "Embedded Systems", "SMD LEDs"],
  },
  {
    title: "Restaurant Management System",
    image: project4,
    description:
      "A comprehensive restaurant management system featuring inventory tracking, real-time order processing, and secure employee management with role-based access control.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    title: "Mid-Sized Drone for Aerial Applications",
    image: project5,
    description:
      "Designed and developed a mid-sized drone with applications in aerial photography and agriculture. The initial prototype used an Arduino Uno, but to improve stability and flight performance, it was upgraded to a KK215 flight controller board. This project demonstrated expertise in embedded systems, flight dynamics, and problem-solving.",
    technologies: ["Arduino Uno", "KK215 Flight Controller", "Embedded Systems", "Flight Dynamics"],
  },

];

export const CONTACT = {
  address: "Ettumanoor P.O , Kottayam , 686631 ",
  phoneNo: "+91 8078078192 ",
  email: "jerryjamesedavazhickal@gmail.com",
};
