import React from "react";

const Projects = () => {
  return (
    <div id="projects">
      <div className="text-blue-900 flex flex-col items-center">
        <h1 className="font-bold text-6xl md:mx-[420px] mt-20 mx-5">
          Our Projects
        </h1>
        <p className="my-10 md:mt-10 text-sm mx-5 md:text-lg">
          We have completed various projects from all of our clients,
          <span className="md:hidden"> We do everything well</span>
        </p>
        <p className="hidden md:block text-sm md:text-lg mb-10 md:mb-0">
          we do everything well
        </p>
        <div className="md:flex justify-between gap-56 items-start">
          <div className="flex flex-col gap-2">
            <div className="relative">
              <h1 className="text-lg font-bold md:text-4xl absolute md:top-36 md:-right-20">
                Bisrate <br />
                Gabriel
              </h1>
              <img
                src={"/assets/Bisrate-Gabriel.jpg"}
                alt="apartments at bisrate-gabriel"
                className="w-80 h-[600px] my-20"
              />
            </div>
            <div className="relative">
              <h1 className="text-lg font-bold md:text-4xl absolute md:top-36 md:-right-40">
                Kingdom <br />
                Meskel Flower
              </h1>

              <img
                src={"/assets/kingdom-meskel-flower.jpg"}
                alt="apartments at meskel-flower"
                className="w-80 h-[600px] my-20"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="relative md:mt-20">
              <h1 className="text-lg font-bold md:text-4xl absolute md:top-36 md:-right-40">
                New Hope <br />
                Germany Square
              </h1>
              <img
                src={"/assets/New hope around german adebabay.jpg"}
                alt="apartments at German adebabay"
                className="w-80 h-[600px] my-20"
              />
            </div>
            <div className="relative">
              <h1 className="text-lg font-bold md:text-4xl absolute md:top-36 md:-right-40">
                Rahmet <br />
                Meskel Flower
              </h1>
              <img
                src={"/assets/Rahmet meskel flower.jpg"}
                alt="apartments at meskel-flower"
                className="w-80 h-[600px] my-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
