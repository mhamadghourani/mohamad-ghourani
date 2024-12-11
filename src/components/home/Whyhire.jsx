import { motion } from "motion/react"
import { useRef } from "react";
import { useInView } from "framer-motion";
const Whyhire = () => {

  const handleScroll = ()=>{
    const element = document.getElementById("contact")
    if (element){
      element.scrollIntoView({
        behavior:"smooth",
        block:"start"
      })
    }
  }

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
    <div>
      <motion.div
      ref={ref}
      className="whyhire"
        initial={{scale:0}}
        animate={isInView?{scale:1}:{}}
        transition={{duration:0.7}}
      >
        <motion.div className="myskill-left">
            <h3>MY SKILLS</h3>
            <h2>WHY HIRE ME FOR YOUR NEXT <span>PROJECT</span> ?</h2>
            <p>Im specialized in both frontend and backend development,
                my passion is designing & solving problems through user experience and research.
            </p>
            <motion.button 
            onClick={handleScroll}
            whileHover={{scale:1.2}}
            transition={{ stiffness: 400, damping: 10 }}
            className="hire-btn">HIRE ME</motion.button>
            
        </motion.div>
        <motion.div
         className="myskill-right"
         initial={{scale:0}}
         animate={isInView?{scale:1}:{}}
         transition={{duration:2}}
         >
            <div className="hire-container-one">
                <motion.div 
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.9 }}
                 transition={{ stiffness: 400, damping: 10 }}
                className="myskill-right-d1">
                    <img src="/public/business.png" alt="" />
                    <h4>
                        Visual Desgin
                    </h4>
                    <p>Create user interface with unique & modren ideas</p>
                </motion.div>
                <motion.div 
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.9 }}
                 transition={{ stiffness: 400, damping: 10 }}
                className="myskill-right-d2">
                    <img src="/public/graduation-cap.png" alt="" />
                    <h4>
                        Development
                    </h4>
                    <p>Developed and maintaned enterprise-level application using SpringBoot</p>
                </motion.div>
            </div>
            <motion.div
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             transition={{ stiffness: 400, damping: 10 }}
            className="hire-container-two">
                <img src="/public/heart-beat.png" alt="" />
                    <h4>
                        Deliverables
                    </h4>
                    <p>Ensuring the delivery of high-quality, robust applications</p>
            </motion.div>
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Whyhire
