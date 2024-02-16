import React from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
const App = () => {
  return (
    <div className=" bg-[#293056] flex ">
      <Navbar></Navbar>
      <Dashboard></Dashboard>
    </div>
  );
};

export default App;
