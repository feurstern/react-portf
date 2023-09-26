import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Hinterweltlern",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://www.github.com",
    projectLink: "https://youtu.be/zAnYX9X5ncY",
    tech: ['Unity', 'VROID', 'C#', 'Photoshop', 'Premiere', '3dVector'],
    description:
      "Hinterwelter the education game which is improving the archaic of learning and assessment of Perwajahan's subject ",
    modalContent: (
      <>
        <p>
          During my final test I was making a education game called as Hinterweltlern. The game concept is just like 
          RPG which the user playing as a female student named Ria. This game combine with the lesson and game at the same time, and according to
          the data that I had received from the weekly report of the score student that been underwent the test, it increased the score when they used education
          game as the media instead the conventional one.  
        </p>
      </>
    ),
  },
  {
    title: "Visual Novel :KKSI 2020 ",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["Unity", "VROID", "NaniNovel", "VisualNovel"],
    description:
      "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
    modalContent: (
      <>
        <p>
           I joined the competition of making 2d game during the KKSI 2020 with my team which consist of several students, four are the core
           such as being programmer, game artist, game s
        </p>
      
      </>
    ),
  },
  {
    title: "BrushWire",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["NextJS", "Java", "Spring", "AWS Aurora"],
    description:
      "Think Zapier but for paint. Built with a team of four college friends and scaled to > 1 billion requests per day. This was a fun one.",
    modalContent: (
      <>
        <p>
          Brush wire is essentially Zapier but for paint. Built with a team of
          four college friends and scaled to {">"} 1 billion requests per day.
          This was a fun one.
        </p>
        <p>
          Since &quot;Zapier for paint&quot; doesn&apos;t mean anything, be
          creative {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    title: "Paint Reference 4",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["Python", "FastAPI", "SQLAlchemy"],
    description:
      "I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {":)"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
];
