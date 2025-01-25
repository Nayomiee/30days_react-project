import React from "react";
import Primarybtn from "../Buttons/Primarybtn";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MenuBar from "./Menubar";


const Navbar = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-4xl font-bold text-[#0d1a29]">NTDEV</h1>
        <div className="lg:hidden">
          <MenuBar/>
        </div>
        <div className="lg:flex items-center gap-4 hidden">
          <ul className="flex items-center gap-4">
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
      </div>
    </>
  );
};

export default Navbar;
