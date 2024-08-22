import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleclick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      className="sticky top-0 w-full h-[80px] flex justify-between items-center px-4
      bg-opacity-20 backdrop-blur text-white mx-auto z-20"
    >
      {/* Logo */}
      <div className="text-2xl font-bold mx-5">
        <Link to="/">Yobek</Link>
      </div>

      {/* Menu */}
      <div className="hidden sm:flex" style={{ scrollBehavior: "smooth" }}>
        <ul className="flex items-center gap-[4vw]">
          <li>
            <a className="hover:text-yellow-200" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-yellow-200" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-yellow-200" href="#projects">
              Projects
            </a>
          </li>
        </ul>
      </div>

      <div className="hidden sm:flex">
        <button
          className="relative group bg-[#b5e1fb] hover:bg-opacity-20 text-blueblack-light 
            hover:text-foreground px-4 py-2 flex items-center justify-center gap-2
            transition-all duration-300 ease-in-out
            text-nowrap ml-10 my-5 text-blue-900 hover:text-white rounded"
        >
          <div
            className="absolute top-0 left-0 w-[1px] h-0 group-hover:h-full 
            bg-gradient-to-b from-transparent to-yellow-200
            transition-all duration-700 ease-in-out
            "
          ></div>
          <div
            className="absolute top-0 left-0 w-0 group-hover:w-full h-[1px]
            bg-gradient-to-r from-transparent to-yellow-200
            transition-all duration-700 ease-in-out
            "
          ></div>
          <div
            className="absolute bottom-0 right-0 w-[1px] h-0 group-hover:h-full 
            bg-gradient-to-t from-transparent to-yellow-200
            transition-all duration-700 ease-in-out
            "
          ></div>
          <div
            className="absolute bottom-0 right-0 w-0 group-hover:w-full h-[1px]
            bg-gradient-to-l from-transparent to-yellow-200
            transition-all duration-700 ease-in-out
            "
          ></div>
          <Link className="hover:text-white" to="signup">
            Sign up
          </Link>
        </button>
      </div>

      {/* Hamburger */}
      <div onClick={handleclick} className="sm:hidden absolute right-8 z-10">
        {showMenu ? (
          <FaTimes className="text-2xl" />
        ) : (
          <FaBars className="text-2xl" />
        )}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          showMenu
            ? "absolute top-0 left-0 w-full h-screen bg-[#cfdbed] bg-opacity-95 backdrop-blur flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Sign Up</li>
      </ul>
    </div>
  );
};

export default Navbar;
