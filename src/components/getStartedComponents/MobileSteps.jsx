import React, { useState } from "react";
import {
  Form,
  Checkbox,
  Button,
  Row,
  Col,
  Card,
  Progress,
  Flex,
  Input,
  message,
  DatePicker,
  Modal,
} from "antd";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

import back from "../../assets/images/arrow-left.png";

const AnalyseSteps = () => {
  const [form] = Form.useForm();
  const [otpForm] = Form.useForm();

  const [current, setCurrent] = useState(1);
  const [isOtpModalVisible, setIsOtpModalVisible] = useState(false);
  const [otpTokenSigned, setOtpTokenSigned] = useState(null);
  const [savedFormValues, setSavedFormValues] = useState({});
  const navigate = useNavigate();

  const onFinish = (values) => {
    // Assuming there's only one step for now, but you can adjust this
    if (current === 5) {
      setCurrent(1);
    } else {
      setCurrent(current + 1);
    }
  };

  const onFinishRevail = async (values) => {
    // Format the date of birth if provided
    if (values.dob) {
      values.dob = dayjs(values.dob).format("YYYY-MM-DD");
    }

    // Save form values to state
    setSavedFormValues(values);

    // Extract email for the API request
    const { email } = values;

    // Prepare the request body
    const requestBody = {
      signInId: email,
    };

    try {
      // Make the API call
      const response = await fetch(
        "https://afd-revaiv-api-prod-efa5aqc5acbsc4f7.z01.azurefd.net/api/Auth/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      // Check if the response is successful
      if (response.ok) {
        const result = await response.json();
        setOtpTokenSigned(result.otpTokenSigned); // Save the OTP token for validation
        setIsOtpModalVisible(true);
      } else {
        const errorData = await response.json();
        console.error("API Error:", errorData);
        message.error("Failed to reveal your plan. Please try again.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      message.error("Something went wrong. Please try again later.");
    }
  };

  const handleOtpSubmit = async (otp) => {
    const requestBody = {
      otp,
      otpTokenSigned,
    };

    try {
      const response = await fetch(
        "https://afd-revaiv-api-prod-efa5aqc5acbsc4f7.z01.azurefd.net/api/Auth/validateOtp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        const result = await response.json();
        const { actionTokenSigned } = result;
        const actionType = actionTokenSigned.actionToken.actionType;

        if (actionType === "Login") {
          // Call the Login API
          await handleLogin(actionTokenSigned);
        } else if (actionType === "UsersCreate") {
          // Call the Users API
          await handleUserCreate(actionTokenSigned);
        } else {
          message.warning("Unhandled action type. Please contact support.");
        }
        otpForm.resetFields(); // Clear OTP form
        setIsOtpModalVisible(false); // Close OTP modal
        form.resetFields(); // Clear main form
      } else {
        const errorData = await response.json();
        console.error("OTP Validation Error:", errorData);
        message.error("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      message.error("Something went wrong. Please try again later.");
    }
  };

  const handleLogin = async (actionTokenSigned) => {
    const requestBody = {
      actionTokenSigned,
    };

    try {
      const response = await fetch(
        "https://afd-revaiv-api-prod-efa5aqc5acbsc4f7.z01.azurefd.net/api/Auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Login Success:", result);
        message.success("Login successful!");
        // Save session token to localStorage
        localStorage.setItem("sessionToken", result.sessionToken.token);

        // Update user profile with saved form values
        await updateUserProfile(savedFormValues);
      } else {
        const errorData = await response.json();
        console.error("Login Error:", errorData);
        message.error("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      message.error("Something went wrong. Please try again later.");
    }
  };

  const handleUserCreate = async (actionTokenSigned) => {
    const requestBody = {
      actionTokenSigned,
    };

    try {
      const response = await fetch(
        "https://afd-revaiv-api-prod-efa5aqc5acbsc4f7.z01.azurefd.net/api/Users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        const result = await response.json();
        message.success("User created successfully!");
        // Save session token to localStorage
        localStorage.setItem("sessionToken", result.sessionToken.token);

        // Update user profile with saved form values
        await updateUserProfile(savedFormValues);
      } else {
        const errorData = await response.json();
        console.error("User Creation Error:", errorData);
        message.error("User creation failed. Please try again.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      message.error("Something went wrong. Please try again later.");
    }
  };

  const updateUserProfile = async (values) => {
    const { name, dob, country } = values;

    // Parse the date of birth
    const [yearOfBirth, monthOfBirth, dayOfBirth] = dob.split("-");

    const userProfileData = {
      name,
      yearOfBirth: parseInt(yearOfBirth, 10),
      monthOfBirth: parseInt(monthOfBirth, 10),
      dayOfBirth: parseInt(dayOfBirth, 10),
      referralCode: null,
      countryAlphaCode: country,
    };

    try {
      const response = await fetch(
        "https://afd-revaiv-api-prod-efa5aqc5acbsc4f7.z01.azurefd.net/api/Users",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("sessionToken")}`,
          },
          body: JSON.stringify(userProfileData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        message.success("Profile updated successfully!");
        // Navigate to /plans after profile update
        navigate("/plans");
      } else {
        const errorData = await response.json();
        console.error("Profile Update Error:", errorData);
        message.error("Failed to update profile. Please try again.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      message.error("Something went wrong. Please try again later.");
    }
  };

  const handleBack = () => {
    if (current === 1) {
      setCurrent(1);
    } else {
      setCurrent(current - 1);
    }
  };

  const formSteps = [
    {
      title: "Are you suffering from any following",
      subTitle: "Select all that apply",
      name: "problems",
      options: [
        { label: "Obesity", value: "obesity" },
        { label: "PCOS", value: "pcos" },
        { label: "Diabetes/Pre-Diabetes", value: "diabetes" },
        { label: "Arthritis", value: "arthritis" },
        { label: "Heart disease", value: "heart_disease" },
        { label: "Low testosterone level", value: "low_testosterone" },
        { label: "Thyroid related problem", value: "thyroid" },
        { label: "Fatty liver disease", value: "fatty_liver" },
        { label: "No disease, just want to be fit", value: "no_disease" },
      ],
    },
    {
      title: "How long have you been suffering?",
      subTitle: "",
      name: "duration",
      options: [
        { label: "Less than 6 months", value: "less_6_months" },
        { label: "Less than 1 year", value: "less_1_year" },
        { label: "1-3 years", value: "1_3_years" },
        { label: "More than 3 years", value: "more_3_years" },
      ],
    },
    {
      title: "What's your goal by joining RevAvi?",
      subTitle: "Select all that apply",
      name: "goals",
      options: [
        { label: "I want to lose my weight", value: "lose_weight" },
        { label: "I want to reduce my Acne", value: "reduce_acne" },
        {
          label: "I want to reduce my face/body excessive hair",
          value: "reduce_hair",
        },
        {
          label: "I want to improve my sleep or sleep cycle",
          value: "improve_sleep",
        },
        { label: "I want my periods to be normal", value: "normal_periods" },
        {
          label: "I want to decrease my cholesterol level",
          value: "decrease_cholesterol",
        },
        {
          label:
            "I don't have any problem but I want to maintain a healthy lifestyle",
          value: "healthy_lifestyle",
        },
      ],
    },
    {
      title: "How committed are you to achieve your goal?",
      subTitle: "",
      name: "commitment",
      options: [
        { label: "Highly committed", value: "highly_committed" },
        { label: "Moderately Committed", value: "moderately_committed" },
        { label: "Not Sure", value: "not_sure" },
      ],
    },
  ];

  return (
    <>
      <div className="bg-white min-h-screen max-h-screen relative flex flex-col align-middle items-center p-2">
        {current <= 4 ? (
          <>
            <Flex style={{ width: "100%" }}>
              <Progress
                percent={current >= 1 ? 100 : 0}
                size="small"
                showInfo={false}
                strokeColor="#12A594"
              />
              <Progress
                percent={current >= 2 ? 100 : 0}
                size="small"
                showInfo={false}
                strokeColor="#12A594"
              />
              <Progress
                percent={current >= 3 ? 100 : 0}
                size="small"
                showInfo={false}
                strokeColor="#12A594"
              />
              <Progress
                percent={current >= 4 ? 100 : 0}
                size="small"
                showInfo={false}
                strokeColor="#12A594"
              />
            </Flex>
            <Form.Item className="mb-0 mr-auto">
              <Button
                onClick={() => navigate("/get-started")}
                type="text"
                className="padding0"
              >
                <img src={back} alt="back" />
              </Button>
            </Form.Item>
            <Form name="health_survey" onFinish={onFinish} layout="vertical">
              <div>
                <h2 className="text-2xl lg:text-5xl font-bold mb-4 text-[#3B3B3B]">
                  {formSteps[current - 1]?.title}
                </h2>
                <p className="text-base lg:text-2xl mb-4 min-h-8">
                  {formSteps[current - 1]?.subTitle}
                </p>
                <Form.Item
                  name="problems"
                  valuePropName="checked"
                  className="min-h-44"
                >
                  <Checkbox.Group style={{ width: "100%" }}>
                    <Row gutter={[16, 16]}>
                      {formSteps[current - 1].options.map((option, index) => (
                        <Col
                          xs={24}
                          sm={24}
                          md={24}
                          lg={
                            formSteps[current - 1].options.length > 4 ? 12 : 24
                          }
                          key={index}
                        >
                          <Checkbox value={option.value}>
                            {option.label}
                          </Checkbox>
                        </Col>
                      ))}
                    </Row>
                  </Checkbox.Group>
                </Form.Item>
              </div>
              <Row gutter={16} align="middle" justify="space-between">
                {current > 1 ? (
                  <Col span={24}>
                    <Form.Item className="mb-0">
                      <Button
                        onClick={handleBack}
                        className="text-center mb-2"
                        style={{ width: "100%" }}
                      >
                        Back
                      </Button>
                    </Form.Item>
                  </Col>
                ) : (
                  ""
                )}
                <Col span={24}>
                  <Form.Item className="mb-0">
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{
                        backgroundColor: "#02C6A1",
                        borderColor: "#02C6A1",
                        width: "100%",
                      }}
                    >
                      NEXT
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </>
        ) : (
          <Card
            style={{
              width: "100%",
              maxWidth: "960px",
              margin: "auto auto",
              padding: "5px 30px",
            }}
            className="lastCardBg  mt-10"
          >
            <h2 className="text-5xl font-bold mb-4 text-center">
              Your care plan is ready!
            </h2>
            <Form
              form={form}
              onFinish={onFinishRevail}
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 18 }}
              colon={false}
            >
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input placeholder="Enter your name" />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                    type: "email",
                  },
                ]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>
              <Form.Item
                name="country"
                label="Country"
                rules={[
                  { required: true, message: "Please input your country!" },
                ]}
              >
                <Input placeholder="Enter your country" />
              </Form.Item>
              <Form.Item
                name="dob"
                label="D.O.B"
                rules={[
                  { required: true, message: "Please input your D.O.B!" },
                ]}
              >
                <DatePicker
                  placeholder="Select your D.O.B"
                  format="YYYY-MM-DD"
                  style={{ width: "100%" }}
                />
              </Form.Item>
              <Form.Item label=" ">
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                  className="revailPlanBtn"
                >
                  Reveal My Plan
                </Button>
                <Button
                  style={{ marginTop: "10px", width: "100%", border: "none" }}
                  onClick={handleBack}
                >
                  Back
                </Button>
              </Form.Item>
            </Form>
          </Card>
        )}
      </div>

      {/* OTP Modal */}
      <Modal
        title="Enter OTP"
        visible={isOtpModalVisible}
        onCancel={() => setIsOtpModalVisible(false)}
        footer={null}
        centered
      >
        <Form
          form={otpForm}
          onFinish={({ otp }) => handleOtpSubmit(otp)}
          layout="vertical"
          name="otpForm"
        >
          <Form.Item
            name="otp"
            label="OTP"
            rules={[{ required: true, message: "Please enter the OTP!" }]}
          >
            <Input.OTP length={6} placeholder="Enter OTP" />
          </Form.Item>
          <Button htmlType="submit">Submit OTP</Button>
        </Form>
      </Modal>
    </>
  );
};

export default AnalyseSteps;
