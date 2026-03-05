import { useState } from "react"
import { MessageCircleMore, Phone, X } from "lucide-react"

const PHONE_NUMBER = "+91 9826498273"
const PHONE_LINK = "tel:+919826498273"
const WHATSAPP_LINK = "https://wa.me/919826498273?text=Hi%2C%20I%20want%20to%20book%20a%20cab."

function FloatingContactWidget() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-5 left-4 z-[70] sm:bottom-6 sm:left-6">
      <div
        className={`mb-3 flex flex-col gap-3 transition-all duration-300 ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        {/* Call Button */}
        <a
          href={PHONE_LINK}
          aria-label={`Call ${PHONE_NUMBER}`}
          className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-[0_10px_30px_-18px_rgba(2,8,23,0.45)] transition hover:-translate-y-0.5 hover:border-[var(--color-brand-500)]"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-brand-500)] text-white">
            <Phone size={18} />
          </span>
          <span className="text-sm font-semibold text-slate-700">Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="group flex items-center gap-3 rounded-2xl border border-emerald-200 bg-white px-4 py-3 shadow-[0_10px_30px_-18px_rgba(2,8,23,0.45)] transition hover:-translate-y-0.5 hover:border-emerald-500"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white text-lg">
            <i className="fa-brands fa-whatsapp"></i>
          </span>
          <span className="text-sm font-semibold text-slate-700">WhatsApp</span>
        </a>
      </div>

      {/* Toggle Button */}
      <button
        type="button"
        aria-label={open ? "Close contact options" : "Open contact options"}
        onClick={() => setOpen((prev) => !prev)}
        className="group inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--color-brand-500)] bg-[var(--color-brand-500)] text-white shadow-[0_18px_35px_-20px_rgba(2,8,23,0.55)] transition hover:-translate-y-0.5 hover:bg-[var(--color-brand-600)]"
      >
        {open ? <X size={22} /> : <MessageCircleMore size={22} />}
      </button>
    </div>
  )
}

export default FloatingContactWidget