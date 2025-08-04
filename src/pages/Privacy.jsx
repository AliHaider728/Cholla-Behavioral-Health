import { useGSAP } from "../hooks/useGSAP";
import Hero from "../components/Hero";
import { Shield, Lock, Eye, FileText, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
 
export default function PrivacyPolice() {
  const ref = useGSAP();

  const lastUpdated = "January 1, 2024";

  return (
    <div ref={ref}>
      {/* Hero Section */}
      <Hero
        title="Privacy Policy"
        subtitle="Your Privacy is Our Priority"
        description="We are committed to protecting your personal health information and maintaining the highest standards of confidentiality in accordance with HIPAA regulations."
        primaryCTA={{ text: "Contact Us", href: "/contact-us" }}
        backgroundImage="/placeholder.svg?height=600&width=1200"
      />

      {/* Privacy Policy Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="gsap-slide-up bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="h-8 w-8 text-primary-600" />
                <div>
                  <h2 className="text-xl sm:text-2xl font-heading font-bold text-gray-900">Introduction</h2>
                  <p className="text-gray-600 text-sm sm:text-base">Last Updated: {lastUpdated}</p>
                </div>
              </div>

              <div className="space-y-6 text-gray-600">
                <p className="text-sm sm:text-base leading-relaxed">
                  This Privacy Policy describes and applies to the information we collect from you when you use voice, mobile device, and/or desktop Cholla Behavioral Health, (also referred to as "Cholla," "our," "we," "us" and similar terms throughout this policy) platforms, tools and applications, chollabehavioralhealth.com (collectively, the "Services"), how we use that information, and when we disclose it. It will also give you more information about how to manage the personal information that you provide to us through the Services.
                </p>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">This policy applies to information we collect:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                    <li>On this website</li>
                    <li>In e-mail, text, phone, and other electronic messages between you and this website</li>
                    <li>Through mobile and desktop applications you may download from this website, which provide dedicated non-browser-based interaction between you and this website</li>
                    <li>When you interact with our advertising and applications on third-party websites and services, if those applications or advertising include links to this policy</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">It does not apply to:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                    <li>Information that we may have obtained or may obtain offline through other traditional means</li>
                    <li>Any third-party, including any application or content that may link to or be accessible from our website</li>
                  </ul>
                </div>

                <p className="text-sm sm:text-base leading-relaxed">
                  Ultimately, we are committed to only using your information, which may include personally identifying information, to provide Services to you and to improve upon our Services. By using our Services, you agree to the collection and use of information in accordance with this Privacy Policy.
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="gsap-stagger bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="h-8 w-8 text-primary-600" />
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-gray-900">The Information We Collect</h2>
              </div>

              <div className="space-y-6 text-gray-600">
                <p className="text-sm sm:text-base">
                  We gather various types of Personal Information from our users, as explained more fully below. We may use this Personal Information to personalize and improve our services, to allow our users to set up a user account and profile, to contact users, to fulfill your requests for certain products and services, to analyze how users utilize the Website, and as otherwise set forth in this Privacy Policy.
                </p>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Information You Provide to Us:</h3>
                  <p className="mb-4 text-sm sm:text-base">
                    We receive and store any information you knowingly provide to us. For example, we may collect Personal Information including but not limited to your name, email address, location, IP address, and other browser cookie information. We may collect other Personal Information you provide us through your use of our services.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Information Collected Automatically:</h3>
                  <p className="mb-4 text-sm sm:text-base">
                    Whenever you interact with our Website, we automatically receive and record information on our server logs from your browser including your IP address, "cookie" information, potential email information, and the page you requested.
                  </p>
                  <p className="mb-4 text-sm sm:text-base">
                    "Cookies" are identifiers we transfer to your computer through your browser that allow us to recognize your browser and tell us how and when pages in our site are visited and by how many people. You may be able to change the preferences on your browser to prevent or limit your computer's acceptance of cookies, but this may prevent you from taking advantage of our Website's best features.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">E-mail and Other Communications:</h3>
                  <p className="text-sm sm:text-base">
                    We may contact you by email or other means; for example, we may send you promotional offers on behalf of other businesses, or communicate with you about your use of the Website. Also, we may receive a confirmation when you open an email from us. This confirmation helps us make emails more interesting and improve our service.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Additional Information:</h3>
                  <p className="text-sm sm:text-base">
                    We may collect and store information that your computer or mobile device provides to us in connection with your use of the Website, such as the type of computer or mobile device, unique device ID, IP address, MAC address, device's operating system and physical location (including geographic, beacon based, and/or GPS location).
                  </p>
                </div>
              </div>
            </div>

            {/* Information You Actively Submit */}
            <div className="gsap-stagger bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 mb-6">Information You Actively Submit</h2>

              <div className="space-y-6 text-gray-600">
                <p className="text-sm sm:text-base">
                  For most of the activity using our Services, we neither require nor collect "User Information." User Information is information that could personally identify you, for example, your name, e-mail address, billing address, shipping address(es), phone number, social security number, and credit card information. You can browse Cholla Services and take as much time as you want to review our services without having to submit such User Information.
                </p>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">User Information is required when you want to:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                    <li>Submit a job application</li>
                    <li>E-Mail message to us or otherwise provide online comments, criticisms, suggestions or feedback</li>
                    <li>Participate in a chat session (if available)</li>
                    <li>Reserve a spot or make an appointment at a Cholla facility</li>
                  </ul>
                </div>

                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                  <p className="text-sm sm:text-base">
                    <strong>Important:</strong> We do not require you to provide any personal medical information about yourself to us through the Services, and we ask that you not share personal medical information through the Services, especially information that you wish to keep confidential. Information you provide through our Services is not protected under confidentiality laws that protect physician-patient communications.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Personal Information about Children:</h3>
                  <p className="text-sm sm:text-base">
                    Cholla Services are targeted only for use by adults. Accordingly, we do not knowingly collect age identifying information, except perhaps on job applications and reservation forms, nor do we knowingly collect any personal information from children under the age of 13. In the event that we discover that a child under the age of 13 has provided User Information to us, in accordance with the Children's Online Privacy Protection Act, we will delete the child's User Information from our files to the extent technologically possible.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use and Share Your Information */}
            <div className="gsap-stagger bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 mb-6">How We Use and Share Your Information</h2>

              <div className="space-y-6 text-gray-600">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">When you actively submit information through the Services, we will use that information in one or more of the following ways:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                    <li>To process, complete or otherwise act upon or respond to your request or reason for submitting that information</li>
                    <li>To register and/or verify your connection with a service or feature that you are attempting to access or obtain</li>
                    <li>To communicate with you about your request or reason for submitting that information</li>
                    <li>To provide additional information to you about Cholla and its services that we believe may interest you</li>
                    <li>To study and analyze the use of the information and features available on our Services</li>
                    <li>To improve our website and our Services and to deliver a better and more personalized service</li>
                    <li>To assist, when necessary, in protecting our rights or property, enforcing the provisions of our Privacy Policy, and/or preventing harm to you or others</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 border-l-4 border-green-400 rounded">
                  <p className="text-sm sm:text-base font-semibold">
                    We do not sell User Information to third parties.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">We share your User Information with third parties only under the limited circumstances stated below:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                    <li>Credit card authorization companies receive the credit card number and other personal identifying information only to verify the credit card numbers and process a transaction</li>
                    <li>User Information is disclosed to third parties necessary to process a particular request you have made</li>
                    <li>User Information submitted regarding a job application may be disclosed to third parties to conduct background checks, obtain credit reports, verify prior employment, check references and for any other lawful purpose that is in our judgment reasonably necessary to our interviewing and hiring process</li>
                    <li>User Information is subject to disclosure in response to judicial or other governmental subpoenas, warrants and court orders served on Cholla in accordance with their terms, or as otherwise required by applicable law</li>
                    <li>User Information is subject to disclosure to protect our rights or property, to enforce the provisions of our Privacy Policy, and/or to prevent harm to you or others</li>
                    <li>User Information may be disclosed and transferred if Cholla or its business is sold or offered for sale to another company or person(s), if a petition for relief under the United States Bankruptcy Laws is filed by or against Cholla, or if Cholla becomes subject to an order of appointment of a trustee or receiver</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* HIPAA Notice of Privacy Practices */}
            <div className="gsap-stagger bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
              <div className="flex items-center space-x-3 mb-6">
                <Lock className="h-8 w-8 text-primary-600" />
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-gray-900">
                  Notice of Privacy Practices concerning Protected Health Information
                </h2>
              </div>

              <div className="space-y-6 text-gray-600">
                <p className="text-sm sm:text-base font-semibold text-gray-900">
                  This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review carefully.
                </p>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Our Privacy Policy</h3>
                  <p className="text-sm sm:text-base">
                    Cholla Behavioral Health, its facilities and subsidiaries, and all associates are committed to providing you with quality behavioral healthcare services. An important part of that commitment is protecting your health information according to applicable law. This notice ("Notice of Privacy Practices") describes your rights and our duties under Federal Law. Protected Health Information ("PHI") is information about you, including demographic information, that may identify you and that relates to your past, present or future physical or mental health or condition; the provision of healthcare services; or the past, present, or future payment for the provision of healthcare services to you.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Our Duties</h3>
                  <p className="mb-4 text-sm sm:text-base">
                    We are required by law to maintain the privacy of your PHI; provide you with notice of our legal duties and privacy practices with respect to your PHI; and to notify you following a breach of unsecured PHI related to you. We are required to abide by the terms of this Notice of Privacy Practices.
                  </p>
                  <p className="text-sm sm:text-base">
                    We reserve the right to change our privacy policy and practices and the terms of this Notice of Privacy Practices, consistent with applicable law and our current business processes, at any time. Any new Notice of Privacy Practices will be effective for all PHI that we maintain at that time.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Confidentiality of Mental and Physical Records</h3>
                  <p className="mb-4 text-sm sm:text-base">
                    The confidentiality medical patient records maintained by us is protected by Federal law and regulations. Generally, we may not say to a person outside the treatment center that you are a patient of the treatment center, or disclose any information identifying you as a patient unless:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                    <li>You consent in writing</li>
                    <li>The disclosure is allowed by a court order</li>
                    <li>The disclosure is made to medical personnel in a medical emergency or to qualified personnel for research, audit, or program evaluation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Uses and Disclosures */}
            <div className="gsap-stagger bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 mb-6">Uses and Disclosures</h2>

              <div className="space-y-6 text-gray-600">
                <p className="text-sm sm:text-base">
                  Uses and disclosures of your PHI may be permitted, required, or authorized. The following categories describe various ways that we use and disclose PHI.
                </p>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Among Treatment Center Personnel:</h3>
                  <p className="text-sm sm:text-base">
                    We may use or disclose information between or among personnel having a need for the information in connection with their duties that arise out of the provision of diagnosis, treatment, or referral for treatment of mental or physical health, provided such communication is within the treatment center or between the treatment center and Cholla Behavioral Health.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Other Permitted Disclosures:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                    <li><strong>Secretary of Health and Human Services:</strong> When investigating our compliance with HIPAA Privacy Rules</li>
                    <li><strong>Business Associates:</strong> To contracted parties performing services on our behalf</li>
                    <li><strong>Crimes on Premises:</strong> Information directly related to crimes committed on our premises</li>
                    <li><strong>Child Abuse Reports:</strong> As required by state law for suspected child abuse and neglect</li>
                    <li><strong>Court Orders:</strong> When required by court order with proper regulatory requirements</li>
                    <li><strong>Emergency Situations:</strong> To medical personnel for emergency treatment</li>
                    <li><strong>Research:</strong> When certain requirements are met, such as Institutional Review Board approval</li>
                    <li><strong>Audit Activities:</strong> To persons conducting audit and evaluation activities</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Patient/Client Rights */}
            <div className="gsap-stagger bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="h-8 w-8 text-primary-600" />
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-gray-900">Patient/Client Rights</h2>
              </div>

              <div className="space-y-6 text-gray-600">
                <p className="text-sm sm:text-base">
                  The following are the rights that you have regarding PHI that we maintain about you. Protecting your PHI is an important part of the services we provide you.
                </p>

                <div className="grid gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Right to Notice</h3>
                    <p className="text-sm sm:text-base">You have the right to adequate notice of the uses and disclosures of your PHI, and our duties and responsibilities regarding same.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Right of Access to Inspect and Copy</h3>
                    <p className="text-sm sm:text-base">You have the right to access, inspect and obtain a copy of your PHI for as long as we maintain it as required by law.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Right to Amend</h3>
                    <p className="text-sm sm:text-base">If you believe the PHI we have about you is incorrect or incomplete, you have the right to request that we amend your PHI.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Right to Request an Accounting of Disclosures</h3>
                    <p className="text-sm sm:text-base">You have the right to request a copy of an accounting of certain disclosures we make of your PHI (up to six years).</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Right to Request Restrictions</h3>
                    <p className="text-sm sm:text-base">You have the right to request restrictions or limitations on how we use and disclose your PHI for treatment, payment, and operations.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Right to Confidential Communications</h3>
                    <p className="text-sm sm:text-base">You have the right to request that we communicate with you about your PHI and health matters by alternative means or alternative locations.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Right to Notification of a Breach</h3>
                    <p className="text-sm sm:text-base">You have the right to be notified if we discover a breach involving unsecured PHI.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Right to Voice Concerns</h3>
                    <p className="text-sm sm:text-base">You have the right to file a complaint in writing with us or with the U.S. Department of Health and Human Services if you believe we have violated your privacy rights.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opting Out */}
            <div className="gsap-stagger bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 mb-6">Opting Out</h2>

              <div className="space-y-6 text-gray-600">
                <p className="text-sm sm:text-base">
                  If you would like to opt-out of Information Collected Automatically, you can visit the Digital Advertising Alliance's opt-out portal at: <a href="http://optout.aboutads.info/" className="text-primary-600 hover:text-primary-700 underline" target="_blank" rel="noopener noreferrer">http://optout.aboutads.info/</a>
                </p>

                <p className="text-sm sm:text-base">
                  If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="gsap-stagger bg-primary-50 rounded-xl p-6 sm:p-8 mb-8">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 mb-6">
                Questions, Requests for Information, and Complaints
              </h2>

              <div className="space-y-4 text-gray-600">
                <p className="text-sm sm:text-base">
                  For questions, requests for information, more information about our privacy policy or concerns, please contact us at:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-6 w-6 text-primary-600" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">Email</p>
                      <p className="text-sm sm:text-base">info@chollabehavioralhealth.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-primary-600" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">Phone</p>
                      <p className="text-sm sm:text-base">877-696-6775</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white rounded-lg">
                  <p className="text-sm">
                    <strong>Mailing Address:</strong>
                    <br />
                    Attn: Compliance Department
                    <br />
                    Cholla Behavioral Health
                    <br />
                    9201 North 25th Avenue Suite 185
                    <br />
                    Phoenix, AZ 85021
                  </p>
                </div>

                <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">U.S. Department of Health & Human Services</h3>
                  <p className="text-sm">
                    If you believe your rights have been violated and would like to submit a complaint directly to the U.S. Department of Health & Human Services:
                  </p>
                  <div className="mt-2 text-sm">
                    <p>Office for Civil Rights</p>
                    <p>200 Independence Avenue, S.W.</p>
                    <p>Washington, D.C. 20201</p>
                    <p>Phone: 877-696-6775</p>
                    <p>Email: OCRMail@hhs.gov</p>
                    <p>Website: www.hhs.gov</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="gsap-stagger bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 mb-6">Changes to this Privacy Policy</h2>

              <div className="text-gray-600">
                <p className="mb-4 text-sm sm:text-base">
                  This Privacy Statement was last modified on the date noted above. If we change our Privacy Statement, we will post those changes on our website, so you are always aware of what information we collect, how we use it, how we protect it and under what circumstances, if any, we disclose it.
                </p>

                <p className="mb-4 text-sm sm:text-base">
                  If we make material changes, we will also post a notice on our home page, which notice will run for seven consecutive days following the effective date of the modified privacy statement.
                </p>

                <p className="text-sm sm:text-base font-semibold">
                  YOUR CONTINUED USE OF OUR SERVICES CONSTITUTES YOUR ACCEPTANCE OF ANY AMENDMENTS TO AND THE MOST RECENT VERSION OF THIS PRIVACY STATEMENT.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}