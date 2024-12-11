import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "motion/react"

function Skills() {
    const ref = useRef(null);
        const isInView = useInView(ref, { once: true });
  return (
    <div className="skills">
        <motion.div
        ref={ref}
          initial={{opacity: 0, scale: 0 }}
          animate={
            isInView
              ? { translateX: 0, opacity: 1, scale: 1, transition: { duration: 0.9 } }
              : {}
          }
        className="skill"
        >
            <motion.div  whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ stiffness: 400, damping: 10 }}>
            <img src="/reactjs.png" alt="react" />
        </motion.div>
            <motion.div  whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ stiffness: 400, damping: 10 }}>
            <img src="/pngegg.png" alt="react" />
        </motion.div>
            <motion.div  whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ stiffness: 400, damping: 10 }}>
            <img src="/nodejs.png" alt="react" />
        </motion.div>
            <motion.div  whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ stiffness: 400, damping: 10 }}>
            <img src="/pngegg (1).png" alt="react" />
        </motion.div>
        </motion.div>
    </div>
  )
}

export default Skills