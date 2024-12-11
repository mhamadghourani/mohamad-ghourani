import "./singleBlog.css"
import {blogs} from "../../Content"
function SingleBlog() {
  const blog= blogs[0]
  return (
    <div className="singleblog">
      <article>
      <h1>{blog.blogTitle}</h1>
      <p>{blog.pOne}</p>
      <h2>{blog.headerOne}</h2>
      <p>{blog.pTwo}</p>
      <h2>{blog.headerTwo}</h2>
      <p>{blog.pThree}</p>
      <h3>{blog.smallheaderone}</h3>
      <ul>
        <li><a href="/">{blog.ul[1].link}</a>{blog.ul[1].list}</li>
        <li><a href="">{blog.ul[2].link}</a>{blog.ul[2].list}</li>
      </ul>
      <h3>{blog.smallheadertwo}</h3>
      <ul>
        <li><a href="/">{blog.ulPaid[1].link}</a>{blog.ulPaid[1].list}</li>
        <li><a href="">{blog.ulPaid[2].link}</a>{blog.ulPaid[2].list}</li>
      </ul>
      <h2>{blog.headerThree}</h2>
      <p>{blog.pFour}</p>
      <ul>
        <li><strong>{blog.tools[1].name}</strong>{blog.tools[1].description}</li>
        <li><strong>{blog.tools[2].name}</strong>{blog.tools[2].description}</li>
        <li><strong>{blog.tools[3].name}</strong>{blog.tools[3].description}</li>
      </ul>
      <h2>{blog.headerFour}</h2>
      <p>{blog.pFive}</p>
      <h2>{blog.headerFive}</h2>
      <p>{blog.pSix}</p>
      <h2>{blog.headerSix}</h2>
      <p>{blog.pSeven}</p>
      <h2>{blog.headerSeven}</h2>
      <p>{blog.pEight}</p>
      <h2>{blog.headerEight}</h2>
      <p>{blog.pNine}</p>
      <h2>{blog.headerNine}</h2>
      <p>{blog.pTen}</p>
      <h3>{blog.headerTen}</h3>
      <p>{blog.conclusion}</p>
      </article>
    </div>
  )
}

export default SingleBlog