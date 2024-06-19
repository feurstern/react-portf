import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./OrganizationItem";

export const Organization = () => {
  return (
    <section className="section-wrapper" id="organization">
      <SectionHeader title="Organization" dir="l" />
      {organization.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const organization = [
  {
    title: "Gerakan Suka Baca",
    position: "English Teacher",
    time: "2022 - Present",
    location: "Online",
    description:
      " I am currently doing a voluneter activity for being an English teacher for advance level, and my jobs are teaching, managing the class, especially when it comes to the student performance and student progress. I am using the 4 method for teaching, I divide for some section such as gramming, pronounciation, listening, and reading",
    tech: [
      // "Angular",
      // "Python",
      // "GCP",
      // "Git",
      // "GitHub",
      // "Java",
      // "Golang",
      // "K8s",
    ],
  },
  {
    title: "International Humanity Foundation",
    position: "English Teacher + Math Teacher",
    time: "January 2023 - March 2023",
    location: "Online",
    description:
      "I was teaching English for 1st and 2nd grade in IHF, it's for the basic. I really enjoy teaching the kids that they always so excited to learn English with me ",
    tech: [
      // "Angular",
      // "Python",
      // "GCP",
      // "Git",
      // "GitHub",
      // "Java",
      // "Golang",
      // "K8s",
    ],
  },
  {
    title: "Computing Ambassador",
    position: "English Teacher",
    time: "March 2024 - Present",
    location: "Online",
    description:
      "As a Computing Ambassador, my primary task is to encourage, develop young people is digital skills and literacy, and inspire the young people to become the next generation of programmer or any role field that related with computer by conducting the STEM Camp and STEM Expo through a series of explorative activities, collaborative projects and fun practical learning. ",
    tech: [
      // "Angular",
      // "Python",
      // "GCP",
      // "Git",
      // "GitHub",
      // "Java",
      // "Golang",
      // "K8s",
    ],
  },



];
