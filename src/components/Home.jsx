import { useRef, useState, useEffect } from "react";
import { Player } from "@lordicon/react";
import hand from "../assets/hand.json";
import imgAzam from "../assets/AZAM.png";
import ownerImg from "../assets/Demo.jpg";

/* ─── Bio copy ───────────────────────────────────────────────── */
const bio = `I build digital experiences where design meets performance and ideas
turn into reality. As a Full Stack Web Developer, I specialize in crafting modern,
high-speed, and scalable web applications using React, Node.js, MongoDB, and core
web technologies. Every project I create is engineered with precision—clean
architecture on the inside, and a visually refined interface on the outside.`;

/* ─── Stats ──────────────────────────────────────────────────── */
const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "30+", label: "Projects Shipped" },
  { value: "15+", label: "Happy Clients" },
  { value: "99%", label: "Satisfaction Rate" },
];

/* ─── Skills ─────────────────────────────────────────────────── */
const skills = ["React", "Node.js", "MongoDB", "TypeScript", "Tailwind", "Express", "Next.js", "Figma"];

/* ─── Animated counter hook ──────────────────────────────────── */
function useCountUp(target, duration = 1200, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const num = parseFloat(target.replace(/[^0-9.]/g, ""));
    const suffix = target.replace(/[0-9.]/g, "");
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * num) + suffix);
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

/* ─── Single stat card ───────────────────────────────────────── */
function StatCard({ value, label, animate }) {
  const display = useCountUp(value, 1400, animate);
  return (
    <div className="group relative flex flex-col items-center justify-center px-4 py-5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 hover:bg-white/25 transition-all duration-300 hover:-translate-y-1 cursor-default">
      <span className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-black text-white tracking-tight leading-none">
        {animate ? display : value}
      </span>
      <span className="mt-1.5 text-[11px] sm:text-xs xl:text-sm 2xl:text-base text-white/70 font-medium uppercase tracking-widest text-center">
        {label}
      </span>
      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/0 group-hover:ring-white/30 transition-all duration-300" />
    </div>
  );
}

/* ─── Skill pill ─────────────────────────────────────────────── */
function SkillPill({ name, delay }) {
  return (
    <span
      className="inline-flex items-center cursor-pointer px-3 py-1.5 xl:px-4 xl:py-2 2xl:px-5 2xl:py-2.5 rounded-full text-xs xl:text-sm 2xl:text-base font-semibold bg-white text-orange-500 shadow-sm hover:scale-105 hover:shadow-md transition-all duration-200 cursor-default"
      style={{ animationDelay: `${delay}ms` }}
    >
      {name}
    </span>
  );
}

