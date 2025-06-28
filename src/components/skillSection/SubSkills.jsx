import React from 'react';
import laptopImage from "../../images/subSkills.jpg"

const SubSkills = () => {
	return (
		<div className="border-y-2 border-gray-400 relative">
			<div className="absolute bg-gradient-to-r from-amber-400 to-cyan-400 opacity-50 w-full h-full"></div>
			<img
				src={laptopImage}
				alt="laptop"
				className="w-full h-[100px]"
			/>
		</div>
	);
};

export default SubSkills;
