import React from 'react';
import { FaGlobe, FaFacebookSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-400'>
			<div>
				<h1 className='w-full text-3xl font-bold text-[color:var(--header-color)] uppercase'>Text Analytics.</h1>
				<p className='py-4 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, voluptas impedit eligendi nihil optio architecto quam magni possimus sit aliquid.</p>
				<div className='flex justify-around md:w-[75%] my-6'>
					<FaFacebookSquare size={30} className='cursor-pointer' />
					<FaTwitterSquare size={30} className='cursor-pointer' />
					<FaLinkedin size={30} className='cursor-pointer' />
					<FaGlobe size={30} className='cursor-pointer' />
				</div>
			</div>
			<div className='lg:col-span-2 lg:pl-12 flex justify-between'>
				<div>
					<h6 className='font-medium text-gray-500'>Solutions</h6>
					<ul>
						<li className='py-2 text-small'>Data Scientist</li>
						<li className='py-2 text-small'>Applied Scientist</li>
						<li className='py-2 text-small'>Data Engineer</li>
					</ul>
				</div>
				<div>
					<h6 className='font-medium text-gray-500'>Support</h6>
					<ul>
						<li className='py-2 text-small'>Pricing</li>
						<li className='py-2 text-small'>Documentation</li>
						<li className='py-2 text-small'>Guides</li>
					</ul>
				</div>
				<div>
					<h6 className='font-medium text-gray-500'>Company</h6>
					<ul>
						<li className='py-2 text-small'>Certificate Course</li>
						<li className='py-2 text-small'>Career</li>
						<li className='py-2 text-small'>About Us</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
