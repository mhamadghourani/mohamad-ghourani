/** @format */
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "motion/react";
import "./project.css";
import { project } from "../../project"; 
function Projects() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const pr = project;


  return (
    <div className='projects'>
      <h2 id="projects">PROJECTS</h2>
      <div className='projects-container'>

      {pr.map((project, idx)=>{
        return(
          <motion.div
          className="project-card"
          key={idx}
          ref={ref}
          initial={{scale:0}}
          animate={isInView?{scale:1}:{}}
          transition={{duration:0.3}}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          >
            <img src={project.image}alt='img' />
            <a className="p-link" href={project.link}>
            <span>
           <h3>{project.header}</h3> 
            <p>{project.paragraph}</p>
            </span>
            </a>
            </motion.div>
        )
      
      })}
      </div>
    </div>
  );
}

export default Projects;
