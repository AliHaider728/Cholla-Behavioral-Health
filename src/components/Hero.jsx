import { useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Phone } from "lucide-react"
import { gsap } from "gsap"

export default function Hero({
  title,
  subtitle,
  description,
  primaryCTA = { text: "Get Started", href: "/contact-us" },
  secondaryCTA,
  backgroundImage = "/placeholder.svg?height=600&width=1200",
  overlay = true,
}) {
  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(".hero-content", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
      .fromTo(".hero-subtitle", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.5")
      .fromTo(".hero-title", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.6")
      .fromTo(
        ".hero-description",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.4",
      )
      .fromTo(
        ".hero-cta",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.1 },
        "-=0.2",
      )
  }, [])

  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundAttachment: "fixed" }}
      />

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#3b97d0] to-[#128dda] bg-opacity-70" />
      )}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>

    {/* Floating elements */}
    <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
    <div
      className="absolute bottom-20 right-10 w-20 h-20 bg-white/20 rounded-full animate-bounce"
      style={{ animationDelay: "1s" }}
    ></div>
    <div
      className="absolute top-1/2 left-1/4 w-8 h-8 bg-white/30 rounded-full animate-pulse"
      style={{ animationDelay: "0.5s" }}
    ></div>
      {/* Content */}
      <div className="hero-content relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto">
          {subtitle && <p className="hero-subtitle text-white text-lg md:text-xl font-medium mb-4">{subtitle}</p>}

          <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            {title}
          </h1>

          <p className="hero-description text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to={primaryCTA.href}
              className="hero-cta  bg-gradient-to-r hover:bg-none hover:border-white border-2 border-transparent  hover:text-white hover:border-2 duration-300 transition-all   from-red-600 via-red-700 to-red-500    rounded-lg  text-lg px-8 py-4 inline-flex items-center space-x-2 group"
            >
              <span>{primaryCTA.text}</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {secondaryCTA && (
              <Link
                to={secondaryCTA.href}
                className="hero-cta btn-secondary  hover:bg-white hover:border-white   bg-transparent text-white border-2 border-white hover:text-red-600  text-lg px-8 py-4 inline-flex items-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>{secondaryCTA.text}</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2  text-white animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
