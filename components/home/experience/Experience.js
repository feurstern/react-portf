import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "SMK Mandiri Bekasi",
    position: "IT Teacher, Lab Coordinator, IT Support",
    time: " December 2019 - June 2022",
    location: "Pondok Ungu, North Bekasi",
    description:
      "This is my first job, and I have learned so much during my time here, such as how to be confident. I taught Design and IT (Simdig) to all the classes, and I also became an IT support specialist.",
    tech: ["Photoshop", "Illustrator", "Ms Office", "2d animation"],
  },
  {
    title: "Alexandria Islamic School",
    position: "Digital Maerketing Coach",
    time: " August 2021 - October 2021",
    location: "Rawalumbu, East Bekasi",
    description:
      " was teaching Digital Marketing as a substitute teacher, and I used Blogspot and Mailchimp to promote the product, as well as doing copywriting.",
    tech: ["Mailchimp", "Blogspot", "Copywrting", "flyer", "design"],
  },
  {
    title: "SMP Al Azhar Grand Wisata",
    position: "Robotic Teacher",
    time: " June 2021 - June 2022",
    location: "Grand Wisata, South Tambun",
    description:
      "  teach about microcontrollers, like Arduino, focusing on how to create simple prototypes using various sensors that can be useful for daily life",
    tech: [
      "C++",
      "Microcontroller",
      "Arduino Uno",
      "Arduin-ide",
      "Thinker",
      // "Java",
      // "Python",
      // "S3",
      // "RDS",
      // "Redshift",
      // "PySpark",
      // "HDFS",
      // "Apache Airflow",
    ],
  },
  {
    title: "SMP Tarakanita 4",
    position: "Promgramming Teacher",
    time: " June 2021 - June 2022",
    location: "East Jakarta",
    description:
      " teach the Prakarya subject, where I prefer to incorporate IT into handmade projects. I also teach web development, focusing on frontend technologies like HTML, CSS, and JavaScript.",
    tech: [
      "HTML",
      "CSS",
      "Javascript",
      "UI/UX",
      "Web design",
      "Github",
      // "Java",
      // "Python",
      // "S3",
      // "RDS",
      // "Redshift",
      // "PySpark",
      // "HDFS",
      // "Apache Airflow",
    ],
  },
  {
    title: "Sekolah Bina Talenta Graha",
    position: "ICT Teacher , IT Support",
    time: " July 2022 - January 2023",
    location: "Harapan Indah, North Bekasi",
    description:
      "I teach the ICT subject, which uses an international curriculum called Edumedia. Besides being a teacher, I also serve as IT Support, handling everything related to IT, such as maintenance, assembling computer parts, and even working as a technician and proctor for the ANBK assessment.",
    tech: [
      "Edumedia",
      "Cambridge",
      "Scratch",
      "Hour of Code",
      "Thinker",
      "Roamer",

      // "Java",
      // "Python",
      // "S3",
      // "RDS",
      // "Redshift",
      // "PySpark",
      // "HDFS",
      // "Apache Airflow",
    ],
  },
  {
    title: "Timedoor Academy",
    position: "Private Programming Tutor",
    time: "February 2023 - March 2024",
    location: "Online",
    description:
      "I am doing part time job as a private programming tutor, I teach for web developemnt and game development",
    tech: [
      "Javascript",
      "CoSpace",
      "Scratch",
      "HTML",
      "CSS",
      "AR/VR",
      "Phaser",
      // "Java",
      // "Python",
      // "S3",
      // "RDS",
      // "Redshift",
      // "PySpark",
      // "HDFS",
      // "Apache Airflow",
    ],
  },
  {
    title: "PT. Rajawali Konsulindo",
    position: "Fullstack Developer",
    time: "Jan 2023 - 15 July 2024",
    location: "West Jakarta",
    description:
      "I am working as a Frontend developer and my tasks are making some design prototype for creating a new page, consume and implementing the REST-API by using AJAX, Axios or AlpineJS, create a new landing page or new a feature accroding the given draft, work well with other team like backend. Beside that my other task is to maintain and fix bug from bug report of the website. During I am working as software developer in this company, I also take a good opportunity in learning finance like finance which deals with analyzing the financial aspect of a company, project or investment, and I have decent knownledge in finance. ",
    tech: [
      "Javascript",
      "CI",
      "Cpanel",
      "HTML",
      "CSS",
      "ReactJS",
      "NextJS",
      "Figma",
      "MySQL",
      "SwiperJS",
      "Tailwindcss",
      "Frammer Motion",
      "NodeJS",
      "Git",
      "FTP",
      "PHP",
      // "Java",
      // "Python",
      // "S3",
      // "RDS",
      // "Redshift",
      // "PySpark",
      // "HDFS",
      // "Apache Airflow",
    ],
  },
  {
    title: "Deputy Koordinasi dan Supervisi - Komisi Pemberantasan Korupsi ",
    position: "Tenaga Ahli Software Developer ",
    time: "15 July  2024 - Present",
    location: "South Jakarta",
    description: `Maintaining and Developing a new Module for MCP(Monitoring Corruption for Prevention) consist of the realisation and the achivements 
    of the Local Government according the eight area intervention. This module help the PIC of the Koordinas dan Supervisi to determine the support decisions to prevent or to conduct the investigation
    of the corruption case according to the anomaly and the MCP's score`,
    tech: [
      "Javascript",
      "CI/CD",
      "Quasar",
      "AWS S3",
      "HTML",
      "CSS",
      "Vue JS",
      ,
      "Figma",
      "Postgres",
      "Phalcon",
      "NodeJS",
      "Git",
      "Laravel",
      "Docker",
      "Typescript",
    ],
  },

  {
    title: "PT Meditech Core ",
    position: "Software Engineer ",
    time: "January 2025 - Present",
    location: "Jakarta",
    description: `I am currently working as a software Engineer, I create and develop various
application, especially specializes in creating software applications that manage and
interact with a company's network infrastructure, including virtual private servers
(VPS), essentially designing and implementing solutions to optimize network
performance, security, and scalability across virtualized environments.`,
    tech: [
      "Typescript",
      "CI/CD",
      "AWS S3",
      "HTML",
      "CSS",
      "React/Nexjts",
      "Figma",
      "Laravel 11",
      "Phalcon",
      "NodeJS",
      "Git",
      "CI/CD",
      "Docker",
      "Midtrans",
    ],
  },
];
