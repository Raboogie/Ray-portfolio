import React from 'react';
import { Link } from 'react-scroll';

const AboutMeText = () => {
	return (
		<div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center xs:items-center xs:text-center">
			<h1 className="text-6xl text-cyan-400 mb-10 px-4">About Me</h1>
			<p className="text-white px-4">
				My technical expertise includes proficiency in React, front-end
				development and Responsive Design. I have some experience with
				back-end technologies such as Java, Spring Boot, Node.js, and
				various databases including Oracle DB and MongoDB. I have a
				proven track record of taking complete ownership of requirements
				and assignments, ensuring timely and high-quality delivery
				within an Agile environment. Outside of coding, I enjoy
				exploring new technologies, reading books, sports and fishing
				with family.
			</p>
			<Link
				className="px-4 xs:self-center md:self-start sm:self-center"
				spy={true}
				smooth={true}
				duration={500}
				offset={-130}
				to={'projects'}
			>
				<button className="border border-yellow-400 rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-yellow-400 translation-all duration-500 cursor-pointer md:self-start sm:self-center hover:text-cyan-400">
					My Projects
				</button>
			</Link>
		</div>
	);
};

export default AboutMeText;
