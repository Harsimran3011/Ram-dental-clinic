import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Award,
  CalendarDays,
  CheckCircle2,
  Clock3,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Users,
} from "lucide-react";
import { Link } from "react-router";

import Reveal from "../components/Reveal";

/* =========================================================
   DATA
========================================================= */

const treatments = [
  {
    title: "General Dental Checkup",
    description:
      "Complete dental examination to maintain your oral health and detect problems early.",
    icon: Stethoscope,
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Dental Implants",
    description:
      "Modern tooth replacement solutions designed to restore function, comfort and confidence.",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Root Canal Treatment",
    description:
      "Careful treatment for infected or damaged teeth while preserving your natural smile.",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Personalized cosmetic treatments to help you achieve a brighter and more confident smile.",
    icon: Star,
    image:
      "https://images.unsplash.com/photo-1606265752439-1f18756aa2fc?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Teeth Whitening",
    description:
      "Professional whitening treatments designed to refresh and brighten your smile.",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Family Dental Care",
    description:
      "Comfortable and comprehensive dental care for patients of different ages.",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=900&q=80",
  },
];

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Happy Patients",
  },
  {
    value: 10,
    suffix: "+",
    label: "Years Experience",
  },
  {
    value: 15,
    suffix: "+",
    label: "Treatments",
  },
  {
    value: 98,
    suffix: "%",
    label: "Patient Satisfaction",
  },
];

/* =========================================================
   ANIMATED COUNTER
========================================================= */

