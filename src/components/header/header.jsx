import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import imgClover from "../../assets/logo-black-clover.png";

const Header = () => {
  const [show, setShow] = useState(false);

  const changeClassToggle = () => {
    setShow(!show);
  };
  return (
    <header class="w-full shadow bg-gray-900 text-white fixed top-0 z-20">
      <nav class="w-11/12 mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center py-2">
        <div class="w-full lg:w-auto flex justify-between p-2 items-center flex-col sm:flex-row">
          <figure class="w-24 sm:w-40 mb-3">
            <NavLink to="/">
              <img src={imgClover} class="w-full" />
            </NavLink>
          </figure>
          <div className="rounded flex justify-end lg:hidden w-full sm:w-auto">
            <button
              onClick={changeClassToggle}
              type="button"
              class="py-2 px-4 flex-grow sm:flex-grow-0 bg-indigo-600 rounded hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              {!show ? "Open Menu" : "X"}
            </button>
          </div>
        </div>

        <ul className={`lg:flex py-2 w-full lg:w-auto ${!show && "hidden"}`}>
          <li className="flex ">
            <NavLink
              to="/"
              className="flex-grow transition duration-200 hover:bg-green-600 rounded p-4"
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/characters"
              className="flex-grow p-4  transition duration-200 hover:bg-green-600 rounded"
            >
              Personajes
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/magic-knights"
              className="flex-grow p-4  transition duration-200 hover:bg-green-600 rounded"
            >
              Magic Knights
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/curiosities"
              className="flex-grow  transition duration-200 hover:bg-green-600 rounded p-4 "
            >
              Curiosities
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
