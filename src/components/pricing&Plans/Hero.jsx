import { Col, Divider, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/plans/logo.png";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="plans relative">
      <div className="flex flex-col justify-center items-center pt-20">
        <div className="mx-auto max-screen min-h-[250px] flex-col justify-center lg:min-h-[420px]">
          <Row gutter={[16, 16]} align="middle" justify="center">
            <Col xs={24} md={24} lg={20} className="flex flex-col items-center">
              <h1 className="font-Roboto text-center text-xl lg:text-left lg:text-[42px] font-semibold leading-none text-white">
                Personalized Plans Crafted Just for You
              </h1>
              <Divider style={{ background: "#fff" }} />
              <h1 className="smallScreenHide font-Roboto text-center text-3xl lg:text-left lg:text-6xl font-semibold  text-[#C9FFF9] italic">
                Get your money back if you don’t see result in <span className="text-white">15 days!</span>
              </h1>
              <h1 className="hidden smallScreenShow mb-10 font-Roboto text-center text-3xl lg:text-left lg:text-6xl font-semibold  text-[#C9FFF9] italic">
                Get your money back if you don’t see result in <span className="text-white">15 days!</span>
              </h1>
            </Col>
          </Row>
          <p className="text-base font-Roboto text-center lg:absolute lg:bottom-5 text-white">*Terms & Conditions Apply</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
