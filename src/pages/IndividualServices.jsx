import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Phone, Users, Heart, Brain, Stethoscope, Home, ChevronDown, ChevronUp } from "lucide-react";
import Hero from "../components/Hero";

 const styles = `
  html {
    scroll-behavior: smooth;
  }
  .dropdown-transition {
    transition: all 0.4s ease-in-out;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
  }
  .dropdown-transition.open {
    max-height: 1000px;
    opacity: 1;
  }
  .carousel-container {
    overflow-x: hidden;
  }
  .carousel-track {
    display: flex;
    width: 100%;
  }
  .carousel-image {
    width: 100%;
    object-fit: cover;
  }
  @media (max-width: 767px) {
    .carousel-image {
      height: 300px !important;
    }
  }
  @media (min-width: 768px) {
    .carousel-image {
      height: 400px !important;
    }
  }
`;

// Carousel Component
const Carousel = () => {
  const sliderImages = [
    { src: "https://chollabehavioralhealth.com/wp-content/uploads/2024/04/2150161951-5-600x400.webp", alt: "Therapy session" },
    { src: "https://chollabehavioralhealth.com/wp-content/uploads/2024/04/2150161951-1-600x400.webp", alt: "Outdoor activity" },
    { src: "https://chollabehavioralhealth.com/wp-content/uploads/2024/04/2150161951-2-600x400.webp", alt: "Yoga session" },
    { src: "https://chollabehavioralhealth.com/wp-content/uploads/2024/04/2150161951-3-600x400.webp", alt: "Art therapy" },
    { src: "https://chollabehavioralhealth.com/wp-content/uploads/2024/04/2150161951-4-600x400.webp", alt: "Gym session" },
  ];

  const [visibleItems, setVisibleItems] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const updateVisibleItems = () => {
      const width = window.innerWidth;
      setVisibleItems(width < 768 ? 1 : 3);
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  const extendedImages = [
    sliderImages[sliderImages.length - 1],
    ...sliderImages,
    sliderImages[0],
  ];

  const handleNext = () => {
    if (currentIndex < extendedImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsTransitioning(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsTransitioning(true);
    }
  };

  const handleTransitionEnd = () => {
    if (currentIndex === extendedImages.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(extendedImages.length - 2);
    }
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const itemWidthPercent = 100 / visibleItems;

  return (
    <section className="py-10 bg-gray-50 carousel-container">
      <style>{styles}</style>
      <div className="relative max-w-7xl mx-auto px-4">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * itemWidthPercent}%)`,
            transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedImages.map((image, index) => (
            <div
              key={index}
              style={{ width: `${itemWidthPercent}%`, flexShrink: 0 }}
              className="px-2"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="carousel-image w-full rounded-lg shadow"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-red-800 text-white w-12 h-12 rounded-full z-10 hover:bg-blue-600 duration-300 transition-all"
        >
          &#10094;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-800 text-white w-12 h-12 rounded-full z-10 hover:bg-blue-600 duration-300 transition-all"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default function IndividualServices() {
  const [expandedService, setExpandedService] = useState(null);

  const conditions = [
    "Anxiety", "Depression", "Trauma", "TBI", "Addictions", "ADD/ADHD",
    "Bipolar Disorder", "Personality Disorders", "Compulsive & Risky Behaviors",
    "Codependency / Self Identity", "Life Transitions", "Relationship Issues",
    "Feeling 'Stuck' or in Crisis", "And More…"
  ];

  const services = {
    behavioralHealth: [
      "Psychological Assessment", "Psychiatric Evaluation", "Diagnostic Assessment and Treatment Planning",
      "Mental Health Services", "Individual Therapy", "Group Therapy", "Family Therapy",
      "Half Day Life Skills", "Vocational Therapy", "Opioid Treatment Program",
      "Substance Abuse Treatment", "Trauma Based Services", "ADHD Screening",
      "ADHD Concentration Acceleration Program", "Mixed Modality Groups (Expressive Arts, Communication Skills, Internal Family Systems)",
      "Evidence-based Cognitive Groups (CBT, DBT, ACT)", "Eye Movement Desensitization and Reprocessing Therapy (EMDR)",
      "DSI Intensive Programs for those struggling, lost, or stuck", "And More…"
    ],
    physicalHealth: [
      "Health Promotion and Maintenance", "Nutrition and Wellness Education", "Disease Prevention",
      "Covid-19 Testing", "Syphilis and HIV Testing", "Hepatitis C Testing & Treatment",
      "Diagnosis and Treatment of Acute Disease", "Hearing and Vision Screens", "Physical Health Examinations",
      "Immunization Vaccines", "Weight Loss Management", "Chronic Conditions", "Preventative Health",
      "Vitals and Heart Testing Electrocardiogram (ECG)", "Sick Visits"
    ],
    communityServices: [
      "Peer and Recovery Coaching Programs", "Connecting Members to Community Based Support Systems",
      "Community Resources", "Use of Crisis Systems", "Community Partnerships", "Volunteering and Job Skills",
      "Pathways to Independence", "Workforce Development", "Criminal Employment", "Recreation and Fitness",
      "Education Development and Engagement", "Obtain General Education Development", "Resume Building",
      "Family Education and Support Groups", "Get and Stay Connected"
    ]
  };

  const levelsOfCare = [
    {
      title: "Ambulatory Detox",
      description: "Transforming detox into a smoother, more manageable process is what we do best. Our onsite medical professionals specialize in ambulatory detox, offering personalized care to make your journey towards wellness as comfortable as possible."
    },
    {
      title: "Partial Hospitalization (PHP)",
      description: "Partial Hospitalization Programming acts as a transitional phase between inpatient or residential care and intensive outpatient programs. It offers a structured daily routine with 25hrs holistic group therapy weekly."
    },
    {
      title: "Intensive Outpatient (IOP)",
      description: "Intensive Outpatient Programming maintains clinical services at a reduced level 3-5 days with 15-25hrs of therapy a week, focusing on skill development and healthy support networks."
    },
    {
      title: "Outpatient (OP)",
      description: "The main emphasis of outpatient programming is to provide continuous support. Clients can continue with this level of care for an indefinite period as needed."
    }
  ];

  const toggleService = (serviceKey) => {
    setExpandedService(expandedService === serviceKey ? null : serviceKey);
  };

  return (
    <div className="min-h-screen">
      <style>{styles}</style>
      <Hero
        title="Individual Treatment Services"
        subtitle="Your Primary Care Provider for Mental Health & Psychiatric Treatment"
        description="Our expert providers offer comprehensive care for a wide range of emotional and mental conditions, integrating behavioral health, physical health, and community support in one accessible location."
        primaryCTA={{ text: "Schedule Your Appointment", href: "/contact-us" }}
        secondaryCTA={{ text: "Call Now: (602) 555-1234", href: "tel:6025551234" }}
        backgroundImage="/placeholder.svg?height=600&width=1200"
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Primary Care Provider For Mental Health & Psychiatric Treatment
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our expert providers treat an expansive list of emotional and mental conditions, ensuring personalized care tailored to your unique needs. We provide accessible care of the highest standards all in one location.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {conditions.map((condition, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{condition}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact-us" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg inline-flex items-center justify-center space-x-2 transition-colors">
                  <span>Schedule Your Appointment</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a href="tel:6025551234" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg inline-flex items-center justify-center space-x-2 transition-colors">
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7659565/pexels-photo-7659565.jpeg"
                alt="Mental health consultation"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-6">
              Comprehensive Care Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We integrate three key areas of care to provide holistic treatment and support for your recovery journey, ensuring every aspect of your wellbeing is addressed with expertise and compassion.
            </p>
          </div>

          <div className="space-y-8">
            {Object.entries(services).map(([key, serviceList], index) => {
              const icons = {
                behavioralHealth: Brain,
                physicalHealth: Stethoscope,
                communityServices: Users
              };
              const Icon = icons[key];
              const colors = {
                behavioralHealth: { primary: 'blue', secondary: 'indigo' },
                physicalHealth: { primary: 'green', secondary: 'emerald' },
                communityServices: { primary: 'purple', secondary: 'violet' }
              };
              const { primary, secondary } = colors[key];

              return (
                <div key={key} className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20">
                  <div className={`absolute inset-0 bg-gradient-to-r from-${primary}-600/5 to-${secondary}-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div 
                    className="relative p-6 md:p-10 cursor-pointer transition-all duration-300"
                    onClick={() => toggleService(key)}
                  >
                    <div className="flex flex-col md:flex-row items-center justify-between">
                      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                        <div className="relative">
                          <div className={`w-20 h-20 bg-gradient-to-br from-${primary}-500 to-${primary}-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="h-10 w-10 text-white" />
                          </div>
                          <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-${primary}-400 to-${primary}-500 rounded-full shadow-lg`}></div>
                        </div>
                        <div>
                          <h3 className={`text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-${primary}-700 transition-colors`}>
                            {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                          </h3>
                          <p className="text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
                            {key === 'behavioralHealth' && 'Comprehensive mental health and addiction treatment services delivered by expert clinicians using evidence-based therapeutic approaches tailored to your unique needs.'}
                            {key === 'physicalHealth' && 'Integrated medical care and wellness services that address your physical health needs alongside mental health treatment for comprehensive healing and recovery.'}
                            {key === 'communityServices' && 'Support systems and life skills development programs that foster personal growth, independence, and meaningful connections within your community for lasting recovery.'}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                          expandedService === key 
                            ? `bg-${primary}-600 shadow-lg` 
                            : `bg-${primary}-100 group-hover:bg-${primary}-200`
                        }`}>
                          {expandedService === key ? (
                            <ChevronUp className="h-6 w-6 text-white" />
                          ) : (
                            <ChevronDown className={`h-6 w-6 text-${primary}-600`} />
                          )}
                        </div>
                        <span className={`text-sm font-medium text-${primary}-600`}>
                          {serviceList.length} Services
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={`dropdown-transition ${expandedService === key ? 'open' : ''}`}>
                    <div className={`px-6 md:px-10 pb-10 bg-gradient-to-br from-${primary}-50/50 to-${secondary}-50/50`}>
                      <div className={`border-t border-${primary}-200/50 pt-8`}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {serviceList.map((service, index) => (
                            <div key={index} className={`group/item flex items-start space-x-3 bg-white/70 backdrop-blur-sm p-5 rounded-xl shadow-sm hover:shadow-md hover:bg-white transition-all duration-300 border border-${primary}-100/50`}>
                              <div className={`w-2 h-2 bg-${primary}-600 rounded-full mt-2 group-hover/item:scale-150 transition-transform duration-300`}></div>
                              <span className="text-gray-700 font-medium leading-relaxed">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Levels of Care
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured levels of care provide flexible, comprehensive support tailored to your recovery journey.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {levelsOfCare.map((level, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-6 md:p-8 hover:shadow-2xl transition-shadow">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                    {level.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {level.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Home className="h-8 w-8 text-orange-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Community Oriented Residence
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Cholla offers safe and supportive housing options tailored to transition members in their healing journey. Our community-oriented environment fosters personal growth and the development of essential life skills.
              </p>
              <a
                href="/contact-us"
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg inline-flex items-center space-x-2 transition-colors"
              >
                <span>Learn More About Housing</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            <div>
              <img
                src="https://chollabehavioralhealth.com/wp-content/uploads/2024/05/17169818-3.webp"
                alt="Community oriented residence"
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <Carousel />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-300 leading-relaxed">
            Take the first step towards recovery with our comprehensive treatment services. Our compassionate team is here to support you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact-us"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center space-x-2 text-lg"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="tel:6025551234"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center space-x-2 text-lg"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now: (602) 555-1234</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}