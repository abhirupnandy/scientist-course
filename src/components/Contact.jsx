import React from 'react';

const Contact = () => {
	return (
		<div className='w-full py-16 text-white' name='contact'>
			<div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 justify-center text-center md:justify-between md:text-left'>
				<div className='lg:col-span-2 my-4 '>
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want to know more?</h1>
					<p>Get in Touch with us about this course</p>
				</div>
				<div className='my-4'>
					<div className='flex flex-col sm:flex-row items-center justify-between w-[80%] sm:w-full mx-auto'>
						<input type='email' name='contact-email' id='contact-email' placeholder='Enter your email' className='p-3 flex w-full rounded-md text-black' />
						<button className='bg-[color:var(--header-color)] text-black rounded-md font-medium w-[200px] ml-4 my-6 py-3 px-6 '>Contact Us</button>
					</div>
				<p className='px-6 md:px-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className='text-[color:var(--header-color)] cursor-pointer'>Link</span> numquam.</p>
				</div>
			</div>
		</div>
	);
};

export default Contact;
