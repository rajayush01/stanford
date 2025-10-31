import { motion, useInView,easeInOut } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, when: "beforeChildren" },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  const pulse = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: easeInOut, // ✅ use easing function, not string or array
    },
  };

  return (
    <motion.section
      ref={ref}
      className="relative py-20 bg-[#800000] text-[#FFF8DC] overflow-hidden"
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={container}
    >
      {/* Subtle background glow (Beige soft glows) */}
      <motion.div
        className="absolute -top-32 -right-32 w-96 h-96 bg-[#F5DEB3] rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#FFE4B5] rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="max-w-4xl mx-auto text-center" variants={container}>
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold mb-6 text-[#F5DEB3]"
            variants={item}
          >
            Ready to Join Our School Community?
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-[#FFF8DC]/90 mb-8 max-w-2xl mx-auto leading-relaxed"
            variants={item}
          >
            Give your child the gift of quality education and a bright future.
            <br className="hidden sm:inline" />
            Admissions are now open for the academic year 2025–26.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-6"
            variants={item}
          >
            {/* Apply Now Button */}
            <motion.div
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to="/admissions/apply-now"
                className="relative overflow-hidden group inline-block bg-[#F5DEB3] text-[#800000] font-semibold py-4 px-10 rounded-full transition-all duration-500 shadow-lg hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center">
                  Apply Now
                  <motion.span className="ml-2 inline-block" animate={pulse}>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </motion.span>
                </span>
                <span className="absolute inset-0 bg-[#FFE4B5] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></span>
              </Link>
            </motion.div>

            {/* Contact Us Button */}
            <motion.div
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to="/contact"
                className="relative overflow-hidden group inline-block border-2 border-[#F5DEB3] text-[#F5DEB3] hover:bg-[#F5DEB3] hover:text-[#800000] font-semibold py-4 px-10 rounded-full transition-all duration-500 hover:shadow-lg"
              >
                <span className="relative z-10 flex items-center">
                  Contact Us
                  <svg
                    className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Footer Note */}
          <motion.p
            className="mt-8 text-[#FFF8DC]/80 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 20,
            }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Limited seats available. Apply today to secure your child's future.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTASection;
