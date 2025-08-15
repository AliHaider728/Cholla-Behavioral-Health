import { useGSAP } from "../hooks/useGSAP"
import Hero from "../components/Hero"
import { ArrowRight, Phone, Clock, CheckCircle } from "lucide-react"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import OwlSlider from "../Slider/OwlSlider"

export default function OutpatientLevels() {
  const ref = useGSAP()
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div ref={ref} className="overflow-x-hidden min-h-screen bg-white">
      <style>{`
        .custom-carousel {
          position: relative;
          width: 100%;
          max-width: 600px;
          height: 256px;
          margin: 0 auto;
          overflow: hidden;
          border-radius: 0.75rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(8px);
        }
        @media (min-width: 640px) {
          .custom-carousel {
            height: 320px;
          }
        }
        @media (min-width: 1024px) {
          .custom-carousel {
            height: 400px;
          }
        }
        .carousel-item {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: opacity 1s ease-in-out, transform 0.5s ease-out;
        }
        .carousel-item.hidden {
          opacity: 0;
          pointer-events: none;
          transform: scale(0.95);
        }
        .carousel-item.active {
          opacity: 1;
          transform: scale(1);
        }
        .carousel-dots {
          position: absolute;
          bottom: 16px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          gap: 8px;
        }
        .carousel-dot {
          width: 12px;
          height: 12px;
          background-color: #d1d5db;
          border-radius: 50%;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.3s;
        }
        .carousel-dot.active {
          background-color: #3b97d0;
          transform: scale(1.2);
        }
        .carousel-dot:hover {
          background-color: #2a7bb8;
          transform: scale(1.2);
        }
      `}</style>

      {/* Hero Section */}
      <Hero
        title="Outpatient Levels of Care"
        subtitle="Flexible Treatment Options"
        description="Comprehensive outpatient treatment programs designed to provide intensive care while allowing you to maintain your daily responsibilities and commitments."
        primaryCTA={{ text: "Learn About Programs", href: "/contact-us" }}
        secondaryCTA={{ text: "Call Now: (555) 123-4567", href: "tel:5551234567" }}
        backgroundImage="/placeholder.svg?height=600&width=1200"
      />

      {/* Partial Hospitalization (PHP) Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 animate-on-scroll overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="gsap-slide-left space-y-6 flex flex-col h-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#3b97d0] tracking-tight leading-tight relative">
                Partial Hospitalization Program (PHP)
                <div className="mt-2 w-20 h-1 bg-[#3b97d0] rounded-full"></div>
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium flex-1">
                Partial Hospitalization Programming acts as a transitional phase between inpatient or residential care and intensive outpatient and outpatient programs. It offers a structured daily routine that facilitates the development and implementation of new skills, supported by dedicated 24/7 staff. This program includes 2-3 individual counseling sessions weekly, 25 hours of holistic group therapy weekly including evidence-based cognitive groups such as CBT, DBT, and ACT, mixed modality groups such as Expressive Arts, Communication Skills, Internal Family Systems, as well as vocational skills, job skills, and recreational activities, with wrap-around comprehensive case management on a regular basis. Medication prescribing and management throughout treatment.
              </p>
            </div>
            <div className="gsap-slide-right h-full">
              <div className="relative group w-full h-full">
                <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl h-full">
                  <img
                    src="https://chollabehavioralhealth.com/wp-content/uploads/2024/02/team-entrepreneurs-cooperating-while-analyzing-plans-computer-office-ezgif.com-optijpeg.jpg"
                    alt="Partial Hospitalization Program"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3b97d0]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#3b97d0]/20 to-blue-400/20 rounded-full animate-pulse"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-white/50 to-gray-200/50 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-1/4 -left-3 w-10 h-10 bg-gradient-to-br from-white/30 to-gray-300/30 rounded-full animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-xs font-bold text-[#3b97d0]">PHP Support</p>
                  <p className="text-xs text-gray-600">Intensive Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intensive Outpatient (IOP) Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/20 to-white animate-on-scroll overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="gsap-slide-right order-2 lg:order-1 h-full">
              <div className="relative group w-full h-full">
                <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl h-full">
                  <img
                    src="https://chollabehavioralhealth.com/wp-content/uploads/2024/02/Cholla-about.jpg"
                    alt="Intensive Outpatient Program"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3b97d0]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#3b97d0]/20 to-blue-400/20 rounded-full animate-pulse"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-white/50 to-gray-200/50 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-1/4 -left-3 w-10 h-10 bg-gradient-to-br from-white/30 to-gray-300/30 rounded-full animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-xs font-bold text-[#3b97d0]">IOP Support</p>
                  <p className="text-xs text-gray-600">Flexible Care</p>
                </div>
              </div>
            </div>
            <div className="gsap-slide-left order-1 lg:order-2 space-y-6 flex flex-col h-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#3b97d0] tracking-tight leading-tight relative">
                Intensive Outpatient Program (IOP)
                <div className="mt-2 w-20 h-1 bg-[#3b97d0] rounded-full"></div>
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium flex-1">
                Intensive Outpatient Programming maintains the clinical services provided in Partial Hospitalization Programming at a reduced level, offering 3-5 days of 15-25 hours of therapy a week. In addition to ongoing skill development, clients in the Intensive Outpatient Program are encouraged to prioritize the establishment of healthy support networks, attaining financial stability, and fostering self-sufficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outpatient (OP) Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 animate-on-scroll overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="gsap-slide-left space-y-6 flex flex-col h-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#3b97d0] tracking-tight leading-tight relative">
                Outpatient Program (OP)
                <div className="mt-2 w-20 h-1 bg-[#3b97d0] rounded-full"></div>
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium flex-1">
                The main emphasis of outpatient programming is to provide continuous support. Clients have the option to continue with this level of care for an indefinite period as needed or until it is no longer necessary. We recognize that life circumstances can change, and additional support may be needed at various stages. Our team is here to offer ongoing support!
              </p>
            </div>
            <div className="gsap-slide-right h-full">
              <div className="relative group w-full h-full">
                <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl h-full">
                  <img
                    src="https://chollabehavioralhealth.com/wp-content/uploads/2024/05/team-doctors-setting-up-iv-drip-line-consulting.jpg"
                    alt="Outpatient Program"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3b97d0]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#3b97d0]/20 to-blue-400/20 rounded-full animate-pulse"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-white/50 to-gray-200/50 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-1/4 -left-3 w-10 h-10 bg-gradient-to-br from-white/30 to-gray-300/30 rounded-full animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-xs font-bold text-[#3b97d0]">OP Support</p>
                  <p className="text-xs text-gray-600">Ongoing Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OwlSlider />

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#3b97d0] to-[#2a7bb8] text-white overflow-hidden relative animate-on-scroll">
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10"></div>
        <div className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-20 h-20 bg-white/20 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-8 h-8 bg-white/30 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              Start Your Recovery Journey Today
            </h2>
            <p className="text-lg md:text-xl mb-10 text-blue-100 leading-relaxed font-light">
              Our outpatient programs provide flexible, comprehensive care to support your recovery while accommodating your daily life. Contact us to find the right level of care for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact-us"
                className="group bg-gradient-to-r from-red-600 via-red-700 to-red-500 hover:bg-gradient-to-r hover:from-red-600 hover:via-red-700 hover:to-red-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 inline-flex items-center justify-center space-x-2"
                aria-label="Apply for Programs"
              >
                <span>Apply for Programs</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:5551234567"
                className="group border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 inline-flex items-center justify-center space-x-2"
                aria-label="Call Now"
              >
                <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                <span>Call Now: (555) 123-4567</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}