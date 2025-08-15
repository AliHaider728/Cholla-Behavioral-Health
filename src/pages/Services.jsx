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
  Sparkles,
  Target,
  Award,
  Zap,
  Star,
  BookOpen,
  Headphones,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Hero from "../components/Hero";

export default function Services() {
  const ref = useGSAP();

  const mainServices = [
    {
      title: "Medication Prescribing and Management",
      description:
        "Comprehensive psychiatric medication services including MAT (Medication-Assisted Treatment) with ongoing monitoring by our doctorate-level clinicians for optimal treatment outcomes.",
      icon: Stethoscope,
      href: "/mat-med-management",
      image:
        "https://images.pexels.com/photos/3957986/pexels-photo-3957986.jpeg",
      features: [
        "Psychiatric Medication Management",
        "MAT (Medication-Assisted Treatment)",
        "Comprehensive Medication Reviews",
        "Side Effect Monitoring & Adjustment",
        "Laboratory Services Integration",
        "Personalized Dosing & Treatment Plans",
      ],
    },
    {
      title: "PHP • IOP • OP",
      description:
        "Complete continuum of outpatient care from Partial Hospitalization Programs (PHP) to Intensive Outpatient Programs (IOP) to standard Outpatient services, designed to fit your recovery needs.",
      icon: Users,
      href: "/outpatient-levels-of-care",
      image:
        "https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg",
      features: [
        "Partial Hospitalization Program (PHP)",
        "Intensive Outpatient Program (IOP)",
        "Standard Outpatient Services",
        "Group & Individual Therapy",
        "Flexible Scheduling Options",
        "Comprehensive Care Coordination",
      ],
    },
    {
      title: "ADHD Concentration Program",
      description:
        "Specialized comprehensive treatment program for ADHD and attention disorders, combining evidence-based therapies with thorough assessment and skill development.",
      icon: Brain,
      href: "/concentration-acceleration-program",
      image:
        "https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg",
      features: [
        "Comprehensive ADHD Assessment",
        "Concentration Enhancement Training",
        "Behavioral Management Strategies",
        "Medication Management",
        "Cognitive Skills Development",
        "Family Education & Support",
      ],
    },
    {
      title: "Individual Services",
      description:
        "Personalized one-on-one therapeutic services with doctorate-level clinicians providing comprehensive biopsychosocial assessments and individualized treatment planning.",
      icon: UserCheck,
      href: "/IndividualServices",
      image:
        "https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg",
      features: [
        "Comprehensive Biopsychosocial Assessment",
        "Individual Therapy Sessions",
        "Psychological Testing & Evaluation",
        "Diagnostic Assessment Services",
        "Personalized Treatment Planning",
        "Client-Centered Approach",
      ],
    },
  ];

  const additionalServices = [
    {
      title: "Physical Health & Wellness",
      description:
        "Integrated physical health services bridging medical and mental well-being through comprehensive health assessments and wellness programs.",
      icon: Activity,
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&h=200&fit=crop&auto=format&q=80",
      features: [
        "Physical Health Assessments",
        "Laboratory Services",
        "Wellness Program Integration",
        "Medical-Mental Health Coordination",
        "Holistic Health Approach",
        "Preventive Care Services",
      ],
    },
    {
      title: "Group Therapy Programs",
      description:
        "Evidence-based group therapy sessions fostering peer support and shared recovery experiences in safe, therapeutic environments.",
      icon: Users,
      image:
        "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=300&h=200&fit=crop&auto=format&q=80",
      features: [
        "Peer Support Networks",
        "Evidence-Based Curricula",
        "Professional Group Facilitation",
        "Specialized Treatment Groups",
        "Safe Therapeutic Environment",
        "Community Building Focus",
      ],
    },
    {
      title: "Reintegration & Connection",
      description:
        "Social health services focused on community reintegration, case management, and building strong support networks for sustained wellness.",
      icon: Heart,
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=300&h=200&fit=crop&auto=format&q=80",
      features: [
        "Community Reintegration Support",
        "Case Management Services",
        "Social Connection Programs",
        "Support Network Development",
        "Long-term Wellness Planning",
        "Community Resource Connection",
      ],
    },
    {
      title: "Co-Occurring Disorders",
      description:
        "Specialized integrated treatment for individuals with dual diagnosis, addressing both mental health and substance use disorders simultaneously.",
      icon: Shield,
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=200&fit=crop&auto=format&q=80",
      features: [
        "Dual Diagnosis Treatment",
        "Integrated Care Approach",
        "Mental Health & Addiction Focus",
        "Comprehensive Assessment",
        "Evidence-Based Interventions",
        "Multidisciplinary Team Care",
      ],
    },
    {
      title: "Family & Support Education",
      description:
        "Educational services for loved ones and support networks to foster understanding of mental health and addiction complexities.",
      icon: BookOpen,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop&auto=format&q=80",
      features: [
        "Family Education Programs",
        "Support Network Training",
        "Mental Health Understanding",
        "Addiction Education",
        "Practical Tools & Strategies",
        "Long-term Support Planning",
      ],
    },
    {
      title: "Crisis Support Services",
      description:
        "Immediate support and crisis intervention services for mental health emergencies with rapid response and stabilization.",
      icon: Phone,
      image:
        "https://images.unsplash.com/photo-1584467735871-8dd4827c0d46?w=300&h=200&fit=crop&auto=format&q=80",
      features: [
        "Crisis Intervention Services",
        "Emergency Assessment",
        "Rapid Response Support",
        "Crisis Stabilization",
        "Safety Planning",
        "Immediate Resource Connection",
      ],
    },
  ];

  const treatmentApproaches = [
    {
      name: "Collaborative Care Model",
      description:
        "Integrated approach combining behavioral health, physical health, and social support services for comprehensive care.",
      icon: Users,
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      name: "Evidence-Based Treatment",
      description:
        "Utilizing proven therapeutic methods and evidence-based curricula for optimal treatment outcomes and recovery success.",
      icon: Star,
      gradient: "from-purple-500 to-pink-400",
    },
    {
      name: "Comprehensive Assessment",
      description:
        "Thorough biopsychosocial and diagnostic assessments conducted by doctorate-level clinicians with psychological testing.",
      icon: Target,
      gradient: "from-green-500 to-emerald-400",
    },
    {
      name: "Trauma-Informed Care",
      description:
        "Treatment approach that recognizes and responds to the impact of traumatic stress with compassionate, safe care.",
      icon: Shield,
      gradient: "from-orange-500 to-yellow-400",
    },
    {
      name: "Multidisciplinary Team",
      description:
        "Team of doctorate-level clinicians, medical professionals, and specialists working together for your care.",
      icon: Award,
      gradient: "from-red-500 to-pink-400",
    },
    {
      name: "Personalized Treatment",
      description:
        "Individualized treatment plans tailored to your unique strengths, needs, and barriers to recovery and wellness.",
      icon: Sparkles,
      gradient: "from-indigo-500 to-purple-400",
    },
  ];

  const chollaDifference = [
    {
      title: "Doctorate-Level Clinicians",
      description:
        "Our team consists of highly trained doctorate-level clinicians with extensive experience in diagnostics and treatment.",
      icon: Award,
    },
    {
      title: "Lifelong Recovery Approach",
      description:
        "We recognize recovery as a lifelong journey requiring continuous support, not rigid time-framed programs.",
      icon: Heart,
    },
    {
      title: "Adaptable Treatment Options",
      description:
        "Flexible treatment that empowers you to dictate your pace while receiving necessary assistance and support.",
      icon: Zap,
    },
    {
      title: "Comprehensive Care",
      description:
        "Addressing mental health, physical health, medications, laboratory services, and social/community services.",
      icon: Shield,
    },
  ];

  return (
    <div ref={ref}>
      {/* Hero Section */}
      <Hero
        title="Comprehensive Behavioral Health Services"
        subtitle="You Deserve To Be Well"
        description="We are bridging the gap between medicine and mental well-being by prioritizing a collaborative care model between behavioral health, physical health, and social support services"
        primaryCTA={{
          text: "Call Now: (602) 555-1234",
          href: "tel:6025551234",
        }}
        secondaryCTA={{ text: "Get Assessment", href: "/contact-us" }}
        backgroundImage="/placeholder.svg?height=600&width=1200"
      />

      {/* Main Services Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#3b97d0] to-blue-300 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-cyan-400 to-[#3b97d0] rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-400 to-[#3b97d0] rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#3b97d0] to-blue-600 rounded-full mb-6 shadow-lg">
              <Stethoscope className="h-10 w-10 text-white" />
            </div>
            <h2 className="gsap-slide-up text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Core Treatment Programs
            </h2>
            <p className="gsap-slide-up text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive, evidence-based treatment programs that address the
              physical, mental, emotional, and spiritual dimensions of health
              through our collaborative care model.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                {/* Service Image */}
                <div className="relative h-48 md:h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full  object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[#3b97d0] transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-20">
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-[#3b97d0] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#3b97d0] rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button - Fixed with proper z-index and pointer events */}
                  <Link
                    to={service.href}
                    aria-label={`Learn more about ${service.title}`}
                    className="relative z-30 inline-flex items-center space-x-2 bg-gradient-to-r from-[#e94848] to-red-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-[#3b97d0] transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Hover Border Effect - moved to not interfere with button */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#3b97d0] rounded-2xl transition-colors duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Cholla Different */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50/30 relative">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#3b97d0] to-cyan-500 rounded-full mb-6 shadow-lg">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h2 className="gsap-slide-up text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              What Makes Cholla Different
            </h2>
            <p className="gsap-slide-up text-lg text-gray-600 max-w-3xl mx-auto">
              Our unique approach to behavioral health sets us apart, focusing
              on comprehensive, collaborative care that addresses all dimensions
              of wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {chollaDifference.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#3b97d0] to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2 group-hover:text-[#3b97d0] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="section-padding relative">
        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#3b97d0]/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-40 right-20 w-40 h-40 bg-blue-400/10 rounded-full blur-xl animate-float delay-1000"></div>
          <div className="absolute top-1/3 right-10 w-24 h-24 bg-cyan-400/10 rounded-full blur-xl animate-float delay-2000"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#3b97d0] to-cyan-500 rounded-full mb-6 shadow-lg">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h2 className="gsap-slide-up text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Comprehensive Support Services
            </h2>
            <p className="gsap-slide-up text-lg text-gray-600 max-w-3xl mx-auto">
              Our multidisciplinary team provides comprehensive support services
              to enhance your treatment experience and ensure continuous support
              throughout your journey to wellness and recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#3b97d0] to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
                </div>

                {/* Service Image */}
                <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3b97d0]/20 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md">
                    <service.icon className="h-5 w-5 text-[#3b97d0]" />
                  </div>
                </div>

                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-3 group-hover:text-[#3b97d0] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features Preview */}
                <div className="space-y-1">
                  {service.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-[#3b97d0] flex-shrink-0" />
                      <span className="text-xs text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 border border-transparent group-hover:border-[#3b97d0]/30 rounded-xl transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Approaches Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #3b97d0 1px, transparent 0)`,
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#3b97d0] to-blue-600 rounded-full mb-6 shadow-2xl">
              <Brain className="h-10 w-10 text-white" />
            </div>
            <h2 className="gsap-slide-up text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Treatment Philosophy
            </h2>
            <p className="gsap-slide-up text-lg text-gray-600 max-w-3xl mx-auto">
              Our approach combines evidence-based treatment methods with
              compassionate care, recognizing that recovery is a lifelong
              journey requiring comprehensive support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentApproaches.map((approach, index) => (
              <div
                key={index}
                className="gsap-stagger group relative bg-white rounded-2xl shadow-lg p-8 border-l-4 border-[#3b97d0] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${approach.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Icon */}
                <div className="relative z-10 mb-4">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${approach.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <approach.icon className="h-7 w-7 text-white" />
                  </div>
                </div>

                <h3 className="relative z-10 text-xl font-heading font-semibold text-gray-900 mb-3 group-hover:text-[#3b97d0] transition-colors duration-300">
                  {approach.name}
                </h3>
                <p className="relative z-10 text-gray-600 leading-relaxed">
                  {approach.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#3b97d0]/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-br from-[#3b97d0]/5 to-blue-50 relative overflow-hidden">
        {/* Animated Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-1/4 w-2 h-2 bg-[#3b97d0] rounded-full animate-ping"></div>
          <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-blue-400 rounded-full animate-ping delay-1000"></div>
          <div className="absolute top-1/2 left-10 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping delay-2000"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#3b97d0] to-blue-600 rounded-full mb-6 shadow-2xl">
              <Target className="h-10 w-10 text-white" />
            </div>
            <h2 className="gsap-slide-up text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Treatment Process
            </h2>
            <p className="gsap-slide-up text-lg text-gray-600 max-w-3xl mx-auto">
              A structured, comprehensive approach ensuring you receive the most
              effective treatment tailored to your individual strengths, needs,
              and barriers to recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Comprehensive Assessment",
                description:
                  "Thorough biopsychosocial and diagnostic assessment by doctorate-level clinicians with psychological testing.",
                icon: UserCheck,
              },
              {
                step: "02",
                title: "Personalized Planning",
                description:
                  "Individualized treatment plan developed based on your specific strengths, needs, and recovery goals.",
                icon: Brain,
              },
              {
                step: "03",
                title: "Multidisciplinary Treatment",
                description:
                  "Implementation of evidence-based therapies with ongoing monitoring by our collaborative care team.",
                icon: Activity,
              },
              {
                step: "04",
                title: "Continuous Support",
                description:
                  "Ongoing support and resources recognizing recovery as a lifelong journey requiring continuous care.",
                icon: Heart,
              },
            ].map((item, index) => (
              <div key={index} className="gsap-stagger text-center group">
                {/* Step Circle */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#3b97d0] to-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  {/* Icon Overlay */}
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#3b97d0] group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-5 w-5 text-[#3b97d0]" />
                  </div>
                  {/* Connection Line (except for last item) */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-[#3b97d0] to-transparent transform -translate-y-1/2"></div>
                  )}
                </div>

                {/* Content Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-white/20 group-hover:-translate-y-1">
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3 group-hover:text-[#3b97d0] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Payment Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 bg-[#3b97d0] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="gsap-slide-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#3b97d0] to-blue-600 rounded-full mb-6 shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Insurance & Payment Options
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that financial concerns should never be a barrier to
                receiving quality mental health and addiction treatment. We work
                with most major insurance providers and offer flexible payment
                options.
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
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#3b97d0] to-blue-500 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 group-hover:text-[#3b97d0] transition-colors duration-300 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact-us"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#3b97d0] to-blue-500 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-[#3b97d0] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Verify Your Insurance</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="gsap-slide-right">
              <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-2xl shadow-2xl p-8 border border-white/20 backdrop-blur-sm relative overflow-hidden">
                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#3b97d0]/10 to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#3b97d0] to-blue-600 rounded-lg flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-semibold text-gray-900">
                      Insurance Providers We Accept
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
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
                      <div
                        key={index}
                        className="flex items-center space-x-3 group"
                      >
                        <div className="w-3 h-3 bg-gradient-to-br from-[#3b97d0] to-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="group-hover:text-[#3b97d0] transition-colors duration-300">
                          {provider}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="p-6 bg-gradient-to-br from-[#3b97d0]/10 to-blue-50 rounded-xl border border-[#3b97d0]/20">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#3b97d0] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-800 font-medium mb-1">
                          <strong className="text-[#3b97d0]">
                            Don't see your insurance?
                          </strong>
                        </p>
                        <p className="text-sm text-gray-700">
                          Contact us to verify coverage and discuss payment
                          options. We're here to help make treatment accessible.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[#3b97d0] via-blue-600 to-blue-700 text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-transparent"></div>
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-float"></div>
          <div className="absolute bottom-32 right-1/3 w-6 h-6 bg-white/15 rounded-full animate-float delay-1000"></div>
          <div className="absolute top-1/2 right-20 w-3 h-3 bg-white/25 rounded-full animate-float delay-2000"></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <div className="gsap-slide-up max-w-4xl mx-auto">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8 shadow-2xl">
              <Heart className="h-10 w-10 text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Begin Your Journey to Wellness?
            </h2>
            <p className="text-xl mb-10 text-blue-100 leading-relaxed">
              Take the first step towards healing and recovery. Our
              compassionate team of doctorate-level clinicians is here to
              support you every step of the way with personalized, comprehensive
              care.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact-us"
                className="group relative bg-white text-[#3b97d0] hover:bg-blue-50 font-bold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center space-x-3 shadow-2xl hover:shadow-3xl transform hover:scale-105 overflow-hidden"
              >
                {/* Button Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10">Schedule Assessment</span>
                <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <a
                href="tel:6025551234"
                className="group relative border-2 border-white text-white hover:bg-white hover:text-[#3b97d0] font-bold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center space-x-3 shadow-lg hover:shadow-2xl transform hover:scale-105 overflow-hidden"
              >
                {/* Button Background Effect */}
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <Phone className="h-5 w-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">Call Now: (602) 555-1234</span>
              </a>
            </div>

            {/* Additional Info */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-blue-100 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>Comprehensive Assessment Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>Confidential Consultations</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>Insurance Verification</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float.delay-1000 {
          animation-delay: 1s;
        }

        .animate-float.delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
