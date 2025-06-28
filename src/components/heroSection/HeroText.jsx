import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants.js";

const HeroText = () => {
	return (
		<div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
			<motion.h2
				variants={fadeIn('down', 0.2)}
				initial={"hidden"}
				whileInView={"show"}
				viewport={{once: false, amount: 0}}
				className="lg:text-2xl sm:text-xl uppercase text-cyan-400"
			>
				Software Engineer
			</motion.h2>
			<motion.h1
				variants={fadeIn('right', 0.4)}
				initial={"hidden"}
				whileInView={"show"}
				viewport={{once: false, amount: 0}}
				className="lg:text-6xl md:text-[2.8rem] sm:text-4xl font-bold text-amber-400">
				Raynaldo Francis
			</motion.h1>
			<motion.p
				variants={fadeIn('up', 0.6)}
				initial={"hidden"}
				whileInView={"show"}
				viewport={{once: false, amount: 0}}
				className="text-lg mt-4">
				A passionate developer who have gained extensive experience in
				web development, working collaboratively across front-end and
				back-end.
			</motion.p>
		</div>
	);
};

export default HeroText;
