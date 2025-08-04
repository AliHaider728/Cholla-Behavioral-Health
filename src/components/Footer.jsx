import { Link } from "react-router-dom"
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative container mx-auto px-4 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 lg:h-18 lg:w-18 bg-gradient-to-r from-gray-100 to-white rounded-2xl flex items-center justify-center shadow-2xl ring-2 ring-blue-400/30">
               <img src="https://chollabehavioralhealth.com/wp-content/uploads/2024/02/Cholla-Behavioral-Health.png" alt=""
                className="logo w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 object-contain" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Cholla Behavioral Health</h3>
                <p className="text-sm text-blue-200 font-medium">You Deserve To Be Well</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Providing comprehensive mental health and addiction treatment services with compassion, expertise, and
              evidence-based care for lasting recovery and wellness.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="group relative p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-blue-500/20">
                <Facebook className="h-5 w-5 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
              <a href="#" className="group relative p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-blue-500/20">
                <Twitter className="h-5 w-5 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
              <a href="#" className="group relative p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-blue-500/20">
                <Instagram className="h-5 w-5 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
              <a href="#" className="group relative p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-blue-500/20">
                <Linkedin className="h-5 w-5 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white tracking-tight relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="group flex items-center text-slate-300 hover:text-white transition-all duration-300 text-sm font-medium">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="group flex items-center text-slate-300 hover:text-white transition-all duration-300 text-sm font-medium">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="group flex items-center text-slate-300 hover:text-white transition-all duration-300 text-sm font-medium">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="group flex items-center text-slate-300 hover:text-white transition-all duration-300 text-sm font-medium">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white tracking-tight relative">
              Programs
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
               <li>
                <Link
                  to="/contact-us"
                  className="group flex items-start text-slate-300 hover:text-white transition-all duration-300 text-sm font-medium leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"></span>
                  Appointment
                </Link>
              </li>
              <li>
                <Link
                  to="/mat-med-management"
                  className="group flex items-start text-slate-300 hover:text-white transition-all duration-300 text-sm font-medium leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"></span>
                  Medication Prescribing and Management
                </Link>
              </li>

              <li>
                <Link
                  to="/outpatient-levels-of-care"
                  className="group flex items-center text-slate-300 hover:text-white transition-all duration-300 text-sm font-medium"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  PHP IOP OP
                </Link>
              </li>
              <li>
                <Link
                  to="/concentration-acceleration-program"
                  className="group flex items-center text-slate-300 hover:text-white transition-all duration-300 text-sm font-medium"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  ADHD Concentration
                </Link>
              </li>
              <li>
                <Link
                  to="/ServicesPage"
                  className="group flex items-center text-slate-300 hover:text-white transition-all duration-300 text-sm font-medium"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Individual Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white tracking-tight relative">
              Contact Info
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            </h4>
            <div className="space-y-4">
              <div className="group flex items-start space-x-4 p-3 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-blue-500/30 transition-all duration-300">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0 group-hover:text-blue-300 transition-colors duration-300" />
                <div className="text-sm text-slate-300 group-hover:text-white transition-colors duration-300">
                  <p className="font-medium">Mesa, AZ</p>
                </div>
              </div>
              <div className="group flex items-center space-x-4 p-3 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-blue-500/30 transition-all duration-300 cursor-pointer">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0 group-hover:text-blue-300 transition-colors duration-300" />
                <span className="text-sm text-slate-300 group-hover:text-white transition-colors duration-300 font-medium">(480) 790-6666</span>
              </div>
              <div className="group flex items-center space-x-4 p-3 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-blue-500/30 transition-all duration-300 cursor-pointer">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0 group-hover:text-blue-300 transition-colors duration-300" />
                <span className="text-sm text-slate-300 group-hover:text-white transition-colors duration-300 font-medium break-all">info@chollabehavioralhealth.com</span>
              </div>
              <div className="group flex items-start space-x-4 p-3 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-blue-500/30 transition-all duration-300">
                <Clock className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0 group-hover:text-blue-300 transition-colors duration-300" />
                <div className="text-sm text-slate-300 group-hover:text-white transition-colors duration-300">
                  <p className="font-medium">Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-blue-300 font-semibold">24/7 Crisis Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-300 font-medium md:flex  text-center" >© 2024 Cholla Behavioral Health. All rights reserved. <span  className="bouns"> Powerd by TecnoSphere</span></p>
            <div className="flex space-x-8">
              <Link to="/privacy-policy" className="group relative text-sm text-slate-300 hover:text-white transition-colors duration-300 font-medium">
                Privacy Policy
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}