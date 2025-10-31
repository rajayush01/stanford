import React, { useRef, useEffect } from 'react';
import { motion, useInView,easeOut } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import {
  AcademicCapIcon,
  LightBulbIcon,
  UsersIcon,
  GlobeAltIcon,
  HeartIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';



const Academics: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 120;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };



  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const section = searchParams.get('section');
    if (section) {
      setTimeout(() => {
        scrollToSection(section);
      }, 100);
    }
  }, [location]);

  // Animation variants
  const cardVariants: Record<string, any> = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      type: "spring",
      stiffness: 120,
      ease: easeOut,
    },
  }),
  hover: {
    y: -8,
    scale: 1.03,
    boxShadow: "0px 12px 30px rgba(156,47,60,0.15)",
    transition: { duration: 0.3, ease: easeOut },
  },
};


  return (
    <div className="bg-white" ref={ref} style={{ scrollBehavior: 'smooth' }}>
      {/* 🟥 Hero Section */}
      <motion.div
        className="relative bg-[#9C2F3C] pt-32 py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background & Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#9C2F3C] via-[#B64856] to-[#C1646F] opacity-90"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
          <motion.div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </div>

        {/* Text */}
        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl font-extrabold tracking-tight text-[#FFECD1] sm:text-5xl lg:text-6xl mt-10 drop-shadow-md"
          >
            Academics at a Glance
          </motion.h1>
          <motion.p
            className="mt-6 text-xl text-[#FFF4E1] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            A comprehensive and flexible academic approach — where curiosity meets excellence.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* 🟡 Curriculum Overview */}
      <motion.div
        id="curriculum"
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold text-[#9C2F3C] sm:text-4xl">
              Our Academic Philosophy
            </h2>
            <p className="mt-4 text-lg text-[#5c3b3a] max-w-2xl mx-auto">
              Encouraging critical thinking, creativity, and in-depth understanding across all subjects.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <AcademicCapIcon className="h-10 w-10 text-[#9C2F3C]" />,
                title: 'Science Stream',
                description:
                  'PCM (Physics, Chemistry, Mathematics) and PCB (Physics, Chemistry, Biology) for students aspiring towards engineering, medicine, and scientific careers.',
              },
              {
                icon: <LightBulbIcon className="h-10 w-10 text-[#9C2F3C]" />,
                title: 'Commerce Stream',
                description:
                  'Focused on Financial Management, Entrepreneurship, and Business Studies, preparing students for leadership in finance and enterprise.',
              },
              {
                icon: <UsersIcon className="h-10 w-10 text-[#9C2F3C]" />,
                title: 'Humanities Stream',
                description:
                  'Offering subjects such as Psychology, Applied Mathematics, and Social Sciences for students interested in arts, research, and public service.',
              },
              {
                icon: <GlobeAltIcon className="h-10 w-10 text-[#9C2F3C]" />,
                title: 'Vocational & New-Age',
                description:
                  'Courses in Artificial Intelligence, Computer Applications, and Physical Education to meet the needs of the future.',
              },
              {
                icon: <SparklesIcon className="h-10 w-10 text-[#9C2F3C]" />,
                title: 'Specialized Faculty',
                description:
                  'Expert educators in Applied Mathematics, AI, and PE ensure personalized instruction and student growth.',
              },
              {
                icon: <HeartIcon className="h-10 w-10 text-[#9C2F3C]" />,
                title: 'Counseling & Support',
                description:
                  'A dedicated counselor provides academic and emotional guidance to help students thrive holistically.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#fffaf5] rounded-2xl shadow-lg overflow-hidden border border-[#f0d7b1]"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
              >
                <div className="p-8 flex flex-col items-center text-center space-y-4">
                  <motion.div
                    className="flex items-center justify-center h-16 w-16 rounded-full bg-[#fce9b1] text-[#9C2F3C] shadow-sm"
                    whileHover={{ rotate: 10, scale: 1.15 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-[#9C2F3C]">{item.title}</h3>
                  <p className="text-[#5c3b3a] text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ❤️ Support Section */}
      <motion.div
        id="support"
        className="py-20 bg-gradient-to-br from-[#fff8ed] to-[#fdf3e3] scroll-mt-32"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl font-extrabold text-[#9C2F3C] sm:text-4xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Specialized Support for Every Learner
          </motion.h2>
          <motion.p
            className="text-lg text-[#5c3b3a] max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            At Stanford International School, we recognize that academic success goes hand in hand with
            emotional well-being. Our dedicated counselor ensures that every student receives the right
            guidance, motivation, and care to thrive both academically and personally.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Academics;
