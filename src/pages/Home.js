import React from "react";
import Backdrop from "../assets/homepage-backdrop.jpeg";
import customerPictures from "..assets/testimonials-customer.png";
import "../styles/Home.css";

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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 568.02 201.81">
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
      <section className="bg-[#2B00AC]">
          <div className="w-3/5 mx-auto text-center text-white px-3 sm:px-6 lg:px-44 py-20">
            <p className="font-bold text-[#FF9900]">clients testimonials</p>
            <h1 className="capitalize text-4xl font-bold py-6">happy words from happy customer</h1>
            <div className="w-1/6 mx-auto border border-gray-400"></div>
            <p className="py-4 lg:px-6">“I'm so impressed by your dedication to learning. I know it wasn't easy when that technology solution you presented didn't work out.”</p>
            
            <div className="w-full mx-auto py-4">
              <img src={customerPictures} alt="young-man" width="80px" height="20px" className="mx-auto rounded-full"></img>
            </div>
            
            <p className="py-4 font-bold capitalize">Bessie Cooper</p>
            <p className="pb-4 text-sm">Marketing Coordinator, HCAB</p>
            <div className="flex justify-center gap-3">
                <div>
                  <a href="#!">
                      <i className="fa-solid fa-arrow-left font-extralight w-12 h-12 p-4 border border-white rounded-full"></i>
                  </a>
                </div>
                <div>
                    <a href="#!">
                        <i className="fa-solid fa-arrow-right bg-[#FF9900] text-black font-extralight w-12 h-12 p-4 rounded-full"></i>
                    </a>
                </div>
              </div>
          </div>
        </section>
        <section>
          <div className="text-center px-3 sm:px-6 lg:px-12 py-20">
            <p className="capitalize font-bold text-[#2B00AC]">pricing plans</p>
            <p className="lg:w-1/3 mx-auto text-4xl font-bold py-6">Choose a Plan that Works for you</p>
            <div className="w-1/6 mx-auto border border-gray-400"></div>
            <div className="flex justify-center gap-3 py-10">
              <button className="w-[11vw] h-[4vw] rounded-md bg-[#FF9900] font-bold text-[1.1vw]">
                Monthly
              </button>
              <button className="w-[11vw] h-[4vw] rounded-md bg-[#FFF] font-bold text-[1.1vw]">
                Yearly
              </button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-16">

              <div className="flex flex-col justify-between p-8 text-sm">
                  <p className="capitalize">small business</p>
                  <p className="text-4xl text-center font-extrabold mb-20">$2,000 USD</p>
                  <ul className="p-10 list-disc mb-16">
                      <li className="py-4"><p>Respomsive Website - 5Pages</p></li>
                      <li className="py-4"><p>Social Media Management - 2 accounts / 1 month</p></li>
                      <li className="py-4"><p>Comprtitor Analysis - 1 competitor</p></li>
                      <li className="py-4"><p>Logo Design - 1 logo</p></li>
                      <li className="py-4"><p>Paid Social Media - 1 week</p></li>
                      <li className="py-4"><p>Paid Search - 1 week</p></li>
                  </ul>
                  <div className="flex justify-center">
                      <button className="w-[11vw] h-[4vw] rounded-md bg-[#2B00AC] text-white font-bold text-[1.1vw]">
                          Join This Plan
                      </button>
                  </div>
              </div>  
              
              <div className="flex flex-col justify-between bg-[#2B00AC] text-white rounded-lg p-8 text-sm">
                  <p className="capitalize">Pro</p>
                  <p className="text-4xl text-center font-extrabold">$4,500 USD</p>
                  <ul className="p-10 list-disc">
                      <li className="border-b py-4"><p>Responsive Website - 15 pages</p></li>
                      <li className="border-b py-4"><p>Social Media Management - 3 accounts / 2 months</p></li>
                      <li className="border-b py-4"><p>Competitors Analysis - 2 competitors</p></li>
                      <li className="border-b py-4"><p>Brochure Design- 3 Brochures</p></li>
                      <li className="border-b py-4"><p>Logo Design - 1 logo</p></li>
                      <li className="border-b py-4"><p>Paid Social Media - 1 month</p></li>
                      <li className="border-b py-4"><p>Paid Search - 2 weeks</p></li>
                      <li className="border-b py-4"><p>Email Marketing - 1 momth</p></li>
                      <li className="py-2"><p>SEO strategiy - Basic</p></li>
                  </ul>
                  <div className="flex justify-center">
                      <button className="w-[11vw] h-[4vw] rounded-md bg-[#FF9900] font-bold text-[1.1vw]">
                          Join This Plan
                      </button>
                  </div>
              </div>
              <div className="flex flex-col justify-between p-8 text-sm">
                  <p className="capitalize">corpoorate business</p>
                  <p class="capitalize text-4xl text-center font-extrabold">call</p>
                  <ul class="p-10 list-disc">
                      <li class="py-4"><p>Responsive Website - Unlimited pages</p></li>
                      <li class="py-4"><p>Social Media Management - Unlimited accounts / 3 months</p></li>
                      <li class="py-4"><p>Competitors Analysis - 5 competitors</p></li>
                      <li class="py-4"><p>Brochure Design- Unlimited Brochures</p></li>
                      <li class="py-4"><p>Logo Design - 1 logo</p></li>
                      <li class="py-4"><p>Paid Social Media - 1 month</p></li>
                      <li class="py-4"><p>Paid Search - 1 month</p></li>
                      <li class="py-4"><p>Email Marketing - 3 momth</p></li>
                      <li class="py-4"><p>SEO strategiy - Full Stack</p></li>
                  </ul>
                  <div class="flex justify-center">
                      <button class="w-[11vw] h-[4vw] rounded-md bg-[#2B00AC] text-white font-bold text-[1.1vw]">
                          Join This Plan
                      </button>
                  </div>
              </div>
            </div>
          </div>
        </section>

    </>
  );
}

export default Home;
