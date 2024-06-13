import React from "react";
import Backdrop from "../assets/homepage-backdrop.jpeg";

function Home() {
  return (
    <>
      <div className="bg-[#2B00AC] flex justify-between pb-[5vw]">
        <div className="flex flex-col text-white text-left w-[33%] ml-[4%] pt-[5vw] gap-y-[20px]">
          <p className="text-[1vw]">Digital Marketing Agency</p>
          <h1 className="text-[5vw]/[5vw] font-bold">
            Transform Your <span className="text-[#FF9900]">Business</span>{" "}
            Growth
          </h1>
          <p className="text-[1.1vw]">
            We provide innovative digital solutions to help your business
            succeed.
          </p>
          <button className="w-[11vw] h-[4vw] rounded-md bg-[#FF9900] font-bold text-[1.1vw]">
            Let's Discuss
          </button>
        </div>
        <img src={Backdrop} className="w-[50%] h-[30%]"></img>
      </div>
      <div className="h-[9vw] bg-[#2B00AC] flex justify-center text-white">
        <div className="h-8vw w-[92%] items-center bg-[#3c17aa] flex justify-between rounded-[2vw] border-2 border-white">
          <div className="flex flex-col ml-[6vw]">
            <h1 className="text-[3vw] font-extrabold">1000+</h1>
            <p className="text-[1.3vw] text-[#FF9900]">Projects</p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-[3vw] font-extrabold">250+</h1>
            <p className="text-[1.3vw] text-[#FF9900]">Partners</p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-[3vw] font-extrabold">10+</h1>
            <p className="text-[1.3vw] text-[#FF9900]">Years Experience</p>
          </div>
          <div className="flex flex-col mr-[6vw]">
            <h1 className="text-[3vw] font-extrabold">10.2k+</h1>
            <p className="text-[1.3vw] text-[#FF9900]">Worldwide Clients</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
