import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from "@/components/Button/Button"

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/433131/pexels-photo-433131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill={true} alt=""
          className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Web Developer</h1>
          <h2 className={styles.imgDesc}>Learn while building...</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who am I?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Tristique sollicitudin nibh sit amet commodo nulla.
            Interdum velit euismod in pellentesque
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Tristique sollicitudin nibh sit amet commodo nulla.
            Interdum velit euismod in pellentesque
            massa placerat duis ultricies lacus. Egestas
            integer eget aliquet nibh praesent tristique magna sit. Aliquet risus feugiat in ante metus dictum.
            Tincidunt ornare massa eget egestas purus.</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What i do?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Tristique sollicitudin nibh sit amet commodo nulla.
            Interdum velit euismod in pellentesque
            massa placerat duis
            <br />
            <br />
            ultricies lacus. Egestas
            integer eget aliquet nibh praesent tristique magna sit. Aliquet risus feugiat in ante metus dictum.
            Tincidunt ornare massa eget egestas purus.
          </p>
          <Button url="/contact" text="contact"/>
        </div>
      </div>
    </div>
  )
}

export default About