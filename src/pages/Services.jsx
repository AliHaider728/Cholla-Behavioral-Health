import { useGSAP } from "../hooks/useGSAP";
import ServiceCard from "../components/ServiceCard";
 import {
  Stethoscope,
  Users,
  Brain,
  UserCheck,
  Phone,
  Heart,
  Shield,
  Activity,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Services() {
  const ref = useGSAP();

  const mainServices = [
    {
      title: "MAT Med-Management",
      description:
        "Comprehensive Medication-Assisted Treatment combining FDA-approved medications with counseling and behavioral therapies for opioid addiction recovery.",
      icon: Stethoscope,
      href: "/mat-med-management",
      features: [
        "Suboxone Treatment Programs",
        "Methadone Maintenance",
        "Medical Supervision & Monitoring",
        "Personalized Treatment Plans",
        "Counseling Integration",
        "Ongoing Medical Support",
      ],
    },
    {
      title: "Outpatient Levels of Care",
      description:
        "Flexible treatment programs designed to accommodate your schedule while providing comprehensive mental health and addiction treatment services.",
      icon: Users,
      href: "/outpatient-levels-of-care",
      features: [
        "Individual Therapy Sessions",
        "Group Counseling Programs",
        "Family Therapy Services",
        "Intensive Outpatient Programs (IOP)",
        "Partial Hospitalization Programs (PHP)",
        "Flexible Scheduling Options",
      ],
    },
    {
      title: "Concentration Acceleration Program",
      description:
        "Intensive treatment program focused on rapid stabilization and comprehensive skill development for sustainable long-term recovery.",
      icon: Brain,
      href: "/concentration-acceleration-program",
      features: [
        "Intensive Daily Treatment",
        "Cognitive Behavioral Therapy",
        "Skill Development Workshops",
        "Rapid Stabilization Techniques",
        "Evidence-Based Interventions",
        "Accelerated Recovery Timeline",
      ],
    },
  ];

  const additionalServices = [
    {
      title: "Individual Therapy",
      description:
        "One-on-one therapeutic sessions with licensed mental health professionals specializing in addiction and co-occurring disorders.",
      icon: UserCheck,
      features: [
        "Licensed Clinical Therapists",
        "Trauma-Informed Care",
        "Cognitive Behavioral Therapy (CBT)",
        "Dialectical Behavior Therapy (DBT)",
        "Motivational Interviewing",
        "Personalized Treatment Approach",
      ],
    },
    {
      title: "Group Therapy",
      description:
        "Peer support groups facilitated by experienced counselors in a safe, supportive, and confidential environment.",
      icon: Users,
      features: [
        "Peer Support Networks",
        "Shared Recovery Experiences",
        "Professional Group Facilitation",
        "Various Specialized Groups",
        "Safe & Confidential Environment",
        "Ongoing Community Support",
      ],
    },
    {
      title: "Crisis Intervention",
      description:
        "24/7 crisis support and emergency intervention services for immediate mental health and addiction emergencies.",
      icon: Phone,
      features: [
        "24/7 Crisis Hotline",
        "Immediate Response Team",
        "Crisis Stabilization Services",
        "Emergency Assessment",
        "Safety Planning",
        "Rapid Intervention Protocols",
      ],
    },
    {
      title: "Family Therapy",
      description:
        "Comprehensive family counseling services to heal relationships and build strong support systems for recovery.",
      icon: Heart,
      features: [
        "Family Systems Therapy",
        "Relationship Counseling",
        "Communication Skills Training",
        "Boundary Setting Education",
        "Co-dependency Treatment",
        "Family Recovery Support",
      ],
    },
    {
      title: "Dual Diagnosis Treatment",
      description: "Specialized treatment for individuals with co-occurring mental health and substance use disorders.",
      icon: Shield,
      features: [
        "Integrated Treatment Approach",
        "Mental Health Assessment",
        "Medication Management",
        "Specialized Therapy Programs",
        "Coordinated Care Team",
        "Comprehensive Treatment Planning",
      ],
    },
    {
      title: "Aftercare Planning",
      description:
        "Comprehensive discharge planning and ongoing support services to maintain long-term recovery success.",
      icon: Activity,
      features: [
        "Relapse Prevention Planning",
        "Community Resource Connection",
        "Ongoing Support Groups",
        "Alumni Programs",
        "Continuing Care Coordination",
        "Long-term Recovery Support",
      ],
    },
  ];

  const treatmentApproaches = [
    {
      name: "Cognitive Behavioral Therapy (CBT)",
      description:
        "Evidence-based therapy focusing on identifying and changing negative thought patterns and behaviors.",
    },
    {
      name: "Dialectical Behavior Therapy (DBT)",
      description:
        "Skills-based therapy teaching emotional regulation, distress tolerance, and interpersonal effectiveness.",
    },
    {
      name: "Motivational Interviewing",
      description: "Client-centered counseling approach that enhances motivation for positive change.",
    },
    {
      name: "Trauma-Informed Care",
      description: "Treatment approach that recognizes and responds to the impact of traumatic stress.",
    },
    {
      name: "Medication-Assisted Treatment",
      description: "FDA-approved medications combined with counseling for comprehensive addiction treatment.",
    },
    {
      name: "Mindfulness-Based Interventions",
      description:
        "Therapeutic techniques incorporating mindfulness practices for stress reduction and emotional regulation.",
    },
  ];

  return (
    <div ref={ref}>
      {/* Hero Section */}
      <section className="relative bg-fixed bg-gradient-to-r from-blue-900 to-blue-500 text-white py-24 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cpath fill='%23ffffff' d='M400 0C179.086 0 0 179.086 0 400s179.086 400 400 400 400-179.086 400-400S620.914 0 400 0zm0 720c-176.731 0-320-143.269-320-320S223.269 80 400 80s320 143.269 320 320-143.269 320-320 320z'/%3E%3C/svg%3E")`,
          backgroundSize: '50%',
        }}></div>
        <div className="container mx-auto px-4">
          <h1 className="gsap-slide-up text-4xl md:text-5xl font-heading font-bold mb-4">
            Comprehensive Behavioral Health Services
          </h1>
          <p className="gsap-slide-up text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Evidence-based treatment programs designed to address mental health, addiction, and co-occurring disorders with compassionate, personalized care.
          </p>
    
        </div>
      </section>

      {/* Main Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="gsap-slide-up text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Core Treatment Programs
            </h2>
            <p className="gsap-slide-up text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized programs designed to provide comprehensive care for addiction recovery and mental health
              treatment with evidence-based approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {mainServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
                features={service.features}
                className="lg:col-span-1 hover:translate-y-[-7px]  duration-300 transition-all"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="gsap-slide-up text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Additional Support Services
            </h2>
            <p className="gsap-slide-up text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive support services to enhance your treatment experience and provide ongoing care throughout
              your recovery journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Approaches Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="gsap-slide-up text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Evidence-Based Treatment Approaches
            </h2>
            <p className="gsap-slide-up text-lg text-gray-600 max-w-3xl mx-auto">
              Our treatment programs utilize proven, evidence-based therapeutic approaches to ensure the highest quality
              of care and best outcomes for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentApproaches.map((approach, index) => (
              <div key={index} className="gsap-stagger bg-white rounded-xl shadow-lg p-6 border-l-4 border-primary-600">
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">{approach.name}</h3>
                <p className="text-gray-600 leading-relaxed">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="gsap-slide-up text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Treatment Process
            </h2>
            <p className="gsap-slide-up text-lg text-gray-600 max-w-3xl mx-auto">
              A structured, comprehensive approach to ensure you receive the most effective treatment tailored to your
              individual needs and circumstances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Assessment",
                description: "Comprehensive evaluation of your mental health, addiction history, and treatment needs.",
              },
              {
                step: "02",
                title: "Treatment Planning",
                description: "Personalized treatment plan developed based on your specific needs and goals.",
              },
              {
                step: "03",
                title: "Active Treatment",
                description: "Implementation of evidence-based therapies and interventions with ongoing monitoring.",
              },
              {
                step: "04",
                title: "Aftercare Support",
                description: "Continued support and resources to maintain long-term recovery and wellness.",
              },
            ].map((item, index) => (
              <div key={index} className="gsap-stagger text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Payment Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="gsap-slide-left">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Insurance & Payment Options
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that financial concerns should never be a barrier to receiving quality mental health and
                addiction treatment. We work with most major insurance providers and offer flexible payment options.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Most major insurance plans accepted",
                  "Verification of benefits assistance",
                  "Flexible payment plans available",
                  "Sliding scale fees for qualifying individuals",
                  "Financial counseling services",
                  "Transparent pricing with no hidden fees",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact-us" className="btn-primary inline-flex items-center space-x-2">
                <span>Verify Your Insurance</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="gsap-slide-right">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-6">
                  Insurance Providers We Accept
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  {[
                    "Aetna",
                    "Blue Cross Blue Shield",
                    "Cigna",
                    "UnitedHealthcare",
                    "Humana",
                    "Medicare",
                    "Medicaid",
                    "Tricare",
                    "Anthem",
                    "Kaiser Permanente",
                    "Molina Healthcare",
                    "And Many More",
                  ].map((provider, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-600 rounded-full" />
                      <span>{provider}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                  <p className="text-sm text-primary-800">
                    <strong>Don't see your insurance?</strong> Contact us to verify coverage and discuss payment
                    options. We're here to help make treatment accessible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <div className="gsap-slide-up max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to Begin Your Recovery Journey?</h2>
            <p className="text-xl mb-8 text-primary-100">
              Take the first step towards healing and recovery. Our compassionate team is here to support you every step
              of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact-us"
                className="bg-white text-primary-600 hover:bg-primary-50 font-bold py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:5551234567"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now: (555) 123-4567</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
