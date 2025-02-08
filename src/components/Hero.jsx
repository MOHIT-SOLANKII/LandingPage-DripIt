import React from "react";
import Mockup1 from "../assets/Mockup-1.svg";
import Mockup2 from "../assets/Mockup-2.svg";
import { ArrowRight } from "lucide-react";

const dripper = [
  { image: "/Ellipse 804.svg" },
  { image: "/Ellipse 805.svg" },
  { image: "/Ellipse 806.svg" },
  { image: "/Rectangle.svg" },
  { image: "/Rectangle (1).svg" },
];

const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-white rounded-xl p-2 sm:p-4 lg:p-8 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 h-full">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 px-2">
            <h2 className="text-lg text-gray-900">Find Your Drip.</h2>
            <h1 className="text-2xl sm:text-3xl lg:text-3xl  mt-2 font-[Agraham]">
              Swipe. Match. Slay. 🚀
            </h1>
            <p className="text-gray-300 max-w-md text-sm mt-4 opacity-75">
              Drippit is where fashion meets swiping. Discover your style, one
              swipe at a time.
            </p>

            {/* Email Input Section */}
            <div className="w-full max-w-md mt-8 flex gap-3">
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Enter your email 💌"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-gray-300"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 rounded-lg items-center gap-2 hidden sm:block">
                  <span>Get Early Access</span>
                </button>
              </div>
              <button className="bg-black text-white px-4 py-2 rounded-xl items-center gap-2 sm:hidden block">
                <ArrowRight />
              </button>
            </div>

            {/* Waitlist Section */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
              <div className="flex -space-x-2">
                {dripper.map((dripper, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-white"
                  >
                    <div>
                      <img
                        src={dripper.image}
                        alt="Dripper Image"
                        width={60}
                        height={60}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm whitespace-nowrap">
                <span className="font-semibold">299+ Drippers</span>{" "}
                <span className="text-gray-400">On Waitlist</span>
              </p>
            </div>
          </div>

          {/* Right Content - Mockups */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] mx-auto flex justify-center items-center">
              {/* First mockup - front one */}
              {/* <div className="absolute left-[100px] sm:left-[150px] top-[200px] transform -translate-x-1/2 -translate-y-1/2 rotate-[1deg]">
                <img 
                  src={Mockup1} 
                  alt="App mockup 1" 
                  className="w-[200px] sm:w-[250px] lg:w-[250px] h-auto drop-shadow-2xl" 
                />
              </div>
              <div className="absolute top-1/2 left-[200px] sm:left-[250px] transform -translate-x-1/4 -translate-y-1/3 rotate-[1deg]">
                <img 
                  src={Mockup2} 
                  alt="App mockup 2" 
                  className="w-[220px] sm:w-[300px] lg:w-[320px] h-auto drop-shadow-2xl" 
                />
              </div> */}
              <div>
                <img
                  src="/Black.svg"
                  alt="App Mockup"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
