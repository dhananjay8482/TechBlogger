import React from 'react'
import Script from 'next/script'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Navbar = () => {
  return (
    // <nav className={styles.mainnav}>
    //     <ul>
    //       <Link href='/' ><li>Home</li></Link>
    //       <Link href='/about' ><li>About</li></Link>
    //       <Link href='/blog' ><li>Blog</li></Link>
    //       <Link href='/contact' ><li>Contact</li></Link>
    //     </ul>
    //   </nav>

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Tech Blogs</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            {/* <a class="nav-link active" aria-current="page" href="/">Home</a> */}
            <Link class="nav-link active" aria-current="page" href="/" >Home</Link>
            <Link class="nav-link"  href="/blog" >Blogs</Link>
            <Link class="nav-link"  href="/about" >About Us</Link>
            <Link class="nav-link"  href="/contact" >Contact</Link>
          </div>
        </div>
      </div>
      </nav>
  )
}

export default Navbar