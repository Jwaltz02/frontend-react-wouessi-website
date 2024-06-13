import React from "react";

function Home() {
  return (
    <div className="bg-[#2B00AC]">
      <div className="flex flex-col text-white text-left w-[26%] ml-[4%] pt-[100px] gap-y-[20px]">
        <p className="text-[15px]">Digital Marketing Agency</p>
        <h1 className="text-[59px]/[60px] font-bold">
          Transform Your <span className="text-[#FF9900]">Business</span> Growth
        </h1>
        <p className="text-[17px]">
          We provide innovative digital solutions to help your business succeed.
        </p>
        <button className="w-44 h-16 rounded-md bg-[#FF9900] font-bold">
          Let's Discuss
        </button>
      </div>
    </div>
  );
}

export default Home;
