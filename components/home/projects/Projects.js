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
      "You are going to play as Ria, help her to beat the foe, and find the missing hinterweltern for the sake of humankind!",
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
        <p>
          Sypnosis :
          “ Ria is a beautiful pale-skinned teenage high school girl with long dark purple hair, a delicate face, a thin build, average-sized breasts, curved hips. She is a mischievous and spoiled girl who is considered as a special child prodigy due to her IQ which is higher than average person, who is also regarded as the star of the school and have a good physical strenght to cover her from the exact circumstances. Being fairly cheerful and taunting, Ria's methods of classroom terrorism are the following: She likes to ask her teachers extremely difficult questions, knowing that  they’re not able to answer correctly. She does this because she likes making them look foolish in front of the class.

          So in the day dragged on, the clouds turns into a dark with the red mist by a sudden. Is this the end of the world? Or it’s just the only imagination for being madness – Ria’s thought.  For now only strenght and knowledge to against the horde of darkness that threaten every people in these lands. She march to turn the tables of these terrible and she even dare even one of them to test her intelligence and strength in single combat.

          “
        </p>
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
      "As players guide Cia through her daily routines and interactions, they'll witness her internal struggles and triumphs as she gradually opens up to the possibilities of her new surroundings. From quiet moments of introspection to heart-pounding encounters with classmates, each decision made by the player will shape Cia's journey and determine the course of her relationships.",
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
        <p>
          Sypnosis :
          “I am Alexandria, the third child of three siblings, and I am used to be called as Cia. I love to spend my spare time for reading history, dancing, and go on hiking. For me the world is so exquisite, and I have to find the reason why do I have born as me? Does God give me a chance to life just for notthing. I was borm and raised in the small rulal. But when I was reached to 15 years old, my family had to move to another place due to find the lebensraum.  I got no choice for that.
          munc
          You know when itt comes to liviing in the new municipal, in conclusion I have to adapt with the current circumstances which is for me it;s just like opening a new blank page for me, and I have to start from zero.

          I spend my most time at the school and I want you to help me to conquest a reserved and introverted teenager who finds herself uprooted from her familiar surroundings and thrust into a new school environment. Struggling to adapt to this sudden change, Emily must navigate the challenges of forging new friendships, facing social anxieties, and discovering her place in an unfamiliar world.
          ”
        </p>
      </>
    ),
  },
  {
    title: "Fuher in Juche",
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
    title: 'Portfolio Website',
    imgSrc: 'project-imgs/portf.png',
    code: '',
    projectLink: 'https://feurstern.github.io/K-GDP/',
    tech: ['NextJS', 'HTML', 'Sass', 'Git'],
    description: 'Well how could you said you are frontend developer but you do not have only portfolio, and then here we go.',
    modalContent: (
      <>
        <p>
          TNazism + Juche are the best ideology combination in order to become a excel
          and rule this fuck*ng world.  You are playing as a Furher who is going to rule  Korea, make the right deciosion to boost the economic growth, or your reign is going to be overthrow by the rebbels!
        </p>
      </>
    )
  },
  {
    title: 'FRAC Website',
    imgSrc: 'project-imgs/frac.png',
    code: '"https://github.com/feurstern/fracs-react',
    projectLink: 'https://dev.fracs.id/',
    tech: ['NextJS', 'HTML', 'Sass', 'Antd', 'SwiperJS', 'Axios', 'Tailwind', 'Git', 'JSON'],
    description: 'The Web Certification of FRAC.',
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
    title: 'Ourtoga',
    imgSrc: 'project-imgs/bnsp.png',
    code: '',
    projectLink: 'https://ourtoga.com/',
    tech: ['CodeIgniter-3', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    description: 'Ourtoga',
    modalContent: (
      <>
        <p>Developing a new feature and maintaing the website are the main job of the certification application web based. </p>
      </>
    )
  },
  {
    title: 'CBT Cross Platform',
    imgSrc: 'project-imgs/cbt-dl.png',
    code: '',
    projectLink: 'https://cbt.ourtoga.com/download',
    tech: ['CodeIgniter-3', 'HTML', 'CSS', 'JS', 'Bootstrap', 'Axios', 'Electron JS'],
    description: 'Ourtoga',
    modalContent: (
      <>
        <p>Created and implement a new platform of CBT versions for UNIX plaform </p>
      </>
    )
  },

  {
    title: 'Rj  Consulting',
    imgSrc: 'project-imgs/rj-ss.png',
    code: '',
    projectLink: 'https://rjcons.com/',
    tech: ['CodeIgniter-3', 'HTML', 'CSS', 'JS', 'Tailwind', 'Axios', 'Alpine JS'],
    description: 'rj cons',
    modalContent: (
      <>
        <p>Building, maintaining, and implementing of the new feature  for website that contain the information about the training. My main job is to implement the new feature or make any changes based on the business requiremnent into the code.</p>
      </>
    )
  },


];
