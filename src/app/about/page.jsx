import React from 'react'
import styles from './page.module.css'
import Image from "next/image";
import Button from '@/components/Button/Button'; 


const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/about_us.png"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
          Welcome to Digital Storytellers, where creativity meets technology to bring your stories to life. 
          We are a team of passionate professionals dedicated to crafting engaging and compelling digital narratives
          that resonate with your audience. Whether you are looking to create stunning visuals, immersive experiences,
          or impactful content, our expertise spans across various digital mediums including video production, graphic design,
          web development, and social media strategy.
          <br />
          <br />
          At Digital Storytellers, we believe in the power of storytelling to
          inspire, inform, and connect. We work closely with you to understand your vision and transform it into a digital
          masterpiece that stands out in todays competitive landscape. Let us help you tell your story in the most
          innovative and captivating way possible. Together, we can create stories that not only capture attention
          but also leave a lasting impression.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p>
          Video Production: High-quality videos from concept to final cut.
          Graphic Design: Creative visuals including logos, branding, and marketing materials.
          Web Development: Responsive, user-friendly websites with custom design and SEO optimization.
          Social Media Strategy: Tailored strategies to increase engagement and grow your audience.
          Content Creation: Compelling written and multimedia content.
          Digital Marketing: Email marketing, PPC advertising, and influencer partnerships to boost your online presence.
          <br />
          <br />
          At Digital Storytellers, we believe in the power of storytelling to inspire, inform, and connect. Let us help you tell your story in the most innovative and captivating way possible.
          <Button url="/contact" text= "Contact"/>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
