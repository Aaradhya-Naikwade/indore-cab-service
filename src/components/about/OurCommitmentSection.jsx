import { BadgeCheck, Handshake, IndianRupee, LifeBuoy, ShieldCheck, Timer } from "lucide-react"

const COMMITMENTS = [
  {
    title: "Reliability",
    description:
      "Our fleet of well-maintained vehicles and experienced drivers ensure that you reach your destination safely and on time, every time.",
    icon: Timer,
  },
  {
    title: "Safety",
    description:
      "Your safety is paramount. We maintain strict safety standards and follow all necessary protocols to keep you protected during your journey.",
    icon: ShieldCheck,
  },
  {
    title: "Customer Satisfaction",
    description:
      "We believe that happy customers are the cornerstone of our success. We strive to exceed your expectations, making your ride with us a pleasant and hassle-free experience.",
    icon: BadgeCheck,
  },
  {
    title: "Competitive Pricing",
    description:
      "We offer affordable rates without compromising on the quality of service. Our transparent pricing ensures you get value for your money.",
    icon: IndianRupee,
  },
  {
    title: "Convenience",
    description:
      "We understand the importance of a seamless travel experience. That’s why we provide easy booking options and 24/7 customer support to assist you with any queries or concerns.",
    icon: LifeBuoy,
  },
  {
    title: "Community Engagement",
    description:
      "We actively contribute to the communities we serve, promoting responsible and sustainable business practices.",
    icon: Handshake,
  },
]

function OurCommitmentSection() {
  return (
    <section className="section-space bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 inline-flex rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold tracking-wide text-brand-700 uppercase">
            Our Commitment
          </p>
          <h2 className="text-3xl font-bold text-ink-900 sm:text-4xl">Service Standards We Never Compromise On</h2>
          <p className="mt-3 text-base text-ink-700">
            At Indore Airport Cab Service, we pride ourselves on delivering a service that goes above and beyond the
            ordinary. We are committed to providing:
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {COMMITMENTS.map((item) => {
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

export default OurCommitmentSection
