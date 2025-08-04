import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", id: "home" },
  { name: "Services", href: "/services", id: "services" },
  { name: "Programs", href: "/programs", id: "programs", dropdown: true },
  { name: "About Us", href: "/about-us", id: "about" },
  { name: "Contact Us", href: "/contact-us", id: "contact" },
];

const programs = [
  { name: "Medication Prescribing and Management", href: "/mat-med-management" },
  { name: "PHP IOP OP", href: "/outpatient-levels-of-care" },
  { name: "ADHD Concentration", href: "/concentration-acceleration-program" },
  { name: "Individual Services", href: "/services" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const [showDesktopDropdown, setShowDesktopDropdown] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setShowMobileDropdown(false);
  };

  const handleNavClick = (id, href) => {
    setActiveSection(id);
    setIsOpen(false);
    setShowMobileDropdown(false);
    setShowDesktopDropdown(false);

    if (href) {
      navigate(href);
    }
  };

  const toggleMobileDropdown = () => {
    setShowMobileDropdown(!showMobileDropdown);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isOpen &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".mobile-menu-button")
      ) {
        setIsOpen(false);
        setShowMobileDropdown(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-1.5 sm:py-2 text-xs">
        <div className="container mx-auto px-2 sm:px-4 lg:px-8 max-w-7xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
              <div className="flex items-center space-x-1 sm:space-x-1.5 hover:text-red-200 transition-colors duration-300">
                <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm whitespace-nowrap">(480) 790-6666</span>
              </div>
              <div className="hidden sm:flex items-center space-x-1.5 hover:text-red-200 transition-colors duration-300">
                <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="text-xs truncate max-w-[200px] lg:max-w-none">info@chollabehavioralhealth.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-1.5 hover:text-red-200 transition-colors duration-300">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
              <span className="text-xs sm:text-sm whitespace-nowrap">Mesa, AZ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed w-full z-40 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-white shadow-xl backdrop-blur-lg bg-opacity-98 top-0"
            : "bg-white bg-opacity-95 backdrop-blur-md top-5 sm:top-6 lg:top-8"
        }`}
      >
        <div className="container mx-auto px-2 sm:px-4 lg:px-8 max-w-7xl">
          <div className="flex justify-between items-center py-2 sm:py-3 lg:py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 cursor-pointer flex-shrink-0">
              <div className="relative">
                <img
                  src="https://chollabehavioralhealth.com/wp-content/uploads/2024/02/Cholla-Behavioral-Health.png"
                  alt="Cholla Behavioral Health"
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-blue-600 leading-tight">
                  <span className="block sm:inline">Cholla Behavioral</span>
                  <span className="block sm:inline sm:ml-1">Health</span>
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">
                  You Deserve To Be Well
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <div key={item.id} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setShowDesktopDropdown(true)}
                      onMouseLeave={() => setShowDesktopDropdown(false)}
                    >
                      <button
                        className={`relative flex items-center space-x-1 px-3 lg:px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                          activeSection === item.id
                            ? "text-blue-600 bg-blue-50 shadow-md"
                            : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                        }`}
                        onClick={() => handleNavClick(item.id, item.href)}
                      >
                        <span className="text-sm lg:text-base whitespace-nowrap">{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            showDesktopDropdown ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>

                      {/* Desktop Programs Dropdown */}
                      <div
                        className={`absolute top-full left-0 mt-0 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 transform origin-top ${
                          showDesktopDropdown
                            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                        }`}
                      >
                        <div className="py-2">
                          {programs.map((program, idx) => (
                            <Link
                              key={idx}
                              to={program.href}
                              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-200 text-sm font-medium"
                              onClick={() => handleNavClick("programs", program.href)}
                            >
                              {program.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`relative px-3 lg:px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        activeSection === item.id
                          ? "text-blue-600 bg-blue-50 shadow-md"
                          : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      }`}
                      onClick={() => handleNavClick(item.id, item.href)}
                    >
                      <span className="text-sm lg:text-base whitespace-nowrap">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}

              {/* Desktop CTA Button */}
              <button
                onClick={() => window.open("tel:4807906666", "_self")}
                className="relative ml-4 font-semibold text-sm lg:text-base tracking-wide rounded-xl text-white cursor-pointer border-none bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 overflow-hidden active:scale-95 transition-all duration-300 group shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10 inline-flex items-center px-4 lg:px-6 py-2 lg:py-3 transition-colors duration-400 whitespace-nowrap">
                  <Phone className="w-4 h-4 mr-2 animate-pulse" />
                  Call Now
                </span>
                <span className="absolute top-0 w-full h-full -left-full -z-0 transform skew-x-12 bg-gradient-to-r from-white/20 to-white/30 transition-transform duration-700 ease-out group-hover:translate-x-full"></span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Tablet CTA Button (visible on md screens only) */}
            <div className="hidden md:flex lg:hidden items-center">
              <button
                onClick={() => window.open("tel:4807906666", "_self")}
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-3 py-2 rounded-lg font-semibold hover:from-red-600 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-lg text-sm flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden mobile-menu-button p-2 sm:p-2.5 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-110 active:scale-95 flex-shrink-0"
            >
              <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                <Menu
                  className={`w-5 h-5 sm:w-6 sm:h-6 absolute transition-all duration-300 ${
                    isOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                  }`}
                />
                <X
                  className={`w-5 h-5 sm:w-6 sm:h-6 absolute transition-all duration-300 ${
                    isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden mobile-menu transition-all duration-500 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4 overflow-hidden"
          }`}
        >
          <div className="px-2 sm:px-4 py-3 sm:py-4 bg-gradient-to-br from-white to-red-50 border-t border-red-100 shadow-2xl backdrop-blur-lg">
            <nav className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <div key={item.id}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={toggleMobileDropdown}
                        className={`w-full text-left font-medium py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl transition-all duration-300 ${
                          activeSection === item.id
                            ? "text-red-600 bg-white shadow-lg border-l-4 border-red-500"
                            : "text-gray-700 hover:text-red-600 hover:bg-red-50 hover:shadow-md"
                        } flex items-center justify-between text-sm sm:text-base`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 flex-shrink-0 ${
                            showMobileDropdown ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>

                      {/* Mobile Dropdown Menu */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          showMobileDropdown
                            ? "max-h-96 opacity-100 mt-1"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="ml-2 sm:ml-4 space-y-0.5">
                          {programs.map((program, idx) => (
                            <Link
                              key={idx}
                              to={program.href}
                              className="block w-full text-left text-gray-600 hover:text-red-600 hover:bg-red-50 py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg transition-all duration-200 text-xs sm:text-sm font-medium"
                              onClick={() => handleNavClick("programs", program.href)}
                            >
                              • {program.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block w-full text-left font-medium py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl transition-all duration-300 ${
                        activeSection === item.id
                          ? "text-red-600 bg-white shadow-lg border-l-4 border-red-500"
                          : "text-gray-700 hover:text-red-600 hover:bg-red-50 hover:shadow-md"
                      } text-sm sm:text-base`}
                      onClick={() => handleNavClick(item.id, item.href)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA Button */}
              <button
                onClick={() => window.open("tel:4807906666", "_self")}
                className="bg-gradient-to-r from-red-500 to-red-700 text-white px-4 py-3 sm:py-3.5 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl mt-2 sm:mt-3 flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 animate-pulse flex-shrink-0" />
                <span>Get Help Now</span>
              </button>
            </nav>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16 sm:h-18 md:h-20 lg:h-24"></div>
    </>
  );
}