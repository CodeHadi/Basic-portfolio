import Link from 'next/link';
import React, { useState } from 'react';
import { IoMenuSharp } from 'react-icons/io5';
import { IoCloseSharp } from 'react-icons/io5'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className='container'>
      <div className='flex justify-between items-center px-6 py-8 tracking-widest'>
        <h1 className='font-medium text-2xl text-gray-200'>Hadi</h1>
        
        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-10 text-xl text-gray-200'>
          {links.map(({ name, href }) => (
            <li key={name} className='relative group'>
              <Link href={href}>
                <span className='relative z-10'>{name}</span>
                <span className='absolute left-0 -bottom-1 w-full h-0.5 bg-green-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu Icon */}
        <div className='md:hidden text-3xl text-gray-200' onClick={toggleMenu}>
          {isOpen ? <IoCloseSharp /> : <IoMenuSharp />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='flex flex-col items-center md:hidden bg-gray-800 text-gray-200 py-4'>
          {links.map(({ name, href }) => (
            <Link key={name} href={href} className='py-2' onClick={toggleMenu}>
              {name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
