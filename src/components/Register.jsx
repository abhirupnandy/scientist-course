import React, { useState } from 'react';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

const Register = () => {
	// save the state of the form
	const [form, setForm] = useState({
		'first-name': '',
		'last-name': '',
		email: '',
		phone: '',
		'address-1': '',
		'address-2': '',
		city: '',
		state: '',
		pincode: '',
		nation: '',
	});

	// handle the change in the form
	const handleChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setForm((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	// handle the submit of the form
	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(JSON.stringify(form));
		// add the form data to the firebase database
		// const docRef = addDoc(collection(db, 'registration form'), form);
		setDoc(doc(db, 'registration form', e.target.email.value), form);
		console.log('Document written with ID: ', e.target.email.value);
		// reset the form
		setForm({
			'first-name': '',
			'last-name': '',
			email: '',
			phone: '',
			'address-1': '',
			'address-2': '',
			city: '',
			state: '',
			pincode: '',
			nation: '',
		});
	};

	return (
		<div className='w-full py-16 my-10 text-white shadow-md' name='register'>
			<div className='mb-8 pb-4'>
				{/* header */}
				<div className='w-full flex justify-center'>
					<h1 className=' text-3xl md:text-4xl lg:text-5xl font-bold'>Register for the Course</h1>
				</div>
				{/* form */}
				<div className='w-full flex flex-col items-center justify-center mt-8'>
					<form action='/' onSubmit={handleSubmit}>
						<div>
							{/* CONTACT: Name + Email + Phone */}
							{/* heading with text - personal information */}
							<div className='py-4'>
								<h2 className='text-2xl font-bold flex justify-center'>Personal Information</h2>
							</div>
							<div className='flex flex-col justify-center w-[90%] mx-auto md:w-full gap-4'>
								<div className='w-full'>
									{/* Break name into first name and last name in same row */}
									<div className='flex flex-col md:flex-row gap-4'>
										<div className='w-full md:w-1/2'>
											<label htmlFor='first-name'>First Name</label>
											<input
												type='text'
												name='first-name'
												id='first-name'
												className='w-full p-2 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
												placeholder='Your first name'
												onChange={handleChange}
											/>
										</div>
										<div className='w-full md:w-1/2'>
											<label htmlFor='last-name'>Last Name</label>
											<input
												type='text'
												name='last-name'
												id='last-name'
												className='w-full p-2 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
												onChange={handleChange}
												placeholder='Your last name'
											/>
										</div>
									</div>
								</div>
								<div className='w-full'>
									<label htmlFor='email'>Email</label>
									<input
										type='email'
										name='email'
										id='email'
										className='w-full p-2 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
										onChange={handleChange}
										placeholder='Your Email address'
									/>
								</div>
								<div className='w-full'>
									<label htmlFor='phone'>Phone</label>
									<input
										type='tel'
										name='phone'
										id='phone'
										className='w-full p-2 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
										onChange={handleChange}
										placeholder='Your phone number with country code (+91)'
									/>
								</div>
							</div>
						</div>
						<div className='mt-4'>
							{/* ADDRESS: Address 1 + Address 2 + City + State (Dropdown) + Pin Code + Nationality */}
							{/* heading with text - Ad */}
							<div className='py-4'>
								<h2 className='text-2xl font-bold flex justify-center'>Address Information</h2>
							</div>
							<div className='flex flex-col justify-center w-[90%] mx-auto md:w-full gap-4'>
								<div className='w-full'>
									<label htmlFor='address-1'>Address 1</label>
									<input
										type='text'
										name='address-1'
										id='address-1'
										className='w-full p-2 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
										onChange={handleChange}
										placeholder='Your address'
									/>
								</div>
								<div className='w-full'>
									<label htmlFor='address-2'>Address 2</label>
									<input
										type='text'
										name='address-2'
										id='address-2'
										className='w-full p-2 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
										onChange={handleChange}
										placeholder='Your address'
									/>
								</div>
								<div className='flex flex-col md:flex-row gap-4'>
									<div className='w-full md:w-1/2'>
										<label htmlFor='city'>City</label>
										<input
											type='text'
											name='city'
											id='city'
											className='w-full p-2 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
											onChange={handleChange}
											placeholder='Your city'
										/>
									</div>
									<div className='w-full md:w-1/2'>
										<label htmlFor='state'>State</label>
										<select name='state' id='state' className='w-full p-2 mt-2 border-2 rounded-md focus:outline-none focus:border-blue-500' onChange={handleChange}>
											<option value='default' defaultValue>
												Choose...
											</option>
											<option value='Andaman and Nicobar Islands'>Andaman and Nicobar Islands</option>
											<option value='Andhra Pradesh'>Andhra Pradesh</option>
											<option value='Arunachal Pradesh'>Arunachal Pradesh</option>
											<option value='Assam'>Assam</option>
											<option value='Bihar'>Bihar</option>
											<option value='Chandigarh'>Chandigarh</option>
											<option value='Chhattisgarh'>Chhattisgarh</option>
											<option value='Dadra and Nagar Haveli'>Dadra and Nagar Haveli</option>
											<option value='Daman and Diu'>Daman and Diu</option>
											<option value='Delhi'>Delhi</option>
											<option value='Haryana'>Haryana</option>
											<option value='Goa'>Goa</option>
											<option value='Gujarat'>Gujarat</option>
											<option value='Himachal Pradesh'>Himachal Pradesh</option>
											<option value='Jammu and Kashmir'>Jammu and Kashmir</option>
											<option value='Jharkhand'>Jharkhand</option>
											<option value='Karnataka'>Karnataka</option>
											<option value='Kerala'>Kerala</option>
											<option value='Ladakh'>Ladakh</option>
											<option value='Lakshadweep'>Lakshadweep</option>
											<option value='Madhya Pradesh'>Madhya Pradesh</option>
											<option value='Maharashtra'>Maharashtra</option>
											<option value='Manipur'>Manipur</option>
											<option value='Meghalaya'>Meghalaya</option>
											<option value='Mizoram'>Mizoram</option>
											<option value='Nagaland'>Nagaland</option>
											<option value='Odisha'>Odisha</option>
											<option value='Puducherry'>Puducherry</option>
											<option value='Punjab'>Punjab</option>
											<option value='Rajasthan'>Rajasthan</option>
											<option value='Sikkim'>Sikkim</option>
											<option value='Tamil Nadu'>Tamil Nadu</option>
											<option value='Telangana'>Telangana</option>
											<option value='Tripura'>Tripura</option>
											<option value='Uttar Pradesh'>Uttar Pradesh</option>
											<option value='Uttarakhand'>Uttarakhand</option>
											<option value='West Bengal'>West Bengal</option>
										</select>
									</div>
								</div>
								<div className='flex flex-col md:flex-row gap-4'>
									<div className='w-full md:w-1/2'>
										<label htmlFor='pincode'>Pincode</label>
										<input
											type='text'
											name='pincode'
											id='pincode'
											className='w-full p-2 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
											onChange={handleChange}
											placeholder='Your pincode'
										/>
									</div>
									<div className='w-full md:w-1/2'>
										<label htmlFor='nation'>Nationality</label>
										<input
											type='text'
											name='nation'
											id='nation'
											className='w-full p-2 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
											onChange={handleChange}
											placeholder='Your Nationality'
										/>
									</div>
								</div>
							</div>
						</div>
						<div>Dolore maiores, ipsa ducimus vitae tenetur nobis consequatur voluptates necessitatibus!</div>
						{/* SUBMIT BUTTTON */}
						<div className='flex justify-center'>
							<button type='submit' className='bg-[color:var(--header-color)] text-black rounded-md font-medium w-[200px] ml-4 my-6 py-3 px-6 '>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
