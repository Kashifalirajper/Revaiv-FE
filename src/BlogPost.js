import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/blogPosts/Hero'
import Details from './components/blogPosts/Details'
import Related from './components/blogPosts/Related'
import Feedback from './components/blogPosts/Feedback'
import Footer from './components/Footer'

const BlogPost = () => {
  return (
    <div className='bg-white'>
      <Navbar/>
      <Hero/>
      <Details/>
      <Related/>
      <Feedback/>
      <Footer />

    </div>
  )
}

export default BlogPost