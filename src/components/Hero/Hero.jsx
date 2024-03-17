import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hii, I'm Vaibhav</h1>
            <p className={styles.description}>Frontend Developer | Problem Solver <br />4⭐ C++ on HackerRank</p>
            <a className={styles.contactbtn} href="mailto:vaibhavmahangare2@gmail.com">Contact me</a>
        </div>

        <img  src={getImageUrl("hero/heroImage.png")} alt="hero-image of me" className={styles.heroimg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}
