import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Services from "../Services/Services";
import Project from "../Projects/Project";
import Blog from "../Blog/Blog";
import Workshop from "../Workshop/Workshop";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Blogopen from "../blogopen/Blogopen";
import Projectopen from "../Projectopen/Projectopen";
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/projects" element={<Project />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/workshop" element={<Workshop />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/blogopen" element={<Blogopen />} />
        <Route exact path="/projectopen" element={<Projectopen />} />
      </Routes>
    </div>
  );
};

export default Routing;
