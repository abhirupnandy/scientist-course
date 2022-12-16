import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);
	return (
		<div className='fixed top-0 flex justify-between items-center h-24 w-full mx-auto px-4 text-gray-800 md:bg-slate-600 bg-opacity-40 z-10'>
			<h1 className='w-full text-3xl lg:text-5xl font-bold text-[color:var(--header-color)] uppercase' id='brand'>
				Text Analytics.
			</h1>
			<ul className='hidden md:flex' id='menu'>
				<li className='p-4 cursor-pointer text-xl font-semibold hover:text-gray-900  hover:text-2xl duration-150 ease-out hover:border-b hover:font-bold'>
					<Link to='home' smooth={true} duration={800}>
						Home
					</Link>
				</li>
				<li className='p-4 cursor-pointer text-xl font-semibold hover:text-gray-900  hover:text-2xl duration-150 ease-out hover:border-b hover:font-bold'>
					<Link to='about' smooth={true} duration={800}>
						About
					</Link>
				</li>
				<li className='p-4 cursor-pointer text-xl font-semibold hover:text-gray-900  hover:text-2xl duration-150 ease-out hover:border-b hover:font-bold'>
					<Link to='mentor' smooth={true} duration={800}>
						Mentors
					</Link>
				</li>
				<li className='p-4 cursor-pointer text-xl font-semibold hover:text-gray-900  hover:text-2xl duration-150 ease-out hover:border-b hover:font-bold'>
					<Link to='register' smooth={true} duration={800}>
						Register
					</Link>
				</li>
				<li className='p-4 cursor-pointer text-xl font-semibold hover:text-gray-900  hover:text-2xl duration-150 ease-out hover:border-b hover:font-bold'>
					<Link to='contact' smooth={true} duration={800}>
						Contact
					</Link>
				</li>
			</ul>
			<div onClick={handleClick} className='block md:hidden' id='menubar'>
				{nav ? (
					<AiOutlineClose size={28} className='font-extrabold border border-gray-200 border-opacity-60' />
				) : (
					<AiOutlineMenu size={28} className='font-extrabold  border border-gray-200 border-opacity-60' />
				)}
			</div>
			<div
				className={
					nav
						? 'fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-800 bg-[color:var(--background-color)] ease-in-out duration-500 '
						: 'fixed left-[-100%] top-0 w-[80%] h-full border-r-gray-800 bg-[color:var(--background-color)] ease-in-out duration-500'
				}>
				<h1 className='w-full text-3xl font-bold text-[color:var(--header-color)] m-4 pt-4 uppercase'>Text Analytics.</h1>
				<ul className='p-4 uppercase' id='mobile-menu'>
					<li className='p-4 border-b border-gray-600 text-xl'>
						<Link to='home' smooth={true} duration={800} onClick={handleClick}>
							Home
						</Link>
					</li>
					<li className='p-4 border-b border-gray-600 text-xl'>
						<Link to='about' smooth={true} duration={800} onClick={handleClick}>
							About
						</Link>
					</li>

					<li className='p-4 border-b border-gray-600 text-xl'>
						<Link to='mentor' smooth={true} duration={800} onClick={handleClick}>
							Mentors
						</Link>
					</li>
					<li className='p-4 border-b border-gray-600 text-xl'>
						<Link to='register' smooth={true} duration={800} onClick={handleClick}>
							Register
						</Link>
					</li>
					<li className='p-4 text-xl'>
						<Link to='contact' smooth={true} duration={800} onClick={handleClick}>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
