 import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Phone,
  Brain,
  Stethoscope,
  Home,
  Plus,
  Check,
  Users,
  Minus,
} from "lucide-react";
import OwlSlider from "../Slider/OwlSlider";

 import Hero from '../components/Hero'
const IndividualServices = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (section) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const conditions = [
    "Anxiety",
    "Depression",
    "Trauma",
    "TBI",
    "Addictions",
    "ADD/ADHD",
    "Bipolar Disorder",
    "Personality Disorders",
    "Compulsive & Risky Behaviors",
    "Codependency / Self Identity",
    "Life Transitions",
    "Relationship Issues",
    "Feeling 'Stuck' or in Crisis",
    "And More…",
  ];

  const services = {
    behavioral: {
      title: "Behavioral Health",
      icon: <Brain className="h-6 w-6 text-[#3b97d0]" />,
      bgColor: "bg-gradient-to-br from-[#3b97d0]/10 to-blue-200/20",
      items: [
        "Psychological Assessment",
        "Psychiatric Evaluation",
        "Diagnostic Assessment and Treatment Planning",
        "Mental Health Services",
        "Individual Therapy",
        "Group Therapy",
        "Family Therapy",
        "Half Day Life Skills",
        "Vocational Therapy",
        "Opioid Treatment Program",
        "Substance Abuse Treatment",
        "Trauma Based Services",
        "ADHD Screening",
        "ADHD Concentration Acceleration Program",
        "Mixed Modality Groups (Expressive Arts, Communication Skills, Internal Family Systems)",
        "Evidence-based Cognitive Groups (CBT, DBT, ACT)",
        "Eye Movement Desensitization and Reprocessing Therapy (EMDR)",
        "DSI Intensive Programs for those struggling, lost, or stuck",
        "And More…",
      ],
    },
    physical: {
      title: "Physical Health",
      icon: <Stethoscope className="h-6 w-6 text-red-600" />,
      bgColor: "bg-gradient-to-br from-red-100/50 to-pink-200/20",
      items: [
        "Health Promotion and Maintenance",
        "Nutrition and Wellness Education",
        "Disease Prevention",
        "Covid-19 Testing",
        "Syphilis and HIV Testing",
        "Hepatitis C Testing & Treatment",
        "Diagnosis and Treatment of Acute Disease",
        "Hearing and Vision Screens",
        "Physical Health Examinations",
        "Immunization Vaccines",
        "Weight Loss Management",
        "Chronic Conditions",
        "Preventative Health",
        "Vitals and Heart Testing Electrocardiogram (ECG)",
        "Sick Visits",
        "And More…",
      ],
    },
    community: {
      title: "Community Services",
      icon: <Users className="h-6 w-6 text-green-600" />,
      bgColor: "bg-gradient-to-br from-green-100/50 to-emerald-200/20",
      items: [
        "Peer and Recovery Coaching Programs",
        "Connecting Members to Community Based Support Systems",
        "Community Resources",
        "Use of Crisis Systems",
        "Community Partnerships",
        "Volunteering and Job Skills",
        "Pathways to Independence",
        "Workforce Development",
        "Criminal Employment",
        "Recreation and Fitness",
        "Education Development and Engagement",
        "Obtain General Education Development",
        "Resume Building",
        "Family Education and Support Groups",
        "Get and Stay Connected",
        "And More…",
      ],
    },
  };

  const levelsOfCare = {
    ambulatoryDetox: {
      title: "Ambulatory Detox",
      icon: <Stethoscope className="h-6 w-6 text-red-600" />,
      bgColor: "bg-gradient-to-br from-red-100/50 to-pink-200/20",
      items: [
        "Transforming detox into a smoother, more manageable process is what we do best. Our onsite medical professionals specialize in ambulatory detox, offering personalized care to make your journey towards wellness as comfortable as possible. Trust our team to guide you through this important step with compassion and expertise, so you can focus on reclaiming your health and vitality.",
      ],
    },
    php: {
      title: "Partial Hospitalization (PHP)",
      icon: <Brain className="h-6 w-6 text-[#3b97d0]" />,
      bgColor: "bg-gradient-to-br from-[#3b97d0]/10 to-blue-200/20",
      items: [
        "Partial Hospitalization Programming acts as a transitional phase between inpatient or residential care and intensive outpatient and outpatient programs. It offers a structured daily routine that facilitates the development and implementation of new skills, supported by dedicated 24/7 staff. This program includes 2-3 individual counseling session weekly, 25hrs holistic group therapy weekly including evidenced-based cognitive groups such as CBT, DBT and ACT . Mixed modality groups such as Expressive Arts, Communication Skills, Internal Family Systems. As well as vocational skills, job skills , and recreational activities, with wrap around comprehensive case management on a regular basis.",
      ],
    },
    iop: {
      title: "Intensive Outpatient (IOP)",
      icon: <Users className="h-6 w-6 text-green-600" />,
      bgColor: "bg-gradient-to-br from-green-100/50 to-emerald-200/20",
      items: [
        "Intensive Outpatient Programming maintains the clinical services provided in Partial Hospitalization Programming at a reduced level 3-5 days with 15-25hrs of therapy a week. In addition to ongoing skill development, clients in the Intensive Outpatient Program are encouraged to prioritize the establishment of healthy support networks, attaining financial stability, and fostering self-sufficiency.",
      ],
    },
    outpatient: {
      title: "Outpatient (OP)",
      icon: <Home className="h-6 w-6 text-purple-600" />,
      bgColor: "bg-gradient-to-br from-purple-100/50 to-indigo-200/20",
      items: [
        "The main emphasis of outpatient programming is to provide continuous support. Clients have the option to continue with this level of care for an indefinite period as needed or until it is no longer necessary. We recognize that life circumstances can change, and additional support may be needed at various stages. Our team is here to offer ongoing support!",
      ],
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Individual Treatment Services"
        subtitle="Your Primary Care Provider for Mental Health & Psychiatric Treatment"
        description="Our expert providers offer comprehensive care for a wide range of emotional and mental conditions, integrating behavioral health, physical health, and community support in one accessible location."
        primaryCTA={{ text: "Schedule Your Appointment", href: "/contact-us" }}
        secondaryCTA={{
          text: " call Now: (602) 555-1234",
          href: "tel:6025551234",
        }}
      />

      <section className="py-8 md:py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50/30 to-red-50/20 animate-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div className="space-y-4">
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#3b97d0] tracking-tight leading-tight">
                  Your Primary Care Provider For Mental Health & Psychiatric
                  Treatment
                  <div className="mt-2 w-16 h-1 bg-[#3b97d0] rounded-full"></div>
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                  Our expert providers treat an expansive list of emotional and
                  mental conditions, ensuring personalized care tailored to your
                  unique needs. We provide accessible care of the highest
                  standards all in one location.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {conditions.map((condition, index) => (
                  <div
                    key={index}
                    className="group flex items-start space-x-2 p-2 rounded-lg hover:bg-white/50 transition-all duration-300"
                  >
                    <div className="w-5 h-5 bg-gradient-to-br from-[#3b97d0]/20 to-blue-100/30 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#3b97d0] transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-gray-700 text-sm md:text-base font-medium group-hover:text-gray-900 transition-colors">
                      {condition}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="/contact-us"
                  className="group  bg-red-600 text-white font-bold py-3 px-6 rounded-xl inline-flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  aria-label="Schedule Appointment"
                >
                  <span>Schedule Your Appointment</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:6025551234"
                  className="group border-2 border-[#3b97d0] hover:border-[#2a7bb8] text-[#3b97d0] hover:text-[#2a7bb8] hover:bg-blue-50 font-bold py-3 px-6 rounded-xl inline-flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                  aria-label="Call Now"
                >
                  <Phone className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full   group">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/4269934/pexels-photo-4269934.jpeg"
                    alt="Mental health consultation"
                    className="w-full md:h-[500px] h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3b97d0]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#3b97d0]/20 to-blue-400/20 rounded-full animate-pulse"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-white/50 to-gray-200/50 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-1/4 -left-3 w-10 h-10 bg-gradient-to-br from-white/30 to-gray-300/30 rounded-full animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                ></div>

                {/* Professional badge */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-xs font-bold text-[#3b97d0]">
                    Expert Care
                  </p>
                  <p className="text-xs text-gray-600">
                    Professional Treatment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Care Services Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50/20 to-white animate-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3b97d0] tracking-tight mb-6 relative">
              Comprehensive Care Services
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#3b97d0] rounded-full"></div>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              We integrate key areas of care to provide holistic treatment and
              support for your recovery journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-6 md:mt-9">
              {Object.entries(services).map(([key, service]) => (
                <div
                  key={key}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-2xl hover:border-blue-200/50 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-50/30 via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <button
                    onClick={() => toggleDropdown(key)}
                    className="relative w-full flex items-center justify-between text-left p-7 focus:outline-none focus:ring-2 focus:ring-[#3b97d0]/20 focus:ring-offset-2 rounded-2xl transition-all duration-300"
                    aria-expanded={openDropdowns[key]}
                    aria-controls={`dropdown-${key}`}
                  >
                    <div className="flex items-center space-x-5">
                      <div
                        className={`relative w-14 h-14 ${service.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-md group-hover:shadow-lg`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                        <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl md:text-xl font-bold text-gray-900 group-hover:text-[#3b97d0] transition-all duration-300 leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                          Click to explore our services
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          openDropdowns[key]
                            ? "bg-[#3b97d0] shadow-lg shadow-blue-500/50"
                            : "bg-gray-300"
                        }`}
                      />

                      <div
                        className={`p-2 rounded-xl bg-gray-50 group-hover:bg-blue-50 transition-all duration-300 ${
                          openDropdowns[key] ? "rotate-180 bg-blue-100" : ""
                        }`}
                      >
                        {openDropdowns[key] ? (
                          <Minus className="w-5 h-5 text-[#3b97d0] transition-all duration-300" />
                        ) : (
                          <Plus className="w-5 h-5 text-gray-600 group-hover:text-[#3b97d0] transition-all duration-300" />
                        )}
                      </div>
                    </div>
                  </button>

                  <div
                    id={`dropdown-${key}`}
                    className={`relative overflow-hidden transition-all duration-700 ease-out ${
                      openDropdowns[key]
                        ? "max-h-[800px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-7">
                      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                    </div>

                    <div className="px-7 pb-7 pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.items.map((item, index) => (
                          <div
                            key={index}
                            className={`group/item flex items-start  space-x-4 transition-all duration-500 ease-out hover:transform hover:translate-x-2 ${
                              openDropdowns[key]
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-6"
                            }`}
                            style={{ transitionDelay: `${index * 80}ms` }}
                          >
                            <div className="relative">
                              <div className="w-6 h-6 bg-gradient-to-br from-[#3b97d0]/20 to-blue-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover/item:scale-110 group-hover/item:shadow-md">
                                <Check className="h-3.5 w-3.5 text-[#3b97d0] transition-all duration-300 group-hover/item:scale-110" />
                              </div>
                            </div>

                            <div className="flex-1 space-y-1">
                              <span className="text-gray-800 text-base md:text-[15px] leading-relaxed font-medium group-hover/item:text-gray-900 transition-colors duration-300">
                                {item}
                              </span>
                              <div className="h-px bg-gradient-to-r from-gray-200 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div
                        className={`mt-6 pt-4 border-t border-gray-100 transition-all duration-500 ${
                          openDropdowns[key]
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-2"
                        }`}
                      >
                        <p className="text-sm text-gray-500 italic text-center">
                          Need more details? Get in touch with our experts
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl">
                  <img
                    src="https://chollabehavioralhealth.com/wp-content/uploads/2024/02/female-doctor-showing-senior-woman-vr-headset-nursing-home-ezgif.com-optijpeg.jpg"
                    alt="Professional healthcare provider"
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#3b97d0]/20 to-blue-600/20 rounded-full opacity-60 animate-pulse"></div>
                <div
                  className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-white/50 to-gray-200/50 rounded-full opacity-60 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-1/3 -right-2 w-10 h-10 bg-gradient-to-br from-white/40 to-gray-300/40 rounded-full opacity-50 animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute bottom-1/4 -left-3 w-6 h-6 bg-gradient-to-br from-white/30 to-gray-300/30 rounded-full opacity-60 animate-pulse"
                  style={{ animationDelay: "1.5s" }}
                ></div>

                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-sm font-semibold text-[#3b97d0]">
                    Advanced Technology
                  </p>
                  <p className="text-xs text-gray-600">
                    Innovative Care Solutions
                  </p>
                </div>

                <div
                  className="absolute top-6 left-6 bg-[#3b97d0]/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0"
                  style={{ transitionDelay: "200ms" }}
                >
                  <p className="text-sm font-semibold text-white">
                    Quality Care
                  </p>
                  <p className="text-xs text-blue-100">
                    Comprehensive Services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Levels of Care Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 animate-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3b97d0] tracking-tight mb-6 relative">
              Levels of Care
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#3b97d0] rounded-full"></div>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              We offer a range of care levels tailored to your needs, from
              intensive treatment to ongoing support, ensuring a personalized
              recovery journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-6">
              {Object.entries(levelsOfCare).map(([key, level]) => (
                <div
                  key={key}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-2xl hover:border-blue-200/50 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <button
                    onClick={() => toggleDropdown(key)}
                    className="relative w-full flex items-center justify-between text-left p-7 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2 rounded-2xl transition-all duration-300"
                    aria-expanded={openDropdowns[key]}
                    aria-controls={`dropdown-${key}`}
                  >
                    <div className="flex items-center space-x-5">
                      <div
                        className={`relative w-14 h-14 ${level.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-md group-hover:shadow-lg`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                        <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                          {level.icon}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl md:text-xl font-bold text-gray-900 group-hover:text-[#3b97d0] transition-all duration-300 leading-tight">
                          {level.title}
                        </h3>
                        <p className="text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                          Explore care details
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          openDropdowns[key]
                            ? "bg-[#3b97d0] shadow-lg shadow-blue-500/50"
                            : "bg-gray-300"
                        }`}
                      />

                      <div
                        className={`p-2 rounded-xl bg-gray-50 group-hover:bg-blue-50 transition-all duration-300 ${
                          openDropdowns[key] ? "rotate-180 bg-blue-100" : ""
                        }`}
                      >
                        {openDropdowns[key] ? (
                          <Minus className="w-5 h-5 text-[#3b97d0] transition-all duration-300" />
                        ) : (
                          <Plus className="w-5 h-5 text-gray-600 group-hover:text-[#3b97d0] transition-all duration-300" />
                        )}
                      </div>
                    </div>
                  </button>

                  <div
                    id={`dropdown-${key}`}
                    className={`relative overflow-hidden transition-all duration-700 ease-out ${
                      openDropdowns[key]
                        ? "max-h-[800px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-7">
                      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                    </div>

                    <div className="px-7 pb-7 pt-6">
                      <div className="grid grid-cols-1 gap-4">
                        {level.items.map((item, index) => (
                          <div
                            key={index}
                            className={`group/item flex items-start space-x-4 transition-all duration-500 ease-out hover:transform hover:translate-x-2 ${
                              openDropdowns[key]
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-6"
                            }`}
                            style={{ transitionDelay: `${index * 80}ms` }}
                          >
                            <div className="relative">
                              <div className="w-2 h-2 bg-gradient-to-br from-[#3b97d0] to-blue-600 rounded-full mt-2 transition-all duration-300 group-hover/item:scale-150 group-hover/item:shadow-md shadow-blue-500/50"></div>
                              {index < level.items.length - 1 && (
                                <div className="absolute top-4 left-1/2 transform -translate-x-px w-px h-6 bg-gradient-to-b from-gray-200 to-transparent" />
                              )}
                            </div>

                            <div className="flex-1 space-y-1">
                              <span className="text-gray-800 text-base md:text-lg leading-relaxed font-medium group-hover/item:text-gray-900 transition-colors duration-300">
                                {item}
                              </span>
                              <div className="h-px bg-gradient-to-r from-[#3b97d0]/20 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div
                        className={`mt-6 pt-4 border-t border-gray-100 transition-all duration-500 ${
                          openDropdowns[key]
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-2"
                        }`}
                      >
                        <p className="text-sm text-gray-500 italic text-center">
                          Questions about this care level? Contact our team for
                          guidance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative max-w-full w-full group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl">
                  <img
                    src="https://chollabehavioralhealth.com/wp-content/uploads/2024/02/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture-ezgif.com-png-to-webp-converter.webp"
                    alt="Professional healthcare provider"
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#3b97d0]/20 to-blue-600/20 rounded-full opacity-60 animate-pulse"></div>
                <div
                  className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-white/50 to-gray-200/50 rounded-full opacity-60 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-1/4 -left-4 w-8 h-8 bg-gradient-to-br from-white/40 to-gray-300/40 rounded-full opacity-50 animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                ></div>

                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-sm font-semibold text-[#3b97d0]">
                    Licensed Professional
                  </p>
                  <p className="text-xs text-gray-600">Compassionate Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Oriented Residence Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 animate-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="relative w-20 h-20 bg-gradient-to-br from-[#3b97d0]/10 to-blue-100/30 rounded-2xl flex items-center justify-center shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                <Home className="h-10 w-10 text-[#3b97d0] relative z-10" />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3b97d0] tracking-tight leading-tight">
                  Community Oriented Residence
                  <div className="mt-3 w-20 h-1 bg-[#3b97d0] rounded-full"></div>
                </h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                  Cholla offers safe and supportive housing options tailored to
                  transition members in their healing journey. Our
                  community-oriented environment fosters personal growth and the
                  development of essential life skills.
                </p>
              </div>
              <a
                href="/contact-us"
                className="group bg-[#3b97d0] hover:bg-[#2a7bb8] text-white font-bold py-4 px-8 rounded-xl inline-flex items-center space-x-3 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
                aria-label="Learn More About Housing"
              >
                <span>Learn More About Housing</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="https://chollabehavioralhealth.com/wp-content/uploads/2024/05/17169818-3.webp"
                    alt="Community oriented residence"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3b97d0]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#3b97d0]/20 to-blue-400/20 rounded-full animate-pulse"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-white/50 to-gray-200/50 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>

                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-sm font-bold text-[#3b97d0]">
                    Safe Housing
                  </p>
                  <p className="text-xs text-gray-600">Supportive Community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closed Loop Referral Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/20 to-white animate-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative w-full max-w-lg group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/7551627/pexels-photo-7551627.jpeg"
                    alt="Closed loop referral system"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3b97d0]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-white/40 to-gray-300/40 rounded-full animate-pulse"></div>
                <div
                  className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-white/30 to-gray-300/30 rounded-full animate-bounce"
                  style={{ animationDelay: "1s" }}
                ></div>

                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-sm font-bold text-[#3b97d0]">
                    Integrated Care
                  </p>
                  <p className="text-xs text-gray-600">Seamless Coordination</p>
                </div>
              </div>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <div className="relative w-20 h-20 bg-gradient-to-br from-green-100/50 to-emerald-200/30 rounded-2xl flex items-center justify-center shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                <Users className="h-10 w-10 text-green-600 relative z-10" />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3b97d0] tracking-tight leading-tight">
                  Closed Loop Referral Systems
                  <div className="mt-3 w-20 h-1 bg-gradient-to-r from-green-500 to-[#3b97d0] rounded-full"></div>
                </h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                  We engage in a closed-loop coordination of referrals with
                  primary care, behavioral health, and community service
                  providers. This seamless coordination ensures that all aspects
                  of your care are well-integrated, allowing for a comprehensive
                  and efficient approach to your well-being.
                </p>
              </div>
              <a
                href="/contact-us"
                className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-[#3b97d0] hover:to-blue-600 text-white font-bold py-4 px-8 rounded-xl inline-flex items-center space-x-3 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
                aria-label="Learn More About Referrals"
              >
                <span>Learn More About Referrals</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3b97d0] tracking-tight mb-6 relative">
              Our Facilities & Team
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#3b97d0] rounded-full"></div>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Explore our modern facilities and meet our dedicated team of professionals committed to your recovery journey.
            </p>
          </div>
          < OwlSlider />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#3b97d0] to-[#2a7bb8] text-white overflow-hidden relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10"></div>
        
        {/* Floating elements */}
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
              Accelerate Your Recovery Journey
            </h2>
            <p className="text-lg md:text-xl mb-10 text-blue-100 leading-relaxed font-light">
              Take advantage of our innovative CAP program to achieve faster,
              more sustainable recovery outcomes. Our intensive approach can
              help you reach your goals in less time.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact-us"
                className="group bg-white text-[#3b97d0] hover:bg-gray-100 hover:text-[#2a7bb8] font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 inline-flex items-center justify-center space-x-2"
              >
                <span>Apply for CAP Program</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:5551234567"
                className="group border-2 border-white text-white hover:bg-white hover:text-[#3b97d0] font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 inline-flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                <span>Call Now: (555) 123-4567</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndividualServices;