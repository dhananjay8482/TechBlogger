import React, { useState } from "react";
import styles from '../styles/contact.module.css'


const Contact = () => {

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[phone, setPhone] = useState('');
  const[desc, setDesc] = useState('');

  
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(phone,name,desc,email)
    const data = {phone, name, email, desc}
   
    fetch('http://localhost:3000/api/postcontact/', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log('Success:', data);
        alert("Thanks for Contacting us");
        setPhone('');
        setName('');
        setEmail('');
        setDesc('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      
      }



  const handleChange = (e) => {
    if(e.target.name=='phone'){
      setPhone(e.target.value)
    }else if(e.target.name=='name'){
      setName(e.target.value)
    }else if(e.target.name=='email'){
      setEmail(e.target.value)
    }else{
      setDesc(e.target.value)
    }
    // console.log(e, "change")
  }
  

  return (
    <div className={styles.container} >
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} >
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>
            Enter your Name
          </label>
          <input
            type="name"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange = {handleChange}
          />          
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            aria-describedby="emailHelp"
            onChange = {handleChange}
          />
          <div id="emailHelp" className={styles.formlabel}>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>
            Enter your contac number
          </label>
          <input
            type="phone"
            className="form-control"
            id="phone"
            value={phone}
            name="phone"
            onChange = {handleChange}
          />          
        </div>
        <div className={styles.mb3}>
          <label htmlFor="desc" className={styles.formlabel} >Elaborate your concern</label>
          <textarea name="desc" id="desc" placeholder="Write your concern here" value={desc}  onChange = {handleChange}></textarea>          
        </div>
       
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
