import { useGSAP } from "../hooks/useGSAP";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import { Phone, Mail, MapPin, Calendar, AlertTriangle, CheckCircle, Users, Shield, Heart } from "lucide-react";

export default function Contact() {
  const ref = useGSAP();

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      primary: "(602) 555-1234", // Placeholder, as document says "Call Us" without a specific number
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
    <div ref={ref} className="min-h-screen">
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
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              We're here to support you on your journey to recovery and wellness. Contact us today to learn how we can
              help you or your loved one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 md:mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <method.icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-semibold text-gray-900 mb-2 sm:mb-3">
                  {method.title}
                </h3>
                <p className="text-base sm:text-lg font-semibold text-blue-600 mb-2">{method.primary}</p>
                <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">{method.secondary}</p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{method.description}</p>
              </div>
            ))}
          </div>

          {/* Crisis Support Alert */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12 md:mb-16">
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
              <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8 text-red-600 mt-1 flex-shrink-0" />
              <div className="w-full">
                <h3 className="text-lg sm:text-xl font-semibold text-red-800 mb-2">Crisis Support Available 24/7</h3>
                <p className="text-sm sm:text-base text-red-700 mb-4">
                  If you or someone you know is experiencing a mental health crisis, immediate help is available. Don't
                  wait – reach out now.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:6025551234"
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors inline-flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call Crisis Line: (602) 555-1234</span>
                  </a>
                  <a
                    href="tel:988"
                    className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm sm:text-base"
                  >
                    National Suicide Prevention: 988
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours & Location Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Office Hours */}
            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 mb-4 sm:mb-6">Office Hours</h2>
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                <div className="space-y-3 sm:space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="font-medium text-gray-900 text-sm sm:text-base">{schedule.day}</span>
                      <span className="text-gray-600 text-sm sm:text-base">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 sm:mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                    <span className="font-semibold text-blue-800 text-sm sm:text-base">Same-Day Appointments</span>
                  </div>
                  <p className="text-xs sm:text-sm text-blue-700">
                    Available for urgent situations. Call us to check availability.
                  </p>
                </div>
              </div>
            </div>
            {/* Location & Directions */}
            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 mb-4 sm:mb-6">
                Location & Directions
              </h2>
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                <div className="mb-4 sm:mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Address</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    9201 North 25th Avenue Suite 185
                    <br />
                    Phoenix, AZ 85021
                  </p>
                </div>
                <div className="mb-4 sm:mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Parking</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Free parking available in our secure lot. Handicap accessible spaces available near the main
                    entrance.
                  </p>
                </div>
                <div className="mb-4 sm:mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Public Transportation</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Accessible via Valley Metro bus routes. Check local transit schedules for details.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-xs sm:text-sm text-gray-600">
                    <strong>First Visit?</strong> Please arrive 15 minutes early to complete intake paperwork and
                    familiarize yourself with our facility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Are Your Next Steps Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              What Are Your Next Steps?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              We’re here to guide you through the process of starting your journey with us.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <h3 className="text-lg sm:text-xl font-heading font-semibold text-gray-900 mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Insurance & Payment Options
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              We accept most major insurance plans and offer flexible payment options to make quality behavioral health
              care accessible to everyone.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
                Accepted Insurance Plans
              </h3>
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  {insuranceProviders.map((provider, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-600">{provider}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-xs sm:text-sm text-blue-800">
                    <strong>Don't see your insurance?</strong> Contact us to verify coverage. We're constantly adding
                    new insurance partnerships.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
                Payment Options
              </h3>
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  {[
                    "Insurance coverage verification",
                    "Sliding scale fees for qualifying individuals",
                    "Flexible payment plans available",
                    "Cash, check, and credit card accepted",
                    "HSA and FSA accounts accepted",
                    "Financial counseling services",
                  ].map((option, index) => (
                    <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">{option}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-xs sm:text-sm text-gray-600">
                    <strong>Financial Assistance:</strong> We believe cost should never be a barrier to treatment.
                    Contact our financial counselor to discuss available options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services, appointments, and what to expect during your visit.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">{faq.question}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <p className="text-sm sm:text-base text-gray-600 mb-4">Have a question that's not answered here?</p>
            <a
              href="tel:6025551234"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg inline-flex items-center space-x-2 text-sm sm:text-base"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Call Us: (602) 555-1234</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* What to Expect Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              What to Expect
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              We want you to feel comfortable and prepared for your visit. Here's what you can expect when you contact
              us or visit our facility.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
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
              <div key={index} className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <item.icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-semibold text-gray-900 mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us Section with Google Map */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Visit Us
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Find us at 9201 N 25th Ave Suite 185, Phoenix, AZ 85021. Walk-ins are welcome!
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl h-[250px] sm:h-[350px] md:h-[400px] rounded-xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.723130382255!2d-112.11163068461416!3d33.56967235134672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6c5960eaaaab%3A0x2ca55ed74e10edaa!2s9201%20N%2025th%20Ave%20Suite%20185%2C%20Phoenix%2C%20AZ%2085021!5e0!3m2!1sen!2sus!4v1698781234567"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cholla Behavioral Health Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <a
              href="https://www.google.com/maps/place/9201+N+25th+Ave+suite+185,+Phoenix,+AZ+85021/@33.57195,-112.113998,17z/data=!4m6!3m5!1s0x872b6c5960eaaaab:0x2ca55ed74e10edaa!8m2!3d33.5696723!4d-112.1116307!16s%2Fg%2F11v67pck0n?hl=en&entry=ttu&g_ep=EgoyMDI1MDcyOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-base sm:text-lg text-blue-600 hover:text-blue-800 flex items-center justify-center space-x-2"
              aria-label="Get directions to Cholla Behavioral Health"
            >
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}