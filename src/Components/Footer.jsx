import { a } from "framer-motion/client";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full h-screen flex gap-5 p-20 bg-zinc-900">
        <div className="w-1/2 h-full flex flex-col justify-between">
          <div className="heading">
            <h1 className="text-[5vw] uppercase leading-none font-semibold">
              Eye-
            </h1>
            <h1 className="text-[5vw] uppercase leading-none font-semibold">
              opening
            </h1>
          </div>
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
        <div className="w-1/2">
          <h1 className="text-[5vw] uppercase leading-none font-semibold">
            presentations
          </h1>
          <div className="details mt-10">
            {["Facebook", "Instagram", "Twitter"].map((item, index) => (
              <a key={index} className="block text-xl font-light" href="#">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
