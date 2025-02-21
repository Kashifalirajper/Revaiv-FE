import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/blogComponents/Hero";
import BlogPage from "./components/blogComponents/BlogPage";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

const Blogs = () => {
  return (
    <div className="bg-transparent">
      <Navbar/>
      <Hero />
      <BlogPage/>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Blogs;
