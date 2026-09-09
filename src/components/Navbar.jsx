import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, Phone, X } from "lucide-react";

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
    <header className="sticky top-0 z-50 border-b border-slate-100/80 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* ================= LOGO ================= */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#159a8c] text-lg font-bold text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
            R
          </div>

          <div className="leading-none">
            <h1 className="text-[15px] font-bold tracking-tight text-slate-900 sm:text-base">
              Ram Dental Clinic
            </h1>

            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#159a8c]">
              & Implant Center
            </p>
          </div>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden items-center md:flex">
          <div className="flex items-center gap-1 rounded-full border border-slate-100 bg-slate-50/70 p-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                    active
                      ? "bg-white text-[#159a8c] shadow-sm"
                      : "text-slate-600 hover:text-[#159a8c]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* ================= DESKTOP ACTIONS ================= */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Call */}
          <a
            href="tel:+918872118797"
            aria-label="Call Ram Dental Clinic"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all duration-300 hover:border-[#159a8c] hover:bg-[#e8f7f5] hover:text-[#159a8c]"
          >
            <Phone size={17} strokeWidth={1.8} />
          </a>

          {/* Login */}
          <Link
            to="/auth/login"
            className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-[#159a8c] hover:bg-[#e8f7f5] hover:text-[#159a8c]"
          >
            Login
          </Link>

          {/* Appointment */}
          <Link
            to="/contact"
            className="rounded-full bg-[#159a8c] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#117d72] hover:shadow-md"
          >
            Book Appointment
          </Link>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-all duration-300 hover:border-[#159a8c] hover:text-[#159a8c] md:hidden"
        >
          {isMenuOpen ? (
            <X size={21} strokeWidth={1.8} />
          ) : (
            <Menu size={21} strokeWidth={1.8} />
          )}
        </button>
      </nav>

      {/* ================= MOBILE NAVIGATION ================= */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 md:hidden ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6">
          {/* Navigation Links */}
          <div className="space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-[#e8f7f5] text-[#159a8c]"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Actions */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            {/* Login */}
            <Link
              to="/auth/login"
              onClick={closeMenu}
              className="flex items-center justify-center rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-[#159a8c] hover:bg-[#e8f7f5] hover:text-[#159a8c]"
            >
              Login
            </Link>

            {/* Appointment */}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="flex items-center justify-center rounded-xl bg-[#159a8c] px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#117d72]"
            >
              Appointment
            </Link>
          </div>

          {/* Call Clinic */}
          <a
            href="tel:+918872118797"
            onClick={closeMenu}
            className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-[#159a8c] hover:text-[#159a8c]"
          >
            <Phone size={16} strokeWidth={1.8} />
            Call Clinic
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
