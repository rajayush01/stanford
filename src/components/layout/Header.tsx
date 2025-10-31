import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { scrollToTop } from "../../utils/scrollUtils";
import useScrollPosition from "../../hooks/useScrollPosition";
import dpslogo from "../../assets/images/schoologo-bg.png";

interface NavItem {
  name: string;
  path: string;
  dropdown: { name: string; path: string }[];
}

const Header = () => {
  const { isScrolled } = useScrollPosition(50);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<number | null>(null);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const dropdownRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  useEffect(() => {
    setActiveLink(location.pathname);
    setMobileMenuOpen(false);
    if (!location.hash) scrollToTop();
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isClickInside = Object.values(dropdownRefs.current).some(
        (ref) => ref && ref.contains(event.target as Node)
      );
      if (!isClickInside) setActiveDropdown(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsHeroVisible(false);
      return;
    }

    const hero = document.querySelector(".hero-section");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [location.pathname]);

  const navigationStructure: NavItem[] = [
    { name: "Home", path: "/", dropdown: [] },
    {
      name: "Our Legacy",
      path: "",
      dropdown: [
        { name: "ABOUT US", path: "/about" },
        { name: "OUR MOTTO", path: "/legacy?section=motto" },
        { name: "VISION AND MISSION", path: "/legacy?section=vision" },
        { name: "KKCET GROUP", path: "/legacy?section=kkcet" },
        { name: "ACADEMIC TEAM", path: "/legacy?section=team" },
      ],
    },
    {
      name: "Academics",
      path: "",
      dropdown: [
        { name: "CURRICULUM", path: "/academics?section=curriculum" },
        { name: "TEACHING METHODOLOGY", path: "/academics?section=teaching" },
        { name: "ACADEMIC ACHIEVEMENTS", path: "/academics?section=achievements" },
      ],
    },
    {
      name: "Facilities",
      path: "",
      dropdown: [
        { name: "MESS", path: "/facilities?section=mess" },
        { name: "LIBRARY", path: "/facilities?section=library" },
        { name: "SWIMMING POOL", path: "/facilities?section=swimming" },
        { name: "TINKERING LAB", path: "/facilities?section=tinkering" },
        { name: "CO-CURRICULAR ACTIVITIES", path: "/facilities?section=activities" },
      ],
    },
    {
      name: "Admissions",
      path: "",
      dropdown: [
        { name: "ADMISSION PROCEDURE", path: "/admissions?section=procedure" },
        { name: "ELIGIBILITY CRITERIA", path: "/admissions?section=criteria" },
        { name: "REQUIRED DOCUMENTS", path: "/admissions?section=documents" },
        { name: "FAQ", path: "/admissions?section=faq" },
        { name: "CONTACT US", path: "/admissions?section=contact" },
      ],
    },
    { name: "Gallery", path: "/gallery", dropdown: [] },
    { name: "Contact Us", path: "/contact", dropdown: [] },
  ];

  const handleDropdownToggle = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const isNavItemActive = (navItem: NavItem) =>
    activeLink === navItem.path || navItem.dropdown.some((d) => activeLink === d.path);

  const isTransparent = location.pathname === "/" && isHeroVisible && !isScrolled;

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500">
      <div
        className={`transition-all duration-700 ${
          isTransparent
            ? "bg-transparent backdrop-blur-sm text-white"
            : "bg-white/95 backdrop-blur-md shadow-md text-gray-800 border-b border-[#690B22]/20"
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between px-8 md:px-12 py-3 md:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={dpslogo}
              alt="School Logo"
              className="h-14 w-14 rounded object-contain transition-all duration-500"
            />
            <div className="leading-tight">
              <h1
                className={`text-xl font-bold tracking-tight transition-colors duration-500 ${
                  isTransparent ? "text-white" : "text-[#690B22]"
                }`}
              >
                Stanford International <span>School</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2.5 lg:space-x-3 ml-10">
            {navigationStructure.map((navItem, index) => (
              <div
                key={navItem.name}
                className="relative"
                ref={(el) => (dropdownRefs.current[index] = el)}
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {navItem.dropdown.length === 0 ? (
                  <Link
                    to={navItem.path}
                    className={`font-medium transition-all duration-300 px-2 py-1.5 rounded-lg ${
                      isNavItemActive(navItem)
                        ? "text-[#690B22] bg-[#FBEFF1]"
                        : isTransparent
                        ? "text-white hover:text-[#F9D9E0]"
                        : "text-gray-700 hover:text-[#690B22] hover:bg-[#FBEFF1]"
                    }`}
                  >
                    {navItem.name}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className={`font-medium transition-all duration-300 px-2 py-1.5 rounded-lg ${
                        isNavItemActive(navItem)
                          ? "text-[#690B22] bg-[#FBEFF1]"
                          : isTransparent
                          ? "text-white hover:text-[#F9D9E0]"
                          : "text-gray-700 hover:text-[#690B22] hover:bg-[#FBEFF1]"
                      }`}
                    >
                      {navItem.name}
                    </button>

                    {/* Dropdown */}
                    <div
                      className={`absolute top-full left-0 mt-0 w-56 bg-white/95 backdrop-blur-md shadow-xl rounded-xl border border-[#690B22]/20 overflow-hidden transition-all duration-300 ${
                        activeDropdown === index
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                    >
                      {navItem.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={`block px-4 py-3 text-sm font-medium border-b border-gray-100/50 last:border-b-0 ${
                            activeLink === item.path
                              ? "bg-[#690B22] text-white"
                              : "text-gray-700 hover:text-white hover:bg-[#690B22]"
                          }`}
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-[#690B22] hover:bg-[#FBEFF1]"
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#690B22]/20 pt-3 pb-4 bg-white/95 backdrop-blur-md">
            <div className="px-6 space-y-1">
              {navigationStructure.map((navItem, index) => (
                <div key={navItem.name}>
                  {navItem.dropdown.length === 0 ? (
                    <Link
                      to={navItem.path}
                      className="block px-3 py-2 font-semibold rounded-lg hover:bg-[#FBEFF1] text-[#690B22]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {navItem.name}
                    </Link>
                  ) : (
                    <button
                      className="w-full text-left px-3 py-2 font-semibold rounded-lg hover:bg-[#FBEFF1] text-[#690B22]"
                      onClick={() =>
                        setActiveMobileDropdown(activeMobileDropdown === index ? null : index)
                      }
                    >
                      {navItem.name}
                    </button>
                  )}

                  {activeMobileDropdown === index &&
                    navItem.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-6 py-2 text-[#690B22] hover:bg-[#FBEFF1] rounded-md text-sm ml-4"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setActiveMobileDropdown(null);
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
