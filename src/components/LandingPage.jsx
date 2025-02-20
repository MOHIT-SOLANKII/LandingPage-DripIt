

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
import mdiInstagram from "/mdi-instagram.svg";
import mingcuteSocialXLine from "/mingcute-social-x-line.svg";
import CurationTab from './CurationTab';
import Card from './card';
import Hero from './Hero';
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
          <Hero/>




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
