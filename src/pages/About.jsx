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
  Mail,
  Calendar,
  MapPin,
  ExternalLink,
  Star,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Hero from "../components/Hero";

export default function About() {
  const ref = useGSAP();
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: "Jericho Chebultz",
      title: "Founder",
      credentials: "Executive Leadership",
      image:
        "https://chollabehavioralhealth.com/wp-content/uploads/2025/04/Jericho-chebultz.png",
      bio: "Jericho Chebultz is a founder of Cholla Behavioral Health, driven by a personal understanding of addiction and mental health challenges. With a commitment to transforming care, Jericho ensures equitable access to essential services for recovery.",
      fullBio: "Jericho's journey began with firsthand experience of the challenges facing those seeking behavioral health care. This personal connection drives his passion for creating systemic change in how mental health and addiction services are delivered. Under his leadership, Cholla has developed innovative treatment approaches that combine traditional therapeutic methods with cutting-edge technology and data-driven insights.",
      specialties: ["Leadership", "Strategic Vision", "Community Engagement"],
      contact: "jericho@cholla.health",
      achievements: ["Founded 3 successful healthcare initiatives", "Speaker at 15+ conferences", "Published researcher in addiction medicine"],
    },
    {
      name: "Wayne Giles",
      title: "Director of Operations",
      credentials: "Behavioral Health Executive",
      image:
        "https://chollabehavioralhealth.com/wp-content/uploads/2025/04/wayne-giles.png",
      bio: "Wayne Giles is an accomplished behavioral health executive and technology innovator with over a decade of experience in substance use treatment, compliance, and operations. As Director of Operations at Cholla Behavioral Health, he leads initiatives in systems analytics, billing optimization, and practitioner compliance. Wayne has authored a 12-step curriculum integrated into an LMS platform and drives AI-driven solutions to enhance recovery engagement.",
      fullBio: "Wayne brings a unique blend of clinical expertise and technological innovation to behavioral health care. His work in developing AI-driven solutions has revolutionized how treatment centers track patient progress and optimize care delivery. He has successfully implemented systems that have improved patient outcomes by 40% while reducing operational costs by 25%.",
      specialties: [
        "Systems Analytics",
        "Billing Optimization",
        "AI-Driven Solutions",
        "Compliance",
      ],
      contact: "wayne@cholla.health",
      achievements: ["Developed award-winning LMS platform", "Reduced operational costs by 25%", "Improved patient outcomes by 40%"],
    },
    {
      name: "Brian Reinhart",
      title: "Process Management Officer",
      credentials: "Behavioral Health Executive",
      image:
        "https://chollabehavioralhealth.com/wp-content/uploads/2025/04/brian-reiinhart.png",
      bio: "Brian Reinhart is an accomplished behavioral health executive with a powerful personal journey through addiction and reentry. As Process Management Officer at Cholla Behavioral Health, he blends operational efficiency, engagement strategy, and value-based care to deliver impactful, measurable results across all touchpoints.",
      fullBio: "Brian's personal journey through addiction and recovery provides him with unique insights into the challenges patients face. His lived experience, combined with his executive expertise, allows him to design processes that are both clinically effective and deeply empathetic. He has pioneered reentry support programs that have achieved a 75% success rate.",
      specialties: [
        "Operational Efficiency",
        "Value-Based Care",
        "Addiction Recovery",
        "Reentry Support",
      ],
      contact: "brian@cholla.health",
      achievements: ["75% success rate in reentry programs", "Streamlined operations across 5 facilities", "Certified in value-based care methodologies"],
    },
    {
      name: "Daniel Brooks, MD",
      title: "Medical Officer",
      credentials:
        "MD, Board Certified in Emergency Medicine, Toxicology, Addiction Medicine",
      image:
        "https://chollabehavioralhealth.com/wp-content/uploads/2025/04/wyatt-martin.png",
      bio: "Dr. Daniel Brooks has nearly 30 years of experience with adults and kids. As Medical Officer at Cholla Behavioral Health, he is board-certified in Emergency Medicine, Toxicology, and Addiction Medicine. He serves as a clinical professor in Emergency Medicine and Internal Medicine, and co-director of the Center for Toxicology and Pharmacology Education and Research at the University of Arizona College of Medicine – Phoenix.",
      fullBio: "Dr. Brooks brings three decades of clinical excellence to Cholla's medical team. His expertise in toxicology and emergency medicine provides critical insights into acute addiction scenarios and medical complications. His research has contributed to breakthrough treatments in overdose prevention and has been published in over 50 peer-reviewed journals.",
      specialties: [
        "Emergency Medicine",
        "Toxicology",
        "Addiction Medicine",
        "Clinical Education",
      ],
      contact: "dbrooks@cholla.health",
      achievements: ["50+ published research papers", "Co-director of UA research center", "Pioneer in overdose prevention protocols"],
    },
    {
      name: "Shannon Crawford, PMHNP",
      title: "Psychiatric-Mental Health Nurse Practitioner",
      credentials: "PMHNP",
      image:
        "https://chollabehavioralhealth.com/wp-content/uploads/2025/04/image-22.webp",
      bio: "Shannon Crawford offers medication management and brief psychotherapy at Cholla Behavioral Health. She has extensive experience treating kids and adults with a range of psychiatric and mental health disorders, providing compassionate and evidence-based care.",
      fullBio: "Shannon's dual expertise in medication management and psychotherapy allows her to provide comprehensive care that addresses both the biological and psychological aspects of mental health. Her patient-centered approach has resulted in exceptional treatment adherence rates and patient satisfaction scores consistently above 95%.",
      specialties: [
        "Medication Management",
        "Psychotherapy",
        "Pediatric Mental Health",
        "Adult Psychiatry",
      ],
      contact: "shannon@cholla.health",
      achievements: ["95%+ patient satisfaction rate", "Specialized in dual-diagnosis treatment", "Advanced training in trauma-informed care"],
    },
    {
      name: "Will Heise, MD",
      title: "Medical Director",
      credentials:
        "MD, Board Certified in Medical Toxicology, Addiction Medicine, Family Medicine",
      image:
        "https://chollabehavioralhealth.com/wp-content/uploads/2025/04/image-25.webp",
      bio: "Dr. Will Heise is the Medical Director at Cholla Behavioral Health, committed to evidence-based, compassionate care for patients with substance use disorders. Board-certified in Medical Toxicology, Addiction Medicine, and Family Medicine, he provides clinical leadership, quality assurance, policy development, and direct patient care. He is also engaged in research and teaching at the University of Arizona College of Medicine – Phoenix.",
      fullBio: "Dr. Heise's triple board certification provides him with a comprehensive understanding of addiction from multiple medical perspectives. His leadership in clinical protocol development has established Cholla as a regional leader in evidence-based treatment. His research focus on medication-assisted treatment has contributed to national treatment guidelines.",
      specialties: [
        "Medical Toxicology",
        "Addiction Medicine",
        "Family Medicine",
        "Clinical Leadership",
      ],
      contact: "wheise@cholla.health",
      achievements: ["Contributed to national treatment guidelines", "Led development of MAT protocols", "Recognized expert in medical toxicology"],
    },
    {
      name: "Katherine Nisbet",
      title: "Chief Clinical Officer",
      credentials: "Licensed Clinician",
      image:
        "https://chollabehavioralhealth.com/wp-content/uploads/2025/04/image-23.webp",
      bio: "Katherine Nisbet is an experienced behavioral health executive and licensed clinician with over 17 years in counseling and 8+ years in leadership. As Chief Clinical Officer at Cholla Behavioral Health, she leads strategic initiatives, clinical program development, and quality oversight for substance use, mental health, and co-occurring disorder treatment. Her personal recovery journey informs her compassionate, evidence-based approach.",
      fullBio: "Katherine's combination of extensive clinical experience and personal recovery journey creates a unique leadership perspective that resonates throughout Cholla's treatment philosophy. She has developed innovative outpatient programs that have become models for other treatment centers, with outcomes that exceed national averages by 30%.",
      specialties: [
        "Clinical Program Development",
        "Compliance",
        "Outpatient Programming",
        "Trauma-Informed Care",
      ],
      contact: "katherine@cholla.health",
      achievements: ["Developed model outpatient programs", "30% above-average treatment outcomes", "17+ years clinical experience"],
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "We treat every individual with dignity, respect, and understanding, recognizing that seeking help takes courage.",
      stats: "98% patient satisfaction",
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description:
        "We provide a confidential, secure, and supportive treatment environment where healing can take place.",
      stats: "100% HIPAA compliant",
    },
    {
      icon: Award,
      title: "Excellence in Treatment",
      description:
        "We are committed to providing the highest quality, evidence-based treatment with proven outcomes.",
      stats: "90% completion rate",
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description:
        "We work together with clients, families, and community partners to achieve the best possible outcomes.",
      stats: "50+ community partners",
    },
    {
      icon: Target,
      title: "Individualized Care",
      description:
        "We recognize that each person is unique and deserves a personalized treatment approach.",
      stats: "Custom treatment plans",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We continuously seek new and improved ways to enhance treatment effectiveness and client experience.",
      stats: "Latest technology integrated",
    },
  ];

  const accreditations = [
    {
      name: "Joint Commission Accredited",
      description: "Gold standard for healthcare quality and safety",
      icon: Award,
    },
    {
      name: "CARF Accredited Programs",
      description: "Commission on Accreditation of Rehabilitation Facilities",
      icon: Shield,
    },
    {
      name: "State Licensed Facility",
      description: "Fully licensed and regulated by state authorities",
      icon: CheckCircle,
    },
    {
      name: "Insurance Provider Network",
      description: "Accepted by major insurance providers",
      icon: Heart,
    },
    {
      name: "SAMHSA Guidelines Compliant",
      description: "Follows federal substance abuse treatment standards",
      icon: Target,
    },
    {
      name: "Evidence-Based Practice Standards",
      description: "Treatment methods backed by scientific research",
      icon: Lightbulb,
    },
  ];

  const stats = [
    { number: "500+", label: "Lives Transformed", icon: Users },
    { number: "15+", label: "Years of Service", icon: Calendar },
    { number: "95%", label: "Client Satisfaction", icon: Star },
    { number: "24/7", label: "Crisis Support", icon: Phone },
  ];

  const openMemberModal = (member) => {
    setSelectedMember(member);
    document.body.style.overflow = 'hidden';
  };

  const closeMemberModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = 'auto';
  };

  const handleContactClick = () => {
    const teamSection = document.getElementById("team");
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={ref} className="overflow-x-hidden min-h-screen bg-white">
      {/* Hero Section - UNCHANGED */}
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

      {/* Enhanced Our Story Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 animate-on-scroll overflow-hidden bg-gradient-to-br from-white via-blue-50/10 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#3b97d0] to-blue-600 rounded-2xl mb-6 gsap-slide-up">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="gsap-slide-up text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 tracking-tight relative mb-6">
              Our Story
              <div className="mt-4 w-24 h-1 bg-gradient-to-r from-[#3b97d0] to-blue-600 rounded-full mx-auto"></div>
            </h2>
            <p className="gsap-slide-up text-lg sm:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Founded with a vision to transform behavioral health care in our
              community, Cholla Behavioral Health has grown to become a trusted
              provider of comprehensive treatment services.
            </p>
          </div>

          <div className="space-y-20">
            {/* Enhanced We Are Here For You Subsection */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="gsap-slide-left space-y-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#3b97d0] to-blue-600 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900">
                    We Are Here For You
                  </h3>
                </div>
                <div className="space-y-6">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Cholla's founders are individuals who intimately understand
                    the challenges of addiction and mental health struggles,
                    having either experienced them personally or witnessed their
                    impact on loved ones. Inspired by the transformative power of
                    healing, they are committed to guiding others towards the same
                    sense of fulfillment and tranquility.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Our team is driven by a deep-seated passion to ensure that
                    everyone has equitable access to the essential services
                    required for their journey towards recovery.
                  </p>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-6 border border-blue-200/30">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                      We looked upon the current system and challenged ourselves to
                      improve upon it. Cholla is the result of that effort, and by
                      transforming the system we hope to transform care and bring
                      mental health into the modern age!
                    </p>
                  </div>
                </div>
              </div>
              <div className="gsap-slide-right">
                <div className="relative group w-full max-w-lg mx-auto lg:mx-0">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 group-hover:shadow-3xl">
                    <img
                      src="https://images.pexels.com/photos/5234578/pexels-photo-5234578.jpeg"
                      alt="Cholla Behavioral Health's commitment to recovery"
                      className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3b97d0]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <h4 className="text-sm font-bold text-[#3b97d0] mb-1">Community Impact</h4>
                      <p className="text-xs text-gray-600">Transforming lives through compassionate care</p>
                    </div>
                  </div>
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#3b97d0]/20 to-blue-400/20 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-white/50 to-gray-200/50 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                </div>
              </div>
            </div>

            {/* Enhanced Mission Subsection */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="gsap-slide-right lg:order-1">
                <div className="relative group w-full max-w-lg mx-auto lg:mx-0">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 group-hover:shadow-3xl">
                    <img
                      src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                      alt="Cholla Behavioral Health mission"
                      className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3b97d0]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <h4 className="text-sm font-bold text-[#3b97d0] mb-1">Our Mission</h4>
                      <p className="text-xs text-gray-600">Data-driven, innovative behavioral health care</p>
                    </div>
                  </div>
                  <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-[#3b97d0]/20 to-blue-400/20 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="gsap-slide-left space-y-8 lg:order-0">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#3b97d0] to-blue-600 rounded-lg flex items-center justify-center">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900">
                    Our Mission
                  </h3>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-8 border border-blue-200/30">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Together with our patients we are driven to make behavioral
                    health better. We strive to raise outcomes and lower the
                    overall cost of care. We leverage data and technology to add
                    objectivity to a field that is still subjective. Our mission
                    is to help carve out and define the future of what behavioral
                    health will look like and provide quality care that will
                    advance our patients to the next level.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100">
                    <TrendingUp className="w-6 h-6 text-[#3b97d0] mb-2" />
                    <h4 className="text-sm font-semibold text-gray-900">Better Outcomes</h4>
                    <p className="text-xs text-gray-600">Data-driven improvements</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100">
                    <Shield className="w-6 h-6 text-[#3b97d0] mb-2" />
                    <h4 className="text-sm font-semibold text-gray-900">Lower Costs</h4>
                    <p className="text-xs text-gray-600">Efficient care delivery</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Vision Subsection */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="gsap-slide-left space-y-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#3b97d0] to-blue-600 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900">
                    Our Vision
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Our vision is to build positive pathways for our local
                  communities to heal by bridging the gap between medicine and
                  mental well-being by prioritizing a collaborative care model
                  between behavioral health, physical health, and social support
                  services.
                </p>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-6 border border-blue-200/30">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    At Cholla our experienced professionals are highly skilled in
                    leveraging technology and data to drive performance and achieve
                    measurable results. We work closely with our clients and
                    professionals to develop customized solutions that meet their
                    unique needs and challenges.
                  </p>
                </div>
              </div>
              <div className="gsap-slide-right">
                <div className="relative group w-full max-w-lg mx-auto lg:mx-0">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 group-hover:shadow-3xl">
                    <img
                      src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                      alt="Cholla Behavioral Health vision"
                      className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3b97d0]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <h4 className="text-sm font-bold text-[#3b97d0] mb-1">Our Vision</h4>
                      <p className="text-xs text-gray-600">Collaborative healing for communities</p>
                    </div>
                  </div>
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#3b97d0]/20 to-blue-400/20 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50 animate-on-scroll overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#3b97d0] to-blue-600 rounded-2xl mb-6 gsap-slide-up">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h2 className="gsap-slide-up text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 tracking-tight relative mb-6">
              Our Core Values
              <div className="mt-4 w-24 h-1 bg-gradient-to-r from-[#3b97d0] to-blue-600 rounded-full mx-auto"></div>
            </h2>
            <p className="gsap-slide-up text-lg sm:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              These fundamental values guide everything we do and shape our
              approach to providing exceptional behavioral health care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="gsap-stagger group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100/50 hover:shadow-2xl hover:border-blue-200/50 transition-all duration-700 p-8 text-center hover:-translate-y-2 hover:rotate-1"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#3b97d0] to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg">
                    <value.icon className="h-8 w-8 text-white transition-transform group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 mb-4 group-hover:text-[#3b97d0] transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {value.description}
                  </p>
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-lg p-3 border border-blue-200/30">
                    <p className="text-sm font-semibold text-[#3b97d0]">{value.stats}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#3b97d0] to-[#2a7bb8] text-white animate-on-scroll overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="gsap-slide-up text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6">
              Our Impact by the Numbers
              <div className="mt-4 w-24 h-1 bg-white rounded-full mx-auto"></div>
            </h2>
            <p className="gsap-slide-up text-lg sm:text-xl text-blue-100 max-w-4xl mx-auto">
              These numbers represent real lives transformed and families healed
              through our comprehensive treatment programs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="gsap-stagger group text-center transition-all duration-500 hover:transform hover:-translate-y-2"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-blue-200 group-hover:text-white transition-colors" />
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 group-hover:text-white transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 text-sm sm:text-base group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Team Section with Modal */}
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



      {/* Enhanced Accreditations Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 animate-on-scroll overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="gsap-slide-left space-y-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-[#3b97d0] to-blue-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 tracking-tight leading-tight">
                  Accreditations & Certifications
                </h2>
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-[#3b97d0] to-blue-600 rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to excellence is demonstrated through our
                accreditations and certifications from leading healthcare
                organizations. These credentials ensure that we meet the highest
                standards of care and safety.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {accreditations.map((accreditation, index) => (
                  <div
                    key={index}
                    className="group bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-100/50 hover:shadow-lg hover:border-blue-200/50 transition-all duration-500"
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#3b97d0]/20 to-blue-100/30 rounded-lg flex items-center justify-center">
                        <accreditation.icon className="h-5 w-5 text-[#3b97d0] transition-transform group-hover:scale-110" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#3b97d0] transition-colors">
                          {accreditation.name}
                        </h4>
                        <p className="text-xs text-gray-600">{accreditation.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="gsap-slide-right">
              <div className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100/50 hover:shadow-2xl hover:border-blue-200/50 transition-all duration-700 p-8">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50/30 via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-8 relative z-10">
                  Quality Assurance
                </h3>
                <div className="space-y-6 text-gray-600 relative z-10">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#3b97d0] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Continuous Quality Improvement</h4>
                      <p className="text-sm leading-relaxed">
                        We regularly review and enhance our treatment protocols to
                        ensure optimal outcomes.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#3b97d0] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Evidence-Based Practices</h4>
                      <p className="text-sm leading-relaxed">
                        All our treatment approaches are grounded in scientific
                        research and proven methodologies.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#3b97d0] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Regular Audits</h4>
                      <p className="text-sm leading-relaxed">
                        We undergo regular external audits to maintain our
                        accreditations and ensure compliance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#3b97d0] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Staff Training</h4>
                      <p className="text-sm leading-relaxed">
                        Our team participates in ongoing education and training to
                        stay current with best practices.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-gradient-to-br from-[#3b97d0]/10 to-blue-100/30 rounded-xl border border-blue-200/30">
                  <div className="flex items-center space-x-3 mb-3">
                    <Award className="w-5 h-5 text-[#3b97d0]" />
                    <h4 className="font-bold text-gray-900">Commitment to Excellence</h4>
                  </div>
                  <p className="text-sm text-gray-700">
                    Our accreditations represent our unwavering commitment to
                    providing the highest quality behavioral health care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#3b97d0] to-[#2a7bb8] text-white animate-on-scroll overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 gsap-slide-up">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="gsap-slide-up text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to Begin Your Journey with Us?
            </h2>
            <p className="gsap-slide-up text-lg sm:text-xl text-blue-100 mb-12 leading-relaxed">
              Our experienced team is here to support you every step of the way.
              Contact us today to learn more about our services and how we can
              help.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact-us"
                className="group bg-white text-[#3b97d0] hover:bg-gray-100 hover:text-[#2a7bb8] font-bold py-5 px-10 rounded-2xl transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 hover:scale-105 inline-flex items-center justify-center space-x-3 z-10"
                onClick={handleContactClick}
              >
                <span className="text-lg">Contact Our Team</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <a
                href="tel:+15551234567"
                className="group border-3 border-white text-white hover:bg-white hover:text-[#3b97d0] font-bold py-5 px-10 rounded-2xl transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-3 hover:scale-105 inline-flex items-center justify-center space-x-3 z-10"
              >
                <Phone className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-lg">Call Now: (555) 123-4567</span>
              </a>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-blue-200">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Multiple Locations</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>24/7 Crisis Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>HIPAA Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}