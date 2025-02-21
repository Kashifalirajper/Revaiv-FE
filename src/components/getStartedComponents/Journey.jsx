import React from "react";
import journey from "../../assets/images/getStarted/journey.png";
import { Col, Row } from "antd";

const Journey = () => {
  return (
    <div className="bg-white">
      <div className="max-screen p-5  mx-auto flex-col">
        <h1 className="text-2xl lg:text-5xl text-[#3B3B3B] font-bold text-center mt-20 mb-10">
          How your self-healing journey will be
        </h1>
        <Row justify="center">
          <Col xs={24} md={12} lg={12}>
            <img src={journey} alt="journey" className="w-100 mb-20" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Journey;
