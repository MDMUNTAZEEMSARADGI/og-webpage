import { motion } from "framer-motion";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div
        id="nav"
        className="fixed z-[999] w-full px-20 py-8 font-['Roboto'] flex justify-between items-center"
      >
        <div className="logo">
          <svg
            width="72"
            height="30"
            viewBox="0 0 72 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="5"
              y="20"
              font-family="Georgia, serif"
              font-size="24"
              fill="white"
              font-weight="bold"
            >
              OG
            </text>
          </svg>
        </div>
        <div className="links flex gap-10">
          {[
            "Services",
            "Our work",
            "About using",
            "Insights",
            "Contact us",
          ].map((item, index) => (
            <motion.a
              initial={{ y: "100%" }}
              key={index}
              className={`text-sm md:text-xs sm:text-[8px] lg:text-lg capitalize font-light ${
                index === 4 && "ml-32"
              }`}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
