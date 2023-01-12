import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/blogPost.module.css'
// import * as fs from 'fs';
const Slug = (props) => {
  
  function createMarkup(c){
    console.log({__html: c})
    return {__html:c };
  }
  
  const [blog, setBlog] = useState(props.myBlog);


  // const router = useRouter()
  // const {slug} = router.query;
  // useEffect(() => {
  //   if(!router.isReady) return

    
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  //   .then((a)=>{
  //     return a.json();
  //   })
  //   .then((parsed)=>{
  //     // console.log(parsed)
  //     setBlog(parsed)
  //   })
  // }, [router.isReady])


  return (
    <div className={styles.container} >
        <main className={styles.main} >
      <h1>{ blog && blog.title}</h1>
      <hr />
      
      { blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}/>}



      </main>
    </div>
  )
}

// export async function getStaticPaths(){
//   return {
//     paths: [
//       {params: {slug:'how-to-learn-flask'}},
//       {params: {slug:'how-to-learn-javascript'}},
//       {params: {slug:'how-to-learn-nextjs'}}
//     ],
//     fallback: true
//   }
// }

// export async function getStaticProps(context){
//   // useRouter is not work in Server Side
//   const {slug} = context.params;
//   let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8')
//   return {
//     props: {myBlog: JSON.parse(myBlog)}
//   }
// }

export async function getServerSideProps(context){
  // useRouter is not work in Server Side
  const {slug} = context.query;
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  let myBlog = await data.json()
  return {
    props: {myBlog}
  }
}

export default Slug