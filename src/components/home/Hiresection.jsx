/** @format */

import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "framer-motion";

function Hiresection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className='hire-sec'>
      <motion.div
      ref={ref}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.3 }}>
        <img src='/public/suspect_8750111.png' alt='' />
        <h2>why Me</h2>
        <p>
          As a skilled full-stack developer, I specialize in building scalable
          and efficient applications using React.js for the front end, Java
          Spring Boot for the back end, and Node.js with Express.js. I’m
          proficient in both SQL and MongoDB, ensuring robust database solutions
          for any project. With a focus on clean code, seamless user
          experiences, and strong problem-solving skills, I’m dedicated to
          delivering high-quality solutions that meet your needs and exceed
          expectations.
        </p>
      </motion.div>
    </div>
  );
}

export default Hiresection;
