import React from "react";
import { useState } from "react";
const Card05 = () => {
  const [hides, sethides] = useState(true);
  return (
    <>
      <section className="">
        <div className=" flex flex-col gap-12">
          <div className=" border-b-2 border-gray-400 h-[49px] w-full flex justify-between items-start">
            <p className=" font-semibold text-[18px]">Industry Opportunities</p>
            <img
              src={require("./img/opt-Icon.png")}
              className=" cursor-pointer h-4 w-[5px]"
              alt=""
              style={{ filter: hides ? "" : "invert(100%)" }}
              onClick={() => sethides(!hides)}
            />
          </div>

          <div className=" flex flex-col md:flex-row lg:flex-col  gap-12">
            <div className=" flex flex-col gap-8 sm:gap-12">
              <img
                src={require("./img/card05-chart.png")}
                className="h-[187px]"
                alt=""
              />
              <div className=" h-fit font-medium text-[18px] border-b-2 md:border-b-0 lg:border-b-2  border-gray-400">
                <p className=" mb-3">
                  You can acchive <span>44%</span> more Opportunities in market
                </p>
              </div>
            </div>
            <ul className=" mt-[-37px] sm:mt-[-25px] flex justify-center ml-7 flex-col  gap-1">
              <li className=" list-disc text-[#10B981] text-xl">
                {" "}
                <p className="text-black text-[14px]">
                  Your position in the market
                </p>
              </li>
              <li className=" list-disc text-[#BFDE8D] text-xl ">
                <p className="text-black text-[14px] pl-[-10px]">
                  Total Market Opportunities
                </p>
              </li>
              <li className=" list-disc text-[#047857] text-xl">
                <p className="text-black text-[14px]">
                  Achievable Market Opportunities
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card05;
