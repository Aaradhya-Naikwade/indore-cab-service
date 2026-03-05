import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { Menu, Phone, X } from "lucide-react"


const NAV_ITEMS = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Our Services", to: "/services" },
    { label: "Our Fleet", to: "/fleet" },
    { label: "Contact Us", to: "/contact" },
]

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 16)

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        const closeMenuOnDesktop = () => {
            if (window.innerWidth >= 768) {
                setMenuOpen(false)
            }
        }

        window.addEventListener("resize", closeMenuOnDesktop)
        return () => window.removeEventListener("resize", closeMenuOnDesktop)
    }, [])

    const getNavLinkClass = ({ isActive }) =>
        `relative text-sm font-semibold tracking-wide transition-colors duration-200 ${isActive ? "text-[var(--color-brand-500)]" : "text-slate-700 hover:text-[var(--color-brand-500)]"
        } after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[var(--color-brand-500)] after:transition-transform after:duration-200 hover:after:scale-x-100 ${isActive ? "after:scale-x-100" : ""
        }`

    return (
        <header
            className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled
                    ? "border-slate-200/80 bg-white/95 shadow-[0_12px_30px_-20px_rgba(15,23,42,0.55)] backdrop-blur"
                    : "border-transparent bg-white/85"
                }`}
        >
            <nav className="container-custom flex h-20 items-center justify-between">
                <NavLink to="/" className="group">
                    <p className="font-display text-lg font-bold text-slate-900 transition-colors group-hover:text-[var(--color-brand-500)]">
                        Indore Airport Cab Service
                    </p>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Trusted Taxi Partner</p>
                </NavLink>

                <div className="hidden items-center gap-7 md:flex">
                    {NAV_ITEMS.map((item) => (
                        <NavLink key={item.to} to={item.to} className={getNavLinkClass}>
                            {item.label}
                        </NavLink>
                    ))}
                </div>

                {/* Book Now Button */}
                <div className="hidden md:block">
                    <NavLink to="/book-now" className="btn-primary flex items-center gap-2 text-sm">
                        <Phone size={18} />
                        Book Now
                    </NavLink>
                </div>

                <button
                    type="button"
                    aria-label="Toggle navigation menu"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-[var(--color-brand-500)] hover:text-[var(--color-brand-500)] md:hidden"
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            <div
                className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 md:hidden ${menuOpen ? "max-h-96" : "max-h-0"
                    }`}
            >
                <div className="container-custom flex flex-col gap-5 py-5">
                    {NAV_ITEMS.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                `text-sm font-semibold ${isActive ? "text-[var(--color-brand-500)]" : "text-slate-700"}`
                            }
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.label}
                        </NavLink>
                    ))}

                    <NavLink to="/book-now" className="btn-primary w-full" onClick={() => setMenuOpen(false)}>
                        Book Now
                    </NavLink>
                </div>
            </div>
        </header>
    )
}

export default Navbar



