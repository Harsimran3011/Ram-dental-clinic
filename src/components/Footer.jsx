import {
  ArrowUp,
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <footer className="bg-[#102f2d] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-block text-2xl font-bold tracking-tight"
            >
              Ram<span className="text-[#8ee0d5]"> Dental</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              Professional dental care focused on your comfort, oral health and
              confident smile.
            </p>

            <Link
              to="/contact"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#159a8c] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#117d72] hover:shadow-lg"
            >
              Book Appointment
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#8ee0d5]">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/projects"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Treatments
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Book Appointment
                </Link>
              </li>

              
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#8ee0d5]">
              Contact
            </h3>

            <div className="mt-5 space-y-5">
              <a
                href="https://maps.app.goo.gl/7w4oPH6t7hv72HbdA"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-3"
              >
                <MapPin size={19} className="mt-0.5 shrink-0 text-[#8ee0d5]" />

                <span className="text-sm leading-6 text-slate-300 transition-colors group-hover:text-white">
                  Visit our clinic
                  <br />
                  Get directions
                </span>
              </a>

              <a
                href="tel:+91XXXXXXXXXX"
                className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-white"
              >
                <Phone size={18} className="text-[#8ee0d5]" />
                +91 8872118797
              </a>

              <a
                href="mailto:info@example.com"
                className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-white"
              >
                <Mail size={18} className="text-[#8ee0d5]" />
                info@example.com
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#8ee0d5]">
              Opening Hours
            </h3>

            <div className="mt-5 flex gap-3">
              <Clock3 size={19} className="mt-0.5 shrink-0 text-[#8ee0d5]" />

              <div className="text-sm text-slate-300">
                <p>Monday - Saturday</p>

                <p className="mt-2 text-white">10:00 AM - 8:00 PM</p>

                <p className="mt-3 text-slate-400">Sunday — Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Ram Dental Clinic. All rights reserved.
          </p>

          {/* Back To Top */}
          <button
            type="button"
            onClick={handleScrollToTop}
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white"
          >
            Back to top
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#8ee0d5] group-hover:bg-[#159a8c]">
              <ArrowUp
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
