const Contact = () => {
  return (
    <section className="w-full min-h-screen bg-orange-400 flex flex-col items-center py-8 px-4">

      {/* Header */}
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="text-white/70 text-xs uppercase tracking-[0.3em] font-medium">
          Let's talk
        </span>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Get in <span className="italic font-light opacity-80">Touch</span>
        </h1>

        <div className="w-12 h-[2px] bg-white/40 rounded-full mt-1" />
      </div>

      {/* Main Card */}
      <div className="w-full max-w-md flex-1 flex items-center justify-center my-8">

        <div className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-5 sm:p-6 shadow-2xl flex flex-col gap-5">

          {/* Intro */}
          <div>
            <h3 className="text-white font-semibold text-lg">
              Always open to new ideas 👋
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mt-1">
              Whether it's a project, collaboration, or just a hello — feel free to reach out.
            </p>
          </div>

          <div className="w-full h-[1px] bg-white/20" />

          {/* Email */}
          <div className="flex flex-col gap-2">
            <p className="text-white/50 text-xs uppercase tracking-widest">
              Email
            </p>

            <a
              href="mailto:thegreenguy48@gmail.com"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/30 transition px-4 py-3 rounded-2xl group"
            >
              <div className="w-9 h-9 rounded-xl bg-orange-300/20 flex items-center justify-center">
                <span className="text-white text-xs">✉</span>
              </div>

              <span className="text-white text-sm group-hover:text-orange-200">
                thegreenguy48@gmail.com
              </span>

              <span className="ml-auto text-white/40 group-hover:text-white/80">
                ↗
              </span>
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col gap-2">
            <p className="text-white/50 text-xs uppercase tracking-widest">
              WhatsApp
            </p>

            <a
              href="https://wa.me/923124123581"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/30 transition px-4 py-3 rounded-2xl group"
            >
              <div className="w-9 h-9 rounded-xl bg-green-400/20 flex items-center justify-center">
                <span className="text-green-300 text-xs">WA</span>
              </div>

              <span className="text-white text-sm group-hover:text-green-200">
                +92 312 412 3581
              </span>

              <span className="ml-auto text-white/40 group-hover:text-white/80">
                ↗
              </span>
            </a>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-3 mt-6">
        <img
          src="/pakistaniFlag.jpg"
          alt="Pakistan"
          className="w-7 h-7 rounded-full object-cover border border-white/30"
        />

        <span className="text-white/80 text-xs sm:text-sm font-semibold tracking-widest uppercase">
          Pakistan Zindabad
        </span>

        <img
          src="/pakistaniFlag.jpg"
          alt="Pakistan"
          className="w-7 h-7 rounded-full object-cover border border-white/30"
        />
      </div>

    </section>
  );
};

export default Contact;