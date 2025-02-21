import { Col, Divider, Row } from "antd";
import React from "react";
const Hero = () => {
  return (
    <div className="business relative">
      <div className="flex flex-col justify-center items-center pt-6">
        <div className="mx-auto max-screen  flex-col justify-center lg:justify-end min-h-[420px]">
          <Row gutter={[16, 16]} align="middle" justify="center">
            <Col xs={24} md={24} lg={24} className="flex flex-col items-center">
              <h1 className="font-Roboto text-center text-3xl lg:text-left lg:text-4xl font-normal text-white">
                Are you a  <span className="font-bold"> health coach, clinic</span>  or a <span className="font-bold">  practicing doctor?</span> 
              </h1>
            </Col>
            <Col xs={24} md={24} lg={24} className="flex flex-col items-center">
            <h1 className="font-Roboto text-center font-normal text-base lg:text-3xl  text-white mb-10">
            Fill up the form below, our team will reach out to you shortly.</h1>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Hero;
