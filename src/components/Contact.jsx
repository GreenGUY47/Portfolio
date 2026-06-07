import { useTranslation } from "react-i18next";

/* ─── Social icons (static, can't live in JSON) ─────────────── */
const socialIcons = [
  {
    href: "https://github.com/GreenGUY47",
    bg: "bg-white/10 border-white/15",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 xl:w-6 xl:h-6 text-white">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/azam-dev",
    bg: "bg-blue-400/10 border-blue-400/20",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 xl:w-6 xl:h-6 text-blue-300">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/m.azam249?igsh=MTkxbTBkODZxcm04dw==",
    bg: "bg-pink-400/10 border-pink-400/20",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 xl:w-6 xl:h-6 text-pink-300">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

const Contact = () => {
  const { t } = useTranslation();

  const faqs    = t('contact.faq.items',    { returnObjects: true });
  const socials = t('contact.social.items', { returnObjects: true }).map((s, i) => ({
    ...s,
    ...socialIcons[i],
  }));

  return (
    <section className="relative w-full min-h-screen bg-orange-500 text-white overflow-x-hidden font-sans selection:bg-white/30 dark:bg-slate-900 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800">

      {/* ── Background geometry ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 -right-28 w-[460px] h-[460px] xl:w-[650px] xl:h-[650px] 2xl:w-[860px] 2xl:h-[860px] rounded-full bg-orange-400/45 dark:bg-slate-800/50" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 xl:w-96 xl:h-96 2xl:w-[500px] 2xl:h-[500px] rounded-full bg-amber-400/25 dark:bg-slate-800/50" />
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      </div>

      <div className="relative z-10 max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28 py-14 xl:py-20 2xl:py-28">

        {/* ── Section header ── */}
        <div className="flex flex-col cursor-default sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 xl:mb-16 2xl:mb-20">
          <div>
            <p className="text-white/60 text-xs xl:text-sm 2xl:text-base font-semibold uppercase tracking-[0.25em] mb-2 xl:mb-3">
              {t('contact.eyebrow')}
            </p>
            <h1 className="font-black text-white leading-none tracking-tighter" style={{ fontSize: "clamp(2.8rem, 7vw, 7rem)" }}>
              {t('contact.heading1')}{" "}
              <span className="font-black italic tracking-tighter" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.5)", color: "transparent" }}>
                {t('contact.heading2')}
              </span>
            </h1>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 xl:px-5 xl:py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 w-fit self-start sm:self-auto">
            <span className="relative flex h-2 w-2 xl:h-2.5 xl:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 xl:h-2.5 xl:w-2.5 bg-green-400" />
            </span>
            <span className="text-white/80 text-xs xl:text-sm font-semibold tracking-wide">
              {t('contact.badge')}
            </span>
          </div>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 cursor-default lg:grid-cols-5 gap-6 xl:gap-8 2xl:gap-10">

          {/* LEFT — contact methods (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-5 xl:gap-6 2xl:gap-7">

            {/* Intro card */}
            <div className="bg-black/25 backdrop-blur-md border border-white/15 rounded-2xl xl:rounded-3xl p-5 xl:p-7 2xl:p-9">
              <h3 className="text-white font-bold text-lg xl:text-xl 2xl:text-2xl mb-2">
                {t('contact.intro.title')}
              </h3>
              <p className="text-white/70 text-sm xl:text-base 2xl:text-lg leading-relaxed">
                {t('contact.intro.body')}
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2 xl:gap-3">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 xl:h-5 bg-white rounded-full" />
                <p className="text-white/60 text-xs xl:text-sm font-semibold uppercase tracking-widest">
                  {t('contact.email.label')}
                </p>
              </div>
              <a href="mailto:thegreenguy48@gmail.com"
                className="group flex items-center gap-4 xl:gap-5 bg-black/20 hover:bg-black/35 backdrop-blur-md border border-white/15 hover:border-white/30 transition-all duration-200 px-5 py-4 xl:px-6 xl:py-5 2xl:px-7 2xl:py-6 rounded-2xl xl:rounded-3xl hover:-translate-y-0.5">
                <div className="shrink-0 w-11 h-11 xl:w-13 xl:h-13 2xl:w-15 2xl:h-15 rounded-xl xl:rounded-2xl bg-orange-300/20 border border-orange-300/25 flex items-center justify-center">
                  <svg className="w-5 h-5 xl:w-6 xl:h-6 text-orange-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white/55 text-[10px] xl:text-xs uppercase tracking-widest mb-0.5">
                    {t('contact.email.sublabel')}
                  </p>
                  <p className="text-white font-semibold text-sm xl:text-base 2xl:text-lg truncate group-hover:text-orange-200 transition-colors">
                    {t('contact.email.address')}
                  </p>
                </div>
                <svg className="w-5 h-5 xl:w-6 xl:h-6 text-white/30 group-hover:text-white/80 group-hover:translate-x-1 transition-all duration-200 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col gap-2 xl:gap-3">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 xl:h-5 bg-white rounded-full" />
                <p className="text-white/60 text-xs xl:text-sm font-semibold uppercase tracking-widest">
                  {t('contact.whatsapp.label')}
                </p>
              </div>
              <a href="https://wa.me/923124123581" target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-4 xl:gap-5 bg-black/20 hover:bg-black/35 backdrop-blur-md border border-white/15 hover:border-green-400/30 transition-all duration-200 px-5 py-4 xl:px-6 xl:py-5 2xl:px-7 2xl:py-6 rounded-2xl xl:rounded-3xl hover:-translate-y-0.5">
                <div className="shrink-0 w-11 h-11 xl:w-13 xl:h-13 2xl:w-15 2xl:h-15 rounded-xl xl:rounded-2xl bg-green-400/15 border border-green-400/25 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 xl:w-6 xl:h-6 text-green-300">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white/55 text-[10px] xl:text-xs uppercase tracking-widest mb-0.5">
                    {t('contact.whatsapp.sublabel')}
                  </p>
                  <p className="text-white font-semibold text-sm xl:text-base 2xl:text-lg group-hover:text-green-200 transition-colors">
                    {t('contact.whatsapp.number')}
                  </p>
                </div>
                <svg className="w-5 h-5 xl:w-6 xl:h-6 text-white/30 group-hover:text-white/80 group-hover:translate-x-1 transition-all duration-200 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-2 xl:gap-3">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 xl:h-5 bg-white rounded-full" />
                <p className="text-white/60 text-xs xl:text-sm font-semibold uppercase tracking-widest">
                  {t('contact.social.label')}
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 xl:gap-4">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className={`group flex flex-col items-center gap-2 xl:gap-3 py-4 xl:py-5 2xl:py-6 px-3 rounded-2xl xl:rounded-3xl border backdrop-blur-md hover:-translate-y-1 hover:shadow-lg transition-all duration-200 ${s.bg} bg-black/20`}>
                    {s.icon}
                    <span className="text-white/70 text-xs xl:text-sm font-semibold group-hover:text-white transition-colors">{s.label}</span>
                    <span className="text-white/35 text-[10px] xl:text-xs">{s.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — FAQ + location (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-5 xl:gap-6 2xl:gap-7">

            {/* FAQ */}
            <div className="bg-black/25 backdrop-blur-md border border-white/15 rounded-2xl xl:rounded-3xl p-5 xl:p-7 2xl:p-9">
              <div className="flex items-center gap-2 mb-5 xl:mb-6">
                <div className="w-1 h-5 xl:h-6 bg-white rounded-full" />
                <span className="text-white/60 text-xs xl:text-sm font-semibold uppercase tracking-widest">
                  {t('contact.faq.label')}
                </span>
              </div>
              <div className="flex flex-col gap-4 xl:gap-5">
                {faqs.map((f, i) => (
                  <div key={i} className={i < faqs.length - 1 ? "pb-4 xl:pb-5 border-b border-white/10" : ""}>
                    <p className="text-white font-semibold text-sm xl:text-base 2xl:text-lg mb-1.5">{f.q}</p>
                    <p className="text-white/60 text-xs xl:text-sm 2xl:text-base leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Location card */}
            <div className="bg-black/20 backdrop-blur-md border border-white/15 rounded-2xl xl:rounded-3xl p-5 xl:p-7 2xl:p-9">
              <div className="flex items-center gap-2 mb-4 xl:mb-5">
                <div className="w-1 h-5 xl:h-6 bg-white rounded-full" />
                <span className="text-white/60 text-xs xl:text-sm font-semibold uppercase tracking-widest">
                  {t('contact.location.label')}
                </span>
              </div>
              <div className="flex items-center gap-3 xl:gap-4 mb-4">
                <img src="/pakistaniFlag.jpg" alt="Pakistan"
                  className="w-10 h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 rounded-xl xl:rounded-2xl object-cover border border-white/20 shadow" />
                <div>
                  <p className="text-white font-bold text-sm xl:text-base 2xl:text-lg">{t('contact.location.city')}</p>
                  <p className="text-white/55 text-xs xl:text-sm">{t('contact.location.timezone')}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 xl:px-4 xl:py-2.5 rounded-xl bg-white/10 border border-white/10 w-fit">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-white/70 text-xs xl:text-sm font-medium">{t('contact.location.availability')}</span>
              </div>
              <div className="flex items-center gap-2 mt-5 xl:mt-6">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-white/40 text-xs xl:text-sm font-semibold uppercase tracking-widest">
                  {t('contact.location.zindabad')}
                </span>
                <div className="flex-1 h-px bg-white/10" />
              </div>
            </div>

            {/* CTA card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl xl:rounded-3xl p-5 xl:p-7 2xl:p-9 flex flex-col gap-4">
              <p className="text-white font-bold text-base xl:text-lg 2xl:text-xl">{t('contact.cta.title')}</p>
              <p className="text-white/65 text-xs xl:text-sm 2xl:text-base leading-relaxed">{t('contact.cta.body')}</p>
              <a href="mailto:thegreenguy48@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-white text-orange-500 font-bold text-sm xl:text-base py-3 xl:py-3.5 px-5 rounded-xl xl:rounded-2xl hover:scale-[1.02] hover:shadow-lg transition-all duration-350 hover:bg-orange-500 hover:text-white hover:border-white border-2 border-white dark:bg-slate-800 dark:hover:bg-slate-700/50 dark:hover:text-white dark:border-slate-500 dark:text-white/80">
                {t('contact.cta.button')}
                <svg className="w-4 h-4 xl:w-5 xl:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;