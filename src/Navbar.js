import React from "react";
import arch from "./img/archstore.png";
// import HomeIcon from "@mui/icons-material/Home";
const Navbar = () => {
  return (
    <>
      <section>
        <nav className=" max-w-[55px] sm:max-w-[82px] bg-[#293056] h-[960px]">
          <header className="pl-[7px] pb-[20px] sm:pl-[24px] sm:pb-[24px] pt-[32px]">
            <img src={arch} className=" w-[40px] sm:w-[44px]" alt="" />
          </header>
          <ul className="px-[7px] sm:px-[16px] h-[482px] w-[81px] flex flex-col gap-2">
            <li className=" h-[36px] w-[38px] sm:h-[48px]  sm:w-[48px] hover:bg-[#3E4784] transition-all duration-200 ease-linear flex items-center justify-center rounded-md">
              <a href="#">
                <img
                  src={require("./img/Home-btn.png")}
                  className="w-4 sm:w-6"
                  alt=""
                />
              </a>
            </li>
            <li className=" h-[36px] w-[38px] sm:h-[48px]  sm:w-[48px] bg-[#3E4784] transition-all duration-200 ease-linear flex items-center justify-center rounded-md">
              <a href="#">
                <img
                  className="w-4 sm:w-6"
                  src={require("./img/Dashboard.png")}
                  alt=""
                />
              </a>
            </li>
            <li className=" h-[36px] w-[38px] sm:h-[48px]  sm:w-[48px] hover:bg-[#3E4784] transition-all duration-200 ease-linear flex items-center justify-center rounded-md">
              <a href="#">
                <img
                  className="w-4 sm:w-6"
                  src={require("./img/Icon3.png")}
                  alt=""
                />
              </a>
            </li>
            <li className=" h-[36px] w-[38px] sm:h-[48px]  sm:w-[48px] hover:bg-[#3E4784] transition-all duration-200 ease-linear flex items-center justify-center rounded-md">
              <a href="#">
                <img
                  className="w-4 sm:w-6"
                  src={require("./img/Icon4.png")}
                  alt=""
                />
              </a>
            </li>
            <li className=" h-[36px] w-[38px] sm:h-[48px]  sm:w-[48px] hover:bg-[#3E4784] transition-all duration-200 ease-linear flex items-center justify-center rounded-md">
              <a href="#">
                <img
                  className="w-4 sm:w-6"
                  src={require("./img/chart.png")}
                  alt=""
                />
              </a>
            </li>
            <li className=" h-[36px] w-[38px] sm:h-[48px]  sm:w-[48px] hover:bg-[#3E4784] transition-all duration-200 ease-linear flex items-center justify-center rounded-md">
              <a href="#">
                <img
                  className="w-4 sm:w-6"
                  src={require("./img/users-01.png")}
                  alt=""
                />
              </a>
            </li>
          </ul>

          <ul className="h-[200px] w-[81px] px-[7px] sm:px-[16px] pb-6  flex flex-col gap-6">
            <li className="flex flex-col  gap-2">
              <li className=" h-[36px] w-[38px] sm:h-[48px]  sm:w-[48px] hover:bg-[#3E4784] transition-all duration-200 ease-linear flex items-center justify-center rounded-md">
                <a href="#">
                  <img
                    className="w-4 sm:w-6"
                    src={require("./img/f-Icon01.png")}
                    alt=""
                  />
                </a>
              </li>
              <li className=" h-[36px] w-[38px] sm:h-[48px]  sm:w-[48px] hover:bg-[#3E4784] transition-all duration-200 ease-linear flex items-center justify-center rounded-md">
                <a href="#">
                  <img
                    className="w-4 sm:w-6"
                    src={require("./img/f-icon02.png")}
                    alt=""
                  />
                </a>
              </li>
            </li>
            <li className=" h-[36px] w-[38px] sm:h-[48px]  sm:w-[48px] hover:bg-[#3E4784] transition-all duration-200 ease-linear flex items-center justify-center rounded-md">
              <a href="#">
                <img
                  className=" w-[40px] sm:w-[44px]"
                  src={require("./img/f-Avatar.png")}
                  alt=""
                />
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
