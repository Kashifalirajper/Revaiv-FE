import { Col, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

import hero from "../../assets/images/blogs/posts/banner.png";
import mobileHero from "../../assets/images/blogs/posts/mobileBanner.png";
import btn from "../../assets/images/blogs/posts/book-btn.png";
const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F0F0F0] mt-2 lg:mt-16 relative">
      <Row align="middle" justify="center">
        <Col xs={24} md={24} lg={12} className="flex flex-col gap-12  p-16 smallScreenHide">
          <p className="font-Roboto text-lg">
            Home {">"} Blogs {">"} PCOS And Mental Health: Unveiling the
            connection
          </p>
          <h1 className="text-left text-[#296969] text-5xl font-bold">
            PCOS And Mental Health: Unveiling the connection
          </h1>
          <button>
            <img src={btn} alt="btn" className="w-100" />
          </button>
          <p className="font-Roboto text-lg">Posted on September 13, 2024.</p>
        </Col>
        <div className="absolute bottom-2 left-0 z-10 hidden smallScreenShow">
        <Col xs={24} md={24} lg={12} className="flex flex-col gap-5  p-2">
          <p className="font-Roboto text-base text-white">
            Home {">"} Blogs {">"} PCOS And Mental Health: <br />Unveiling the
            connection
          </p>
          <h1 className="text-left text-white text-3xl font-bold">
            PCOS And Mental <br />Health: Unveiling the <br />connection
          </h1>
          <button onClick={() => navigate("/get-started")}>
            <img src={btn} alt="btn" className="w-40" />
          </button>
          <p className="font-Roboto text-lg text-white">Posted on September 13, 2024.</p>
        </Col>
        </div>
        <Col xs={24} md={24} lg={12}>
          <img src={hero} alt="hero" className="w-100 h-100 min-h-[85vh] lg:min-h-96 smallScreenHideMobile" />
          <img src={mobileHero} alt="hero" className="w-100 h-100 min-h-[85vh] lg:min-h-96 hidden showSmallScreenMobile" />
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
