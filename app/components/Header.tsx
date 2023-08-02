'use client';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Image } from '@nextui-org/react';
import Hamburger from 'hamburger-react';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const { setTheme, theme } = useTheme();

  const menu = [
    {
      name: 'Home',
      link: '/',
      id: 1,
    },
    {
      name: 'Personajes',
      link: '/characters',
      id: 2,
    },
    {
      name: 'Magic Knights',
      link: '/magic-knights',
      id: 3,
    },
    {
      name: 'Curiosities',
      link: '/curiosities',
      id: 4,
    },
  ];
  return (
    <header className="fixed top-0 z-20 w-full transition duration-200  shadow  bg-default-100 ">
      <nav className="flex flex-col items-start justify-between w-11/12 mx-auto lg:flex-row lg:items-center ">
        <div className="flex flex-row items-center justify-between w-full p-2 lg:w-auto">
          <figure>
            <Link href="/">
              <Image
                src="/assets/logo-black-clover.png"
                width={180}
                alt="black clover logo"
              />
            </Link>
          </figure>

          <figure className="flex lg:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </figure>
        </div>

        <ul
          className={`lg:flex py-2 w-full lg:w-auto items-center ${
            !isOpen ? 'hidden' : ''
          }`}
        >
          <div
            className="px-4 py-2 cursor-pointer dark:hover:text-yellow-200"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d={`${
                  theme === 'dark'
                    ? ' M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                    : ' M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z '
                }`}
              ></path>
            </svg>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {menu.map(({ name, link, id }) => {
              return (
                <li className="flex" key={id}>
                  <Link
                    href={link}
                    className="flex-1 text-base font-semibold transition duration-200 rounded hover:text-green-700 dark:hover:text-green-300"
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
