import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Anyway thanks for your interest to look up my profile. My name is
              Muhammad Rio Kurniawan, usually people called me as Rio. I am tech
              and language enthusiast. So in order to realize my dream to become
              a decent developer, I have been working and learning for that for
              almost 3 years. My main focus in the field of game development,
              web developement through portfolio and learning. So far I have a
              decent skill for game development, web developement, and basic
              machine learnig.
            </p>
          </Reveal>
          {/* <Reveal>
            <p className={styles.aboutText}>
             I am currently working as a Frontend developement for private company in West Jakarta.
             The stack that I used are HTML, CSS, JS, Tailwind, bootstrap, NextJS, CodeIgniter-3.
             My main task is to create the clients side and implement the REST-API by using AlpineJS and mostly by using AJAX.
             Sometimes I was being asked to trace the bug, and I have to fix it for backend side one.
            </p>
          </Reveal> */}
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, I do some volunteer activities for being an
              English Teacher and Computing Ambassador. I do love teach
              something to someone, I reckon the more I teach the better I
              become.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I just want to become better and better! 🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                {/* <span>My links</span>
                <AiOutlineArrowRight /> */}
              </div>
              {/* <MyLinks /> */}
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
