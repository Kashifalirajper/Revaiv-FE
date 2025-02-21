import { Col, Divider, Row } from "antd";
import React from "react";
import NavigationBar from './NavigationBar';
const Hero = () => {
  return (
    <div className="blogs relative">
      <div className="flex flex-col justify-center items-center pt-6">
        <div className="mx-auto max-screen  flex-col justify-center lg:justify-end min-h-[420px]">
          <Row gutter={[16, 16]} align="middle" justify="center">
            <Col xs={24} md={24} lg={24} className="flex flex-col items-center">
              <h1 className="font-Roboto text-center text-3xl lg:text-left lg:text-5xl font-normal text-white">
                <span className="font-bold">RevAiv</span> Blogs
              </h1>
            </Col>
            <Col xs={24} md={24} lg={24} className="flex flex-col items-center">
            <h1 className="font-Roboto text-center font-normal text-base lg:text-4xl  text-white mb-10">
              Learn about your health through reliable, medically-verified articles</h1>
            </Col>
          </Row>
        </div>
      </div>
      <NavigationBar />
    </div>
  );
};

export default Hero;
