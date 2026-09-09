import {
  Award,
  CheckCircle2,
  HeartPulse,
  ShieldCheck,
  Users,
} from "lucide-react";

const values = [
  {
    icon: HeartPulse,
    title: "Patient First",
    description:
      "Every treatment begins with understanding your concerns, comfort and goals.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Hygienic",
    description:
      "We maintain high standards of hygiene and clinical safety throughout your visit.",
  },
  {
    icon: Award,
    title: "Quality Care",
    description:
      "Our approach combines modern dentistry with careful treatment planning.",
  },
  {
    icon: Users,
    title: "Personal Attention",
    description:
      "We believe every patient deserves personalized dental care and clear communication.",
  },
];

const About = () => {
  return (
    <main>
      {/* Header */}
      <section className="bg-[#f4fbfa] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold uppercase tracking-[0.2em] text-[#159a8c]">
            About Us
          </p>

          <h1 className="mt-4 max-w-3xl text-5xl font-bold tracking-tight text-slate-900">
            Dentistry built around your comfort and confidence.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            At Ram Dental Clinic & Implant Center, our goal is simple — provide
            dependable dental care in a comfortable and welcoming environment.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
              alt="Dental treatment room"
              width="1000"
              height="750"
              loading="lazy"
              className="h-[500px] w-full object-cover"
            />
          </div>

          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-[#159a8c]">
              Our Approach
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
              Modern treatment. Human care.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              We understand that visiting a dentist can sometimes feel
              stressful. That's why we focus on making every step of your
              treatment clear, comfortable and convenient.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              From preventive checkups and restorative dentistry to advanced
              implant procedures, we aim to provide comprehensive dental
              solutions tailored to every patient.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Personalized treatment planning",
                "Modern dental procedures",
                "Comfort-focused patient experience",
                "Clear treatment communication",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="shrink-0 text-[#159a8c]" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f7faf9] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#159a8c]">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
              Care you can feel good about.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-3xl bg-white p-7 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dff4f1] text-[#159a8c]">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Your smile is worth taking care of.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Schedule a consultation and take the first step toward healthier,
            more confident teeth.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-[#159a8c] px-7 py-3.5 font-semibold text-white hover:bg-[#117d72]"
          >
            Book an Appointment
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
