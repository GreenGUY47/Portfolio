import { useRef, useState } from "react"
import { Player } from "@lordicon/react"
import hand from '../assets/hand.json'
import imgAzam from '../assets/AZAM.png'
import ownerImg from '../assets/Demo.jpg'

const Home = () => {
  const playerRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleHover = () => {
    if (!isPlaying) {
      playerRef.current?.playFromBeginning()
      setIsPlaying(true)
    }
  }

  return (
    <div className="home bg-orange-400  sm:hidden">
      <h2 className="flex flex-row cursor-default gap-2 pt-4 text-2xl text-white font-bold pl-2.5">
        hey there
        <span
          onMouseDown={handleHover}
          className="cursor-pointer"
        >
          <Player
            ref={playerRef}
            icon={hand}
            trigger="click"
            size={30}
            onComplete={() => setIsPlaying(false)}
          />
        </span>
      </h2>
      <p className="mt-4 cursor-default text-white text-lg pl-2.5 bg-white/10 rounded-lg p-4 font-medium flex-wrap w-full">
        welcome to my portfolio! i'm a software engineer with a passion for building innovative and user-friendly applications. feel free to explore my projects and get in touch if you'd like to collaborate or learn more about my work.
      </p>
        <h1 className="mt-4 text-3xl text-white cursor-default font-bold pl-2.5 flex items-center gap-2 overflow-hidden ">
  <span>MY NAME IS</span>

  <span className="relative w-30 h-20 flex items-center">
    <img
      src={imgAzam}
      alt="Azam"
      className="w-full h-full object-contain scale-150 translate-y-2 animate-pulse hover:animate-none"
    />
  </span>
</h1>
<div className="flex justify-center items-center mt-4">
  <div className="w-80 h-80 bg-slate-700 rounded-2xl shadow-black/50 shadow-[inset_0_4px_10px_rgba(0,0,0,0.4)] relative overflow-hidden">
  
  <img
    src={ownerImg}
    alt="Owner"
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] pointer-events-none"></div>

</div>
</div>
<div className="overflow-hidden title m-2.5">
  <h1 className="text-white flex justify-start font-serif font-extrabold text-5xl cursor-default">DEVELOPER</h1>
  <h2 className="flex justify-end font-serif font-extrabold text-3xl pr-2.5 italic text-white cursor-default">DESIGNER</h2>
</div>
</div>
  )
}

export default Home