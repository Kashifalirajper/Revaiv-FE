import React from "react";
import { MarqueeDemo } from "./CardSlider";

const FeatureSection = () => {
  return (
    <div className="bg-[#044E54] min-h-[600px] text-white p-5">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto gap-8 grid-cols-12">
          {/* Adjust the order and visibility for mobile and large screens */}
          <div className="col-span-12 flex lg:hidden">
            <MarqueeDemo />
          </div>
          <div className="mr-auto place-self-center lg:col-span-5 col-span-12 text-left order-last lg:order-none">
            <h1 className="text-4xl text-left font-bold mb-2">
              Who is <br/> RevAiv For?
            </h1>
            <p className="text-xl text-left mb-6">
              We provide personalized all inclusive features and services to
              alleviate your symptoms
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-4 py-2 text-black  font-bold bg-[#01C7B1] rounded-md shadow hover:bg-[#1A3344]"
            >
              Get Started
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-7 lg:flex lg:order-none">
            <MarqueeDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
