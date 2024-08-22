import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <div className="relative">
        <div className="relative md:flex gap-10 items-start bg-[#101439] text-white md:h-[550px] -z-20 py-3 md:py-0">
          <div className="relative text-white md:w-[700px] md:h-[550px]">
            <div className="hidden md:block md:w-full md:h-full absolute left-0 top-0 bg-[#020118] -z-10"></div>
            <h1 className="font-bold text-2xl mt-10 mx-5 md:mx-14 z-10">
              Yobek
            </h1>
            <p className="text-sm mx-5 md:mx-14 mt-5 z-10">
              Property consultant who focuses on client orientation in realizing
              dream homes
            </p>
          </div>

          <div className="md:w-96 bg-[#101439] md:ml-0 mx-5">
            <h1 className="font-bold text-2xl mt-10">Phone numbers</h1>
            <p className="mt-5">+251 904638617</p>
            <p className="mt-5">+251 912150884</p>
          </div>
          <div className="md:w-[600px] bg-[#101439] md:mx-0 mx-5">
            <h1 className="font-bold text-2xl mt-10">Contact Us</h1>
            <form className="mr-20 mt-5">
              <div className="flex flex-col mt-2">
                <label className="text-sm">Your Name</label>
                <input type="name" name="name" className="rounded-2xl h-6" />
              </div>
              <div className="flex flex-col mt-2">
                <label className="text-sm">Phone Number</label>
                <input type="name" name="number" className="rounded-2xl h-6" />
              </div>
              <div className="flex flex-col mt-2">
                <label className="text-sm">Message</label>
                <textarea
                  type="name"
                  name="message"
                  className="rounded-lg h-[100px] md:h-[200px]"
                />
              </div>
            </form>
            <button
              className="relative group bg-white hover:bg-opacity-20 text-blueblack-light 
            hover:text-foreground px-4 py-2 flex items-center justify-center gap-2
            transition-all duration-300 ease-in-out
            text-nowrap rounded-md mt-5 h-5 md:h-10 text-blue-900 hover:text-white"
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
              <p>Submit</p>
            </button>
          </div>
        </div>
        <div
          className="md:absolute md:bottom-0 md:w-[90%] z-30 md:bg-transparent bg-[#101439] 
                md:border-t-[1px] md:left-[50%] md:-translate-x-[50%]"
        >
          <p className="text-white py-3 text-sm md:mx-0 mx-5">
            Copy rights &copy; 2023 Yobek Properties. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
