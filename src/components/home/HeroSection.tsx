import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import heroVideo from "../../assets/videos/INDIAN SCHOOL OF EXCELLENCE PROMOTIONAL VIDEO.mp4";

const HeroSection = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowOverlay(false), 2000); // 👈 Hide after 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.8, ease: [0, 0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  } as const;

  return (
   <div className="hero-section relative w-full h-[95vh] overflow-hidden bg-white">
  <video
    src={heroVideo}
    autoPlay
    muted
    loop
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
  />


      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* ✅ Text + Buttons (Fade Out After 2s) */}
      <AnimatePresence>
        {showOverlay && (
          <>
            {/* Text Overlay */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-4"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Excellence in Education
              </motion.h2>
              <motion.p
                className="text-xl md:text-2xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Nurturing young minds with quality education since 1990
              </motion.p>
            </motion.div>

            {/* Navigation Buttons (Also Fade Out) */}
            <motion.button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-30"
              aria-label="Previous"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <ChevronLeftIcon className="h-8 w-8" />
            </motion.button>

            <motion.button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-30"
              aria-label="Next"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <ChevronRightIcon className="h-8 w-8" />
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;
