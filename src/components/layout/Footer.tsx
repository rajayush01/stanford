import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Admissions", path: "/admissions" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-[#F5DEB3]" />,
      text: "Gram Mindia, Indore Road, Ujjain – 456006, Madhya Pradesh, India",
    },
    {
      icon: <FaPhone className="text-[#F5DEB3]" />,
      text: "Phone: 8989697401",
    },
    {
      icon: <FaWhatsapp className="text-[#F5DEB3]" />,
      text: "Admission Queries: 8989697401",
    },
    {
      icon: <FaEnvelope className="text-[#F5DEB3]" />,
      text: "principal@stanfordujjain.com, admissions@stanfordujjain.com",
    },
  ];

  const socialLinks = [
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/stanford_ujjain",
      name: "Instagram",
    },
    {
      icon: <FaFacebook />,
      url: "https://facebook.com/stanfordujjain",
      name: "Facebook",
    },
    {
      icon: <FaYoutube />,
      url: "#",
      name: "YouTube",
    },
  ];

  return (
    <footer className="bg-[#800000] text-[#FFF8DC] pt-12 pb-6">
      <div className="container mx-auto px-6">
        {/* --- Main Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* --- Logo & About --- */}
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-[#F5DEB3] text-[#800000] h-10 w-10 rounded-full flex items-center justify-center font-bold text-lg mr-3 shadow-md">
                S
              </span>
              <span>Stanford International School</span>
            </h3>
            <p className="text-[#FFF8DC]/90 mb-4 leading-relaxed">
              Founded in <span className="font-semibold">2006</span>, Stanford International School,
              Ujjain, is dedicated to shaping responsible, confident, and compassionate learners
              through holistic education.
            </p>

            {/* --- Social Links --- */}
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-[#FFF8DC]/80 hover:text-[#F5DEB3] text-xl transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* --- Quick Links --- */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-[#F5DEB3]/40">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[#FFF8DC]/80 hover:text-[#F5DEB3] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Contact Info --- */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-[#F5DEB3]/40">
              Contact Us
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mt-1 mr-3">{item.icon}</span>
                  <span className="text-[#FFF8DC]/90">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Admission Enquiry --- */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-[#F5DEB3]/40">
              Admission Enquiries
            </h3>
            <p className="text-[#FFF8DC]/90 mb-3">
              Contact us for Admission related queries on –
            </p>
            <p className="text-[#FFF8DC]/90 mb-1">
              📞 Call / WhatsApp:{" "}
              <span className="font-semibold text-[#F5DEB3]">8989697401</span>
            </p>
            <p className="text-[#FFF8DC]/90">
              ✉️ Write to us:{" "}
              <a
                href="mailto:admissions@stanfordujjain.com"
                className="text-[#F5DEB3] underline hover:text-[#FFE4B5]"
              >
                admissions@stanfordujjain.com
              </a>
            </p>
          </div>
        </div>

        {/* --- Footer Bottom --- */}
        <div className="border-t border-[#F5DEB3]/30 pt-6 mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#FFF8DC]/70 text-sm text-center md:text-left">
              &copy; {currentYear} Stanford International School, Ujjain. All Rights Reserved.
            </p>

            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                to="/privacy-policy"
                className="text-[#FFF8DC]/70 hover:text-[#F5DEB3] text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-[#FFF8DC]/70 hover:text-[#F5DEB3] text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/sitemap"
                className="text-[#FFF8DC]/70 hover:text-[#F5DEB3] text-sm transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
