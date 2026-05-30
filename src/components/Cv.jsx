const CV = () => {
  return (
    <section className="w-full min-h-screen bg-orange-400 flex flex-col items-center py-8 px-4 overflow-x-hidden">

      {/* Header */}
      <div className="w-full max-w-2xl flex flex-col items-center gap-2">
        <span className="text-white/70 text-xs uppercase tracking-[0.3em] font-medium">
          Portfolio
        </span>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center">
          Azam's <span className="italic font-light opacity-80">Résumé</span>
        </h1>

        <div className="w-12 h-[2px] bg-white/40 rounded-full mt-1" />
      </div>

      {/* CV Card */}
      <div className="w-full max-w-2xl flex-1 flex items-center justify-center my-8">

        <div className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-4 sm:p-6 shadow-2xl">

          {/* Card header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-white/60 text-xs uppercase tracking-widest">
                Document
              </p>
              <p className="text-white font-semibold text-sm mt-0.5">
                Curriculum Vitae — 2025
              </p>
            </div>

            <span className="bg-green-400/20 text-green-300 text-xs font-medium px-3 py-1 rounded-full border border-green-400/30">
              ● Available
            </span>
          </div>

          {/* CV Image Link (FIXED) */}
          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full group"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 group-hover:border-white/30 transition">

              <img
                src="/CV.png"
                alt="Azam CV"
                className="w-full h-auto object-cover group-hover:scale-[1.03] transition duration-500"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 bg-white text-orange-500 font-bold text-sm px-4 py-2 rounded-xl transition">
                  View CV ↗
                </span>
              </div>

            </div>
          </a>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-5">
            {[
              { label: "Experience", value: "2+ yrs" },
              { label: "Projects", value: "10+" },
              { label: "Stack", value: "MERN" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 border border-white/10 rounded-xl px-2 py-3 text-center"
              >
                <p className="text-white font-bold text-base sm:text-lg">
                  {stat.value}
                </p>
                <p className="text-white/50 text-[10px] sm:text-xs uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Buttons */}
      <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-3">

        <a
          href="/CV.pdf"
          download
          className="flex-1 flex items-center justify-center gap-2 bg-white text-orange-500 font-bold py-3 rounded-2xl hover:bg-orange-50 transition text-sm"
        >
          Download CV
        </a>

        <a
          href="/CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold py-3 rounded-2xl hover:bg-white/20 transition text-sm"
        >
          Open CV
        </a>

      </div>

    </section>
  );
};

export default CV;