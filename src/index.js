import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GetStarted from "./GetStarted";
import PlansPricing from "./PlansPricing";
import MobileSteps from "./components/getStartedComponents/MobileSteps";
import Blogs from "./Blogs";
import BlogPost from "./BlogPost";
import Business from "./Business";
import About from "./About";
import OrderSummary from "./OrderSummary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/get-started",
    element: <GetStarted />,
  },
  {
    path: "/get-started-mobile",
    element: <MobileSteps />,
  },
  {
    path: "/plans",
    element: <PlansPricing />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/blogs/post",
    element: <BlogPost />,
  },
  {
    path: "/business",
    element: <Business />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
  {
    path: "/order-summary",
    element: <OrderSummary />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
