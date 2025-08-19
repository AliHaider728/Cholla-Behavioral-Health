import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react"
import { useState } from "react"

// Mock Link component
const Link = ({ to, children, className, ...props }) => (
  <a href={to} className={className} {...props}>
    {children}
  </a>
)

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => setIsSubscribed(false), 3000)
      setEmail("")
    }
  }

  return (
    <footer className="relative text-white overflow-hidden">
      {/* Clean Gradient Background */}
      <div 
        className="absolute inset-0 bg-[#3b97d0]"
      ></div>
      
      {/* Subtle Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-40 -left-40 w-96 h-96 bg-white/3 rounded-full"
          style={{ animation: "pulse 8s infinite" }}
        ></div>
        <div 
          className="absolute -bottom-32 -right-32 w-80 h-80 bg-white/2 rounded-full"
          style={{ animation: "pulse 10s infinite", animationDelay: "2s" }}
        ></div>
      </div>
      
      {/* Enhanced Floating Elements with More Glow */}
      <div className="absolute top-20 left-12 w-16 h-16 bg-white/15 rounded-full shadow-lg shadow-white/20"
           style={{ animation: "pulse 4s infinite, float 6s ease-in-out infinite" }}></div>
      <div className="absolute bottom-32 right-16 w-20 h-20 bg-white/12 rounded-full shadow-xl shadow-white/25"
           style={{ animation: "pulse 5s infinite, float 8s ease-in-out infinite reverse", animationDelay: "1s" }}></div>
      <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-white/18 rounded-full shadow-lg shadow-white/30"
           style={{ animation: "pulse 3s infinite, float 7s ease-in-out infinite", animationDelay: "0.5s" }}></div>
      <div className="absolute top-2/3 right-1/3 w-14 h-14 bg-white/13 rounded-full shadow-lg shadow-white/20"
           style={{ animation: "pulse 4.5s infinite, float 9s ease-in-out infinite reverse", animationDelay: "2s" }}></div>
      
      {/* CSS Animation for Floating Effect */}
      <style >{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          25% { transform: translateY(-10px) scale(1.05); }
          50% { transform: translateY(-5px) scale(0.95); }
          75% { transform: translateY(-15px) scale(1.1); }
        }
      `}</style>
      
      {/* Geometric Pattern Overlay with Animations */}
      <div 
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50px 50px, rgba(255,255,255,0.4) 2px, transparent 2px),
            radial-gradient(circle at 100px 100px, rgba(255,255,255,0.3) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '100px 100px, 150px 150px',
          animation: 'dotMove 20s linear infinite'
        }}
      ></div>
      
      {/* CSS Animation Keyframes */}
      <style >{`
        @keyframes dotMove {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(10px, -5px) rotate(90deg); }
          50% { transform: translate(-5px, 10px) rotate(180deg); }
          75% { transform: translate(-10px, -10px) rotate(270deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
      `}</style>
      
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Newsletter Subscription */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6 group">
              <div className="w-14 h-14 bg-white rounded-xl p-2 shadow-lg mr-3 hover:shadow-xl hover:scale-110 transition-all duration-300 hover:rotate-3">
                <img 
                  src="https://chollabehavioralhealth.com/wp-content/uploads/2024/02/Cholla-Behavioral-Health.png" 
                  alt="Cholla Behavioral Health"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="group-hover:translate-x-1 transition-transform duration-300">
                <h3 className="text-lg font-bold text-white mb-1">
                  Cholla Behavioral Health
                </h3>
                <p className="text-xs text-white/90 font-medium">
                  You Deserve To Be Well
                </p>
              </div>
            </div>
            
            <h4 className="text-base font-bold text-white mb-4 relative">
              Stay Connected
              <div className="w-6 h-0.5 bg-white/60 mt-1"></div>
            </h4>
            
            <p className="text-white/90 text-sm leading-relaxed mb-6">
              Subscribe to receive mental health tips, updates, and resources delivered to your inbox.
            </p>
            
            {/* Email Subscription */}
            <div className="mb-6">
              <div className="flex flex-col space-y-3">
                <div className="relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 hover:bg-white/15 hover:scale-105 transition-all duration-300 text-sm"
                  />
                  <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/70 group-hover:text-white transition-colors duration-300" />
                </div>
                <button
                  onClick={handleSubscribe}
                  className="w-full bg-white text-[#3b97d0] px-4 py-3 rounded-lg font-semibold text-sm hover:bg-white/95 hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  {isSubscribed ? (
                    <span>✓ Subscribed!</span>
                  ) : (
                    <>
                      <Send className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                      <span>Subscribe</span>
                    </>
                  )}
                </button>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white hover:text-[#3b97d0] hover:scale-110 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg"
                >
                  <Icon className="h-4 w-4 text-white hover:rotate-12 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold text-white mb-6 relative">
              Quick Links
              <div className="w-6 h-0.5 bg-white/60 mt-1"></div>
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
                    className="text-white hover:text-white/80 hover:translate-x-2 hover:scale-105 transition-all duration-300 text-sm font-medium relative group"
                  >
                    <span className="group-hover:border-b border-white/60 pb-0.5">
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-base font-bold text-white mb-6 relative">
              Programs
              <div className="w-6 h-0.5 bg-white/60 mt-1"></div>
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
                    className="text-white hover:text-white/80 hover:translate-x-2 hover:scale-105 transition-all duration-300 text-sm font-medium relative group"
                  >
                    <span className="group-hover:border-b border-white/60 pb-0.5">
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-bold text-white mb-6 relative">
              Contact Info
              <div className="w-6 h-0.5 bg-white/60 mt-1"></div>
            </h4>
            <div className="space-y-4">
              
              {/* Location */}
              <div className="flex items-start space-x-3 group cursor-pointer">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 hover:scale-110 transition-all duration-300">
                  <MapPin className="h-4 w-4 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-sm text-white/90 group-hover:translate-x-1 transition-transform duration-300">
                  <p className="font-medium text-white">Mesa, AZ</p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 hover:scale-110 hover:rotate-12 transition-all duration-300">
                  <Phone className="h-4 w-4 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-sm text-white/90 font-medium hover:text-white group-hover:translate-x-1 transition-all duration-300">
                  (480) 790-6666
                </span>
              </div>
              
              {/* Email */}
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 hover:scale-110 transition-all duration-300">
                  <Mail className="h-4 w-4 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-sm text-white/90 font-medium break-all hover:text-white group-hover:translate-x-1 transition-all duration-300">
                  info@chollabehavioralhealth.com
                </span>
              </div>
              
              {/* Hours */}
              <div className="flex items-start space-x-3 group cursor-pointer">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 hover:scale-110 hover:rotate-180 transition-all duration-500">
                  <Clock className="h-4 w-4 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-sm text-white/90 group-hover:translate-x-1 transition-transform duration-300">
                  <p className="font-medium text-white">Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-white font-semibold bg-white/15 px-3 py-1.5 rounded-lg mt-2 inline-block hover:bg-white/25 hover:scale-105 transition-all duration-300">
                    24/7 Crisis Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/90 font-medium text-center md:text-left">
              © 2025 Cholla Behavioral Health. All rights reserved.{' '}
              <span className="text-white font-semibold">
                Powered by TecnoSphere
              </span>
            </p>
            <Link 
              to="/privacy-policy" 
              className="text-sm text-white/90 hover:text-white hover:underline hover:scale-105 font-medium transition-all duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}