import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, useAnimation,easeOut } from "framer-motion";
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from "@heroicons/react/24/outline";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", contact: "", query: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const heroRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  const heroControls = useAnimation();
  const formControls = useAnimation();
  const infoControls = useAnimation();

  const heroInView = useInView(heroRef, { once: true, amount: 0.1 });
  const formInView = useInView(formRef, { once: true, amount: 0.1 });
  const infoInView = useInView(infoRef, { once: true, amount: 0.1 });

  useEffect(() => {
    if (heroInView) heroControls.start("visible");
    if (formInView) formControls.start("visible");
    if (infoInView) infoControls.start("visible");
  }, [heroInView, formInView, infoInView]);

  const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: easeOut, // ✅ Use easing function reference
    },
  },
} as const;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        success: true,
        message: "✨ Thank you! Our team will get back to you soon.",
      });
      setFormData({ name: "", contact: "", query: "" });
    }, 1200);
  };

  return (
    <div className="bg-gradient-to-b from-[#fffaf5] via-[#fff4e8] to-[#fff0e0] min-h-screen">
      {/* 🟥 HERO SECTION */}
      <motion.div
        ref={heroRef}
        initial="hidden"
        animate={heroControls}
        variants={fadeUp}
        className="relative pt-36 pb-20 text-center overflow-hidden"
      >
        {/* Background Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#7b1113] via-[#9c1b1f] to-[#7b1113] animate-gradient-x"
          style={{ backgroundSize: "200% 200%" }}
        ></motion.div>

        {/* Hero Text */}
        <div className="relative z-10 text-[#ffdca8] px-4">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-extrabold mb-4 drop-shadow-lg"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg max-w-2xl mx-auto text-[#f7d58b]"
          >
            Get in touch with <strong>Stanford International School</strong>, Ujjain.
            <br />
            We’re here to answer all your admission and general enquiries.
          </motion.p>
        </div>
      </motion.div>

      {/* 🟨 MAIN CONTENT */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT - INFO */}
        <motion.div
          ref={infoRef}
          initial="hidden"
          animate={infoControls}
          variants={fadeUp}
          className="bg-white p-8 rounded-2xl shadow-xl border border-[#f5dca3] hover:shadow-2xl transition-shadow"
        >
          <h2 className="text-2xl font-bold text-[#7b1113] mb-6">
            Stanford International School
          </h2>
          <p className="text-[#5c3b3a] mb-2">Since 2006</p>

          <div className="space-y-5 text-[#5c3b3a]">
            <div className="flex">
              <MapPinIcon className="h-6 w-6 text-[#9c1b1f] mr-3" />
              <p>
                Gram Mindia, Indore Road,
                <br /> Ujjain - 456006
              </p>
            </div>

            <div className="flex">
              <PhoneIcon className="h-6 w-6 text-[#9c1b1f] mr-3" />
              <p>
                Contact:{" "}
                <a href="tel:8989697401" className="text-[#7b1113] font-medium">
                  8989697401
                </a>
                <br />
                Admissions:{" "}
                <a href="tel:8989697401" className="text-[#7b1113] font-medium">
                  8989697401
                </a>
              </p>
            </div>

            <div className="flex">
              <EnvelopeIcon className="h-6 w-6 text-[#9c1b1f] mr-3" />
              <p>
                principal@stanfordujjain.com
                <br />
                admissions@stanfordujjain.com
              </p>
            </div>

            <div className="flex">
              <ClockIcon className="h-6 w-6 text-[#9c1b1f] mr-3" />
              <p>
                Monday - Saturday: 8:00 AM - 4:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* 🟡 Social Links */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-[#7b1113] mb-3">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://facebook.com/stanfordujjain"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center bg-[#7b1113] text-[#ffdca8] rounded-full hover:scale-110 shadow-md transition"
                whileHover={{ rotate: 10 }}
              >
                <FaFacebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://instagram.com/stanford_ujjain"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center bg-[#9c1b1f] text-[#ffdca8] rounded-full hover:scale-110 shadow-md transition"
                whileHover={{ rotate: -10 }}
              >
                <FaInstagram className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT - FORM */}
        <motion.div
          ref={formRef}
          initial="hidden"
          animate={formControls}
          variants={fadeUp}
          className="bg-white p-8 rounded-2xl shadow-xl border border-[#f5dca3] hover:shadow-2xl transition-shadow"
        >
          <h2 className="text-2xl font-bold text-[#7b1113] mb-6">Enquiry Form</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-sm font-medium text-[#5c3b3a]">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-[#f5dca3] rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#9c1b1f]"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-sm font-medium text-[#5c3b3a]">
                Your Contact Number / Email
              </label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-[#f5dca3] rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#9c1b1f]"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-sm font-medium text-[#5c3b3a]">
                Your Query
              </label>
              <textarea
                name="query"
                rows={4}
                value={formData.query}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-[#f5dca3] rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#9c1b1f]"
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 bg-[#7b1113] text-[#ffdca8] font-medium rounded-md hover:bg-[#9c1b1f] transition disabled:opacity-50 shadow-md"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </motion.button>

            <AnimatePresence>
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-[#7b1113] text-center font-medium mt-4"
                >
                  {submitStatus.message}
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>

      {/* 🗺️ MAP */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="w-full h-[400px] overflow-hidden rounded-t-2xl shadow-inner"
      >
        <iframe
          src="https://www.google.com/maps?q=Stanford%20International%20School%20Ujjain&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Stanford International School Map"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default ContactUs;
