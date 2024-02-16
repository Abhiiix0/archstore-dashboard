import React from "react";
import { useState } from "react";
const Card1 = ({ name, title, number, percentage }) => {
  //   console.log(datas);
  const [hides, sethides] = useState(true);
  return (
    <>
      <section className=" w-full h-[105px]  sm:h-[120px]  rounded-lg">
        <div className=" flex justify-between gap-2 h-full relative">
          <div className=" h-full w-36 flex flex-col items-start justify-between">
            <p className=" font-bold text-[16px]">{title}</p>
            <p className=" font-semibold text-xl sm:text-3xl mb-[-10px]">
              {number}
            </p>
            <div className=" font-medium text-[#475467] text-[14px] flex items-center justify-center gap-1">
              {name === "orders" ? (
                <img
                  src={require("./img/increase-Icon.png")}
                  className=" h-3"
                  alt=""
                />
              ) : (
                <img
                  src={require("./img/Up-arrow.png")}
                  className=" h-3"
                  alt=""
                />
              )}
              <p className=" text-green-600 mr-1 text-[14px] font-medium">
                {percentage}
              </p>{" "}
              last month
            </div>
          </div>
          <div className="h-full  flex flex-col items-end justify-between">
            <img
              src={require("./img/opt-Icon.png")}
              className=" cursor-pointer h-4 w-[5px]"
              alt=""
              style={{ filter: hides ? "" : "invert(100%)" }}
              onClick={() => sethides(!hides)}
            />

            {name === "orders" ? (
              <img
                src={require("./img/orders-chart.png")}
                className="w-32"
                alt=""
              />
            ) : (
              <img
                src={require("./img/revenue-chart.png")}
                className="w-32"
                alt=""
              />
            )}
          </div>
          <div
            style={{ display: hides ? "none" : "block" }}
            className=" w-60 rounded-xl h-fit  bg-white border absolute z-50 right-0 sm:right-[-6px] top-7"
          >
            <ul>
              <li className=" border-b-2 border-b-gray-400 p-2 flex items-center gap-2">
                <div>
                  <img
                    src={require("./img/f-Avatar.png")}
                    className="h-10 w-10"
                    alt=""
                  />
                  {/* <div className=" w-[8px] h-[8px] text-green-500  "></div> */}
                </div>
                <div className="">
                  <p className=" font-bold text-[14px]">Olivia Rhye</p>
                  <p className=" font-medium text-gray-500 text-[12px]">
                    Abhishek.nayak@gmail.com
                  </p>
                </div>
              </li>
              <li className="p-2 flex flex-col gap-1">
                <a
                  href="#"
                  className="flex items-center transition-all duration-100 ease-linearc bg-white  h-11 rounded-lg hover:pt-[2px] hover:bg-slate-100"
                >
                  <img
                    src={require("./img/users-01.png")}
                    className="h-4 m-2"
                    alt=""
                  />
                  <p>View profile</p>
                </a>
                <a
                  href="#"
                  className="flex items-center transition-all duration-100 ease-linear  h-11 rounded-lg hover:pt-[2px] bg-white hover:bg-slate-100"
                >
                  <img
                    src={require("./img/f-icon02.png")}
                    className="h-4 m-2"
                    alt=""
                  />
                  <p>Setting</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card1;
