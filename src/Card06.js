import React from "react";
import { useState } from "react";
const Card06 = () => {
  const [hides, sethides] = useState(true);
  return (
    <>
      <section className="">
        <div className=" flex flex-col h-fit gap-8 sm:h-[500px]  justify-between ">
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

          <div className=" flex items-center gap-3 justify-between">
            <img
              src={require("./img/_Pie chart.png")}
              className=" h-[200px] sm:h-[280px] w-[200px] sm:w-[280px]"
              alt=""
            />

            <div className=" flex flex-col justify-center items-center gap-5 w-full">
              <ul className="">
                <p className=" font-semibold text-[18px] sm:text-[24px] text-[#374151]">
                  33%
                </p>
                <li className=" ml-4 list-disc text-[#071C47] text-xl">
                  {" "}
                  <p className="ml-[-2px] text-black text-[10px] sm:text-[14px]">
                    Pattern Tiles
                  </p>
                </li>
              </ul>
              <ul className="">
                <p className=" font-semibold text-[18px] sm:text-[24px] text-[#374151]">
                  33%
                </p>
                <li className=" ml-4 list-disc text-[#2C678E] text-xl">
                  {" "}
                  <p className="ml-[-2px] text-black text-[10px] sm:text-[14px]">
                    Pattern Tiles
                  </p>
                </li>
              </ul>
              <ul className="">
                <p className=" font-semibold text-[18px] sm:text-[24px] text-[#374151]">
                  33%
                </p>
                <li className=" ml-4 list-disc text-[#E1A739] text-xl">
                  {" "}
                  <p className="ml-[-2px] text-black text-[10px] sm:text-[14px]">
                    Pattern Tiles
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="h-[70px] sm:h-[102px] flex items-center py-2 sm:py-4 rounded-xl bg-[#EFF6FA]">
            <div className=" flex h-fit justify-between items-center w-full ">
              <img
                src={require("./img/trending_up.png")}
                className="h-[27px] w-[27px] sm:h-[37px] sm:w-[37px] m-2 sm:m-4"
                alt=""
              />
              <p className=" text-[12px] sm:text-[16px] font-medium text-[#1B5A84]">
                Wooden floor is in trending, set up for compaign for wooden
                tiles to reach these users
              </p>
              <img
                src={require("./img/arrow_forward.png")}
                className="h-[18px] w-[18px] sm:h-[24px]] sm:w-[24px] m-2 sm:m-4"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card06;
