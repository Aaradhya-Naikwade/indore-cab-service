
import { Star, Quote } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

const TESTIMONIALS = [
  {
    name: "Rohit Sharma",
    role: "Business Traveler",
    feedback:
      "Very punctual airport pickup. Driver was professional and the car was extremely clean. The entire trip felt premium and stress-free.",
  },
  {
    name: "Neha Verma",
    role: "Family Trip",
    feedback:
      "Booked an Indore to Ujjain round trip. Smooth ride, polite driver, and very comfortable vehicle. Highly recommended service.",
  },
  {
    name: "Amit Jain",
    role: "Frequent Flyer",
    feedback:
      "I use this service regularly for airport transfers. Always on time and reliable. Perfect for early morning flights.",
  },
  {
    name: "Priya Kulkarni",
    role: "Corporate Travel",
    feedback:
      "Excellent experience. The driver arrived early and helped with luggage. Very professional and safe driving.",
  },
  {
    name: "Rahul Patel",
    role: "Outstation Traveler",
    feedback:
      "Booked Indore to Bhopal cab. Comfortable ride and affordable pricing. Will definitely book again.",
  },
  {
    name: "Sanjay Gupta",
    role: "Tourist",
    feedback:
      "Used this cab for Indore city sightseeing. The driver was polite and knew all the major places. Great experience.",
  },
]

function TestimonialsSection() {
  return (
    <section
      className="relative py-28 bg-cover bg-center"
      style={{ backgroundImage: "url('/testimonial-bg.avif')" }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="container-custom relative">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto text-white">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold tracking-widest">
            TESTIMONIALS
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl font-bold">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-white/80">
            Trusted by travelers across airport transfers, city rides and
            outstation trips from Indore.
          </p>
        </div>

        {/* Swiper */}
        <div className="mt-16">

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3500 }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {TESTIMONIALS.map((item, i) => (
              <SwiperSlide key={i} className="h-auto">
                <div className="h-full rounded-2xl bg-white/95 backdrop-blur p-8 shadow-lg transition hover:shadow-2xl hover:-translate-y-1 flex flex-col">

                  {/* Quote */}
                  <Quote
                    size={28}
                    className="text-[var(--color-brand-500)]"
                  />

                  {/* Review */}
                  <p className="mt-5 text-slate-600 leading-relaxed flex-grow">
                    {item.feedback}
                  </p>

                  {/* Stars */}
                  <div className="flex gap-1 text-amber-500 mt-6">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} size={16} fill="currentColor" />
                    ))}
                  </div>

                  {/* User */}
                  <div className="mt-6 flex items-center gap-3 pt-4 border-t border-slate-200">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-brand-500)] text-white font-semibold">
                      {item.name.charAt(0)}
                    </div>

                    <div>
                      <p className="font-semibold text-slate-900">
                        {item.name}
                      </p>
                      <p className="text-sm text-slate-500">
                        {item.role}
                      </p>
                    </div>

                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

      </div>
    </section>
  )
}

export default TestimonialsSection