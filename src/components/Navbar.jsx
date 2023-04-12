import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/logo.png'
import Linkedin from "../assets/linkedin.png"
import Github from "../assets/github.png"
import Mail from "../assets/mail.png"
import Resume from "../assets/resume.png"
import { Link } from 'react-scroll'


const Navbar = () => {
  const [nav, setNav] = useState(false) // Define the state for the Mobile Navigation Menu

  const handleClick = () => setNav(!nav) // Set the oposite value of the 'nav' every time the click is toggled

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-7 pt-7 bg-[#FAD5A5] text-[#6FA788]'>

      <div>
        <Link to='home' smooth={true} duration={500}>
          {/* Make logo bigger on hover */}
          <img className='h-auto max-w-[50px] hover:scale-110 duration-300' src={Logo} alt='Logo' />
        </Link>
      </div>

      {/* Menu */}
      <ul className='hidden md:flex'>
        <li className='text-xl hover:scale-110 duration-300 font-bold'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='text-xl hover:scale-110 duration-300 font-bold'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='text-xl hover:scale-110 duration-300 font-bold'>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='text-xl hover:scale-110 duration-300 font-bold'>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='text-xl hover:scale-110 duration-300 font-bold'>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#FAD5A5] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl font-bold'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl font-bold'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl font-bold'>
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl font-bold'>
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl font-bold'>
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>

        <ul>
          <li className='w-[160px] h-[60px] flex justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2A8263] rounded-lg'>
            <a href='https://www.linkedin.com/in/rarescosa' target='_blank' className='flex justify-between items-center w-full text-[#4C9DDC] font-semibold' rel="noreferrer">
              Linkedin <img src={Linkedin} alt="Linkedin" className='w-[50px] ml-[26px]' />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2A8263] rounded-lg'>
            <a href='https://github.com/Rares-Cosa' target='_blank' className='flex justify-between items-center w-full text-[#252628] font-semibold' rel="noreferrer">
              Github <img src={Github} alt="Github" className='w-[50px] ml-[39px]' />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2A8263] rounded-lg'>
            <a href='mailto: rares.cosa@gmail.com' className='flex justify-between items-center w-full text-[#CAC9D0] font-semibold'>
              Mail <img src={Mail} alt="Mai;" className='w-[50px] ml-[58px]' />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2A8263] rounded-lg'>
            <a href='/Resume.pdf' download={true} className='flex justify-between items-center w-full text-[#6CC7F2] font-semibold'>
              Resume <img src={Resume} alt="Resume" className='w-[50px] ml-[28px]' />
            </a>
          </li>
        </ul>

      </div>

    </div>
  )
}

export default Navbar