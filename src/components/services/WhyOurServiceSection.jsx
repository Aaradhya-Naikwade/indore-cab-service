import { BadgeCheck, Clock3, Headset, MapPinned, ShieldCheck, Wallet } from "lucide-react"

const FEATURES = [
  { title: "Transparent Pricing", icon: Wallet },
  { title: "Verified Drivers", icon: ShieldCheck },
  { title: "Always On-Time", icon: Clock3 },
  { title: "24/7 Customer Support", icon: Headset },
  { title: "Live Route Visibility", icon: MapPinned },
  { title: "Quality Assurance", icon: BadgeCheck },
]

function WhyOurServiceSection() {
  return (
    <section className="section-space bg-slate-950">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-slate-100 uppercase">
            Why Choose Our Services
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Built for Reliability at Every Step</h2>
          <p className="mt-3 text-base text-slate-300">
            We combine disciplined operations with customer-first support to deliver a premium ride experience.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <article
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10"
              >
                <div className="inline-flex rounded-lg bg-brand-500/15 p-2.5 text-brand-100 ring-1 ring-brand-500/25">
                  <Icon size={18} />
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white">{feature.title}</h3>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyOurServiceSection
