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
    location: "Pondok Ungu, South Bekasi",
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
    title: "Amazon",
    position: "Software Engineer",
    time: "2016 - 2020",
    location: "Seattle",
    description:
      "Data Engineer for store front. Built data pipelines with Spark and Airflow. Saw Bezos one time. He said he liked my paintings. I said I liked his hair.",
    tech: [
      "Java",
      "Python",
      "S3",
      "RDS",
      "Redshift",
      "PySpark",
      "HDFS",
      "Apache Airflow",
    ],
  },
];
