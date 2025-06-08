import React from 'react';
import { LuArrowDownRight } from 'react-icons/lu';

const NavbarBtn = () => {
	return (
		<button className="px-4 py-2 rounded-full text-xl font-bold text-white border-cyan-400 border flex items-center gap-1 bg-gradient-to-r from-cyan-400 to-amber-400 hover:border-orange-400 hover:scale-110 translation-all duration-500 hover:shadow-amber-400 hover:shadow-md">
			Hire Me
			<div className="sm:hidden md:block">
				<LuArrowDownRight />
			</div>
		</button>
	);
};

export default NavbarBtn;
