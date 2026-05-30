import { useState, useEffect, useRef } from "react";

export default function ImgSlider() {
  const images = Object.values(
    import.meta.glob("../assets/samples/*.{png,jpg,jpeg,webp}", {
      eager: true,
      import: "default",
    })
  );

  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [animClass, setAnimClass] = useState("");
  const intervalRef = useRef(null);
  const imagesRef = useRef(images);

  useEffect(() => {
    let loaded = 0;

    imagesRef.current.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loaded++;
        if (loaded === imagesRef.current.length) {
          setTimeout(() => setLoading(false), 1200);
        }
      };
    });
  }, []);

  function startSlide() {
    stopSlide();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagesRef.current.length);
    }, 3000);
  }

  function stopSlide() {
    clearInterval(intervalRef.current);
  }

  useEffect(() => {
    if (!loading) startSlide();
    return () => stopSlide();
  }, [loading]);

  function prevSlide() {
    setAnimClass("");
    requestAnimationFrame(() => {
      setAnimClass("slideLeft");
      setTimeout(() => {
        setIndex((prev) => (prev - 1 + imagesRef.current.length) % imagesRef.current.length);
        setAnimClass("");
      }, 400);
    });
  }

  function nextSlide() {
    setAnimClass("");
    requestAnimationFrame(() => {
      setAnimClass("slideRight");
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % imagesRef.current.length);
        setAnimClass("");
      }, 400);
    });
  }

  function fullScreen() {
    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed; inset: 0;
      background: rgba(0,0,0,0.6);
      backdrop-filter: blur(8px);
      z-index: 9998;
    `;

    const img = new Image();
    img.src = imagesRef.current[index];
    img.style.cssText = `
      position: fixed; top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      max-width: 90%; max-height: 90%;
      z-index: 9999; cursor: pointer; border-radius: 20px;
    `;

    document.body.style.overflow = "hidden";
    document.body.appendChild(overlay);
    document.body.appendChild(img);

    function closeImage() {
      document.body.style.overflow = "auto";
      document.body.removeChild(overlay);
      document.body.removeChild(img);
    }

    overlay.onclick = closeImage;
    img.onclick = closeImage;
  }

  return (
    <section className="w-full flex flex-col items-center gap-6 py-6">

      {/* Title */}
      <h1 className="text-center bg-white w-full max-w-md sm:max-w-lg rounded-3xl text-base sm:text-lg md:text-xl font-bold text-orange-400 p-2 shadow-md">
        My Work
      </h1>

      {/* Slider Container */}
      <div className="flex flex-col items-center gap-5 w-full">

        {loading ? (
          <div className="w-[90%] max-w-sm sm:max-w-md md:max-w-lg aspect-square rounded-2xl bg-zinc-800 relative overflow-hidden">
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-zinc-800 via-zinc-600 to-zinc-800"></div>
          </div>
        ) : (
          <img
            src={images[index]}
            onClick={fullScreen}
            onMouseEnter={stopSlide}
            onMouseLeave={startSlide}
            className={`w-[90%] max-w-sm sm:max-w-md md:max-w-lg aspect-square object-cover rounded-2xl cursor-pointer transition-all duration-300 ${animClass}`}
          />
        )}

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <button
            onClick={prevSlide}
            onMouseEnter={stopSlide}
            onMouseLeave={startSlide}
            className="bg-black text-white px-4 py-2 sm:px-5 sm:py-2 rounded-xl text-sm sm:text-base hover:bg-gray-800 transition"
          >
            Previous
          </button>

          <button
            onClick={nextSlide}
            onMouseEnter={stopSlide}
            onMouseLeave={startSlide}
            className="bg-black text-white px-4 py-2 sm:px-5 sm:py-2 rounded-xl text-sm sm:text-base hover:bg-gray-800 transition"
          >
            Next
          </button>
        </div>

      </div>
    </section>
  );
}