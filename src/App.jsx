/** @format */

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./components/home/Home.jsx";
import Nav from "./components/nav/Nav.jsx";
import Projects from "./components/project/Projects.jsx";
import About from "./components/about/About.jsx";
import Blog from "./components/blog/Blog.jsx";
import { useEffect } from "react";
import PrivacyPolicy from "./components/privacypolicy/PrivacyPolicy";
import SingleBlog from "./components/singleblog/SingleBlog";

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const targetId = location.state?.scrollTo;
    if (targetId) {
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else if (location.pathname === "/") {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <Nav />
      <ScrollToSection />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Home />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path='/about' element= {<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        <Route path='/singleblog' element={<SingleBlog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
