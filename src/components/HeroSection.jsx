import React from "react";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import kMobile from "../assets/images/kMobile.png";
import mobileImg from "../assets/images/mobileNew.png";
import vector from "../assets/images/vector.png";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <img src={vector} alt="vector" className="absolute right-[-10px] w-2/3 z-[-11] smallScreenHide"/>
      <img src={kMobile} alt="mobile" className="absolute top-20 right-[-100px] h-[1000px] z-[-10] smallScreenHide" />

    <section className="max-screen mt-10 mx-auto">
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} lg={11} className="text-left p-2 mb-4  mt-6 md:mt-40">
          <h1 className="titleStyle flex-Col mb-8 md:mb-10">
            Hello, <span className="text-[#296969]">I’m RevAiv</span>
          </h1>
          <h2 className="mb-2 lg:text-[32px] md:text-2xl text-xl font-normal text-[#3B3B3B] leading-none font-Roboto">
            Your Health Companion!
          </h2>
          <p className="mb-4 md:mb-6 font-normal text-[#3B3B3B] text-base  lg:mb-10 md:text-lg lg:text-xl font-Roboto">
          Let's manage your health goals together. Whether it's weight gain, acne, hair fall or any other chronic condition, I'm here to help.
          </p>
          <button onClick={() => navigate("/get-started")} type="button" className="getStartedBtn bg-[#1A3333] text-white">
            Get Started
          </button>
        </Col>
        <Col xs={24} lg={13} className="text-center">
          {/* For larger screens */}
          <div className="hidden md:block">
          </div>
          {/* For smaller screens */}
          <div className="hide  dis-block">
            <img src={mobileImg} alt="mobileImg" className="w-full mt-[-30px]" />
            <figcaption className="flex flex-wrap gap-2 items-center justify-evenly mt-[-30px]">
              <button
                type="button"
                className="flex items-center justify-center w-32 text-black bg-white rounded-lg shadow-xl h-14"
              >
                <div className="mr-1">
                  <svg viewBox="30 336.7 120.9 129.2" width="18">
                    <path
                      fill="#FFD400"
                      d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                    ></path>
                    <path
                      fill="#FF3333"
                      d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                    ></path>
                    <path
                      fill="#48FF48"
                      d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                    ></path>
                    <path
                      fill="#3BCCFF"
                      d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-left text-black">GET IT ON</div>
                  <div className="-mt-1 font-sans text-base font-semibold  text-black">
                    Google Play
                  </div>
                </div>
              </button>
              <button
                type="button"
                className="flex items-center justify-center w-32 text-black bg-white rounded-lg shadow-xl h-14"
              >
                <div className="mr-1">
                  <svg viewBox="0 0 384 512" width="18" className="text-black">
                    <path
                      fill="currentColor"
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-black">Download on the</div>
                  <div className="-mt-1 font-sans text-base font-semibold text-black">
                    App Store
                  </div>
                </div>
              </button>
            </figcaption>
          </div>
        </Col>
      </Row>
    </section>
    </div>
  );
};

export default HeroSection;
