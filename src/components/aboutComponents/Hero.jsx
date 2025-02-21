import { Col, Row } from "antd";
import React from "react";
import mobile from "../../assets/images/aboutHero.png";
import visionImage from "../../assets/images/about-us/Vision.png"; // Replace with your actual vision image path

const Hero = () => {
  return (
    <div className="aboutUs relative ">
      <div className="flex flex-col justify-center items-center pt-16">
        <div className="mx-auto max-screen flex-col justify-center items-center min-h-screen">
          <Row
            gutter={[16, 16]}
            align="middle"
            justify="center"
            className="mt-12"
          >
            <Col xs={24} md={12}>
              <h1 className="text-3xl font-bold text-center md:text-left text-gray-800 mt-12 md:mt-0">
                About Us
              </h1>
              <p className="mt-4 text-lg text-gray-700 leading-7">
                Welcome to Revaiv Health, where our mission is to revolutionize
                the management of chronic conditions and enhance the health of
                individuals through innovative, AI-driven solutions. We are
                dedicated to creating a positive impact on the lives of our
                users while fostering a robust ecosystem for our business
                partners to thrive and excel in their practices.
              </p>
              <p className="mt-4 text-lg text-gray-700 leading-7">
                At Revaiv Health, we understand the challenges faced by
                individuals managing chronic conditions. Our commitment to
                personalized, evidence-based care drives us to develop solutions
                that not only empower patients but also support healthcare
                providers. Through advanced care plan solutions, we tailor our
                offerings to meet the unique needs of both consumers and
                healthcare professionals, ensuring a seamless and effective
                health management experience.
              </p>
            </Col>
            <Col xs={24} md={12} className="flex justify-center">
              <div className="relative">
                <img
                  src={mobile}
                  alt="Health app preview"
                  className="w-64 md:w-80 lg:w-full"
                />
              </div>
            </Col>
          </Row>

          {/* Vision Section */}
          <Row
            gutter={[16, 16]}
            justify="center"
            className="mt-20 mb-[-140px] w-full"
          >
            <Col span={24}>
              <div className="bg-white  shadow-lg rounded-3xl p-4 lg:p-8 flex flex-col md:flex-row items-start">
                <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0 rounded-3xl">
                  <img
                    src={visionImage}
                    alt="Our Vision"
                    className="w-40 h-40 md:w-full md:h-60 rounded-3xl"
                  />
                </div>
                <div className="w-full md:w-2/3 pl-4">
                  <h2 className="text-2xl lg:text-5xl font-bold text-black mb-4 font-Roboto">
                    Our Vision
                  </h2>
                  <p className="text-[#3B3B3B] text-lg lg:text-2xl leading-7">
                    We envision a world where chronic conditions are managed
                    with ease, and individuals can lead healthier, more
                    fulfilling lives. By integrating cutting-edge technology
                    with compassionate care, we aim to transform the healthcare
                    landscape and provide accessible, actionable insights to
                    all.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Hero;
