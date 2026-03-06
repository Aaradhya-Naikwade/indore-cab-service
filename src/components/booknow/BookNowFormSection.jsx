import { useState } from "react"
import { CalendarDays, CarFront, Clock3, MapPin, PhoneCall, UserRound } from "lucide-react"

function BookNowFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    pickupDate: "",
    pickupTime: "",
    pickupLocation: "",
    dropLocation: "",
    serviceType: "Airport Transfer",
    carCategory: "Sedan Cab",
    tripType: "One Way",
    message: "",
  })

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className="section-space bg-gradient-to-b from-white via-slate-50/70 to-white">
      <div className="container-custom grid gap-8 lg:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8 lg:col-span-2">
          <div className="mb-6">
            <p className="mb-2 inline-flex rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold tracking-wide text-brand-700 uppercase">
              Booking Form
            </p>
            <h2 className="text-3xl font-bold text-ink-900 sm:text-4xl">Enter Your Trip Details</h2>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="flex items-center gap-2 text-sm font-semibold text-ink-700">
                <UserRound size={15} className="text-brand-600" />
                Full Name
              </span>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => updateField("fullName", e.target.value)}
                className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none transition focus:border-brand-500"
                placeholder="Enter your name"
              />
            </label>

            <label className="space-y-2">
              <span className="flex items-center gap-2 text-sm font-semibold text-ink-700">
                <PhoneCall size={15} className="text-brand-600" />
                Phone Number
              </span>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none transition focus:border-brand-500"
                placeholder="+91"
              />
            </label>

            <label className="space-y-2 sm:col-span-2">
              <span className="flex items-center gap-2 text-sm font-semibold text-ink-700">Email Address</span>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none transition focus:border-brand-500"
                placeholder="your@email.com"
              />
            </label>

            <label className="space-y-2">
              <span className="flex items-center gap-2 text-sm font-semibold text-ink-700">
                <CalendarDays size={15} className="text-brand-600" />
                Pickup Date
              </span>
              <input
                type="date"
                required
                value={formData.pickupDate}
                onChange={(e) => updateField("pickupDate", e.target.value)}
                className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none transition focus:border-brand-500"
              />
            </label>

            <label className="space-y-2">
              <span className="flex items-center gap-2 text-sm font-semibold text-ink-700">
                <Clock3 size={15} className="text-brand-600" />
                Pickup Time
              </span>
              <input
                type="time"
                required
                value={formData.pickupTime}
                onChange={(e) => updateField("pickupTime", e.target.value)}
                className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none transition focus:border-brand-500"
              />
            </label>

            <label className="space-y-2 sm:col-span-2">
              <span className="flex items-center gap-2 text-sm font-semibold text-ink-700">
                <MapPin size={15} className="text-brand-600" />
                Pickup Location
              </span>
              <input
                type="text"
                required
                value={formData.pickupLocation}
                onChange={(e) => updateField("pickupLocation", e.target.value)}
                className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none transition focus:border-brand-500"
                placeholder="Airport / Hotel / Address"
              />
            </label>

            <label className="space-y-2 sm:col-span-2">
              <span className="flex items-center gap-2 text-sm font-semibold text-ink-700">
                <MapPin size={15} className="text-brand-600" />
                Drop Location
              </span>
              <input
                type="text"
                required
                value={formData.dropLocation}
                onChange={(e) => updateField("dropLocation", e.target.value)}
                className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none transition focus:border-brand-500"
                placeholder="Destination address"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-semibold text-ink-700">Service Type</span>
              <select
                value={formData.serviceType}
                onChange={(e) => updateField("serviceType", e.target.value)}
                className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none transition focus:border-brand-500"
              >
                <option>Airport Transfer</option>
                <option>City Ride</option>
                <option>Outstation Taxi</option>
              </select>
            </label>

            <label className="space-y-2">
              <span className="flex items-center gap-2 text-sm font-semibold text-ink-700">
                <CarFront size={15} className="text-brand-600" />
                Car Category
              </span>
              <select
                value={formData.carCategory}
                onChange={(e) => updateField("carCategory", e.target.value)}
                className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none transition focus:border-brand-500"
              >
                <option>Hatchback Cab</option>
                <option>Sedan Cab</option>
                <option>SUV Cab</option>
                <option>Luxury Car</option>
                <option>Tempo Traveller</option>
              </select>
            </label>

            <label className="space-y-2 sm:col-span-2">
              <span className="text-sm font-semibold text-ink-700">Trip Type</span>
              <select
                value={formData.tripType}
                onChange={(e) => updateField("tripType", e.target.value)}
                className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none transition focus:border-brand-500"
              >
                <option>One Way</option>
                <option>Round Trip</option>
                <option>Hourly Rental</option>
              </select>
            </label>

            <label className="space-y-2 sm:col-span-2">
              <span className="text-sm font-semibold text-ink-700">Additional Notes</span>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => updateField("message", e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-brand-500"
                placeholder="Luggage, child seat, flight number, etc."
              />
            </label>

            <div className="sm:col-span-2">
              <button type="submit" className="btn-primary h-12 w-full sm:w-auto sm:px-8">
                Submit Booking Request
              </button>
            </div>
          </form>
        </div>

        <aside className="space-y-5">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-xl font-semibold text-ink-900">Need Quick Confirmation?</h3>
            <p className="mt-2 text-sm text-ink-700">
              For urgent bookings, call or WhatsApp directly and our team will help you instantly.
            </p>
            <div className="mt-5 space-y-3">
              <a
                href="tel:+919826498273"
                className="inline-flex w-full items-center justify-center rounded-xl bg-brand-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
              >
                Call +91 9826498273
              </a>
              <a
                href="https://wa.me/919826498273"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-ink-700 transition hover:border-brand-500 hover:text-brand-700"
              >
                <i className="fa-brands fa-whatsapp text-base leading-none" aria-hidden="true" />
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f8fafc)] p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-ink-900">What Happens Next?</h3>
            <ul className="mt-3 space-y-2 text-sm text-ink-700">
              <li>1. We review your route and timing.</li>
              <li>2. You receive confirmation with fare details.</li>
              <li>3. Driver details are shared before pickup.</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default BookNowFormSection
