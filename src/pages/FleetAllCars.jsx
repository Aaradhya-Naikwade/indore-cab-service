import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle2, PhoneCall } from "lucide-react"
import { CONTACT_PHONE, FLEET_BY_CATEGORY, WHATSAPP_NUMBER } from "../components/fleet/fleetData"

function FleetAllCars() {
  return (
    <main>
      <section className="section-space bg-gradient-to-b from-white via-slate-50/60 to-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 inline-flex rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold tracking-wide text-brand-700 uppercase">
              All Cars
            </p>
            <h1 className="text-3xl font-bold text-ink-900 sm:text-4xl">Category-Wise Fleet Listing</h1>
            <p className="mt-3 text-base text-ink-700">
              Browse all available vehicles by category with complete details and quick booking options.
            </p>
            <div className="mt-6">
              <Link to="/fleet" className="btn-outline">
                Back to Fleet
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="mt-10 space-y-12">
            {FLEET_BY_CATEGORY.map((category) => (
              <section key={category.title}>
                <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <h2 className="text-2xl font-bold text-ink-900 sm:text-3xl">{category.title}</h2>
                    <p className="mt-1 text-sm text-ink-600">
                      {category.tag} | {category.cars.length} options available
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {category.cars.map((car) => (
                    <article
                      key={car.name}
                      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
                    >
                      <div className="relative h-56 overflow-hidden">
                        <img src={car.image} alt={car.name} className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">
                          {car.name}
                        </span>
                      </div>

                      <div className="p-6">
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-sm text-ink-700">
                            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-600" />
                            <span>Doors : {car.doors}</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-ink-700">
                            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-600" />
                            <span>Other Charges : {car.otherCharges}</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-ink-700">
                            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-600" />
                            <span>Charges : {car.charges}</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-ink-700">
                            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-600" />
                            <span>Air Conditioned : {car.airConditioned}</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-ink-700">
                            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-600" />
                            <span>Manufacturer : {car.manufacturer}</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-ink-700">
                            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-600" />
                            <span>Seating Capacity : {car.seatingCapacity}</span>
                          </li>
                        </ul>

                        <div className="mt-6 flex flex-wrap gap-3">
                          <a
                            href={`tel:${CONTACT_PHONE}`}
                            className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-600"
                          >
                            <PhoneCall size={14} />
                            Call Now
                          </a>
                          <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-ink-700 transition hover:border-brand-500 hover:text-brand-700"
                          >
                            <i className="fa-brands fa-whatsapp text-base leading-none" aria-hidden="true" />
                            WhatsApp
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default FleetAllCars
