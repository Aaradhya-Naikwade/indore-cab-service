function BookNowHeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?auto=format&fit=crop&w=1900&q=80')",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(2,8,23,0.9),rgba(15,23,42,0.72)_45%,rgba(238,146,6,0.34)_110%)]" />

      <div className="container-custom flex min-h-[68vh] items-center py-16 lg:py-24">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white uppercase backdrop-blur">
            Book Now
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Confirm Your Ride in Minutes
          </h1>
          <p className="mt-5 max-w-2xl text-base text-slate-100/95 sm:text-lg">
            Fill the booking form with your pickup and drop details. Our team will connect quickly to confirm your cab
            and fare.
          </p>
        </div>
      </div>
    </section>
  )
}

export default BookNowHeroSection
