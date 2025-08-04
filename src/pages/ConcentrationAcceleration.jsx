import { useGSAP } from "../hooks/useGSAP";
import Hero from "../components/Hero";
import { Brain, Target, Clock, CheckCircle, ArrowRight, Phone, Activity, Zap, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function ConcentrationAcceleration() {
  const ref = useGSAP();

  return (
    <div ref={ref} className="overflow-x-hidden">
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
      <section className="py-12 sm:py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="gsap-slide-left overflow-hidden">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Accelerated Recovery Through Intensive Focus
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                Our Concentration Acceleration Program (CAP) is an innovative intensive treatment approach designed
                specifically for individuals who need rapid stabilization and accelerated skill development in their
                recovery journey. This program combines evidence-based therapies with intensive focus training to
                achieve faster, more sustainable outcomes.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                CAP addresses the cognitive challenges often experienced in early recovery, including difficulty
                concentrating, impaired decision-making, and reduced executive functioning. Through intensive, targeted
                interventions, participants develop enhanced focus, improved coping skills, and accelerated progress
                toward their recovery goals.
              </p>

              <div className="space-y-4">
                {[
                  "Intensive daily treatment sessions",
                  "Specialized concentration enhancement techniques",
                  "Accelerated skill development protocols",
                  "Evidence-based cognitive interventions",
                  "Rapid stabilization methodologies",
                  "Measurable progress tracking",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="gsap-slide-right overflow-hidden">
              <img
                src="https://images.pexels.com/photos/6998213/pexels-photo-6998213.jpeg"
                alt="Concentration Acceleration Program therapy session"
                className="rounded-xl shadow-lg w-full h-auto object-cover max-w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ADHD/ADD Overview Section */}
      <section className="py-12 sm:py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="gsap-slide-left overflow-hidden">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Understanding ADHD / ADD
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                Hyperactive Attention Deficit Disorder (ADHD) – or sometimes referred to as ADD (Attention Deficit Disorder) 
                is a neurodevelopmental disorder that can affect children and adults. Individuals with ADHD may present with 
                hyperactivity, difficulty with attention and focus, impulsive behavior, and more.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                The severity of symptoms can vary, where some may experience little effects and find themselves in social 
                or work environments where those effects do not cause much of a disruption; however, others may be more 
                highly affected and be in social or educational environments where those effects make even the minimal 
                level of functioning very difficult.
              </p>
              
              <div className="bg-primary-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Common ADHD Symptoms Include:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Difficulty with attention and focus</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Hyperactive behavior</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Impulsive actions</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Difficulty with organization</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="gsap-slide-right overflow-hidden">
              <img
                src="https://chollabehavioralhealth.com/wp-content/uploads/2024/02/Cholla-pic.jpg"
                alt="ADHD Concentration Program"
                className="rounded-xl shadow-lg w-full h-auto object-cover max-w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive ADHD Support Section */}
      <section className="py-12 sm:py-16 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="gsap-slide-right overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7579312/pexels-photo-7579312.jpeg"
                alt="ADHD Treatment Session"
                className="rounded-xl shadow-lg w-full h-auto object-cover max-w-full border-0"
              />
            </div>
            <div className="gsap-slide-left overflow-hidden">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Comprehensive ADHD Treatment & Support
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                A thorough examination, encompassing medical, physical, and neurodevelopmental aspects, is conducted to ascertain whether you or your child exhibit symptoms aligning with ADHD, which encompass hyperactivity, inattention, and impulsivity.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Expert Clinical Assessment</h3>
                    <p className="text-gray-600 text-sm">Thorough evaluation by licensed professionals specializing in ADHD diagnosis and treatment.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Personalized Treatment Approach</h3>
                    <p className="text-gray-600 text-sm">Customized treatment plans tailored to your specific needs and lifestyle requirements.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Ongoing Support & Monitoring</h3>
                    <p className="text-gray-600 text-sm">Continuous care coordination to ensure optimal outcomes and treatment adjustments.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Family-Centered Care</h3>
                    <p className="text-gray-600 text-sm">Involving family members in the treatment process for comprehensive support systems.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADHD Program Services Section */}
      <section className="py-12 sm:py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="gsap-slide-up text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                ADHD Concentration Acceleration Program
              </h2>
              <p className="gsap-slide-up text-base sm:text-lg text-gray-600">
                Our comprehensive program includes specialized services designed to address all aspects of ADHD treatment and management.
              </p>
            </div>

            <div className="bg-primary-50 rounded-2xl p-8 sm:p-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Brain className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      ADD/ADHD Evaluation – Results discussed with Provider
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Comprehensive assessment including cognitive testing, behavioral evaluation, and detailed consultation 
                      with healthcare providers to ensure accurate diagnosis and treatment planning.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Activity className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      Medication review and management
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Professional medication assessment, monitoring, and adjustment to optimize therapeutic benefits 
                      while minimizing side effects for improved daily functioning.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      Treatment plan supporting patient needs including programming schedule
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Individualized treatment plans with flexible scheduling options designed to accommodate 
                      personal, educational, and professional commitments while maximizing treatment effectiveness.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      In person individual & group ADHD program therapies and activities
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Evidence-based therapeutic interventions including individual counseling, group therapy sessions, 
                      and specialized activities focused on improving concentration, organization, and coping skills.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl border border-primary-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Zap className="h-5 w-5 text-primary-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Ready to Get Started?</h4>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Our team is ready to help you or your loved one take the first step toward better ADHD management 
                  and improved quality of life.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact-us"
                    className="bg-primary-600 text-white hover:bg-primary-700 font-medium py-2 px-4 rounded-lg transition-colors inline-flex items-center justify-center space-x-2 text-sm focus:outline-none"
                  >
                    <span>Schedule Evaluation</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="tel:5551234567"
                    className="border border-primary-600 text-primary-600 hover:bg-primary-50 font-medium py-2 px-4 rounded-lg transition-colors inline-flex items-center justify-center space-x-2 text-sm focus:outline-none"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call Today</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Better Understanding Section */}
      <section className="py-12 sm:py-16 bg-primary-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="gsap-slide-up text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              Better Understanding Through Comprehensive Assessment
            </h2>
            <p className="gsap-slide-up text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
              A thorough examination, encompassing medical, physical, and neurodevelopmental aspects, is conducted to 
              ascertain whether you or your child exhibit symptoms aligning with ADHD, which encompass hyperactivity, 
              inattention, and impulsivity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="gsap-stagger bg-white rounded-xl shadow-lg p-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Medical Assessment</h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive medical evaluation to identify underlying factors contributing to ADHD symptoms.
                </p>
              </div>

              <div className="gsap-stagger bg-white rounded-xl shadow-lg p-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Physical Evaluation</h3>
                <p className="text-gray-600 text-sm">
                  Physical assessment to rule out other conditions and ensure optimal treatment planning.
                </p>
              </div>

              <div className="gsap-stagger bg-white rounded-xl shadow-lg p-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Neurodevelopmental Testing</h3>
                <p className="text-gray-600 text-sm">
                  Specialized testing to assess cognitive function, attention patterns, and developmental factors.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Assessment Process Includes:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Detailed symptom assessment",
                  "Behavioral observation",
                  "Cognitive testing",
                  "Family history review",
                  "Educational performance analysis",
                  "Social functioning evaluation",
                  "Medical history examination",
                  "Treatment planning discussion"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-primary-600 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <div className="gsap-slide-up max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4">
              Accelerate Your Recovery Journey
            </h2>
            <p className="text-base sm:text-xl mb-8 text-primary-100">
              Take advantage of our innovative CAP program to achieve faster, more sustainable recovery outcomes. Our
              intensive approach can help you reach your goals in less time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact-us"
                className="bg-white text-primary-600 hover:bg-primary-50 font-bold py-3 px-6 rounded-lg transition-colors inline-flex items-center justify-center space-x-2 focus:outline-none"
              >
                <span>Apply for CAP Program</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:5551234567"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-6 rounded-lg transition-colors inline-flex items-center justify-center space-x-2 focus:outline-none"
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