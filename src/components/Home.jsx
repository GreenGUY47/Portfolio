import { useRef, useState } from "react";
import { Player } from "@lordicon/react";
import hand from "../assets/hand.json";
import imgAzam from "../assets/AZAM.png";
import ownerImg from "../assets/Demo.jpg";

const bio = `I build digital experiences where design meets performance and ideas turn into
reality. As a Full Stack Web Developer, I specialize in crafting modern, high-speed,
and scalable web applications using React, Node.js, MongoDB, and core web technologies.
Every project I create is engineered with precision—clean architecture on the inside,
and a visually refined interface on the outside. I don't just write code; I design
systems that feel alive. Smooth interactions, responsive layouts, and thoughtful UI
decisions are at the core of everything I build. My approach blends technical depth
with a designer's eye, ensuring every product feels intuitive, fast, and purposeful
across all devices. I constantly push myself beyond comfort—learning new tools,
refining my workflow, and exploring better ways to solve real-world problems through
technology. From concept to deployment, I focus on building experiences that are not
only functional but memorable.`;

const Home = () => {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleHover = () => {
    if (!isPlaying) {
      playerRef.current?.playFromBeginning();
      setIsPlaying(true);
    }
  };

  return (
    <section className="w-full min-h-screen bg-orange-400 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
        {/* TOP GREETING */}
        <div>
          <h2 className="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl text-white font-bold">
            Hey there
            <span onMouseDown={handleHover} className="cursor-pointer">
              <Player
                ref={playerRef}
                icon={hand}
                trigger="click"
                size={32}
                onComplete={() => setIsPlaying(false)}
              />
            </span>
          </h2>

          <p className="mt-4 text-white text-sm sm:text-base md:text-lg leading-7 text-justify bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
            Welcome to my portfolio! I'm a software engineer with a passion for
            building innovative and user-friendly applications. Feel free to
            explore my projects and get in touch if you'd like to collaborate or
            learn more about my work.
          </p>
        </div>

        {/* HERO SECTION */}
        <div className="mt-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* LEFT SIDE */}
          <div className="flex-1 w-full">
            <h1 className="flex flex-wrap items-center gap-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              <span>MY NAME IS</span>
              <span className="relative w-28 h-14 sm:w-36 sm:h-16 md:w-44 md:h-20 flex items-center">
                <img
                  src={imgAzam}
                  alt="Azam"
                  className="w-full h-full object-contain scale-125 animate-pulse"
                />
              </span>
            </h1>

            <div className="mt-6">
              <h1 className="font-serif font-extrabold text-white text-5xl sm:text-6xl md:text-7xl leading-none">
                DEVELOPER
              </h1>
              <h2 className="font-serif font-extrabold italic text-white text-2xl sm:text-3xl md:text-4xl text-right mt-2">
                DESIGNER
              </h2>
            </div>

            <p className="mt-6 text-white/90 text-justify text-sm sm:text-base md:text-lg max-w-xl">
              I build modern, responsive and scalable web applications with
              clean UI and smooth UX.
            </p>

            {/* Bio — hidden on mobile, shown sm+ */}
            <p className="mt-4 text-orange-500 bg-white p-2.5 rounded-2xl shadow-lg text-justify text-sm md:text-base leading-7 max-w-xl mx-auto hidden sm:block">
              {bio}
              </p>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <div className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px] aspect-[4/5] bg-slate-700 rounded-3xl overflow-hidden relative shadow-xl">
              <img
                src={ownerImg}
                alt="Owner"
                className="w-full h-full relative z-1 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Bio — mobile only, below image */}
        <p className="mt-6 text-orange-500 font-semibold text-justify p-4 rounded-3xl bg-white text-md leading-7 sm:hidden">{bio}</p>
      </div>
      </section>
  );
};

export default Home;
