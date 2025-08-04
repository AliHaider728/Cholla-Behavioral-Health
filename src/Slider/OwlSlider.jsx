import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Phone, Users, Heart, Activity, Brain, Stethoscope, Home, ChevronDown, ChevronUp, Star } from "lucide-react";

// Hero component (keeping your existing one)
const Hero = ({ title, subtitle, description, primaryCTA, secondaryCTA, backgroundImage }) => (
  <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-5xl font-bold mb-4">{title}</h1>
      <h2 className="text-2xl mb-6 text-blue-100">{subtitle}</h2>
      <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">{description}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href={primaryCTA.href} className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors">
          {primaryCTA.text}
        </a>
        <a href={secondaryCTA.href} className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors">
          {secondaryCTA.text}
        </a>
      </div>
    </div>
  </div>
);

// Carousel Component
const Carousel = () => {
  const sliderImages = [
    { src: "https://chollabehavioralhealth.com/wp-content/uploads/2024/06/2148366499-1-600x400.webp", alt: "Therapy session" },
    { src: "https://chollabehavioralhealth.com/wp-content/uploads/2024/06/61173-1-600x400.webp", alt: "Outdoor activity" },
    { src: "https://chollabehavioralhealth.com/wp-content/uploads/2024/06/61173-1-600x400.webp", alt: "Yoga session" },
    { src: "https://chollabehavioralhealth.com/wp-content/uploads/2024/06/21089-1-600x400.webp", alt: "Art therapy" },
    { src: "https://chollabehavioralhealth.com/wp-content/uploads/2024/06/1289-1-600x400.webp", alt: "Gym session" },
  ];

  const [visibleItems, setVisibleItems] = useState(5);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Update visible items based on screen width
  useEffect(() => {
    const updateVisibleItems = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setVisibleItems(5);
      } else if (width >= 1024) {
        setVisibleItems(4);
      } else if (width >= 768) {
        setVisibleItems(3);
      } else if (width >= 480) {
        setVisibleItems(2);
      } else {
        setVisibleItems(1);
      }
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  // Clone first and last images for infinite loop effect
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

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Re-enable transition after jump
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const itemWidthPercent = 100 / visibleItems;

  return (
    <section className="w-screen bg-gray-50 py-10 overflow-hidden">
      <div className="relative max-w-screen-2xl mx-auto">
        <div
          className="flex"
          style={{
            width: `${(extendedImages.length * 100) / visibleItems}%`,
            transform: `translateX(-${currentIndex * itemWidthPercent}%)`,
            transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedImages.map((image, index) => (
            <div
              key={index}
              style={{ width: `${itemWidthPercent}%` }}
              className="px-2 flex-shrink-0"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-[400px] w-full object-cover rounded-lg shadow"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-red-800 text-white w-12 h-12 rounded-full z-10 hover:bg-blue-600  duration-300 transition-all"
        >
          &#10094;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-800 text-white w-12 h-12 rounded-full z-10 hover:bg-blue-600 duration-300 transition-all"
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
      {/* Hero Section */}
      <Hero
        title="Individual Treatment Services"
        subtitle="Your Primary Care Provider for Mental Health & Psychiatric Treatment"
        description="Our expert providers offer comprehensive care for a wide range of emotional and mental conditions, integrating behavioral health, physical health, and community support in one accessible location."
        primaryCTA={{ text: "Schedule Your Appointment", href: "/contact-us" }}
        secondaryCTA={{ text: "Call Now: (602) 555-1234", href: "tel:6025551234" }}
        backgroundImage="/placeholder.svg?height=600&width=1200"
      />

      {/* Primary Care Provider Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Your Primary Care Provider For Mental Health & Psychiatric Treatment
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our expert providers treat an expansive list of emotional and mental conditions, ensuring personalized care tailored to your unique needs. We provide accessible care of the highest standards all in one location.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {conditions.map((condition, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{condition}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact-us"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg inline-flex items-center justify-center space-x-2 transition-colors"
                >
                  <span>Schedule Your Appointment</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="tel:6025551234"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg inline-flex items-center justify-center space-x-2 transition-colors"
                >
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
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Service Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Care Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We integrate three key areas of care to provide holistic treatment and support for your recovery journey.
            </p>
          </div>

          <div className="space-y-8">
            {/* Behavioral Health Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div 
                className="p-8 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleService('behavioralHealth')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <Brain className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        Behavioral Health
                      </h3>
                      <p className="text-gray-600">
                        Comprehensive mental health and addiction treatment services
                      </p>
                    </div>
                  </div>
                  {expandedService === 'behavioralHealth' ? (
                    <ChevronUp className="h-6 w-6 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-blue-600" />
                  )}
                </div>
              </div>
              
              {expandedService === 'behavioralHealth' && (
                <div className="px-8 pb-8 bg-blue-50">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.behavioralHealth.map((service, index) => (
                      <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Physical Health Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div 
                className="p-8 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleService('physicalHealth')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <Stethoscope className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        Physical Health
                      </h3>
                      <p className="text-gray-600">
                        Integrated medical care and wellness services
                      </p>
                    </div>
                  </div>
                  {expandedService === 'physicalHealth' ? (
                    <ChevronUp className="h-6 w-6 text-green-600" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-green-600" />
                  )}
                </div>
              </div>
              
              {expandedService === 'physicalHealth' && (
                <div className="px-8 pb-8 bg-green-50">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.physicalHealth.map((service, index) => (
                      <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Community Services Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div 
                className="p-8 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleService('communityServices')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                      <Users className="h-8 w-8 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        Community Services
                      </h3>
                      <p className="text-gray-600">
                        Support systems and life skills development
                      </p>
                    </div>
                  </div>
                  {expandedService === 'communityServices' ? (
                    <ChevronUp className="h-6 w-6 text-purple-600" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-purple-600" />
                  )}
                </div>
              </div>
              
              {expandedService === 'communityServices' && (
                <div className="px-8 pb-8 bg-purple-50">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.communityServices.map((service, index) => (
                      <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                        <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Levels of Care Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Levels of Care
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured levels of care provide flexible, comprehensive support tailored to your recovery journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {levelsOfCare.map((level, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {level.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {level.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Oriented Residence Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Home className="h-8 w-8 text-orange-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
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
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <Carousel />

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-gray-300 leading-relaxed">
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