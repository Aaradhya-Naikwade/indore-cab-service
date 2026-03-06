const STEPS = [
  {
    step: "01",
    title: "Choose Service",
    description: "Select airport, city, or outstation travel and share your route and pickup time.",
  },
  {
    step: "02",
    title: "Confirm Booking",
    description: "Get fare transparency and booking confirmation in minutes with quick support.",
  },
  {
    step: "03",
    title: "Ride Stress-Free",
    description: "Your assigned driver arrives on time and completes your trip safely and smoothly.",
  },
]

function HowItWorksSection() {
  return (
    <section className="section-space bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 inline-flex rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold tracking-wide text-brand-700 uppercase">
            How It Works
          </p>
          <h2 className="text-3xl font-bold text-ink-900 sm:text-4xl">Simple Booking, Reliable Service</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {STEPS.map((item) => (
            <article
              key={item.step}
              className="rounded-2xl border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f8fafc)] p-6 shadow-soft"
            >
              <p className="text-sm font-semibold tracking-widest text-brand-600">{item.step}</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-700">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
