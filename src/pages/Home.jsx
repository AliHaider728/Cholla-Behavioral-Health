import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useGSAP } from "../hooks/useGSAP";
import TestimonialCard from "../components/TestimonialCard";
import ContactForm from "../components/ContactForm";
import "../Animationa.css";
import {
  Heart,
  Users,
  Shield,
  Award,
  Phone,
  Clock,
  CheckCircle,
  ArrowRight,
  Brain,
  Stethoscope,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";
import Carousel from "../components/Sliders";
import OfficeCarousel from "../components/officeCarousel/OfficeCaraousel";
export default function Home() {
  const services = [
    {
      title: "Behavioral Health",
      image:
        "https://chollabehavioralhealth.com/wp-content/uploads/2024/02/ezgif-6-8e2e058a7a.webp",
      features: [
        "Psychological Assessment",
        "Psychiatric Evaluation",
        "Individual & Group Therapy",
        "Medication Prescribing and Management",
      ],
    },
    {
      title: "Physical Health",
      image:
        "https://chollabehavioralhealth.com/wp-content/uploads/2024/02/ezgif-7-099c17d62f.webp",
      features: [
        "Health & Wellness Classes",
        "Health Maintenance & Promotion",
        "Disease Control and Prevention ",
        "Physical Health Exam",
      ],
    },
    {
      title: "Social Services",
      image:
        "https://chollabehavioralhealth.com/wp-content/uploads/2024/02/ezgif-7-23ae8cc524.webp",
      features: [
        "Community Resources & Partnerships",
        "Pathways to Independence",
        "Family Education and Support",
        "Work Force Development",
      ],
    },
  ];

  const ref = useGSAP();

  const introCards = [
    {
      title: "Behavioral Health",
      subtitle: "Psychiatric and Psychological Services",
      image:
        "https://images.pexels.com/photos/33231556/pexels-photo-33231556.jpeg",
    },
    {
      title: "Physical Health",
      subtitle: "Physical Health and Wellness Services",
      image:
        "https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg",
    },
    {
      title: "Social Supportive Services",
      subtitle: "Reintegration and Connection",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    },
  ];

  return (
    <div ref={ref} className="min-h-screen overflow-x-hidden">
      {/* Hero Slider Section */}
      <Carousel />

      {/* Intro Cards Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {introCards.map((card, index) => (
              <div
                key={index}
                className="gsap-stagger relative rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="image-fade w-full h-40 sm:h-48 md:h-60 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 p-3 sm:p-4 md:p-6 text-white">
                  <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section (Patient Centered Care) */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="gsap-slide-left">
              <h2 className="text-xl  sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold  text-[#3b97d0] mb-4 sm:mb-6">
                Patient Centered Care
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                At Cholla Behavioral Health, we specialize in conducting
                comprehensive assessments and delivering multidisciplinary care
                tailored to individuals grappling with unproductive habits,
                emotional challenges, addiction, and mental health needs. We are
                dedicated to addressing the social health needs that
                significantly influence overall outcomes. Unlike conventional,
                rigidly time-framed programs, we recognize that recovery is a
                lifelong journey necessitating continuous support and personal
                development.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Our adaptable treatment options empower you to dictate your pace
                while receiving the necessary assistance. Whether through group
                sessions, individual therapy, or experiential modalities, we
                offer diverse avenues to enhance recovery and promote wellness.
                Moreover, we understand the pivotal role of involving your loved
                ones and support network in the healing process. Through our
                evidence-based curricula, we provide educational services aimed
                at fostering their understanding of the complexities surrounding
                mental health and co-occurring disorders alike.
              </p>
              <NavLink
                to="/about-us"
                className="relative font-semibold text-sm sm:text-base md:text-lg rounded-lg text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 px-4 sm:px-6 py-2 sm:py-3 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 transition-all duration-300 group overflow-hidden shadow-lg hover:shadow-xl"
                aria-label="Learn more about Cholla Behavioral Health"
              >
                <span className="relative z-10 inline-flex items-center">
                  Learn More About Us
                  <ArrowRight className="h-4 sm:h-5 w-4 sm:w-5 inline ml-2" />
                </span>

                <span className="absolute top-0 w-full h-full -left-full -z-0 transform skew-x-12 bg-gradient-to-r from-white/20 to-white/30 transition-transform duration-700 ease-out group-hover:translate-x-full"></span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </NavLink>
            </div>
            <div className="gsap-slide-right">
              <img
                src="https://images.pexels.com/photos/3769151/pexels-photo-3769151.jpeg"
                alt="Patient centered care at Cholla Behavioral Health"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mental Health & Co-Occurring Substance Abuse Treatment Section */}
      <section className="py-8 sm:py-12 md:py-16   relative   bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-red-500 to-red-700 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gradient-to-tl from-blue-600 to-blue-800 translate-x-1/3 translate-y-1/3"></div>
          </div>

          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-red-50 to-blue-50 rounded-full border border-red-100">
              <span className="text-sm font-medium bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                Comprehensive Care
              </span>
            </div>
            <h2 className="gsap-slide-up text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#3b97d0] mb-6 leading-tight">
              Mental Health & Co-Occurring
              <span className="block bg-gradient-to-r from-red-600 via-red-500 to-blue-600 bg-clip-text text-transparent">
                Substance Abuse Treatment
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="gsap-slide-up text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Cholla Behavioral Health offers a continuum of care that allows
              for tailored and individualized drug or alcohol addiction
              treatment plans to support long-term recovery from substance
              abuse.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="gsap-slide-left">
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Services are provided in the form of group therapy and
                individual client therapy. Our areas of practice throughout
                these programs include Mental Health, Physical Health,
                Medications, Laboratory Services, and Social/Community-based
                Services through connection and case management.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Upon admission, each client will participate in a comprehensive
                biopsychosocial and diagnostic assessment to aid in
                understanding the client’s strengths, needs, and barriers to
                drug or alcohol addiction treatment and substance abuse
                recovery. At CBH, we view the diagnostic assessment as one of
                the most important pieces to successful treatment for drug and
                alcohol addiction. With detailed assessment and accurate
                diagnosis comes effective substance abuse treatment. Our team of
                doctorate-level clinicians have extensive training in
                diagnostics and can incorporate psychological testing as needed.
              </p>
              <NavLink
                to="/programs"
                className="relative font-semibold text-sm sm:text-base md:text-lg hover:rounded-lg rounded-lg text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 px-4 sm:px-6 py-2 sm:py-3 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 transition-all duration-300 group overflow-hidden shadow-lg hover:shadow-xl"
                aria-label="Explore our programs"
              >
                <span className="relative z-10 inline-flex items-center">
                  Explore Our Programs
                  <ArrowRight className="h-4 sm:h-5 w-4 sm:w-5 inline ml-2" />
                </span>

                <span className="absolute top-0 w-full h-full -left-full -z-0 transform skew-x-12 bg-gradient-to-r from-white/20 to-white/30 transition-transform duration-700 ease-out group-hover:translate-x-full"></span>

                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </NavLink>
            </div>
            <div className="gsap-slide-right">
              <img
                src="https://images.pexels.com/photos/7230263/pexels-photo-7230263.jpeg"
                alt="Mental health and substance abuse treatment at Cholla Behavioral Health"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call Us or Walk In Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className=" py-8">
          <h2 className="bouns gsap-slide-up text-[#3b97d0] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold  text-center leading-tight">
            Call Us or Walk In!
          </h2>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-24">
            <div className="inline-flex items-center justify-center px-4 py-2 mb-6 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
              Professional Care Services
            </div>
            <p className="gsap-slide-up text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Finding a program for you or a loved one can be difficult. If we
              are not the right fit, we will assist in getting the help you
              need.
            </p>
            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-24">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col">
                {/* Service Title */}
                <h3 className="text-lg text-center text-[#3b97d0] sm:text-xl lg:text-2xl font-heading font-bold   mb-3 group-hover:text-blue-700 transition-colors duration-300 whitespace-nowrap overflow-hidden text-ellipsis">
                  {service.title}
                </h3>
                {/* Service Card */}
                <div className="gsap-stagger group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-blue-200 overflow-hidden hover:-translate-y-1 w-full sm:w-full lg:w-11/12">
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.title} illustration`}
                      className="w-full h-40 sm:h-48 lg:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content Container */}
                  <div className="p-4 sm:p-6 lg:p-8">
                    {/* Features List */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center space-x-2 group/item"
                        >
                          <CheckCircle className="h-4 w-4 text-red-600 transition-transform duration-300 group-hover/item:scale-110" />
                          <span className="text-xs sm:text-sm text-slate-600 font-medium whitespace-nowrap">
                            {feature}
                          </span>
                        </span>
                      ))}
                    </div>

                    {/* Learn More Button */}
                    <div className="pt-3 border-t border-slate-100">
                      <NavLink
                        to="/services"
                        className="block w-full text-center py-2.5 px-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300 group/link shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                        aria-label={`Learn more about ${service.title}`}
                      >
                        <span className="inline-flex items-center justify-center">
                          <span className="mr-2">Learn More</span>
                          <ArrowRight className="h-4 w-4 text-white transition-transform duration-300 group-hover/link:translate-x-1" />
                        </span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-block">
              <a
                href="tel:4807906666"
                className="relative inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden border-2 border-red-600 hover:border-blue-600"
                aria-label="Call Cholla Behavioral Health at (480) 790-6666"
              >
                {/* Background Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out">
                  <div className="h-full w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex items-center">
                  <div className="p-2 bg-white/20 rounded-xl mr-3 group-hover:bg-white/30 transition-colors duration-300">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-medium opacity-90">
                      Call Now
                    </div>
                    <div className="text-lg font-bold">(480) 790-6666</div>
                  </div>
                </div>

                {/* Pulse Animation */}
                <div className="absolute inset-0 rounded-2xl animate-pulse bg-gradient-to-r from-red-600 to-blue-600 opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
              </a>

              {/* Subtle Helper Text */}
              <p className="text-sm text-slate-500 mt-4 font-medium">
                Available 24/7 • Free Consultation • Immediate Support
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Visit Us Section with Google Map */}
      <section className="relative py-8 sm:py-12 md:py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-red-500 to-red-700 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gradient-to-tl from-[#3b97d0] to-blue-600 translate-x-1/3 translate-y-1/3 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-red-400 to-[#3b97d0] -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-red-50 to-blue-50 rounded-full border border-red-100">
              <span className="text-sm font-medium bg-gradient-to-r from-red-600 to-[#3b97d0] bg-clip-text text-transparent">
                Our Location
              </span>
            </div>
            <h2 className="gsap-slide-up text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4 leading-tight">
              Visit Us
              <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-red-600 bg-clip-text text-transparent">
                We're Here to Help
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-[#3b97d0] mx-auto mb-4 rounded-full"></div>
            <p className="gsap-slide-up text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find us at 9201 N 25th Ave Suite 185, Phoenix, AZ 85021. Walk-ins
              are welcome!
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl">
              {/* Floating elements around the map */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#3b97d0] to-blue-600 rounded-full opacity-20 animate-pulse delay-700"></div>
              <div className="absolute -bottom-4 -left-6 w-14 h-14 bg-gradient-to-br from-red-400 to-[#3b97d0] rounded-full opacity-20 animate-pulse delay-300"></div>
              <div className="absolute -bottom-6 -right-4 w-18 h-18 bg-gradient-to-br from-red-500 to-red-700 rounded-full opacity-20 animate-pulse delay-1000"></div>

              <div className="relative h-[250px] sm:h-[350px] md:h-[400px] rounded-2xl shadow-2xl overflow-hidden group bg-white/70 backdrop-blur-sm border border-gray-100 hover:shadow-3xl transition-all duration-500 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 via-transparent to-[#3b97d0]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.723130382255!2d-112.11163068461416!3d33.56967235134672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6c5960eaaaab%3A0x2ca55ed74e10edaa!2s9201%20N%2025th%20Ave%20Suite%20185%2C%20Phoenix%2C%20AZ%2085021!5e0!3m2!1sen!2sus!4v1698781234567"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cholla Behavioral Health Location"
                  className="rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-700"
                ></iframe>
                <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10 rounded-2xl"></div>
              </div>
            </div>
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <a
              href="https://www.google.com/maps/place/9201+N+25th+Ave+suite+185,+Phoenix,+AZ+85021/@33.57195,-112.113998,17z/data=!4m6!3m5!1s0x872b6c5960eaaaab:0x2ca55ed74e10edaa!8m2!3d33.5696723!4d-112.1116307!16s%2Fg%2F11v67pck0n?hl=en&entry=ttu&g_ep=EgoyMDI1MDcyOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative font-semibold text-sm sm:text-base md:text-lg bg-white/70 backdrop-blur-sm hover:bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl border-2 border-gray-200 hover:border-red-300 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden transform hover:-translate-y-1 inline-flex items-center"
              aria-label="Get directions to Cholla Behavioral Health"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-red-600/10 to-[#3b97d0]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 inline-flex items-center">
                <MapPin className="h-4 sm:h-5 w-4 sm:w-5 mr-2 text-red-600 group-hover:text-[#3b97d0] transition-all duration-300" />
                <span className="bg-gradient-to-r from-red-600 to-[#3b97d0] bg-clip-text text-transparent font-bold">
                  Get Directions
                </span>
              </span>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-[#3b97d0] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="gsap-slide-up text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-heading font-bold text-gray-900 mb-3 sm:mb-4">
              Why Choose Cholla Behavioral Health?
            </h2>
            <p className="gsap-slide-up text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto">
              Compassionate, excellent care sets us apart in behavioral health.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-6 sm:mb-8 md:mb-10">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img
                src="https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg"
                alt="Cholla Behavioral Healthcare"
                className="w-full h-auto rounded-lg object-cover max-w-[660px] mx-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-[#3b97d0] gsap-slide-up text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-heading font-bold mb-3 sm:mb-4">
                We’ll find the right program for you or your loved one.
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 mb-3 sm:mb-4">
                Finding a program for you or a loved one can be difficult. If we
                are not the right fit, we will assist in getting the help you
                need.
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 mb-3 sm:mb-4">
                Here at Cholla Behavioral Healthcare we champion the physical,
                mental, emotional, and spiritual dimensions of a healthy life.
                Through professional excellence followed by a safe and caring
                environment, Cholla offers patient-centered dynamic care to
                ensure treatment clarity is followed by long-term success in
                Health and Wellbeing.
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 mb-3 sm:mb-4">
                Our comprehensive and evidence-based treatment & intensive
                programs coupled with the expertise and extensive experience of
                our compassionate team make us the top choice for your
                behavioral health needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
                <ul className="text-gray-600 list-none space-y-2 flex-1 min-w-0 sm:min-w-[45%]">
                  <li className="flex items-start min-h-[2rem] sm:min-h-[2.5rem]">
                    <ArrowRight className="movearrow w-5 h-5 sm:w-6 sm:h-6 text-red-600 mr-2 flex-shrink-0" />
                    <span className="text-xs sm:text-sm md:text-base">
                      Always putting the patient first
                    </span>
                  </li>
                  <li className="flex items-start min-h-[2rem] sm:min-h-[2.5rem]">
                    <ArrowRight className="movearrow w-5 h-5 sm:w-6 sm:h-6 text-red-600 mr-2 flex-shrink-0" />
                    <span className="text-xs sm:text-sm md:text-base">
                      Welcoming and inclusive environment
                    </span>
                  </li>
                  <li className="flex items-start min-h-[2rem] sm:min-h-[2.5rem]">
                    <ArrowRight className="movearrow w-5 h-5 sm:w-6 sm:h-6 text-red-600 mr-2 flex-shrink-0" />
                    <span className="text-xs sm:text-sm md:text-base">
                      High-quality continuum of care
                    </span>
                  </li>
                </ul>
                <ul className="text-gray-600 list-none space-y-2 flex-1 min-w-0 sm:min-w-[45%]">
                  <li className="flex items-start min-h-[2rem] sm:min-h-[2.5rem]">
                    <ArrowRight className="movearrow w-5 h-5 sm:w-6 sm:h-6 text-red-600 mr-2 flex-shrink-0" />
                    <span className="text-xs sm:text-sm md:text-base">
                      Family & support network participation
                    </span>
                  </li>
                  <li className="flex items-start min-h-[2rem] sm:min-h-[2.5rem]">
                    <ArrowRight className="movearrow w-5 h-5 sm:w-6 sm:h-6 text-red-600 mr-2 flex-shrink-0" />
                    <span className="text-xs sm:text-sm md:text-base">
                      Indoor and outdoor transformative activities
                    </span>
                  </li>
                  <li className="flex items-start min-h-[2rem] sm:min-h-[2.5rem]">
                    <ArrowRight className="movearrow w-5 h-5 sm:w-6 sm:h-6 text-red-600 mr-2 flex-shrink-0" />
                    <span className="text-xs sm:text-sm md:text-base">
                      Evidence-based treatment modalities
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialCard />

      {/* Take A Look Around Our Office Section */}
      <OfficeCarousel />

      {/* Contact Us 24/7 Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-r from-[#3b97d0] via-[#1677b3] to-[#27a2ee] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gsap-slide-up max-w-4xl mx-auto">
            <Clock className="h-10 sm:h-12 md:h-16 w-10 sm:w-12 md:w-16 mx-auto mb-4 sm:mb-6" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4">
              Contact Us 24/7
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-red-100">
              If you or someone you know is experiencing a mental health crisis,
              immediate help is available. Don't wait – reach out now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:4807906666"
                className="relative font-semibold text-sm sm:text-base md:text-lg rounded-lg text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 px-4 sm:px-6 py-2 sm:py-3 hover:bg-gradient-to-r hover:shadow-lg hover:scale-110 transition-all duration-300 group overflow-hidden"
                aria-label="Call Cholla Behavioral Health at (480) 790-6666"
              >
                <span className="relative z-10 inline-flex items-center">
                  <Phone className="h-4 sm:h-5 w-4 sm:w-5 inline mr-2" />
                  Call Now: (480) 790-6666
                </span>

                <span className="absolute top-0 w-full h-full -left-full -z-0 transform skew-x-12 bg-gradient-to-r from-white/20 to-white/30 transition-transform duration-700 ease-out group-hover:translate-x-full"></span>

                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <NavLink
                to="/contact-us"
                className="relative font-semibold text-sm sm:text-base md:text-lg rounded-lg text-white border-2 border-white px-4 sm:px-6 py-2 sm:py-3 hover:text-red-600 hover:bg-white transition-all duration-300 group overflow-hidden"
                aria-label="Get help now"
              >
                <span className="relative z-10 inline-block">Get Help Now</span>

                <span className="absolute top-0 w-full h-full -left-full -z-0 transform skew-x-12 bg-gradient-to-r from-white/20 to-white/30 transition-transform duration-700 ease-out group-hover:translate-x-full"></span>

                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />
    </div>
  );
}
