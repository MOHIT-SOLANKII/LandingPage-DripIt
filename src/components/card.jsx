import { motion } from "framer-motion"

export default function Card() {
  const features = [
    {
      title: "SWIPE TO SHOP",
      heading: "Shopping, but make it fun! 🔥",
      description:
        "Say goodbye to boring scrolling. With Drippit, shopping feels like a game. Swipe left to pass, swipe right to save, and build your dream wardrobe in seconds.",
      direction: "left",
      image: "https://images.pexels.com/photos/789303/pexels-photo-789303.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "YOUR DREAM CLOSET",
      heading: "Build the closet you've always wanted. 💅",
      description:
        "Every swipe you love gets added to your wishlist, turning your style dreams into reality. Save your favorites, organize by vibe, and access your curated closet anytime.",
      direction: "right",
      image: "https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "SMART AI SEARCH",
      heading: "Fashion finds, powered by AI. 🤖✨",
      description:
        'Looking for something specific? Let our AI search do the heavy lifting. Whether it\'s "a black dress for a night out" or "trendy sneakers under $100," Drippit finds the perfect match.',
      direction: "left",
      image: "https://images.pexels.com/photos/8386654/pexels-photo-8386654.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ]

  return (
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        {features.map((feature, index) => (
          <div key={index} className="h-screen w-full snap-start flex items-center justify-center p-4 md:p-8 lg:p-16">
            <motion.div
              initial={{
                x: feature.direction === "left" ? -50 : 50,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 md:gap-12 lg:gap-16 items-center max-w-7xl mx-auto`}
            >
              <motion.div
                whileHover={{
                  scale: 1.02,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                  },
                }}
                className="w-full lg:w-1/2 h-[320px] md:h-[400px] lg:h-[512px] bg-[#d9d9d9] rounded-xl md:rounded-2xl overflow-hidden"
              >
                <motion.img
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.2 }}
                  src={feature.image}
                  alt=""
                  className="w-full h-full object-cover rounded-xl md:rounded-2xl"
                />
              </motion.div>
              <div className="w-full lg:w-1/2 space-y-3 md:space-y-4">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-400 text-xs tracking-[4px] md:tracking-[5px]"
                >
                  {feature.title}
                </motion.span>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl md:text-4xl tracking-wide md:tracking-wider"
                >
                  {feature.heading}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-300 text-lg md:text-xl leading-7"
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
  )
}

