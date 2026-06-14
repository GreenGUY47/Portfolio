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
import { useTranslation } from "react-i18next";

const marqueeIcons = [
  { icon: faReact, color: "#61DAFB", label: "React" },
  { icon: faHtml5, color: "#E34F26", label: "HTML5" },
  { icon: faCss3Alt, color: "#1572B6", label: "CSS3" },
  { icon: faJs, color: "#F7DF1E", label: "JavaScript" },
  { icon: faNodeJs, color: "#339933", label: "Node.js" },
  { icon: faNpm, color: "#CB3837", label: "npm" },
  { icon: faDatabase, color: "#47A248", label: "MongoDB" },
  { icon: faGithub, color: "#ffffff", label: "GitHub" },
  { icon: faFigma, color: "#F24E1E", label: "Figma" },
  { icon: faCode, color: "#fff", label: "Code" },
];

const serviceIcons = [
  {
    icon: faLayerGroup,
    color: "text-cyan-300",
    bg: "bg-cyan-400/10 border-cyan-400/20",
  },
  {
    icon: faPalette,
    color: "text-pink-300",
    bg: "bg-pink-400/10 border-pink-400/20",
  },
  {
    icon: faServer,
    color: "text-emerald-300",
    bg: "bg-emerald-400/10 border-emerald-400/20",
  },
  {
    icon: faBolt,
    color: "text-yellow-300",
    bg: "bg-yellow-400/10 border-yellow-400/20",
  },
];

const timelineIcons = [
  { icon: faBriefcase, accent: "bg-orange-300" },
  { icon: faGraduationCap, accent: "bg-white" },
  { icon: faRocket, accent: "bg-amber-300" },
];

