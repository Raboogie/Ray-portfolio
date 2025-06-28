import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants.js";

const SingleExperience = ({ experiences }) => {
	return (
		<motion.div
			variants={fadeIn('right', 0.2)}
			initial={"hidden"}
			whileInView={"show"}
			viewport={{once: false, amount: 0}}
			className="md:h-[380px] md:w-[240px] sm:h-auto sm:w-full border-2 border-amber-300 border-dashed rounded-2xl mt-12 p-4">
			<p className="font-bold text-cyan-400">{experiences.position}</p>
			<p className="text-amber-300">{experiences.company}</p>
			<p className="text-gray-400 text-[.9rem]">
				{experiences.startDate} - {experiences.endDate}
			</p>
			<p className="pt-1">{experiences.description}</p>
			<ul className="list-disc mt-4 pl-4">
				{experiences.responsibilities.map((item) => {
					return <li key={`${item}`}>{item}</li>;
				})}
			</ul>
		</motion.div>
	);
};

export default SingleExperience;
