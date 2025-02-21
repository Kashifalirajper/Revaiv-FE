import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/Logo.png";
import QRCodeModal from "./QRCodeModal";

export default function Navbar() {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className="navbarBG dark:bg-gray-900 absolute w-full items-center z-[9999] top-0 start-0">
        <div className="max-screen maxHeightNav flex flex-wrap md:flex-nowrap gap-1 items-center justify-between mx-auto p-[10px]">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="navLogo" alt="Your Logo" />
          </Link>

          {/* Hamburger Menu for Mobile */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Get Started Button */}
          <div className="smallScreenHide flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={() => navigate("/get-started")}
              type="button"
              className="navbarBtn"
            >
              Get Started
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col md:flex-row flex-wrap justify-center font-normal bg-transparent md:space-x-8 rtl:space-x-reverse">
              <li>
                <Link
                  to="/about-us"
                  className="block py-2 px-3 text-left rounded md:bg-transparent md:text-[#1A3333] md:p-0"
                  onClick={closeMenu}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/plans"
                  className="block py-2 px-3 text-left rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={closeMenu}
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="block py-2 px-3 text-left rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={closeMenu}
                >
                  Chronic Conditions
                </Link>
              </li>
              <li className="relative group">
                <button
                  id="dropdownNavbarLink"
                  className="flex items-center justify-between w-full py-2 px-3 text-left rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Learn
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <Link
                  to="/business"
                  className="block py-2 px-3 text-left rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={closeMenu}
                >
                  For Business
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <QRCodeModal visible={isModalVisible} setVisible={setIsModalVisible} />
    </div>
  );
}
