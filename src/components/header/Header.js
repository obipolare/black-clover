import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import imgClover from "../../assets/logo-black-clover.png";
import openMenu from "../../assets/openMenu.svg";
import closeMenu from "../../assets/closeMenu.png";

const Header = () => {
  const [show, setShow] = useState(false);

  const changeClassToggle = () => {
    setShow(!show);
  };
  const menu = [
    {
      name: "Home",
      link: "/",
      id: 1,
    },
    {
      name: "Personajes",
      link: "/characters",
      id: 2,
    },
    {
      name: "Magic Knights",
      link: "/magic-knights",
      id: 3,
    },
    {
      name: "Curiosities",
      link: "/curiosities",
      id: 4,
    },
  ];
  return (
    <header className="fixed top-0 z-20 w-full bg-gray-100 shadow">
      <nav className="flex flex-col items-start justify-between w-11/12 mx-auto lg:flex-row lg:items-center ">
        <div className="flex flex-row items-center justify-between w-full p-2 lg:w-auto">
          <figure className="w-40">
            <NavLink to="/">
              <img src={imgClover} />
            </NavLink>
          </figure>
          <figure className="flex justify-end w-full rounded lg:hidden sm:w-auto">
            <img
              src={!show ? `${openMenu}` : `${closeMenu}`}
              className="w-6"
              onClick={changeClassToggle}
            />
            {/* <button
              onClick={changeClassToggle}
              type="button"
              className="flex-grow px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded shadow-md sm:flex-grow-0 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
            >
              {!show ? "Open Menu" : "X"}
            </button> */}
          </figure>
        </div>

        <ul className={`lg:flex py-2 w-full lg:w-auto ${!show && "hidden"}`}>
          {menu.map(({ name, link, id }) => {
            return (
              <li className="flex" key={id}>
                <NavLink
                  to={link}
                  className="flex-grow px-4 py-2 text-base font-semibold transition duration-200 rounded hover:text-green-700"
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
