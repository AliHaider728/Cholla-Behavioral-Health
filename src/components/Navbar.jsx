import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import "../Animationa.css"

const navigation = [
  { name: "Home", href: "/", id: "home" },
  { name: "Services", href: "/services", id: "services" },
  { name: "Programs", href: "/programs", id: "programs", dropdown: true },
  { name: "About Us", href: "/about-us", id: "about" },
  { name: "Contact Us", href: "/contact-us", id: "contact" },
];

const programs = [
  {
    name: "Medication Prescribing and Management",
    href: "/mat-med-management",
  },
  { name: "PHP IOP OP", href: "/outpatient-levels-of-care" },
  { name: "ADHD Concentration", href: "/concentration-acceleration-program" },
  { name: "Individual Services", href: "/IndividualServices" },
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
      {/* Main Navigation */}
      <nav
        className={`fixed w-full z-40 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-white shadow-md top-0"
            : "bg-white bg-opacity-95 top-0"
        }`}
      >
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2 cursor-pointer flex-shrink-0"
            >
              <img
                src="https://chollabehavioralhealth.com/wp-content/uploads/2024/02/Cholla-Behavioral-Health.png"
                alt="Cholla Behavioral Health"
                className="w-10 md:w-16 md:h-16 h-10 object-contain"
              />
              <div className="min-w-0">
                <h1 className="text-base hover:text-red-500 font-semibold text-[#3b97d0] md:text-xl whitespace-nowrap">
                  Cholla Behavioral Health
                </h1>
                <p className="text-xs text-gray-600 font-medium">
                  You Deserve To Be Well
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-grow justify-center items-center space-x-6">
              {navigation.map((item) => (
                <div key={item.id} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setShowDesktopDropdown(true)}
                      onMouseLeave={() => setShowDesktopDropdown(false)}
                    >
                      <button
                        className={`flex items-center space-x-1 px-3 py-2 font-medium text-gray-700 relative group ${
                          activeSection === item.id ? "text-gray-900" : ""
                        }`}
                        onClick={() => handleNavClick(item.id, item.href)}
                      >
                        <span className="text-base whitespace-nowrap group-hover:text-red-600">
                          {item.name}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 group-hover:text-red-600 ${
                            showDesktopDropdown ? "rotate-180" : "rotate-0"
                          }`}
                        />
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3b97d0] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                      </button>
                      <div
                        className={`absolute top-full left-0 w-72 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-300 transform origin-top ${
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
                              className="block w-full text-left px-4 py-2 text-gray-700 text-sm font-medium hover:bg-blue-50 hover:text-red-600"
                              onClick={() =>
                                handleNavClick("programs", program.href)
                              }
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
                      className={`px-3 py-2 font-medium text-gray-700 relative group ${
                        activeSection === item.id ? "text-gray-900" : ""
                      }`}
                      onClick={() => handleNavClick(item.id, item.href)}
                    >
                      <span className="text-base whitespace-nowrap group-hover:text-red-600">
                        {item.name}
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3b97d0] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Call Now Button - Hidden on Mobile, Visible on MD and LG+ */}
            <div className="hidden md:flex items-center">
              <button
                onClick={() => window.open("tel:4807906666", "_self")}
                className="relative ml-4 font-semibold text-sm lg:text-base tracking-wide rounded-xl text-white cursor-pointer border-none bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 overflow-hidden active:scale-95 transition-all duration-300 group shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10 inline-flex items-center px-3 md:px-4 lg:px-6 py-2 lg:py-3 transition-colors duration-400 whitespace-nowrap">
                  <Phone className="w-4 h-4 mr-2 animate-pulse" />
                  <span className="md:inline lg:inline">Call Now</span>
                </span>
                <span className="absolute top-0 w-full h-full -left-full -z-0 transform skew-x-12 bg-gradient-to-r from-white/20 to-white/30 transition-transform duration-700 ease-out group-hover:translate-x-full"></span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden mobile-menu-button p-2 rounded-md text-gray-700 transition-all duration-300"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`w-6 h-6 absolute transition-all duration-300 ${
                    isOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                  }`}
                />
                <X
                  className={`w-6 h-6 absolute transition-all duration-300 ${
                    isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden mobile-menu transition-all duration-500 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4 overflow-hidden"
          }`}
        >
          <div className="px-4 py-3 bg-white border-t border-gray-100 shadow-md">
            <nav className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <div key={item.id}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={toggleMobileDropdown}
                        className={`w-full text-left font-medium py-2 px-3 rounded-md text-gray-700 group ${
                          activeSection === item.id ? "text-gray-900" : ""
                        } flex items-center justify-between text-base`}
                      >
                        <span className="group-hover:text-red-600">{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 flex-shrink-0 group-hover:text-red-600 ${
                            showMobileDropdown ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          showMobileDropdown
                            ? "max-h-96 opacity-100 mt-1"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="ml-4 space-y-0.5">
                          {programs.map((program, idx) => (
                            <Link
                              key={idx}
                              to={program.href}
                              className="block w-full text-left text-gray-700 py-2 px-3 rounded-md text-sm font-medium hover:bg-gray-100 hover:text-red-600"
                              onClick={() =>
                                handleNavClick("programs", program.href)
                              }
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
                      className={`block w-full text-left font-medium py-2 px-3 rounded-md text-gray-700 group ${
                        activeSection === item.id ? "text-gray-900" : ""
                      } text-base`}
                      onClick={() => handleNavClick(item.id, item.href)}
                    >
                      <span className="group-hover:text-red-600">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Call Button inside menu */}
              <button
                onClick={() => window.open("tel:4807906666", "_self")}
                className="bg-gradient-to-r from-red-500 to-red-700 text-white px-4 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl mt-2 flex items-center justify-center space-x-2 text-base"
              >
                <Phone className="w-4 h-4 animate-pulse flex-shrink-0" />
                <span>Get Help Now</span>
              </button>
            </nav>
          </div>
        </div>
      </nav>

      {/* Spacer div */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
}