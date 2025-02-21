import React from "react";
import { Row, Col, Flex } from "antd";
import { useNavigate } from "react-router-dom";

import arrowRight from "../../assets/images/arrowRight.png";
import { MarqueeDemo } from "../CardSlider";

const FeatureSection = () => {
  const navigate = useNavigate();

  return (
    <div className={`featureBG min-h-[500px] paddingTop10  flex items-center  text-white`}>
      <div className="max-screen flex-col mx-auto padding0">
        <Row gutter={[32, 32]} align="middle" className="rowGap py-1 lg:py-10">
          <Col xs={24} lg={12} className="text-left">
            <h1 className="text-2xl font-medium lg:text-5xl lg:font-bold mb-0 lg:mb-5 smallScreenTextCenter font-Roboto">
              Who is <br /> RevAiv For?
            </h1>
            <Flex align="center" className="mb-5 gap-4">
              <p className="text-xl font-normal hidden lg:block font-Roboto">
                If you are struggling with any of this <br /> condition, then we
                are here to listen.
              </p>
              <img
                src={arrowRight}
                alt="arrowRight"
                className="width88 h-5 smallScreenHide"
              />
            </Flex>
          </Col>
          <Col xs={24} lg={12} className="padding0">
            <MarqueeDemo />
            <div className="block lg:hidden mt-8 text-center">
              <p className="text-base mb-6 font-Roboto">
                If you are struggling with any of this <br /> condition, then we
                are here to listen.
              </p>
              <button onClick={() => navigate("/get-started")} className="text-xl py-2 px-4 rounded-xl bg-[#ffffff] text-black mx-auto mb-5">
                Get Started
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FeatureSection;
