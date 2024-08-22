import React from "react";
import { CarbonCheckmarkFilled, IconParkSolidBuy } from "../components/icons";

const About = () => {
  return (
    <div id="about">
      <div className="p-20 text-blue-900 md:flex justify-around gap-14 mx-auto">
        <div>
          <h1 className="font-bold text-6xl w-56">Why choose us?</h1>
          <div className="hidden md:block bg-gradient-to-r from-transparent to-blue-900 h-[1px] w-60 mx-auto "></div>
        </div>
        <div>
          <div className="md:inline flex items-center">
            <CarbonCheckmarkFilled className="pt-5 text-blue-900 w-10 h-10" />
            <h1 className="font-bold text-3xl pt-5">Professional Company</h1>
          </div>
          <p className="w-56">
            We are a professional company based in Ethiopia and have assisted
            many clients.
          </p>
        </div>
        <div>
          <div className="md:inline flex items-center">
            <IconParkSolidBuy className="pt-5 text-blue-900 w-10 h-10 text-base" />
            <h1 className="font-bold text-3xl pt-5">Buy</h1>
          </div>
          <p className="w-56">
            We assist you in providing various assets that you can buy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
