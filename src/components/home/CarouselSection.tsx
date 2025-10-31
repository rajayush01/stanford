import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/images/viceprincipal.jpeg";
import img2 from "../../assets/images/coordinator.jpeg";
import img3 from "../../assets/images/principal.jpg";
import img4 from "../../assets/images/coordinator2.jpeg";

type LeaderCardProps = {
  name: string;
  title: string;
  image: string;
  description: string;
};

// 🟤 LeaderCard Component
const LeaderCard: React.FC<LeaderCardProps> = ({
  name,
  title,
  image,
  description,
}) => {
  return (
    <div className="relative group overflow-hidden bg-[#F1E3D3] cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-[34rem] w-full">
      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 border-t-8 border-r-8 border-[#C1886F] z-10 rounded-tr-xl"></div>

      {/* Image Section — No cropping, fits neatly */}
      <div className="relative w-full h-[22rem] bg-white flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />

        {/* Maroon Gradient Footer */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#690B22]/95 via-[#690B22]/70 to-transparent text-white p-4 flex flex-col items-center">
          <h3 className="text-base font-semibold">{name}</h3>
          <p className="text-sm text-[#F1E3D3]">{title}</p>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[#690B22]/95 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex items-center justify-center p-6">
          <p className="text-[#F1E3D3] text-sm sm:text-base leading-relaxed text-center font-medium">
            {description}
          </p>
        </div>
      </div>

      {/* Text Section */}
      <div className="p-6 text-center flex flex-col justify-end flex-grow bg-[#F1E3D3]">
        <h2 className="text-xl font-bold text-[#690B22] mb-1 tracking-wide">
          {name.toUpperCase()}
        </h2>
        <p className="text-[#C1886F] text-sm font-semibold">{title}</p>
      </div>
    </div>
  );
};

// 🟥 Leadership Section
const LeadershipTeamSection: React.FC = () => {
  const leaders: LeaderCardProps[] = [
    {
      name: "Mrs. Sadhana Walia",
      title: "Principal",
      image: img3,
      description:
        "Our mission is to impart quality education and ensure holistic personality development. With a legacy of excellence, we nurture future-ready leaders through innovation and compassion.",
    },
    {
      name: "Mr. Vikas Joshi",
      title: "Vice Principal",
      image: img1,
      description:
        "An inspiring educator who blends innovation with leadership, motivating staff and students alike to reach new heights of learning and collaboration.",
    },
    {
      name: "Mrs. Tarannum Kothari",
      title: "Coordinator",
      image: img2,
      description:
        "A dedicated coordinator fostering smooth academic operations and a nurturing environment for every student’s holistic growth.",
    },
    {
      name: "Mrs Vibha Shrivastava",
      title: "Coordinator",
      image: img4,
      description:
        "A dedicated coordinator fostering smooth academic operations and a nurturing environment for every student’s holistic growth.",
    },
  ];

  return (
    <div className="bg-[#fdfcfb] py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#690B22] mb-16">
          Academic Leadership
        </h2>

        {/* Uniform Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="w-full max-w-[270px] flex justify-center"
            >
              <LeaderCard {...leader} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadershipTeamSection;
