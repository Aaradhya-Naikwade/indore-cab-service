import { Link } from "react-router-dom"
import { MapPin, Phone } from "lucide-react"

function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-black text-slate-300 overflow-hidden">

      {/* background glow */}
      <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 bg-[var(--color-brand-600)] opacity-10 blur-[120px]"></div>

      <div className="container-custom relative py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            {/* <img
              src="/Indore-airport-cab-service-logo-1.webp"
              alt="Indore Airport Cab Service logo"
              className="h-50 w-auto rounded-md p-1"
            /> */}
            <h3 className="text-xl font-bold text-white">
              Indore Airport Cab Service
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Reliable airport transfers, local rides and outstation taxi
              services with professional drivers, clean vehicles and
              transparent pricing.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>

            <div className="mt-5 flex flex-col gap-3 text-sm">

              <Link
                to="/"
                className="transition hover:text-[var(--color-brand-400)]"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="transition hover:text-[var(--color-brand-400)]"
              >
                About Us
              </Link>

              <Link
                to="/services"
                className="transition hover:text-[var(--color-brand-400)]"
              >
                Our Services
              </Link>

              <Link
                to="/fleet"
                className="transition hover:text-[var(--color-brand-400)]"
              >
                Our Fleet
              </Link>

              <Link
                to="/contact"
                className="transition hover:text-[var(--color-brand-400)]"
              >
                Contact Us
              </Link>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>

            <div className="mt-5 space-y-4 text-sm">

              <p className="flex items-start gap-3 text-slate-400">
                <MapPin
                  size={40}
                  className="mt-0.5 text-[var(--color-brand-500)]"
                />
                Hno 155 Krishna Vatika Chota Bangarda
                Indore Madhya Pradesh 452005
              </p>

              <a
                href="tel:+919826498273"
                className="flex items-center gap-3 text-slate-400 transition hover:text-[var(--color-brand-400)]"
              >
                <Phone size={18} className="text-[var(--color-brand-500)]" />
                +91 9826498273
              </a>

              <a
                href="https://wa.me/919826498273?text=Hi%2C%20I%20want%20to%20book%20a%20cab."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-400 transition hover:text-[var(--color-brand-400)]"
              >
                <i className="fa-brands fa-whatsapp text-lg leading-none text-[var(--color-brand-500)]" aria-hidden="true" />
                WhatsApp Chat
              </a>

            </div>
          </div>

          {/* CTA */}
          <div>

            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Book Ride
            </h4>

            <p className="mt-4 text-sm text-slate-400">
              Need an airport pickup or urgent ride? Book instantly with our
              fast cab service.
            </p>

            <Link
              to="/book-now"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[var(--color-brand-600)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-brand-700)]"
            >
              Book Now
            </Link>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">

          <p>
            © {new Date().getFullYear()} Indore Airport Cab Service. All rights
            reserved.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer
