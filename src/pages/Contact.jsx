import { useGSAP } from "../hooks/useGSAP";
import Hero from "../components/Hero";
import { Phone, Mail, MapPin, Calendar, AlertTriangle, CheckCircle, Users, Shield, Heart } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const ref = useGSAP();
  const [consultationForm, setConsultationForm] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    preferredContact: "email",
    message: "",
  });
  const [insuranceForm, setInsuranceForm] = useState({
    primaryName: "",
    insuranceProvider: "",
    groupNumber: "",
    memberId: "",
    secondaryName: "",
    secondaryProvider: "",
    secondaryGroupNumber: "",
    secondaryMemberId: "",
  });

  const handleConsultationChange = (e) => {
    setConsultationForm({ ...consultationForm, [e.target.name]: e.target.value });
  };

  const handleInsuranceChange = (e) => {
    setInsuranceForm({ ...insuranceForm, [e.target.name]: e.target.value });
  };

  const handleConsultationSubmit = () => {
    console.log("Consultation Form Submitted:", consultationForm);
    alert("Consultation request submitted successfully!");
    setConsultationForm({
      name: "",
      email: "",
      phone: "",
      reason: "",
      preferredContact: "email",
      message: "",
    });
  };

  const handleInsuranceSubmit = () => {
    console.log("Insurance Form Submitted:", insuranceForm);
    alert("Insurance information submitted successfully!");
    setInsuranceForm({
      primaryName: "",
      insuranceProvider: "",
      groupNumber: "",
      memberId: "",
      secondaryName: "",
      secondaryProvider: "",
      secondaryGroupNumber: "",
      secondaryMemberId: "",
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      primary: "(602) 555-1234",
      secondary: "24/7 Crisis Support Available",
      description: "Call us anytime for immediate support or to schedule an appointment.",
    },
    {
      icon: Mail,
      title: "Email",
      primary: "info@chollabehavioralhealth.com",
      secondary: "We respond within 24 hours",
      description: "Send us a message and we will get back to you promptly.",
    },
    {
      icon: MapPin,
      title: "Location",
      primary: "9201 North 25th Avenue Suite 185",
      secondary: "Phoenix, AZ 85021",
      description: "Visit us at our modern facility in Phoenix, serving the Valley.",
    },
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
    { day: "Saturday - Sunday", hours: "Closed" },
    { day: "Crisis Line", hours: "24/7 - Always Available" },
  ];

  const insuranceProviders = [
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
    "Banner Health",
    "Arizona Complete Health",
    "Care1st",
    "Mercy Care",
    "And Many More",
  ];

  const faqs = [
    {
      question: "Do you accept my insurance?",
      answer:
        "We accept most major insurance plans. Contact us to verify your specific coverage and benefits. We also offer sliding scale fees and payment plans for those who qualify.",
    },
    {
      question: "How do I schedule an appointment?",
      answer:
        "You can schedule an appointment by calling us, emailing us, or using our online contact form. We offer same-day appointments for urgent situations.",
    },
    {
      question: "What should I bring to my first appointment?",
      answer:
        "Please bring a valid ID, insurance card, list of current medications, and any relevant medical records. Arrive 15 minutes early to complete intake paperwork.",
    },
    {
      question: "Do you offer telehealth services?",
      answer:
        "Yes, we offer secure telehealth appointments for many of our services. This allows you to receive care from the comfort of your home while maintaining the same quality of treatment.",
    },
    {
      question: "What if I need help outside of business hours?",
      answer:
        "Our 24/7 crisis line is always available. For life-threatening emergencies, please call 911 or go to your nearest emergency room.",
    },
  ];

  return (
    <div ref={ref} className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero
        title="Contact Cholla Behavioral Health"
        subtitle="We're Here to Help"
        description="Reach out to our compassionate team for immediate support, to schedule an appointment, or to learn more about our comprehensive behavioral health services."
        primaryCTA={{ text: "Call Now: (602) 555-1234", href: "tel:6025551234" }}
        secondaryCTA={{ text: "Send Message", href: "#contact-form" }}
        backgroundImage="/placeholder.svg?height=600&width=1200"
      />

      {/* Contact Methods Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're here to support you on your journey to recovery and wellness. Contact us today to learn how we can help you or your loved one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-xl p-8 text-center transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <method.icon className="h-8 w-8 text-blue-600 group-hover:text-blue-800" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-lg font-semibold text-blue-600 mb-2">{method.primary}</p>
                <p className="text-sm text-gray-500 mb-4">{method.secondary}</p>
                <p className="text-base text-gray-600 leading-relaxed">{method.description}</p>
              </div>
            ))}
          </div>

          {/* Crisis Support Alert */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mt-12 md:mt-16">
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
              <AlertTriangle className="h-8 w-8 text-red-600 mt-1 flex-shrink-0" />
              <div className="w-full">
                <h3 className="text-xl font-semibold text-red-800 mb-4">Crisis Support Available 24/7</h3>
                <p className="text-base text-red-700 mb-6">
                  If you or someone you know is experiencing a mental health crisis, immediate help is available. Don't wait – reach out now.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:6025551234"
                    className="relative bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center justify-center space-x-2">
                      <Phone className="h-5 w-5" />
                      <span>Call Crisis Line: (602) 555-1234</span>
                    </span>
                  </a>
                  <a
                    href="tel:988"
                    className="relative border-2 border-red-600 text-red-600 font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-red-600 hover:text-white transform hover:-translate-y-1 group overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative">National Suicide Prevention: 988</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours & Location Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Office Hours */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-6">Office Hours</h2>
              <div className="bg-white rounded-2xl shadow-xl p-8 group hover:shadow-2xl transition-all duration-300">
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0 group-hover:border-gray-200 transition-colors duration-300"
                    >
                      <span className="font-medium text-gray-900 text-base">{schedule.day}</span>
                      <span className="text-gray-600 text-base">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                  <div className="flex items-center space-x-3 mb-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-blue-800 text-base">Same-Day Appointments</span>
                  </div>
                  <p className="text-sm text-blue-700">
                    Available for urgent situations. Call us to check availability.
                  </p>
                </div>
              </div>
            </div>
            {/* Location & Directions */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-6">
                Location & Directions
              </h2>
              <div className="bg-white rounded-2xl shadow-xl p-8 group hover:shadow-2xl transition-all duration-300">
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2 text-base">Address</h3>
                  <p className="text-gray-600 text-base">
                    9201 North 25th Avenue Suite 185
                    <br />
                    Phoenix, AZ 85021
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2 text-base">Parking</h3>
                  <p className="text-gray-600 text-base">
                    Free parking available in our secure lot. Handicap accessible spaces available near the main entrance.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2 text-base">Public Transportation</h3>
                  <p className="text-gray-600 text-base">
                    Accessible via Valley Metro bus routes. Check local transit schedules for details.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors duration-300">
                  <p className="text-sm text-gray-600">
                    <strong>First Visit?</strong> Please arrive 15 minutes early to complete intake paperwork and familiarize yourself with our facility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Are Your Next Steps Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              What Are Your Next Steps?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We’re here to guide you through the process of starting your journey with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Give Us a Call",
                description: "You will be greeted and introduced to one of our experienced intake coordinators.",
              },
              {
                title: "Meet Our Team",
                description: "We will listen while you tell us your concerns and what has led you to make the call.",
              },
              {
                title: "Assessment",
                description:
                  "Our clinical team will perform a comprehensive diagnostic assessment including all areas of history.",
              },
              {
                title: "Your Care Plan",
                description: "We will create a treatment plan according to your needs and support you along your journey.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-xl p-6 text-center transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
              >
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              Insurance & Payment Options
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We accept most major insurance plans and offer flexible payment options to make quality behavioral health care accessible to everyone.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Accepted Insurance Plans</h3>
              <div className="bg-white rounded-2xl shadow-xl p-8 group hover:shadow-2xl transition-all duration-300">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {insuranceProviders.map((provider, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{provider}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                  <p className="text-sm text-blue-800">
                    <strong>Don't see your insurance?</strong> Contact us to verify coverage. We're constantly adding new insurance partnerships.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Payment Options</h3>
              <div className="bg-white rounded-2xl shadow-xl p-8 group hover:shadow-2xl transition-all duration-300">
                <div className="space-y-4 mb-6">
                  {[
                    "Insurance coverage verification",
                    "Sliding scale fees for qualifying individuals",
                    "Flexible payment plans available",
                    "Cash, check, and credit card accepted",
                    "HSA and FSA accounts accepted",
                    "Financial counseling services",
                  ].map((option, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-base text-gray-700">{option}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors duration-300">
                  <p className="text-sm text-gray-600">
                    <strong>Financial Assistance:</strong> We believe cost should never be a barrier to treatment. Contact our financial counselor to discuss available options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services, appointments, and what to expect during your visit.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-base text-gray-600 mb-4">Have a question that's not answered here?</p>
            <a
              href="tel:6025551234"
              className="relative inline-flex items-center bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:bg-[#3b97d0] hover:shadow-lg group overflow-hidden hover:animate-bounce-ball"
            >
              <span className="relative flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call Us: (602) 555-1234</span>
              </span>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#3b97d0] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>
        </div>

        {/* Custom Bounce Ball Animation */}
        <style jsx>{`
          @keyframes bounce-ball {
            0%, 100% {
              transform: translateY(0) scale(1);
            }
            50% {
              transform: translateY(-4px) scale(1.02);
            }
            75% {
              transform: translateY(2px) scale(0.98);
            }
          }
          .animate-bounce-ball {
            animation: bounce-ball 0.4s ease-in-out;
          }
        `}</style>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              Request a Consultation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fill out the form below to schedule a consultation or get in touch with our team.
            </p>
          </div>

          {/* Consultation Request Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 group hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Consultation Request Form</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={consultationForm.name}
                  onChange={handleConsultationChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={consultationForm.email}
                  onChange={handleConsultationChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={consultationForm.phone}
                  onChange={handleConsultationChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                  Reason for Consultation
                </label>
                <select
                  id="reason"
                  name="reason"
                  value={consultationForm.reason}
                  onChange={handleConsultationChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                >
                  <option value="">Select a reason</option>
                  <option value="mental-health">Mental Health Support</option>
                  <option value="substance-abuse">Substance Abuse Concerns</option>
                  <option value="general-inquiry">General Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Contact Method
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={consultationForm.preferredContact === "email"}
                      onChange={handleConsultationChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-600">Email</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      checked={consultationForm.preferredContact === "phone"}
                      onChange={handleConsultationChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-600">Phone</span>
                  </label>
                </div>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={consultationForm.message}
                  onChange={handleConsultationChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  placeholder="Tell us more about your needs"
                ></textarea>
              </div>
            </div>
            <div className="mt-8 text-center">
              <button
                onClick={handleConsultationSubmit}
                className="relative bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative">Submit Consultation Request</span>
              </button>
            </div>
          </div>

          {/* Insurance Information Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 group hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Insurance Information Form</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="primaryName" className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Insurance Holder Name
                </label>
                <input
                  type="text"
                  id="primaryName"
                  name="primaryName"
                  value={insuranceForm.primaryName}
                  onChange={handleInsuranceChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  placeholder="Enter primary insurance holder name"
                  required
                />
              </div>
              <div>
                <label htmlFor="insuranceProvider" className="block text-sm font-medium text-gray-700 mb-2">
                  Insurance Provider
                </label>
                <select
                  id="insuranceProvider"
                  name="insuranceProvider"
                  value={insuranceForm.insuranceProvider}
                  onChange={handleInsuranceChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                >
                  <option value="">Select a provider</option>
                  {insuranceProviders.map((provider, index) => (
                    <option key={index} value={provider}>
                      {provider}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="groupNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Group Number
                </label>
                <input
                  type="text"
                  id="groupNumber"
                  name="groupNumber"
                  value={insuranceForm.groupNumber}
                  onChange={handleInsuranceChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  placeholder="Enter group number"
                />
              </div>
              <div>
                <label htmlFor="memberId" className="block text-sm font-medium text-gray-700 mb-2">
                  Member ID
                </label>
                <input
                  type="text"
                  id="memberId"
                  name="memberId"
                  value={insuranceForm.memberId}
                  onChange={handleInsuranceChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  placeholder="Enter member ID"
                />
              </div>
              <div>
                <label htmlFor="secondaryName" className="block text-sm font-medium text-gray-700 mb-2">
                  Secondary Insurance Holder Name (Optional)
                </label>
                <input
                  type="text"
                  id="secondaryName"
                  name="secondaryName"
                  value={insuranceForm.secondaryName}
                  onChange={handleInsuranceChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  placeholder="Enter secondary insurance holder name"
                />
              </div>
              <div>
                <label htmlFor="secondaryProvider" className="block text-sm font-medium text-gray-700 mb-2">
                  Secondary Insurance Provider (Optional)
                </label>
                <select
                  id="secondaryProvider"
                  name="secondaryProvider"
                  value={insuranceForm.secondaryProvider}
                  onChange={handleInsuranceChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                >
                  <option value="">Select a provider</option>
                  {insuranceProviders.map((provider, index) => (
                    <option key={index} value={provider}>
                      {provider}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="secondaryGroupNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Secondary Group Number (Optional)
                </label>
                <input
                  type="text"
                  id="secondaryGroupNumber"
                  name="secondaryGroupNumber"
                  value={insuranceForm.secondaryGroupNumber}
                  onChange={handleInsuranceChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  placeholder="Enter secondary group number"
                />
              </div>
              <div>
                <label htmlFor="secondaryMemberId" className="block text-sm font-medium text-gray-700 mb-2">
                  Secondary Member ID (Optional)
                </label>
                <input
                  type="text"
                  id="secondaryMemberId"
                  name="secondaryMemberId"
                  value={insuranceForm.secondaryMemberId}
                  onChange={handleInsuranceChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  placeholder="Enter secondary member ID"
                />
              </div>
            </div>
            <div className="mt-8 text-center">
              <button
                onClick={handleInsuranceSubmit}
                className="relative bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative">Submit Insurance Information</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              What to Expect
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We want you to feel comfortable and prepared for your visit. Here's what you can expect when you contact us or visit our facility.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Compassionate Team",
                description:
                  "Our caring staff will greet you warmly and ensure you feel welcome and supported from the moment you contact us.",
              },
              {
                icon: Shield,
                title: "Confidential Environment",
                description:
                  "All communications and treatment are strictly confidential, ensuring your privacy and peace of mind.",
              },
              {
                icon: Heart,
                title: "Personalized Care",
                description:
                  "We take time to understand your unique needs and develop a personalized treatment plan just for you.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group text-center transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <item.icon className="h-8 w-8 text-blue-600 group-hover:text-blue-800" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us Section with Google Map */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-gradient-to-br from-red-500 to-blue-600 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-gradient-to-tl from-blue-600 to-red-500 translate-x-1/3 translate-y-1/3 animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-red-50 to-blue-50 rounded-full border border-red-100">
              <span className="text-sm font-medium bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">
                Our Location
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4 leading-tight">
              Visit Us
              <span className="block bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                We're Here to Help
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find us at 9201 N 25th Ave Suite 185, Phoenix, AZ 85021. Walk-ins are welcome!
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-red-400 to-blue-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-600 to-red-500 rounded-full opacity-20 animate-pulse delay-700"></div>
              <div className="absolute -bottom-4 -left-6 w-14 h-14 bg-gradient-to-br from-red-400 to-blue-600 rounded-full opacity-20 animate-pulse delay-300"></div>
              <div className="absolute -bottom-6 -right-4 w-18 h-18 bg-gradient-to-br from-blue-500 to-red-600 rounded-full opacity-20 animate-pulse delay-1000"></div>

              <div className="relative h-[300px] sm:h-[400px] md:h-[450px] rounded-2xl shadow-2xl overflow-hidden group bg-white/80 backdrop-blur-sm border border-gray-100 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.723130382255!2d-112.11163068461416!3d33.56967235134672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6c5960eaaaab%3A0x2ca55ed74e10edaa!2s9201%20N%2025th%20Ave%20Suite%20185%2C%20Phoenix%2C%20AZ%2085021!5e0!3m2!1sen!2sus!4v1698781234567"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cholla Behavioral Health Location"
                  className="rounded-2xl transform group-hover:scale-[1.03] transition-transform duration-700"
                ></iframe>
                <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10 rounded-2xl"></div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.google.com/maps/place/9201+N+25th+Ave+suite+185,+Phoenix,+AZ+85021/@33.57195,-112.113998,17z/data=!4m6!3m5!1s0x872b6c5960eaaaab:0x2ca55ed74e10edaa!8m2!3d33.5696723!4d-112.1116307!16s%2Fg%2F11v67pck0n?hl=en&entry=ttu&g_ep=EgoyMDI1MDcyOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative inline-flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-white group-hover:text-gray-100 transition-all duration-300" />
                <span className="font-bold">Get Directions</span>
              </span>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}