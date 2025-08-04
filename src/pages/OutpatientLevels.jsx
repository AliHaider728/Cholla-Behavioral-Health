import { useGSAP } from "../hooks/useGSAP"
import Hero from "../components/Hero"
import { ArrowRight, Phone, Clock, CheckCircle } from "lucide-react"
import { Link } from "react-router-dom"
import Carousel from "../Slider/OwlSlider"
import { useState, useEffect } from "react"

export default function OutpatientLevels() {
  const ref = useGSAP()
  const [currentSlide, setCurrentSlide] = useState(0)

  const outpatientLevels = [
    {
      level: "Partial Hospitalization Program (PHP)",
      duration: "6-8 hours per day, 5-7 days per week",
      description:
        "Partial Hospitalization Programming acts as a transitional phase between inpatient or residential care and intensive outpatient and outpatient programs. It offers a structured daily routine that facilitates the development and implementation of new skills, supported by dedicated 24/7 staff. This program includes 2-3 individual counseling sessions weekly, 25 hours of holistic group therapy weekly including evidence-based cognitive groups such as CBT, DBT, and ACT, mixed modality groups such as Expressive Arts, Communication Skills, Internal Family Systems, as well as vocational skills, job skills, and recreational activities, with wrap-around comprehensive case management on a regular basis. Medication prescribing and management throughout treatment.",
      features: [
        "Daily individual and group therapy",
        "Psychiatric evaluation and medication management",
        "Medical monitoring and nursing care",
        "Nutritional counseling and meal support",
        "Family therapy and education",
        "Discharge planning and aftercare coordination",
        "Crisis intervention services",
        "Comprehensive treatment team approach",
      ],
      idealFor: [
        "Individuals transitioning from inpatient care",
        "Those at risk of hospitalization",
        "People needing intensive medical monitoring",
        "Individuals with complex co-occurring disorders",
        "Those requiring structured daily support",
      ],
    },
    {
      level: "Intensive Outpatient Program (IOP)",
      duration: "3-5 days, 15-25 hours per week",
      description:
        "Intensive Outpatient Programming maintains the clinical services provided in Partial Hospitalization Programming at a reduced level, offering 3-5 days of 15-25 hours of therapy a week. In addition to ongoing skill development, clients in the Intensive Outpatient Program are encouraged to prioritize the establishment of healthy support networks, attaining financial stability, and fostering self-sufficiency.",
      features: [
        "Individual therapy sessions",
        "Group counseling sessions",
        "Family therapy when appropriate",
        "Psychiatric services and medication management",
        "Case management and care coordination",
        "Relapse prevention education",
        "Life skills development",
        "Flexible scheduling options",
      ],
      idealFor: [
        "Individuals stepping down from residential treatment",
        "Those needing intensive support while living at home",
        "People with strong family/social support systems",
        "Individuals with work or school commitments",
        "Those requiring structured accountability",
      ],
    },
    {
      level: "Outpatient Program (OP)",
      duration: "1-2 hours per week",
      description:
        "The main emphasis of outpatient programming is to provide continuous support. Clients have the option to continue with this level of care for an indefinite period as needed or until it is no longer necessary. We recognize that life circumstances can change, and additional support may be needed at various stages. Our team is here to offer ongoing support!",
      features: [
        "Weekly individual therapy sessions",
        "Bi-weekly or monthly group sessions",
        "Medication management as needed",
        "Crisis support and intervention",
        "Relapse prevention planning",
        "Ongoing assessment and treatment planning",
        "Coordination with other healthcare providers",
        "Flexible appointment scheduling",
      ],
      idealFor: [
        "Individuals in stable recovery",
        "Those stepping down from intensive programs",
        "People needing ongoing maintenance support",
        "Individuals with established coping skills",
        "Those with strong recovery support systems",
      ],
    },
  ]

  
 
  return (
    <div ref={ref} className="overflow-x-hidden">
      <style>{`
        .custom-carousel {
          position: relative;
          width: 100%;
          max-width: 600px;
          height: 256px; /* h-64 */
          margin: 0 auto;
          overflow: hidden;
          border-radius: 0.75rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        @media (min-width: 640px) {
          .custom-carousel {
            height: 320px; /* sm:h-80 */
          }
        }
        @media (min-width: 1024px) {
          .custom-carousel {
            height: 400px; /* lg:h-[400px] */
          }
        }
        .carousel-item {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: opacity 1s ease-in-out;
        }
        .carousel-item.hidden {
          opacity: 0;
          pointer-events: none;
        }
        .carousel-item.active {
          opacity: 1;
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
          background-color: #d1d5db; /* gray-300 */
          border-radius: 50%;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .carousel-dot.active {
          background-color: #1d4ed8; /* primary-600 */
        }
        .carousel-dot:hover {
          background-color: #3b82f6; /* primary-500 */
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
      <section className="section-padding">
        <div className="container-custom max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="gsap-slide-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Partial Hospitalization Program (PHP)
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                Partial Hospitalization Programming acts as a transitional phase between inpatient or residential care and intensive outpatient and outpatient programs. It offers a structured daily routine that facilitates the development and implementation of new skills, supported by dedicated 24/7 staff. This program includes 2-3 individual counseling sessions weekly, 25 hours of holistic group therapy weekly including evidence-based cognitive groups such as CBT, DBT, and ACT, mixed modality groups such as Expressive Arts, Communication Skills, Internal Family Systems, as well as vocational skills, job skills, and recreational activities, with wrap-around comprehensive case management on a regular basis. Medication prescribing and management throughout treatment.
              </p>
            </div>
            <div className="gsap-slide-right">
              <img
                src="https://chollabehavioralhealth.com/wp-content/uploads/2024/02/team-entrepreneurs-cooperating-while-analyzing-plans-computer-office-ezgif.com-optijpeg.jpg"
                alt="Partial Hospitalization Program"
                className="rounded-xl shadow-lg w-full max-w-[600px] h-auto max-h-[400px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intensive Outpatient (IOP) Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="gsap-slide-right order-2 lg:order-1">
              <img
                src="https://chollabehavioralhealth.com/wp-content/uploads/2024/02/Cholla-about.jpg"
                alt="Intensive Outpatient Program"
                className="rounded-xl shadow-lg w-full max-w-[600px] h-auto max-h-[400px] object-contain"
              />
            </div>
            <div className="gsap-slide-left order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Intensive Outpatient Program (IOP)
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                Intensive Outpatient Programming maintains the clinical services provided in Partial Hospitalization Programming at a reduced level, offering 3-5 days of 15-25 hours of therapy a week. In addition to ongoing skill development, clients in the Intensive Outpatient Program are encouraged to prioritize the establishment of healthy support networks, attaining financial stability, and fostering self-sufficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outpatient (OP) Section */}
      <section className="section-padding">
        <div className="container-custom max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="gsap-slide-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Outpatient Program (OP)
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                The main emphasis of outpatient programming is to provide continuous support. Clients have the option to continue with this level of care for an indefinite period as needed or until it is no longer necessary. We recognize that life circumstances can change, and additional support may be needed at various stages. Our team is here to offer ongoing support!
              </p>
            </div>
            <div className="gsap-slide-right">
              <img
                src="https://chollabehavioralhealth.com/wp-content/uploads/2024/05/team-doctors-setting-up-iv-drip-line-consulting.jpg"
                alt="Outpatient Program"
                className="rounded-xl shadow-lg w-full max-w-[600px] h-auto max-h-[400px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PHP & IOP Program Features Section (with Custom Slider) */}
       <Carousel/>

      {/* Levels of Care Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="gsap-slide-up text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Outpatient Treatment Levels
            </h2>
            <p className="gsap-slide-up text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              We offer multiple levels of outpatient care to ensure you receive the appropriate intensity of treatment
              based on your individual needs and circumstances.
            </p>
          </div>
          <div className="space-y-12">
            {outpatientLevels.map((level, index) => (
              <div key={index} className="gsap-stagger bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-heading font-semibold text-gray-900">{level.level}</h3>
                      </div>
                      <div className="flex items-center space-x-2 mb-4">
                        <Clock className="h-5 w-5 text-primary-600" />
                        <span className="text-primary-600 font-medium text-sm sm:text-base">{level.duration}</span>
                      </div>
                      <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">{level.description}</p>
                      <div className="mb-6">
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Program Features:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {level.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-2">
                              <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                              <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-1">
                      <div className="bg-primary-50 rounded-lg p-6">
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Ideal For:</h4>
                        <ul className="space-y-2">
                          {level.idealFor.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-2 text-xs sm:text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gsap-slide-up max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4">
              Start Your Outpatient Treatment Journey
            </h2>
            <p className="text-base sm:text-xl mb-8 text-primary-100">
              Take the first step towards recovery with our flexible outpatient programs. Our experienced team will help
              determine the right level of care for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact-us"
                className="bg-white text-primary-600 hover:bg-primary-50 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Schedule Assessment</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:5551234567"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now: (555) 123-4567</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}