import React from 'react';
import AboutMeText from './AboutMeText';
import AboutMeImage from './AboutMeImage';
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants.js";

const AboutMeMain = () => {
	return (
		<div id="about" className="flex md:flex-row xs:flex-col sm:flex-col max-w-[1200px] mx-auto mt-[100px] justify-between items-center">
			<motion.div
				variants={fadeIn('right', 0.2)}
				initial={"hidden"}
				whileInView={"show"}
				viewport={{once: false, amount: 0.4}}
			>
				<AboutMeText />
			</motion.div>
			<motion.div
				variants={fadeIn('up', 0.2)}
				initial={"hidden"}
				whileInView={"show"}
				viewport={{once: false, amount: 0.4}}
			>
				<AboutMeImage />
			</motion.div>
		</div>
	);
};

export default AboutMeMain;
