import { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "@remixicon/react";
import logo from "../assets/logo.png";
import { LINKS } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`text-align: center border-b-2"}`} style={{ backgroundColor: "white" }}>
      <div className="max-w-7xl mx-auto flex justify-between items-center py-8 ">
        <div className="pl-2">
          <a href="#">
            <img src={logo} width={150} height={15} alt="trooxer" />
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl pr-2 focus:outline-none" aria-label={isOpen ? "Close menu" : "Open menu"}>
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
        <div className="hidden md:flex space-x-8 md:space-x-4 pr-2">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="uppercase text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
