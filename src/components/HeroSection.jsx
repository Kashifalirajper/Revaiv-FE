import React from 'react';
import mobile from "../assets/images/mobile.png"

const HeroSection = () => {
  return (
    <section className="bg-transparent mt-10">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto gap-8 lg:grid-cols-12">
        {/* Adjust the order and visibility for mobile and large screens */}
        <div className="lg:hidden"> 
          <img src={mobile} alt="mockup" className="mx-auto"/>  {/* Make image visible and centered on small screens */}
        </div>
        <div className="mr-auto place-self-center lg:col-span-7 text-left order-last lg:order-none">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight text-left leading-none md:text-5xl xl:text-6xl dark:text-white">Hello,</h1>
          <h1 className="max-w-2xl mb-4 text-4xl text-[#296969] font-extrabold tracking-tight text-left leading-none md:text-5xl xl:text-6xl dark:text-white">I’m RevAiv</h1>
          <h2 className="max-w-2xl mb-4 text-4xl font-semibold text-[#3B3B3B] leading-none">Your Health Companion!</h2>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            I’m here to manage and improve your chronic hormonal conditions with innovative tools and personalized care solutions and empower you on your journey to better health.
          </p>
          <a href="#" className="inline-flex items-center justify-center px-4 py-2 text-white font-bold bg-[#1A3333] rounded-md shadow hover:bg-[#1A3344]">
            Get Started
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:order-none"> 
          <img src={mobile} alt="mockup"/>  {/* Ensure image is only visible on large screens */}
        </div>                
      </div>
    </section>
  );
};

export default HeroSection;
