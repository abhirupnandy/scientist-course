import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Mentor from './components/Mentor';
import Navbar from './components/Navbar';
import Register from './components/Register';

const App = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<About />
			<Contact />
			<Mentor />
			<Register />
			<Footer />
		</div>
	);
};

export default App;
