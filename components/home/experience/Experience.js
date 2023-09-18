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
     "This is my first job and I learnt so much during my work time, for example for being confident. I taught for Design and IT(Simdig) subject for all the classes and I alsoe become IT support.",
    tech: [
      "Photoshop",
      "Illustrator",
      "Ms Office",
      "2d animation",
    ],
  },
  {
    title: "Alexandria Islamic School",
    position: "Digital Maerketing Coach",
    time: " August 2021 - October 2021",
    location: "Rawalumbu, East Bekasi",
    description:
      "I was teaching Digital Marketing as subitute teacher and I use blogspot, mailchimp to promote the product, and also the copywriting one",
    tech: ['Mailchimp','Blogspot', 'Copywrting', 'flyer', 'design'],
  },
  {
    title: "SMP Al Azhar Grand Wisata",
    position: "Robotic Teacher",
    time: " June 2021 - June 2022",
    location: "Grand Wisata, South Tambun",
    description:
      "I teach about microcontroller like arduino. I simply focus to teach how to create a simple prototype by using certain of sensor that will be quite usefull for daily basis. ",
    tech: [
      'C++',
      'Microcontroller',
      'Arduino Uno',
      'Arduin-ide',
      'Thinker'
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
      "I teach for the Prakarya subject that I prefer to use IT as the handmade, and I teach for web development especially frontend such HTML/CSS/Javascript",
    tech: [
      'HTML',
      'CSS',
      'Javascript',
      'UI/UX',
      'Web design',
      'Github'
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
    time: " July 2022 - March 2023",
    location: "Harapan Indah, North Bekasi",
    description:
      "I teach for ICT subject which is using the international curricullum named as Edumedia, and beside being teacher I also become IT Support, and everyting that related with IT such as maintenance, assembling the part of computer, and even being technician + proctocl for ANBK's assessment",
    tech: [
      'Edumedia',
      'Cambridge',
      'Scratch',
      'Hour of Code',
      'Thinker',
      'Roamer',


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
    time: "February 2023 - Present",
    location: "Online",
    description:
      "I am doing part time job as a private programming tuto, I teach for web developemnt and game development",
    tech: [
      'Javascript',
      'CoSpace',
      'Scratch',
      'HTML',
      'CSS',
      'AR/VR',
      'Phaser'
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
    position: "Frontend Developer",
    time: "April 2023 - Present",
    location: "West Jakarta",
    description:
      "I am working as a Frontend developer and my tasks are making some design prototype for creating a new page, consume and implementing the REST-API by using AJAX, or Axios for client side, create a new landing page accroding the given draft, work well with other team like backend ",
    tech: [
      'Javascript',
      'CI',
      'Cpanel',
      'HTML',
      'CSS',
      'ReactJS',
      'NextJS',
      'Figma',
      'MySQL',
      'SwiperJS',
      'Tailwindcss',
      'Frammer Motion',
      'NodeJS',
      'Git',
      'FTP',
      'PHP'
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
];
