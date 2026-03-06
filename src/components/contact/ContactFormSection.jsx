import { Send } from "lucide-react"

function ContactFormSection() {
  return (
    <section className="section-space bg-gradient-to-b from-white via-slate-50/60 to-white">
      <div className="container-custom grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft sm:p-8">
          <h2 className="text-2xl font-bold text-ink-900 sm:text-3xl">Send a Message</h2>
          <p className="mt-2 text-sm text-ink-700">
            Share your trip details and our team will get back to you with availability and fare.
          </p>

          <form className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Full Name"
                className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500"
            />
            <textarea
              rows={5}
              placeholder="Write your pickup/drop details or query..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500"
            />
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
            >
              Send Message
              <Send size={15} />
            </button>
          </form>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
          <iframe
            title="Indore Airport Cab Service location"
            src="https://maps.google.com/maps?q=Indore%20Airport%20Road&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="h-full min-h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default ContactFormSection
