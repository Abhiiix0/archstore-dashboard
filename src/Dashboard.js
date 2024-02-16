import React from "react";
import Card from "./Card";
import Card1 from "./Card1";
import Card04 from "./Card04";
import Card05 from "./Card05";
import Card07 from "./Card07";
import Card06 from "./Card06";
const Dashboard = () => {
  return (
    <>
      <section className=" px-[6px] gap-4 sm:gap-8 sm:px-4 py-6 sm:py-8 grid grid-cols-12 bg-[#FDFDFD] w-full h-fit mt-3 rounded-tl-[25px] sm:rounded-tl-[36px]">
        {/* <h1>Dashboard</h1> */}
        <div className=" col-start-1 col-end-[13]  h-fit border-black  ">
          <Card></Card>
        </div>
        <div className=" p-3 sm:p-6 rounded-xl col-start-1 col-end-[13] md:col-start-1 md:col-end-[7] lg:col-start-1 lg:col-end-[5] h-fit shadow border border-gray-300 ">
          <Card1
            name="revenue"
            title="Today's revenue"
            number="$1280"
            percentage="15%"
          />
        </div>
        <div className="p-3 sm:p-6  shadow rounded-xl col-start-1 col-end-[13] md:col-start-7 md:col-end-[13] lg:col-start-5 lg:col-end-[9] h-fit border border-gray-300">
          <Card1
            name="orders"
            title="Today's orders"
            number="14"
            percentage="10%"
          />
        </div>
        <div className="p-3 sm:p-6 rounded-xl col-start-1 col-end-[13] lg:col-start-9 lg:col-end-[13] h-fit shadow border border-gray-300 ">
          <Card1
            name="Avg"
            title="Avg. order value"
            number="$91.42"
            percentage="20%"
          />
        </div>
        <div className=" overflow-hidden  rounded-xl h-fit col-start-1 col-end-[13] lg:col-start-1 lg:col-end-[9] shadow  border border-gray-300 ">
          <Card04 />

          <div className="  px-[17px] py-[15px] bg-[#FFF8ED] h-fit w-full bottom-0 left-0  ">
            <div className=" flex gap-3 items-center">
              <img
                src={require("./img/mic.png")}
                className=" h-[38px] w-[38px]"
                alt=""
              />
              <div className="">
                <p className=" font-semibold text-[12px] sm:text-[16px] mb-1">
                  Your customer market is increasing! set up add compaign to
                  reach your customers
                </p>
                <p className=" sm:text-[14px] text-[10px]">
                  We will guide through entire setup of Compaign
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 sm:p-6 rounded-xl h-fit lg:h-[572px] col-start-1 col-end-[13] lg:col-start-9 lg:col-end-[13] shadow border border-gray-300">
          <Card05 />
        </div>
        <div className="p-3 sm:p-6 rounded-xl col-start-1 col-end-[13] lg:col-start-1 lg:col-end-[7] h-fit sm:h-[546px] shadow border border-gray-300 ">
          <Card06 />
        </div>
        <div className=" p-3 sm:p-6 rounded-xl col-start-1 col-end-[13] lg:col-start-7 lg:col-end-[13] h-fit sm:h-[546px] border shadow border-gray-300 ">
          <Card07 />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
