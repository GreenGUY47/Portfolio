const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "CV", href: "#cv" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/GreenGUY47",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 xl:w-6 xl:h-6"
      >
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/azam-dev",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 xl:w-6 xl:h-6"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/923124123581",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 xl:w-6 xl:h-6"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:thegreenguy48@gmail.com",
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
        className="w-5 h-5 xl:w-6 xl:h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
];

const stack = [
  "React",
  "Node.js",
  "MongoDB",
  "Tailwind",
  "Express",
  "TypeScript",
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative cursor-default w-full bg-orange-500 overflow-hidden font-sans">
      {/* ── Top divider wave ── */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 xl:h-14 2xl:h-16"
          preserveAspectRatio="none"
        >
          <path
            d="M0 56V28C240 0 480 56 720 28C960 0 1200 56 1440 28V56H0Z"
            fill="rgba(0,0,0,0.15)"
          />
        </svg>
      </div>

      {/* ── Background geometry ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-24 -right-24 w-72 h-72 xl:w-[420px] xl:h-[420px] rounded-full bg-orange-400/30" />
        <div className="absolute top-0 -left-16 w-56 h-56 xl:w-80 xl:h-80 rounded-full bg-amber-400/15" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28 pt-2 pb-8 xl:pt-4 xl:pb-12 2xl:pb-16">
        {/* ── MAIN FOOTER GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-10 2xl:gap-14 py-10 xl:py-14 2xl:py-16 border-b border-white/15">
          {/* Brand col */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-4 xl:gap-5">
            <div>
              <p className="text-white/55 text-xs xl:text-sm font-semibold uppercase tracking-[0.25em] mb-1.5">
                Portfolio
              </p>
              <h2 className="text-white font-black text-3xl xl:text-4xl 2xl:text-5xl tracking-tighter leading-none">
                AZAM
              </h2>
            </div>
            <p className="text-white/65 text-sm xl:text-base 2xl:text-lg leading-relaxed max-w-xs">
              Full Stack Developer & Designer crafting fast, scalable, and
              visually refined web experiences.
            </p>
            {/* Social icons */}
            <div className="flex gap-2 xl:gap-3 flex-wrap mt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 xl:w-11 xl:h-11 2xl:w-12 2xl:h-12 rounded-xl xl:rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 hover:-translate-y-0.5 hover:border-white/30 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3 xl:gap-4">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1 h-4 xl:h-5 bg-white rounded-full" />
              <p className="text-white/55 text-xs xl:text-sm font-semibold uppercase tracking-widest">
                Navigate
              </p>
            </div>
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="group flex items-center gap-2 text-white/70 hover:text-white text-sm xl:text-base 2xl:text-lg font-medium transition-colors duration-150 w-fit"
              >
                <svg
                  className="w-3 h-3 xl:w-3.5 xl:h-3.5 text-white/30 group-hover:text-white/80 group-hover:translate-x-0.5 transition-all duration-150"
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
                {l.label}
              </a>
            ))}
          </div>

          {/* Stack */}
          <div className="flex flex-col gap-3 xl:gap-4">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1 h-4 xl:h-5 bg-white rounded-full" />
              <p className="text-white/55 text-xs xl:text-sm font-semibold uppercase tracking-widest">
                Tech Stack
              </p>
            </div>
            <div className="flex flex-wrap gap-2 xl:gap-2.5">
              {stack.map((s) => (
                <span
                  key={s}
                  className="px-3 cursor-pointer py-1.5 xl:px-4 xl:py-2 rounded-full bg-white/10 border border-white/15 text-white/75 text-xs xl:text-sm font-semibold hover:bg-white/20 hover:text-white transition-all duration-150 "
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Contact quick-block */}
          <div className="flex flex-col gap-3 xl:gap-4">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1 h-4 xl:h-5 bg-white rounded-full" />
              <p className="text-white/55 text-xs xl:text-sm font-semibold uppercase tracking-widest">
                Contact
              </p>
            </div>
            <a
              href="mailto:thegreenguy48@gmail.com"
              className="group flex flex-col gap-0.5 text-white/70 hover:text-white transition-colors duration-150"
            >
              <span className="text-white/40 text-[10px] xl:text-xs uppercase tracking-widest">
                Email
              </span>
              <span className="text-sm xl:text-base font-medium group-hover:underline underline-offset-2 break-all">
                thegreenguy48@gmail.com
              </span>
            </a>
            <a
              href="https://wa.me/923124123581"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-0.5 text-white/70 hover:text-white transition-colors duration-150"
            >
              <span className="text-white/40 text-[10px] xl:text-xs uppercase tracking-widest">
                WhatsApp
              </span>
              <span className="text-sm xl:text-base font-medium">
                +92 312 412 3581
              </span>
            </a>
            <div className="flex flex-col gap-0.5">
              <span className="text-white/40 text-[10px] xl:text-xs uppercase tracking-widest">
                Location
              </span>
              <span className="text-white/70 text-sm xl:text-base font-medium flex items-center gap-1.5">
                🇵🇰 Lahore, Pakistan
              </span>
            </div>
            {/* Availability dot */}
            <div className="flex items-center gap-2 mt-1">
              <span className="relative flex h-2 w-2 xl:h-2.5 xl:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 xl:h-2.5 xl:w-2.5 bg-green-400" />
              </span>
              <span className="text-white/60 text-xs xl:text-sm font-medium">
                Open to opportunities
              </span>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="pt-6 xl:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 xl:gap-4">
          <p className="text-white text-xs flex xl:text-sm 2xl:text-base text-center sm:text-left">
            © {year} Azam. Built with React, Tailwind CSS &{" "}
            <span className="inline-block pl-2.5 scale-200 cursor-pointer">
              💞
            </span>
          </p>
          <div className="flex items-center gap-4 xl:gap-5">
            <span className="text-white/30 text-xs xl:text-sm">
              🇵🇰 Pakistan Zindabad
            </span>
            <span className="text-white/20 text-xs">·</span>
            <a
              href="https://lordicon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/70 text-xs xl:text-sm transition-colors duration-150"
            >
              Icons by Lordicon
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
