
import { motion } from "motion/react"
import "./blob.css"

function Blob() {
  return (
    <motion.div
    initial={{scale:0}}
        animate={{scale:1}}
        transition={{duration:0.3}}
    className='hero-right'>
      <img src="/mohamad-ghourani/hero1.png" alt="" />
    </motion.div>
  )
}

export default Blob