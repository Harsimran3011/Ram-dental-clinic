import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import useData from "../hooks/useData";

const Projects = () => {
  const { treatments, highlights } = useData();

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f4fbfa] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#159a8c] shadow-sm">
              <Sparkles size={16} />
              Our Treatments
            </div>

            <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Expertise that puts your{" "}
              <span className="text-[#159a8c]">smile first.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Explore our range of dental treatments designed to improve your
              oral health, restore your smile and help you feel confident.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-b border-slate-100 bg-white px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-x-10 gap-y-4">
          {highlights.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-sm font-medium text-slate-700"
            >
              <CheckCircle2 size={18} className="text-[#159a8c]" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Treatment Grid */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#159a8c]">
              Featured Treatments
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
              Comprehensive care for every smile.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              From preventive care to advanced restorative procedures, explore
              some of the services that can be showcased on your clinic website.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {treatments.map((treatment) => (
              <article
                key={treatment.title}
                className="group overflow-hidden rounded-[1.75rem] border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    width="1000"
                    height="700"
                    loading="lazy"
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#159a8c] backdrop-blur">
                    {treatment.category}
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-bold text-slate-900">
                    {treatment.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {treatment.description}
                  </p>

                  <a
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#159a8c]"
                  >
                    Enquire About Treatment
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured CTA */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-[#123c3a] lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 text-white sm:p-12 lg:p-16">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#8ee0d5]">
              Personalized Care
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Not sure which treatment is right for you?
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-300">
              Book a consultation and discuss your dental concerns with our
              team. We can help you understand your options and plan the next
              step.
            </p>

            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-[#123c3a] transition hover:bg-[#e7f8f5]"
              >
                Book Consultation
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="min-h-[350px]">
            <img
              src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80"
              alt="Dental care"
              width="1200"
              height="900"
              loading="lazy"
              className="h-full min-h-[350px] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
