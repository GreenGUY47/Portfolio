import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
  faNodeJs,
  faNpm
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
  return (
    <div className="w-screen h-screen about-me -mt-2.5 bg-orange-400 flex flex-col items-center pt-10 overflow-hidden sm:hidden">

      <h1 className="text-2xl font-bold text-white border-2 border-white w-fit px-5 py-2 rounded-2xl">
        About Me
      </h1>

      <div className="w-full mt-4 overflow-hidden ">
        <div className="flex justify-center">
          <p className="bg-gradient-to-br from-[#0f172a] via-[#111827] to-black w-90 h-115 m-2.5 p-5 text-white rounded-4xl font-light scale-90 text-justify leading-7 text-[0.9rem]">
  I am a creative and detail-oriented <span className="text-white font-semibold">Full Stack Web Developer</span> passionate about building modern, responsive, and impactful digital experiences. I specialize in transforming ideas into powerful web applications that are fast, scalable, and visually refined. With strong expertise in frontend technologies like <span className="text-cyan-400">React</span>, <span className="text-orange-400">HTML5</span>, <span className="text-blue-400">CSS3</span>, and <span className="text-yellow-300">JavaScript</span>, combined with backend skills in <span className="text-green-400">Node.js</span> and database management like <span className="text-purple-400">MongoDB</span>, I create complete solutions that balance performance with design. I am committed to clean code, smooth user experiences, and continuous growth, always exploring new technologies to deliver innovative and high-quality results.
</p>
        </div>

        <div className="mt-1 flex w-max animate-scroll  gap-10 text-white text-4xl">

          <FontAwesomeIcon icon={faReact} />
          <FontAwesomeIcon icon={faHtml5} />
          <FontAwesomeIcon icon={faCss3Alt} />
          <FontAwesomeIcon icon={faJs} />
          <FontAwesomeIcon icon={faNodeJs} />
          <FontAwesomeIcon icon={faNpm} />
          <FontAwesomeIcon icon={faDatabase} />

          
          <FontAwesomeIcon icon={faReact} />
          <FontAwesomeIcon icon={faHtml5} />
          <FontAwesomeIcon icon={faCss3Alt} />
          <FontAwesomeIcon icon={faJs} />
          <FontAwesomeIcon icon={faNodeJs} />
          <FontAwesomeIcon icon={faNpm} />
          <FontAwesomeIcon icon={faDatabase} />
        </div>
        <div className="flex w-max animate-scroll-2 gap-10 text-white text-4xl mt-10">

          <FontAwesomeIcon icon={faReact} />
          <FontAwesomeIcon icon={faHtml5} />
          <FontAwesomeIcon icon={faCss3Alt} />
          <FontAwesomeIcon icon={faJs} />
          <FontAwesomeIcon icon={faNodeJs} />
          <FontAwesomeIcon icon={faNpm} />
          <FontAwesomeIcon icon={faDatabase} />

          
          <FontAwesomeIcon icon={faReact} />
          <FontAwesomeIcon icon={faHtml5} />
          <FontAwesomeIcon icon={faCss3Alt} />
          <FontAwesomeIcon icon={faJs} />
          <FontAwesomeIcon icon={faNodeJs} />
          <FontAwesomeIcon icon={faNpm} />
          <FontAwesomeIcon icon={faDatabase} />
        </div>

      </div>
    </div>
  );
};
export default AboutMe;