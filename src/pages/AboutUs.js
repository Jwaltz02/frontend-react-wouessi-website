import React from "react";
import "../styles/AboutUs.css";
import HeroBanner from "../components/HeroBanner";

import leftImage from "../assets/about-left-side-image.jpg";
import team1 from "../assets/team-1-picture.png";
import GetInTouch from "../components/GetInTouch";
import AboutPageBackdrop from "../assets/about-page-backdrop.jpeg";

function AboutUs() {
  return (
    <main>
      <HeroBanner title={"About us"} image={AboutPageBackdrop} />
      <section>
        <div className="grid lg:grid-cols-2 px-3 sm:px-6 lg:px-12 gap-12 mt-20">
          <div>
            <img
              src={leftImage}
              width="100%"
              height="auto"
              alt="group-afro-americains-working-together"></img>
          </div>
          <div className="space-y-6">
            <p className="font-bold text-[#2B00AC]">\ About us \</p>
            <h1 className="capitalize text-4xl font-bold">
              we provide innovative digital solutions to help your{" "}
              <span className="bg-[#FF9900]">business</span> succed
            </h1>
            <p>
              Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm
              tempor incidi dunt ut labore dolore magna aliqua enim ad minim
              veniam quis nostrud exercitation ullamaboris nisi ut aliquip exea
              commodo conse dolore magna aliqua enim ad minim veniam dolore
              magna aliqua enim ad minim veniam
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="px-3 sm:px-6 lg:px-12 gap-12 mt-20 mb-20">
          <div className="my-20 space-y-6 text-center font-bold">
            <p className="text-[#2B00AC]">\ Team \</p>
            <h2 className="capitalize text-4xl">our leaders</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            <div className="space-y-2">
              <div>
                <img src={team1} width="100%" alt=""></img>
              </div>
              <div>
                <h4 className="capitalize font-bold">full name</h4>
                <p className="capitalize">role</p>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <img src={team1} width="100%" alt=""></img>
              </div>
              <div>
                <h4 className="capitalize font-bold">full name</h4>
                <p className="capitalize">role</p>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <img src={team1} width="100%" alt=""></img>
              </div>
              <div>
                <h4 className="capitalize font-bold">full name</h4>
                <p className="capitalize">role</p>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <img src={team1} width="100%" alt=""></img>
              </div>
              <div>
                <h4 className="capitalize font-bold">full name</h4>
                <p className="capitalize">role</p>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <img src={team1} width="100%" alt=""></img>
              </div>
              <div>
                <h4 className="capitalize font-bold">full name</h4>
                <p className="capitalize">role</p>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <img src={team1} width="100%" alt=""></img>
              </div>
              <div>
                <h4 className="capitalize font-bold">full name</h4>
                <p className="capitalize">role</p>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <img src={team1} width="100%" alt=""></img>
              </div>
              <div>
                <h4 className="capitalize font-bold">full name</h4>
                <p className="capitalize">role</p>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <img src={team1} width="100%" alt=""></img>
              </div>
              <div>
                <h4 className="capitalize font-bold">full name</h4>
                <p className="capitalize">role</p>
              </div>
            </div>
          </div>
          <GetInTouch />
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
