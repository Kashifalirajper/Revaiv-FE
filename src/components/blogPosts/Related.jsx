import { Col, Row } from 'antd'
import React from 'react'
import image1 from "../../assets/images/blogs/posts/card/image1.png"
import image2 from "../../assets/images/blogs/posts/card/image2.png"
import image3 from "../../assets/images/blogs/posts/card/image3.png"

const Related = () => {
  return (
    <div className='bg-[#F0F0F0] pt-10 pb-10 min-h-screen flex items-center justify-center'>
        <div className="max-screen flex-col">
            <h1 className='text-[#296969] text-5xl font-bold text-center mb-10'>Related articles</h1>

            <Row gutter={16}>
                <Col xs={24} md={24} lg={8}>
                    <img src={image1} alt="image1" />
                    <h1 className='text-[#1A3333] text-lg lg:text-3xl text-center lg:text-left font-bold mt-4'>PCOS And Mental Health: Unveiling the connection</h1>
                </Col>
                <Col xs={24} md={24} lg={8}>
                    <img src={image2} alt="image2" />
                    <h1 className='text-[#1A3333]  text-lg lg:text-3xl  text-center lg:text-left font-bold mt-4'>Hypothyroidism Uncovered: Symptoms, Causes, and Effective Management</h1>
                </Col>
                <Col xs={24} md={24} lg={8}>
                    <img src={image3} alt="image3" />
                    <h1 className='text-[#1A3333]  text-lg lg:text-3xl  text-center lg:text-left font-bold mt-4'>5 Best Weight-loss Exercises for PCOS</h1>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default Related