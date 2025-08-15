import { useGSAP } from "../hooks/useGSAP";
import Hero from "../components/Hero";
import { Brain, Target, Clock, CheckCircle, ArrowRight, Phone, Activity, Zap, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function ConcentrationAcceleration() {
  const ref = useGSAP();

  return (
    <div ref={ref} className="overflow-x-hidden min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        title="Concentration Acceleration Program"
        subtitle="Intensive Recovery Enhancement"
        description="Innovative intensive treatment program designed to rapidly improve concentration, accelerate skill development, and achieve faster stabilization in recovery."
        primaryCTA={{ text: "Join CAP Program", href: "/contact-us" }}
        secondaryCTA={{ text: "Call Now: (555) 123-4567", href: "tel:5551234567" }}
        backgroundImage="/placeholder.svg?height=600&width=1200"
      />

      {/* Program Overview Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 animate-on-scroll overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="gsap-slide-left space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#3b97d0] tracking-tight leading-tight relative">
                Accelerated Recovery Through Intensive Focus
                <div className="mt-2 w-20 h-1 bg-[#3b97d0] rounded-full"></div>
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                Our Concentration Acceleration Program (CAP) is an innovative intensive treatment approach designed
                specifically for individuals who need rapid stabilization and accelerated skill development in their
                recovery journey. This program combines evidence-based therapies with intensive focus training to
                achieve faster, more sustainable outcomes.
              </p>
              

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Intensive daily treatment sessions",
                  "Specialized concentration enhancement techniques",
                  "Accelerated skill development protocols",
                  "Evidence-based cognitive interventions",
                  "Rapid stabilization methodologies",
                  "Measurable progress tracking",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="group flex items-start space-x-3 p-2 rounded-lg hover:bg-white/50 transition-all duration-300"
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-[#3b97d0]/20 to-blue-100/30 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-4 w-4 text-[#3b97d0] transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base font-medium group-hover:text-gray-900 transition-colors">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="gsap-slide-right">
              <div className="relative group w-full max-w-lg mx-auto lg:mx-0">
                <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/5214992/pexels-photo-5214992.jpeg"
                    alt="Concentration Acceleration Program therapy session"
                    className="w-full md:h-[400px] h-auto object-cover transition-transform duration-700 group-hover:scale-105"
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
                  <p className="text-xs font-bold text-[#3b97d0]">Expert Care</p>
                  <p className="text-xs text-gray-600">Focused Recovery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADHD/ADD Overview Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/20 to-white animate-on-scroll overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="gsap-slide-left space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#3b97d0] tracking-tight leading-tight relative">
                Understanding ADHD / ADD
                <div className="mt-2 w-20 h-1 bg-[#3b97d0] rounded-full"></div>
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                Hyperactive Attention Deficit Disorder (ADHD) – or sometimes referred to as ADD (Attention Deficit Disorder) 
                is a neurodevelopmental disorder that can affect children and adults. Individuals with ADHD may present with 
                hyperactivity, difficulty with attention and focus, impulsive behavior, and more.
              </p>
              
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-2xl hover:border-blue-200/50 transition-all duration-500 p-6">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50/30 via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 relative z-10">Common ADHD Symptoms Include:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Difficulty with attention and focus",
                    "Hyperactive behavior",
                    "Impulsive actions",
                    "Difficulty with organization",
                  ].map((symptom, index) => (
                    <div
                      key={index}
                      className="group/item flex items-start space-x-2 transition-all duration-500 ease-out hover:transform hover:translate-x-2"
                      style={{ transitionDelay: `${index * 80}ms` }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-br from-[#3b97d0] to-blue-600 rounded-full mt-2 transition-all duration-300 group-hover/item:scale-150 group-hover/item:shadow-md shadow-blue-500/50"></div>
                      <span className="text-sm text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors duration-300">{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="gsap-slide-right">
              <div className="relative group w-full max-w-lg mx-auto lg:mx-0">
                <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl">
                  <img
                    src="https://chollabehavioralhealth.com/wp-content/uploads/2024/02/Cholla-pic.jpg"
                    alt="ADHD Concentration Program"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3b97d0]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#3b97d0]/20 to-blue-400/20 rounded-full animate-pulse"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-white/50 to-gray-200/50 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-xs font-bold text-[#3b97d0]">Specialized Care</p>
                  <p className="text-xs text-gray-600">ADHD Expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive ADHD Support Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 animate-on-scroll overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="gsap-slide-right">
              <div className="relative group w-full max-w-lg mx-auto lg:mx-0">
                <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/20860586/pexels-photo-20860586.jpeg"
                    alt="ADHD Treatment Session"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3b97d0]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#3b97d0]/20 to-blue-400/20 rounded-full animate-pulse"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-white/50 to-gray-200/50 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-xs font-bold text-[#3b97d0]">Tailored Support</p>
                  <p className="text-xs text-gray-600">Personalized Recovery</p>
                </div>
              </div>
            </div>
            <div className="gsap-slide-left space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#3b97d0] tracking-tight leading-tight relative">
                Comprehensive ADHD Treatment & Support
                <div className="mt-2 w-20 h-1 bg-[#3b97d0] rounded-full"></div>
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                A thorough examination, encompassing medical, physical, and neurodevelopmental aspects, is conducted to ascertain whether you or your child exhibit symptoms aligning with ADHD, which encompass hyperactivity, inattention, and impulsivity.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Expert Clinical Assessment",
                    description: "Thorough evaluation by licensed professionals specializing in ADHD diagnosis and treatment.",
                  },
                  {
                    title: "Personalized Treatment Approach",
                    description: "Customized treatment plans tailored to your specific needs and lifestyle requirements.",
                  },
                  {
                    title: "Ongoing Support & Monitoring",
                    description: "Continuous care coordination to ensure optimal outcomes and treatment adjustments.",
                  },
                   
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-start space-x-4 transition-all duration-500 ease-out hover:transform hover:translate-x-2"
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-[#3b97d0]/20 to-blue-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-4 w-4 text-[#3b97d0] transition-transform group-hover:scale-110" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#3b97d0] transition-colors duration-300">{item.title}</h3>
                      <p className="text-gray-700 text-sm sm:text-base font-medium group-hover:text-gray-900 transition-colors duration-300">{item.description}</p>
                      <div className="h-px bg-gradient-to-r from-[#3b97d0]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADHD Program Services Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/20 to-white animate-on-scroll overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="gsap-slide-up text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#3b97d0] tracking-tight relative">
                ADHD Concentration Acceleration Program
                <div className="absolute  left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#3b97d0] rounded-full"></div>
              </h2>
              <p className="gsap-slide-up mt-3 text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                Our comprehensive program includes specialized services designed to address all aspects of ADHD treatment and management.
              </p>
            </div>

            <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-2xl hover:border-blue-200/50 transition-all duration-500 p-8 sm:p-12">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50/30 via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="space-y-6 relative z-10">
                {[
                  {
                    icon: <Brain className="h-4 w-4 text-white" />,
                    title: "ADD/ADHD Evaluation – Results discussed with Provider",
                    description: "Comprehensive assessment including cognitive testing, behavioral evaluation, and detailed consultation with healthcare providers to ensure accurate diagnosis and treatment planning.",
                  },
                  {
                    icon: <Activity className="h-4 w-4 text-white" />,
                    title: "Medication review and management",
                    description: "Professional medication assessment, monitoring, and adjustment to optimize therapeutic benefits while minimizing side effects for improved daily functioning.",
                  },
                  {
                    icon: <Target className="h-4 w-4 text-white" />,
                    title: "Treatment plan supporting patient needs including programming schedule",
                    description: "Individualized treatment plans with flexible scheduling options designed to accommodate personal, educational, and professional commitments while maximizing treatment effectiveness.",
                  },
                  {
                    icon: <Award className="h-4 w-4 text-white" />,
                    title: "In person individual & group ADHD program therapies and activities",
                    description: "Evidence-based therapeutic interventions including individual counseling, group therapy sessions, and specialized activities focused on improving concentration, organization, and coping skills.",
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="group/item flex items-start space-x-4 transition-all duration-500 ease-out hover:transform hover:translate-x-2"
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-[#3b97d0]/80 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-300 group-hover/item:scale-110 group-hover/item:shadow-md">
                      {service.icon}
                    </div>
                    <div className="flex-1 space-y-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover/item:text-[#3b97d0] transition-colors duration-300">{service.title}</h3>
                      <p className="text-gray-700 text-sm sm:text-base font-medium group-hover/item:text-gray-900 transition-colors duration-300">{service.description}</p>
                      <div className="h-px bg-gradient-to-r from-[#3b97d0]/20 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-100/50 shadow-lg transition-all duration-300 group-hover:shadow-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#3b97d0]/20 to-blue-100/30 rounded-full flex items-center justify-center">
                    <Zap className="h-5 w-5 text-[#3b97d0]" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Ready to Get Started?</h4>
                </div>
                <p className="text-gray-700 text-sm mb-4 font-medium">
                  Our team is ready to help you or your loved one take the first step toward better ADHD management 
                  and improved quality of life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact-us"
                    className="group bg-[#3b97d0] hover:bg-[#2a7bb8] text-white font-bold py-3 px-6 rounded-xl inline-flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                    aria-label="Schedule Evaluation"
                  >
                    <span>Schedule Evaluation</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="tel:5551234567"
                    className="group border-2 border-[#3b97d0] hover:border-[#2a7bb8] text-[#3b97d0] hover:text-[#2a7bb8] hover:bg-blue-50 font-bold py-3 px-6 rounded-xl inline-flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 hover:scale-105"
                    aria-label="Call Today"
                  >
                    <Phone className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                    <span>Call Today</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Better Understanding Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 animate-on-scroll overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="gsap-slide-up text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#3b97d0] tracking-tight relative">
              Better Understanding Through Comprehensive Assessment
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#3b97d0] rounded-full"></div>
            </h2>
            <p className="gsap-slide-up   mt-7 text-base sm:text-lg text-gray-700 leading-relaxed font-medium mb-8">
              A thorough examination, encompassing medical, physical, and neurodevelopmental aspects, is conducted to 
              ascertain whether you or your child exhibit symptoms aligning with ADHD, which encompass hyperactivity, 
              inattention, and impulsivity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  icon: <Brain className="h-8 w-8 text-[#3b97d0]" />,
                  title: "Medical Assessment",
                  description: "Comprehensive medical evaluation to identify underlying factors contributing to ADHD symptoms.",
                },
                {
                  icon: <Activity className="h-8 w-8 text-[#3b97d0]" />,
                  title: "Physical Evaluation",
                  description: "Physical assessment to rule out other conditions and ensure optimal treatment planning.",
                },
                {
                  icon: <Target className="h-8 w-8 text-[#3b97d0]" />,
                  title: "Neurodevelopmental Testing",
                  description: "Specialized testing to assess cognitive function, attention patterns, and developmental factors.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="gsap-stagger group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-2xl hover:border-blue-200/50 transition-all duration-500 p-6"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-50/30 via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#3b97d0]/20 to-blue-100/30 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#3b97d0] transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-700 text-sm font-medium group-hover:text-gray-900 transition-colors duration-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-2xl hover:border-blue-200/50 transition-all duration-500 p-6 sm:p-8">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50/30 via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 relative z-10">Our Assessment Process Includes:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                {[
                  "Detailed symptom assessment",
                  "Behavioral observation",
                  "Cognitive testing",
                  "Family history review",
                  "Educational performance analysis",
                  "Social functioning evaluation",
                  "Medical history examination",
                  "Treatment planning discussion",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group/item flex items-start space-x-3 transition-all duration-500 ease-out hover:transform hover:translate-x-2"
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <div className="w-5 h-5 bg-gradient-to-br from-[#3b97d0]/20 to-blue-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-3.5 w-3.5 text-[#3b97d0] transition-transform group-hover/item:scale-110" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium group-hover/item:text-gray-900 transition-colors duration-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
}