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
            <Link to="/AboutUs">
              <li className="py-2 hover:text-[#FF9900] hover:overline text-[1.1vw]">
                About Us
              </li>
            </Link>
            <Link to="/Services">
              <li className="py-2 hover:text-[#FF9900] hover:overline text-[1.1vw]">
                Services
              </li>
            </Link>
            <Link to="/Pricing">
              <li className="py-2 hover:text-[#FF9900] hover:overline text-[1.1vw]">
                Pricing
              </li>
            </Link>
            <Link to="/Portfolio">
              <li className="py-2 hover:text-[#FF9900] hover:overline text-[1.1vw]">
                Portfolio
              </li>
            </Link>
            <Link to="/ContactUs">
              <li className="py-2 hover:text-[#FF9900] hover:overline text-[1.1vw]">
                Contact Us
              </li>
            </Link>
          </ul>
        </div>
        <button className="w-[260px] h-[4vw] rounded-md border-2 border-white hover:bg-[#FF9900] hover:border-transparent text-[1.1vw]">
          Let's Talk
        </button>
      </div>
    </div>
  );
}

export default Navbar;
