import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Primarybtn from '../Buttons/Primarybtn';

const MenuBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <div onClick={toggleMenu}>
        {menuOpen ? (
          <FontAwesomeIcon icon={faTimes} className="text-3xl" />
        ) : (
          <FontAwesomeIcon icon={faBars} className="text-3xl" />
        )}
      </div>
      {menuOpen && (
        <div className="flex items-start gap-4 flex-col">
          <ul className="flex items-start gap-4 flex-col">
            <Link
              to="/"
              className="hover:text-[#469ad2] uppercase font-semibold hover:transition-all hover:duration-300 hover:ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="hover:text-[#469ad2] uppercase font-semibold hover:transition-all hover:duration-300 hover:ease-in-out"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#469ad2] uppercase font-semibold hover:transition-all hover:duration-300 hover:ease-in-out"
            >
              Contact
            </Link>
          </ul>
          <Primarybtn button="portfolio" />
        </div>
      )}
    </div>
  );
};

export default MenuBar;