/* ─── Main component ─────────────────────────────────────────── */
const Home = () => {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  /* Intersection observer for stat counters */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  /* Subtle parallax on scroll */
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHover = () => {
    if (!isPlaying) {
      playerRef.current?.playFromBeginning();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-orange-500 overflow-x-hidden font-sans selection:bg-white/30">

      {/* ── Decorative background geometry ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large circle top-right */}
        <div
          className="absolute -top-24 -right-24 w-[480px] h-[480px] xl:w-[700px] xl:h-[700px] 2xl:w-[900px] 2xl:h-[900px] rounded-full bg-orange-400/50"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        />
        {/* Small accent circle bottom-left */}
        <div
          className="absolute -bottom-16 -left-16 w-64 h-64 xl:w-96 xl:h-96 2xl:w-[480px] 2xl:h-[480px] rounded-full bg-amber-400/30"
          style={{ transform: `translateY(${-scrollY * 0.05}px)` }}
        />
        {/* Horizontal rule accent */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-white/10" />
        {/* Grid dots pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* ── Content wrapper ── */}
      <div className="relative z-10 max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-14 lg:-left-2 xl:px-20 2xl:px-28 py-10 xl:py-16 xl:-left-15 2xl:py-20">

        {/* ── GREETING ROW ── */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 xl:mb-14 2xl:mb-18">
          <h2 className="flex items-center cursor-default gap-2 text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl text-white font-bold">
            Hey there
            <span
              onMouseEnter={handleHover}
              onMouseDown={handleHover}
              className="cursor-pointer select-none"
            >
              <Player
                ref={playerRef}
                icon={hand}
                trigger="click"
                size={36}
                onComplete={() => setIsPlaying(false)}
              />
            </span>
          </h2>

          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 xl:px-5 xl:py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 w-fit">
            <span className="relative flex h-2.5 w-2.5 xl:h-3 xl:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 xl:h-3 xl:w-3 bg-green-400" />
            </span>
            <span className="text-white/90 cursor-pointer text-xs xl:text-sm 2xl:text-base font-semibold tracking-wide">
              Available for work
            </span>
          </div>
        </div>

        {/* ── HERO: Name + Image ── */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 xl:gap-16 2xl:gap-24">

          {/* LEFT */}
          <div className="flex-1 w-full order-2 lg:order-1">

            {/* Name headline */}
            <div className="mb-6 xl:mb-8 2xl:mb-10">
              <p className="text-white/70 text-xs cursor-default xl:text-sm 2xl:text-base font-semibold uppercase tracking-[0.25em] mb-3 xl:mb-4">
                Full Stack Developer
              </p>
              <h1 className="flex flex-wrap items-center gap-3 text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-black text-white leading-tight">
                <span className="cursor-default">My name is</span>
                <span className="relative w-32 h-14 sm:w-40 sm:h-16 xl:w-52 xl:h-20 2xl:w-64 2xl:h-24 inline-flex items-center">
                  <img
                    src={imgAzam}
                    alt="Azam"
                    className="w-full h-full object-contain drop-shadow-lg animate-pulse"
                  />
                </span>
              </h1>
            </div>

            {/* Large typographic statement */}
            <div className="mb-6 xl:mb-8 2xl:mb-10 relative">
              <div className="relative">
                <h2
                  className="font-black text-white cursor-default leading-[0.9] tracking-tighter select-none"
                  style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
                >
                  DEVELOPER
                </h2>
                {/* Outlined stroke text layered */}
                <h2
                  className="font-black cursor-default leading-[0.9] tracking-tighter select-none absolute top-0 left-0 pointer-events-none"
                  style={{
                    fontSize: "clamp(3.5rem, 10vw, 9rem)",
                    WebkitTextStroke: "2px rgba(255,255,255,0.15)",
                    color: "transparent",
                    transform: "translate(4px, 4px)",
                  }}
                >
                  DEVELOPER
                </h2>
              </div>
              <p
                className="font-black italic text-right text-white/30 cursor-default leading-none tracking-tighter mt-1"
                style={{ fontSize: "clamp(1.5rem, 4vw, 3.5rem)" }}
              >
                &amp; DESIGNER
              </p>
            </div>

            {/* Tagline */}
            <p className="text-white/85 cursor-default text-sm sm:text-base xl:text-lg 2xl:text-xl leading-relaxed max-w-lg xl:max-w-xl 2xl:max-w-2xl mb-8 xl:mb-10 2xl:mb-12">
              I build modern, responsive, and scalable web applications with
              clean UI and smooth UX — from concept to deployment.
            </p>

            {/* Skill pills */}
            <div className="flex flex-wrap cursor-default gap-2 xl:gap-3 mb-10 xl:mb-12 2xl:mb-14">
              {skills.map((s, i) => (
                <SkillPill key={s} name={s} delay={i * 60} />
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 xl:gap-4 mb-10 xl:mb-12 2xl:mb-16">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 xl:px-8 xl:py-4 2xl:px-10 2xl:py-5 bg-white text-orange-500 font-bold text-sm xl:text-base 2xl:text-lg rounded-xl xl:rounded-2xl hover:scale-105 hover:shadow-xl transition-all duration-200 group"
              >
                View My Work
                <svg
                  className="w-4 h-4 xl:w-5 xl:h-5 group-hover:translate-x-1 transition-transform"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 xl:px-8 xl:py-4 2xl:px-10 2xl:py-5 bg-white/10 backdrop-blur-md text-white font-bold text-sm xl:text-base 2xl:text-lg rounded-xl xl:rounded-2xl border border-white/25 hover:bg-white/20 hover:scale-105 transition-all duration-200"
              >
                Get In Touch
              </a>
            </div>

            {/* Bio card */}
            <div className="hidden sm:block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl xl:rounded-3xl p-5 xl:p-7 2xl:p-9 max-w-xl xl:max-w-2xl">
              <div className="flex items-center gap-2 mb-3 xl:mb-4">
                <div className="w-1 h-5 xl:h-6 bg-white rounded-full" />
                <span className="text-white/60 cursor-default text-xs xl:text-sm font-semibold uppercase tracking-widest">
                  About
                </span>
              </div>
              <p className="text-white/85 cursor-pointer text-sm xl:text-base 2xl:text-lg leading-7 xl:leading-8 text-justify">
                {bio}
              </p>
            </div>
          </div>

          {/* RIGHT — Photo */}
          <div className="order-1 lg:order-2 flex-shrink-0 w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] xl:max-w-[440px] 2xl:max-w-[560px] mx-auto lg:mx-0">
            {/* Decorative ring */}
            <div className="relative">
              <div className="absolute -inset-3 xl:-inset-5 rounded-[2.5rem] xl:rounded-[3rem] bg-white/10 border border-white/15" />
              <div className="absolute -inset-6 xl:-inset-9 rounded-[3rem] xl:rounded-[4rem] bg-white/5 border border-white/10" />

              {/* Photo card */}
              <div className="relative aspect-[4/5] rounded-[2rem] xl:rounded-[2.5rem] 2xl:rounded-[3rem] overflow-hidden shadow-2xl bg-slate-700">
                <img
                  src={ownerImg}
                  alt="Azam — Full Stack Developer"
                  className="w-full h-full object-cover object-top"
                  style={{ transform: `translateY(${scrollY * 0.04}px)` }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Role badge on photo */}
                <div className="absolute bottom-4 left-4 right-4 xl:bottom-6 xl:left-6 xl:right-6">
                  <div className="bg-black/40 backdrop-blur-md rounded-xl xl:rounded-2xl px-4 py-3 xl:px-5 xl:py-4 border border-white/10">
                    <p className="text-white cursor-default font-bold text-sm xl:text-base 2xl:text-lg">Azam</p>
                    <p className="text-white/70 text-xs xl:text-sm 2xl:text-base">Full Stack Developer & Designer</p>
                  </div>
                </div>
              </div>

              {/* Floating tech badge */}
              <div className="absolute cursor-pointer -top-3 -right-3 xl:-top-4 xl:-right-4 bg-white rounded-xl xl:rounded-2xl shadow-lg px-3 py-2 xl:px-4 xl:py-3 flex items-center gap-2 border border-orange-100">
                <div className="w-2 h-2 xl:w-2.5 xl:h-2.5 rounded-full bg-orange-500" />
                <span className="text-orange-600 cursor-pointer font-bold text-xs xl:text-sm whitespace-nowrap">
                  React & Node.js
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bio mobile ── */}
        <div className="mt-8 sm:hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-5 bg-white rounded-full" />
            <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">About</span>
          </div>
          <p className="text-white/85 text-sm leading-7 text-justify">{bio}</p>
        </div>

        {/* ── STATS ROW ── */}
        <div
          ref={statsRef}
          className="mt-14 xl:mt-20 2xl:mt-28 grid grid-cols-2 sm:grid-cols-4 gap-3 xl:gap-4 2xl:gap-6"
        >
          {stats.map((s) => (
            <StatCard key={s.label} value={s.value} label={s.label} animate={statsVisible} />
          ))}
        </div>

        {/* ── SCROLL HINT ── */}
        <div className="mt-14 xl:mt-20 2xl:mt-24 flex flex-col items-center gap-2 opacity-50">
          <p className="text-white text-xs xl:text-sm uppercase tracking-[0.2em] font-medium">Scroll to explore</p>
          <div className="w-5 h-8 xl:w-6 xl:h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 xl:w-1.5 xl:h-2.5 bg-white/70 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;