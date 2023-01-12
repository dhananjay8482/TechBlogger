import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from '../styles/blog.module.css'
import * as fs from 'fs';
const Blog = (props) => {
  console.log(props)
  const [blogs, setBlogs] = useState(props.allBlogs)
  

  // USE SERVER SIDE RENDERING INSTEAD OF CLIENT SIDE , IT HELPS TO FETCH DATA IN SITE TO BOTS

  // useEffect(()=>{
  //   fetch('http://localhost:3000/api/blogs')
  //   .then((a)=>{
  //     return a.json();
  //   })
  //   .then((parsed)=>{
  //     // console.log(parsed)
  //     setBlogs(parsed)
  //   })
  // },[])
  
  return (
    <div className={styles.container}  >
      <main className={styles.main} >
        {blogs.map((data)=>{
          return <div className="blogItem" key={data.slug} >
          <Link href={`blogpost/${data.slug}`} >
          <h3 className={styles.blogItemh3} >{data.title}</h3></Link>
          <p> {data.metadesc} </p>
        </div>
        })}
          
        </main>
        </div>

  )
}


//  SERVER SIDE RENDERING
// export async function getServerSideProps(context){
  
//   let data = await fetch('http://localhost:3000/api/blogs')
//   let allBlogs = await data.json()
//   return {
//     props: {allBlogs}
//   }
// }

// STATIC PAGE GENERATION
export async function getStaticProps(context){
  
  let data = await fs.promises.readdir("blogdata");
  let myFile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    console.log(element)
    myFile = await fs.promises.readFile(('blogdata/'+element),'utf-8')
    // console.log(myFile)
    allBlogs.push(JSON.parse(myFile))
    
  }
  return {
    props: {allBlogs}
  }
}


export default Blog