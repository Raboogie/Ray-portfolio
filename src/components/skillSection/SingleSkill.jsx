import React from 'react';

const SingleSkill = ({ imgSvg, textProp }) => {
	return (
		<div className="hover:-translate-y-10 transition-all duration-500">
			<div className="flex flex-col items-center gap-2 relative">
				<div className="bg-white text-cyan-400 h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-gray-700 hover:scale-105 transition-all duration-500 text-6xl border-4 border-amber-400">
					{imgSvg}
				</div>
				<p className="font-bold">{textProp}</p>
			</div>
			<div className="w-[100px] h-[200px] bg-amber-400 absolute top-[50px] -z-10"></div>
		</div>
	);
};

export default SingleSkill;
