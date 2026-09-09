import { Clock3, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      {/* Header */}
      <section className="bg-[#f4fbfa] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold uppercase tracking-[0.2em] text-[#159a8c]">
            Contact Us
          </p>

          <h1 className="mt-4 max-w-3xl text-5xl font-bold tracking-tight text-slate-900">
            Let's take care of your smile.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Have a question or want to schedule a consultation? Send us a
            message or contact the clinic directly.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact information */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Get in touch</h2>

            <p className="mt-4 leading-7 text-slate-600">
              Our team is here to help you with appointments, treatment
              questions and general enquiries.
            </p>

            <div className="mt-10 space-y-7">
              <a href="tel:+91XXXXXXXXXX" className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e2f5f2] text-[#159a8c]">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">Call Us</p>
                  <p className="mt-1 text-sm text-slate-600">+91 XXXXXXXXXX</p>
                </div>
              </a>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e2f5f2] text-[#159a8c]">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">Visit Us</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Ludhiana, Punjab, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e2f5f2] text-[#159a8c]">
                  <Clock3 size={20} />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">Clinic Hours</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Monday – Saturday
                    <br />
                    10:00 AM – 8:00 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e2f5f2] text-[#159a8c]">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">Email</p>
                  <p className="mt-1 text-sm text-slate-600">
                    info@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-xl sm:p-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Book an Appointment
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Fill in your details and our team will contact you.
            </p>

            {submitted ? (
              <div className="mt-10 rounded-2xl bg-[#e7f8f5] p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#159a8c] text-white">
                  ✓
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  Request Received
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  Thank you. The clinic team will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#159a8c] focus:ring-2 focus:ring-[#159a8c]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="Enter phone number"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#159a8c] focus:ring-2 focus:ring-[#159a8c]/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#159a8c] focus:ring-2 focus:ring-[#159a8c]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Treatment
                  </label>

                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-[#159a8c]"
                  >
                    <option value="">Select a treatment</option>
                    <option value="general">General Dentistry</option>
                    <option value="implant">Dental Implants</option>
                    <option value="root-canal">Root Canal</option>
                    <option value="cosmetic">Cosmetic Dentistry</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell us how we can help..."
                    className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#159a8c] focus:ring-2 focus:ring-[#159a8c]/10"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#159a8c] px-6 py-3.5 font-semibold text-white transition hover:bg-[#117d72]"
                >
                  Send Appointment Request
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-slate-100">
          <iframe
            title="Ram Dental Clinic location"
            src="https://www.google.com/maps?q=Ludhiana,Punjab,India&output=embed"
            width="100%"
            height="420"
            loading="lazy"
            className="border-0"
          />
        </div>
      </section>
    </main>
  );
};

export default Contact;
