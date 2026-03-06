import { Link } from "react-router-dom"
import { ArrowRight, CarFront, PhoneCall } from "lucide-react"
import { CONTACT_PHONE, FLEET_BY_CATEGORY, WHATSAPP_NUMBER } from "./fleetData"

function FleetCategoriesSection() {
  return (
    <section className="section-space bg-gradient-to-b from-white via-slate-50/60 to-white">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="text-center lg:text-left">
              <p className="mb-3 inline-flex rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold tracking-wide text-brand-700 uppercase">
                Fleet Categories
              </p>
              <h2 className="text-3xl font-bold text-ink-900 sm:text-4xl">Choose the Right Category for Your Trip</h2>
              <p className="mt-3 text-base text-ink-700">
                Explore category-wise options from hatchback to luxury and tempo traveller, with quick call and
                WhatsApp support.
              </p>
            </div>
            <Link to="/fleet/all-cars" className="btn-outline">
              View All
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {FLEET_BY_CATEGORY.map((item) => {
            const primaryCar = item.cars[0]
            const carNames = item.cars.map((car) => car.name)
            return (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={primaryCar.image} alt={`${item.title} category`} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">
                  <CarFront size={14} />
                  {item.cars.length} Cars
                </span>
                <span className="absolute bottom-4 left-4 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white">
                  {item.tag}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-700">
                  Available cars: <span className="font-medium text-ink-900">{carNames.join(", ")}</span>
                </p>
                <p className="mt-1 text-sm text-ink-600">
                  Starting from <span className="font-semibold text-brand-700">{primaryCar.charges}</span>
                </p>
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
          )})}
        </div>
      </div>
    </section>
  )
}

export default FleetCategoriesSection
