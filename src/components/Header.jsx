import { motion, useTransform, useScroll } from 'framer-motion';
import { NavLink,Link } from 'react-router';

const Header = () => {
    const { scrollY } = useScroll();
    const navOpacity = useTransform(scrollY, [0, 50], [1, 0.8]);
    const buttonHover = {
        scale: 1.05,
        boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 10
        }
    };

    const menuItems = [
        { text: 'Features', path: '/features' },
        { text: 'Curations', path: '/curations' },
        { text: 'FAQ', path: '/faq' }
      ];

    return (
        <div>
            <motion.nav 
                style={{ opacity: navOpacity }}
                className="p-3 md:p-4 top-0 z-50 backdrop-blur-sm"
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
      <a href="#" className="no-underline">
        <motion.span 
          whileHover={{ 
            scale: 1.1, 
            color: '#000',
            transition: { type: "spring", stiffness: 300 }
          }}
          className="text-gray-400 cursor-pointer"
        >
          Features
        </motion.span>
      </a>

      <a href="#/curations" className="no-underline">
        <motion.span 
          whileHover={{ 
            scale: 1.1, 
            color: '#000',
            transition: { type: "spring", stiffness: 300 }
          }}
          className="text-gray-400 cursor-pointer"
        >
          Curations
        </motion.span>
      </a>

      <a href="#/faq" className="no-underline">
        <motion.span 
          whileHover={{ 
            scale: 1.1, 
            color: '#000',
            transition: { type: "spring", stiffness: 300 }
          }}
          className="text-gray-400 cursor-pointer"
        >
          FAQ
        </motion.span>
      </a>
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
        </div>
    );
};

export default Header;