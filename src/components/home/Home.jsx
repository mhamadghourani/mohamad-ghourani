/** @format */
import { motion } from "motion/react";

import "./home.css";
import Skills from "./Skills";
import Whyhire from "./Whyhire";
import Hiresection from "./Hiresection";
import Blob from "../blob/Blob.jsx";
import { useRef } from "react";
import { useInView } from "framer-motion";

function Home() {
  const handleScroll = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div id='home'>
      <motion.div
        ref={ref}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.3 }}
        className='hero'>
        <div className='hero-left'>
          <h1>
            HI I&apos;M <span>MOHAMAD</span> AND I&apos;M FULLSTACK DEVELOPER!
          </h1>
          <p>
            I specialize in building robust and scalable web applications using
            React and TailwindCSS for sleek front-end designs. For the back end,
            I leverage the power of Java, Spring Boot, and Node.js to create
            efficient APIs. My expertise extends to databases, including SQL,
            MongoDB, and the complete MERN stack. Let&apos;s bring ideas to life
            with clean and efficient code.
          </p>
          <div className='action-btn'>
            <motion.button
              whileHover={{ scale: 1.2 }}
              transition={{ stiffness: 400, damping: 10 }}
              onClick={handleScroll}>
              CONTACT ME
            </motion.button>
          </div>
        </div>
        <Blob />
      </motion.div>
      <Skills />
      <Whyhire />
      <Hiresection />
    </div>
  );
}

export default Home;
