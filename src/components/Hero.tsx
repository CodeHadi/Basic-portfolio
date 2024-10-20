import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center justify-between py-16 px-8 lg:px-20">
        <Image
          src="/A.hadi.jpg"
          alt="Abdul Hadi"
          width={250} 
          height={250}
          className="rounded-full border-4 border-green-600 sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px]" 
        />
        <div className="relative mt-8 lg:mt-0 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wider group">
            <span className="relative z-10 tracking-widest p-2" data-aos="zoom-in-up">
              I am
            </span>
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-green-500 transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
          </h1>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-wider group">
            <span className="relative z-10" data-aos="zoom-in-up">
              Abdul Hadi
            </span>
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-green-500 transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
