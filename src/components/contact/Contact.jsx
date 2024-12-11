
import { motion } from "framer-motion";
import Blob from "../blob/Blob";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import "./contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState(""); // To show success or error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kbxse8d",  // Replace with your service ID
        "template_4k1zd4j",  // Replace with your template ID
        e.target,            // This refers to the form
        "GImZ6iWxpxbhl5GzX"       // Replace with your user ID
      )
      .then(
        (result) => {
          console.log("Message Sent: ", result.text);
          setStatusMessage("Your message has been sent successfully!");
        },
        (error) => {
          console.log("Error: ", error.text);
          setStatusMessage("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      <h2 id="contact">CONTACT</h2>
      <motion.div
        ref={ref}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.3 }}
        className="contact"
      >
        <Blob />
        <div className="contact-right">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
            />
            {statusMessage && (
  <p
    className={`status-message ${statusMessage.includes("success") ? "success" : "error"}`}
  >
    {statusMessage}
  </p>
)}{/* Show status message */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.2 }}
              transition={{ stiffness: 400, damping: 10 }}
            >
              SUBMIT
            </motion.button>
          </form>
          
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
