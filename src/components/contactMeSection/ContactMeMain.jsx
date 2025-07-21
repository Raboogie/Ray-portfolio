import React from 'react';
import ContactMeLeft from './ContactMeLeft.jsx';
import ContactMeRight from './ContactMeRight.jsx';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants.js';

const ContactMeMain = () => {
	return (
		<motion.div
			id="contact"
			variants={fadeIn('up', 0.2)}
			initial={'hidden'}
			whileInView={'show'}
			viewport={{ once: false, amount: 0 }}
			className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4"
		>
			<h2 className="text-6xl text-cyan-400 mb-10 text-center">
				Contact Me
			</h2>
			<div className="flex justify-between gap-24 bg-gray-700 p-8 rounded-2xl lg:flex-row  xs:flex-col">
				<ContactMeLeft />
				<ContactMeRight />
			</div>
		</motion.div>
	);
};

export default ContactMeMain;
