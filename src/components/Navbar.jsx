import { NavLink } from "react-router-dom";
import logo from "../assets/react.svg"
import { useState } from "react";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
   
  const navItems = [
    { link: 'Home', path: '/' },
    { link: 'About', path: '/about' },
    { link: 'Services', path: '/transfers' },
    { link: 'Contact', path: '/tariffs' },
  ];

  return (
  <nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
    <NavLink
      to="/"
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <img
        src={logo}
        className="h-8"
        alt="Flowbite Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        Ilmiy Anjumanlar
      </span>
    </NavLink>
   
      <button
        className={`hamburger-button inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${isOpen ? 'open' : ''}`
       
      }
        onClick={handleMenuClick}
      >
        <span className="sr-only">Open main menu</span>
         <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
      </button>
      {isOpen && (
       <div className="absolute left-[45%] flex flex-col top-[20%] items-center justify-center mx-auto ">
  {navItems.map(({ link, path }) => (
    <li className="list-none " key={link}>
      <NavLink
        to={path}
        className="block px-3 py-2 text-blue-700 bg-transparent bg-black rounded md:bg-blue-700 md:text-white md:p-3 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-700 shadow_book"
        aria-current="page"
      >
        {link}
      </NavLink>
    </li>
  ))}
</div>
      )}
    

    <div className="hidden w-full md:block md:w-auto" >
      <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {
          navItems.map(({ link, path }) =>(
        <li key={link}>
          <NavLink
            to={path}
            className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            activeClassName="text-red-500"
          aria-current={link}
          >
            {link}
          </NavLink>
        </li>
            
          ))
        }
        
       
       
       
       
      </ul>
    </div>
  </div>
</nav>

  );
}

export default Navbar;

