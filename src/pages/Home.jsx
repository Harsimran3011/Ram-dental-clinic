import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import useData from "../hooks/useData";
import Footer from "../components/Footer";

const Home = () => {
  const { treatments, highlights, stats } = useData();

  const [visible, setVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      },
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className="overflow-hidden">
        {/* ================= HERO ================= */}
        <section className="bg-[#f5faf9]">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            {/* Left */}
            <div className="animate-[fadeUp_0.8s_ease-out]">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#12a89d]">
                Ram Dental Clinic & Implant Center
              </p>

              <h1 className="max-w-2xl text-4xl font-bold leading-tight text-[#102b3f] sm:text-5xl lg:text-6xl">
                Your smile deserves
                <span className="text-[#12a89d]"> expert care.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                Comprehensive dental care focused on your comfort, oral health
                and confidence. From routine checkups to advanced treatments, we
                are here for your smile.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/appointment"
                  className="rounded-full bg-[#12a89d] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#0d9188] hover:shadow-lg"
                >
                  Book Appointment →
                </Link>

                <Link
                  to="/projects"
                  className="rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#102b3f] transition duration-300 hover:-translate-y-1 hover:border-[#12a89d] hover:text-[#12a89d]"
                >
                  Explore Treatments
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500">
                {highlights.slice(0, 3).map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#12a89d]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-[fadeUp_1s_ease-out]">
              <div className="overflow-hidden rounded-[2rem] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85"
                  alt="Modern dental clinic"
                  className="h-[430px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[520px]"
                />
              </div>

              <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white p-5 shadow-xl sm:-left-6">
                <p className="text-2xl font-bold text-[#102b3f]">500+</p>
                <p className="mt-1 text-sm text-slate-500">Happy Patients</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= STATS ================= */}
        <section ref={statsRef} className="border-y border-slate-100 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 px-6 py-12 sm:grid-cols-4 lg:px-8">
            {stats.map((stat, index) => (
              <AnimatedStat
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                visible={visible}
                delay={index * 150}
              />
            ))}
          </div>
        </section>

        {/* ================= TREATMENTS ================= */}
        <section className="bg-white px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#12a89d]">
                Our Treatments
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#102b3f] sm:text-4xl">
                Complete care for your smile.
              </h2>

              <p className="mt-4 text-slate-600">
                Professional dental services designed to support your oral
                health and confidence.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {treatments.slice(0, 6).map((treatment, index) => (
                <article
                  key={treatment.title}
                  className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
                  style={{
                    animation: `fadeUp 0.7s ease-out ${index * 100}ms both`,
                  }}
                >
                  <div className="h-60 overflow-hidden">
                    <img
                      src={treatment.image}
                      alt={treatment.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#12a89d]">
                      {treatment.category}
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-[#102b3f]">
                      {treatment.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {treatment.description}
                    </p>

                    <Link
                      to="/appointment"
                      className="mt-5 inline-block text-sm font-semibold text-[#12a89d] transition hover:translate-x-1"
                    >
                      Book Consultation →
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                to="/projects"
                className="inline-flex rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-[#102b3f] transition hover:border-[#12a89d] hover:text-[#12a89d]"
              >
                View All Treatments →
              </Link>
            </div>
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}
        <section className="bg-[#f5faf9] px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#103f3d]">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-16">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#65ddd3]">
                  Your Comfort Matters
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  A dental experience designed around you.
                </h2>

                <p className="mt-5 max-w-lg leading-7 text-slate-300">
                  From your first consultation to your follow-up care, we focus
                  on clear communication, thoughtful treatment and a comfortable
                  experience.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-5">
                    <h3 className="font-semibold text-white">
                      Flexible Scheduling
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Convenient appointment options for your schedule.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-5">
                    <h3 className="font-semibold text-white">Trusted Care</h3>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Your oral health and comfort remain our priority.
                    </p>
                  </div>
                </div>

                <Link
                  to="/appointment"
                  className="mt-8 inline-block rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#103f3d] transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  Schedule Your Visit →
                </Link>
              </div>

              <div className="min-h-[350px] lg:min-h-full">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1200&q=85"
                  alt="Dental treatment"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="bg-white px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#12a89d]">
            Start Your Journey
          </p>

          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold text-[#102b3f] sm:text-4xl">
            Ready for a healthier,
            <span className="text-[#12a89d]"> confident smile?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Book your consultation and take the first step towards better dental
            health.
          </p>

          <Link
            to="/appointment"
            className="mt-8 inline-block rounded-full bg-[#12a89d] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#0d9188] hover:shadow-lg"
          >
            Book an Appointment →
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
};

/* ================= ANIMATED STAT ================= */

const AnimatedStat = ({ value, suffix, label, visible, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const duration = 1400;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      start = Math.floor(easedProgress * value);
      setCount(start);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [visible, value, delay]);

  return (
    <div className="border-b border-slate-100 px-4 py-6 text-center sm:border-b-0 sm:border-r last:border-r-0">
      <div className="text-3xl font-bold text-[#102b3f] sm:text-4xl">
        {count}
        {suffix}
      </div>

      <p className="mt-2 text-sm text-slate-500">{label}</p>
    </div>
  );
};

export default Home;
