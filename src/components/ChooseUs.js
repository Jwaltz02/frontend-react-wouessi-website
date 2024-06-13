import "../styles/ChooseUs.css";
// import svg from "assets/"


function ChooseUs(){
    return(
        <section>
            <div className="text-start px-3 sm:px-6 lg:px-36 gap-12 py-20">
                <div className="md:flex items-center">
                    <div className="lg:w-3/4 capitalize space-y-6">
                        <p className="font-bold text-primary-purple">why choose us</p>
                        <h1 className="capitalize text-4xl font-bold">empowering businesses with <span className="text-secondary-yellow">innovative</span>
                            digital solutions
                        </h1>
                    </div>
                    <div className="pt-4">
                        <p>At Wouessi, we offer a comprehensive range of digital services to help
                            businesses thrive in the online world.</p>
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
                                <p className="text-center uppercase text-4xl font-semibold">how we work</p>
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
                    <h3 className="text-4xl font-bold">Explore what services we're offering</h3>
                    <div className="w-1/6 border border-gray-400"></div>
                </div>
                <p className="hidden lg:block">


                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 568.02 201.81"><defs></defs><g id="Calque_2" data-name="Calque 2"><g id="Calque_3" data-name="Calque 3"><path class="cls-1" d="M1.42,201.32C7.8,183,24.94,175.18,43.05,173.11c41.32-4.72,94.84,27.72,126.87-14.15,5.54-7.24,9.63-14.84,17-20.6,15.52-12.16,36.31-12.64,55.09-14,11.23-.82,22.54-1.23,33.8-1.08,20.71.26,39.12-4.81,52.33-22.43C350.38,71.11,370.58,32.27,413,31c24.25-.7,48.43,1.8,72.66,2.35,16.4.38,33.66,1.18,49-5.54,6.68-2.93,33.63-18.48,31.68-27.52"/><circle class="cls-2" cx="91.26" cy="176.96" r="9"/><ellipse class="cls-3" cx="91.43" cy="176.63" rx="10.62" ry="10.49" transform="translate(-103.44 136.82) rotate(-51.09)"/><circle class="cls-2" cx="289.26" cy="122.96" r="9"/><ellipse class="cls-4" cx="289.43" cy="122.63" rx="10.62" ry="10.49" transform="translate(12.21 270.8) rotate(-51.09)"/><circle class="cls-2" cx="489.26" cy="34.96" r="9"/><ellipse class="cls-5" cx="489.43" cy="34.63" rx="10.62" ry="10.49" transform="translate(155.05 393.7) rotate(-51.09)"/></g></g></svg>

                </p>
                <div className="md:grid lg:grid-cols-3 md:grid-cols-2 gap-20">
                    <div className="flex items-center gap-6 lg:mt-48">
                        <div className="mb-5 font-bold text-9xl">1</div>
                        <div className="space-y-2">
                            <h2 className="capitalize font-bold">online marketing</h2>
                            <p className="text-sm">Our online marketing services are designed to help your business
                                thrive the digital world.
                            </p>
                            <a href="#!" className="capitalize font-bold">learn more +</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="mb-5 font-bold text-9xl">2</div>
                        <div className="space-y-2">
                            <h2 className="capitalize font-bold">design</h2>
                            <p className="text-sm">Our design services are crafted to elevate your brand's visual identify
                                and user experience.
                            </p>
                            <a href="#!" className="capitalize font-bold">learn more +</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 lg:mb-48">
                        <div className="mb-5 font-bold text-9xl">3</div>
                        <div className="space-y-2">
                            <h2 className="capitalize font-bold">development</h2>
                            <p className="text-sm">Our development services are dedicated to building robust,scalable, and
                                hight-performance digital solutions.
                            </p>
                            <a href="#!" className="capitalize font-bold">learn more +</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChooseUs