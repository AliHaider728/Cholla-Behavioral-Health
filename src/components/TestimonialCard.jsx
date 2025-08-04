import { Star, Quote } from "lucide-react"

export default function TestimonialCard({ name, location, rating, testimonial, className = "" }) {
  return (
    <div className={`gsap-stagger bg-white rounded-xl shadow-lg p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
          ))}
        </div>
        <Quote className="h-8 w-8 text-primary-200" />
      </div>

      <blockquote className="text-gray-700 mb-4 leading-relaxed italic">"{testimonial}"</blockquote>

      <div className="border-t pt-4">
        <p className="font-semibold text-gray-900">{name}</p>
        {location && <p className="text-sm text-gray-600">{location}</p>}
      </div>
    </div>
  )
}
