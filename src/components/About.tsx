import React from 'react';

const About = () => {
  return (
    <div id='about' className='flex flex-col justify-center items-center text-center my-16 px-4 md:px-8'>
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold m-4 md:m-8 relative pb-2 group"
        data-aos="zoom-in-up"
      >
        About Me
        <span className="absolute left-1/2 -bottom-1 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-center transform -translate-x-1/2"></span>
      </h2>
      <p
        className="text-gray-500 text-base sm:text-lg md:text-xl max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-4xl"
        data-aos="zoom-in-up"
      >
        I am currently a student at GIAIC, pursuing a specialization in Artificial Intelligence, Web 3.0, 
        and the Metaverse. I am passionate about cutting-edge technologies and constantly expanding my skill set 
        to stay updated with the latest innovations in the tech world.
      </p>
    </div>
  );
}

export default About;
