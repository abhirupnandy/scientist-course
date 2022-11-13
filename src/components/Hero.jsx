import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
	const el = useRef(null);

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: ['Data Scientist.', 'Applied Scientist.'], // Strings to display
			// Speed settings, try diffrent values untill you get good results
			startDelay: 300,
			typeSpeed: 150,
			backSpeed: 100,
			backDelay: 100,
			loop: true,
		});

		// Destropying
		return () => {
			typed.destroy();
		};
	}, []);

	return (
		<div className='text-white' name='home'>
			<div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
				<p className='text-[color:var(--header-color)] font-bold p-2 uppercase text-xl'>Growing with Data and AI.</p>
				<h1 className='md:text-5xl sm:text-4xl text-3xl font-bold md:py-6'>Grow with Artificial Intelligence</h1>
				<div>
					<p className='md:text-3xl sm:text-2xl text-xl font-bold md:pl-4 pl-2 py-4'>
						Learn how to be a <br />
					</p>
					<div className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 py-2'>
						<span ref={el}></span>
					</div>
				</div>
				<p className='md:text-2xl text-xl font-bold text-gray-500 p-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, culpa.</p>
				<button className='bg-[color:var(--header-color)] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black text-xl hover:bg-emerald-900 hover:text-white'>Register</button>
			</div>
		</div>
	);
};

export default Hero;
