import { useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import AcademicsSection from '../components/home/AcademicsSection';
import HomeHighlights from '../components/home/HomeHighlights';
import GallerySection from '../components/home/GallerySection';
import CTASection from '../components/home/CTASection';
import CounterSection from '@/components/home/CounterSection';
import LeadershipSection from '../components/home/LeadershipSection';
import CarouselSection from '@/components/home/CarouselSection';
import YesOath from '@/components/home/YesOath';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, when: 'beforeChildren' },
  },
} as const;

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    transition: { type: 'spring', damping: 15, stiffness: 100 },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 15, stiffness: 100, duration: 0.8 },
  },
} as const;

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 12, stiffness: 100, duration: 0.8 },
  },
} as const;

const SectionWrapper = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      variants={sectionVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="overflow-hidden"
        initial="hidden"
        animate="show"
        variants={container}
      >
        {/* Hero Section */}
        <motion.div variants={fadeIn}>
          <HeroSection />
        </motion.div>

        {/* Counter Section */}
        <SectionWrapper>
          <CounterSection />
        </SectionWrapper>

        {/* About Section */}
        <SectionWrapper>
          <AboutSection />
        </SectionWrapper>

        {/* Gallery Section */}
        <div id="gallery">
          <SectionWrapper>
            <GallerySection />
          </SectionWrapper>
        </div>

        {/* Home Highlights */}
        <HomeHighlights />

        {/* YesOath Section */}
        <SectionWrapper>
          <YesOath />
        </SectionWrapper>

        {/* Academics Section */}
        <SectionWrapper>
          <AcademicsSection />
        </SectionWrapper>

        {/* Leadership Section */}
        <SectionWrapper>
          <LeadershipSection />
        </SectionWrapper>

        {/* Carousel Section */}
        <SectionWrapper>
          <CarouselSection />
        </SectionWrapper>

        {/* CTA Section */}
        <SectionWrapper>
          <CTASection />
        </SectionWrapper>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;