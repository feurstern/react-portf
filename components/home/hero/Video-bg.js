import React from 'react'
import styles from "./hero.module.scss";

const Videobg = () => {
  return (
    <div className={styles.backgroundVideo}>
        <video className={styles.video} autoPlay loop muted>
            <source src='project-imgs/hu-taos-dance-of-flames.1920x1080.mp4'></source>
        </video>
    </div>
  )
}

export default Videobg