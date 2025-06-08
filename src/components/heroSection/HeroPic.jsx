import React from 'react';
import { BiSquareRounded } from 'react-icons/bi';
import { PiHexagonThin } from 'react-icons/pi';

const HeroPic = () => {
	return (
		<div className="h-full flex items-center justify-center">
			<img
				src="../../../public/images/CircuitBoard.png"
				alt="Circuit Board Background"
				className="max-h-[450px] w-auto"
			/>
			<div className="absolute -z-10 flex justify-center items-center animate-pulse">
				<BiSquareRounded className="md:h-[90%] sm:h-[120%] min-h-[500px] w-auto text-cyan-400 blur-md animate-[spin_20s_linear_infinite] opacity-85" />
			</div>
		</div>
	);
};

export default HeroPic;
