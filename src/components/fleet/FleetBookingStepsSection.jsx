const STEPS = [
  {
    step: "01",
    title: "Select Category",
    description: "Pick the ride category based on your airport, city, outstation, or corporate requirement.",
  },
  {
    step: "02",
    title: "Confirm Trip Details",
    description: "Share pickup/drop details and get transparent fare breakdown before confirmation.",
  },
  {
    step: "03",
    title: "Ride with Confidence",
    description: "Driver arrives on time and completes your journey with comfort and professional support.",
  },
]

function FleetBookingStepsSection() {
  return (
    <section className="section-space bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 inline-flex rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold tracking-wide text-brand-700 uppercase">
            Booking Flow
          </p>
          <h2 className="text-3xl font-bold text-ink-900 sm:text-4xl">How to Book Fleet in 3 Steps</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {STEPS.map((item) => (
            <article key={item.step} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 shadow-soft">
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

export default FleetBookingStepsSection
