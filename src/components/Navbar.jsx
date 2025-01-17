import Whatsapp from "../assets/Whatsappl.png"; 
import { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "@remixicon/react";
import logo from "../assets/logo.png";
import { LINKS } from "../constants";

const Navbar = () => {
  const handleButtonClick = () => {
    window.location.href = 'https://wa.me/523330160290?text=Solicitar%20información';
  };
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const toggleMenu = () => {
    console.log("toggleMenu called");
    setIsOpen(!isOpen);
    console.log("isOpen:", !isOpen);
  };
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="relative flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="pl-2">
          <a className="" href="#">
            <img src={logo} width={150} height={15} alt="trooxer" />
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl pr-2 focus:outline-none border"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
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
      {showScrollButton && (
        <button
          onClick={handleButtonClick}
          className="fixed bottom-4 right-4 p-2 text-white rounded-full"
        >
          <img src={Whatsapp} alt="Scroll to top" className="w-20 h-20" />
        </button>
      )}
    </nav>
  );
};

export default Navbar;