import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest(".navbar")) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setOpen(false);
  };

  const linkClass = (key) =>
    `px-3 py-2 rounded-xl transition duration-200 ${
      activeLink === key
        ? "bg-gray-700 text-white"
        : "hover:bg-gray-700/60 text-white/90"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="navbar flex items-center justify-between bg-gray-900 text-white px-4 sm:px-6 md:px-10 lg:px-14 py-4 shadow-lg dark:bg-gray-800">

        {/* Logo */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold italic tracking-wide cursor-default">
          Portfolio
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-4">
          <a href="#home" onClick={() => setActiveLink("home")} className={linkClass("home")}>
            Home
          </a>
          <a href="#about" onClick={() => setActiveLink("about")} className={linkClass("about")}>
            About
          </a>
          <a href="#projects" onClick={() => setActiveLink("projects")} className={linkClass("projects")}>
            Projects
          </a>
          <a href="#cv" onClick={() => setActiveLink("cv")} className={linkClass("cv")}>
            CV
          </a>
          <a href="#contact" onClick={() => setActiveLink("contact")} className={linkClass("contact")}>
            Contact
          </a>
          
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-xl hover:bg-gray-700 transition"
        >
          <FontAwesomeIcon
            icon={faBars}
            className={`text-lg transition-transform duration-300 ${
              open ? "rotate-90" : "rotate-0"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`navbar md:hidden absolute top-full left-0 w-full bg-gray-900 text-white shadow-xl transition-all duration-300 ease-in-out ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <nav className="py-3">
          <ul className="flex flex-col gap-2 px-4">

            <li>
              <a href="#home" onClick={() => handleLinkClick("home")} className={linkClass("home") + " block text-center"}>
                Home
              </a>
            </li>

            <li>
              <a href="#about" onClick={() => handleLinkClick("about")} className={linkClass("about") + " block text-center"}>
                About
              </a>
            </li>

            <li>
              <a href="#projects" onClick={() => handleLinkClick("projects")} className={linkClass("projects") + " block text-center"}>
                Projects
              </a>
            </li>

            <li>
              <a href="#cv" onClick={() => handleLinkClick("cv")} className={linkClass("cv") + " block text-center"}>
                CV
              </a>
            </li>

            <li>
              <a href="#contact" onClick={() => handleLinkClick("contact")} className={linkClass("contact") + " block text-center"}>
                Contact
              </a>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;