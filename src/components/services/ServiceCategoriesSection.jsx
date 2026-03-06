import { Briefcase, CarFront, Clock3, MapPinned, PlaneTakeoff, Users } from "lucide-react"

const SERVICES = [
  {
    title: "Airport Pickup & Drop",
    description: "On-time airport transfers with flight-aware scheduling and driver coordination.",
    icon: PlaneTakeoff,
  },
  {
    title: "City Taxi Rides",
    description: "Fast and comfortable local rides for office travel, shopping, and family outings.",
    icon: CarFront,
  },
  {
    title: "Outstation Cabs",
    description: "One-way and round-trip outstation journeys with flexible route support.",
    icon: MapPinned,
  },
  {
    title: "Hourly Rentals",
    description: "Dedicated cabs for multiple stops, meetings, and full-day city requirements.",
    icon: Clock3,
  },
  {
    title: "Corporate Travel",
    description: "Professional ride management for teams, guests, and executive movement.",
    icon: Briefcase,
  },
  {
    title: "Group Transfers",
    description: "Spacious and coordinated travel options for events and family group plans.",
    icon: Users,
  },
]

function ServiceCategoriesSection() {
  return (
    <section className="section-space bg-gradient-to-b from-white via-slate-50/60 to-white">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 inline-flex rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold tracking-wide text-brand-700 uppercase">
            Service Categories
          </p>
          <h2 className="text-3xl font-bold text-ink-900 sm:text-4xl">Everything You Need in One Platform</h2>
          <p className="mt-3 text-base text-ink-700">
            Purpose-built cab services for airport travelers, city commuters, businesses, and families.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="inline-flex rounded-xl bg-brand-50 p-3 text-brand-600 ring-1 ring-brand-100">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-700">{item.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServiceCategoriesSection
