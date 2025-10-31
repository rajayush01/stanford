import React, { useRef } from "react";
import { motion, useInView,easeOut } from "framer-motion";

import messImg from "../assets/images/mess.jpeg";
import libraryImg from "../assets/images/images (8).jpeg";
import swimmingImg from "../assets/images/pool.jpg";
import tinkeringImg from "../assets/images/lab.jpeg";
import yogaImg from "../assets/images/yoga.jpeg";
import mallakhambImg from "../assets/images/mallakhaambh.jpeg";
import artsImg from "../assets/images/art.jpeg";
import danceImg from "../assets/images/dance.jpeg";
import khoKhoImg from "../assets/images/khokho.jpg";

const Facilities: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const facilities = [
    {
      title: "The Mess: Nourishing Minds and Bodies",
      description: `At Stanford International School, our mess is more than just a dining hall — it’s a place for community and nourishment. 
A healthy body is the foundation for a sharp mind. Our hygienic kitchen serves balanced, freshly prepared meals that fuel learning and growth.`,
      image: messImg,
    },
    {
      title: "The Library: A Gateway to Knowledge",
      description: `Our library is the heart of our academic life — a sanctuary for curious minds. 
It houses a wide collection of books and digital resources, encouraging both study and imagination.`,
      image: libraryImg,
    },
    {
      title: "Swimming Pool: Dive into Fitness",
      description: `Our modern swimming pool promotes physical fitness and confidence. Supervised by trained instructors, 
it ensures a safe and enjoyable experience for learners of all levels.`,
      image: swimmingImg,
    },
    {
      title: "Tinkering Lab: A Hub for Innovation",
      description: `The Tinkering Lab is where creativity and experimentation come alive. 
Students build, prototype, and innovate using tools like 3D printers and robotics kits.`,
      image: tinkeringImg,
    },
    {
      title: "Yoga & Meditation: Balance and Mindfulness",
      description: `Yoga sessions help students find focus, flexibility, and inner calm. 
This practice cultivates both physical strength and emotional well-being.`,
      image: yogaImg,
    },
    {
      title: "Mallakhamb: Strength and Tradition",
      description: `Mallakhamb combines gymnastics and yoga on a vertical pole, improving flexibility, discipline, and concentration.`,
      image: mallakhambImg,
    },
    {
      title: "Arts & Crafts: The Creative Canvas",
      description: `Students explore their artistic sides through painting, sculpting, and crafts — building focus, patience, and imagination.`,
      image: artsImg,
    },
    {
      title: "Dance & Music: Rhythm of Expression",
      description: `Our dance and music programs allow students to express themselves through rhythm, coordination, and melody.`,
      image: danceImg,
    },
    {
      title: "Kho-Kho & Traditional Sports",
      description: `Traditional Indian sports like Kho-Kho and Mallakhamb build endurance, teamwork, and respect for cultural heritage.`,
      image: khoKhoImg,
    },
  ];

  const fadeIn = (direction: "left" | "right") => ({
  hidden: { opacity: 0, x: direction === "left" ? -80 : 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: easeOut, // ✅ fixed
    },
  },
} as const);

  return (
    <div ref={ref} className="bg-white overflow-hidden">
      {/* 🟥 Hero Section */}
      <motion.section
        className="relative bg-[#7b1113] py-28 text-center text-[#ffdca8]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 drop-shadow-lg">
          World-Class Facilities
        </h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          Our campus is equipped with state-of-the-art infrastructure,
          fostering innovation, creativity, and student well-being.
        </p>
      </motion.section>

      {/* 🏫 Alternating Facility Cards */}
      <section className="py-24 space-y-24">
        {facilities.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row ${
                !isEven ? "lg:flex-row-reverse" : ""
              } items-center max-w-7xl mx-auto px-6 gap-10`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn(isEven ? "left" : "right")}
            >
              {/* Image or Video */}
              <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] overflow-hidden rounded-2xl shadow-lg group relative">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />
              </div>

              {/* Text Content */}
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-[#7b1113] mb-4">
                  {item.title}
                </h2>
                <p className="text-[#5c3b3a] text-lg leading-relaxed whitespace-pre-line">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
};

export default Facilities;
