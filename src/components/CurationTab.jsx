
import banner1 from "../assets/banner-1.png";
import banner2 from "../assets/banner-2.png";
import banner3 from "../assets/banner-3.png";
import banner4 from "../assets/banner-4.png";
import prop1 from "../assets/prop-banner-1.svg";
import prop2 from "../assets/prop-banner-2.svg";
import prop3 from "../assets/prop-banner-3.svg";
import prop4 from "../assets/prop-banner-4.svg";

const CurationTab = () => {
  return (
    <div className="w-full">
      {/* Desktop Layout - Hidden on mobile */}
      <div className="hidden md:block relative max-w-7xl h-[359px] mx-auto bg-gray-50 rounded-xl mt-5">
        {/* Text Content */}
        <div className="absolute top-3 w-full flex justify-center items-center opacity-50">
          Not sure what to wear?
        </div>
        <div className="absolute top-10 w-full flex justify-center items-center text-2xl">
          Drippit Curations brings together the hottest fashion trends in one place.
        </div>
        <div className="absolute top-20 w-full flex justify-center items-center">
          <button className="border-2 border-black rounded-2xl px-5 py-4 cursor-pointer hover:bg-black hover:text-white transition-colors duration-200">
            View Curations 👀
          </button>
        </div>

        {/* Decorative Elements */}
        <img src={prop1} className="absolute left-20 top-6" alt="" />
        <img src={prop2} className="absolute left-60 bottom-20" alt="" />
        <img src={prop3} className="absolute right-72 bottom-24" alt="" />
        <img src={prop4} className="absolute right-20 top-1" alt="" />

        {/* Banner Images */}
        <img src={banner1} className="absolute left-0 bottom-0 object-cover" alt="" />
        <img src={banner2} className="absolute left-64 bottom-0 object-cover" alt="" />
        <img src={banner3} className="absolute right-80 bottom-0 object-cover" alt="" />
        <img src={banner4} className="absolute right-0 bottom-0 object-cover" alt="" />
      </div>

      {/* Mobile Layout - Hidden on desktop */}
      <div className="md:hidden relative max-w-7xl h-[280px] mx-auto bg-gray-50 rounded-xl mt-5 px-4 overflow-hidden">
        {/* Text Content - Mobile */}
        <div className="absolute top-3 w-full flex justify-center items-center opacity-50 text-sm">
          Not sure what to wear?
        </div>
        <div className="absolute top-10 w-full flex justify-center items-center text-center text-lg px-4">
          Drippit Curations brings together the hottest fashion trends in one place.
        </div>
        <div className="absolute top-24 w-full flex justify-center items-center mt-4">
          <button className="border-2 border-black rounded-2xl px-4 py-3 text-sm cursor-pointer hover:bg-black hover:text-white transition-colors duration-200">
            View Curations 👀
          </button>
        </div>

        {/* Decorative Elements - Mobile */}
        <img src={prop2} className="absolute left-4 top-20 w-6" alt="" />
        <img src={prop4} className="absolute right-4 top-4 w-6" alt="" />

        {/* Banner Images - Mobile */}
        <div className="">
          <img 
            src={banner1} 
            className="w-1/3 h-32 object-contain absolute -bottom-4 left-0" 
            alt="" 
          />
          <img 
            src={banner2} 
            className="w-1/3 h-32 object-contain absolute -bottom-4 left-28" 
            alt="" 
          />
          <img 
            src={banner4} 
            className="w-1/3 h-32 object-contain absolute -bottom-4 right-0" 
            alt="" 
          />
        </div>
      </div>
    </div>
  );
};

export default CurationTab;