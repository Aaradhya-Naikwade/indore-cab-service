import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

function CallToAction() {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/our-fleet-bg.jpg')",
      }}
    >

      {/* overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="container-custom relative py-20 text-center text-white">

        <h3 className="text-3xl font-bold md:text-4xl">
          Need a Cab Right Now?
        </h3>

        <p className="mx-auto mt-4 max-w-xl text-white/80">
          Get a confirmed ride in minutes for airport transfers,
          city travel or outstation trips.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">

          <Link
            to="/book-now"
            className="group inline-flex items-center gap-2 rounded-xl bg-[var(--color-brand-600)] px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[var(--color-brand-700)] hover:shadow-lg"
          >
            Book Now
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

          <a
            href="tel:+919826498273"
            className="inline-flex items-center gap-2 rounded-xl border border-white px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-900"
          >
            Call +91 9826498273
          </a>

        </div>

      </div>

    </section>
  )
}

export default CallToAction