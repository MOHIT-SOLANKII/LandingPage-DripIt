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

const InfiniteScrollPartners = ({ images }) => {
  return (
    <div className="overflow-hidden bg-gray-900 py-8 md:py-12 lg:py-16">
      <h3 className="text-center text-gray-200 text-xs md:text-sm tracking-[5px] md:tracking-[7px] mb-8 md:mb-12 lg:mb-16">
        TRUSTED PARTNERS
      </h3>
      
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
              whileHover={{ scale: 1.1 }}
              src={img}
              alt="Partner"
              className="h-12 md:h-16 lg:h-20 object-contain"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export const LandingPage = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const partnerImages = [image27, image26, image25, image24, image23];

  const navOpacity = useTransform(scrollY, [0, 50], [1, 0.8]);
  const heroScale = useTransform(scrollY, [0, 200], [1, 0.95]);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <motion.nav 
        style={{ opacity: navOpacity }}
        className="bg-gray-25 p-3 md:p-4 sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
          >

            <img src="/logo.png" alt="logo" className='top-0 left-0 h-6 w-28 sm:h-10 sm:w-48' />
            {/* <span className="font-Agraham text-md md:text-2xl text-[#b4b4b4]">
              Drippit
            </span>
            <span className="font-Agraham text-md md:text-2xl text-black absolute top-0 left-0">
              Dripp
            </span> */}
          </motion.div>

          <div className="hidden md:flex gap-8">
            <motion.span 
              whileHover={{ scale: 1.1, color: '#000' }}
              className="text-gray-400 cursor-pointer"
            >
              Features
            </motion.span>
            <motion.span 
              whileHover={{ scale: 1.1, color: '#000' }}
              className="text-gray-400 cursor-pointer"
            >
              FAQ
            </motion.span>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-900 text-gray-25 px-4 md:px-7 py-2 md:py-4 rounded-xl md:rounded-2xl"
          >
            <span className="font-semibold text-sm md:text-lg tracking-wide whitespace-nowrap">
              Get Early Access
            </span>
          </motion.button>
        </div>
      </motion.nav>

      <motion.section 
        style={{ scale: heroScale }}
        className="max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-16"
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
                className="text-2xl md:text-3xl tracking-wide md:tracking-wider"
                variants={fadeInUp}
              >
                Find Your Drip.
              </motion.h2>
              <motion.h1 
                className="font-Agraham text-xl md:text-3xl tracking-wide"
                variants={fadeInUp}
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
            >
              <input
                type="email"
                placeholder="Enter your email to join the drip squad 💌"
                className="w-full sm:flex-1 p-3 md:p-4 bg-transparent"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
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
                <motion.img whileHover={{ scale: 1.1 }} src={ellipse804} alt="User" className="w-14 h-14 md:w-20 md:h-20" />
                <motion.img whileHover={{ scale: 1.1 }} src={ellipse805} alt="User" className="w-14 h-14 md:w-20 md:h-20" />
                <motion.img whileHover={{ scale: 1.1 }} src={ellipse806} alt="User" className="w-14 h-14 md:w-20 md:h-20" />
                <motion.img whileHover={{ scale: 1.1 }} src={ellipse804} alt="User" className="w-14 h-14 md:w-20 md:h-20" />
                <motion.img whileHover={{ scale: 1.1 }} src={ellipse805} alt="User" className="w-14 h-14 md:w-20 md:h-20" />
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

         
            <div className="w-[359px] h-[522px] relative">
      <img
        className="absolute w-[359px] h-[522px] top-0 left-0 object-cover"
        alt="Main"
        src='/iphone-frame.png'
          />
           <img
        className="absolute w-[166px] h-[449px] top-[6px] left-[2px] object-cover"
        alt="Iphone"
        src='/iphone-1.png'
          />
          <img
        className="absolute w-[166px] h-[449px] top-[66px] left-[190px] object-cover"
        alt="Iphone"
        src='/iphone-2.png'
      />
    </div>
        
        </motion.div>
      </motion.section>

      <InfiniteScrollPartners images={partnerImages} />

      <section className="max-w-7xl mx-auto px-4 py-16 md:py-20 lg:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h3 className="text-gray-300 text-xs md:text-sm tracking-[5px] md:tracking-[7px] mb-3 md:mb-4">FEATURES</h3>
          <h2 className="text-gray-900 text-3xl md:text-4xl">Why You'll Love Drippit</h2>
        </motion.div>

        <div className="space-y-16 md:space-y-20 lg:space-y-24">
          {[
            {
              title: "SWIPE TO SHOP",
              heading: "Shopping, but make it fun! 🔥",
              description: "Say goodbye to boring scrolling. With Drippit, shopping feels like a game. Swipe left to pass, swipe right to save, and build your dream wardrobe in seconds.",
              direction: "left"
            },
            {
              title: "YOUR DREAM CLOSET",
              heading: "Build the closet you've always wanted. 💅",
              description: "Every swipe you love gets added to your wishlist, turning your style dreams into reality. Save your favorites, organize by vibe, and access your curated closet anytime.",
              direction: "right"
            },
            {
              title: "SMART AI SEARCH",
              heading: "Fashion finds, powered by AI. 🤖✨",
              description: "Looking for something specific? Let our AI search do the heavy lifting. Whether it's \"a black dress for a night out\" or \"trendy sneakers under $100,\" Drippit finds the perfect match.",
              direction: "left"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ x: feature.direction === 'left' ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 md:gap-12 lg:gap-16 items-center`}
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="w-full lg:w-1/2 h-[320px] md:h-[400px] lg:h-[512px] bg-[#d9d9d9] rounded-xl md:rounded-2xl overflow-hidden"
              >
                <img
                  src="https://images.pexels.com/photos/789303/pexels-photo-789303.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-full h-full object-cover rounded-xl md:rounded-2xl"
                />
              </motion.div>
              <div className="w-full lg:w-1/2 space-y-3 md:space-y-4">
                <span className="text-gray-700 text-xs tracking-[4px] md:tracking-[5px]">
                  {feature.title}
                </span>
                <h3 className="text-3xl md:text-4xl tracking-wide md:tracking-wider">
                  {feature.heading}
                </h3>
                <p className="text-gray-300 text-lg md:text-xl leading-7">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gray-900 py-8 md:py-12"
      >
        <div className="max-w-xl mx-auto px-4 text-center">
          <motion.h2
            variants={fadeInUp}
            className="font-Agraham text-gray-25 text-md md:text-2xl mb-4 md:mb-6"
          >
            Don't Miss Out on the Drip 💧
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-25 text-sm md:text-base mb-6 md:mb-8"
          >
            Be the first to experience the future of shopping. Early access
            spots are filling fast!
          </motion.p>

          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 border border-gray-25 rounded-xl md:rounded-2xl p-2"
          >
            <input
              type="email"
              placeholder="Enter your email to claim your spot 💌"
              className="w-full sm:flex-1 p-3 md:p-4 bg-transparent text-gray-25 placeholder:text-gray-25"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
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
          whileHover={{ scale: 1.05 }}
          className="text-md md:text-2xl mb-6 md:mb-8"
        >
          Drippit—Find Your Drip, Swipe Your Style.
        </motion.h2>
        <div className="flex justify-center gap-6 md:gap-8 mb-6 md:mb-8">
          {[mdiInstagram, mingcuteSocialXLine].map((icon, index) => (
            <motion.img
              key={index}
              whileHover={{ scale: 1.2, rotate: 5 }}
              src={icon}
              alt={index === 0 ? "Instagram" : "X"}
              className="w-8 h-8 md:w-10 md:h-10 cursor-pointer"
            />
          ))}
        </div>
        <motion.p 
          whileHover={{ color: '#000' }}
          className="text-gray-300 text-sm md:text-base mb-3 md:mb-4 cursor-pointer"
        >
          Privacy Policy | Terms of Service | Contact Us
        </motion.p>
        <p className="text-gray-600 text-sm md:text-base">Copyright 2025. All Rights Reserved</p>
      </motion.footer>
    </div>
  );
};

export default LandingPage;