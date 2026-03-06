import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

function FleetHeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1900&q=80')",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(2,8,23,0.9),rgba(15,23,42,0.74)_45%,rgba(238,146,6,0.36)_115%)]" />

      <div className="container-custom flex min-h-[68vh] items-center py-16 lg:py-24">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white uppercase backdrop-blur">
            Our Fleet
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Comfort-First Fleet for Airport, City, and Outstation Trips
          </h1>
          <p className="mt-5 max-w-2xl text-base text-slate-100/95 sm:text-lg">
            Discover professionally maintained vehicles designed for smooth rides, punctual arrivals, and better travel
            experience across Indore and nearby destinations.
          </p>
          <div className="mt-8">
            <Link to="/book-now" className="btn-primary">
              Book Now
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FleetHeroSection
