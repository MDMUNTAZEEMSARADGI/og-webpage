import { motion } from "framer-motion";
import React, { useState } from "react";

const FeaturedProjects = () => {
  const [isHovering, setHovering] = useState(false);
  const [isHoveringSec, setHoveringSec] = useState(false);
  return (
    <>
      <div className="w-full py-20">
        <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
          <h1 className="text-7xl leading-none tracking-tighter">
            Featured Projects
          </h1>
        </div>
        <div className="px-20">
          <div className="cards w-full mt-10 flex gap-10">
            <div
              className="cardcontainer relative w-1/2 h-[75vh]"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <h1 className="absolute z-[9] flex overflow-hidden text-8xl leading-none tracking-tighter left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68]">
                {"FYDE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={isHovering ? { y: "0" } : { y: "100%" }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.1,
                    }}
                    className="inline-block"
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <img
                  className="w-full h-full bg-cover"
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                  alt=""
                />
              </div>
            </div>
            <div
              className="cardcontainer relative w-1/2 h-[75vh]"
              onMouseEnter={() => setHoveringSec(true)}
              onMouseLeave={() => setHoveringSec(false)}
            >
              <h1 className="absolute z-[9] flex overflow-hidden text-8xl leading-none tracking-tighter right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68]">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={isHoveringSec ? { y: "0" } : { y: "100%" }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.1,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <img
                  className="w-full h-full bg-cover"
                  src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProjects;
