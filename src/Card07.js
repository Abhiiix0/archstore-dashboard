import React from "react";
import { useState } from "react";
const Card07 = () => {
  const [hides, sethides] = useState(true);
  return (
    <>
      <section className="">
        <div className=" flex flex-col justify-between h-fit sm:h-[500px] gap-10">
          <div className=" border-b-2 border-gray-400 h-[49px] w-full flex justify-between items-start">
            <p className=" font-semibold text-[18px]">
              Ad Campaign Performance
            </p>
            <img
              src={require("./img/opt-Icon.png")}
              className=" cursor-pointer h-4 w-[5px]"
              alt=""
              style={{ filter: hides ? "" : "invert(100%)" }}
              onClick={() => sethides(!hides)}
            />
          </div>

          {/* <div className=" flex flex-col md:flex-row lg:flex-col w-full  gap-12"> */}
          {/* <div className=" flex flex-col gap-8 sm:gap-12"> */}
          <ul className="flex justify-between  flex-wrap gap-3">
            <li>
              <p className=" text-[14px] font-medium tracking-wider text-[#475467]">
                Total User
              </p>
              <div className=" flex mt-1">
                <p className=" text-[18px] sm:text-[30px] font-semibold">
                  4,862
                </p>
                <div className=" w-20 flex gap-1  items-start pt-2 pl-2 text-[#067647] text-[10px] sm:text-[13px]">
                  {" "}
                  <img
                    src={require("./img/increase-Icon.png")}
                    alt=""
                    className=" w-[10px] sm:w-[20px]"
                  />{" "}
                  <p className="mt-[-5px]">9.2%</p>
                </div>
              </div>
            </li>
            <li className="">
              <p className=" text-[14px] font-medium tracking-wider text-[#475467]">
                Sales
              </p>
              <div className=" flex mt-1">
                <p className=" text-[18px] sm:text-[30px] font-semibold">
                  2,6172
                </p>
                <div className=" w-20 flex gap-1  items-start pt-2 pl-2 text-[#067647] text-[10px] sm:text-[13px]">
                  {" "}
                  <img
                    src={require("./img/increase-Icon.png")}
                    alt=""
                    className=" w-[10px] sm:w-[20px]"
                  />{" "}
                  <p className="mt-[-5px]">6.6%</p>
                </div>
              </div>
            </li>
            <li>
              <p className=" text-[14px] font-medium tracking-wider text-[#475467]">
                Conversion Rate
              </p>
              <div className=" flex mt-1">
                <p className=" text-[18px] sm:text-[30px] font-semibold">82%</p>
                <div className=" w-20 flex gap-1  items-start pt-2 pl-2 text-[#067647] text-[10px] sm:text-[13px]">
                  {" "}
                  <img
                    src={require("./img/increase-Icon.png")}
                    alt=""
                    className=" w-[10px] sm:w-[20px]"
                  />{" "}
                  <p className="mt-[-5px]">8.1%</p>
                </div>
              </div>
            </li>
          </ul>
          <img
            src={require("./img/ad-chart.png")}
            className=" sm:h-[240px] w-full"
            alt=""
          />
        </div>
        {/* </div> */}
        {/* </div> */}
      </section>
    </>
  );
};

export default Card07;
