import { Clock3, Mail, MapPin, PhoneCall } from "lucide-react"

const CONTACT_CARDS = [
  {
    title: "Call Us",
    value: "+91 9826498273",
    href: "tel:+919826498273",
    icon: PhoneCall,
  },
  {
    title: "WhatsApp",
    value: "+91 9826498273",
    href: "https://wa.me/919826498273",
    icon: null,
    isWhatsapp: true,
    external: true,
  },
  {
    title: "Email",
    value: "support@indoreairportcabservice.com",
    href: "mailto:support@indoreairportcabservice.com",
    icon: Mail,
  },
  {
    title: "Service Hours",
    value: "24x7 Availability",
    href: null,
    icon: Clock3,
  },
]

function ContactInfoSection() {
  return (
    <section className="section-space bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 inline-flex rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold tracking-wide text-brand-700 uppercase">
            Get In Touch
          </p>
          <h2 className="text-3xl font-bold text-ink-900 sm:text-4xl">We&apos;re Here to Help</h2>
          <p className="mt-3 text-base text-ink-700">
            Contact us via phone, WhatsApp, or email. We typically respond within minutes for booking queries.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_CARDS.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f8fafc)] p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="inline-flex rounded-xl bg-brand-50 p-3 text-brand-600 ring-1 ring-brand-100">
                  {item.isWhatsapp ? (
                    <i className="fa-brands fa-whatsapp text-xl leading-none" aria-hidden="true" />
                  ) : (
                    <Icon size={20} />
                  )}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink-900">{item.title}</h3>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="mt-2 inline-flex break-all text-sm font-medium text-ink-700 transition hover:text-brand-700"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 break-all text-sm font-medium text-ink-700">{item.value}</p>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ContactInfoSection
