import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  CheckCircleIcon,
  AcademicCapIcon,
  UserGroupIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import studentsimg from "../../assets/images/faculty.jpg";
import culturalimg from "../../assets/images/cocuricular.jpeg";
import img1 from "../../assets/images/academics.jpg";
import img2 from "../../assets/images/labhome.jpg";

// Placeholder images - replace with your actual imports
// const studentsimg = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800";
// const culturalimg = "https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?w=800";
// const img1 = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800";
// const img2 = "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const features = [
  {
    name: "Esteemed Faculty",
    description:
      "A team of passionate educators dedicated to inspiring young minds through innovative and caring teaching.",
    icon: AcademicCapIcon,
  },
  {
    name: "Academic Excellence",
    description:
      "A well-balanced curriculum blending academics with creativity and critical thinking for lifelong learners.",
    icon: LightBulbIcon,
  },
  {
    name: "Modern Infrastructure",
    description:
      "Smart classrooms, advanced labs, and collaborative spaces designed for exploration and discovery.",
    icon: CheckCircleIcon,
  },
  {
    name: "Co-curricular Growth",
    description:
      "Art, music, and sports programs that develop confidence, teamwork, and leadership.",
    icon: UserGroupIcon,
  },
];

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      id="about"
      className="relative bg-gradient-to-b from-white via-gray-50 to-white py-20 overflow-hidden"
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={container}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#690B22] opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E2B714] opacity-5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div className="text-center mb-20" variants={fadeInUp}>
          <motion.div 
            className="inline-block mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#690B22] font-semibold text-sm uppercase tracking-wider border-b-2 border-[#E2B714] pb-2">
              About Us
            </span>
          </motion.div>
          <motion.h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Welcome to{" "}
            <span className="text-[#690B22] relative inline-block">
              Stanford International School
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-[#E2B714]"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </motion.h2>
          <motion.p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            Where excellence meets opportunity — a community that celebrates learning,
            innovation, and leadership every day.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mb-20"
          variants={container}
        >
          {/* Left Column - Images (3 columns) */}
          <motion.div className="lg:col-span-3" variants={scaleIn}>
            <div className="relative">
              {/* Main Large Image */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={studentsimg}
                  alt="Faculty"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#690B22]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Our Expert Faculty</h3>
                  <p className="text-sm opacity-90">Dedicated to excellence in education</p>
                </div>
              </motion.div>

              {/* Three Smaller Images */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { src: img1, label: "Academics" },
                  { src: img2, label: "Labs" },
                  { src: culturalimg, label: "Culture" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative rounded-xl overflow-hidden shadow-lg aspect-square group"
                    variants={fadeInUp}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={item.src}
                      alt={item.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#690B22] via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-semibold">{item.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Text Content (2 columns) */}
          <motion.div className="lg:col-span-2 space-y-8" variants={fadeInUp}>
            <div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
                A Community Dedicated to{" "}
                <span className="text-[#690B22]">Excellence</span>
              </h3>
              <div className="w-20 h-1 bg-[#E2B714] mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4">
                At Stanford International School, Ujjain, education goes beyond books — it's a
                journey of growth, creativity, and discovery. We foster curiosity, innovation, and
                compassion to build the leaders of tomorrow.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Under the visionary leadership of <strong className="text-[#690B22]">Principal Mrs. Sadhana Walia</strong> and{" "}
                <strong className="text-[#690B22]">Vice Principal Mr. Vikas Joshi</strong>, our faculty blends expertise with
                empathy — ensuring that every child's potential is nurtured in a caring,
                forward-thinking environment.
              </p>
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#about"
                className="inline-flex items-center gap-2 bg-[#690B22] text-white font-semibold py-4 px-8 rounded-full shadow-lg
                 hover:bg-[#8C2C3E] hover:shadow-xl transition-all duration-300 border-2 border-[#690B22]
                 hover:border-[#E2B714] group"
              >
                Learn More About Us
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Features Grid - Full Width Below */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 group"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <motion.div
                className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-[#690B22] to-[#8C2C3E] text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300"
              >
                <feature.icon className="h-7 w-7" aria-hidden="true" />
              </motion.div>

              {/* Content */}
              <h4 className="text-xl font-bold text-[#690B22] mb-3">{feature.name}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>

              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#E2B714] opacity-5 rounded-bl-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;