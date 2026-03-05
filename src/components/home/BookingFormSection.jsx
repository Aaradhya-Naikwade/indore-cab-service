import { useState } from "react"
import { CalendarDays, Clock3, LocateFixed, MapPin, Route, Timer } from "lucide-react"

function BookingFormSection() {
  const [pickupDate, setPickupDate] = useState("")
  const [pickupTime, setPickupTime] = useState("")
  const [pickupLocation, setPickupLocation] = useState("")
  const [dropLocation, setDropLocation] = useState("")
  const [transferType, setTransferType] = useState("Airport Transfer")
  const [routePlan, setRoutePlan] = useState("One Way")
  const [extraTime, setExtraTime] = useState(0)
  const [locating, setLocating] = useState(false)

  const handleUseLocation = () => {
    if (!navigator.geolocation) {
      return
    }

    setLocating(true)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        setPickupLocation(`Lat ${latitude.toFixed(5)}, Lng ${longitude.toFixed(5)}`)
        setLocating(false)
      },
      () => setLocating(false),
      { enableHighAccuracy: true, timeout: 10000 }
    )
  }

  return (
    <section className="section-space bg-slate-50">
      <div className="container-custom">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_45px_-30px_rgba(2,8,23,0.45)] md:p-8">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-600)]">Quick Booking</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">Book Your Taxi in Minutes</h2>
            </div>
          </div>

          <form className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <label className="space-y-2">
              <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <CalendarDays size={15} className="text-[var(--color-brand-600)]" />
                Pickup date
              </span>
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-800 outline-none transition focus:border-[var(--color-brand-500)]"
              />
            </label>

            <label className="space-y-2">
              <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Clock3 size={15} className="text-[var(--color-brand-600)]" />
                Pickup time
              </span>
              <input
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-800 outline-none transition focus:border-[var(--color-brand-500)]"
              />
            </label>

            <label className="space-y-2 md:col-span-2 xl:col-span-1">
              <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <MapPin size={15} className="text-[var(--color-brand-600)]" />
                Pickup location
              </span>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  placeholder="Enter a location"
                  className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-800 outline-none transition focus:border-[var(--color-brand-500)]"
                />
                <button
                  type="button"
                  onClick={handleUseLocation}
                  className="inline-flex h-12 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-[var(--color-brand-500)] hover:text-[var(--color-brand-600)]"
                >
                  <LocateFixed size={15} />
                  {locating ? "Locating..." : "Use my location"}
                </button>
              </div>
            </label>

            <label className="space-y-2">
              <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <MapPin size={15} className="text-[var(--color-brand-600)]" />
                Drop-off location
              </span>
              <input
                type="text"
                value={dropLocation}
                onChange={(e) => setDropLocation(e.target.value)}
                placeholder="Enter a location"
                className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-800 outline-none transition focus:border-[var(--color-brand-500)]"
              />
            </label>

            <label className="space-y-2">
              <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Route size={15} className="text-[var(--color-brand-600)]" />
                Transfer type
              </span>
              <select
                value={transferType}
                onChange={(e) => setTransferType(e.target.value)}
                className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-800 outline-none transition focus:border-[var(--color-brand-500)]"
              >
                <option>Airport Transfer</option>
                <option>Local Taxi</option>
                <option>Outstation Taxi</option>
                <option>Tour Package</option>
              </select>
            </label>

            <label className="space-y-2">
              <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Route size={15} className="text-[var(--color-brand-600)]" />
                Select Your Route Plan
              </span>
              <select
                value={routePlan}
                onChange={(e) => setRoutePlan(e.target.value)}
                className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-800 outline-none transition focus:border-[var(--color-brand-500)]"
              >
                <option>One Way</option>
                <option>Round Trip</option>
                <option>Hourly Rental</option>
              </select>
            </label>

            <div className="space-y-2 md:col-span-2 xl:col-span-1">
              <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Timer size={15} className="text-[var(--color-brand-600)]" />
                Extra time
              </span>
              <div className="rounded-xl border border-slate-200 p-4">
                <input
                  type="range"
                  min="0"
                  max="8"
                  step="1"
                  value={extraTime}
                  onChange={(e) => setExtraTime(Number(e.target.value))}
                  className="w-full accent-[var(--color-brand-500)]"
                />
                <p className="mt-2 text-sm font-semibold text-slate-700">{extraTime} hour(s)</p>
              </div>
            </div>

            <div className="md:col-span-2 xl:col-span-3">
              <button type="submit" className="btn-primary h-12 w-full text-base md:w-auto md:px-8">
                Book Taxi Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default BookingFormSection
