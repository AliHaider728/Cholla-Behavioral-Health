import { useGSAP } from "../hooks/useGSAP";
import { Heart, Users, Award, Shield, CheckCircle, ArrowRight, Phone, Target, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const ref = useGSAP();

  const teamMembers = [
    {
      name: "Jericho Chebultz",
      title: "Founder",
      credentials: "Executive Leadership",
      image: "https://chollabehavioralhealth.com/wp-content/uploads/2025/04/Jericho-chebultz.png",
      bio: "Jericho Chebultz is a founder of Cholla Behavioral Health, driven by a personal understanding of addiction and mental health challenges. With a commitment to transforming care, Jericho ensures equitable access to essential services for recovery.",
      specialties: ["Leadership", "Strategic Vision", "Community Engagement"],
    },
    {
      name: "Wayne Giles",
      title: "Director of Operations",
      credentials: "Behavioral Health Executive",
      image: "https://chollabehavioralhealth.com/wp-content/uploads/2025/04/wayne-giles.png",
      bio: "Wayne Giles is an accomplished behavioral health executive and technology innovator with over a decade of experience in substance use treatment, compliance, and operations. As Director of Operations at Cholla Behavioral Health, he leads initiatives in systems analytics, billing optimization, and practitioner compliance. Wayne has authored a 12-step curriculum integrated into an LMS platform and drives AI-driven solutions to enhance recovery engagement.",
      specialties: ["Systems Analytics", "Billing Optimization", "AI-Driven Solutions", "Compliance"],
    },
    {
      name: "Brian Reinhart",
      title: "Process Management Officer",
      credentials: "Behavioral Health Executive",
      image: "https://chollabehavioralhealth.com/wp-content/uploads/2025/04/brian-reiinhart.png",
      bio: "Brian Reinhart is an accomplished behavioral health executive with a powerful personal journey through addiction and reentry. As Process Management Officer at Cholla Behavioral Health, he blends operational efficiency, engagement strategy, and value-based care to deliver impactful, measurable results across all touchpoints.",
      specialties: ["Operational Efficiency", "Value-Based Care", "Addiction Recovery", "Reentry Support"],
    },
    {
      name: "Daniel Brooks, MD",
      title: "Medical Officer",
      credentials: "MD, Board Certified in Emergency Medicine, Toxicology, Addiction Medicine",
      image: "https://chollabehavioralhealth.com/wp-content/uploads/2025/04/wyatt-martin.png",
      bio: "Dr. Daniel Brooks has nearly 30 years of experience with adults and kids. As Medical Officer at Cholla Behavioral Health, he is board-certified in Emergency Medicine, Toxicology, and Addiction Medicine. He serves as a clinical professor in Emergency Medicine and Internal Medicine, and co-director of the Center for Toxicology and Pharmacology Education and Research at the University of Arizona College of Medicine – Phoenix.",
      specialties: ["Emergency Medicine", "Toxicology", "Addiction Medicine", "Clinical Education"],
    },
    {
      name: "Shannon Crawford, PMHNP",
      title: "Psychiatric-Mental Health Nurse Practitioner",
      credentials: "PMHNP",
      image: "https://chollabehavioralhealth.com/wp-content/uploads/2025/04/image-22.webp",
      bio: "Shannon Crawford offers medication management and brief psychotherapy at Cholla Behavioral Health. She has extensive experience treating kids and adults with a range of psychiatric and mental health disorders, providing compassionate and evidence-based care.",
      specialties: ["Medication Management", "Psychotherapy", "Pediatric Mental Health", "Adult Psychiatry"],
    },
    {
      name: "Will Heise, MD",
      title: "Medical Director",
      credentials: "MD, Board Certified in Medical Toxicology, Addiction Medicine, Family Medicine",
      image: "https://chollabehavioralhealth.com/wp-content/uploads/2025/04/image-25.webp",
      bio: "Dr. Will Heise is the Medical Director at Cholla Behavioral Health, committed to evidence-based, compassionate care for patients with substance use disorders. Board-certified in Medical Toxicology, Addiction Medicine, and Family Medicine, he provides clinical leadership, quality assurance, policy development, and direct patient care. He is also engaged in research and teaching at the University of Arizona College of Medicine – Phoenix.",
      specialties: ["Medical Toxicology", "Addiction Medicine", "Family Medicine", "Clinical Leadership"],
    },
    {
      name: "Katherine Nisbet",
      title: "Chief Clinical Officer",
      credentials: "Licensed Clinician",
      image: "https://chollabehavioralhealth.com/wp-content/uploads/2025/04/image-23.webp",
      bio: "Katherine Nisbet is an experienced behavioral health executive and licensed clinician with over 17 years in counseling and 8+ years in leadership. As Chief Clinical Officer at Cholla Behavioral Health, she leads strategic initiatives, clinical program development, and quality oversight for substance use, mental health, and co-occurring disorder treatment. Her personal recovery journey informs her compassionate, evidence-based approach.",
      specialties: ["Clinical Program Development", "Compliance", "Outpatient Programming", "Trauma-Informed Care"],
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
      description: "We are committed to providing the highest quality, evidence-based treatment with proven outcomes.",
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
      description: "We recognize that each person is unique and deserves a personalized treatment approach.",
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
    <div ref={ref} className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-500 text-white py-16 md:py-24 text-center">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cpath fill='%23ffffff' d='M400 0C179.086 0 0 179.086 0 400s179.086 400 400 400 400-179.086 400-400S620.914 0 400 0zm0 720c-176.731 0-320-143.269-320-320S223.269 80 400 80s320 143.269 320 320-143.269 320-320 320z'/%3E%3C/svg%3E")`,
            backgroundSize: "50%",
          }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="gsap-slide-up text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            About Cholla Behavioral Health
          </h1>
          <h2 className="gsap-slide-up text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-blue-100 mb-4">
            Our Story, Mission & Team
          </h2>
          <p className="gsap-slide-up text-base sm:text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Dedicated to providing compassionate, evidence-based mental health and addiction treatment services with a
            commitment to healing, hope, and recovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-white cursor-pointer text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg transition-colors inline-flex items-center justify-center space-x-2 z-10"
              onClick={handleContactClick}
            >
              <span>Meet Our Team</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <a
              href="tel:+15551234567"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-6 rounded-lg transition-colors inline-flex items-center justify-center space-x-2 z-10"
              onClick={handleCallClick}
            >
              <Phone className="h-5 w-5" />
              <span>Call Now: (555) 123-4567</span>
            </a>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="gsap-slide-up text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="gsap-slide-up text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Founded with a vision to transform behavioral health care in our community, Cholla Behavioral Health has
              grown to become a trusted provider of comprehensive treatment services.
            </p>
          </div>

          <div className="space-y-12">
            {/* We Are Here For You Subsection */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="gsap-slide-left">
                <h3 className="text-lg sm:text-xl font-semibold text-primary-600 mb-3">We Are Here For You</h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                  Cholla’s founders are individuals who intimately understand the challenges of addiction and mental health
                  struggles, having either experienced them personally or witnessed their impact on loved ones. Inspired by
                  the transformative power of healing, they are committed to guiding others towards the same sense of
                  fulfillment and tranquility. Our team is driven by a deep-seated passion to ensure that everyone has
                  equitable access to the essential services required for their journey towards recovery.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                  We looked upon the current system and challenged ourselves to improve upon it. Cholla is the result of
                  that effort, and by transforming the system we hope to transform care and bring mental health into the
                  modern age!
                </p>
              </div>
              <div className="gsap-slide-right">
                <img
                  src="https://images.pexels.com/photos/5234578/pexels-photo-5234578.jpeg"
                  alt="Cholla Behavioral Health's commitment to recovery"
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Mission Subsection */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="gsap-slide-left">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Mission</h4>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Together with our patients we are driven to make behavioral health better. We strive to raise outcomes
                  and lower the overall cost of care. We leverage data and technology to add objectivity to a field that
                  is still subjective. Our mission is to help carve out and define the future of what behavioral health
                  will look like and provide quality care that will advance our patients to the next level.
                </p>
              </div>
              <div className="gsap-slide-right">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                  alt="Cholla Behavioral Health mission"
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Vision Subsection */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="gsap-slide-left">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Vision</h4>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Our vision is to build positive pathways for our local communities to heal by bridging the gap between
                  medicine and mental well-being by prioritizing a collaborative care model between behavioral health,
                  physical health, and social support services. At Cholla our experienced professionals are highly
                  skilled in leveraging technology and data to drive performance and achieve measurable results. We work
                  closely with our clients and professionals to develop customized solutions that meet their unique needs
                  and challenges. At the core of our approach is a dedication to building a positive, innovative culture
                  that fosters collaboration, creativity, and continuous learning. We believe that our success is not
                  only measured by our ability to deliver results, but also by the positive impact we have on our
                  clients, employees, and the communities we serve.
                </p>
              </div>
              <div className="gsap-slide-right">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                  alt="Cholla Behavioral Health vision"
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="gsap-slide-up text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="gsap-slide-up text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              These fundamental values guide everything we do and shape our approach to providing exceptional behavioral
              health care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="gsap-stagger bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="gsap-slide-up text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Impact by the Numbers
            </h2>
            <p className="gsap-slide-up text-base sm:text-lg text-primary-100 max-w-3xl mx-auto">
              These numbers represent real lives transformed and families healed through our comprehensive treatment
              programs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="gsap-stagger text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-200 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="gsap-slide-up text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="gsap-slide-up text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Our multidisciplinary team of licensed professionals brings decades of combined experience in behavioral
              health, addiction medicine, and mental health treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="gsap-stagger bg-white rounded-xl hover:-translate-y-2 shadow-lg overflow-hidden border-2 border-transparent transition-transform duration-300">
                <img src={member.image || "/placeholder.svg?height=400&width=400"} alt={member.name} className="w-full h-48 sm:h-64 md:h-80 object-cover" />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-heading font-semibold text-black mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-2 text-sm sm:text-base">{member.title}</p>
                  <p className="text-sm text-gray-500 mb-4">{member.credentials}</p>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">{member.bio}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <span
                          key={specialtyIndex}
                          className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="gsap-slide-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Accreditations & Certifications
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                Our commitment to excellence is demonstrated through our accreditations and certifications from leading
                healthcare organizations. These credentials ensure that we meet the highest standards of care and
                safety.
              </p>

              <div className="space-y-4">
                {accreditations.map((accreditation, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Award className="h-6 w-6 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">{accreditation}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="gsap-slide-right">
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-gray-900 mb-6">Quality Assurance</h3>
                <div className="space-y-4 text-gray-600 text-sm sm:text-base">
                  <p>
                    <strong>Continuous Quality Improvement:</strong> We regularly review and enhance our treatment
                    protocols to ensure optimal outcomes.
                  </p>
                  <p>
                    <strong>Evidence-Based Practices:</strong> All our treatment approaches are grounded in scientific
                    research and proven methodologies.
                  </p>
                  <p>
                    <strong>Regular Audits:</strong> We undergo regular external audits to maintain our accreditations
                    and ensure compliance.
                  </p>
                  <p>
                    <strong>Staff Training:</strong> Our team participates in ongoing education and training to stay
                    current with best practices.
                  </p>
                </div>

                <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                  <p className="text-sm text-primary-800">
                    <strong>Commitment to Excellence:</strong> Our accreditations represent our unwavering commitment to
                    providing the highest quality behavioral health care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gsap-slide-up max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Begin Your Journey with Us?
            </h2>
            <p className="text-base sm:text-xl mb-8 text-primary-100">
              Our experienced team is here to support you every step of the way. Contact us today to learn more about
              our services and how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact-us"
                className="bg-white cursor-pointer text-primary-600 hover:bg-primary-50 font-bold py-3 px-6 rounded-lg transition-colors inline-flex items-center justify-center space-x-2 z-10"
                onClick={handleContactClick}
              >
                <span>Contact Our Team</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:+15551234567"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-6 rounded-lg transition-colors inline-flex items-center justify-center space-x-2 z-10"
                onClick={handleCallClick}
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