const AnimatedCounter = ({ value, suffix = "" }) => {
  const counterRef = useRef(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const element = counterRef.current;

    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setCount(value);
      setStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [value]);

  useEffect(() => {
    if (!started) return;

    const duration = 1600;
    const startTime = performance.now();

    let animationFrame;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;

      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [started, value]);

  return (
    <span ref={counterRef}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

/* =========================================================
   HOME PAGE
========================================================= */

const Home = () => {
  return (
    <main className="overflow-hidden bg-white">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f4fbfa]">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#159a8c]/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#8ee0d5]/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          {/* Hero Content */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#159a8c] shadow-sm">
                <Sparkles size={16} />
                Trusted Dental Care
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                Your smile deserves{" "}
                <span className="text-[#159a8c]">better care.</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Professional dental care focused on your comfort, oral health
                and confidence — from routine checkups to advanced treatments.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/appointment"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#159a8c] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#159a8c]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#117d72] hover:shadow-xl"
                >
                  <CalendarDays size={18} />
                  Book Appointment
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-[#159a8c] hover:text-[#159a8c]"
                >
                  Learn More
                </Link>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#159a8c]" />
                  Patient-focused care
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#159a8c]" />
                  Modern treatments
                </div>
              </div>
            </Reveal>
          </div>

          {/* Hero Image */}
          <Reveal direction="right" delay={200}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-[#159a8c]/10 blur-2xl" />

              <div className="group relative overflow-hidden rounded-[2rem] bg-white p-2 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85"
                  alt="Professional dental care"
                  width="1200"
                  height="900"
                  fetchPriority="high"
                  className="h-[520px] w-full rounded-[1.5rem] object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                {/* Floating Card */}
                <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/50 bg-white/90 p-5 shadow-xl backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e2f7f3] text-[#159a8c]">
                      <Award size={23} />
                    </div>

                    <div>
                      <p className="font-bold text-slate-900">
                        Quality Dental Care
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        Your comfort comes first
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="relative bg-[#123c3a] px-6 py-16 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-12 md:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 100}>
              <div className="group text-center">
                <h2 className="text-4xl font-bold tracking-tight transition-transform duration-300 group-hover:-translate-y-1 sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </h2>

                <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="relative">
              <div className="group overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1200&q=85"
                  alt="Dentist providing dental care"
                  width="1200"
                  height="900"
                  loading="lazy"
                  className="h-[500px] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              <div className="absolute -bottom-7 -right-5 hidden rounded-2xl bg-white p-5 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e2f7f3] text-[#159a8c]">
                    <HeartPulse size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Care With
                    </p>

                    <p className="text-sm font-bold text-[#159a8c]">
                      Confidence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="font-semibold uppercase tracking-[0.2em] text-[#159a8c]">
                Why Choose Us
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Dental care that puts{" "}
                <span className="text-[#159a8c]">you first.</span>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 leading-8 text-slate-600">
                We believe a great dental experience is about more than
                treatment. It is about listening to your concerns, explaining
                your options and making sure you feel comfortable at every step.
              </p>
            </Reveal>

            <div className="mt-8 space-y-5">
              {[
                {
                  icon: ShieldCheck,
                  title: "Patient-first approach",
                  text: "Every treatment plan is tailored around your individual needs.",
                },
                {
                  icon: Stethoscope,
                  title: "Comprehensive treatments",
                  text: "From preventive care to restorative and cosmetic dentistry.",
                },
                {
                  icon: Users,
                  title: "Comfortable experience",
                  text: "A welcoming environment designed to make dental visits easier.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.title} delay={300 + index * 100}>
                    <div className="group flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e2f7f3] text-[#159a8c] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#159a8c] group-hover:text-white">
                        <Icon size={21} />
                      </div>

                      <div>
                        <h3 className="font-bold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TREATMENTS
      ===================================================== */}

      <section className="bg-[#f7faf9] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-semibold uppercase tracking-[0.2em] text-[#159a8c]">
                Our Treatments
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Complete care for your smile.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Explore our range of dental services designed to support your
                oral health and confidence.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {treatments.map((treatment, index) => {
              const Icon = treatment.icon;

              return (
                <Reveal key={treatment.title} delay={index * 100}>
                  <article className="group h-full overflow-hidden rounded-[1.75rem] border border-slate-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={treatment.image}
                        alt={treatment.title}
                        width="900"
                        height="650"
                        loading="lazy"
                        className="h-64 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-[#159a8c] shadow-sm backdrop-blur transition-transform duration-500 group-hover:scale-110">
                        <Icon size={20} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <h3 className="text-xl font-bold text-slate-900">
                        {treatment.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {treatment.description}
                      </p>

                      <Link
                        to="/appointment"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#159a8c]"
                      >
                        Book Consultation
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={200}>
            <div className="mt-12 text-center">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#159a8c] hover:text-[#159a8c] hover:shadow-lg"
              >
                View All Treatments
                <ArrowRight size={17} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE / TRUST
      ===================================================== */}

      <section className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] bg-[#123c3a]">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 sm:p-12 lg:p-16">
                  <p className="font-semibold uppercase tracking-[0.2em] text-[#8ee0d5]">
                    Your Comfort Matters
                  </p>

                  <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    A dental experience designed around you.
                  </h2>

                  <p className="mt-6 max-w-xl leading-8 text-slate-300">
                    From your first consultation to your follow-up care, we
                    focus on clear communication, thoughtful treatment and a
                    comfortable experience.
                  </p>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                      <Clock3 className="text-[#8ee0d5]" size={22} />

                      <p className="mt-3 font-semibold text-white">
                        Flexible Scheduling
                      </p>

                      <p className="mt-1 text-sm text-slate-400">
                        Convenient appointment options.
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                      <ShieldCheck className="text-[#8ee0d5]" size={22} />

                      <p className="mt-3 font-semibold text-white">
                        Trusted Care
                      </p>

                      <p className="mt-1 text-sm text-slate-400">
                        Your health remains our priority.
                      </p>
                    </div>
                  </div>

                  <Link
                    to="/appointment"
                    className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-[#123c3a] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e7f8f5] hover:shadow-xl"
                  >
                    Schedule Your Visit
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>

                <div className="group min-h-[400px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1606265752439-1f18756aa2fc?auto=format&fit=crop&w=1200&q=85"
                    alt="Modern dental care"
                    width="1200"
                    height="900"
                    loading="lazy"
                    className="h-full min-h-[400px] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-6 pb-24 lg:px-8 lg:pb-32">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e2f7f3] text-[#159a8c]">
              <Sparkles size={25} />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Ready for a healthier,{" "}
              <span className="text-[#159a8c]">confident smile?</span>
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
              Take the first step towards better dental health. Schedule your
              appointment today and let us help you take care of your smile.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/appointment"
                className="group inline-flex items-center gap-2 rounded-full bg-[#159a8c] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#159a8c]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#117d72] hover:shadow-xl"
              >
                <CalendarDays size={18} />
                Book Your Appointment
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="tel:+91XXXXXXXXXX"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-7 py-3.5 font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-[#159a8c] hover:text-[#159a8c]"
              >
                Call Clinic
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Home;
