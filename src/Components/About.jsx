import React from "react";

const About = () => {
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.1"
        className="w-full p-20 bg-[#CDEA68] rounded-tr-3xl rounded-tl-3xl text-black"
      >
        <h1 className="text-[3vw] leasding-[3.vw] tracking-tight">
          OG is a strategic presentation agency for forward-thinking businesses
          that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and
          hire great peo­ple.
        </h1>
        <div className="w-full pt-10 flex gap-5 border-t-[2px] border-[#5d624b] mt-20">
          <div className="w-1/2">
            <h1 className="text-7xl mb-10">Our approach:</h1>
            <button className="flex items-center gap-10 text-white bg-black uppercase px-10 py-6 rounded-full ">
              read more..
              <div className="w-2 h-2 bg-zinc-100 rounded-full "></div>
            </button>
          </div>
          <div className="w-1/2 h-[70vh]  ">
            <img
              className="w-full h-[70vh] rounded-2xl"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAaVBMVEUHAwT+/v4HAgYAAAAHAwD7+/vk4+Pb2tsODQ4jIiPr6ur39vf+/P01NDUpKCnx8PF2dXVHRkcYFxeop6dBQEGenZ5mZWaMi4tXVlfJyMmZl5jT0tK8vLy2tbU9Ozxvbm6CgoJOTU5eXl5pDTt5AAAFD0lEQVR4nO2ci5KiMBBFxV4e8hCQt6Co//+RmwAJAZzaJDrQtcUtp1YcNKdudzqdrDWHP9h0IBKe4hFKKMw6ohFyqO5q/uD/sge9HK/oQ7j9MH2reBu/4SDethhv+HiiPz3Tmqnyb/VQW1PMtDslK8RQyKgQO7U1xUx7+GSFGAoZ1e6UrBA7tTXFTHv4ZIUYChkVYqe2pphpD5+sEEMho9qdkhVip7ammGkPn6wQQyGjQuzU1hQz7eGTFWIoZFTaTsGgL/N00nOKwNzLvG3z8vQbXDpOAaRZbXmmaXqh3UTfx1KHAsgrQ1SYBV+mUg4fOIlpGObI5BuG3f5klp6Jqk5BbBlvlF0Wo9MPhVPg/D4UZTIXSOSVZGnJ8QDB86LBpBg+OIfvfDIJVbagIsmX6yApOgXQvGPquXKY31xEmhNADaoYrbGS6NUWlU9i18fTnSY1BLc5piKUJBV4PQDhuAZdPXdyl0/FQmSAsim1C4WKUxCx8c3HUDEBTjbLdXucgSR09Vm/eClAgcOLZjaGCgJveNHj4YJTU50+KKgK4YPUHYafpA9cR9T+BYjt20dLj4pT+Wx0xsrKRDVENAqzz5ZDFacebO5NptUY1RA6poRm3EdNmopTLE7hcwIFNwYL5CKowx9Xwt+AyhhUPK1IyfC6T6ZkHob6pWAKJRc+7lT53ikP4GpajHil8LGcMibLB1zq4WWL4NmnL/TJKlAvBtVMoJ6sUNWW0RCm8z1Ng5NmKyVAyYXvzlopX6zWPKU6WjL5bMt1rbrKSm27VJwae4RaWFEG/2j7UpBVR2iVtftkpbUv5w1eA7x6807UvAJcpu27VWiZpdYlWNwVu+12fsHV6zyic+9FLt15X1qnGlRq/VQ0QNGfusmSitlkGmEO8LSHnBOoGm0oaSohqQXRnu8MfG0UmWydtFKEgrd7GRLNO1mHPd+f/8aL9XNK+vbJ7BpVkfQqhhY0rJJHcau61mHRuKtAqVDVLKu4TcbNAR7YuuwL+pMuPnqTT33bTsLkTm0ySfd0GkqYn/BaQWqtbqunc5aQZp4IReyAevCuETAg0G2JdY6CaIeSVLZLV5Pbw6HtL8vr0adRulCq76Kbq/M9ToMLHfXOS+atIzg6E60FdeBmkCetxxLf7yYbmQuWoGp59iEHpdeP0a/60vJkMKf6PhnOk5lgq2fWh6fDpNc0wjYZoKw7BihankgxZzXKTb8JpUp1HM7ELo1BChPfUXg/h09phA+ccuBchxHJddK8+6xkdVCW6XmeubZTnSC17bibf6U3LDh2N77zyomicIOcgqd1O/Qb9TMrnkbbb5K7/s9dHQqgddl50HFss9zOOvqBtKSuHD6Ah9Dowp03UrQB7d2K13aKTDjSrgjXbJ/jG2ZDseBcsC3qWlBwyaLJQgsBzyqa8GTqsblnrhU+uFzz2eI/nl1NZa7lFASRsxgHHssz/17aC7LSW07xkmncfgny6Uai0tj4aYTPed+3QVoNARNiZ0XrNXlvBceHPbXKLYIPtu1fgaKVvLzVLpl6vue5dfLUPXb58n9sE4z41UZRXqYfHJx9/SsAn2wYmP6vrwD8phBDfY3q+MNzNSF2amuKmfbZJyvEUMioEDu1NcVMe/hktTslK8RQyKgQO7U1xUx7+GSFGAoZFWKntqaYaQ+frHanZIUYChkVYqe2pphpD5+sEEMho0Ls1NYUM+3hkxVip5BBoRPKv+OJFeovqSs1Nhpar/4AAAAASUVORK5CYII="
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
