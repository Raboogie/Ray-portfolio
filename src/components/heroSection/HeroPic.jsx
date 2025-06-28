import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants.js";

const HeroPic = () => {
	return (
		<motion.div
			variants={fadeIn('left', 0.2)}
			initial={"hidden"}
			whileInView={"show"}
			viewport={{once: false, amount: 0}}
			className="h-full flex items-center justify-center">
			<img
				src="../../../public/images/CircuitBoard.png"
				alt="Circuit Board Background"
				className="max-h-[450px] w-auto"
			/>
		</motion.div>
	);
};

export default HeroPic;
