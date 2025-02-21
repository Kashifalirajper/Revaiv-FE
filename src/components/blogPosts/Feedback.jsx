import { Form, Input, Button, Row, Col } from 'antd';
import React from 'react'

const Feedback = () => {
     // Form submit handler
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className='pt-10 pb-10 bg-white min-h-screen flex items-center'>
        <div className="max-screen flex-col items-start mx-auto">
      <h1 className='text-[#296969] text-4xl font-bold mb-2'>Leave a comment</h1>
      <p className='text-xl text-[#3B3B3B] mb-2'>All comments are moderated before being published.</p>
      <p className='text-xl text-[#3B3B3B] mb-4'>This site is protected by reCaptcha and the Google Privacy Policy and Terms of Service apply.</p>
      
      <Form
        name="feedback_form"
        onFinish={onFinish}
        layout="vertical"
        autoComplete="off"
      >
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={12}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input placeholder="Enter your name" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12}>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24}>
            <Form.Item
              name="comment"
              label="Comment"
              rules={[{ required: true, message: 'Please input your comment!' }]}
            >
              <Input.TextArea rows={4} placeholder="Enter your comment" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} className='text-center'>
            <Button type="primary" htmlType="submit" style={{background:'#01C7B1'}}>Post Comment</Button>
          </Col>
        </Row>
      </Form>
      <div className="mt-10 px-3 py-10 bg-[#0C2525] text-white rounded-[20px] lg:rounded-[20px]  w-full">
          <div className="mx-auto flex flex-col items-center justify-between gap-6 sm:flex-row max-w-screen-lg">
            <div className="sm:w-2/5">
              <p className="mt-3 text-sm font-Roboto lg:text-xl leading-6 tracking-wide font-normal text-white smallScreenTextCenter">
                Sign up for our Newsletter to
              </p>
              <div className="text-2xl font-Roboto lg:text-3xl font-extrabold tracking-wide smallScreenTextCenter">
                Get Experts’ Advice
              </div>
            </div>
            <div className="w-full sm:w-3/5">
              <form className="flex text-center rounded-full bg-[#124040] px-2 py-2 focus-within:ring-2 focus-within:ring-[#34D1BF] hover:ring-2 hover:ring-[#34D1BF]">
                <input className="w-full smallScreenTextCenter text-xl rounded-full appearance-none bg-[#124040] focus:outline-none text-white placeholder-gray-300" placeholder="Your Email" />
                <button
                  className="smallScreenHide font-Roboto ml-2 shrink-0 text-2xl rounded-full bg-gradient-to-br from-[#2D8383] to-[#34D1BF] px-3 py-1 font-normal hover:from-[#3A6D6D] hover:to-[#2CA6A6] focus:outline-none focus:ring-2 focus:ring-[#2CA6A6]/50"
                  type="submit"
                >
                  Sign me up!
                </button>
              </form>
              <button
                  className="hidden font-Roboto mx-auto smallScreenShow mt-4 text-sm px-2 py-5 rounded-full bg-gradient-to-br from-[#2D8383] to-[#34D1BF] font-normal hover:from-[#3A6D6D] hover:to-[#2CA6A6] focus:outline-none focus:ring-2 focus:ring-[#2CA6A6]/50"
                  type="submit"
                >
                  Sign me up!
                </button>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Feedback