import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  X,
} from "lucide-react";
import "./index.css";
import AppRoutes from "./routes/AppRoutes";

const phone = "+918872118797";
const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Ram+Dental+Clinic+%26+Implant+Center%2C+Ludhiana";

const services = [
  {
    title: "Dental Implants",
    text: "Natural-looking tooth replacement designed for long-term function and confidence.",
    icon: "✦",
  },
  {
    title: "Root Canal Treatment",
    text: "Modern endodontic care focused on saving your natural tooth and reducing discomfort.",
    icon: "◌",
  },
  {
    title: "Ceramic Crowns & Bridges",
    text: "Durable, aesthetic restorations that blend beautifully with your smile.",
    icon: "◇",
  },
  {
    title: "Wisdom Tooth Removal",
    text: "Careful assessment and surgical extraction when wisdom teeth cause problems.",
    icon: "＋",
  },
  {
    title: "Laser Dentistry",
    text: "Precision-focused dental procedures with patient comfort at the center.",
    icon: "⌁",
  },
  {
    title: "Maxillofacial Care",
    text: "Specialized oral and maxillofacial procedures with experienced clinical care.",
    icon: "◈",
  },
];

const reviews = [
  [
    "Sus",
    "Excellent! Quick service, good supervision and a clean, hygienic environment.",
    5,
  ],
  [
    "Varun Sharma",
    "High-standard treatment, gentle care, quick service and an accessible location.",
    5,
  ],
  [
    "Rohit Kumar",
    "One of the best dental clinics with cooperative staff and doctors.",
    5,
  ],
];

const HeartIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="size-6"
  >
    <path d="M20.8 8.7c0 5.5-8.8 10.3-8.8 10.3S3.2 14.2 3.2 8.7A4.7 4.7 0 0 1 12 6.3a4.7 4.7 0 0 1 8.8 2.4Z" />
  </svg>
);
const Stat = ({ value, label }) => (
  <div className="px-4 text-center first:pl-0 last:pr-0">
    <div className="font-display text-2xl font-extrabold text-[#0b3533] sm:text-3xl">
      {value}
    </div>
    <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
      {label}
    </div>
  </div>
);
const Feature = ({ icon, title, text }) => (
  <div>
    <span className="grid size-11 place-items-center rounded-2xl bg-teal-50 text-teal-700">
      {React.cloneElement(icon, { size: 20 })}
    </span>
    <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
    <p className="mt-2 leading-7 text-slate-600">{text}</p>
  </div>
);
const ContactItem = ({ icon, title, text }) => (
  <div className="flex gap-4">
    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-teal-50 text-teal-700">
      {React.cloneElement(icon, { size: 19 })}
    </span>
    <div>
      <p className="font-bold">{title}</p>
      <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  </div>
);

createRoot(document.getElementById("root")).render(<AppRoutes />);
