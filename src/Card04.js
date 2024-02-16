import React from "react";

const Card04 = () => {
  return (
    <>
      <section className="border h-fit p-3 sm:p-6">
        <div className=" flex flex-col gap-5 h-fit">
          <div className=" h-fit  flex flex-col gap-4 justify-between">
            <div className=" flex flex-wrap justify-between h-fit gap-8 sm:gap-4">
              <div className=" h-fit flex flex-col justify-between">
                <p className=" font-semibold text-[18px]">
                  Current Market Trend
                </p>
                <p className=" text-[14px] h-5">
                  Track how you ratting compares to your industry average
                </p>
              </div>
              <div className="w-[267px] h-10 flex rounded-[8px] overflow-hidden  border-2">
                <button className=" w-[103px] bg-[#D0D5DD] text-[14px] font-semibold">
                  12 months
                </button>
                <button className=" border-l-2 border-r-2 border-gray-300 w-[87px]">
                  {" "}
                  30 days
                </button>
                <button className="flex justify-center text-center items-center w-[77px]">
                  7 days
                </button>
              </div>
            </div>

            <div className=" h-[44px] bg-[#EAECF0] rounded-md flex gap-1 items-center px-1 border border-gray-300">
              <button className=" rounded-md w-[72px] h-9 text-[10px] sm:text-[14px] font-semibold border bg-white border-gray-300 shadow-md">
                Market
              </button>
              <button className=" rounded-md w-[88px] h-9 text-[10px] sm:text-[14px] font-semibold text-gray-600 transition-all duration-150 ease-linear hover:text-black hover:border hover:bg-white">
                Category
              </button>
              <button className=" rounded-md w-[86px] h-9 text-[10px] sm:text-[14px] font-semibold text-gray-600 transition-all duration-150 ease-linear hover:text-black hover:border hover:bg-white">
                Products
              </button>
              <button className=" rounded-md w-[113px] h-9 text-[10px] sm:text-[14px] font-semibold text-gray-600 transition-all duration-150 ease-linear hover:text-black hover:border hover:bg-white">
                Cross Selling
              </button>
              <button className=" rounded-md w-[99px] h-9 text-[10px] sm:text-[14px] font-semibold text-gray-600 transition-all duration-150 ease-linear hover:text-black hover:border hover:bg-white">
                Geography
              </button>
              {/* <button className=" rounded-md w-[72px]">Market</button> */}
            </div>
          </div>

          <div className=" h-fit ">
            <img
              src={require("./img/Line and bar chart.png")}
              className="sm:h-[310px] sm:w-full"
              alt=""
            />
          </div>
          {/* 
          <div className="  px-[17px] py-[15px] bg-[#FFF8ED] h-[72px] w-full bottom-0 left-0  ">
            <div></div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Card04;
