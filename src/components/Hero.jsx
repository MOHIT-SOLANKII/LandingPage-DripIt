import React from 'react';
import Mockup1 from '../assets/Mockup-1.svg';
import Mockup2 from '../assets/Mockup-2.svg';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-white rounded-xl p-2 sm:p-4 lg:p-8 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 h-full">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 px-4">
            <h2 className="text-lg text-gray-900">Find Your Drip.</h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-2 font-display">
              Swipe. Match. Slay. 🚀
            </h1>
            <p className="text-gray-600 max-w-md mt-4">
              Drippit is where fashion meets swiping. Discover your style, one swipe at a time.
            </p>

            {/* Email Input Section */}
            <div className="w-full max-w-md mt-8">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email to join the drip squad ❤️" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-gray-300"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2">
                  <span className="hidden sm:inline">Get Early Access</span>
                  <span>🔥</span>
                </button>
              </div>
            </div>

            {/* Waitlist Section */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white"
                    style={{
                      backgroundColor: [
                        '#FFB6C1', // pink
                        '#87CEEB', // blue
                        '#FFD700', // yellow
                        '#98FB98', // green
                        '#DDA0DD'  // purple
                      ][i]
                    }}
                  />
                ))}
              </div>
              <p className="text-sm whitespace-nowrap">
                <span className="font-semibold">299+ Drippers</span>{' '}
                <span className="text-gray-400">On Waitlist</span>
              </p>
            </div>
          </div>

          {/* Right Content - Mockups */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="mockups relative w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] mx-auto">
              {/* First mockup - front one */}
              <div className="absolute left-[100px] sm:left-[150px] top-[200px] transform -translate-x-1/2 -translate-y-1/2 rotate-[1deg]">
                <img 
                  src={Mockup1} 
                  alt="App mockup 1" 
                  className="w-[200px] sm:w-[250px] lg:w-[250px] h-auto drop-shadow-2xl" 
                />
              </div>
              {/* Second mockup - back one */}
              <div className="absolute top-1/2 left-[200px] sm:left-[250px] transform -translate-x-1/4 -translate-y-1/3 rotate-[1deg]">
                <img 
                  src={Mockup2} 
                  alt="App mockup 2" 
                  className="w-[220px] sm:w-[300px] lg:w-[320px] h-auto drop-shadow-2xl" 
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