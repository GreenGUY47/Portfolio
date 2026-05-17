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
  const [animClass, setAnimClass] = useState(""); // ✅ control animation via state
  const intervalRef = useRef(null);
  const imagesRef = useRef(images); // ✅ stable ref, no stale closure

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

  // ✅ animate first, THEN change index after a short delay
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
    <>
      <h1 className="text-center bg-white w-full translate-y-5 rounded-3xl text-lg font-bold text-orange-400 p-1">
        My Work
      </h1>
      <div className="flex flex-col items-center gap-4 scale-80">
        {loading ? (
          <div className="w-80 h-80 rounded-2xl bg-zinc-800 relative overflow-hidden">
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-zinc-800 via-zinc-600 to-zinc-800"></div>
          </div>
        ) : (
          <img
            src={images[index]}
            onClick={fullScreen}
            onMouseEnter={stopSlide}
            onMouseLeave={startSlide}
            className={`w-80 h-80 object-cover rounded-2xl cursor-pointer ${animClass}`} // ✅ class applied here
          />
        )}
        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            onMouseEnter={stopSlide}
            onMouseLeave={startSlide}
            className="bg-black text-white px-4 py-2 rounded-xl cursor-pointer"
          >
            Previous
          </button>
          <button
            onClick={nextSlide}
            onMouseEnter={stopSlide}
            onMouseLeave={startSlide}
            className="bg-black text-white px-4 py-2 rounded-xl cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}