import React, { useState, useEffect } from 'react';
import { motion,easeOut } from 'framer-motion';
import img from '@/assets/images/faculty.jpg';
import img1 from '@/assets/images/students-inclass.jpg';
import img2 from '@/assets/images/science-lab.jpg';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: easeOut, // ✅ use easing function, not string
    },
  }),
};


const AboutUs: React.FC = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => setShowScrollIndicator(window.scrollY <= 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  const values = [
    {
      icon: '🏆',
      title: 'Excellence',
      text: 'Striving for the highest standards in academics and beyond.',
      bg: 'bg-[#FFF8E1]',
    },
    {
      icon: '🤝',
      title: 'Integrity',
      text: 'Upholding honesty, ethics, and strong moral principles.',
      bg: 'bg-[#E3F2FD]',
    },
    {
      icon: '❤️',
      title: 'Respect',
      text: 'Valuing diversity and treating everyone with dignity.',
      bg: 'bg-[#FCE4EC]',
    },
    {
      icon: '💡',
      title: 'Innovation',
      text: 'Encouraging creativity and forward-thinking approaches.',
      bg: 'bg-[#F3E5F5]',
    },
    {
      icon: '🌍',
      title: 'Responsibility',
      text: 'Being accountable for our actions and their impact.',
      bg: 'bg-[#E8F5E9]',
    },
    {
      icon: '👥',
      title: 'Collaboration',
      text: 'Working together to achieve common goals.',
      bg: 'bg-[#FFF3E0]',
    },
  ];

 

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="fixed inset-0 z-0">
        <img
          src={img}
          alt="Stanford International School Campus"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle fade overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Welcome to Stanford International School
          </h2>
          <p className="mt-4 text-lg text-white/90 max-w-2xl drop-shadow-md">
            Since 2006 — Our Students: Innovators, Leaders, and Community Builders
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 transition-all duration-500 ${
          showScrollIndicator
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <button
          onClick={scrollToContent}
          className="group flex flex-col items-center space-y-2 text-white hover:text-[#FFE4B5] transition"
        >
          <div className="w-6 h-10 border-2 border-current rounded-full relative overflow-hidden">
            <div className="w-1 h-3 bg-current rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-bounce"></div>
          </div>
          <span className="text-sm font-medium tracking-wide">
            Scroll Down to See More
          </span>
        </button>
      </div>

      {/* Spacer */}
      <div className="h-screen relative z-10"></div>

      {/* Main Content */}
      <div className="relative z-20 bg-white">
        <div className="py-16">
          <div className="container mx-auto px-4">
            {/* About Us */}
            <h1 className="text-4xl font-bold text-center text-[#800000] mb-12">
              About Us
            </h1>

            {/* History */}
            <section className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-semibold mb-6 text-[#800000]">
                    Our History
                  </h2>
                  <p className="text-gray-800 mb-4">
                    Established in 2006, <strong>Stanford International School, Ujjain</strong>, has been a beacon of
                    quality education fostering intellectual, emotional, and social growth. Located on Indore Road, the
                    school offers a nurturing environment where students are prepared to excel academically and personally.
                  </p>
                  <p className="text-gray-800">
                    Over the years, Stanford has become one of Ujjain’s leading educational institutions, known for its
                    academic excellence, holistic development, and world-class facilities.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={img2}
                    alt="School Campus"
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                </div>
              </div>
            </section>

            {/* Learning Environment */}
            <section className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={img1}
                      alt="Students Learning"
                      className="w-full h-[400px] object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-3xl font-semibold mb-6 text-[#800000]">
                    Learning Environment
                  </h2>
                  <p className="text-gray-800 mb-4">
                    Our state-of-the-art campus includes smart classrooms, science and computer labs, a library, a swimming
                    pool, and an ATAL Tinkering Lab designed to inspire creativity and innovation.
                  </p>
                  <p className="text-gray-800">
                    We focus on hands-on learning experiences that encourage critical thinking, creativity, and a lifelong
                    love for discovery.
                  </p>
                </div>
              </div>
            </section>

            {/* Mission & Vision */}
            <section className="mb-16">
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-[#F5DEB3] to-[#FFE4B5] p-8 rounded-lg shadow-lg"
                >
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-2xl font-semibold mb-4 text-[#800000]">
                    Our Mission
                  </h3>
                  <p className="text-gray-800">
                    To empower students to become lifelong learners, critical thinkers, and responsible global citizens
                    through academic excellence, character development, and holistic growth.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-[#F5DEB3]/70 to-[#FFF8DC] p-8 rounded-lg shadow-lg"
                >
                  <div className="text-4xl mb-4">🌟</div>
                  <h3 className="text-2xl font-semibold mb-4 text-[#800000]">
                    Our Vision
                  </h3>
                  <p className="text-gray-800">
                    To be a center of educational excellence, fostering leadership, innovation, and compassion in every
                    student, preparing them to thrive in a changing world.
                  </p>
                </motion.div>
              </div>
            </section>

            {/* 🌟 Core Values Section */}
            <section className="mb-20 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#800000] mb-12">
                Our Core Values
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, i) => (
                  <motion.div
                    key={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className={`${value.bg} rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 text-left`}
                  >
                    <div className="text-4xl mb-3">{value.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-700">{value.text}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Pride of Stanford */}
            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center text-[#800000]">
                Our Students: Innovators, Leaders & Builders
              </h2>
              <p className="text-center text-gray-800 max-w-3xl mx-auto mb-8">
                At Stanford, our students inspire us every day. Their achievements across academics, sports, and culture reflect
                our commitment to nurturing excellence and character.
              </p>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                {['Student A', 'Student B', 'Student C'].map((name, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="p-6 bg-[#F5DEB3]/40 rounded-lg shadow hover:shadow-lg transition"
                  >
                    <img
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                      alt={name}
                      className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
                    />
                    <h4 className="text-xl font-semibold text-[#800000]">
                      {name}
                    </h4>
                    <p className="text-gray-700">Top Performer in Academics</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
