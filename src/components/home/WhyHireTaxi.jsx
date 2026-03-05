function WhyHireTaxi() {
  return (
    <section className="py-24 bg-white">

      <div className="container-custom">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>

            <span className="inline-block rounded-full bg-[var(--color-brand-50)] px-4 py-1 text-xs font-semibold tracking-widest text-[var(--color-brand-600)]">
              TAXI SERVICE IN INDORE
            </span>

            <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
              Why Hire Car Rental Service in
              <span className="text-[var(--color-brand-600)]"> Indore?</span>
            </h2>

            <div className="mt-8 space-y-6 text-slate-600 leading-relaxed">

              <p>
                Our Car Taxi Service in Indore is synonymous with punctuality
                and reliability. We understand the importance of reaching your
                destination on time, and we make it our mission to provide
                prompt pick-ups and drop-offs. With our user-friendly booking
                system, you can easily reserve a taxi anytime, 24/7.
              </p>

              <p>
                Safety is our utmost priority. All our vehicles undergo regular
                maintenance and safety checks. Our drivers are professionally
                trained and knowledgeable about the city’s routes, ensuring a
                smooth and secure journey for all passengers.
              </p>

              <p>
                We offer competitive pricing with transparent fare structures
                so you always know what to expect. No hidden fees or surprises —
                just affordable and convenient taxi services.
              </p>

              <p className="font-medium text-slate-800">
                Whether you’re a local resident or a visitor, our taxi services
                provide a comfortable and dependable travel experience in
                Indore.
              </p>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg">

              <img
                src="/why-hire.jpg"
                alt="Taxi Service in Indore"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default WhyHireTaxi