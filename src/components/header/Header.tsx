import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDarkMode } from '../../hooks/useDarkMode'

const Header = () => {
	const [colorTheme, setTheme] = useDarkMode()
	const [show, setShow] = useState(false)

	const changeClassToggle = () => {
		setShow(!show)
	}
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
	]
	return (
		<header className="fixed top-0 z-20 w-full transition duration-200 bg-gray-100 shadow dark:bg-dark-header dark:text-white">
			<nav className="flex flex-col items-start justify-between w-11/12 mx-auto lg:flex-row lg:items-center ">
				<div className="flex flex-row items-center justify-between w-full p-2 lg:w-auto">
					<figure className="w-40">
						<NavLink to="/">
							<img src="/assets/logo-black-clover.png" />
						</NavLink>
					</figure>
					<figure
						onClick={changeClassToggle}
						className="flex justify-end w-full rounded lg:hidden sm:w-auto">
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d={`${!show ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'}`}></path>
						</svg>
						<img />
					</figure>
				</div>

				<ul className={`lg:flex py-2 w-full lg:w-auto items-center ${!show && 'hidden'}`}>
					<div
						className="px-4 py-2 cursor-pointer dark:hover:text-yellow-200"
						// onClick={() => setTheme(colorTheme)}
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d={`${
									colorTheme === 'light'
										? ' M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
										: ' M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z '
								}`}></path>
						</svg>
					</div>

					{menu.map(({ name, link, id }) => {
						return (
							<li className="flex" key={id}>
								<NavLink
									to={link}
									className="flex-grow px-4 py-2 text-base font-semibold transition duration-200 rounded hover:text-green-700 dark:hover:text-green-300">
									{name}
								</NavLink>
							</li>
						)
					})}
				</ul>
			</nav>
		</header>
	)
}

export default Header
