import React from "react";
import "../styles/AboutUs.css"

import leftImage from "../assets/about-left-side-image.jpg"
import team1 from "../assets/team-1-picture.png"

function AboutUs() {
  return (
    <main>
      <section>
        <div>
          <div className="bg-image bg-about w-[100vw] h-96 relative">
            <div className="overlay-purple"></div>
            <div className="absolute top-1/2 left-2/4 sm:left-1/4 -translate-x-1/2 -translate-y-1/2">
              <h2 className="text-8xl text-white font-bold">About us</h2>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="grid lg:grid-cols-2 px-3 sm:px-6 lg:px-12 gap-12 mt-20">
          <div>
            <img src={leftImage} width="100%" height="auto" alt="group-afro-americains-working-together"></img>
          </div>
          <div className="space-y-6">
            <p className="font-bold text-[#2B00AC]">\ About us \</p>
            <h1 className="capitalize text-4xl font-bold">we provide innovative digital
                solutions to help your <span className="bg-[#FF9900]">business</span> succed</h1>
            <p>Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incidi dunt ut labore dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamaboris nisi ut aliquip exea commodo conse dolore magna aliqua enim ad minim veniam dolore magna aliqua enim ad minim veniam</p>     
          </div>
        </div>
      </section>
      <section>
          <div className="px-3 sm:px-6 lg:px-12 gap-12 mt-20">
            <div className="my-20 space-y-6 text-center font-bold">
              <p className="text-[#2B00AC]">\ Team \</p>
              <h2 className="capitalize text-4xl">our leaders</h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                <div className="space-y-2">
                  <div>
                    <img src={team1} width="100%"  alt=""></img>
                  </div>
                  <div>
                      <h4 className="capitalize font-bold">full name</h4>
                      <p className="capitalize">role</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                      <img src={team1} width="100%"  alt=""></img>
                  </div>
                  <div>
                    <h4 className="capitalize font-bold">full name</h4>
                    <p className="capitalize">role</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <img src={team1} width="100%"  alt=""></img>
                  </div>
                  <div>
                    <h4 className="capitalize font-bold">full name</h4>
                    <p className="capitalize">role</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <img src={team1} width="100%"  alt=""></img>
                  </div>
                  <div>
                    <h4 className="capitalize font-bold">full name</h4>
                    <p className="capitalize">role</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <img src={team1} width="100%"  alt=""></img>
                  </div>
                <div>
                    <h4 className="capitalize font-bold">full name</h4>
                    <p className="capitalize">role</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <img src={team1} width="100%"  alt=""></img>
                  </div>
                  <div>
                    <h4 className="capitalize font-bold">full name</h4>
                    <p className="capitalize">role</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                      <img src={team1} width="100%"  alt=""></img>
                  </div>
                  <div>
                    <h4 className="capitalize font-bold">full name</h4>
                    <p className="capitalize">role</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <img src={team1} width="100%"  alt=""></img>
                  </div>
                  <div>
                    <h4 className="capitalize font-bold">full name</h4>
                    <p className="capitalize">role</p>
                  </div>
                </div>
            </div>
          </div>
      </section>
      <section>
        <div className="w-[75vw] h-80 mx-auto px-3 sm:px-6 lg:px-12 gap-12 mt-20 bg-image bg-extra-box">
          <div className="overlay-purple">
            <div className="text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h2 className="capitalize font-bold text-3xl">driving growth in the digital age</h2>
              <button className="mt-16 bg-[#FF9900] text-white py-2 px-4 rounded">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;