function MarqueeRow({ reverse = false, speed = "30s" }) {
  const items = [...marqueeIcons, ...marqueeIcons, ...marqueeIcons];

  return (
    <div className="relative w-full overflow-hidden py-1 xl:py-2">
      <div
        className="flex gap-6 xl:gap-8 2xl:gap-10 w-max"
        dir="ltr"
        style={{
          animation: `marquee${reverse ? "Rev" : ""} ${speed} linear infinite`,
          willChange: "transform",
          transform: "translate3d(0,0,0)",
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center shrink-0 gap-2 px-4 py-2.5 xl:px-5 xl:py-3 2xl:px-6 2xl:py-4 rounded-xl xl:rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm hover:bg-white/20 transition"
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

const AboutMe = () => {
  const { t } = useTranslation();

  const timeline = t("about.journey.items", { returnObjects: true }).map(
    (item, i) => ({
      ...item,
      ...timelineIcons[i],
    }),
  );

  const services = t("about.services.items", { returnObjects: true }).map(
    (item, i) => ({
      ...item,
      ...serviceIcons[i],
    }),
  );

  return (
    <section className="relative w-full min-h-screen bg-orange-500 text-white overflow-x-hidden font-sans selection:bg-white/30 dark:bg-slate-900 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800">
      <style>{`
        @keyframes marquee    { from { transform: translateX(0) } to { transform: translateX(-33.333%) } }
        @keyframes marqueeRev { from { transform: translateX(-33.333%) } to { transform: translateX(0) } }
      `}</style>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] xl:w-[700px] xl:h-[700px] 2xl:w-[900px] 2xl:h-[900px] rounded-full bg-orange-400/40 dark:bg-slate-800/50" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 xl:w-[480px] xl:h-[480px] 2xl:w-[600px] 2xl:h-[600px] rounded-full bg-amber-400/25 dark:bg-slate-800/50" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 right-0 w-px h-full bg-white/10" />
      </div>

      <div className="relative z-10 max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28 py-14 xl:py-20 2xl:py-28">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 xl:mb-16 2xl:mb-20">
          <div>
            <p className="text-white/60 text-xs cursor-default xl:text-sm 2xl:text-base font-semibold uppercase tracking-[0.25em] mb-2 xl:mb-3">
              {t("about.eyebrow")}
            </p>
            <h1
              className="font-black cursor-default text-white leading-none tracking-tighter"
              style={{ fontSize: "clamp(2.8rem, 7vw, 7rem)" }}
            >
              {t("about.heading")}
            </h1>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 xl:px-5 xl:py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 w-fit self-start sm:self-auto">
            <span className="w-2 h-2 xl:w-2.5 xl:h-2.5 rounded-full bg-white/70" />
            <span className="text-white/80 cursor-default text-xs xl:text-sm font-semibold tracking-wide">
              {t("about.badge")}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 cursor-default lg:grid-cols-5 gap-6 xl:gap-8 2xl:gap-10 mb-10 xl:mb-14 2xl:mb-18">
          <div className="lg:col-span-3 flex flex-col gap-5 xl:gap-6 2xl:gap-7">
            <div className="bg-black/30 backdrop-blur-md border border-white/15 rounded-2xl xl:rounded-3xl p-5 xl:p-7 2xl:p-9">
              <div className="flex items-center gap-2 mb-4 xl:mb-5">
                <div className="w-1 h-5 xl:h-6 bg-white rounded-full" />
                <span className="text-white/60 text-xs xl:text-sm font-semibold uppercase tracking-widest">
                  {t("about.intro.label")}
                </span>
              </div>
              <p className="text-white/90 text-sm xl:text-base 2xl:text-lg leading-7 xl:leading-8 text-justify">
                {t("about.intro.body")}
              </p>
            </div>

            <div className="bg-black/20 cursor-default backdrop-blur-md border border-white/15 rounded-2xl xl:rounded-3xl p-5 xl:p-7 2xl:p-9 flex gap-4 items-start">
              <div className="shrink-0 w-10 h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 rounded-xl xl:rounded-2xl bg-orange-300/20 border border-orange-300/30 flex items-center justify-center dark:bg-slate-700/50 dark:border-slate-400">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="text-orange-300 text-base xl:text-xl 2xl:text-2xl dark:text-slate-300"
                />
              </div>
              <p className="text-white/85 text-sm xl:text-base 2xl:text-lg leading-7 xl:leading-8 text-justify">
                {t("about.goal.body")}
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 bg-black/25 backdrop-blur-md border border-white/15 rounded-2xl xl:rounded-3xl p-5 xl:p-7 2xl:p-9">
            <div className="flex items-center gap-2 mb-6 xl:mb-7">
              <div className="w-1 h-5 xl:h-6 bg-white rounded-full" />
              <span className="text-white/60 text-xs xl:text-sm font-semibold uppercase tracking-widest">
                {t("about.journey.label")}
              </span>
            </div>
            <div className="relative flex flex-col gap-0">
              <div className="absolute left-[19px] xl:left-[23px] top-2 bottom-2 w-px bg-white/15" />
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className="relative flex gap-4 xl:gap-5 pb-7 xl:pb-9 last:pb-0"
                >
                  <div
                    className={`shrink-0 w-10 h-10 xl:w-12 xl:h-12 rounded-full ${item.accent} flex items-center justify-center z-10 dark:bg-slate-700/50`}
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="text-orange-600 text-sm xl:text-base dark:text-white/90"
                    />
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

        <div className="mb-12 xl:mb-16 2xl:mb-20">
          <div className="flex cursor-default items-center gap-3 mb-6 xl:mb-7 2xl:mb-8">
            <div className="w-1 h-5 xl:h-6 bg-white rounded-full" />
            <span className="text-white/60 text-xs xl:text-sm font-semibold uppercase tracking-widest">
              {t("about.services.label")}
            </span>
          </div>
          <div className="grid grid-cols-1 cursor-pointer sm:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-5 2xl:gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className={`group flex flex-col gap-3 xl:gap-4 p-5 xl:p-6 2xl:p-7 rounded-2xl xl:rounded-3xl border backdrop-blur-md bg-black/20 hover:-translate-y-1 hover:bg-black/30 transition-all duration-300 ${s.bg} dark:hover:bg-slate-800/50 dark:border-slate-400`}
              >
                <div
                  className={`w-10 h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 rounded-xl xl:rounded-2xl flex items-center justify-center border ${s.bg}`}
                >
                  <FontAwesomeIcon
                    icon={s.icon}
                    className={`${s.color} text-lg xl:text-xl 2xl:text-2xl`}
                  />
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

        <div
          className="flex flex-col gap-3 xl:gap-4 2xl:gap-5 -mx-5 sm:-mx-8 lg:-mx-14 xl:-mx-20 2xl:-mx-28 overflow-hidden"
          dir="ltr"
          style={{ unicodeBidi: "isolate" }}
        >
          <MarqueeRow speed="35s" />
          <MarqueeRow reverse speed="28s" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
