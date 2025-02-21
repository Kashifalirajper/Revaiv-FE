import React from "react";
import { Row, Col, Collapse } from "antd";


const faqs = [
  {
    key: "1",
    label: "What is RevAiv?",
    children: <p className="text-base">RevAiv is an all-in-one health application to manage and improve your hormonal symptoms and chronic conditions. We provide a hybrid solution that combines clinical features but a holistic approach. Whether your body needs a customized wellness plan including but not limited to diet, fitness, health coaching or you are a self starter who can manage just by keeping a track of lifestyle progress. RevAiv covers you all. We support PCOS, Thyroid, Chronic Weight gain and much more.</p>
  },
  {
    key: "2",
    label: "Can RevAiv cure my chronic hormonal issues?",
    children: <p className="text-base">Yes, RevAiv can help manage your chronic hormonal issues by providing a comprehensive approach to your health. It tracks your health parameters and progress on a daily basis, helping you understand patterns in your hormonal fluctuations. Additionally, it offers customized meal and fitness plans tailored to your specific hormonal imbalances, ensuring you receive the right nutrition and exercise for your condition. RevAiv also provides ongoing support and guidance, adapting to your needs to help you effectively manage your hormonal disturbances and improve your overall well-being.</p>
  },
  {
    key: "3",
    label: "Is RevAiv an alternative to my doctor?",
    children: <p className="text-base">No, RevAiv is not a substitute for your doctor. Instead, it acts as a helpful tool to support your doctor in understanding your body more efficiently. By tracking your symptoms, progress, and providing personalized meal and fitness plans, RevAiv offers insights that complement your medical care. Its holistic approach helps address multiple aspects of your health, allowing your doctor to make more informed decisions and ensuring a more comprehensive understanding of your condition.</p>
  },
  {
    key: "4",
    label: "What is RevAiv Health Assessment?",
    children: <p className="text-base">RevAiv Health Assessment is essentially a tool designed to understand the severity of your symptoms and gain insights into your condition. It helps evaluate the state of your health and provides you with results that guide how to manage your symptoms and disease more effectively. By assessing various aspects of your well-being, it creates a clear picture of your health needs, enabling you to take better control of your care.</p>
  },
  {
    key: "5",
    label:
      "What is RevAiv's daily progress tracking and why should I track my daily progress?",
    children: <p className="text-base">Daily Progress tracking is a scientific clinical tracking system designed by RevAiv’s expert clinical team. This tracker allows you to track 7 different parameters of your daily lifestyle. With the input provided by you in the tracker, RevAiv’s Ai shows you your score which you can compare with the recommended score needed for your body. This will help you understand how much you are lacking and what needs to be improved in your lifestyle in order to reach the optimal score. Keeping a consistent optimal score for 16 -20 weeks will help you reduce and reversing your chronic symptoms. you should be tracking your daily progress because this will help you in understanding you body, and further enhancing lifestyle parameters, getting ideal diet, fitness, sleep and others Tracking your progress daily not only keeps you consistent but also motivated and enthusiastic to achieve your health goals.</p>
  },
  {
    key: "6",
    label: "What are RevAiv plans?",
    children: <p className="text-base">RevAiv’s plans are designed around diet and fitness to help you achieve your health goals efficiently and easily. Our personalized diet plans consider your health parameters such as age, BMI, and symptom levels. Each meal is tailored to your body’s needs and preferences, whether you're managing a chronic hormonal condition or maintaining a healthy lifestyle. With simple, targeted recipes, our approach directly addresses your symptoms to improve your overall well-being. Our fitness plans blend technology with personalization, targeting your specific fitness or therapeutic goals. Whether you want to tone your body, recover from injury, or restore hormonal balance, RevAiv’s fitness plans will guide through AI train and real time feedback.</p>
  },
];


const FaqSection = () => {
  return (
    <section className="bg-[#f0f0f0] pt-4 lg:pt-10 lg:pb-10">
      <div className="max-screen mx-auto p-2 lg:p-5">
        <div
          className="rounded-[20px] lg:rounded-[40px]  shadow-lg p-4 w-full"
          style={{
            background: "linear-gradient(249deg, #F0F8F4 0%, #F5F4FF 100%)",
            border: "5px solid #FFF",
          }}
        >
          <Row gutter={[16, 16]} className="px-4 py-8 padding0">
            <Col xs={24} lg={9} className="text-left">
              <h1 className="text-xl smallScreenHide font-medium lg:text-5xl text-[#3B3B3B] lg:font-bold mb-2 pt-4 font-Roboto smallScreenTextCenter">
                Frequently <br /> Asked <br /> Questions
              </h1>
            </Col>
            <Col xs={24} lg={9} className="text-left hidden smallScreenShow">
              <h1 className="text-xl  font-medium lg:text-5xl text-[#3B3B3B] lg:font-bold mb-2 pt-4 font-Roboto smallScreenTextCenter">
                Frequently Asked <br /> Questions
              </h1>
            </Col>
            <Col xs={24} lg={14}>
              <Collapse items={faqs}  expandIconPosition="end" />
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
