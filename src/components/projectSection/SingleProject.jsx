import React from 'react';
import { BiSolidRightTopArrowCircle } from "react-icons/bi";

const SingleProject = ({image, name, year, align, link}) => {
	return (
		<div className={` flex w-full sm:flex-col-reverse items-center gap-8 ${align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse' } justify-end`}>
			<div>
				<h2 className="md:text-3xl sm:text-2xl text-amber-400">{name}</h2>
				<h2 className={`text-xl font-thin sm:text-center ${align === 'left' ? 'md:text-right' : 'md:text-left'}`}>{year}</h2>
				<a href={link} className={`text-lg flex gap-2 items-center text-cyan-400 hover:text-amber-400 transition-all duration-500 cursor-pointer sm:justify-center ${align === 'left' ? 'md:justify-end' : 'md:justify-start'}`}>View <BiSolidRightTopArrowCircle/></a>
			</div>
			<div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white"><img src={image} alt={name} className="w-full h-full"/></div>
		</div>
	);
};

export default SingleProject;
