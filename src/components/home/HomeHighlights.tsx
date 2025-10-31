import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import mottoImage from "@/assets/images/moto-home-img.png";
import visionImage from "@/assets/images/vision-home-img.png";
import missionImage from "@/assets/images/mission-home-img.png";

interface HighlightItem {
  title: string;
  slogan: string;
  desc: string;
  bgGradient: string;
  titleColor: string;
  sloganColor: string;
  buttonColor: string;
  accentColor: string;
  image: string;
}

const highlights: HighlightItem[] = [
  {
    title: "MOTTO",
    slogan: "SAY YES TO\nSERVICE BEFORE SELF",
    desc: "A motto is a vivid reflection of the mettle that goes into the making of an institution.",
    bgGradient: "bg-gradient-to-br from-[#FFE797] to-[#BFDBFE]",
    titleColor: "#B45309",
    sloganColor: "#B45309",
    buttonColor: "#B45309",
    accentColor: "#60A5FA",
    image: mottoImage,
  },
  {
    title: "VISION",
    slogan: "SAY YES TO\nEDUCATION FOR A BETTER FUTURE",
    desc: "Stanford International School aims for the holistic growth of each child — nurturing intellect, discipline, and empathy.",
    bgGradient: "bg-gradient-to-br from-[#F5DAA7] to-[#A7F3D0]",
    titleColor: "#065F46",
    sloganColor: "#059669",
    buttonColor: "#065F46",
    accentColor: "#34D399",
    image: visionImage,
  },
  {
    title: "MISSION",
    slogan: "SAY YES TO\nCHILD-CENTRIC EDUCATION",
    desc: "Stanford is dedicated to delivering innovative, value-based education that empowers future-ready students.",
    bgGradient: "bg-gradient-to-br from-[#F1E3D3] to-[#FDE68A]",
    titleColor: "#92400E",
    sloganColor: "#B45309",
    buttonColor: "#92400E",
    accentColor: "#F59E0B",
    image: missionImage,
  },
];

const HomeHighlights: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleViewMore = (section: string) => {
    navigate(`/legacy?section=${section.toLowerCase()}`);
  };

  return (
   <div
    className="flex flex-col lg:flex-row w-[90%] mx-auto rounded-2xl overflow-hidden mt-16
px-8 sm:px-10 md:px-14 lg:px-16 pt-12 pb-12"
  // 🔹 Added padding here
  >
    {highlights.map((item, idx) => (
      <div
        key={idx}
        className={`flex-1 ${item.bgGradient} px-10 sm:px-12 lg:px-14 pt-16 pb-28 relative min-h-[600px] flex flex-col justify-between transition-all duration-500 hover:shadow-2xl`}  // 🔹 Increased inner padding
      >
          {/* Text Content */}
          <div className="max-w-sm">
            <h2
              className="text-[38px] font-extrabold tracking-wide"
              style={{ color: item.titleColor }}
            >
              {item.title}
            </h2>
            <p
              className="mt-4 font-bold text-[18px] whitespace-pre-line leading-tight"
              style={{ color: item.sloganColor }}
            >
              {item.slogan}
            </p>
            <p className="mt-3 text-gray-700 text-sm leading-relaxed">
              {item.desc}
            </p>

            {/* View More Button */}
            <motion.button
              className="mt-5 text-sm font-semibold border-b-2 border-transparent transition-all duration-300"
              style={{ color: item.buttonColor }}
              onHoverStart={() => setHoveredIndex(idx)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => handleViewMore(item.title)}
              aria-label={`View more about ${item.title}`}
            >
              <AnimatePresence mode="wait">
                {hoveredIndex === idx ? (
                  <motion.span
                    key="hover"
                    initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -10, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="inline-flex items-center"
                  >
                    View More{" "}
                    <motion.span
                      className="ml-1"
                      style={{ color: item.accentColor }}
                    >
                      ›
                    </motion.span>
                  </motion.span>
                ) : (
                  <motion.span
                    key="default"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 10, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="inline-flex items-center"
                  >
                    <motion.span
                      className="mr-1"
                      style={{ color: item.accentColor }}
                    >
                      ›
                    </motion.span>{" "}
                    View More
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Image */}
          <img
            src={item.image}
            alt={item.title}
            className="absolute bottom-0 left-4 w-[160px] lg:w-[200px] object-contain drop-shadow-md"
          />
        </div>
      ))}
    </div>
  );
};

export default HomeHighlights;
