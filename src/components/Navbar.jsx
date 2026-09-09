import { useState } from "react";
import { Link, useLocation } from "react-router";
import { CalendarDays, Menu, Phone, X } from "lucide-react";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Treatments",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#159a8c] text-xl font-bold text-white">
            R
          </div>

          <div className="leading-tight">
            <p className="text-base font-bold tracking-tight text-slate-900">
              Ram Dental Clinic
            </p>

            <p className="text-xs font-medium text-[#159a8c]">
              & Implant Center
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative py-2 text-sm font-medium transition ${
                isActive(link.path)
                  ? "text-[#159a8c]"
                  : "text-slate-600 hover:text-[#159a8c]"
              }`}
            >
              {link.name}

              {isActive(link.path) && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-[#159a8c]" />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+91XXXXXXXXXX"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-[#159a8c] hover:text-[#159a8c]"
            aria-label="Call clinic"
          >
            <Phone size={17} />
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#159a8c] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#117d72]"
          >
            <CalendarDays size={17} />
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                  isActive(link.path)
                    ? "bg-[#e8f7f5] text-[#159a8c]"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#159a8c] px-5 py-3 font-semibold text-white"
            >
              <CalendarDays size={18} />
              Book Appointment
            </Link>

            <a
              href="tel:+918872118797"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-700"
            >
              <Phone size={18} />
              Call Clinic
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
