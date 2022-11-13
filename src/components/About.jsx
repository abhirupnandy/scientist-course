import React from 'react';
import AboutImg from '../assets/images/about.jpg';

const About = () => {
	return (
		<div className='w-full bg-white py-16 px-4' name='about'>
			<div className='max-w-[1240px] mx-auto grid md:grid-cols-2 shadow-2xl shadow-[color:var(--shadow-color)] rounded-xl p-4'>
				<img src={AboutImg} alt='About' className='w-[500px] mx-auto my-4 shadow-xl' />
				<div className='flex flex-col justify-center px-4'>
					<p className='text-[color:var(--header-color)] font-bold uppercase'>Data Scientist DashBoard</p>
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Data Scientist</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro error blanditiis maiores obcaecati veniam, mollitia adipisci, rem sint laborum quia delectus! Quibusdam at,
						deleniti iure qui suscipit cumque. Quo, blanditiis?
					</p>
					<button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[color:var(--header-color)] text-xl hover:bg-emerald-900 hover:text-white'>Register</button>
				</div>
			</div>
		</div>
	);
};

export default About;
