import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone, desc);

    const data = { name, email, phone, desc };

    fetch("http://localhost:3000/api/postcontact/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.text())
    .then((data) => {
      console.log("Success:", data);
      alert("Thanks for contacting us");
      setName('');
      setEmail('');
      setPhone('');
      setDesc('');
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  };
  
  const handleOnChange = (e) => {
    if (e.target.name == 'name') {
      setName(e.target.value);
    }
    else if (e.target.name == 'email') {
      setEmail(e.target.value);
    }
    else if (e.target.name == 'phone') {
      setPhone(e.target.value);
    }
    else if (e.target.name == 'desc') {
      setDesc(e.target.value);
    }
  };
  
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}> Name </label>
          <input type="text" className="form-control" id="name" name="name" value={name} onChange={handleOnChange} />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}> Email address </label>
          <input type="email" className="form-control" id="email" name="email" value={email} onChange={handleOnChange} />
          <div id="emailHelp" className="form-text">
            We&apos;ll never share your email with anyone else.
          </div>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}> Phone </label>
          <input type="text" className="form-control" id="phone" name="phone" value={phone} onChange={handleOnChange} />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="desc"> Elaborate your concern </label>
          <textarea className="form-control" placeholder="Write your concern here" id="desc" name="desc" value={desc} onChange={handleOnChange} />
        </div>
        <button type="submit" className="btn btn-primary"> Submit </button>
      </form>
    </div>
  );
};

export default Contact;
