import { Clock3, Headset, ShieldCheck, Sparkles } from "lucide-react"

const HIGHLIGHTS = [
  {
    title: "Punctual Dispatch",
    description: "Smart trip coordination and driver assignment to keep pickups on schedule.",
    icon: Clock3,
  },
  {
    title: "Safe Rides",
    description: "Verified drivers and maintained vehicles for dependable, secure travel.",
    icon: ShieldCheck,
  },
  {
    title: "Clean Interiors",
    description: "Comfort-focused cabins prepared for daily commute and long-route travel.",
    icon: Sparkles,
  },
  {
    title: "Live Support",
    description: "Quick assistance for booking updates, changes, and route guidance.",
    icon: Headset,
  },
]

function FleetWhyUsSection() {
  return (
    <section className="section-space bg-slate-950">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-slate-100 uppercase">
            Fleet Promise
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Why Travelers Prefer Our Fleet</h2>
          <p className="mt-3 text-base text-slate-300">
            We maintain operational discipline and customer-first support across every trip category.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10"
              >
                <div className="inline-flex rounded-lg bg-brand-500/15 p-2.5 text-brand-100 ring-1 ring-brand-500/25">
                  <Icon size={18} />
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FleetWhyUsSection
