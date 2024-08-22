import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div id="home" className="relative h-screen">
      <Navbar />
      <div className="hidden sm:block bg-gradient-to-r from-transparent to-yellow-200 h-[1px] w-[30rem] mx-auto "></div>
      <div>
        <div className="absolute top-0 w-full h-screen -z-20">
          <div className="w-screen h-[800px] md:h-screen bg-black top-0 right-0 absolute"></div>
          <img
            src={"/assets/bg.png"}
            alt="background"
            className="absolute top-0 opacity-70 w-screen h-[800px] md:h-screen"
          />
        </div>
        <h1 className="text-6xl text-white md:text-6xl font-bold px-10 pt-20">
          Making your realty
        </h1>
        <h1 className="text-6xl pt-3 text-white md:text-6xl font-bold px-10 md:pt-5">
          dreams a reality
        </h1>
        <p className="text-white text-2xl px-10 pt-5 text-balance">
          We are a property consulting company, we have been operating to help
          families, companies and individuals find the best housing for them.
        </p>
        <div className="flex gap-0 md:my-0 mt-10">
          <button
            className="relative group bg-[#b5e1fb] hover:bg-opacity-20 text-blueblack-light 
            hover:text-foreground px-4 py-2 flex items-center justify-center gap-2
            transition-all duration-300 ease-in-out
            text-nowrap ml-10 my-5 text-blue-900 hover:text-white "
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
            <a href="#contact">Contact Us</a>
          </button>
          <button
            className="relative group hover:bg-[#b5e1fb] bg-[#194660] bg-opacity-40 text-blueblack-light 
            hover:text-foreground px-4 py-2 flex items-center justify-center gap-2
            transition-all duration-300 ease-in-out
            text-nowrap mx-10 my-5 text-white hover:text-blue-900"
          >
            <div
              className="absolute top-0 left-0 w-[1px] h-full group-hover:h-0
            bg-gradient-to-b from-transparent to-yellow-200
            "
            ></div>
            <div
              className="absolute top-0 left-0 w-full group-hover:w-0 h-[1px]
            bg-gradient-to-r from-transparent to-yellow-200
            "
            ></div>
            <div
              className="absolute bottom-0 right-0 w-[1px] h-full group-hover:h-0 
            bg-gradient-to-t from-transparent to-yellow-200
            "
            ></div>
            <div
              className="absolute bottom-0 right-0 w-full group-hover:w-0 h-[1px]
            bg-gradient-to-l from-transparent to-yellow-200
            "
            ></div>
            <a href="#about">About Us</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
