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
      {/* <div className="relative w-full h-[217px] bg-gray-200 mb-8 rounded-lg">
        <img src={banner1} alt="" className="absolute max-w-[200px] max-h-[150px] left-0 bottom-0 overflow-hidden" />
        <img src={banner2} alt="" className="absolute max-w-[150px] max-h-[120px] left-72 bottom-1 overflow-hidden" />
        <img src={banner3} alt="" className="hidden lg:block absolute max-w-[350px] max-h-[150px] right-96 bottom-0 overflow-hidden" />
        <img src={banner4} alt="" className="absolute max-w-[200px] max-h-[150px] right-0 bottom-0 object-cover overflow-hidden" />
        <img src={prop1} alt="" className="absolute" />
        <img src={prop2} alt="" className="absolute" />
        <img src={prop3} alt="" className="absolute" />
        <img src={prop4} alt="" className="absolute" />
      </div> */}
<motion.nav 
        style={{ opacity: navOpacity }}
        className="p-1 md:p-2 top-0 z-50 backdrop-blur-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <motion.div 
            className="relative"
            whileHover={{ 
              scale: 1.05,
              transition: {
                type: "spring",
                stiffness: 400
              }
            }}
          >
            <img 
              src="/logo.png" 
              alt="logo" 
              className='top-0 left-0 h-6 w-28 sm:h-10 sm:w-48'
            />
          </motion.div>

          <div className="hidden md:flex gap-8">
            {['Features', 'Curations', 'FAQ'].map((item, index) => (
              <motion.span 
                key={item}
                whileHover={{ 
                  scale: 1.1, 
                  color: '#000',
                  transition: {
                    type: "spring",
                    stiffness: 300
                  }
                }}
                className="text-gray-400 cursor-pointer"
              >
                {item}
              </motion.span>
            ))}
          </div>

          <motion.button 
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-900 text-gray-25 px-4 md:px-7 py-2 md:py-4 rounded-xl md:rounded-2xl"
          >
            <span className="font-semibold text-sm md:text-lg tracking-wide whitespace-nowrap">
              Get Early Access
            </span>
          </motion.button>
        </div>
      </motion.nav>
      
      <CurationTab2 />
      

      <div className="relative mt-10">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold">Category Name 1</h2>
          <button className="text-blue-600">Show All &gt;</button>
        </div>

        <div className="relative h-screen">
          <div className="absolute left-0 top-0 w-1/3">
            <div className="h-96 bg-gray-200 rounded-lg mb-2"></div>
            <h3 className="font-medium">Mood board Name</h3>
            <p className="text-sm text-gray-600">Name of the creator</p>
          </div>

          <div className="absolute left-1/3 top-0 w-1/3 px-4">
            <div>
              <div className="h-48 bg-gray-200 rounded-lg mb-2"></div>
              <h3 className="font-medium">Mood board Name</h3>
              <p className="text-sm text-gray-600 mb-4">Name of the creator</p>
            </div>
            <div>
              <div className="h-48 bg-gray-200 rounded-lg mb-2"></div>
              <h3 className="font-medium">Mood board Name</h3>
              <p className="text-sm text-gray-600">Name of the creator</p>
            </div>
          </div>

          <div className="absolute right-0 top-0 w-1/3 pl-4">
            <div>
              <div className="h-64 bg-gray-200 rounded-lg mb-2"></div>
              <h3 className="font-medium">Mood board Name</h3>
              <p className="text-sm text-gray-600 mb-4">Name of the creator</p>
            </div>
            <div>
              <div className="h-32 bg-gray-200 rounded-lg mb-2"></div>
              <h3 className="font-medium">Mood board Name</h3>
              <p className="text-sm text-gray-600">Name of the creator</p>
            </div>
          </div>

          <div className="absolute left-0 top-96 mt-8 w-1/3">
            <div className="h-48 bg-gray-200 rounded-lg mb-2"></div>
            <h3 className="font-medium">Mood board Name</h3>
            <p className="text-sm text-gray-600">Name of the creator</p>
          </div>
        </div>
      </div>
      <div className="relative mt-1">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold">Category Name 1</h2>
          <button className="text-blue-600">Show All &gt;</button>
        </div>

        <div className="relative h-screen">
          <div className="absolute left-0 top-0 w-1/3">
            <div className="h-96 bg-gray-200 rounded-lg mb-2"></div>
            <h3 className="font-medium">Mood board Name</h3>
            <p className="text-sm text-gray-600">Name of the creator</p>
          </div>

          <div className="absolute left-1/3 top-0 w-1/3 px-4">
            <div>
              <div className="h-48 bg-gray-200 rounded-lg mb-2"></div>
              <h3 className="font-medium">Mood board Name</h3>
              <p className="text-sm text-gray-600 mb-4">Name of the creator</p>
            </div>
            <div>
              <div className="h-48 bg-gray-200 rounded-lg mb-2"></div>
              <h3 className="font-medium">Mood board Name</h3>
              <p className="text-sm text-gray-600">Name of the creator</p>
            </div>
          </div>

          <div className="absolute right-0 top-0 w-1/3 pl-4">
            <div>
              <div className="h-64 bg-gray-200 rounded-lg mb-2"></div>
              <h3 className="font-medium">Mood board Name</h3>
              <p className="text-sm text-gray-600 mb-4">Name of the creator</p>
            </div>
            <div>
              <div className="h-32 bg-gray-200 rounded-lg mb-2"></div>
              <h3 className="font-medium">Mood board Name</h3>
              <p className="text-sm text-gray-600">Name of the creator</p>
            </div>
          </div>

          <div className="absolute left-0 top-96 mt-8 w-1/3">
            <div className="h-48 bg-gray-200 rounded-lg mb-2"></div>
            <h3 className="font-medium">Mood board Name</h3>
            <p className="text-sm text-gray-600">Name of the creator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurationPage;
