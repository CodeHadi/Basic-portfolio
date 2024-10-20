import React from 'react';
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='flex justify-center items-center min-h-screen pt-32 px-4'>
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Left Side */}
        <div className="space-y-8 text-center md:text-left" >
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold' data-aos="zoom-in-up">Get in Touch</h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg pt-2" data-aos="zoom-in-up">
            Drop me a line, give me a call, or send me a message by submitting the form below.
          </p>
          <div className="flex gap-3 items-center justify-center md:justify-start" data-aos="zoom-in-up">
            <MdOutlineMarkEmailUnread size={30} className="text-green-600" />
            <span className="text-gray-600 text-sm sm:text-base">(030) a.hadi4420386@gmail.com</span>
          </div>
          <div className="flex gap-3 items-center justify-center md:justify-start" data-aos="zoom-in-up">
            <BsTelephone size={30} className="text-green-600" />
            <span className="text-gray-600 text-sm sm:text-base">(030) 80020847</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="name" className="text-left text-sm sm:text-base">Name:</label>
            <input 
              type="text" 
              id="name" 
              className='h-[40px] bg-transparent border border-green-600 rounded px-2 focus:outline-none focus:ring-2 focus:ring-green-600'
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="email" className="text-left text-sm sm:text-base">E-mail:</label>
            <input 
              type="text" 
              id="email" 
              className='h-[40px] bg-transparent border border-green-600 rounded px-2 focus:outline-none focus:ring-2 focus:ring-green-600'
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="msg" className="text-left text-sm sm:text-base">Message:</label>
            <textarea 
              id="msg" 
              className='bg-transparent border border-green-600 rounded px-2 focus:outline-none focus:ring-2 focus:ring-green-600'
              rows={6}
              placeholder="Write your message"
            ></textarea>
          </div>
          <button className='bg-green-600 p-2 px-6 rounded text-black font-bold hover:bg-green-700 transition duration-300' data-aos="zoom-in-up">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
