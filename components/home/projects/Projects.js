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
    imgSrc: "project-imgs/hinterweltlern.png",
    code: "",
    projectLink: "https://youtu.be/zAnYX9X5ncY",
    tech: ['Unity', 'VROID', 'C#', 'Photoshop', 'Premiere', '3DVector'],
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
        <p>
           The main objective of this game is the player should collected the items/dropable from reaching the mark of lesson point, beating 
           the foes, and answer correctly. 
        </p>
        <p>The game is just only available for PC platform only which running Windows or Linux, and it requires decent GPU to run that game.</p>
      </>
    ),
  },
  {
    title: "Visual Novel :KKSI 2020 ",
    imgSrc: "project-imgs/vs-kksi-1.png",
    code: "",
    projectLink: "https://youtu.be/P5wmlhGk6ws",
    tech: ["Unity", "VROID", "NaniNovel", "VisualNovel", "C#"],
    description:
      "Visual Novel ",
    modalContent: (
      <>
        <p>
           I joined the competition of making 2d game during the KKSI 2020 with my team which consist of several students, four are the core
           such as being programmer, game artist, story maker, and the other was being the voice actor/actress. Well this game is quite simple.
           All you have to do just choose the proper path of the story, so if the player choose the wrong path, they will lose, and almost in every
           chapter or events, the player should choose one the given scenario. For example when you choose A, then you are going to received different
           result that depends on your choose.
        </p>
        <p>
            I was so excited that I finally can made and manage such a big one that involved my own student.
        </p>
      </>
    ),
  },
  {
    title: "Korean GDP",
    imgSrc: "project-imgs/korea-gdp.png",
    code: "",
    projectLink: "https://feurstern.github.io/K-GDP/",
    tech: ['Unity', 'C#'],
    description:
      "Do you wanna be the ototirer or the wise leader of your fatherland? Okay, play this game,your county fate is in your hand",
    modalContent: (
      <>
        <p>
          The player should conduct right and proper the decision for building the country, and should have decent knowledge
          about the taxes. Improving Economic Growth: Cut Spending or Raise Taxes?
        </p> 
      </>
    ),
  },
  {
     title : 'Portfolio Website',
     imgSrc : 'project-imgs/portf.png',
     code : '',
     projectLink : 'https://feurstern.github.io/K-GDP/',
     tech : ['NextJS', 'HTML', 'Sass', 'Git'],
     description : 'Well how could you said you are frontend developer but you do not have only portfolio, and then here we go.',
     modalContent: (
        <>
          <p>
             This is project of my portfolio website. I want to show off the project that I had worked before that I was
             assigned as the PIC for references purposes.
          </p>
        </>
     )
  },
  {
    title : 'FRAC Website',
    imgSrc : 'project-imgs/frac.png',
    code : '"https://github.com/feurstern/fracs-react',
    projectLink : 'https://dev.fracs.id/',
    tech : ['NextJS', 'HTML', 'Sass', 'Antd', 'SwiperJS', 'Axios', 'Tailwind', 'Git', 'JSON'],
    description : 'The Web Certification of FRAC.',
    modalContent: (
       <>
         <p>
            When I am working as Frontend developer I was being assigned as the PIC of remake the website for the company.
            I am using several framework and libraries such as NextJS and Tailiwnd for the development process. This web is
            also cunsuming the API from other website by using Axios to render the data to the frontend side.
         </p>
       </>
    )
 },
 {
  title : 'Ourtoga',
  imgSrc : 'project-imgs/bnsp.png',
  code : '',
  projectLink : 'https://ourtoga.com/',
  tech : ['CodeIgniter-3', 'HTML', 'CSS', 'JS', 'Bootstrap'],
  description : 'Ourtoga',
  modalContent :(
    <>
      <p>Developing a new feature and maintaing the website are the main job of the certification application web based. </p>
    </>
  )
 }
 
 
];
