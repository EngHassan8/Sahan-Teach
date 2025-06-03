import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiPhone,
  FiInfo,
  FiBookOpen,
} from 'react-icons/fi';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="relative shadow-sm sticky top-0 bg-white z-50">
      <div className="flex px-6 justify-between items-center py-2">
        {/* Left - Logo and Title */}
        <div className="flex gap-3 items-center font-bold">
        
          <h1 className="text-black font-mono text-xl font-bold">
        Sahan<span className='text-green-500'> Teach</span> 
          </h1>
        </div>

        {/* Center - Nav Links (Desktop) */} 
        <ul className="text-xl font-bold sm:flex gap-8 hidden">
        <NavLink to="/" onClick={toggleMenu} className="flex items-center gap-2  hover:text-green-500"> Home</NavLink>
        <NavLink to="/about" onClick={toggleMenu} className="flex items-center gap-2 hover:text-green-500"> About</NavLink>
      <NavLink to="/project" onClick={toggleMenu} className="flex items-center gap-2 hover:text-green-500"> Project</NavLink>
      <NavLink to="/contact" onClick={toggleMenu} className="flex items-center gap-2 hover:text-green-500"> Contact</NavLink>

        </ul>

        {/* Right - Button (Desktop) */}
        <div className="sm:flex hidden">
          <NavLink to="/sign">
            <button className="border border-[#FF8126] px-4 py-2 rounded hover:bg-[#FF8126] hover:text-white transition">
               Sign Up
            </button>
          </NavLink>
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden flex items-center">
          <button onClick={toggleMenu}>
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu - LEFT */}
      <div
        className={`sm:hidden fixed top-0 left-0 h-full w-48 bg-white shadow-md z-50 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu}>
            <FiX size={24} />
          </button>
        </div>
        <div className="flex flex-col items-start px-6 gap-5  font-bold text-base">
          <NavLink to="/" onClick={toggleMenu} className="flex items-center gap-2"><FiHome /> Home</NavLink>
          <NavLink to="/about" onClick={toggleMenu} className="flex items-center gap-2"><FiInfo /> About </NavLink>
          <NavLink to="/contact" onClick={toggleMenu} className="flex items-center gap-2"><FiPhone /> Contact</NavLink>
          <NavLink to="/project" onClick={toggleMenu} className="flex items-center gap-2"><FiUser /> Project </NavLink>
          <NavLink to="/sign" onClick={toggleMenu}>
            <button className="border border-[#FF8126] px-4 py-2 rounded mt-4">
            Sign Up
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
