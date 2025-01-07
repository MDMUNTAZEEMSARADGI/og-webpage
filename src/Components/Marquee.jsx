import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <>
      <div
        // Locomotive scroll
        data-scroll
        data-scroll-section
        data-scroll-speed=".1"
        className="w-full py-10 bg-[#004D43] rounded-tr-3xl rounded-tl-3xl"
      >
        <div className="text border-zinc-300 border-t-2 border-b-2 overflow-hidden flex whitespace-nowrap">
          {/* framer motion */}
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
            className="text-[17vw] uppercase leading-none font-semibold pr-20"
          >
            We are OG!
          </motion.h1>
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
            className="text-[17vw] uppercase leading-none font-semibold pr-20"
          >
            We are OG!
          </motion.h1>
        </div>
      </div>
    </>
  );
};

export default Marquee;
