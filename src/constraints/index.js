import project7 from "../assets/projects/eduvision intro.gif"
import project6 from "../assets/projects/chatbot intro.gif"
import project5 from "../assets/projects/face intro.gif"

import project4 from "../assets/projects/bruteforce.png"
import project3 from "../assets/projects/star.png"

import project2 from "../assets/projects/rms.png"
import project2a from "../assets/projects/rms.mp4"

import project1 from "../assets/projects/drone.png"
import project1a from "../assets/projects/drone.mp4"


export const HERO_CONTENT = "Driven by curiosity and a love for building, I see technology as a tool to solve real-world problems — not just lines of code. Whether it’s enhancing learning through AI or securing digital spaces, I strive to create experiences that are smart, impactful, and human-centered.";

export const ABOUT_TEXT = `I’m someone who finds joy in building meaningful things — whether it’s solving everyday problems or exploring new ideas through code. I'm deeply curious, always experimenting, and driven by the belief that technology should make life smarter, safer, and more human.`;

export const EXPERIENCES = [
  {
    year: "Jan 2025 - Feb 2025",
    role: "Cybersecurity Intern",
    company: "IBM",
    description: `Focused on steganography techniques and their application in data protection and cybersecurity. Explored methods of hiding and detecting information within digital media as part of secure communication practices.`,
    technologies: ["Cybersecurity", "Steganography", "Information Security"],
  },
];


export const PROJECTS = [
  {
    title: "EduVision",
    image: project7,
    video: "https://youtu.be/Uy9OzbRfXG4",
    videoType: "youtube",
    description:
      "An AI-powered learning platform that helps students study smarter. It allows handwritten notes to be converted into editable text, summarizes notes using NLP, and generates chapter-wise quizzes to aid in exam preparation.",
    technologies: ["React", "Node.js", "MongoDB", "OCR", "NLP", "Azure", "OpenRouter"],
  },
  {
    title: "Real-Time College Chatbot",
    image: project6,
    video: "https://youtu.be/tSaMjTQWyn4",
    videoType: "youtube",
    description:
      "A chatbot built using scraped college data, allowing users to ask queries about departments, events, and contact info. Features dynamic response generation and user-friendly chat interface.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Web Scraping"],
  },
  {
    title: "Criminal Recognition System",
    image: project5,
    video: "https://youtu.be/EQRC5XVPmgM",
    videoType: "youtube",
    description:
      "A real-time face recognition system integrated with a web interface to identify individuals against a criminal database. Includes features for storing suspect details, managing logs, and live video analysis.",
    technologies: ["Python", "OpenCV", "React", "Node.js", "MongoDB"],
  },
  {
    title: "BruteForce Password Calculator",
    image: project4,
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
    image: project2,
    video: project2a,
    videoType: "local",
    description:
      "A comprehensive restaurant management system featuring inventory tracking, real-time order processing, and secure employee management with role-based access control.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    title: "Mid-Sized Drone for Aerial Applications",
    image: project1,
    video: project1a,
    videoType: "local",
    description:
      "Designed and developed a mid-sized drone with applications in aerial photography and agriculture. The initial prototype used an Arduino Uno, but to improve stability and flight performance, it was upgraded to a KK215 flight controller board.",
    technologies: ["Arduino Uno", "KK215 Flight Controller", "Embedded Systems", "Flight Dynamics"],
  },

];

export const CONTACT = {
  address: "Ettumanoor P.O , Kottayam , 686631 ",
  phoneNo: "+91 8078078192 ",
  email: "jerryjamesedavazhickal@gmail.com",
};
