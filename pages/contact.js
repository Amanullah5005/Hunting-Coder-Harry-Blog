import React, { useState } from "react";
import styles from "@/styles/Contact.module.css";

export default function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [desc, setdesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(phone, name, email, desc);
    const data = { phone, name, email, desc };

    fetch("http://localhost:3000/api/postcontact", {
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
        setphone("");
        setname("");
        setdesc("");
        setemail("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleChange = (e) => {
    if (e.target.name == "phone") {
      setphone(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "desc") {
      setdesc(e.target.value);
    } else if (e.target.name == "name") {
      setname(e.target.value);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.contactForm}>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.mb3}>
            <label htmlFor="name" className={styles.formlabel}>
              Enter your name
            </label>
            <input
              required
              type="text"
              onChange={handleChange}
              value={name}
              className={styles.input}
              id="name"
              name="name"
              aria-describedby="emailHelp"
            />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="email" className={styles.formlabel}>
              Email address
            </label>
            <input
              required
              type="email"
              onChange={handleChange}
              value={email}
              className={styles.input}
              name="email"
              id="email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className={styles.formText}>
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className={styles.mb3}>
            <label htmlFor="phone" className={styles.formlabel}>
              Phone
            </label>
            <input
              required
              type="phone"
              onChange={handleChange}
              value={phone}
              className={styles.input}
              name="phone"
              id="phone"
            />
          </div>
          <div className={styles.mb3}>
            <label className={styles.formlabel} htmlFor="desc">
              Elaborate your concern
            </label>
            <textarea
              onChange={handleChange}
              value={desc}
              className={styles.input}
              placeholder="Write your concern here"
              name="desc"
              id="desc"
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.btn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
