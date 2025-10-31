import React from "react";
import { motion,easeOut } from "framer-motion";
import bg from "../../assets/images/yesoathbg.png";

const YesOath: React.FC = () => {
  const toppers = [
    { id: 1, name: "Aarav Sharma", grade: "Class 12 - Science Stream", score: "97%", img: "https://via.placeholder.com/200" },
    { id: 2, name: "Ananya Gupta", grade: "Class 10 - Overall Topper", score: "96%", img: "https://via.placeholder.com/200" },
    { id: 3, name: "Rohan Mehta", grade: "Class 12 - Commerce Stream", score: "95%", img: "https://via.placeholder.com/200" },
    { id: 4, name: "Isha Patel", grade: "Class 8 - All-Rounder", score: "Outstanding", img: "https://via.placeholder.com/200" },
  ];

  // ✅ Fixed fadeUp variant
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut }, // ✅ use easing function, not string
    },
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F1E3D3] to-[#fff]">
      {/* HERO SECTION */}
      <div
        className="relative h-[60vh] flex flex-col justify-center items-center text-center text-white overflow-hidden mt-16 sm:mt-20 md:mt-24"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Lighter Maroon Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#B74F5A]/85 via-[#8C2C3E]/75 to-[#F1E3D3]/40"></div>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#FFF5EE] drop-shadow-md"
        >
          Pride of Stanford
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative z-10 mt-4 text-lg sm:text-xl max-w-3xl mx-auto text-[#FDF2E9] font-medium"
        >
          Our Students: Innovators, Leaders, and Community Builders
        </motion.p>
      </div>

      {/* MAIN CONTENT */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-16 text-center"
      >
        <p className="text-[#4B2E2B] text-base sm:text-lg leading-relaxed max-w-4xl mx-auto mb-10">
          At Stanford, we believe that true success is a journey, not a destination. Our students consistently
          inspire and surprise us with their dedication, talent, and passion. The achievements of our students are
          a reflection of their incredible potential and our commitment to nurturing future leaders.
          <br />
          <br />
          We provide a supportive environment that encourages exploration and inspires excellence across diverse
          domains. We celebrate every student's unique journey, from personal breakthroughs to public recognitions.
          Our graduates leave with more than just a diploma — they leave with the skills, confidence, and compassion
          to make a positive difference in the world.
        </p>

        {/* TOPPERS SECTION */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl sm:text-4xl font-extrabold text-[#8C2C3E] mb-10"
        >
          Meet Our Toppers
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {toppers.map((topper) => (
            <motion.div
              key={topper.id}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-[#FDF7F3] shadow-md hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden border border-[#E5CFC3]"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={topper.img}
                  alt={topper.name}
                  className="h-full w-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-bold text-[#8C2C3E]">{topper.name}</h3>
                <p className="text-[#6B4C47] text-sm mt-1">{topper.grade}</p>
                <p className="text-[#C1886F] font-semibold mt-2">{topper.score}</p>
              </div>
              <div className="h-1 bg-gradient-to-r from-[#B74F5A] via-[#C1886F] to-[#F1E3D3]" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default YesOath;
