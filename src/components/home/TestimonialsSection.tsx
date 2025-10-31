import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaTrophy, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

const awards = [
  {
    id: 1,
    name: 'Best School of the Year 2024',
    description: 'DPS Bangalore was awarded the prestigious "Best School of the Year 2024" for its commitment to excellence in education, sports, and extracurricular activities.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 2,
    name: 'Excellence in Sports 2023',
    description: 'DPS Bangalore received the "Excellence in Sports 2023" award for its exceptional sports infrastructure and student achievements in regional and national competitions.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 3,
    name: 'Innovative Teaching Award 2022',
    description: 'The "Innovative Teaching Award 2022" was given to DPS Bangalore for its groundbreaking teaching methodologies that enhance student learning and creativity.',
    image: 'https://randomuser.me/api/portraits/men/67.jpg'
  },
  {
    id: 4,
    name: 'Top Cultural School Award 2021',
    description: 'DPS Bangalore won the "Top Cultural School Award 2021" for its outstanding contribution to promoting arts, culture, and creativity among students.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
} as const;

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 100,
      duration: 0.8
    }
  }
} as const;

const fadeIn = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1]
    }
  }
} as const;

const slideVariants: any = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring' as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.4 }
    }
  } as const,
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    transition: {
      x: { type: 'spring' as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 }
    }
  })
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const nextAward = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === awards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevAward = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? awards.length - 1 : prevIndex - 1
    );
  };

  const goToAward = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <motion.section 
      ref={ref}
      className="relative py-20 bg-gray-50 overflow-hidden"
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      variants={fadeIn}
    >
      <motion.div 
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
        >
          <motion.div 
            className="inline-block mb-4"
            variants={item}
          >
            <span className="inline-block px-4 py-1 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full">
              Our Achievements
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            variants={item}
          >
            Awards & Recognition
          </motion.h2>
          
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-300 mx-auto rounded-full"
            variants={item}
          />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="absolute top-8 left-8 text-primary-100 text-5xl md:text-6xl lg:text-7xl z-0"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }}
            >
              <FaTrophy />
            </motion.div>
            
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative z-10"
              >
                <div className="text-center px-4 md:px-12">
                  <div className="relative mb-8">
                    <FaQuoteLeft className="text-primary-100 text-4xl absolute -left-2 -top-6 opacity-20" />
                    <motion.p 
                      className="text-gray-700 text-lg md:text-xl leading-relaxed italic relative z-10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {awards[currentIndex].description}
                    </motion.p>
                    <FaQuoteLeft className="text-primary-100 text-4xl absolute -right-2 -bottom-6 opacity-20 transform rotate-180" />
                  </div>
                  
                  <motion.div 
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.div 
                      className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary-100 mb-4 shadow-lg"
                      whileHover={{ 
                        scale: 1.05,
                        rotate: 5,
                        boxShadow: '0 10px 25px -5px rgba(37, 99, 235, 0.3)'
                      }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <img 
                        src={awards[currentIndex].image} 
                        alt={awards[currentIndex].name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </motion.div>
                    <h4 className="text-xl font-semibold text-gray-900">
                      {awards[currentIndex].name}
                    </h4>
                    <span className="text-sm text-gray-500 mt-1">
                      {currentIndex + 1} of {awards.length}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.button 
              onClick={prevAward}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-primary-600 p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all z-20"
              aria-label="Previous award"
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChevronLeft className="w-5 h-5" />
            </motion.button>
            
            <motion.button 
              onClick={nextAward}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-primary-600 p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all z-20"
              aria-label="Next award"
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChevronRight className="w-5 h-5" />
            </motion.button>

            <div className="flex justify-center mt-10 space-x-2">
              {awards.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToAward(index)}
                  className={`relative w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary-600 scale-125' : 'bg-gray-200 hover:bg-primary-300'
                  }`}
                  aria-label={`Go to award ${index + 1}`}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {index === currentIndex && (
                    <motion.span 
                      className="absolute inset-0 bg-primary-600 rounded-full"
                      layoutId="activeDot"
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 30
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
            
            <motion.div 
              className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-100 rounded-full opacity-20"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 10, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
