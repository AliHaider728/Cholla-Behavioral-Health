import { useGSAP } from "../hooks/useGSAP";
import {
  Heart,
  Users,
  Award,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  Target,
  Lightbulb,
} from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

export default function About() {
  const ref = useGSAP();

  const teamMembers = [
    {
      name: "Jericho Chebultz",
      title: "Founder",
      credentials: "Executive Leadership",
      image:
        "https://chollabehavioralhealth.com/wp-content/uploads/2025/04/Jericho-chebultz.png",
      bio: "Jericho Chebultz is a founder of Cholla Behavioral Health, driven by a personal understanding of addiction and mental health challenges. With a commitment to transforming care, Jericho ensures equitable access to essential services for recovery.",
      specialties: ["Leadership", "Strategic Vision", "Community Engagement"],
    },
    {
      name: "Wayne Giles",
      title: "Director of Operations",
      credentials: "Behavioral Health Executive",
      image:
        "https://chollabehavioralhealth.com/wp-content/uploads/2025/04/wayne-giles.png",
      bio: "Wayne Giles is an accomplished behavioral health executive and technology innovator with over a decade of experience in substance use treatment, compliance, and operations. As Director of Operations at Cholla Behavioral Health, he leads initiatives in systems analytics, billing optimization, and practitioner compliance. Wayne has authored a 12-step curriculum integrated into an LMS platform and drives AI-driven solutions to enhance recovery engagement.",
      specialties: [
        "Systems Analytics",
        "Billing Optimization",
        "AI-Driven Solutions",
        "Compliance",
      ],
    },
    {
      name: "Brian Reinhart",
      title: "Process Management Officer",
      credentials: "Behavioral Health Executive",
      image:
        "https://chollabehavioralhealth.com/wp-content/uploads/2025/04/brian-reiinhart.png",
      bio: "Brian Reinhart is an accomplished behavioral health executive with a powerful personal journey through addiction and reentry. As Process Management Officer at Cholla Behavioral Health, he blends operational efficiency, engagement strategy, and value-based care to deliver impactful, measurable results across all touchpoints.",
      specialties: [
        "Operational Efficiency",
        "Value-Based Care",
        "Addiction Recovery",
        "Reentry Support",
      ],
    },
    {
      name: "Daniel Brooks, MD",
      title: "Medical Officer",
      credentials:
        "MD, Board Certified in Emergency Medicine, Toxicology, Addiction Medicine",
      image:
        "https://chollabehavioralhealth.com/wp-content/uploads/2025/04/wyatt-martin.png",
      bio: "Dr. Daniel Brooks has nearly 30 years of experience with adults and kids. As Medical Officer at Cholla Behavioral Health, he is board-certified in Emergency Medicine, Toxicology, and Addiction Medicine. He serves as a clinical professor in Emergency Medicine and Internal Medicine, and co-director of the Center for Toxicology and Pharmacology Education and Research at the University of Arizona College of Medicine – Phoenix.",
      specialties: [
        "Emergency Medicine",
        "Toxicology",
        "Addiction Medicine",
        "Clinical Education",
      ],
    },
    {
      name: "Shannon Crawford, PMHNP",
      title: "Psychiatric-Mental Health Nurse Practitioner",
      credentials: "PMHNP",
      image:
        "https://chollabehavioralhealth.com/wp-content/uploads/2025/04/image-22.webp",
      bio: "Shannon Crawford offers medication management and brief psychotherapy at Cholla Behavioral Health. She has extensive experience treating kids and adults with a range of psychiatric and mental health disorders, providing compassionate and evidence-based care.",
      specialties: [
        "Medication Management",
        "Psychotherapy",
        "Pediatric Mental Health",
        "Adult Psychiatry",
      ],
    },
    {
      name: "Will Heise, MD",
      title: "Medical Director",
      credentials:
        "MD, Board Certified in Medical Toxicology, Addiction Medicine, Family Medicine",
      image:
        "https://chollabehavioralhealth.com/wp-content/uploads/2025/04/image-25.webp",
      bio: "Dr. Will Heise is the Medical Director at Cholla Behavioral Health, committed to evidence-based, compassionate care for patients with substance use disorders. Board-certified in Medical Toxicology, Addiction Medicine, and Family Medicine, he provides clinical leadership, quality assurance, policy development, and direct patient care. He is also engaged in research and teaching at the University of Arizona College of Medicine – Phoenix.",
      specialties: [
        "Medical Toxicology",
        "Addiction Medicine",
        "Family Medicine",
        "Clinical Leadership",
      ],
    },
    {
      name: "Katherine Nisbet",
      title: "Chief Clinical Officer",
      credentials: "Licensed Clinician",
      image:
        "https://chollabehavioralhealth.com/wp-content/uploads/2025/04/image-23.webp",
      bio: "Katherine Nisbet is an experienced behavioral health executive and licensed clinician with over 17 years in counseling and 8+ years in leadership. As Chief Clinical Officer at Cholla Behavioral Health, she leads strategic initiatives, clinical program development, and quality oversight for substance use, mental health, and co-occurring disorder treatment. Her personal recovery journey informs her compassionate, evidence-based approach.",
      specialties: [
        "Clinical Program Development",
        "Compliance",
        "Outpatient Programming",
        "Trauma-Informed Care",
      ],
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "We treat every individual with dignity, respect, and understanding, recognizing that seeking help takes courage.",
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description:
        "We provide a confidential, secure, and supportive treatment environment where healing can take place.",
    },
    {
      icon: Award,
      title: "Excellence in Treatment",
      description:
        "We are committed to providing the highest quality, evidence-based treatment with proven outcomes.",
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description:
        "We work together with clients, families, and community partners to achieve the best possible outcomes.",
    },
    {
      icon: Target,
      title: "Individualized Care",
      description:
        "We recognize that each person is unique and deserves a personalized treatment approach.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We continuously seek new and improved ways to enhance treatment effectiveness and client experience.",
    },
  ];

  const accreditations = [
    "Joint Commission Accredited",
    "CARF Accredited Programs",
    "State Licensed Facility",
    "Insurance Provider Network",
    "SAMHSA Guidelines Compliant",
    "Evidence-Based Practice Standards",
  ];

  const stats = [
    { number: "500+", label: "Lives Transformed" },
    { number: "15+", label: "Years of Service" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "24/7", label: "Crisis Support" },
  ];

  const handleContactClick = () => {
    console.log("Meet Our Team button clicked");
    const teamSection = document.getElementById("team");
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("Team section with id='team' not found");
    }
  };

  const handleCallClick = () => {
    console.log("Call Now button clicked");
  };

  return (
    <div ref={ref} className="overflow-x-hidden min-h-screen bg-white">
      {/* Hero Section */}
       <Hero
              title=" About Cholla Behavioral Health"
              subtitle=" Our Story, Mission & Team"
              description="Dedicated to providing compassionate, evidence-based mental health
            and addiction treatment services with a commitment to healing, hope,
            and recovery."
              primaryCTA={{ text: "Join Our Team", href: "/contact-us" }}
              secondaryCTA={{ text: "Call Now: (555) 123-4567", href: "tel:5551234567" }}
              backgroundImage="/placeholder.svg?height=600&width=1200"
            />

      {/* Our Story Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8   animate-on-scroll overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="gsap-slide-up text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#3b97d0] tracking-tight relative">
              Our Story
              <div className="mt-2 w-24 h-1 bg-[#3b97d0] rounded-full mx-auto"></div>
            </h2>
            <p className="gsap-slide-up text-base sm:text-lg text-gray-700 leading-relaxed font-medium max-w-3xl mx-auto">
              Founded with a vision to transform behavioral health care in our
              community, Cholla Behavioral Health has grown to become a trusted
              provider of comprehensive treatment services.
            </p>
          </div>

          <div className="space-y-12">
            {/* We Are Here For You Subsection */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="gsap-slide-left space-y-6">
                <h3 className="text-lg sm:text-xl font-semibold text-[#3b97d0] mb-3">
                  We Are Here For You
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                  Cholla’s founders are individuals who intimately understand
                  the challenges of addiction and mental health struggles,
                  having either experienced them personally or witnessed their
                  impact on loved ones. Inspired by the transformative power of
                  healing, they are committed to guiding others towards the same
                  sense of fulfillment and tranquility. Our team is driven by a
                  deep-seated passion to ensure that everyone has equitable
                  access to the essential services required for their journey
                  towards recovery.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                  We looked upon the current system and challenged ourselves to
                  improve upon it. Cholla is the result of that effort, and by
                  transforming the system we hope to transform care and bring
                  mental health into the modern age!
                </p>
              </div>
              <div className="gsap-slide-right">
                <div className="relative group w-full max-w-lg mx-auto lg:mx-0">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl">
                    <img
                      src="https://images.pexels.com/photos/5234578/pexels-photo-5234578.jpeg"
                      alt="Cholla Behavioral Health's commitment to recovery"
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
                    <p className="text-xs font-bold text-[#3b97d0]">Community Care</p>
                    <p className="text-xs text-gray-600">Transformative Healing</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Subsection */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="gsap-slide-right">
                <div className="relative group w-full max-w-lg mx-auto lg:mx-0">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl">
                    <img
                      src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                      alt="Cholla Behavioral Health mission"
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
                    <p className="text-xs font-bold text-[#3b97d0]">Our Mission</p>
                    <p className="text-xs text-gray-600">Innovative Care</p>
                  </div>
                </div>
              </div>
              <div className="gsap-slide-left space-y-6">
                <h4 className="text-base sm:text-lg font-semibold text-[#3b97d0] mb-2">
                  Mission
                </h4>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                  Together with our patients we are driven to make behavioral
                  health better. We strive to raise outcomes and lower the
                  overall cost of care. We leverage data and technology to add
                  objectivity to a field that is still subjective. Our mission
                  is to help carve out and define the future of what behavioral
                  health will look like and provide quality care that will
                  advance our patients to the next level.
                </p>
              </div>
            </div>

            {/* Vision Subsection */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="gsap-slide-left space-y-6">
                <h4 className="text-base sm:text-lg font-semibold text-[#3b97d0] mb-2">
                  Vision
                </h4>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                  Our vision is to build positive pathways for our local
                  communities to heal by bridging the gap between medicine and
                  mental well-being by prioritizing a collaborative care model
                  between behavioral health, physical health, and social support
                  services. At Cholla our experienced professionals are highly
                  skilled in leveraging technology and data to drive performance
                  and achieve measurable results. We work closely with our
                  clients and professionals to develop customized solutions that
                  meet their unique needs and challenges. At the core of our
                  approach is a dedication to building a positive, innovative
                  culture that fosters collaboration, creativity, and continuous
                  learning. We believe that our success is not only measured by
                  our ability to deliver results, but also by the positive
                  impact we have on our clients, employees, and the communities
                  we serve.
                </p>
              </div>
              <div className="gsap-slide-right">
                <div className="relative group w-full max-w-lg mx-auto lg:mx-0">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl">
                    <img
                      src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                      alt="Cholla Behavioral Health vision"
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
                    <p className="text-xs font-bold text-[#3b97d0]">Our Vision</p>
                    <p className="text-xs text-gray-600">Collaborative Healing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/20 to-white animate-on-scroll overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="gsap-slide-up text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#3b97d0] tracking-tight relative">
              Our Core Values
              <div className="mt-2 w-24 h-1 bg-[#3b97d0] rounded-full mx-auto"></div>
            </h2>
            <p className="gsap-slide-up text-base sm:text-lg text-gray-700 leading-relaxed font-medium max-w-3xl mx-auto">
              These fundamental values guide everything we do and shape our
              approach to providing exceptional behavioral health care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="gsap-stagger group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-2xl hover:border-blue-200/50 transition-all duration-500 p-6 text-center"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50/30 via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#3b97d0]/20 to-blue-100/30 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                    <value.icon className="h-7 w-7 text-[#3b97d0] transition-transform group-hover:scale-110" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-semibold text-gray-900 mb-3 group-hover:text-[#3b97d0] transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base font-medium leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#3b97d0] to-[#2a7bb8] text-white animate-on-scroll overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="gsap-slide-up text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Impact by the Numbers
              <div className="mt-2 w-24 h-1 bg-white rounded-full mx-auto"></div>
            </h2>
            <p className="gsap-slide-up text-base sm:text-lg text-blue-100 max-w-3xl mx-auto">
              These numbers represent real lives transformed and families healed
              through our comprehensive treatment programs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="gsap-stagger group text-center transition-all duration-300 hover:transform hover:-translate-y-1"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 group-hover:text-white/90 transition-colors">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-sm sm:text-base group-hover:text-white/90 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
       <section
        id="team"
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-green-200 to-blue-200 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 gsap-slide-up">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>

            <h2 className="gsap-slide-up text-3xl sm:text-4xl lg:text-5xl font-heading font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Meet Our Expert Team
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 gsap-slide-up"></div>

            <p className="gsap-slide-up text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our multidisciplinary team of licensed professionals brings
              decades of combined experience in behavioral health, addiction
              medicine, and mental health treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="gsap-stagger group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:rotate-1 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                <div className="relative overflow-hidden flex items-center justify-center h-56 sm:h-64 lg:h-72">
                  <img
                    src={
                      member.image || "/placeholder.svg?height=400&width=400"
                    }
                    alt={member.name}
                    className="h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Floating badge */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 delay-200">
              <span className="text-xs font-semibold text-blue-600">Expert</span>
            </div>
                </div>

                <div className="p-6 lg:p-8 relative z-10">
                  <div className="mb-4">
                    <h3 className="text-xl lg:text-2xl font-heading font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold text-base lg:text-lg mb-1">
                      {member.title}
                    </p>
                    <p className="text-sm text-gray-500 font-medium">
                      {member.credentials}
                    </p>
                  </div>

                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6 line-clamp-3">
                    {member.bio}
                  </p>

                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-2"></span>
                      Specialties
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <span
                          key={specialtyIndex}
                          className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 text-blue-700 text-xs font-medium rounded-full border border-blue-100 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover effect indicator */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-300">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16 lg:mt-20">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg max-w-2xl mx-auto gsap-slide-up">
              <h3 className="text-xl lg:text-2xl font-heading font-bold text-gray-900 mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-gray-600 mb-6">
                Our team is here to provide personalized care and support every
                step of the way.
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                Schedule a Consultation
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 animate-on-scroll overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="gsap-slide-left space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#3b97d0] tracking-tight leading-tight relative">
                Accreditations & Certifications
                <div className="mt-2 w-20 h-1 bg-[#3b97d0] rounded-full"></div>
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                Our commitment to excellence is demonstrated through our
                accreditations and certifications from leading healthcare
                organizations. These credentials ensure that we meet the highest
                standards of care and safety.
              </p>
              <div className="space-y-4">
                {accreditations.map((accreditation, index) => (
                  <div
                    key={index}
                    className="group flex items-start space-x-3 transition-all duration-500 ease-out hover:transform hover:translate-x-2"
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-[#3b97d0]/20 to-blue-100/30 rounded-full flex items-center justify-center mt-1">
                      <Award className="h-4 w-4 text-[#3b97d0] transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base font-medium group-hover:text-gray-900 transition-colors">
                      {accreditation}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="gsap-slide-right">
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-2xl hover:border-blue-200/50 transition-all duration-500 p-6 sm:p-8">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50/30 via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-gray-900 mb-6 relative z-10">
                  Quality Assurance
                </h3>
                <div className="space-y-4 text-gray-700 text-sm sm:text-base font-medium relative z-10">
                  <p>
                    <strong>Continuous Quality Improvement:</strong> We
                    regularly review and enhance our treatment protocols to
                    ensure optimal outcomes.
                  </p>
                  <p>
                    <strong>Evidence-Based Practices:</strong> All our treatment
                    approaches are grounded in scientific research and proven
                    methodologies.
                  </p>
                  <p>
                    <strong>Regular Audits:</strong> We undergo regular external
                    audits to maintain our accreditations and ensure compliance.
                  </p>
                  <p>
                    <strong>Staff Training:</strong> Our team participates in
                    ongoing education and training to stay current with best
                    practices.
                  </p>
                </div>
                <div className="mt-6 p-4 bg-gradient-to-br from-[#3b97d0]/20 to-blue-100/30 rounded-lg">
                  <p className="text-sm text-gray-700 font-medium">
                    <strong>Commitment to Excellence:</strong> Our
                    accreditations represent our unwavering commitment to
                    providing the highest quality behavioral health care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#3b97d0] to-[#2a7bb8] text-white animate-on-scroll overflow-hidden">
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
            <h2 className="gsap-slide-up text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Begin Your Journey with Us?
            </h2>
            <p className="gsap-slide-up text-base sm:text-xl text-blue-100 mb-8">
              Our experienced team is here to support you every step of the way.
              Contact us today to learn more about our services and how we can
              help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact-us"
                className="group bg-white text-[#3b97d0] hover:bg-gray-100 hover:text-[#2a7bb8] font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 inline-flex items-center justify-center space-x-2 z-10"
                onClick={handleContactClick}
              >
                <span>Contact Our Team</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+15551234567"
                className="group border-2 border-white text-white hover:bg-white hover:text-[#3b97d0] font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 inline-flex items-center justify-center space-x-2 z-10"
                onClick={handleCallClick}
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