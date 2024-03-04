import { AiOutlineUser } from "react-icons/ai";
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartItems from "../shop/NavCart";

export default function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  
  
  
  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  

  const toggleTheme = () => {
    if(theme=== 'light') {
      console.log('set theme dark')
      setTheme('dark')
    } else {
      setTheme('light')
      console.log('set theme light')
    }
  }

  const darkMode = (  <label className="cursor-pointer grid place-items-center">
  <input onClick={toggleTheme} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg  className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>)

  return (
    <>
    
    <nav data-theme={theme} className="bg-gray-800 sticky top-0 z-50">
      <div className="menu">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img
              className="block lg:hidden h-8 w-auto"
              src="https://dummyimage.com/160x40"
              alt="Logo"
            />
            <img
              className="hidden lg:block h-8 w-auto"
              src="https://dummyimage.com/160x40"
              alt="Logo"
            />
            <div className="hidden sm:flex sm:ml-6 sm:space-x-8">
              <MenuItem text="Home" link="/" />
              <MenuItem text="About" link="about-us" />
              <MenuItem text="Shop" link="shop" />
              <MenuItem text="Contact Us" link="contact-us" />
            </div>
          </div>
          <div className="flex items-center">
            {/* cart items */}
    
          <CartItems/>

            <Link
              to="account"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-2xl font-medium"
            >
              <AiOutlineUser />
            </Link>
            <div className="hidden sm:block">{darkMode}</div>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MenuItem text="Home" link="/" />
            <MenuItem text="About" link="about-us" />
            <MenuItem text="Shop" link="shop" />
            <MenuItem text="Contact Us" link="contact-us" />
          </div>
        </div>
      )}
    </nav>
  </>);
  
}

function MenuItem({ text, link }) {
  return (
    <NavLink to={link} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium text-center">{text}</NavLink>
  );
}
