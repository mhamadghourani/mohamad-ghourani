/** @format */

import "./nav.css";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);

  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigation = (e, path, targetId = null) => {
    e.preventDefault();
    if (location.pathname === path) {
      if (targetId) {
        const section = document.getElementById(targetId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      navigate(path, { state: { scrollTo: targetId } });
    }
  };

  return (
    <div className="nav">
      <div className="nav-links">
        <ul>
          <li><Link to="/" onClick={(e) => handleNavigation(e, "/", "home")}>HOME</Link></li>
          <li><Link to="/" onClick={(e) => handleNavigation(e, "/", "projects")}>PROJECT</Link></li>
          <li><Link to="/" onClick={(e) => handleNavigation(e, "/", "contact")}>CONTACT</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/blog">BLOG</Link></li>
        </ul>
        <div className="hamburger-menu" onClick={handleOpen}>
          <img src="/mohamad-ghourani/app.png" alt="" />
          <div className={isOpen ? "menu" : "hide"}>
            <ul>
              <li><Link to="/" onClick={(e) => handleNavigation(e, "/", "home")}>HOME</Link></li>
              <li><Link to="/" onClick={(e) => handleNavigation(e, "/", "projects")}>PROJECT</Link></li>
              <li><Link to="/" onClick={(e) => handleNavigation(e, "/", "contact")}>CONTACT</Link></li>
              <li><Link to="/about">ABOUT</Link></li>
              <li><Link to="/blog">BLOG</Link></li>
            </ul>
          </div>
        </div>
        <div className="logo">
          <img src="/mohamad-ghourani/logo.svg" alt="" onClick={(e) => handleNavigation(e, "/", "home")} />
        </div>
        <div className="social">
          <ul>
            <li><a href="https://www.instagram.com/moe_ghourani/"><img src="/mohamad-ghourani/instagram_15713420.png" alt="" /></a></li>
            <li><a href="https://www.linkedin.com/in/mohamad-al-ghourani-3b3aa5208/"><img src="/mohamad-ghourani/social_12942307.png" alt="" /></a></li>
            <li><a href="https://github.com/mhamadghourani"><img src="/mohamad-ghourani/github_3291667.png" alt="" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
