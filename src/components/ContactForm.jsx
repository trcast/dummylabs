import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = React.forwardRef((props, ref) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // DUMMY LABS
    // const serviceId = "service_0abv4js";
    // const templateId = "template_iu2zf1p";
    //   const publicKey = "QmkQ60oXA13S9MuK-";

    const serviceId = "service_9b2oa5i";
    const templateId = "template_1qk5tef";
    const publicKey = "6Zlt-pq-lGXILchRh";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Dummy Labs Team",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  return (
    <form className="contact-form" onSubmit={handleSubmit} ref={ref}>
      <div className="contact-email-name-container">
        <input
          className="contact-input-name"
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="contact-input-email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <textarea
        className="contact-text-area"
        placeholder="Brief Project Description"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button className="contact-button" type="submit">
        Submit Request
      </button>
    </form>
  );
});

export default ContactForm;
