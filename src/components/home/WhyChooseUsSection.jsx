import {
  BadgePercent,
  Clock3,
  HandCoins,
  Headset,
  ShieldCheck,
  TicketCheck,
} from "lucide-react"

const REASONS = [
  {
    title: "Easy Booking",
    description:
      "Fast booking flow with instant confirmation for airport and city rides.",
    icon: TicketCheck,
  },
  {
    title: "Ready To Ride",
    description:
      "Quick dispatch and proactive driver updates for a smooth pickup experience.",
    icon: Clock3,
  },
  {
    title: "Affordable Pricing",
    description:
      "Transparent fares with no hidden costs and clear trip estimates upfront.",
    icon: HandCoins,
  },
  {
    title: "On Time Services",
    description:
      "Punctual pickups and drop-offs planned around your schedule and route.",
    icon: ShieldCheck,
  },
  {
    title: "24/7 Customer Support",
    description:
      "Always-available support to help with changes, updates, and urgent bookings.",
    icon: Headset,
  },
  {
    title: "Best Price Guarantee",
    description:
      "Premium ride quality delivered at competitive, value-focused pricing.",
    icon: BadgePercent,
  },
]

function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="container-custom">

        {/* Heading */}
        <div className="mb-16 text-center max-w-3xl mx-auto">

          <span className="inline-block rounded-full bg-[var(--color-brand-50)] px-4 py-1 text-xs font-semibold tracking-widest text-[var(--color-brand-600)]">
            WHY CHOOSE US
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
            Reliable, Comfortable &
            <span className="text-[var(--color-brand-600)]"> Hassle-Free Travel</span>
          </h2>

          <p className="mt-4 text-slate-600">
            Every ride is designed around punctuality, transparent pricing
            and professional drivers for airport and city travel.
          </p>

        </div>

        {/* Feature Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {REASONS.map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-brand-50)] text-[var(--color-brand-600)] transition group-hover:bg-[var(--color-brand-600)] group-hover:text-white">
                <item.icon size={24} />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>

            </article>
          ))}

        </div>

      </div>

    </section>
  )
}

export default WhyChooseUsSection