

import { useEffect } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import ellipse804 from "/ellipse-804.svg";
import ellipse805 from "/ellipse-805.svg";
import ellipse806 from "/ellipse-806.svg";
import image23 from "/image-23.png";
import image24 from "/image-24.png";
import image25 from "/image-25.png";
import image26 from "/image-26.png";
import image27 from "/image-27.png";
import iphone1 from "/iphone-1.png";
import iphone2 from "/iphone-2.png";
import mdiInstagram from "/mdi-instagram.svg";
import mingcuteSocialXLine from "/mingcute-social-x-line.svg";
import CurationTab from './CurationTab';
import Card from "./card";
// Animation variants
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
const buttonHover = {
  scale: 1.05,
  boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 10
  }
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};



const InfiniteScrollPartners = ({ images }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full overflow-hidden mt-10 bg-gray-900 py-4 md:py-8 lg:py-12 rounded-xl"
    >
      <motion.h3 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center text-gray-200 text-xs md:text-sm tracking-[5px] md:tracking-[7px] mb-8 md:mb-12 lg:mb-16"
      >
        TRUSTED PARTNERS
      </motion.h3>
      
      <div className="flex relative">
        <motion.div
          className="flex gap-6 md:gap-8 lg:gap-12 min-w-full items-center justify-center"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...images, ...images].map((img, index) => (
            <motion.img
              key={index}
              whileHover={{ 
                scale: 1.1, 
                rotate: 5,
                transition: {
                  type: "spring",
                  stiffness: 300
                }
              }}
              src={img}
              alt="Partner"
              className="h-12 md:h-16 lg:h-20 object-contain"
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export const LandingPage = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const partnerImages = [image27, image26, image25, image24, image23];

  
  const heroScale = useTransform(scrollY, [0, 200], [1, 0.95]);
  const heroRotate = useTransform(scrollY, [0, 200], [0, -2]);
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 overflow-hidden">
      
    <main className="min-h-screen bg-white w-full h-full text-black">
    
      <motion.section 
        style={{ scale: heroScale, rotateX: heroRotate, y }}
        className="max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-16 perspective-1000"
      >
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="flex flex-col lg:flex-row gap-8 md:gap-12"
        >
          <motion.div 
            variants={fadeInUp}
            className="flex-1 space-y-6 md:space-y-8"
          >
            <div className="space-y-2">
              <motion.h2 
                variants={fadeInUp}
                className="text-2xl md:text-3xl tracking-wide md:tracking-wider"
              >
                Find Your Drip.
              </motion.h2>
              <motion.h1 
                variants={fadeInUp}
                className="font-Agraham text-xl md:text-3xl tracking-wide"
              >
                Swipe, Match, Slay.
              </motion.h1>
            </div>

            <motion.p 
              variants={fadeInUp}
              className="text-gray-300 text-base md:text-lg tracking-wide md:tracking-wider leading-7"
            >
              Drippit is where fashion meets swiping discover your style one swipe at a time
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 border border-gray-400 rounded-2xl p-2"
              whileHover={{
                boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
                transition: {
                  type: "spring",
                  stiffness: 300
                }
              }}
            >
              <input
                type="email"
                placeholder="Enter your email to join the drip squad 💌"
                className="w-full sm:flex-1 p-3 md:p-4 bg-transparent"
              />
              <motion.button 
                whileHover={buttonHover}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-gray-900 text-gray-25 px-4 md:px-6 py-3 md:py-4 rounded-xl whitespace-nowrap"
              >
                Get Early Access 🔥
              </motion.button>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-3 md:-space-x-4">
                {[ellipse804, ellipse805, ellipse806, ellipse804, ellipse805].map((img, index) => (
                  <motion.img 
                    key={index}
                    whileHover={{ 
                      scale: 1.1,
                      zIndex: 10,
                      transition: {
                        type: "spring",
                        stiffness: 300
                      }
                    }} 
                    src={img} 
                    alt="User" 
                    className="w-14 h-14 md:w-20 md:h-20" 
                  />
                ))}
              </div>
              <div>
                <motion.p 
                  variants={fadeInUp}
                  className="text-lg md:text-xl text-gray-600"
                >
                  299+ Drippers
                </motion.p>
                <motion.p 
                  variants={fadeInUp}
                  className="text-base md:text-lg text-gray-300"
                >
                  On Waitlist
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="w-[359px] h-[522px] relative"
            initial={{ rotate: -5 }}
            animate={{ rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
          >
            <motion.img
              className="absolute w-[359px] h-[522px] top-0 left-0 object-cover"
              alt="Main"
              src='/iphone-frame.png'
              whileHover={{ 
                scale: 1.02,
                transition: {
                  type: "spring",
                  stiffness: 200
                }
              }}
            />
            <motion.img
              className="absolute w-[166px] h-[449px] top-[6px] left-[2px] object-cover"
              alt="Iphone"
              src='/iphone-1.png'
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            />
            <motion.img
              className="absolute w-[166px] h-[449px] top-[66px] left-[190px] object-cover"
              alt="Iphone"
              src='/iphone-2.png'
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
          </motion.div>
        </motion.div>




        {/* TRUSTED PARTNERS SECTION */}

        <InfiniteScrollPartners images={partnerImages} />
        

        {/* BANNER SECTION */}
<CurationTab/>



      </motion.section>
      <section className="max-w-7xl mx-auto mt-10 px-4 py-16 md:py-20 lg:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h3 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-xs md:text-sm tracking-[5px] md:tracking-[7px] mb-3 md:mb-4"
          >
            FEATURES
          </motion.h3>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-900 text-3xl md:text-4xl"
          >
            Why You'll Love Drippit
          </motion.h2>
        </motion.div>

      </section>
        <Card />
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gray-900 py-8 md:py-12"
      >
        <div className="max-w-xl mx-auto px-4 text-center">
          <motion.h2
            variants={fadeInUp}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-Agraham text-gray-25 text-md md:text-2xl mb-4 md:mb-6"
          >
            Don't Miss Out on the Drip 💧
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-25 text-sm md:text-base mb-6 md:mb-8"
          >
            Be the first to experience the future of shopping. Early access
            spots are filling fast!
          </motion.p>

          <motion.div
            variants={fadeInUp}
            whileHover={{ 
              scale: 1.02,
              transition: {
                type: "spring",
                stiffness: 300
              }
            }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 border border-gray-25 rounded-xl md:rounded-2xl p-2"
          >
            <input
              type="email"
              placeholder="Enter your email to claim your spot 💌"
              className="w-full sm:flex-1 p-3 md:p-4 bg-transparent text-gray-25 placeholder:text-gray-25"
            />
            <motion.button
              whileHover={buttonHover}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-gray-25 text-gray-900 px-4 md:px-6 py-3 md:py-4 rounded-xl whitespace-nowrap"
            >
              Sign Me Up 🚀
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-12 md:py-16 text-center px-4"
      >
        <motion.h2 
          whileHover={{ 
            scale: 1.05,
            transition: {
              type: "spring",
              stiffness: 300
            }
          }}
          className="text-md md:text-2xl mb-6 md:mb-8"
        >
          Drippit—Find Your Drip, Swipe Your Style.
        </motion.h2>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-6 md:gap-8 mb-6 md:mb-8"
        >
          {[mdiInstagram, mingcuteSocialXLine].map((icon, index) => (
            <motion.img
              key={index}
              whileHover={{ 
                scale: 1.2, 
                rotate: 5,
                transition: {
                  type: "spring",
                  stiffness: 300
                }
              }}
              src={icon}
              alt={index === 0 ? "Instagram" : "X"}
              className="w-8 h-8 md:w-10 md:h-10 cursor-pointer"
            />
          ))}
        </motion.div>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ 
            color: '#000',
            transition: {
              duration: 0.2
            }
          }}
          className="text-gray-300 text-sm md:text-base mb-3 md:mb-4 cursor-pointer"
        >
          Privacy Policy | Terms of Service | Contact Us
        </motion.p>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-600 text-sm md:text-base"
        >
          Copyright 2025. All Rights Reserved
        </motion.p>
      </motion.footer></main>
    </div>
  );
};

export default LandingPage;