function AboutUsSection() {
  return (
    <section className="section-space bg-gradient-to-b from-white via-slate-50/60 to-white">
      <div className="container-custom">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lift">
            <img
              src="https://images.unsplash.com/photo-1556122071-e404eaedb77f?auto=format&fit=crop&w=1400&q=80"
              alt="Professional cab service team in Indore"
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-3 inline-flex rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold tracking-wide text-brand-700 uppercase">
              About Us
            </p>
            <h2 className="text-3xl font-bold text-ink-900 sm:text-4xl">Trusted Cab Partner for Every Journey</h2>
            <p className="mt-4 text-base text-ink-700">
              Indore Airport Cab Service has built its reputation on punctuality, clean vehicles, and professional
              service standards. Whether you are catching a flight, heading for a city meeting, or planning an
              outstation trip, our team ensures a smooth and reliable ride from booking to drop-off.
            </p>
            <p className="mt-4 text-base text-ink-700">
              We combine experienced drivers, transparent pricing, and round-the-clock support to deliver a modern
              travel experience you can trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection
