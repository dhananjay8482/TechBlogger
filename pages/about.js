import Link from 'next/link';
import React from 'react'
import styles from '../styles/about.module.css';

const About = () => {
  return (
    <div className={styles.container} >

      <br />
      <h1 className={styles.center} >About Hunting Coder</h1>
      <br />
      <h2>Introduction</h2>
      <p>Lorem ipsum, dolor sit amet conse, nulla epudiandae? i quaerat corrupti, accusamus recusandae vero totam quos odio error velit ipsa exercitationem nam accusantium dolorum dolorem non repellat! Soluta facere cum at natus iure molestias repellendus delectus magni.</p>
      <br />
      <h2>Services Offered</h2>
      <p>Lorem ipsum dolor sit nissimos nisi laboruonsequatur nostrum cum, distinctio nemo perferendis ducimus.</p>
      <p>We offers following services: </p>
      <ul className={styles.ul} >
        <li>Service 1</li>
        <li>Service 2</li>
        <li>Service 3</li>
      </ul>
      <br />
      <h2>Contact Us</h2>
      <Link href='/contact'>Click Here</Link>
    </div>
  )
}

export default About