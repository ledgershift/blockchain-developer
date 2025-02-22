import React, { useState } from "react";
import "../styles/contact.css";
import { FaEnvelope, FaUser, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState(""); // Success message state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formUrl =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLScMfEmgXkqK94tdp4YxnJ5mNQjRP-9FNsxs_XIzTWpdYWfnKw/formResponse";

    const formDataToSend = new FormData();
    formDataToSend.append("entry.399075856", formData.name); // Name
    formDataToSend.append("entry.1491306182", formData.email); // Email
    formDataToSend.append("entry.1302450404", formData.message); // Message

    try {
      await fetch(formUrl, {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors", // Prevents CORS errors
      });

      setSuccessMessage("Your message has been sent successfully! 🚀");

      // Clear the form
      setFormData({ name: "", email: "", message: "" });

      // Hide success message after 3 seconds
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-description">
        Fill out the form below, and I'll get back to you as soon as possible!
      </p>

      {successMessage && <div className="success-message">{successMessage}</div>}

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <FaUser className="form-icon" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <FaEnvelope className="form-icon" />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          <FaPaperPlane className="submit-icon" /> Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;