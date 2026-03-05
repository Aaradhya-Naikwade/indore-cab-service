
import { useEffect, useState } from "react"
import { Quote, Star } from "lucide-react"

const TESTIMONIALS = [
  {
    name: "Rohit Sharma",
    role: "Business Traveler",
    feedback:
      "Very punctual airport pickup. Driver was professional and the car was clean. The entire trip felt premium.",
  },
  {
    name: "Neha Verma",
    role: "Family Trip",
    feedback:
      "Booked for Ujjain round trip. Smooth ride, polite driver, and fair pricing. Exactly the reliability we wanted.",
  },
  {
    name: "Amit Jain",
    role: "Frequent Flyer",
    feedback:
      "I use this service regularly for early morning flights. On-time service every single time. Highly recommended.",
  },
]

function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="relative py-24 bg-cover bg-center"
      style={{
        backgroundImage: "url('/testimonial-bg.avif')",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="container-custom relative">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center text-white">

          <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold tracking-widest text-white">
            TESTIMONIALS
          </span>

          <h2 className="mt-6 text-3xl font-bold md:text-4xl">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-white/80">
            Trusted by travelers across airport, city and outstation routes
            from Indore.
          </p>

        </div>

        {/* Slider */}
        <div className="mt-16 flex justify-center">

          <div className="relative w-full max-w-3xl overflow-hidden">

            <div
              className="flex transition-transform duration-700"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >

              {TESTIMONIALS.map((item, i) => (
                <div key={i} className="w-full flex-shrink-0 px-3">

                  <article className="rounded-2xl bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-1">

                    {/* top */}
                    <div className="flex items-center justify-between">

                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-brand-50)] text-[var(--color-brand-600)]">
                        <Quote size={20} />
                      </span>

                      <span className="flex items-center gap-1 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={15} fill="currentColor" />
                        ))}
                      </span>

                    </div>

                    {/* text */}
                    <p className="mt-6 text-sm leading-7 text-slate-600">
                      {item.feedback}
                    </p>

                    {/* user */}
                    <div className="mt-6 border-t border-slate-100 pt-4">

                      <p className="font-semibold text-slate-900">
                        {item.name}
                      </p>

                      <p className="text-sm text-slate-500">
                        {item.role}
                      </p>

                    </div>

                  </article>

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">

          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === index
                  ? "w-8 bg-[var(--color-brand-500)]"
                  : "w-2.5 bg-white/40"
              }`}
            />
          ))}

        </div>

      </div>
    </section>
  )
}

export default Testimonials