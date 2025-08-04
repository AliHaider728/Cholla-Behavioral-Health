import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function ServiceCard({ title, description, icon: Icon, href, features, className = "" }) {
  const CardContent = () => (
    <div
      className={`gsap-stagger bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-6 h-full ${className}`}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
          <Icon className="h-6 w-6 text-primary-600" />
        </div>
        <h3 className="text-xl font-heading font-semibold text-gray-900">{title}</h3>
      </div>

      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

      {features && (
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
              <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {href && (
        <div className="flex items-center text-primary-600 font-medium group">
          <span>Learn More</span>
          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      )}
    </div>
  )

  if (href) {
    return (
      <Link to={href} className="block h-full">
        <CardContent />
      </Link>
    )
  }

  return <CardContent />
}
