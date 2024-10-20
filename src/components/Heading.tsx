import React from "react";

interface propsType {
  title: string;
}

const Heading: React.FC<propsType> = ({ title }) => {
  return (
    <div className="text-4xl text-center pb-8 group">
      <p className="relative inline-block mb-4">
        <span className="relative z-10 tracking-widest">{title}</span>
        <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-green-500 transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
      </p>
    </div>
  );
};

export default Heading;
