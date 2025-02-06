import { useEffect } from "react";
import banner1 from "../assets/banner-1.1.png";
import banner2 from "../assets/banner-2.png";
import banner3 from "../assets/banner-3.png";
import banner4 from "../assets/banner-4.png";
import prop1 from "../assets/prop-banner-1.svg";
import prop2 from "../assets/prop-banner-2.svg";
import prop3 from "../assets/prop-banner-3.svg";
import prop4 from "../assets/prop-banner-4.svg";
import CurationTab2 from "./CurationTab2";
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';


const CurationPage = () => {


  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 100
      } 
    }
  };
  
  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const buttonHover = {
    scale: 1.05,
    boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  };

  const controls = useAnimation();
  const { scrollY } = useScroll();

  const navOpacity = useTransform(scrollY, [0, 50], [1, 0.8]);
  const heroScale = useTransform(scrollY, [0, 200], [1, 0.95]);
  const heroRotate = useTransform(scrollY, [0, 200], [0, -2]);
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, []);
  return (
    <div className="w-full max-w-[1400px] mx-auto p-8">
      

      
      <CurationTab2 />
      

      <div className="mt-10">
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold">Category Name 1</h2>
        <button className="text-blue-600">Show All &gt;</button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* Column 1 */}
        <div className="space-y-4">
          <div>
            <div className="h-96 bg-gray-200 rounded-lg mb-2"></div>
            <h3 className="font-medium">Mood board Name1</h3>
            <p className="text-sm text-gray-600">Name of the creator1</p>
          </div>
          <div>
            <div className="h-64 bg-gray-200 rounded-lg mb-2"></div>
            <h3 className="font-medium">Mood board Name6</h3>
            <p className="text-sm text-gray-600">Name of the creator6</p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-4">
          <div>
            <div className="h-48 bg-gray-200 rounded-lg mb-2"></div>
            <h3 className="font-medium">Mood board Name2</h3>
            <p className="text-sm text-gray-600">Name of the creator2</p>
          </div>
          <div>
            <div className="h-48 bg-gray-200 rounded-lg mb-2"></div>
            <h3 className="font-medium">Mood board Name3</h3>
            <p className="text-sm text-gray-600">Name of the creator3</p>
          </div>
          <div>
            <div className="h-48 bg-gray-200 rounded-lg mb-2"></div>
            <h3 className="font-medium">Mood board Name3</h3>
            <p className="text-sm text-gray-600">Name of the creator3</p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="space-y-4">
          <div>
            <div className="h-96 bg-gray-200 rounded-lg mb-2"></div>
            <h3 className="font-medium">Mood board Name4</h3>
            <p className="text-sm text-gray-600">Name of the creator4</p>
          </div>
          <div>
            <div className="h-64 bg-gray-200 rounded-lg mb-2"></div>
            <h3 className="font-medium">Mood board Name5</h3>
            <p className="text-sm text-gray-600">Name of the creator5</p>
          </div>
        </div>
      </div>
    </div>
     
    </div>
  );
};

export default CurationPage;
