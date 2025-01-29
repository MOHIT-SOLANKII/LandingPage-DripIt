import { useEffect,useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
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

const features = [
  {
    title: "PERSONALIZATION",
    heading: "Your Style, Your Way",
    description: "Our AI learns your preferences and curates personalized fashion recommendations just for you."
  },
  {
    title: "DISCOVERY",
    heading: "Endless Fashion Inspiration",
    description: "Explore new brands, styles, and trends with our intuitive swipe interface."
  },
  {
    title: "COMMUNITY",
    heading: "Join the Fashion Revolution",
    description: "Connect with fellow fashion enthusiasts and share your unique style journey."
  }
];

// Enhanced animation configurations
const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const rotate3D = {
  hidden: { opacity: 0, rotateX: 20, translateZ: -100 },
  visible: { opacity: 1, rotateX: 0, translateZ: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const InfiniteScrollPartners = ({ images }) => {
  return (
    <div className="overflow-hidden bg-gray-900 py-8 md:py-12 lg:py-16">
      <motion.h3 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideUp}
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
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ type: "spring", stiffness: 300 }}
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
  const partnerImages = ["/image-27.png", "/image-26.png", "/image-25.png", "/image-24.png", "/image-23.png"];

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, 50]);
  const navOpacity = useTransform(scrollY, [0, 50], [1, 0.9]);
  const heroScale = useTransform(scrollY, [0, 200], [1, 0.98]);

  // Scroll-triggered animations
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      controls.start("visible");
    }
  });

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <motion.nav 
        style={{ opacity: navOpacity }}
        className="bg-gray-25 p-3 md:p-4 sticky top-0 z-50 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative"
          >
            <img src="/logo.png" alt="logo" className='top-0 left-0 h-6 w-28 sm:h-10 sm:w-48' />
          </motion.div>

          <div className="hidden md:flex gap-8">
            {['Features', 'FAQ'].map((item, index) => (
              <motion.span 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideUp}
                custom={index}
                whileHover={{ scale: 1.1, y: -3 }}
                className="text-gray-400 cursor-pointer font-medium"
              >
                {item}
              </motion.span>
            ))}
          </div>

          <motion.button 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gray-900 text-gray-25 px-4 md:px-7 py-2 md:py-4 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl"
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
            variants={staggerChildren}
            className="flex-1 space-y-6 md:space-y-8"
          >
            <motion.div 
              variants={slideUp}
              className="space-y-2 overflow-hidden"
            >
              <motion.h2 
                className="text-2xl md:text-3xl tracking-wide md:tracking-wider"
                variants={slideUp}
              >
                Find Your Drip.
              </motion.h2>
              <motion.h1 
                className="font-Agraham text-xl md:text-3xl tracking-wide"
                variants={rotate3D}
              >
                Swipe, Match, Slay.
              </motion.h1>
            </motion.div>

            <motion.p 
              variants={slideUp}
              className="text-gray-300 text-base md:text-lg tracking-wide md:tracking-wider leading-7"
            >
              Drippit is where fashion meets swiping discover your style one swipe at a time
            </motion.p>

            <motion.div 
              variants={scaleIn}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 border border-gray-400 rounded-2xl p-2"
            >
              <input
                type="email"
                placeholder="Enter your email to join the drip squad 💌"
                className="w-full sm:flex-1 p-3 md:p-4 bg-transparent"
              />
              <motion.button 
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-gray-900 text-gray-25 px-4 md:px-6 py-3 md:py-4 rounded-xl whitespace-nowrap"
              >
                Get Early Access 🔥
              </motion.button>
            </motion.div>

            <motion.div 
              variants={staggerChildren}
              className="flex items-center gap-4"
            >
              <motion.div 
                variants={staggerChildren}
                className="flex -space-x-3 md:-space-x-4"
              >
                {[804, 805, 806, 804, 805].map((num, index) => (
                  <motion.img 
                    key={index}
                    variants={scaleIn}
                    whileHover={{ scale: 1.1, y: -5 }}
                    src={`/ellipse-${num}.svg`}
                    alt="User"
                    className="w-14 h-14 md:w-20 md:h-20 cursor-pointer hover:z-10"
                  />
                ))}
              </motion.div>
              <motion.div variants={slideUp}>
                <p className="text-lg md:text-xl text-gray-600">299+ Drippers</p>
                <p className="text-base md:text-lg text-gray-300">On Waitlist</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={staggerChildren}
            className="w-[359px] h-[522px] relative"
          >
            <motion.img
              variants={slideUp}
              style={{ y: y1 }}
              className="absolute w-[359px] h-[522px] top-0 left-0 object-cover"
              alt="Main"
              src='/iphone-frame.png'
            />
            <motion.img
              variants={scaleIn}
              style={{ y: y2 }}
              className="absolute w-[166px] h-[449px] top-[6px] left-[2px] object-cover"
              alt="Iphone"
              src='/iphone-1.png'
            />
            <motion.img
              variants={scaleIn}
              style={{ y: y2 }}
              className="absolute w-[166px] h-[449px] top-[66px] left-[190px] object-cover"
              alt="Iphone"
              src='/iphone-2.png'
            />
          </motion.div>
        </motion.div>
      </motion.section>

      <InfiniteScrollPartners images={partnerImages} />

      {/* Enhanced Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-20 lg:py-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h3 
            className="text-gray-300 text-xs md:text-sm tracking-[5px] md:tracking-[7px] mb-3 md:mb-4"
            initial={{ letterSpacing: "0px" }}
            animate={{ letterSpacing: "7px" }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
          >
            FEATURES
          </motion.h3>
          <motion.h2 
            className="text-gray-900 text-3xl md:text-4xl"
            whileHover={{ scale: 1.05 }}
          >
            Why You'll Love Drippit
          </motion.h2>
        </motion.div>

        <div className="space-y-16 md:space-y-20 lg:space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerChildren}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 md:gap-12 lg:gap-16 items-center`}
            >
              <motion.div 
                variants={index % 2 === 0 ? { hidden: { x: -100 }, visible: { x: 0 } } : { hidden: { x: 100 }, visible: { x: 0 } }}
                className="w-full lg:w-1/2 h-[320px] md:h-[400px] lg:h-[512px] rounded-xl md:rounded-2xl overflow-hidden"
              >
                <motion.img
                  src="https://images.pexels.com/photos/789303/pexels-photo-789303.jpeg"
                  alt="Feature"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                />
              </motion.div>
              <motion.div 
                variants={slideUp}
                className="w-full lg:w-1/2 space-y-3 md:space-y-4"
              >
                <motion.span 
                  className="text-gray-700 text-xs tracking-[4px] md:tracking-[5px]"
                  whileHover={{ scale: 1.05 }}
                >
                  {feature.title}
                </motion.span>
                <motion.h3 
                  className="text-3xl md:text-4xl tracking-wide md:tracking-wider"
                  whileHover={{ skewX: -5 }}
                >
                  {feature.heading}
                </motion.h3>
                <motion.p 
                  className="text-gray-300 text-lg md:text-xl leading-7"
                  whileHover={{ x: 5 }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-gray-900 py-8 md:py-12 relative overflow-hidden"
      >
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
              'linear-gradient(45deg, #4ecdc4, #45b7d1)',
              'linear-gradient(45deg, #45b7d1, #ff6b6b)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="max-w-xl mx-auto px-4 text-center relative">
          <motion.h2
            className="font-Agraham text-gray-25 text-md md:text-2xl mb-4 md:mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Don't Miss Out on the Drip 💧
          </motion.h2>
          <motion.p
            className="text-gray-25 text-sm md:text-base mb-6 md:mb-8"
            whileHover={{ skewY: 2 }}
          >
            Be the first to experience the future of shopping. Early access
            spots are filling fast!
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 border border-gray-25 rounded-xl md:rounded-2xl p-2"
          >
            <input
              type="email"
              placeholder="Enter your email to claim your spot 💌"
              className="w-full sm:flex-1 p-3 md:p-4 bg-transparent text-gray-25 placeholder:text-gray-25"
            />
            <motion.button
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-gray-25 text-gray-900 px-4 md:px-6 py-3 md:py-4 rounded-xl whitespace-nowrap"
            >
              Sign Me Up 🚀
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

     {/* Animated Footer */}
     <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-12 md:py-16 text-center px-4 bg-gray-50"
      >
        <motion.h2 
          whileHover={{ scale: 1.05 }}
          className="text-md md:text-2xl mb-6 md:mb-8"
        >
          Drippit—Find Your Drip, Swipe Your Style.
        </motion.h2>
        <motion.div 
          className="flex justify-center gap-6 md:gap-8 mb-6 md:mb-8"
          variants={staggerChildren}
        >
          {['/mdi-instagram.svg', '/mingcute-social-x-line.svg'].map((icon, index) => (
            <motion.img
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
              src={icon}
              alt="Social"
              className="w-8 h-8 md:w-10 md:h-10 cursor-pointer"
            />
          ))}
        </motion.div>
        <motion.div 
          className="flex justify-center gap-4 md:gap-6 mb-4 md:mb-6 flex-wrap"
          variants={staggerChildren}
        >
          {['Privacy Policy', 'Terms of Service', 'Contact Us'].map((item, index) => (
            <motion.span
              key={index}
              variants={slideUp}
              whileHover={{ scale: 1.1, y: -3 }}
              className="text-gray-300 text-sm md:text-base cursor-pointer"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
        <motion.p
          variants={slideUp}
          className="text-gray-400 text-xs md:text-sm"
        >
          © {new Date().getFullYear()} Drippit. All rights reserved.
        </motion.p>
      </motion.footer>
    </div>
  );
};

export default LandingPage;