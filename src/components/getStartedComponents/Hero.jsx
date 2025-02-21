import { Col, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/Logo.png"
import Slider from "../Slider";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="getStartedBg">
      <div className="flex flex-col justify-center items-center pt-20">
        <div className="mx-auto max-screen min-h-[250px] lg:min-h-[550px] lg:mt-20">
          <Row gutter={[16, 16]} align="start">
            <Col xs={24} lg={24}>
              <h1 className="getStarted-title smallScreenHide">
                <span>Take Control</span> of Your <br/> Chronic condition <br/>with{" "}
                <span>RevAiv</span>
              </h1>
              <h1 className="hidden smallScreenShow getStarted-title ">
                <span>Take Control</span> of <br/>Your Chronic<br/> condition with{" "}<br/>
                <span>RevAiv</span>
              </h1>
            </Col>
          </Row>
        </div>
      <Slider/>
      </div>
    </div>
  );
};

export default Hero;
