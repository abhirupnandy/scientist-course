import React from 'react';
import MentorImg from '../assets/images/mentor.jpg';

const Mentor = () => {
	return (
		<div className='w-full py-[10rem] px-4 bg-white' name='mentor'>
			<div className='max-w-[90%] mx-auto grid md:grid-cols-5 gap-6'>
				{/* CARD 1 */}
				<div className='w-full shadow-2xl flex flex-col p-4 my-6 rounded-lg hover:scale-105 duration-300'>
					<img src={MentorImg} alt='/' className='w-[200px] mx-auto mt-[-2rem] bg-white shadow-2xl' />
					<h2 className='text-4xl font-bold text-center py-6'>Dr. Vivek Kumar Singh</h2>
					<p className='text-center text-xl font-bold'>Head, Department of Computer Science</p>
					<div className='text-center font-medium'>
						<p className='py-2 border-b mx-8 mt-8 hover:scale-105 duration-500'>Scientometrics</p>
						<p className='py-2 border-b mx-8 hover:scale-105 duration-500'>Data Structures</p>
						<p className='py-2 border-b mx-8 hover:scale-105 duration-500'>Information Retrieval</p>
					</div>
					<button className='bg-[color:var(--header-color)] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-black text-xl hover:bg-emerald-900 hover:text-white'>More</button>
				</div>
				{/* CARD 2 */}
				<div className='w-full shadow-2xl flex flex-col p-4 my-8 md:my-4 rounded-lg hover:scale-105 duration-300'>
					<img src={MentorImg} alt='/' className='w-[200px] mx-auto mt-[-2rem] bg-white shadow-2xl' />
					<h2 className='text-4xl font-bold text-center py-6'>Dr. Vivek Kumar Singh</h2>
					<p className='text-center text-xl font-bold'>Head, Department of Computer Science</p>
					<div className='text-center font-medium'>
						<p className='py-2 border-b mx-8 mt-8 hover:scale-105 duration-500'>Scientometrics</p>
						<p className='py-2 border-b mx-8 hover:scale-105 duration-500'>Data Structures</p>
						<p className='py-2 border-b mx-8 hover:scale-105 duration-500'>Information Retrieval</p>
					</div>
					<button className='bg-[color:var(--header-color)] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-black text-xl hover:bg-emerald-900 hover:text-white'>More</button>
				</div>
				{/* CARD 3 */}
				<div className='w-full shadow-2xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300'>
					<img src={MentorImg} alt='/' className='w-[200px] mx-auto mt-[-2rem] bg-white shadow-2xl' />
					<h2 className='text-4xl font-bold text-center py-6'>Dr. Vivek Kumar Singh</h2>
					<p className='text-center text-xl font-bold'>Head, Department of Computer Science</p>
					<div className='text-center font-medium'>
						<p className='py-2 border-b mx-8 mt-8 hover:scale-105 duration-500'>Scientometrics</p>
						<p className='py-2 border-b mx-8 hover:scale-105 duration-500'>Data Structures</p>
						<p className='py-2 border-b mx-8 hover:scale-105 duration-500'>Information Retrieval</p>
					</div>
					<button className='bg-[color:var(--header-color)] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-black text-xl hover:bg-emerald-900 hover:text-white'>More</button>
				</div>
				{/* CARD 4 */}
				<div className='w-full shadow-2xl flex flex-col p-4 my-8 md:my-4 rounded-lg hover:scale-105 duration-300'>
					<img src={MentorImg} alt='/' className='w-[200px] mx-auto mt-[-2rem] bg-white shadow-2xl' />
					<h2 className='text-4xl font-bold text-center py-6'>Dr. Vivek Kumar Singh</h2>
					<p className='text-center text-xl font-bold'>Head, Department of Computer Science</p>
					<div className='text-center font-medium'>
						<p className='py-2 border-b mx-8 mt-8 hover:scale-105 duration-500'>Scientometrics</p>
						<p className='py-2 border-b mx-8 hover:scale-105 duration-500'>Data Structures</p>
						<p className='py-2 border-b mx-8 hover:scale-105 duration-500'>Information Retrieval</p>
					</div>
					<button className='bg-[color:var(--header-color)] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-black text-xl hover:bg-emerald-900 hover:text-white'>More</button>
				</div>
				{/* CARD 5 */}
				<div className='w-full shadow-2xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
					<img src={MentorImg} alt='/' className='w-[200px] mx-auto mt-[-2rem] bg-white shadow-2xl' />
					<h2 className='text-4xl font-bold text-center py-6'>Dr. Vivek Kumar Singh</h2>
					<p className='text-center text-xl font-bold'>Head, Department of Computer Science</p>
					<div className='text-center font-medium'>
						<p className='py-2 border-b mx-8 mt-8 hover:scale-105 duration-500'>Scientometrics</p>
						<p className='py-2 border-b mx-8 hover:scale-105 duration-500'>Data Structures</p>
						<p className='py-2 border-b mx-8 hover:scale-105 duration-500'>Information Retrieval</p>
					</div>
					<button className='bg-[color:var(--header-color)] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-black text-xl hover:bg-emerald-900 hover:text-white'>More</button>
				</div>
			</div>
		</div>
	);
};

export default Mentor;
