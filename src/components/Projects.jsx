import ImgSlider from "./ImgSlider";
import { useState, useEffect } from "react";

const Projects = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <div className="w-screen h-screen bg-orange-400 flex flex-col items-center pt-5 overflow-hidden sm:hidden">
      
      <h1 className="text-2xl font-bold text-white border-2 border-white w-fit px-5 py-2 rounded-2xl">
        Projects
      </h1>

      <h3 className="text-white bg-white/10 w-full text-center text-2xl font-bold italic mt-10">
        VIDEO PORTFOLIO
      </h3>

      {loading ? (
        <div className="w-9/10 h-1/2 mt-4 rounded-4xl overflow-hidden relative bg-zinc-800">
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-zinc-800 via-zinc-600 to-zinc-800"></div>
        </div>
      ) : (
        <div className="w-9/10 h-1/2 mt-4 bg-black rounded-4xl overflow-hidden">
          <video controls className="w-full h-full object-contain">
            <source src="/portfolio-Remake1.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      <div>
        <ImgSlider />
      </div>

    </div>
  );
};

export default Projects;