import { useTranslation } from "react-i18next";

const CV = () => {
  const { t } = useTranslation();

  const stats = t("cv.stats.items", { returnObjects: true });
  const highlights = t("cv.highlights.items", { returnObjects: true });

  return (
    <section className="relative w-full min-h-screen bg-orange-500 text-white overflow-x-hidden font-sans selection:bg-white/30 dark:bg-slate-900 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800">
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

      <div className="relative z-10 max-w-screen-xl 2xl:max-w-screen-2xl mx-auto w-full px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28 py-14 xl:py-20 2xl:py-28 flex flex-col flex-1">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 xl:mb-16 2xl:mb-20">
          <div>
            <p className="text-white/60 cursor-default text-xs xl:text-sm 2xl:text-base font-semibold uppercase tracking-[0.25em] mb-2 xl:mb-3">
              {t("cv.eyebrow")}
            </p>
            <h1
              className="font-black cursor-pointer text-white leading-none tracking-tighter"
              style={{ fontSize: "clamp(2.8rem, 7vw, 7rem)" }}
            >
              {t("cv.heading")}
            </h1>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 xl:px-5 xl:py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 w-fit self-start sm:self-auto">
            <span className="relative flex h-2 w-2 xl:h-2.5 xl:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 xl:h-2.5 xl:w-2.5 bg-green-400" />
            </span>
            <span className="text-white/80 cursor-default text-xs xl:text-sm font-semibold tracking-wide">
              {t("cv.badge")}
            </span>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-5 gap-6 xl:gap-8 2xl:gap-10 items-start">
          <div className="lg:col-span-3 flex flex-col gap-5 xl:gap-6 2xl:gap-7">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 xl:h-6 bg-white rounded-full" />
                <span className="text-white/60 cursor-default text-xs xl:text-sm font-semibold uppercase tracking-widest">
                  {t("cv.document.label")}
                </span>
              </div>
              <span className="bg-green-400/15 cursor-pointer text-green-300 text-xs xl:text-sm font-semibold px-3 py-1 xl:px-4 xl:py-1.5 rounded-full border border-green-400/25">
                {t("cv.document.pdfReady")}
              </span>
            </div>

            <div className="relative group">
              <div className="absolute -inset-2 xl:-inset-3 rounded-[2rem] xl:rounded-[2.5rem] bg-white/10 border border-white/15 -z-10" />
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <div className="relative overflow-hidden rounded-2xl xl:rounded-3xl border border-white/15 shadow-2xl">
                  <img
                    src="/CV.png"
                    alt={t("cv.document.altText")}
                    className="w-full h-auto object-cover group-hover:scale-[1.025] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center gap-2 bg-white text-orange-500 font-bold text-sm xl:text-base 2xl:text-lg px-5 py-2.5 xl:px-7 xl:py-3.5 rounded-xl xl:rounded-2xl shadow-xl">
                      <svg
                        className="w-4 h-4 xl:w-5 xl:h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      {t("cv.document.openLabel")}
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 xl:gap-4">
              <a
                href="/CV.pdf"
                download
                className="flex-1 flex items-center justify-center gap-2 xl:gap-3 bg-white text-orange-500 font-bold py-3.5 xl:py-4 2xl:py-5 rounded-xl xl:rounded-2xl hover:scale-[1.02] hover:shadow-xl transition-all duration-200 text-sm xl:text-base 2xl:text-lg dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600"
              >
                <svg
                  className="w-4 h-4 xl:w-5 xl:h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                {t("cv.cta.download")}
              </a>
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 xl:gap-3 bg-white/10 backdrop-blur-md border border-white/25 text-white font-bold py-3.5 xl:py-4 2xl:py-5 rounded-xl xl:rounded-2xl hover:bg-white/20 hover:scale-[1.02] transition-all duration-200 text-sm xl:text-base 2xl:text-lg"
              >
                <svg
                  className="w-4 h-4 xl:w-5 xl:h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                {t("cv.cta.viewInBrowser")}
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 cursor-pointer flex flex-col gap-5 xl:gap-6 2xl:gap-7">
            <div className="bg-black/25 backdrop-blur-md border border-white/15 rounded-2xl xl:rounded-3xl p-5 xl:p-7 2xl:p-9">
              <div className="flex items-center gap-2 mb-5 xl:mb-6">
                <div className="w-1 h-5 xl:h-6 bg-white rounded-full" />
                <span className="text-white/60 text-xs xl:text-sm font-semibold uppercase tracking-widest">
                  {t("cv.stats.label")}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 xl:gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="group flex flex-col items-center justify-center py-4 xl:py-5 2xl:py-6 px-3 rounded-xl xl:rounded-2xl bg-white/10 border border-white/10 hover:bg-white/15 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <span className="text-2xl xl:text-3xl 2xl:text-4xl font-black text-white tracking-tight">
                      {s.value}
                    </span>
                    <span className="text-white/55 text-[10px] xl:text-xs 2xl:text-sm uppercase tracking-widest mt-1 font-semibold">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black/20 backdrop-blur-md border border-white/15 rounded-2xl xl:rounded-3xl p-5 xl:p-7 2xl:p-9">
              <div className="flex items-center gap-2 mb-5 xl:mb-6">
                <div className="w-1 h-5 xl:h-6 bg-white rounded-full" />
                <span className="text-white/60 text-xs xl:text-sm font-semibold uppercase tracking-widest">
                  {t("cv.highlights.label")}
                </span>
              </div>
              <div className="flex flex-col gap-2.5 xl:gap-3 2xl:gap-4">
                {highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 xl:gap-4 px-4 py-3 xl:px-5 xl:py-3.5 2xl:px-6 2xl:py-4 rounded-xl xl:rounded-2xl bg-white/10 border border-white/10 hover:bg-white/15 hover:translate-x-1 transition-all duration-200"
                  >
                    <span className="text-lg xl:text-xl 2xl:text-2xl">
                      {h.icon}
                    </span>
                    <span className="text-white font-semibold text-sm xl:text-base 2xl:text-lg">
                      {h.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl xl:rounded-3xl p-5 xl:p-6 2xl:p-7 flex gap-3 xl:gap-4 items-start">
              <div className="shrink-0 w-8 h-8 xl:w-10 xl:h-10 rounded-xl bg-white/15 flex items-center justify-center text-base xl:text-lg">
                ✉️
              </div>
              <div>
                <p className="text-white font-bold text-sm xl:text-base 2xl:text-lg mb-1">
                  {t("cv.note.title")}
                </p>
                <p className="text-white/65 text-xs xl:text-sm 2xl:text-base leading-relaxed">
                  {t("cv.note.body")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
