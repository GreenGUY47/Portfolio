import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
  faNodeJs,
  faNpm,
  faGithub,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faCode,
  faBriefcase,
  faGraduationCap,
  faRocket,
  faLayerGroup,
  faPalette,
  faServer,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

/* ─── Marquee icons ─────────────────────────────────────────── */
const marqueeIcons = [
  { icon: faReact,       color: "#61DAFB", label: "React" },
  { icon: faHtml5,       color: "#E34F26", label: "HTML5" },
  { icon: faCss3Alt,     color: "#1572B6", label: "CSS3" },
  { icon: faJs,          color: "#F7DF1E", label: "JavaScript" },
  { icon: faNodeJs,      color: "#339933", label: "Node.js" },
  { icon: faNpm,         color: "#CB3837", label: "npm" },
  { icon: faDatabase,    color: "#47A248", label: "MongoDB" },
  { icon: faGithub,      color: "#ffffff", label: "GitHub" },
  { icon: faFigma,       color: "#F24E1E", label: "Figma" },
  { icon: faCode,        color: "#fff",    label: "Code" },
];

/* ─── What I Do cards ───────────────────────────────────────── */
const services = [
  {
    icon: faLayerGroup,
    color: "text-cyan-300",
    bg: "bg-cyan-400/10 border-cyan-400/20",
    title: "Full-Stack Development",
    desc: "End-to-end web apps from database schema to polished UI — architected for scale.",
  },
  {
    icon: faPalette,
    color: "text-pink-300",
    bg: "bg-pink-400/10 border-pink-400/20",
    title: "UI / UX Design",
    desc: "Pixel-perfect interfaces with intuitive flows and refined visual systems.",
  },
  {
    icon: faServer,
    color: "text-emerald-300",
    bg: "bg-emerald-400/10 border-emerald-400/20",
    title: "API & Backend",
    desc: "RESTful APIs, auth systems, and database integrations that perform under pressure.",
  },
  {
    icon: faBolt,
    color: "text-yellow-300",
    bg: "bg-yellow-400/10 border-yellow-400/20",
    title: "Performance & Optimization",
    desc: "Lighthouse scores, Core Web Vitals, and lean bundles — speed is a feature.",
  },
];

/* ─── Timeline ──────────────────────────────────────────────── */
const timeline = [
  {
    year: "2023 – Present",
    role: "Freelance Full Stack Developer",
    detail: "Delivering client projects across e-commerce, SaaS dashboards, and marketing sites.",
    icon: faBriefcase,
    accent: "bg-orange-300",
  },
  {
    year: "2022 – 2023",
    role: "Self-Taught Intensive",
    detail: "Deep-dived into React, Node.js, MongoDB, and modern CSS — built 30+ real-world projects.",
    icon: faGraduationCap,
    accent: "bg-white",
  },
  {
    year: "2022",
    role: "First Project Shipped",
    detail: "Launched a full-stack web app — the spark that made development a career, not a hobby.",
    icon: faRocket,
    accent: "bg-amber-300",
  },
];

