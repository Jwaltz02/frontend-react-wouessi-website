import React from "react";
import logo from "../assets/logo-navbar.jpeg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-[#2B00AC] text-white h-[8vw] flex justify-center bg-[#2B00AC] pt-[14px]">
      <div className="flex items-center w-[92%] border-b-2 border-gray-500">
        <div className="flex items-center">
          <img src={logo} width="20%" height="auto"></img>
          <ul className="flex gap-[4vw] py-3 w-[100%] justify-center">
            <Link to="/Home">
              <li className="py-2 hover:text-[#FF9900] hover:overline text-[1.1vw]">
                Home
              </li>
            </Link>
            <li className="py-2 hover:text-[#FF9900] hover:overline text-[1.1vw]">
              <a href="#!">About Us</a>
            </li>
            <li className="py-2 hover:text-[#FF9900] hover:overline text-[1.1vw]">
              <a href="#!">Services</a>
            </li>
            <li className="py-2 hover:text-[#FF9900] hover:overline text-[1.1vw]">
              <a href="#!">Pricing</a>
            </li>
            <li className="py-2 hover:text-[#FF9900] hover:overline text-[1.1vw]">
              <a href="#!">Portfolio</a>
            </li>
            <li className="py-2 hover:text-[#FF9900] hover:overline text-[1.1vw]">
              <a href="#!">Contact Us</a>
            </li>
          </ul>
        </div>
        <button className="w-[260px] h-[4vw] scale-10 rounded-md border-2 border-white hover:bg-[#FF9900] hover:border-none hover:pl-[3px] text-[1.1vw]">
          Let's Talk
        </button>
      </div>
    </div>
  );
}

export default Navbar;
