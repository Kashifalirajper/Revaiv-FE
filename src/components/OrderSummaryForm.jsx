import React, { useEffect, useState } from "react";
import { Card, message, Collapse, Input, Button, Divider } from "antd";
import { CloseOutlined, TagOutlined } from "@ant-design/icons";
import {loadStripe} from '@stripe/stripe-js';
const { Panel } = Collapse;

const OrderSummaryForm = () => {
  const [cartData, setCartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [promoCode, setPromoCode] = useState("");
  const token = localStorage.getItem("sessionToken"); // Fetch the token from localStorage

  const transformToPayload = () => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const items = storedProducts.map((product) => ({
      product: {
        id: product.productId,
      },
      subscription: product.subscriptionId
        ? { id: product.subscriptionId }
        : undefined,
      quantity: 1,
    }));

    return {
      coupon: {
        code: "PRV99", // Use the appropriate coupon code
      },
      items,
    };
  };

  const fetchCartData = async () => {
    if (!token) {
      message.error("You need to log in to proceed.");
      setLoading(false);
      return;
    }

    const payload = transformToPayload();

    try {
      const response = await fetch(
        "https://afd-revaiv-api-prod-efa5aqc5acbsc4f7.z01.azurefd.net/api/Cart",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            "x-api-version": "2.0",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setCartData(data);
        setLoading(false);
      } else {
        const errorData = await response.json();
        console.error("Error fetching cart:", errorData);
        message.error("Failed to fetch cart details. Please try again.");
        setLoading(false);
      }
    } catch (error) {
      console.error("Network Error:", error);
      message.error("Something went wrong. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  const handleCheckout = async () => {
    if (!cartData) return;
    const stripePromise = loadStripe(cartData.paymentSheet.publishableKey);
    try {

      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({ sessionId: cartData.cartId });


      if (error) {
        message.error("Payment failed. Please try again.");
      }
    } catch (error) {
      message.error("Something went wrong during payment. Please try again later.");
    }
  };

  const handleRemove = (index) => {
    const updatedCart = cartData.items.filter((_, i) => i !== index);
    setCartData({ ...cartData, items: updatedCart });
  };

  const applyPromoCode = () => {
    message.success(`Promo code ${promoCode} applied successfully!`);
  };

  if (loading) return <p>Loading cart details...</p>;
  if (!cartData || cartData.items.length === 0)
    return <p>No cart data available.</p>;

  const calculatedSubtotal = cartData.items.reduce(
    (acc, item) => acc + item.price.original,
    0
  );
  const calculatedTotal = calculatedSubtotal;
  return (
    <div className="bg-gray-100">
      <div className="bg-[#1A3333] h-16 mt-20 flex items-center">
        <div className="w-2/3 mx-auto">
          <p className="text-white text-left">
            % Apply Coupon to get special discount
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto flex flex-wrap lg:flex-nowrap gap-4 mt-6">
        {/* Summary Section */}
        <div className="max-w-lg w-full bg-white p-6 rounded-3xl shadow-md mx-auto">
          <h3 className="text-xl font-bold text-[#3B3B3B]">Summary</h3>
          <div className="grid gap-4 mt-5">
            {cartData.items.map((item, index) => (
              <Card
                key={index}
                hoverable
                className="w-full p-2 rounded-lg shadow-md cartCards border-[#C4E6DF] text-[#3B3B3B]"
                cover={
                  <img
                    alt={item?.product?.title}
                    src={item.product.images[0].imageUrl}
                    className="rounded-t-lg max-h-32"
                  />
                }
                title={item.product.title}
                extra={
                  <button
                    className="bg-[#FF0000] text-white rounded-full w-8 h-8"
                    onClick={() => handleRemove(index)}
                  >
                    <CloseOutlined className="" />
                  </button>
                }
              >
                <h4 className="font-bold text-lg text-[#3B3B3B] mt-4">
                  {item.product.subTitle}
                </h4>
                <p className="mt-2 text-[#3B3B3B]">{item.product.description}</p>
                <div className="mt-4 relative">
                  <div
                    key={item.subscription.id}
                    className="p-3 border rounded-lg mb-3 flex justify-between items-center border-gray-300"
                  >
                    <div>
                      <p className="font-bold text-[#296969]">
                        {item.subscription.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        {item.subscription.subTitle}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-[#02C6A1]">
                        {item.price.currency} {item.price.original}
                      </p>
                      <p className="text-xs text-gray-400">
                        Total {item.price.currency} {item.total}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Order Details Section */}
        <div className="bg-white p-6 rounded-3xl shadow-md max-w-lg lg:max-w-sm w-full mx-auto h-fit">
          <h3 className="text-xl font-bold mb-4">Order Details</h3>
          <div>
            {cartData.items.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-2 border border-[#C4E6DF] rounded-xl mb-2"
              >
                <span className="text-[#296969] text-sm lg:text-base">
                  {item.product.title} ({item.subscription.title})
                </span>
                <span className="font-medium text-[#296969]  text-sm lg:text-base">
                  {item.price.currency} {item.price.original.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          <Collapse
            className="mt-4 promoCode bg-[#F6F6F6]"
            expandIconPosition="end"
          >
            <Panel
              header={
                <span className="text-sm font-normal mb-0 text-[#3B3B3B]">
                  <TagOutlined className="mr-2 rotate-[270deg]" />I Have a Promo
                  Code
                </span>
              }
              key="1"
            >
              <div className="flex gap-2">
                <Input
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="h-8 rounded-lg border-[#64748b]"
                />
                <Button
                  type="primary"
                  onClick={applyPromoCode}
                  className="bg-slate-500"
                >
                  Apply
                </Button>
              </div>
            </Panel>
          </Collapse>
          <div className="bg-white mt-4 px-2">
            <h3 className="text-lg font-semibold mb-2 text-[#3B3B3B]">
              Payment Summary
            </h3>
            <div className="flex justify-between text-[#296969] text-base">
              <span>Subtotal</span>
              <span className="font-bold">
                {cartData.currency} {calculatedSubtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-[#296969] text-base mt-2">
              <span>Total</span>
              <span className="font-bold">
                {cartData.currency} {calculatedTotal.toFixed(2)}
              </span>
            </div>
          </div>

          <Divider className="w-full" />
          <div className="bg-white px-2 mt-2">
            <h3 className="text-lg font-bold mb-2 text-[#27696D]">
              Personal Information
            </h3>
            {["Name", "Phone"].map((label) => (
              <div className="relative mb-3" key={label}>
                <input
                  type="text"
                  id={label.toLowerCase().replace(/ /g, "_")}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-full border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#01C7B1] peer"
                  placeholder=" "
                />
                <label
                  htmlFor={label.toLowerCase().replace(/ /g, "_")}
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#01C7B1] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  {label}
                </label>
              </div>
            ))}
            <h3 className="text-lg font-bold mb-2 text-[#27696D]">Location</h3>
            {["Address 1", "Address 2", "City", "Country"].map((label) => (
              <div className="relative mb-3" key={label}>
                <input
                  type="text"
                  id={label.toLowerCase().replace(/ /g, "_")}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-full border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#01C7B1] peer"
                  placeholder=" "
                />
                <label
                  htmlFor={label.toLowerCase().replace(/ /g, "_")}
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#01C7B1] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  {label}
                </label>
              </div>
            ))}
          </div>

          <Divider className="w-full" />
          <Collapse
            className="mt-4 promoCode bg-[#F6F6F6]"
            expandIconPosition="end"
          >
            <Panel
              header={
                <p className="text-sm font-normal mb-0 text-[#3B3B3B]">
                  By continuing I agree to the{" "}
                  <span className="font-semibold text-[#FF0000]">
                    Payment Policy
                  </span>
                </p>
              }
              key="1"
            >
              <div className="flex gap-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores omnis quia quo eligendi voluptatem molestias,
                voluptatum aperiam non libero incidunt quam nam inventore
                assumenda, reprehenderit mollitia dolorum, corrupti distinctio
                odio et dolorem ad beatae error odit! Eaque in modi voluptas
                facilis veniam a porro, sed aliquam, quod voluptates iste ipsum.
              </div>
            </Panel>
          </Collapse>
          {/* Checkout Button */}
          <div className="mt-6 flex justify-center">
            <button
              className="w-full bg-[#27696D] text-white py-3 rounded-full font-semibold flex justify-between items-center px-6"
              onClick={handleCheckout}
            >
              <span className="font-medium">AED {calculatedTotal.toFixed(2)}</span>
              <span className="font-medium">Checkout →</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryForm;
