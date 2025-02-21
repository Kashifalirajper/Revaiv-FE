import React, { useState, useEffect } from "react";
import { Card, Button, message } from "antd";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubscriptions, setSelectedSubscriptions] = useState({});
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("sessionToken"); // Fetch the token from localStorage
    if (!token) {
      setIsAuthorized(false);
      setLoading(false);
    } else {
      setIsAuthorized(true);
      fetchProducts(token);
    }
  }, []);

  const fetchProducts = async (token) => {
    try {
      const response = await fetch(
        "https://afd-revaiv-api-prod-efa5aqc5acbsc4f7.z01.azurefd.net/api/products",
        {
          method: "GET",
          headers: {
            "x-api-version": "2.0",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        const serviceProducts = data.products.filter(
          (product) => product.productType === "Service"
        );
        setProducts(serviceProducts);
      } else {
        const errorData = await response.json();
        console.error("Error fetching products:", errorData);
        message.error("Failed to fetch products. Please try again.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      message.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubscriptionSelect = (productId, subscriptionId) => {
    setSelectedSubscriptions((prev) => ({
      ...prev,
      [productId]: subscriptionId,
    }));
  };

  const handleProceed = () => {
    const selectedPlans = Object.keys(selectedSubscriptions).map(
      (productId) => {
        const product = products.find((product) => product.id === productId);
        const subscription = product.subscriptions.find(
          (sub) => sub.id === selectedSubscriptions[productId]
        );
        return {
          productId: product.id,
          productTitle: product.title,
          subscriptionId: subscription.id,
          subscriptionTitle: subscription.title,
          subscriptionPrice: subscription.highlight.title,
        };
      }
    );

    // Stringify the object before saving to localStorage
    localStorage.setItem("products", JSON.stringify(selectedPlans));
    console.log("Selected Plans:", selectedPlans);
    message.success("Selected plans saved successfully.");

    // Redirect to the order-summary page
    navigate("/order-summary");
  };

  const handleGetStarted = () => {
    navigate("/get-started");
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-10 pb-10 planCard">
      <h3 className="font-bold text-2xl lg:text-4xl font-Roboto text-center text-[#296969]">
        Select Plan(s)
      </h3>
      {!isAuthorized ? (
        <div className="text-center mt-10">
          <p className="text-lg text-gray-600 mb-4">
            You need to log in to view the plans.
          </p>
          <Button
            type="primary"
            size="large"
            style={{
              backgroundColor: "#02C6A1",
              borderColor: "#02C6A1",
              color: "#ffffff",
            }}
            onClick={handleGetStarted}
          >
            Get Started
          </Button>
        </div>
      ) : loading ? (
        <p className="text-center mt-10">Loading plans...</p>
      ) : (
        <div
          className="flex flex-wrap justify-between gap-4 mt-8 p-4"
          style={{
            background: "linear-gradient(180deg, #F0F0F0 0%, #C4E6DF 100%)",
          }}
        >
          {products.map((product) => (
            <Card
              key={product.id}
              hoverable
              className="w-full md:w-[32%] p-4 rounded-lg shadow-md"
              cover={
                <img
                  alt={product.title}
                  src={product.images.find((img) => img.isMainImage)?.imageUrl}
                  className="rounded-t-lg max-h-24"
                />
              }
              title={product.title}
            >
              <h4 className="font-bold text-lg text-[#3B3B3B]">
                {product.subTitle}
              </h4>
              <ul className="mt-4">
                {product.detailedDescriptions.map((desc, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-700 mb-3"
                  >
                    <img src={desc.iconUrl} alt="" className="w-4 h-4" />
                    {desc.title}
                  </li>
                ))}
              </ul>
              <div className="mt-4 relative">
                {product.subscriptions.map((subscription) => (
                  <div
                    key={subscription.id}
                    className={`p-3 border rounded-lg mb-3 flex justify-between items-center relative ${
                      selectedSubscriptions[product.id] === subscription.id
                        ? "border-[#02C6A1] bg-[#E6F9F3]"
                        : "border-gray-300"
                    }`}
                    onClick={() =>
                      handleSubscriptionSelect(product.id, subscription.id)
                    }
                    style={{ cursor: "pointer" }}
                  >
                    <div>
                      <p className="font-bold text-[#296969]">
                        {subscription.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        {subscription.subTitle}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-[#02C6A1]">
                        {subscription.highlight.title}{" "}
                        {subscription.price.currency}
                      </p>
                      <p className="text-xs text-gray-400">
                        {subscription.highlight.subTitle}
                      </p>
                    </div>
                    {subscription.badges.length > 0 && (
                      <span
                        className="absolute top-[-10px] left-[50%] translate-x-[-50%] px-2 py-1 rounded-full text-white text-xs font-medium font-Roboto"
                        style={{
                          background:
                            subscription.badges[0].class === "OrangeBadgeType1"
                              ? "linear-gradient(180deg, #FFCD00 0%, #FF7D01 100%)"
                              : "linear-gradient(180deg, #01C7B1 0%, #006156 100%)",
                        }}
                      >
                        {subscription.badges[0].title}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          ))}
          <div className="text-center mt-8 mx-auto">
            <Button
              type="primary"
              size="large"
              style={{
                backgroundColor: "#02C6A1",
                borderColor: "#02C6A1",
                padding: "0 40px",
                color: "#ffffff",
              }}
              onClick={handleProceed}
              disabled={Object.keys(selectedSubscriptions).length === 0}
            >
              Proceed
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
