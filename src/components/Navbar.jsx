import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest(".navbar")) {
        setOpen(false);
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="sticky top-0 left-0 right-0 z-50">
      <div className="navbar  flex justify-between p-4 bg-gray-800 w-full text-white shadow-[1px_5px_8px_-3px_rgba(0,0,0,0.5)]      sm:hidden">
        <h1 className="cursor-default"><b><i>Portfolio</i></b></h1>

        <button
          className="cursor-pointer"
          onClick={() => {
            setOpen(!open);
            setMenuOpen(!menuOpen);
            setActiveLink("home");
          }}
        >
          <FontAwesomeIcon
            icon={faBars}
            className={`
            hover:bg-gray-700 p-2 rounded-2xl active:bg-gray-700
            transition-transform duration-300 ease-in
            ${menuOpen ? "rotate-90 bg-gray-700" : "rotate-0"}`}
          />
        </button>
      </div>

      <div
        className={` navbar  absolute bg-gray-800 w-30 h-80 text-white flex justify-center items-center right-0 top-14 shadow-[-5px_5px_8px_-3px_rgba(0,0,0,0.5)] rounded-bl-2xl transition-all duration-300 ease-in ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        } md:hidden`}
      >
        <nav className="flex flex-col items-center gap-6">
          <ul className="flex flex-col gap-4 text-lg w-full">
            <li>
              <a
                href="#home"
                onClick={() => {setActiveLink("home")
                  setOpen(false);
                    setMenuOpen(false);}
                }
                className={`flex w-full p-2 justify-center rounded-2xl transition
          ${activeLink === "home" ? "bg-gray-700" : "hover:bg-gray-700"}`}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => {setActiveLink("about")
                  setOpen(false);
                    setMenuOpen(false);}
                }
                className={`flex w-full p-2 justify-center rounded-2xl transition
          ${activeLink === "about" ? "bg-gray-700" : "hover:bg-gray-700"}`}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => {setActiveLink("projects")
                  setOpen(false);
                    setMenuOpen(false);}
                }
                className={`flex w-full p-2 justify-center rounded-2xl transition
          ${activeLink === "projects" ? "bg-gray-700" : "hover:bg-gray-700"}`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#cv"
                onClick={() => {setActiveLink("cv")
                  setOpen(false);
                    setMenuOpen(false);}
                }
                className={`flex w-full p-2 justify-center rounded-2xl transition
          ${activeLink === "cv" ? "bg-gray-700" : "hover:bg-gray-700"}`}
              >
                CV
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => {setActiveLink("contact")
                  setOpen(false);
                    setMenuOpen(false);}
                }
                className={`flex w-full p-2 justify-center rounded-2xl transition
          ${activeLink === "contact" ? "bg-gray-700" : "hover:bg-gray-700"}`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
