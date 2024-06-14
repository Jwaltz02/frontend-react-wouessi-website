import React from "react";
import "../styles/Home.css";
import Backdrop from "../assets/homepage-backdrop.jpeg";
import WhatWeDo from "../assets/what-we-do-homepage.jpeg";
import { FaChartLine } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import { FaTags } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { PiArrowCircleRightLight } from "react-icons/pi";
import { PiArrowCircleLeftLight } from "react-icons/pi";
import LeftSideImagePortfolio from "../assets/left-side-image-portfolio.jpeg";
import RightSideImagePortfolio from "../assets/right-side-image-portfolio.png";
import { BsArrowRightShort } from "react-icons/bs";

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
      <div className="h-[12vw] bg-[#2B00AC] flex justify-center text-white">
        <div className="h-[9vw] w-[92%] items-center bg-[#3c17aa] flex justify-between rounded-[2vw] border-2 border-white">
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
      <section>
        <div className="text-start px-3 sm:px-6 lg:px-36 gap-12 py-20">
          <div className="md:flex items-center">
            <div className="lg:w-3/4 capitalize space-y-6">
              <p className="font-bold text-primary-purple">why choose us</p>
              <h1 className="capitalize text-4xl font-bold">
                empowering businesses with{" "}
                <span className="text-secondary-yellow">innovative</span>
                digital solutions
              </h1>
            </div>
            <div className="pt-4">
              <p>
                At Wouessi, we offer a comprehensive range of digital services
                to help businesses thrive in the online world.
              </p>
            </div>
          </div>
          <div className="md:flex items-center gap-12 text-white py-6">
            <div className="sm:w-2/5 w-3/4 mt-4 mx-auto relative bg-blue-950 h-80 rounded-lg text-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <p className="text-6xl font-bold ">100+</p>
                <p className="text-sm font-light">Projets Completed</p>
              </div>
            </div>
            <div className="sm:w-full h-80 mt-4 bg-image bg-how-we-work rounded-xl">
              <div className="overlay rounded-xl">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <p className="text-center uppercase text-4xl font-semibold">
                    how we work
                  </p>
                </div>
                <a href="#!">
                  <div className="absolute -bottom-5 -right-5 rounded-full w-28 h-28 bg-secondary-yellow z-2 border-5 border-t-8 border-b-8 border-l-8 border-r-8 border-white">
                    <i className="fa-solid fa-play text-gray-900 text-2xl absolute bottom-9 right-10"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary-purple text-start text-white px-3 sm:px-6 lg:px-36 gap-12 py-20 relative">
          <div className="lg:w-2/4 space-y-6 mb-4">
            <h3 className="text-4xl font-bold">
              Explore what services we're offering
            </h3>
            <div className="w-1/6 border border-gray-400"></div>
          </div>
          <p className="hidden lg:block">
            <svg
              className="services-offered-line"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 568.02 201.81">
              <defs></defs>
              <g id="Calque_2" data-name="Calque 2">
                <g id="Calque_3" data-name="Calque 3">
                  <path
                    class="cls-1"
                    d="M1.42,201.32C7.8,183,24.94,175.18,43.05,173.11c41.32-4.72,94.84,27.72,126.87-14.15,5.54-7.24,9.63-14.84,17-20.6,15.52-12.16,36.31-12.64,55.09-14,11.23-.82,22.54-1.23,33.8-1.08,20.71.26,39.12-4.81,52.33-22.43C350.38,71.11,370.58,32.27,413,31c24.25-.7,48.43,1.8,72.66,2.35,16.4.38,33.66,1.18,49-5.54,6.68-2.93,33.63-18.48,31.68-27.52"
                  />
                  <circle class="cls-2" cx="91.26" cy="176.96" r="9" />
                  <ellipse
                    class="cls-3"
                    cx="91.43"
                    cy="176.63"
                    rx="10.62"
                    ry="10.49"
                    transform="translate(-103.44 136.82) rotate(-51.09)"
                  />
                  <circle class="cls-2" cx="289.26" cy="122.96" r="9" />
                  <ellipse
                    class="cls-4"
                    cx="289.43"
                    cy="122.63"
                    rx="10.62"
                    ry="10.49"
                    transform="translate(12.21 270.8) rotate(-51.09)"
                  />
                  <circle class="cls-2" cx="489.26" cy="34.96" r="9" />
                  <ellipse
                    class="cls-5"
                    cx="489.43"
                    cy="34.63"
                    rx="10.62"
                    ry="10.49"
                    transform="translate(155.05 393.7) rotate(-51.09)"
                  />
                </g>
              </g>
            </svg>
          </p>
          <div className="md:grid lg:grid-cols-3 md:grid-cols-2 gap-20">
            <div className="flex items-center gap-6 lg:mt-48">
              <div className="mb-5 font-bold text-9xl">1</div>
              <div className="space-y-2">
                <h2 className="capitalize font-bold">online marketing</h2>
                <p className="text-sm">
                  Our online marketing services are designed to help your
                  business thrive the digital world.
                </p>
                <a href="#!" className="capitalize font-bold">
                  learn more +
                </a>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="mb-5 font-bold text-9xl">2</div>
              <div className="space-y-2">
                <h2 className="capitalize font-bold">design</h2>
                <p className="text-sm">
                  Our design services are crafted to elevate your brand's visual
                  identify and user experience.
                </p>
                <a href="#!" className="capitalize font-bold">
                  learn more +
                </a>
              </div>
            </div>
            <div className="flex items-center gap-6 lg:mb-48">
              <div className="mb-5 font-bold text-9xl">3</div>
              <div className="space-y-2">
                <h2 className="capitalize font-bold">development</h2>
                <p className="text-sm">
                  Our development services are dedicated to building
                  robust,scalable, and hight-performance digital solutions.
                </p>
                <a href="#!" className="capitalize font-bold">
                  learn more +
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#F4F4F4] pb-[5vw] pt-[4vw]">
        <span className="text-[#2B00AC]">
          <p className="text-[1.3vw] font-bold">Our Services</p>
        </span>
        <h1 className="text-[3.5vw] font-bold mt-[0.2vw] mb-[2vw]">
          What We Do
        </h1>
        <div className="flex justify-center gap-x-[2.5vw] text-white">
          <div className="flex flex-col w-[24vw] gap-y-[2.5vw]">
            <div className="flex flex-col justify-center gap-y-[0.5vw] w-full h-[16vw] px-5 text-left bg-[#2B00AC] rounded-lg">
              <FaChartLine className="w-[3vw] h-[3vw] text-[#FF9900]" />
              <h1 className="text-[1.8vw] font-bold">Digital Marketing</h1>
              <p className="text-[1.1vw]">
                propel your business forward in the online landscape.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-y-[0.5vw] w-full h-[16vw] px-5 text-left bg-white rounded-lg text-black">
              <BsTools className="w-[3vw] h-[3vw] text-[#FF9900]" />
              <h1 className="text-[1.8vw] font-bold">Development</h1>
              <p className="text-[1.1vw]">
                dedicated to building robust, scalable, and high-performance
                digital solutions.
              </p>
            </div>
          </div>
          <img src={WhatWeDo} className="w-[27vw] rounded-lg"></img>
          <div className="flex flex-col w-[24vw] gap-y-[2.5vw]">
            <div className="flex flex-col justify-center gap-y-[0.5vw] w-full h-[16vw] px-5 text-left bg-[#2B00AC] rounded-lg">
              <FaTags className="w-[3vw] h-[3vw] text-[#FF9900]" />
              <h1 className="text-[1.8vw] font-bold">Digital Marketing</h1>
              <p className="text-[1.1vw]">
                crafted to elevate your brand's visual identity and user
                experience.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-y-[0.5vw] w-full h-[16vw] px-5 text-left bg-white rounded-lg text-black">
              <MdSupportAgent className="w-[3vw] h-[3vw] text-[#FF9900]" />
              <h1 className="text-[1.8vw] font-bold">Business</h1>
              <p className="text-[1.1vw]">
                Our business services are tailored to support and enhance your
                company's growth and efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#060606] text-white flex justify-center">
        <div className="w-[80%] mt-[4vw]">
          <p className="text-left text-[1.1vw] mb-[0.7vw] text-[#FF9900]">
            OUR PORTFOLIO
          </p>
          <div className="flex gap-x-[14vw] items-center">
            <h1 className="text-[3.5vw]/[4vw] text-left w-[50vw] font-bold">
              Explore our new recently completed projects.
            </h1>
            <p className="w-[22vw] text-[1.1vw] text-left text-[#C8CFD5] float-right">
              We are web designers, developers, project managers, and digital
              solutions using the latest trends and technologies.
            </p>
          </div>
          <div className="w-1/6 mt-[2vw] border border-gray-400"></div>
          <div className="flex justify-end gap-x-[0.4vw] mt-[-1vw]">
            <PiArrowCircleLeftLight className="text-[5.5vw] hover:fill-[#FF9900] cursor-pointer" />
            <PiArrowCircleRightLight className="text-[5.5vw] hover:fill-[#FF9900] cursor-pointer" />
          </div>
          <div className="flex justify-center gap-x-[2vw] mt-[3vw] mb-[5vw] ">
            <div className="w-[50vw] pb-[2vw] bg-white rounded-2xl">
              <div className="flex w-full h-[29vw]">
                <img
                  src={LeftSideImagePortfolio}
                  className="h-full object-cover rounded-t-2xl"></img>
              </div>
              <div className="flex justify-center gap-x-[8vw] items-center bg-white text-black h-[7vw]">
                <div className="flex flex-col text-left">
                  <h2 className="text-[2vw] font-bold">AfricaBlockChain</h2>
                  <p className="text-[1.1vw]">Featured - Blockchain, Website</p>
                </div>
                <div className="w-[11vw] h-[3.5vw] rounded-md bg-[#FF9900] text-[1.1vw] flex items-center justify-center cursor-pointer">
                  See Project
                  <BsArrowRightShort className="text-[2vw]" />
                </div>
              </div>
            </div>
            <div className="w-[50vw] pb-[2vw] bg-white rounded-2xl">
              <div className="flex w-full h-[29vw]">
                <img
                  src={RightSideImagePortfolio}
                  className="h-full object-cover rounded-t-2xl"></img>
              </div>
              <div className="flex justify-center gap-x-[12vw] items-center text-black h-[7vw]">
                <div className="flex flex-col text-left">
                  <h2 className="text-[2vw] font-bold">AfroLifestyle</h2>
                  <p className="text-[1.1vw]">Featured - eCommerce</p>
                </div>
                <div className="w-[11vw] h-[3.5vw] rounded-md bg-[#FF9900] text-[1.1vw] flex items-center justify-center cursor-pointer">
                  See Project
                  <BsArrowRightShort className="text-[2vw]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
