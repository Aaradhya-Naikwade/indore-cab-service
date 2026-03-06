function CoFounderSection() {
  return (
    <section className="section-space bg-[linear-gradient(180deg,#ffffff_0%,#fffdfa_35%,#ffffff_100%)]">
      <div className="container-custom">
        <div className="grid items-center gap-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8 lg:grid-cols-2 lg:p-10">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80"
              alt="Portrait of founder Wasim Khan"
              className="h-full min-h-[360px] w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-3 inline-flex rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold tracking-wide text-brand-700 uppercase">
              Our Co-Founder
            </p>
            <h2 className="text-3xl font-bold text-ink-900 sm:text-4xl">Our Founder, Wasim Khan</h2>
            <p className="mt-4 text-base text-ink-700">
              Mr. Wasim Khan, the visionary behind Indore Airport Cab Service, has been a driving force in the taxi
              service industry for over two decades.
            </p>
            <p className="mt-4 text-base text-ink-700">
              His unwavering commitment to quality, safety, and customer satisfaction has laid the foundation for our
              company’s success.
            </p>
            <p className="mt-4 text-base text-ink-700">
              His vast experience has given him a deep understanding of the needs and preferences of our clients, and
              he continues to inspire us to deliver top-notch services.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoFounderSection
