import { useGSAP } from "../hooks/useGSAP"
import Hero from "../components/Hero"
import {
  Stethoscope,
  Shield,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Heart,
  Activity,
  UserCheck,
  AlertTriangle,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function MatMedManagement() {
  const ref = useGSAP()

  const medications = [
    {
      name: "Suboxone (Buprenorphine/Naloxone)",
      description:
        "FDA-approved medication that reduces cravings and withdrawal symptoms while blocking the effects of other opioids.",
      benefits: [
        "Reduces opioid cravings",
        "Prevents withdrawal symptoms",
        "Blocks euphoric effects of opioids",
        "Lower risk of respiratory depression",
        "Can be prescribed in office settings",
      ],
    },
    {
      name: "Methadone",
      description:
        "Long-acting opioid agonist that helps stabilize patients and reduce illicit opioid use when administered in controlled settings.",
      benefits: [
        "Long-lasting relief from cravings",
        "Reduces illicit opioid use",
        "Stabilizes daily functioning",
        "Proven track record of effectiveness",
        "Comprehensive program support",
      ],
    },
    {
      name: "Naltrexone (Vivitrol)",
      description:
        "Opioid antagonist that blocks the euphoric effects of opioids and alcohol, available in oral and injectable forms.",
      benefits: [
        "Blocks opioid and alcohol effects",
        "Monthly injection option available",
        "Non-addictive medication",
        "Supports abstinence-based recovery",
        "Reduces risk of overdose",
      ],
    },
  ]

  const programComponents = [
    {
      icon: Stethoscope,
      title: "Medical Evaluation & Monitoring",
      description:
        "Comprehensive medical assessment and ongoing monitoring by licensed physicians specializing in addiction medicine.",
    },
    {
      icon: Users,
      title: "Individual Counseling",
      description:
        "One-on-one therapy sessions with licensed counselors to address underlying issues and develop coping strategies.",
    },
    {
      icon: Heart,
      title: "Group Therapy",
      description:
        "Peer support groups facilitated by experienced counselors to share experiences and build recovery community.",
    },
    {
      icon: Activity,
      title: "Behavioral Therapy",
      description:
        "Evidence-based behavioral interventions including CBT and motivational interviewing to support lasting change.",
    },
    {
      icon: Shield,
      title: "Relapse Prevention",
      description: "Comprehensive planning and skill development to identify triggers and maintain long-term recovery.",
    },
    {
      icon: UserCheck,
      title: "Case Management",
      description:
        "Coordination of care and connection to community resources to support overall wellness and recovery.",
    },
  ]

  const eligibilityCriteria = [
    "Diagnosis of opioid use disorder",
    "Medical clearance for MAT",
    "Commitment to treatment program",
    "Willingness to participate in counseling",
    "Understanding of treatment expectations",
    "Stable living situation preferred",
  ]

  const treatmentPhases = [
    {
      phase: "Induction Phase",
      duration: "1-7 Days",
      description: "Initial medication dosing and stabilization under medical supervision.",
      goals: [
        "Medication initiation",
        "Withdrawal symptom management",
        "Initial dose stabilization",
        "Safety monitoring",
      ],
    },
    {
      phase: "Stabilization Phase",
      duration: "2-4 Months",
      description: "Dose optimization and integration of counseling services for comprehensive care.",
      goals: ["Optimal dose determination", "Craving reduction", "Counseling integration", "Lifestyle stabilization"],
    },
    {
      phase: "Maintenance Phase",
      duration: "Ongoing",
      description: "Long-term medication management with continued therapy and support services.",
      goals: [
        "Sustained recovery",
        "Ongoing medication management",
        "Continued therapy participation",
        "Community reintegration",
      ],
    },
  ]

  return (
    <div ref={ref} className="overflow-x-hidden min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        title="Medication-Assisted Treatment (MAT)"
        subtitle="Evidence-Based Opioid Addiction Treatment"
        description="Comprehensive MAT program combining FDA-approved medications with counseling and behavioral therapies for effective opioid addiction recovery."
        primaryCTA={{ text: "Start MAT Program", href: "/contact-us" }}
        secondaryCTA={{ text: "Call Now: (555) 123-4567", href: "tel:5551234567" }}
        backgroundImage="/placeholder.svg?height=600&width=1200"
      />

      {/* Overview Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 animate-on-scroll overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="gsap-slide-left space-y-6 flex flex-col h-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#3b97d0] tracking-tight leading-tight relative">
                What is Medication-Assisted Treatment?
                <div className="mt-2 w-20 h-1 bg-[#3b97d0] rounded-full"></div>
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                Medication-Assisted Treatment (MAT) is the use of FDA-approved medications, in combination with
                counseling and behavioral therapies, to provide a "whole-patient" approach to the treatment of substance
                use disorders.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                MAT has been proven to be clinically effective and significantly reduce the need for inpatient
                detoxification services for these individuals. It also increases retention in treatment programs and
                reduces illicit opioid use and opioid-related overdose deaths.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                {[
                  "FDA-approved medications proven safe and effective",
                  "Reduces cravings and withdrawal symptoms",
                  "Blocks euphoric effects of opioids",
                  "Improves treatment retention rates",
                  "Reduces risk of overdose and death",
                  "Supports return to normal daily activities",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="group flex items-start space-x-3 p-2 rounded-lg hover:bg-white/50 transition-all duration-300"
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <div className="w-6 h-6  rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-4 w-4 text-[#3b97d0] transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base font-medium group-hover:text-gray-900 transition-colors">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="gsap-slide-right h-full">
              <div className="relative group w-full h-full">
                <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl h-full">
                  <img
                    src="https://images.pexels.com/photos/7089018/pexels-photo-7089018.jpeg"
                    alt="MAT consultation with medical professional"
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
                  <p className="text-xs font-bold text-[#3b97d0]">Expert Care</p>
                  <p className="text-xs text-gray-600">MAT Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of MAT Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 animate-on-scroll overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="gsap-slide-left space-y-6 flex flex-col h-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#3b97d0] tracking-tight leading-tight relative">
                Welcome to Our Outpatient Behavioral Health Center
                <div className="mt-2 w-20 h-1 bg-[#3b97d0] rounded-full"></div>
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                At Cholla Behavioral Health, we understand that addressing mental health and co-occurring disorders like
                substance abuse concerns requires comprehensive and personalized care. That’s why we’re proud to offer
                Medication Prescribing and Management as part of our outpatient services. This also helps us directly
                track and monitor medication indications that directly affect the patient outcomes giving us more insight
                and ability to improve a patient’s care.
              </p>
            </div>
            <div className="gsap-slide-right h-full">
              <div className="relative group w-full h-full">
                <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl h-full">
                  <img
                    src="https://chollabehavioralhealth.com/wp-content/uploads/2024/05/17169818-1.webp"
                    alt="Patient in MAT consultation"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3b97d0]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#3b97d0]/20 to-blue-400/20 rounded-full animate-pulse"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-white/50 to-gray-200/50 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-xs font-bold text-[#3b97d0]">Quality Care</p>
                  <p className="text-xs text-gray-600">Outpatient Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/20 to-white animate-on-scroll overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="gsap-slide-right order-2 lg:order-1 h-full">
              <div className="relative group w-full h-full">
                <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl h-full">
                  <img
                    src="https://images.pexels.com/photos/287237/pexels-photo-287237.jpeg"
                    alt="MAT medical team"
                    className="w-full h-full object-cover transition-transform duration匆
                    duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3b97d0]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#3b97d0]/20 to-blue-400/20 rounded-full animate-pulse"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-white/50 to-gray-200/50 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-xs font-bold text-[#3b97d0]">Team Expertise</p>
                  <p className="text-xs text-gray-600">Comprehensive Care</p>
                </div>
              </div>
            </div>
            <div className="gsap-slide-left order-1 lg:order-2 space-y-6 flex flex-col h-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#3b97d0] tracking-tight leading-tight relative">
                Comprehensive Care
                <div className="mt-2 w-20 h-1 bg-[#3b97d0] rounded-full"></div>
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                Our Medication Assisted Therapy program offers more than just medication. We provide comprehensive support
                and resources to help clients navigate their recovery journey successfully. From individual and group
                therapy sessions to educational workshops and peer support groups, we’re here to ensure our clients have
                the tools and support they need to thrive.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                {[
                  "Individual and group therapy sessions for emotional support",
                  "Peer-led groups to build connection and reduce isolation",
                  "Educational workshops focused on recovery and life skills",
                  "Personalized treatment plans tailored to each client’s goals",
                  "Compassionate guidance through every stage of recovery",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="group flex items-start space-x-3 p-2 rounded-lg hover:bg-white/50 transition-all duration-300"
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <div className="w-6 h-6  rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-4 w-4 text-[#3b97d0] transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base font-medium group-hover:text-gray-900 transition-colors">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact-us"
                className="group bg-gradient-to-r from-red-600 via-red-700 to-red-500 hover:bg-gradient-to-r hover:from-red-600 hover:via-red-700 hover:to-red-500 text-white font-bold py-3 px-6 rounded-xl inline-flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                aria-label="Connect With Our Team"
              >
                <span>Connect With Our Team</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 animate-on-scroll overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="gsap-slide-left space-y-6 flex flex-col h-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#3b97d0] tracking-tight leading-tight relative">
                Confidentiality and Compassion
                <div className="mt-2 w-20 h-1 bg-[#3b97d0] rounded-full"></div>
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                We understand that seeking help for mental health concerns can be challenging. That’s why we prioritize
                confidentiality and compassion in everything we do. Our welcoming and non-judgmental environment allows
                clients to feel safe and supported as they work towards recovery.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                {[
                  "Confidential care that respects each client’s privacy",
                  "A welcoming space designed to reduce stress and stigma",
                  "Compassionate staff who listen without judgment",
                  "Focus on emotional safety throughout the recovery process",
                  "Hope and empowerment through recovery",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="group flex items-start space-x-3 p-2 rounded-lg hover:bg-white/50 transition-all duration-300"
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <div className="w-6 h-6  rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-4 w-4 text-[#3b97d0] transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base font-medium group-hover:text-gray-900 transition-colors">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                to="/success-stories"
                className="group bg-gradient-to-r from-red-600 via-red-700 to-red-500 hover:bg-gradient-to-r hover:from-red-600 hover:via-red-700 hover:to-red-500 text-white font-bold py-3 px-6 rounded-xl inline-flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                aria-label="Read Success Stories"
              >
                <span>Read Success Stories</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="gsap-slide-right h-full">
              <div className="relative group w-full h-full">
                <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl h-full">
                  <img
                    src="https://images.pexels.com/photos/8460371/pexels-photo-8460371.jpeg"
                    alt="Patient success in MAT program"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3b97d0]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#3b97d0]/20 to-blue-400/20 rounded-full animate-pulse"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-white/50 to-gray-200/50 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-xs font-bold text-[#3b97d0]">Success Stories</p>
                  <p className="text-xs text-gray-600">Real Recoveries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medications Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 animate-on-scroll overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="gsap-slide-up text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#3b97d0] tracking-tight relative">
              FDA-Approved MAT Medications
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#3b97d0] rounded-full"></div>
            </h2>
            <p className="gsap-slide-up text-base sm:text-lg text-gray-700 leading-relaxed font-medium max-w-3xl mx-auto">
              We offer all FDA-approved medications for opioid use disorder treatment, ensuring you receive the most
              appropriate medication for your specific needs.
            </p>
          </div>
          <div className="space-y-8">
            {medications.map((medication, index) => (
              <div
                key={index}
                className="gsap-stagger group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-2xl hover:border-blue-200/50 transition-all duration-500 p-6 sm:p-8"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50/30 via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
                  <div className="lg:col-span-2">
                    <h3 className="text-xl sm:text-2xl font-heading font-semibold text-gray-900 mb-4 group-hover:text-[#3b97d0] transition-colors duration-300">{medication.name}</h3>
                    <p className="text-gray-700 text-sm sm:text-base font-medium leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{medication.description}</p>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {medication.benefits.map((benefit, benefitIndex) => (
                        <li
                          key={benefitIndex}
                          className="group/item flex items-start space-x-2 text-sm text-gray-700 transition-all duration-300 hover:transform hover:translate-x-2"
                          style={{ transitionDelay: `${benefitIndex * 80}ms` }}
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-br from-[#3b97d0] to-blue-600 rounded-full mt-2 transition-all duration-300 group-hover/item:scale-150 group-hover/item:shadow-md shadow-blue-500/50"></div>
                          <span className="font-medium group-hover/item:text-gray-900 transition-colors duration-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Components Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/20 to-white animate-on-scroll overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="gsap-slide-up text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#3b97d0] tracking-tight relative">
              Comprehensive Program Components
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#3b97d0] rounded-full"></div>
            </h2>
            <p className="gsap-slide-up text-base sm:text-lg text-gray-700 leading-relaxed font-medium max-w-3xl mx-auto">
              Our MAT program combines medication management with comprehensive support services to address all aspects
              of recovery and wellness.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {programComponents.map((component, index) => (
              <div
                key={index}
                className="gsap-stagger group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-2xl hover:border-blue-200/50 transition-all duration-500 p-6 text-center"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50/30 via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16  rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                    <component.icon className="h-6 w-6 sm:h-8 sm:w-8 text-[#3b97d0]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-semibold text-gray-900 mb-3 group-hover:text-[#3b97d0] transition-colors duration-300">{component.title}</h3>
                  <p className="text-gray-700 text-sm sm:text-base font-medium leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{component.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Phases Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 animate-on-scroll overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="gsap-slide-up text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#3b97d0] tracking-tight relative">
              Treatment Phases
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#3b97d0] rounded-full"></div>
            </h2>
            <p className="gsap-slide-up text-base sm:text-lg text-gray-700 leading-relaxed font-medium max-w-3xl mx-auto">
              Our structured approach ensures safe, effective treatment progression tailored to your individual recovery
              timeline and needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {treatmentPhases.map((phase, index) => (
              <div
                key={index}
                className="gsap-stagger group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-2xl hover:border-blue-200/50 transition-all duration-500 p-6"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50/30 via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#3b97d0]/80 to-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-base sm:text-lg font-bold transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                    {index + 1}
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-semibold text-gray-900 mb-2 group-hover:text-[#3b97d0] transition-colors duration-300">{phase.phase}</h3>
                  <p className="text-[#3b97d0] font-medium text-sm sm:text-base">{phase.duration}</p>
                  <p className="text-gray-700 text-sm sm:text-base font-medium mb-4 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{phase.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-3">Treatment Goals:</h4>
                    <ul className="space-y-2">
                      {phase.goals.map((goal, goalIndex) => (
                        <li
                          key={goalIndex}
                          className="group/item flex items-start space-x-2 text-xs sm:text-sm text-gray-700 transition-all duration-300 hover:transform hover:translate-x-2"
                          style={{ transitionDelay: `${goalIndex * 80}ms` }}
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-br from-[#3b97d0] to-blue-600 rounded-full mt-2 transition-all duration-300 group-hover/item:scale-150 group-hover/item:shadow-md shadow-blue-500/50"></div>
                          <span className="font-medium group-hover/item:text-gray-900 transition-colors duration-300">{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/20 to-white animate-on-scroll overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="gsap-slide-left space-y-6 flex flex-col h-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#3b97d0] tracking-tight leading-tight relative">
                MAT Program Eligibility
                <div className="mt-2 w-20 h-1 bg-[#3b97d0] rounded-full"></div>
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                Our MAT program is designed for individuals with opioid use disorder who are committed to recovery and
                willing to participate in comprehensive treatment including both medication management and counseling
                services.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 col-span-full">Eligibility Criteria:</h3>
                {eligibilityCriteria.map((criteria, index) => (
                  <div
                    key={index}
                    className="group flex items-start space-x-3 p-2 rounded-lg hover:bg-white/50 transition-all duration-300"
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <div className="w-6 h-6  rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-4 w-4 text-[#3b97d0] transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base font-medium group-hover:text-gray-900 transition-colors">
                      {criteria}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact-us"
                className="group bg-gradient-to-r from-red-600 via-red-700 to-red-500 hover:bg-gradient-to-r hover:from-red-600 hover:via-red-700 hover:to-red-500 text-white font-bold py-3 px-6 rounded-xl inline-flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                aria-label="Schedule Assessment"
              >
                <span>Schedule Assessment</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="gsap-slide-right h-full">
              <div className="relative group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-2xl hover:border-blue-200/50 transition-all duration-500 p-6 sm:p-8 h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50/30 via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />
                    <h3 className="text-xl sm:text-2xl font-heading font-semibold text-gray-900 group-hover:text-[#3b97d0] transition-colors duration-300">Important Information</h3>
                  </div>
                  <div className="space-y-4 text-gray-700 text-sm sm:text-base font-medium group-hover:text-gray-900 transition-colors duration-300">
                    <p>
                      <strong>Medical Supervision Required:</strong> All MAT medications must be prescribed and monitored
                      by qualified medical professionals.
                    </p>
                    <p>
                      <strong>Commitment to Treatment:</strong> Success in MAT requires active participation in both
                      medication management and counseling components.
                    </p>
                    <p>
                      <strong>Individual Assessment:</strong> Each patient receives a comprehensive evaluation to
                      determine the most appropriate medication and treatment approach.
                    </p>
                    <p>
                      <strong>Ongoing Support:</strong> Our team provides continuous support throughout your treatment
                      journey with regular check-ins and adjustments as needed.
                    </p>
                  </div>
                  <div className="mt-6 p-4 bg-gradient-to-br from-[#3b97d0]/10 to-blue-100/10 rounded-lg transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#3b97d0]/20 group-hover:to-blue-100/20">
                    <p className="text-xs sm:text-sm text-[#3b97d0] font-medium">
                      <strong>Questions about MAT?</strong> Contact our team to discuss your specific situation and learn
                      more about how our program can support your recovery journey.
                    </p>
                  </div>
                </div>
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
              Ready to Start Your MAT Journey?
            </h2>
            <p className="text-lg md:text-xl mb-10 text-blue-100 leading-relaxed font-light">
              Take the first step towards recovery with our comprehensive Medication-Assisted Treatment program. Our
              experienced team is here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact-us"
                className="group bg-gradient-to-r from-red-600 via-red-700 to-red-500 hover:bg-gradient-to-r hover:from-red-600 hover:via-red-700 hover:to-red-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 inline-flex items-center justify-center space-x-2"
                aria-label="Schedule Consultation"
              >
                <span>Schedule Consultation</span>
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