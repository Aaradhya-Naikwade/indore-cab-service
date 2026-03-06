import { Link } from "react-router-dom"
import { ArrowRight, PhoneCall } from "lucide-react"

function ServicesHeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1900&q=80')",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(2,8,23,0.9),rgba(15,23,42,0.74)_45%,rgba(238,146,6,0.38)_110%)]" />

      <div className="container-custom flex min-h-[68vh] items-center py-16 lg:py-24">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white uppercase backdrop-blur">
            Premium Taxi Services
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Professional Cab Services for Airport, City, and Outstation Travel
          </h1>
          <p className="mt-5 max-w-2xl text-base text-slate-100/95 sm:text-lg">
            Book reliable rides with verified drivers, transparent pricing, and smooth end-to-end support designed
            for modern travelers.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/book-now" className="btn-primary">
              Book Now
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+919826498273"
              className="inline-flex items-center gap-2 rounded-xl border border-white/35 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              <PhoneCall size={15} />
              Call +91 9826498273
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesHeroSection
