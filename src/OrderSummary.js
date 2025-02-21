import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OrderSummaryForm from "./components/OrderSummaryForm";

const OrderSummary = () => {
  return (
    <div className="bg-transparent">
      <Navbar/>
      <OrderSummaryForm/>
      <Footer />
    </div>
  );
};

export default OrderSummary;
