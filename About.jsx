import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
  faNodeJs,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCode, faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const icons = [faReact, faHtml5, faCss3Alt, faJs, faNodeJs, faNpm, faDatabase];

const AboutMe = () => {
  return (
    <div className="w-full min-h-screen bg-orange-400 flex flex-col items-center py-8 -mt-2.5 overflow-x-hidden">
      
      {/* Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white border-2 border-white w-fit px-5 py-2 rounded-2xl shrink-0">
        About Me
      </h1>

      {/* Content wrapper */}
      <div className="w-full flex flex-col flex-1 overflow-hidden justify-between mt-4 gap-3">

        {/* Top paragraph */}
        <div className="flex flex-col md:flex-row justify-center w-full px-4 gap-4 items-center">
          <div className="bg-gradient-to-br from-[#0f172a] via-[#111827] to-black border-2 border-gray-700 shadow-lg rounded-3xl text-white font-light text-justify leading-6 w-full max-w-3xl p-4 text-sm md:text-base lg:text-lg">
            I am a creative and detail-oriented{" "}
            <span className="text-white font-semibold">Full Stack Web Developer</span>{" "}
            passionate about building modern, responsive, and impactful digital experiences.
            I specialize in transforming ideas into powerful web applications that are fast,
            scalable, and visually refined. With strong expertise in{" "}
            <span className="text-cyan-400">React</span>,{" "}
            <span className="text-orange-400">HTML5</span>,{" "}
            <span className="text-blue-400">CSS3</span>, and{" "}
            <span className="text-yellow-300">JavaScript</span>, combined with backend skills
            in <span className="text-green-400">Node.js</span> and{" "}
            <span className="text-purple-400">MongoDB</span>, I create complete solutions
            that balance performance with design.
          </div>
        </div>

        {/* Two info cards side by side */}
        <div className="flex justify-center w-full px-4 gap-3">
          
          {/* What I Do */}
          <div className="bg-gradient-to-br from-[#0f172a] via-[#111827] to-black border-2 border-gray-700 shadow-lg rounded-3xl text-white w-full md:flex-1 max-w-md p-4">
            <div className="flex items-center gap-2 mb-2">
              <FontAwesomeIcon icon={faCode} className="text-cyan-400 text-lg" />
              <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">What I Do</h2>
            </div>
            <ul className="text-xs sm:text-sm font-light leading-6 text-gray-300 list-disc list-inside space-y-1">
              <li>Build full-stack web apps end-to-end</li>
              <li>Design clean, pixel-perfect UIs</li>
              <li>Optimize performance & scalability</li>
              <li>Integrate REST APIs & databases</li>
            </ul>
          </div>

          {/* Experience */}
          <div className="bg-gradient-to-br from-[#0f172a] via-[#111827] to-black border-2 border-gray-700 shadow-lg rounded-3xl text-white flex-1 max-w-sm p-4">
            <div className="flex items-center gap-2 mb-2">
              <FontAwesomeIcon icon={faBriefcase} className="text-yellow-300 text-lg" />
              <h2 className="text-sm font-semibold text-yellow-300 uppercase tracking-wider">Experience</h2>
            </div>
            <ul className="text-xs sm:text-sm font-light leading-6 text-gray-300 list-disc list-inside space-y-1">
              <li>2+ years building real-world projects</li>
              <li>Freelance client work & delivery</li>
              <li>Open source contributions</li>
              <li>Agile team collaboration</li>
            </ul>
          </div>

        </div>

        {/* Bottom paragraph / goal statement */}
        <div className="flex justify-center w-full px-4">
          <div className="bg-gradient-to-br from-[#0f172a] via-[#111827] to-black border-2 border-gray-700 shadow-lg rounded-3xl text-white font-light text-justify leading-6 w-full max-w-3xl p-4 text-xs sm:text-sm md:text-base flex flex-col sm:flex-row items-start gap-3">
            <FontAwesomeIcon icon={faGraduationCap} className="text-orange-300 text-2xl mt-1 shrink-0" />
            <p>
              I am constantly evolving as a developer — learning new frameworks, sharpening
              my problem-solving skills, and pushing the boundaries of what I can build.
              My goal is to craft{" "}
              <span className="text-orange-300 font-semibold">meaningful digital products</span>{" "}
              that leave a lasting impression. Whether working solo or in a team, I bring
              dedication, creativity, and a hunger for excellence to every project I touch.
            </p>
          </div>
        </div>

        {/* Scrolling icon rows */}
        <div className="overflow-hidden">
          <div className="flex w-max animate-scroll gap-10 text-white text-3xl">
            {[...icons, ...icons].map((icon, i) => (
              <FontAwesomeIcon key={`row1-${i}`} icon={icon} />
            ))}
          </div>
          <div className="flex w-max animate-scroll-2 gap-10 text-white text-2xl sm:text-3xl md:text-4xl mt-4">
            {[...icons, ...icons].map((icon, i) => (
              <FontAwesomeIcon key={`row2-${i}`} icon={icon} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutMe;