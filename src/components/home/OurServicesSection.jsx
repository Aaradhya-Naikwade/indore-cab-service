// import { Link } from "react-router-dom"
// import {
//   ArrowRight,
//   BriefcaseBusiness,
//   CarTaxiFront,
//   Clock3,
//   PlaneLanding,
//   PlaneTakeoff,
// } from "lucide-react"

// const SERVICES = [
//   {
//     title: "Airport Pickup",
//     description:
//       "Real-time pickup coordination with flight tracking and punctual driver arrival.",
//     icon: PlaneLanding,
//   },
//   {
//     title: "Airport Drop",
//     description:
//       "Planned departure rides with route-aware timing to keep your travel stress-free.",
//     icon: PlaneTakeoff,
//   },
//   {
//     title: "Outstation Taxi",
//     description:
//       "One-way and round trips from Indore with transparent rates and clean vehicles.",
//     icon: BriefcaseBusiness,
//   },
//   {
//     title: "Local Taxi",
//     description:
//       "On-demand city rides for office, shopping, meetings, and daily travel.",
//     icon: CarTaxiFront,
//   },
//   {
//     title: "Tour Packages",
//     description:
//       "Comfortable sightseeing plans for families and groups with professional chauffeurs.",
//     icon: Clock3,
//   },
//   {
//     title: "Tour Packages",
//     description:
//       "Comfortable sightseeing plans for families and groups with professional chauffeurs.",
//     icon: BriefcaseBusiness,
//   },
// ]

// function OurServicesSection() {
//   return (
//     <section className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">

//       {/* Decorative Background Blur */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--color-brand-500)] opacity-10 blur-[140px]"></div>

//       <div className="container-custom relative">

//         {/* Section Header */}
//         <div className="mx-auto max-w-3xl text-center">

//           <span className="inline-block rounded-full bg-[var(--color-brand-50)] px-4 py-1 text-xs font-semibold tracking-widest text-[var(--color-brand-600)]">
//             OUR SERVICES
//           </span>

//           <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
//             Reliable Cab Services for
//             <span className="text-[var(--color-brand-600)]"> Every Journey</span>
//           </h2>

//           <p className="mt-4 text-slate-600 leading-relaxed">
//             Professional airport transfers, city rides and outstation travel
//             with clean vehicles, verified drivers and guaranteed on-time service.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

//           {SERVICES.map((service) => (
//             <div
//               key={service.title}
//               className="group relative rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_-20px_rgba(0,0,0,0.25)]"
//             >

             
//               {/* Icon */}
//               <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-brand-500)] to-[var(--color-brand-700)] text-white shadow-md transition group-hover:scale-110">
//                 <service.icon size={24} />
//               </div>

//               {/* Title */}
//               <h3 className="mt-6 text-xl font-semibold text-slate-900">
//                 {service.title}
//               </h3>

//               {/* Description */}
//               <p className="mt-3 text-sm text-slate-600 leading-relaxed">
//                 {service.description}
//               </p>

//               {/* CTA */}
//               <Link
//                 to="/book-now"
//                 className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-600)] transition hover:text-[var(--color-brand-700)]"
//               >
//                 Book Now
//                 <ArrowRight
//                   size={16}
//                   className="transition-transform duration-300 group-hover:translate-x-1"
//                 />
//               </Link>

//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-20 flex justify-center">
//           <Link
//             to="/services"
//             className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-brand-600)] to-[var(--color-brand-700)] px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl"
//           >
//             View All Services
//             <ArrowRight
//               size={18}
//               className="transition-transform group-hover:translate-x-1"
//             />
//           </Link>
//         </div>

//       </div>
//     </section>
//   )
// }

// export default OurServicesSection









import { Link } from "react-router-dom"
import {
  ArrowRight,
  BriefcaseBusiness,
  CarTaxiFront,
  Clock3,
  PlaneLanding,
  PlaneTakeoff,
} from "lucide-react"

const SERVICES = [
  {
    title: "Airport Pickup",
    description:
      "Real-time pickup coordination with flight tracking and punctual driver arrival.",
    icon: PlaneLanding,
  },
  {
    title: "Airport Drop",
    description:
      "Planned departure rides with route-aware timing to keep your travel stress-free.",
    icon: PlaneTakeoff,
  },
  {
    title: "Outstation Taxi",
    description:
      "One-way and round trips from Indore with transparent rates and clean vehicles.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Local Taxi",
    description:
      "On-demand city rides for office, shopping, meetings, and daily travel.",
    icon: CarTaxiFront,
  },
  {
    title: "Tour Packages",
    description:
      "Comfortable sightseeing plans for families and groups with professional chauffeurs.",
    icon: Clock3,
  },
  {
    title: "Corporate Travel",
    description:
      "Reliable transport solutions for business meetings, airport transfers and events.",
    icon: BriefcaseBusiness,
  },
]

function OurServicesSection() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="container-custom">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-block rounded-full bg-[var(--color-brand-50)] px-4 py-1 text-xs font-semibold tracking-widest text-[var(--color-brand-600)]">
            OUR SERVICES
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
            Reliable Cab Services for
            <span className="text-[var(--color-brand-600)]"> Every Journey</span>
          </h2>

          <p className="mt-4 text-slate-600 leading-relaxed">
            Professional airport transfers, city rides and outstation travel
            with clean vehicles, verified drivers and guaranteed on-time service.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-brand-50)] text-[var(--color-brand-600)] transition group-hover:bg-[var(--color-brand-600)] group-hover:text-white">
                <service.icon size={24} />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {service.description}
              </p>

              {/* CTA */}
              <Link
                to="/book-now"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-600)] transition hover:text-[var(--color-brand-700)]"
              >
                Book Now
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 flex justify-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-brand-600)] px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[var(--color-brand-700)] hover:shadow-lg"
          >
            View All Services
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

      </div>
    </section>
  )
}

export default OurServicesSection