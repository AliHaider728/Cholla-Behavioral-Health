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
    <div ref={ref} className="overflow-x-hidden">
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
      <section className="section-padding">
        <div className="container-custom max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="gsap-slide-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                What is Medication-Assisted Treatment?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                Medication-Assisted Treatment (MAT) is the use of FDA-approved medications, in combination with
                counseling and behavioral therapies, to provide a "whole-patient" approach to the treatment of substance
                use disorders.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                MAT has been proven to be clinically effective and significantly reduce the need for inpatient
                detoxification services for these individuals. It also increases retention in treatment programs and
                reduces illicit opioid use and opioid-related overdose deaths.
              </p>
              <div className="space-y-4">
                {[
                  "FDA-approved medications proven safe and effective",
                  "Reduces cravings and withdrawal symptoms",
                  "Blocks euphoric effects of opioids",
                  "Improves treatment retention rates",
                  "Reduces risk of overdose and death",
                  "Supports return to normal daily activities",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="gsap-slide-right">
              <img
                src="https://images.pexels.com/photos/7659565/pexels-photo-7659565.jpeg"
                alt="MAT consultation with medical professional"
                className="rounded-xl shadow-lg w-full h-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of MAT Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="gsap-slide-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Welcome to Our Outpatient Behavioral Health Center
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                At Cholla Behavioral Health, we understand that addressing mental health and co-occurring disorders like
                substance abuse concerns requires comprehensive and personalized care. That’s why we’re proud to offer
                Medication Prescribing and Management as part of our outpatient services. This also helps us directly
                track and monitor medication indications that directly affect the patient outcomes giving us more insight
                and ability to improve a patient’s care.
              </p>
            </div>
            <div className="gsap-slide-right">
              <img
                src="https://chollabehavioralhealth.com/wp-content/uploads/2024/05/17169818-1.webp"
                alt="Patient in MAT consultation"
                className="rounded-xl shadow-lg w-full h-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section-padding">
        <div className="container-custom max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="gsap-slide-right order-2 lg:order-1">
              <img
                src="https://chollabehavioralhealth.com/wp-content/uploads/2024/05/17169818-2.webp"
                alt="MAT medical team"
                className="rounded-xl shadow-lg w-full h-auto max-w-full object-contain"
              />
            </div>
            <div className="gsap-slide-left order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Comprehensive Care
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                Our Medication Assisted Therapy program offers more than just medication. We provide comprehensive support
                and resources to help clients navigate their recovery journey successfully. From individual and group
                therapy sessions to educational workshops and peer support groups, we’re here to ensure our clients have
                the tools and support they need to thrive.
              </p>
              <div className="space-y-4">
                {[
                  "Individual and group therapy sessions for emotional support",
                  "Peer-led groups to build connection and reduce isolation",
                  "Educational workshops focused on recovery and life skills",
                  "Personalized treatment plans tailored to each client’s goals",
                  "Compassionate guidance through every stage of recovery",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">{benefit}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact-us" className="btn-primary inline-flex items-center space-x-2 mt-6">
                <span>Connect With Our Team</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="gsap-slide-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Confidentiality and Compassion
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                We understand that seeking help for mental health concerns can be challenging. That’s why we prioritize
                confidentiality and compassion in everything we do. Our welcoming and non-judgmental environment allows
                clients to feel safe and supported as they work towards recovery.
              </p>
              <div className="space-y-4">
                {[
                  "Confidential care that respects each client’s privacy",
                  "A welcoming space designed to reduce stress and stigma",
                  "Compassionate staff who listen without judgment",
                  "Focus on emotional safety throughout the recovery process",
                  "Hope and empowerment through recovery",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">{benefit}</span>
                  </div>
                ))}
              </div>
              <Link to="/success-stories" className="btn-primary inline-flex items-center space-x-2 mt-6">
                <span>Read Success Stories</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="gsap-slide-right">
              <img
                src="https://chollabehavioralhealth.com/wp-content/uploads/2024/05/17169818-3.webp"
                alt="Patient success in MAT program"
                className="rounded-xl shadow-lg w-full h-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Medications Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="gsap-slide-up text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              FDA-Approved MAT Medications
            </h2>
            <p className="gsap-slide-up text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              We offer all FDA-approved medications for opioid use disorder treatment, ensuring you receive the most
              appropriate medication for your specific needs.
            </p>
          </div>
          <div className="space-y-8">
            {medications.map((medication, index) => (
              <div key={index} className="gsap-stagger bg-white rounded-xl shadow-lg p-6 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-xl sm:text-2xl bathed font-semibold text-gray-900 mb-4">{medication.name}</h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">{medication.description}</p>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {medication.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                          <span>{benefit}</span>
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
      <section className="section-padding">
        <div className="container-custom max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="gsap-slide-up text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Comprehensive Program Components
            </h2>
            <p className="gsap-slide-up text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Our MAT program combines medication management with comprehensive support services to address all aspects
              of recovery and wellness.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {programComponents.map((component, index) => (
              <div key={index} className="gsap-stagger bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <component.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-semibold text-gray-900 mb-3">{component.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Phases Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="gsap-slide-up text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Treatment Phases
            </h2>
            <p className="gsap-slide-up text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures safe, effective treatment progression tailored to your individual recovery
              timeline and needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {treatmentPhases.map((phase, index) => (
              <div key={index} className="gsap-stagger bg-white rounded-xl shadow-lg p-6">
                <div className="text-center mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-base sm:text-lg font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-semibold text-gray-900 mb-2">{phase.phase}</h3>
                  <p className="text-primary-600 font-medium text-sm sm:text-base">{phase.duration}</p>
                </div>
                <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">{phase.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-3">Treatment Goals:</h4>
                  <ul className="space-y-2">
                    {phase.goals.map((goal, goalIndex) => (
                      <li key={goalIndex} className="flex items-start space-x-2 text-xs sm:text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="section-padding">
        <div className="container-custom max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="gsap-slide-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                MAT Program Eligibility
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                Our MAT program is designed for individuals with opioid use disorder who are committed to recovery and
                willing to participate in comprehensive treatment including both medication management and counseling
                services.
              </p>
              <div className="space-y-4 mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Eligibility Criteria:</h3>
                {eligibilityCriteria.map((criteria, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">{criteria}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact-us" className="btn-primary inline-flex items-center space-x-2">
                <span>Schedule Assessment</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="gsap-slide-right">
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />
                  <h3 className="text-xl sm:text-2xl font-heading font-semibold text-gray-900">Important Information</h3>
                </div>
                <div className="space-y-4 text-gray-600 text-sm sm:text-base">
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
                <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                  <p className="text-xs sm:text-sm text-primary-800">
                    <strong>Questions about MAT?</strong> Contact our team to discuss your specific situation and learn
                    more about how our program can support your recovery journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gsap-slide-up max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4">Ready to Start Your MAT Journey?</h2>
            <p className="text-base sm:text-xl mb-8 text-primary-100">
              Take the first step towards recovery with our comprehensive Medication-Assisted Treatment program. Our
              experienced team is here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact-us"
                className="bg-white text-primary-600 hover:bg-primary-50 font-bold py-3 sm:py-4 px-6 sm:px-8  rounded-lg transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Schedule Consultation</span>
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