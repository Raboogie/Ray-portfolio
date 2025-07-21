import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants.js";
import circBoardImage from '../../images/CircuitBoard.png';

const HeroPic = () => {
	return (
		<motion.div
			variants={fadeIn('down', 0.2)}
			initial={"hidden"}
			whileInView={"show"}
			viewport={{once: false, amount: 0}}
			className="h-full flex items-center justify-center">
			<img
				src={circBoardImage}
				alt="Circuit Board Background"
				className="max-h-[450px] w-auto"
			/>
		</motion.div>
	);
};

export default HeroPic;
