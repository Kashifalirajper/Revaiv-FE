import React from "react";
import { Row, Col, Flex } from "antd";
import { useNavigate } from "react-router-dom";
import { MarqueeDemo } from "./CardSlider";
import arrow from "../assets/images/above.png";
import arrowRight from "../assets/images/arrowRight.png";

const FeatureSection = () => {
  const navigate = useNavigate();

  return (
    <div className={`featureBG min-h-[500px] mt-20 lg:mt-28 paddingTop10   text-white`}>
      <div className="max-screen flex-col mx-auto padding0 ">
        <Flex justify="center" className="mt-[-60px]">
          <img src={arrow} alt="arrow" className="w-[106px]" style={{zIndex:'99'}} />
        </Flex>
        <Row gutter={[32, 32]} align="middle" className="rowGap py-1  ">
          <Col xs={24} lg={12} className="text-left">
            <h1 className="text-2xl leading-none font-medium mb-3 lg:text-5xl lg:font-bold lg:mb-10 smallScreenTextCenter font-Roboto">
              Who is <br /> RevAiv For?
            </h1>
            <Flex align="center" className="mb-10 gap-4 smallScreenHide">
              <p className="text-xl font-normal hidden lg:block font-Roboto">
                If you are struggling with any of this <br /> condition, then we
                are here to listen.
              </p>
              <img
                src={arrowRight}
                alt="arrowRight"
                className=" h-5 "
              />
            </Flex>
            <button onClick={() => navigate("/get-started")} className="getStartedBtn bg-[#01C7B1] text-white smallScreenHide">
              Get Started
            </button>
          </Col>
          <Col xs={24} lg={12} className="padding0">
            <MarqueeDemo />
            <div className="block lg:hidden mt-8 text-center">
              <p className="text-base mb-6 font-Roboto">
                If you are struggling with any of this <br /> condition, then we
                are here to listen.
              </p>
              <button onClick={() => navigate("/get-started")} className="text-xl py-2 px-4 rounded-xl bg-[#ffffff] text-[#1A3333] mx-auto mb-8">
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
