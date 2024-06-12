import React from "react";
import logo from "../assets/logo-navbar.jpeg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-[#2B00AC] text-white h-32 border-b-2 border-gray-500 flex items-center">
      <div className="gap-x-[10%] flex items-center pl-[58px]">
        <img src={logo} width="17%" height="auto"></img>
        <ul className="flex gap-[4vw] py-3">
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
      <button className="w-[15vw] h-[4vw] rounded-md border-2 border-white hover:bg-[#FF9900] hover:border-none mr-[58px] text-[1.1vw]">
        Let's Talk
      </button>
    </div>
  );
}

export default Navbar;
