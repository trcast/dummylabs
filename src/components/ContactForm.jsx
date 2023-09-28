import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = React.forwardRef((props, ref) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission status

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_0abv4js";
    const templateId = "template_iu2zf1p";
    const publicKey = "QmkQ60oXA13S9MuK-";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Dummy Labs Team",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
        setIsSubmitted(true); // Set submission status to true on success
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  const handleNewRequest = () => {
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="contact-form-success">
        <div className="contact-form-success-text-container">
          <h1 className="contact-form-success-text">
            Successfully sent request. Thank you!
          </h1>
        </div>
        <button className="submit-another-button" onClick={handleNewRequest}>
          Submit Another Request
        </button>
      </div>
    );
  }

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
