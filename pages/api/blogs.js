// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from 'fs';

export default async function handler(req, res) {
  
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
  // console.log(allBlogs)
  res.status(200).json(allBlogs)
  
  // fs.readdir('blogdata',(err, data)=>{
  //   console.log(data)
  //   data.forEach((item)=>{
  //     console.log(item)
  //   })
  //   res.status(200).json("JSON.parse(data)")
  // })


}

