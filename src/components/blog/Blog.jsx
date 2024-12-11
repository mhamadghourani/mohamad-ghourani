
import "./blog.css"
import { motion } from "motion/react"
import { blogs } from "../../Content"
import { useNavigate } from "react-router-dom";
function Blog() {
  const navigate = useNavigate();
  const handleNav=()=>{
    navigate("/singleblog")
  }
  const blog = blogs[0];
  return (
    <div className="blogs">
      <h2>BLOGS</h2>
    <div className="blog">
      <article className="card" style={{ "--isPopular": "true" }}>
        <div className="author">
          <p><strong>AUTHOR</strong></p>
          <p>MOHAMAD</p>
        </div>
        <div className="img"><img src="/background3.png" alt="" /></div>
        <div className="info">
          <h3>{blog.blogTitle}</h3>
          <p>{blog.pOne.slice(0, 100)}...</p>
        </div>
        <div className="more">
        <motion.div 
          whileHover={{scale:0.9,rotate:3}}
          transition={{ stiffness: 400, damping: 10 }}
          ><button onClick={handleNav}>Read More</button></motion.div>
        </div>
      </article>
    </div>
    </div>
  )
}

export default Blog