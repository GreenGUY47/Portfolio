import ImgSlider from "./ImgSlider";
import { useState, useEffect } from "react";

const Projects = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full min-h-screen bg-orange-400 flex flex-col items-center py-8 px-4 overflow-x-hidden">

      {/* Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white border-2 border-white px-5 py-2 rounded-2xl">
        Projects
      </h1>

      {/* Subtitle */}
      <h3 className="text-white bg-white/10 w-full max-w-4xl text-center text-lg sm:text-xl md:text-2xl font-bold italic mt-8 py-2 rounded-xl">
        VIDEO PORTFOLIO
      </h3>

      {/* Video Section */}
      <div className="w-full max-w-4xl mt-6">

        {loading ? (
          <div className="w-full aspect-video rounded-3xl overflow-hidden relative bg-zinc-800">
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-zinc-800 via-zinc-600 to-zinc-800"></div>
          </div>
        ) : (
          <div className="w-full aspect-video bg-black rounded-3xl overflow-hidden shadow-lg">
            <video controls className="w-full h-full object-contain">
              <source src="/portfolio-Remake1.mp4" type="video/mp4" />
            </video>
          </div>
        )}

      </div>

      {/* Image Slider */}
      <div className="w-full max-w-5xl mt-10">
        <ImgSlider />
      </div>

    </section>
  );
};

export default Projects;