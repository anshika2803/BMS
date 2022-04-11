import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "react-feather";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-gray-50 border-b md:flex md:items-center md:justify-around  px-3 pb-0 shadow-lg  md:px-5">
        {/* <!-- Logo text or image --> */}
        <div className="flex items-center justify-around  md:mb-0">
          <div className="max-w-full h-auto flex justify-center items-center bg-gray-50">
            <Link to="/">
              <img
                className="object-contain max-w-full h-12 md:h-20 my-1 w-auto"
                src="/logo592.png"
                alt="logo"
              ></img>
              {/* {item.name} */}
            </Link>
          </div>
          <div className="md:hidden flex-row flex">
            <button
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              onClick={() => setOpen(!open)}
            >
              <Menu size={16} className="text-gray-900" />
            </button>
          </div>
        </div>

        <nav>
          <ul
            className={`${
              open ? "block" : "hidden"
            } list-reset md:flex md:items-center md:justify-center `}
          >
            <li className="md:ml-4 md:px-3 md:py-1">
              <a
                className="block no-underline hover:underline py-2 text-gray-darkest hover:text-black md:border-none md:p-0 md:text-xl md:font-semibold"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="md:ml-4 md:px-3 md:py-1">
              <a
                className="block no-underline hover:underline py-2 text-gray-darkest hover:text-black md:border-none md:p-0 md:text-xl md:font-semibold"
                href="/doctor"
              >
                Doctor
              </a>
            </li>
            <li className="md:ml-4 md:px-3 md:py-1">
              <a
                className="block no-underline hover:underline py-2 text-gray-darkest hover:text-black md:border-none md:p-0 md:text-xl md:font-semibold"
                href="/donor"
              >
                Donor
              </a>
            </li>
            <li className="md:ml-4 md:px-3 md:py-1">
              <a
                className="block no-underline hover:underline py-2 text-gray-darkest hover:text-black md:border-none md:p-0 md:text-xl md:font-semibold"
                href="/patient"
                exact
              >
                Patient
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
