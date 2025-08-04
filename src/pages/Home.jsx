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

export default function Home() {
  const services = [
    {
      title: "Behavioral Health",
      description:
        "Comprehensive psychiatric and psychological services tailored to your mental health needs.",
      icon: Brain,
      href: "/behavioral-health",
      features: [
        "Psychological Assessment",
        "Psychiatric Evaluation",
        "Individual & Group Therapy",
        "Medication Prescribing and Management",
      ],
    },
    {
      title: "Physical Health",
      description:
        "Holistic health and wellness services to support your physical well-being.",
      icon: Stethoscope,
      href: "/physical-health",
      features: [
        "Health & Wellness Classes",
        "Health Maintenance & Promotion",
        "Disease Prevention",
        "Physical Health Exam",
      ],
    },
    {
      title: "Social Services",
      description:
        "Community-based support to foster reintegration and independence.",
      icon: Users,
      href: "/social-services",
      features: [
        "Community Resources & Partnerships",
        "Pathways to Independence",
        "Family Education and Support",
        "Work Force Development",
      ],
    },
  ];

  const ref = useGSAP();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [officeSlide, setOfficeSlide] = useState(0);

  const heroSlides = [
    {
      title: "You Deserve To Be Well",
      subtitle: "Welcome to Cholla",
      description:
        "Bridging the gap between medicine and mental well-being through collaborative care.",
      image:
        "https://images.pexels.com/photos/33207255/pexels-photo-33207255.jpeg",
    },
    {
      title: "Comprehensive Mental Health Care",
      subtitle: "Expert Treatment",
      description:
        "Personalized care plans for addiction, emotional challenges, and mental health needs.",
      image:
        "https://images.pexels.com/photos/33216715/pexels-photo-33216715.jpeg",
    },
    {
      title: "Recovery is a Journey",
      subtitle: "Lifelong Support",
      description:
        "Continuous support and personal development at your own pace.",
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    },
  ];

  const officeImages = [
    {
      image:
        "https://images.pexels.com/photos/5452289/pexels-photo-5452289.jpeg",
      alt: "Cholla Behavioral Health Therapy Room",
    },
    {
      image:
        "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg",
      alt: "Cholla Behavioral Health Office Reception",
    },
    {
      image:
        "https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg",
      alt: "Cholla Behavioral Health Counseling Room",
    },
    {
      image:
        "https://images.pexels.com/photos/6129042/pexels-photo-6129042.jpeg",
      alt: "Cholla Behavioral Health Doctor Looking at an X-ray",
    },
    {
      image:
        "https://chollabehavioralhealth.com/wp-content/uploads/2024/06/Art_1-768x512.jpg",
      alt: "Cholla Behavioral Health Meeting Room",
    },
    {
      image:
        "https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg",
      alt: "Cholla Behavioral Health Dr. Emily Carter",
    },
  ];

  const testimonials = [
    {
      name: "John Martin",
      location: "Personal Trainer",
      rating: 5,
      testimonial:
        "I got 1 year of therapy in such a short time. I left with a solid plan and the support 'tools' I needed to continue forward on my journey. I was grateful to be able to travel home and continue using the coaching services which has kept me living my life to the fullest potential! Thank you all",
    },
    {
      name: "Alex E.",
      location: "Account Manager",
      rating: 5,
      testimonial:
        "Cholla Behavioral Health is run by staff that will go above and beyond to help their patients. They have a huge network of resources that benefits patients and families to the road of recovery!!",
    },
    {
      name: "Easton B.",
      location: "Student / Union",
      rating: 5,
      testimonial:
        "Incredible facilities and staff alike you can tell Cholla cares about their patients!",
    },
  ];

  const stats = [
    { number: "500+", label: "Lives Transformed" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Crisis Support" },
    { number: "10+", label: "Years Experience" },
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setOfficeSlide((prev) => (prev + 1) % officeImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const nextOfficeSlide = () => {
    setOfficeSlide((prev) => (prev + 1) % officeImages.length);
  };

  const prevOfficeSlide = () => {
    setOfficeSlide(
      (prev) => (prev - 1 + officeImages.length) % officeImages.length
    );
  };

  return (
    <div ref={ref} className="min-h-screen overflow-x-hidden">
      {/* Hero Slider Section */}
      <section className="relative min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] lg:min-h-[80vh] w-full">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`slide-${index} absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center pt-12 sm:pt-16">
              <div className="first-section container mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
                <h2 className="gsap-slide-up text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading font-semibold mb-4">
                  {slide.subtitle}
                </h2>
                <h1 className="btn-shine gsap-slide-up text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                  {slide.title}
                </h1>
                <p className="gsap-slide-up text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-8">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <NavLink
                    to="/contact-us"
                    className="relative font-semibold text-sm sm:text-base md:text-lg rounded-lg text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-4 sm:px-6 py-2 sm:py-3 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-800 transition-all duration-300 group overflow-hidden shadow-lg hover:shadow-xl"
                  >
                    <span className="relative z-10  mt-1 inline-block">
                      Start Your Recovery
                    </span>
                    <span className="absolute top-0 w-full h-full -left-full -z-0 transform skew-x-12 bg-gradient-to-r from-white/20 to-white/30 transition-transform duration-700 ease-out group-hover:translate-x-full"></span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </NavLink>

                  <a
                    href="tel:4807906666"
                    className="relative font-semibold text-sm sm:text-base md:text-lg rounded-lg text-white border-2 border-white px-4 sm:px-6 py-2 sm:py-3 hover:white-red-600  hover:bg-white transition-all duration-300 group overflow-hidden shadow-lg hover:shadow-xl"
                  >
                    <span className="relative z-10 inline-flex items-center">
                      <Phone className="h-4 sm:h-5 w-4 sm:w-5 inline mr-2" />
                      Call Now: (480) 790-6666
                    </span>
                    {/* Hover shimmer */}
                    <span className="absolute top-0 w-full h-full -left-full -z-0 transform skew-x-12 bg-gradient-to-r from-white/20 to-white/30 transition-transform duration-700 ease-out group-hover:translate-x-full"></span>
                    {/* Red overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 sm:p-3 rounded-full hover:bg-red-500 transition-all duration-300"
          aria-label="Previous hero slide"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 sm:p-3 rounded-full hover:bg-red-500 transition-all duration-300"
          aria-label="Next hero slide"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-blue-600 scale-125" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

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

      {/* Stats Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="gsap-stagger text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-red-200 text-xs sm:text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section (Patient Centered Care) */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="gsap-slide-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4 sm:mb-6">
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
                src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg"
                alt="Patient centered care at Cholla Behavioral Health"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mental Health & Co-Occurring Substance Abuse Treatment Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="gsap-slide-up text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Mental Health & Co-Occurring Substance Abuse Treatment
            </h2>
            <p className="gsap-slide-up text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
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
                src="https://images.pexels.com/photos/7230385/pexels-photo-7230385.jpeg"
                alt="Mental health and substance abuse treatment at Cholla Behavioral Health"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call Us or Walk In Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="gsap-slide-up text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Call Us or Walk In!
            </h2>
            <p className="gsap-slide-up text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Finding a program for you or a loved one can be difficult. If we
              are not the right fit, we will assist in getting the help you
              need.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div key={index} className="gsap-stagger">
                <h3 className="text-base sm:text-lg md:text-xl font-heading font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-2 text-gray-600">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 hover:rotate-3" />
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <NavLink
                    to="/services"
                    className="text-blue-600 hover:text-red-800 font-semibold flex items-center text-sm sm:text-base md:text-lg"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Show More
                    <ArrowRight className="h-4 sm:h-5 w-4 sm:w-5 ml-2" />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <a
              href="tel:4807906666"
              className="relative font-semibold text-sm sm:text-base md:text-lg rounded-lg text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 px-4 sm:px-6 py-2 sm:py-3 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 transition-all duration-300 group overflow-hidden shadow-lg hover:shadow-xl"
              aria-label="Call Cholla Behavioral Health at (480) 790-6666"
            >
              <span className="relative mt-2 z-10 inline-flex items-center">
                <Phone className="h-4  sm:h-5 w-4 sm:w-5 inline mr-2" />
                Call Now: (480) 790-6666
              </span>

             
              <span className="absolute top-0 w-full h-full -left-full -z-0 transform skew-x-12 bg-gradient-to-r from-white/20 to-white/30 transition-transform duration-700 ease-out group-hover:translate-x-full"></span>

              
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Visit Us Section with Google Map */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="gsap-slide-up text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Visit Us
            </h2>
            <p className="gsap-slide-up text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Find us at 9201 N 25th Ave Suite 185, Phoenix, AZ 85021. Walk-ins
              are welcome!
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl h-[250px] sm:h-[350px] md:h-[400px] rounded-xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.723130382255!2d-112.11163068461416!3d33.56967235134672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6c5960eaaaab%3A0x2ca55ed74e10edaa!2s9201%20N%2025th%20Ave%20Suite%20185%2C%20Phoenix%2C%20AZ%2085021!5e0!3m2!1sen!2sus!4v1698781234567"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cholla Behavioral Health Location"
              ></iframe>
            </div>
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <a
              href="https://www.google.com/maps/place/9201+N+25th+Ave+suite+185,+Phoenix,+AZ+85021/@33.57195,-112.113998,17z/data=!4m6!3m5!1s0x872b6c5960eaaaab:0x2ca55ed74e10edaa!8m2!3d33.5696723!4d-112.1116307!16s%2Fg%2F11v67pck0n?hl=en&entry=ttu&g_ep=EgoyMDI1MDcyOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sm sm:text-base md:text-lg text-blue-600 hover:text-blue-800 flex items-center justify-center"
              aria-label="Get directions to Cholla Behavioral Health"
            >
              <MapPin className="h-4 sm:h-5 w-4 sm:w-5 mr-2" />
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="gsap-slide-up text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Why Choose Cholla Behavioral Health?
            </h2>
            <p className="gsap-slide-up text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence and compassionate care sets us apart
              in the behavioral health field.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: Heart,
                title: "Compassionate Care",
                description:
                  "We treat every individual with dignity, respect, and understanding.",
              },
              {
                icon: Award,
                title: "Expert Team",
                description:
                  "Licensed professionals with years of experience in behavioral health.",
              },
              {
                icon: Shield,
                title: "Safe Environment",
                description:
                  "Confidential, secure, and supportive treatment environment.",
              },
              {
                icon: Users,
                title: "Proven Results",
                description:
                  "Evidence-based treatments with high success rates.",
              },
            ].map((item, index) => (
              <div key={index} className="hello gsap-stagger text-center">
                <div className="w-14 sm:w-16 h-14 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="rotate h-6 sm:h-8 w-6 sm:w-8 text-blue-600" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-heading font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="gsap-slide-up text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Stories of Hope and Recovery
            </h2>
            <p className="gsap-slide-up text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from individuals who have transformed their lives through our
              programs.
            </p>
          </div>
          <div className="Recovery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                location={testimonial.location}
                rating={testimonial.rating}
                testimonial={testimonial.testimonial}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Take A Look Around Our Office Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="gsap-slide-up text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Take A Look Around Our Office!
            </h2>
            <p className="gsap-slide-up text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our welcoming and comfortable spaces designed to support
              your journey to wellness.
            </p>
          </div>
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] rounded-xl shadow-lg overflow-hidden">
            {officeImages.map((slide, index) => (
              <div
                key={index}
                className={`slide-${index} absolute inset-0 transition-opacity duration-500 ${
                  index === officeSlide
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-0 p-3 sm:p-4 md:p-6 text-white">
                  <p className="text-xs sm:text-sm md:text-base">{slide.alt}</p>
                </div>
              </div>
            ))}
            <button
              onClick={prevOfficeSlide}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 sm:p-3 rounded-full hover:bg-red-600 transition-all duration-300"
              aria-label="Previous office slide"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              onClick={nextOfficeSlide}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 sm:p-3 rounded-full hover:bg-red-600 transition-all duration-300"
              aria-label="Next office slide"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {officeImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setOfficeSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === officeSlide
                      ? "bg-red-600 scale-125"
                      : "bg-white/50"
                  }`}
                  aria-label={`Go to office slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us 24/7 Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-r from-blue-400 via-blue-800 to-blue-700 text-white">
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
