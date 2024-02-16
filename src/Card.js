import React from "react";

const Card = () => {
  return (
    <>
      <section className=" w-full h-[105px]  sm:h-[120px]  rounded-lg">
        <header className="flex justify-between">
          <p className="text-[20px] sm:text-[30px] font-semibold ml-2">
            Dashboard
          </p>
          <div className="flex items-center justify-center gap-3">
            <button className="rounded-md  hover:bg-slate-200 hover:shadow-lg transition-all duration-150 flex justify-center items-center h-10 w-10">
              <img
                className=" w-[15px] h-[15px]"
                src={require("./img/search-Icon.png")}
                alt=""
              />
            </button>
            <button className=" hover:bg-slate-50 transition-all duration-150 font-semibold  border border-[#D0D5DD] shadow-sm rounded-md text-[14px] w-10 sm:w-[133px] h-10 flex items-center justify-center gap-2">
              <img
                className=" w-[15px] h-[15px]"
                src={require("./img/custom-Icon.png")}
                alt=""
              />
              <p className="hidden sm:block">Customize</p>
            </button>
            <button className=" hover:bg-slate-50 transition-all duration-150 font-semibold border border-[#D0D5DD] shadow-sm rounded-md  text-[14px] w-10 sm:w-[103px] h-10 flex items-center justify-center gap-2">
              <img
                className="w-[15px] h-[15px]"
                src={require("./img/expoort-Icon.png")}
                alt=""
              />
              <p className="hidden sm:block">Export</p>
            </button>
          </div>
        </header>
        <div className=" relative border-b-[3px] flex h-16 sm:h-20 items-end  border-gray-200">
          <p className=" cursor-pointer absolute bottom-[-2px] text-center h-8 sm:h-10 w-[48%] sm:w-[159px] border-b-[3px] border-blue-700 font-semibold text-[14px] sm:text-[16px] ">
            Market Analysis
          </p>
          <p className=" cursor-pointer absolute bottom-[-2px] left-[50%] sm:left-[159px] text-center h-8 sm:h-10 text-[14px] sm:text-[16px] sm:w-[159px] w-[50%] ">
            Performance
          </p>
        </div>
      </section>
    </>
  );
};

export default Card;