/* ─── Marquee row ───────────────────────────────────────────── */
function MarqueeRow({ reverse = false, speed = "30s" }) {
  const doubled = [...marqueeIcons, ...marqueeIcons, ...marqueeIcons];
  return (
    <div className="relative w-full overflow-hidden py-1 xl:py-2">
      <div
        className="flex gap-6 xl:gap-8 2xl:gap-10 w-max"
        style={{
          animation: `marquee${reverse ? "Rev" : ""} ${speed} linear infinite`,
          
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2.5 xl:px-5 xl:py-3 2xl:px-6 2xl:py-4 rounded-xl xl:rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm hover:bg-white/20 transition-colors duration-200 shrink-0"
          >
            <FontAwesomeIcon
              icon={item.icon}
              style={{ color: item.color }}
              className="text-base xl:text-xl 2xl:text-2xl"
            />
            <span className="text-white/80 text-xs xl:text-sm 2xl:text-base font-semibold">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Main component ────────────────────────────────────────── */
const AboutMe = () => {
  return (
    <section className="relative w-full min-h-screen bg-orange-500 overflow-x-hidden font-sans selection:bg-white/30">

      {/* ── Keyframe styles ── */}
      <style>{`
        @keyframes marquee    { from { transform: translateX(0) } to { transform: translateX(-33.333%) } }
        @keyframes marqueeRev { from { transform: translateX(-33.333%) } to { transform: translateX(0) } }
      `}</style>

      {/* ── Background geometry ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] xl:w-[700px] xl:h-[700px] 2xl:w-[900px] 2xl:h-[900px] rounded-full bg-orange-400/40" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 xl:w-[480px] xl:h-[480px] 2xl:w-[600px] 2xl:h-[600px] rounded-full bg-amber-400/25" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Diagonal accent bar */}
        <div className="absolute top-0 right-0 w-px h-full bg-white/10" />
      </div>

      <div className="relative z-10 max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28 py-14 xl:py-20 2xl:py-28">

        {/* ── Section header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 xl:mb-16 2xl:mb-20">
          <div>
            <p className="text-white/60 text-xs xl:text-sm 2xl:text-base font-semibold uppercase tracking-[0.25em] mb-2 xl:mb-3">
              Get to know me
            </p>
            <h1
              className="font-black text-white leading-none tracking-tighter"
              style={{ fontSize: "clamp(2.8rem, 7vw, 7rem)" }}
            >
              ABOUT ME
            </h1>
          </div>
          {/* Decorative pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 xl:px-5 xl:py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 w-fit self-start sm:self-auto">
            <span className="w-2 h-2 xl:w-2.5 xl:h-2.5 rounded-full bg-white/70" />
            <span className="text-white/80 text-xs xl:text-sm font-semibold tracking-wide">
              Full Stack Developer & Designer
            </span>
          </div>
        </div>

        {/* ── MAIN GRID: bio + timeline ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 xl:gap-8 2xl:gap-10 mb-10 xl:mb-14 2xl:mb-18">

          {/* Bio — 3 cols */}
          <div className="lg:col-span-3 flex flex-col gap-5 xl:gap-6 2xl:gap-7">
            {/* Intro card */}
            <div className="bg-black/30 backdrop-blur-md border border-white/15 rounded-2xl xl:rounded-3xl p-5 xl:p-7 2xl:p-9">
              <div className="flex items-center gap-2 mb-4 xl:mb-5">
                <div className="w-1 h-5 xl:h-6 bg-white rounded-full" />
                <span className="text-white/60 text-xs xl:text-sm font-semibold uppercase tracking-widest">Intro</span>
              </div>
              <p className="text-white/90 text-sm xl:text-base 2xl:text-lg leading-7 xl:leading-8 text-justify">
                I am a creative and detail-oriented{" "}
                <span className="text-white font-bold">Full Stack Web Developer</span>{" "}
                passionate about building modern, responsive, and impactful digital experiences.
                I specialize in transforming ideas into powerful web applications that are fast,
                scalable, and visually refined. With strong expertise in{" "}
                <span className="text-cyan-300 font-semibold">React</span>,{" "}
                <span className="text-orange-300 font-semibold">HTML5</span>,{" "}
                <span className="text-blue-300 font-semibold">CSS3</span>, and{" "}
                <span className="text-yellow-300 font-semibold">JavaScript</span>, combined
                with backend skills in{" "}
                <span className="text-green-300 font-semibold">Node.js</span> and{" "}
                <span className="text-purple-300 font-semibold">MongoDB</span>, I create
                complete solutions that balance performance with design.
              </p>
            </div>

            {/* Goal card */}
            <div className="bg-black/20 backdrop-blur-md border border-white/15 rounded-2xl xl:rounded-3xl p-5 xl:p-7 2xl:p-9 flex gap-4 items-start">
              <div className="shrink-0 w-10 h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 rounded-xl xl:rounded-2xl bg-orange-300/20 border border-orange-300/30 flex items-center justify-center">
                <FontAwesomeIcon icon={faGraduationCap} className="text-orange-300 text-base xl:text-xl 2xl:text-2xl" />
              </div>
              <p className="text-white/85 text-sm xl:text-base 2xl:text-lg leading-7 xl:leading-8 text-justify">
                I am constantly evolving — learning new frameworks, sharpening my problem-solving
                skills, and pushing the boundaries of what I can build. My goal is to craft{" "}
                <span className="text-orange-300 font-bold">meaningful digital products</span>{" "}
                that leave a lasting impression. Whether working solo or in a team, I bring
                dedication, creativity, and a hunger for excellence to every project I touch.
              </p>
            </div>
          </div>

          {/* Timeline — 2 cols */}
          <div className="lg:col-span-2 bg-black/25 backdrop-blur-md border border-white/15 rounded-2xl xl:rounded-3xl p-5 xl:p-7 2xl:p-9">
            <div className="flex items-center gap-2 mb-6 xl:mb-7">
              <div className="w-1 h-5 xl:h-6 bg-white rounded-full" />
              <span className="text-white/60 text-xs xl:text-sm font-semibold uppercase tracking-widest">Journey</span>
            </div>
            <div className="relative flex flex-col gap-0">
              {/* Vertical line */}
              <div className="absolute left-[19px] xl:left-[23px] top-2 bottom-2 w-px bg-white/15" />
              {timeline.map((item, i) => (
                <div key={i} className="relative flex gap-4 xl:gap-5 pb-7 xl:pb-9 last:pb-0">
                  {/* Dot */}
                  <div
                    className={`shrink-0 w-10 h-10 xl:w-12 xl:h-12 rounded-full ${item.accent} flex items-center justify-center z-10`}
                  >
                    <FontAwesomeIcon icon={item.icon} className="text-orange-600 text-sm xl:text-base" />
                  </div>
                  <div className="pt-1 xl:pt-1.5">
                    <p className="text-white/50 text-[10px] xl:text-xs 2xl:text-sm font-semibold uppercase tracking-widest mb-1">
                      {item.year}
                    </p>
                    <h3 className="text-white font-bold text-sm xl:text-base 2xl:text-lg mb-1.5">
                      {item.role}
                    </h3>
                    <p className="text-white/70 text-xs xl:text-sm 2xl:text-base leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── SERVICES GRID ── */}
        <div className="mb-12 xl:mb-16 2xl:mb-20">
          <div className="flex items-center gap-3 mb-6 xl:mb-7 2xl:mb-8">
            <div className="w-1 h-5 xl:h-6 bg-white rounded-full" />
            <span className="text-white/60 text-xs xl:text-sm font-semibold uppercase tracking-widest">What I Do</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-5 2xl:gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className={`group flex flex-col gap-3 xl:gap-4 p-5 xl:p-6 2xl:p-7 rounded-2xl xl:rounded-3xl border backdrop-blur-md bg-black/20 hover:-translate-y-1 hover:bg-black/30 transition-all duration-300 ${s.bg}`}
              >
                <div className={`w-10 h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 rounded-xl xl:rounded-2xl flex items-center justify-center border ${s.bg}`}>
                  <FontAwesomeIcon icon={s.icon} className={`${s.color} text-lg xl:text-xl 2xl:text-2xl`} />
                </div>
                <h3 className="text-white font-bold text-sm xl:text-base 2xl:text-lg leading-tight">
                  {s.title}
                </h3>
                <p className="text-white/65 text-xs xl:text-sm 2xl:text-base leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── MARQUEE ROWS ── */}
        <div className="flex flex-col gap-3 xl:gap-4 2xl:gap-5 -mx-5 sm:-mx-8 lg:-mx-14 xl:-mx-20 2xl:-mx-28 overflow-hidden">
          <MarqueeRow speed="35s" />
          <MarqueeRow reverse speed="28s" />
        </div>

      </div>
    </section>
  );
};

export default AboutMe;