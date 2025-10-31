import React, { useRef } from "react";
import { motion, useInView,easeOut } from "framer-motion";
import {
  AcademicCapIcon,
  HeartIcon,
  UsersIcon,
  SparklesIcon,
  LightBulbIcon,
} from "@heroicons/react/24/solid";

const AcademicsSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut, // ✅ use easing function, not string
    },
  },
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, when: "beforeChildren" },
  },
};


  const pillars = [
    {
      title: "Intellectual Growth",
      description:
        "Beyond rote learning, we cultivate curiosity, critical thinking, creativity, and a lifelong love for learning through hands-on experiences and innovative teaching.",
      icon: LightBulbIcon,
    },
    {
      title: "Social Skills and Community",
      description:
        "Through teamwork, communication, and empathy, students learn collaboration, compassion, and cultural respect in a diverse environment.",
      icon: UsersIcon,
    },
    {
      title: "Emotional Well-being",
      description:
        "We nurture emotionally intelligent and resilient students with guidance from trained counsellors and holistic well-being practices.",
      icon: HeartIcon,
    },
    {
      title: "Character and Values",
      description:
        "We emphasize ethics, respect, honesty, and integrity — guiding students to make responsible choices and contribute positively to the world around them.",
      icon: AcademicCapIcon,
    },
    {
      title: "Extracurricular Enrichment",
      description:
        "Through sports, arts, music, and drama, students explore passions, discover talents, and develop discipline, teamwork, and confidence — life skills for the future.",
      icon: SparklesIcon,
    },
  ];

  return (
    <motion.section
      ref={ref}
      className="relative bg-gradient-to-b from-[#F1E3D3] to-[#FFF8F6] py-16 sm:py-24 lg:py-32 overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={container}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div className="text-center max-w-3xl mx-auto mb-16" variants={fadeUp}>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#690B22] tracking-tight mb-6">
            Overall Development of Child
          </h2>
          <p className="text-lg sm:text-xl text-[#4B2E2B] leading-relaxed">
            At Stanford, our mission extends beyond academics. We are committed to nurturing confident,
            capable, and compassionate individuals — shaping both the heart and the mind. Our holistic
            approach prepares students not just for exams, but for life.
          </p>
        </motion.div>

        {/* Pillars - Pyramid Style */}
        <motion.div variants={container} className="flex flex-col items-center space-y-12">
          {/* Top Row - 3 Cards */}
          <div className="flex flex-wrap justify-center gap-10">
            {pillars.slice(0, 3).map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white p-8 rounded-2xl border border-[#F1E3D3] shadow-md hover:shadow-xl transition-all duration-300 max-w-sm w-full sm:w-[300px] text-center"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#690B22] text-[#F1E3D3] mb-6 mx-auto shadow-md">
                  <pillar.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-[#690B22] mb-3">{pillar.title}</h3>
                <p className="text-[#4B2E2B] text-base leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row - 2 Cards */}
          <div className="flex justify-center gap-12 sm:gap-16 lg:gap-20 mt-6">
            {pillars.slice(3).map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white p-8 rounded-2xl border border-[#F1E3D3] shadow-md hover:shadow-xl transition-all duration-300 max-w-sm w-full sm:w-[300px] text-center"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#690B22] text-[#F1E3D3] mb-6 mx-auto shadow-md">
                  <pillar.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-[#690B22] mb-3">{pillar.title}</h3>
                <p className="text-[#4B2E2B] text-base leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer Text */}
        <motion.div className="text-center mt-24 max-w-4xl mx-auto" variants={fadeUp}>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#690B22] mb-4">
            Empowering Every Child to Thrive
          </h3>
          <p className="text-[#4B2E2B] text-lg leading-relaxed">
            At Stanford, we celebrate the journey of growth — where academic achievement meets emotional
            strength, creativity, and compassion. Every student is encouraged to explore, express, and evolve
            into a well-rounded individual ready to make a positive impact.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AcademicsSection;
