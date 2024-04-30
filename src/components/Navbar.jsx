
import  { useState } from 'react';
import { GrLanguage } from "react-icons/gr";
import { FaBars, FaXmark } from 'react-icons/fa6';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
  const navItems = [
    { link: 'Overview', path: 'home' },
    { link: 'Feature', path: 'feature' },
    { link: 'About', path: 'about' },
    { link: 'Pricing', path: 'pricing' },
  ];
  return (
    <>
    <nav className='fixed top-0 left-0 right-0 p-4 mx-auto bg-white md:px-14 max-w-screen-2xl text-primary'>
    <div className='container flex items-center justify-between mx-auto text-lg font-medium'>
    <div className='flex items-center space-x-12'>
        <a
          href="/"
          className="flex items-center space-x-3 text-2xl font-semibold text-primary"
        >
          <img className="inline-block w-20" src="https://anjumanlar.uz/logo.svg" alt="Logo" />
         
        </a>
        <ul className='hidden space-x-12 md:flex'>
          {navItems.map(({ link, path }) => (
            <li key={link}>
              <a href={path} className="block hover:text-gray-300">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='items-center hidden space-x-12 md:flex'>
        <a href="/" className='items-center hidden lg:flex hover:text-secoundary'><GrLanguage className='mr-2'/>Language</a>
        <button className='px-4 py-2 transition-all duration-300 rounded bg-secoundary hover:text-white hover:bg-indigo-600'>Sign up</button>
      </div>
      <div className='md:hidden'>
    <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
        {
            isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary'/>) : (<FaBars className='w-6 h-6 text-primary'/>)
        }
    </button>
      </div>
    </div>
    </nav>
    <div className={` space-y-4 px-4 pt-24 text-xl  pb-5  bg-secoundary ${isMenuOpen ? " fixed block  top-0  right-0 left-0 " : "hidden"} `}>
    {
        navItems.map(({ link, path }) => (
            <li  key={link}>
              <a href={path} className="block hover:text-gray-300">
                {link}
              </a>
            </li>
          ))  
    }
    </div>
   </>
  )
}

export default Navbar