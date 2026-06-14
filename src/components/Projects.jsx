import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export function ImgSlider() {
  const { t } = useTranslation();
  const images = Object.values(
    import.meta.glob("../assets/samples/*.{png,jpg,jpeg,webp}", {
      eager: true,
      import: "default",
    }),
  );

  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [direction, setDirection] = useState(null);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef(null);
  const imagesRef = useRef(images);

  useEffect(() => {
    let loaded = 0;
    imagesRef.current.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loaded++;
        if (loaded === imagesRef.current.length)
          setTimeout(() => setLoading(false), 800);
      };
    });
  }, []);

  const startSlide = () => {
    stopSlide();
    intervalRef.current = setInterval(() => navigate("right"), 3500);
  };
  const stopSlide = () => clearInterval(intervalRef.current);

  useEffect(() => {
    if (!loading) startSlide();
    return stopSlide;
  }, [loading]);

  const navigate = (dir) => {
    if (animating) return;
    setAnimating(true);
    setDirection(dir);
    setTimeout(() => {
      setIndex((prev) =>
        dir === "right"
          ? (prev + 1) % imagesRef.current.length
          : (prev - 1 + imagesRef.current.length) % imagesRef.current.length,
      );
      setDirection(null);
      setAnimating(false);
    }, 350);
  };

  const openLightbox = () => {
    const overlay = document.createElement("div");
    overlay.style.cssText =
      "position:fixed;inset:0;background:rgba(0,0,0,0.75);backdrop-filter:blur(12px);z-index:9998;display:flex;align-items:center;justify-content:center;cursor:pointer;";
    const img = document.createElement("img");
    img.src = imagesRef.current[index];
    img.style.cssText =
      "max-width:92%;max-height:92%;border-radius:20px;box-shadow:0 0 80px rgba(0,0,0,0.6);z-index:9999;";
    overlay.appendChild(img);
    const close = () => {
      document.body.style.overflow = "auto";
      document.body.removeChild(overlay);
    };
    overlay.onclick = close;
    img.onclick = (e) => e.stopPropagation();
    document.body.style.overflow = "hidden";
    document.body.appendChild(overlay);
  };

  const total = imagesRef.current.length;

  return (
    <div className="w-full flex flex-col items-center gap-6 xl:gap-8 2xl:gap-10">
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg xl:max-w-xl 2xl:max-w-2xl group">
        <div
          className="relative aspect-[4/3] rounded-2xl xl:rounded-3xl overflow-hidden bg-black/30 border border-white/15 shadow-2xl cursor-pointer"
          onMouseEnter={stopSlide}
          onMouseLeave={startSlide}
        >
          {loading ? (
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-white/5 via-white/15 to-white/5" />
          ) : (
            <>
              <img
                key={index}
                src={images[index]}
                onClick={openLightbox}
                alt={`${t("projects.gallery.altPrefix")} ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-300"
                style={{
                  animation: direction
                    ? `slide${direction === "right" ? "OutLeft" : "OutRight"} 0.35s ease forwards`
                    : "slideIn 0.35s ease forwards",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              <div className="absolute top-3 right-3 xl:top-4 xl:right-4 px-3 py-1 xl:px-4 xl:py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15">
                <span className="text-white text-xs xl:text-sm font-bold">
                  {index + 1} / {total}
                </span>
              </div>
              <div
                onClick={openLightbox}
                className="absolute bottom-3 right-3 xl:bottom-4 xl:right-4 w-8 h-8 xl:w-10 xl:h-10 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors opacity-0 group-hover:opacity-100 duration-200"
              >
                <svg
                  className="w-4 h-4 xl:w-5 xl:h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
              </div>
            </>
          )}
        </div>

        {!loading && (
          <>
            <button
              onClick={() => navigate("left")}
              onMouseEnter={stopSlide}
              onMouseLeave={startSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 xl:-translate-x-5 w-9 h-9 xl:w-11 xl:h-11 2xl:w-13 2xl:h-13 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-200 z-10 dark:bg-slate-900 dark:hover:bg-slate-700/100 dark:shadow-slate-700/50"
            >
              <svg
                className="w-4 h-4 xl:w-5 xl:h-5 text-orange-500 dark:text-slate-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => navigate("right")}
              onMouseEnter={stopSlide}
              onMouseLeave={startSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 xl:translate-x-5 w-9 h-9 xl:w-11 xl:h-11 2xl:w-13 2xl:h-13 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-200 z-10 dark:bg-slate-900 dark:hover:bg-slate-700/100 dark:shadow-slate-700/50"
            >
              <svg
                className="w-4 h-4 xl:w-5 xl:h-5 text-orange-500 dark:text-slate-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      {!loading && total > 1 && (
        <div className="flex gap-1.5 xl:gap-2">
          {imagesRef.current.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                stopSlide();
                setIndex(i);
                setTimeout(startSlide, 100);
              }}
              className={`rounded-full transition-all duration-300 ${
                i === index
                  ? "w-6 xl:w-8 h-2 xl:h-2.5 bg-white"
                  : "w-2 xl:w-2.5 h-2 xl:h-2.5 bg-white/35 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}

      <style>{`
        @keyframes slideIn        { from { opacity:0; transform:translateX(30px)  } to { opacity:1; transform:translateX(0) } }
        @keyframes slideOutLeft   { from { opacity:1; transform:translateX(0)     } to { opacity:0; transform:translateX(-30px) } }
        @keyframes slideOutRight  { from { opacity:1; transform:translateX(0)     } to { opacity:0; transform:translateX(30px) } }
      `}</style>
    </div>
  );
}

const Projects = () => {
  const { t } = useTranslation();
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVideoReady(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-orange-500 text-white overflow-x-hidden font-sans selection:bg-white/30 dark:bg-slate-900 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800">
      {/* ── Background geometry ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 -right-28 w-[460px] h-[460px] xl:w-[650px] xl:h-[650px] 2xl:w-[860px] 2xl:h-[860px] rounded-full bg-orange-400/45 dark:bg-slate-800/50" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 xl:w-96 xl:h-96 2xl:w-[500px] 2xl:h-[500px] rounded-full bg-amber-400/25 dark:bg-slate-800/50" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28 py-14 xl:py-20 2xl:py-28">
        {/* ── Section header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 xl:mb-16 2xl:mb-20">
          <div>
            <p className="text-white/60 cursor-default text-xs xl:text-sm 2xl:text-base font-semibold uppercase tracking-[0.25em] mb-2 xl:mb-3">
              {t("projects.eyebrow")}
            </p>
            <h1
              className="font-black text-white cursor-default leading-none tracking-tighter"
              style={{ fontSize: "clamp(2.8rem, 7vw, 7rem)" }}
            >
              {t("projects.heading")}
            </h1>
          </div>
          <div className="inline-flex items-center cursor-default gap-2 px-4 py-2 xl:px-5 xl:py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 w-fit self-start sm:self-auto">
            <span className="w-2 h-2 xl:w-2.5 xl:h-2.5 rounded-full bg-white/70" />
            <span className="text-white/80 text-xs xl:text-sm font-semibold tracking-wide">
              {t("projects.badge")}
            </span>
          </div>
        </div>

        <div className="mb-14 xl:mb-20 2xl:mb-24">
          <div className="flex items-center gap-3 mb-5 xl:mb-6 2xl:mb-7">
            <div className="w-1 h-5 xl:h-6 bg-white rounded-full" />
            <span className="text-white/60 cursor-default text-xs xl:text-sm font-semibold uppercase tracking-widest">
              {t("projects.video.label")}
            </span>
          </div>

          <div className="relative w-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
            <div className="absolute -inset-2 xl:-inset-3 rounded-[2rem] xl:rounded-[2.5rem] bg-white/10 border border-white/15 -z-10" />

            {videoReady ? (
              <div className="w-full aspect-video cursor-pointer bg-black rounded-2xl xl:rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <video
                  controls
                  className="w-full h-full object-contain"
                  poster=""
                >
                  <source src="/portfolio-Remake1.mp4" type="video/mp4" />
                  {t("projects.video.unsupported")}
                </video>
              </div>
            ) : (
              <div className="w-full aspect-video rounded-2xl xl:rounded-3xl overflow-hidden relative bg-black/40 border border-white/10">
                <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-white/5 via-white/10 to-white/5" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                  <p className="text-white/50 text-xs xl:text-sm font-medium tracking-wider uppercase">
                    {t("projects.video.loading")}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6 xl:mb-8 2xl:mb-10">
            <div className="w-1 h-5 xl:h-6 bg-white rounded-full" />
            <span className="text-white/60 cursor-default text-xs xl:text-sm font-semibold uppercase tracking-widest">
              {t("projects.gallery.label")}
            </span>
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-white/40 cursor-default text-xs xl:text-sm font-medium">
              {t("projects.gallery.hint")}
            </span>
          </div>
          <ImgSlider />
        </div>
      </div>
    </section>
  );
};

export default Projects;
