import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='flex flex-col justify-center items-center text-center'>
      <div className="grid md:grid-cols-2 gap-14 md:gap-24 items-center max-w-7xl mx-auto">
        <div data-aos="zoom-in-up">
          <h2 className="text-4xl md:text-5xl font-bold tracking-widest">Technologies I Work With</h2>
          <p className='text-gray-500 pt-4 md:pt-6 max-w-lg mx-auto'>
            I am proficient in HTML, CSS, JavaScript, React, and Next.js, with experience building responsive and dynamic web applications. My skills include developing user-friendly interfaces, optimizing performance, and creating interactive components for seamless user experiences.
          </p>
        </div>

        {/* Right Section */}
        <div className="text-green-600 grid grid-cols-2 gap-6 text-3xl sm:text-4xl">
          <div className="space-y-4">
            <h2 data-aos="zoom-in-up">TypeScript</h2>
            <h2 data-aos="zoom-in-up">React JS</h2>
            <h2 data-aos="zoom-in-up">Next JS</h2>
          </div>
          <div className="space-y-4">
            <h2 data-aos="zoom-in-up">Tailwind CSS</h2>
            <h2 data-aos="zoom-in-up">CSS</h2>
            <h2 data-aos="zoom-in-up">Bootstrap</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
