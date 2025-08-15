import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

// Mock Link component
const Link = ({ to, children, className, ...props }) => (
  <a href={to} className={className} {...props}>
    {children}
  </a>
)

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">
     
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #3b97d0 0%, #2875a8 50%, #1a5a8a 100%)'
        }}
      ></div>
      <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
    <div
      className="absolute bottom-20 right-10 w-20 h-20 bg-white/20 rounded-full animate-bounce"
      style={{ animationDelay: "1s" }}
    ></div>
    <div
      className="absolute top-1/2 left-1/4 w-8 h-8 bg-white/30 rounded-full animate-pulse"
      style={{ animationDelay: "0.5s" }}
    ></div>
     <div
      className="absolute top-1/2 right-1/4 w-8 h-8 bg-white/30 rounded-full animate-pulse"
      style={{ animationDelay: "0.5s" }}
    ></div>
    <div
      className="absolute bottom-20 left-10 w-20 h-20 bg-white/20 rounded-full animate-bounce"
      style={{ animationDelay: "1s" }}
    ></div>
      
      
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2px, transparent 2px)',
          backgroundSize: '50px 50px'
        }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white rounded-xl p-2 shadow-lg mr-4 hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="https://chollabehavioralhealth.com/wp-content/uploads/2024/02/Cholla-Behavioral-Health.png" 
                  alt="Cholla Behavioral Health"
                  className="w-full h-full object-contain" 
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Cholla Behavioral Health
                </h3>
                <p className="text-sm text-blue-100 font-medium">
                  You Deserve To Be Well
                </p>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed mb-6 max-w-sm">
              Providing comprehensive mental health and addiction treatment services with compassion, expertise, and evidence-based care.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="h-5 w-5 text-blue-100 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative">
              Quick Links
              <div className="w-8 h-0.5 bg-blue-200 mt-2"></div>
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "Services" },
                { to: "/about-us", label: "About Us" },
                { to: "/contact-us", label: "Contact Us" }
              ].map(({ to, label }) => (
                <li key={label}>
                  <Link 
                    to={to} 
                    className="text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm font-medium inline-block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative">
              Programs
              <div className="w-8 h-0.5 bg-blue-200 mt-2"></div>
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/contact-us", label: "Appointment" },
                { to: "/mat-med-management", label: "Medication Management" },
                { to: "/outpatient-levels-of-care", label: "PHP IOP OP" },
                { to: "/concentration-acceleration-program", label: "ADHD Concentration" },
                { to: "/ServicesPage", label: "Individual Services" }
              ].map(({ to, label }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm font-medium inline-block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative">
              Contact Info
              <div className="w-8 h-0.5 bg-blue-200 mt-2"></div>
            </h4>
            <div className="space-y-4">
              
              {/* Location */}
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-200 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-blue-100">
                  <p className="font-medium">Mesa, AZ</p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-200 flex-shrink-0" />
                <span className="text-sm text-blue-100 font-medium">
                  (480) 790-6666
                </span>
              </div>
              
              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-200 flex-shrink-0" />
                <span className="text-sm text-blue-100 font-medium break-all">
                  info@chollabehavioralhealth.com
                </span>
              </div>
              
              {/* Hours */}
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-200 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-blue-100">
                  <p className="font-medium">Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-blue-200 font-semibold">24/7 Crisis Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-blue-100 font-medium text-center md:text-left">
              © 2025 Cholla Behavioral Health. All rights reserved.{' '}
              <span className="text-blue-200 font-semibold">
                Powered by TecnoSphere
              </span>
            </p>
            <Link 
              to="/privacy-policy" 
              className="text-sm text-blue-100 hover:text-white font-medium transition-colors duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}