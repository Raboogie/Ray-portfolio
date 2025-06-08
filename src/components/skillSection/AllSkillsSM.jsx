import React from 'react';
import { FaHtml5 } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTypescript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiRedux } from 'react-icons/si';

const skills = [
	{
		skill: 'HTML',
		icon: FaHtml5,
	},
	{
		skill: 'CSS',
		icon: IoLogoCss3,
	},
	{
		skill: 'JavaScript',
		icon: IoLogoJavascript,
	},
	{
		skill: 'TypeScript',
		icon: SiTypescript,
	},
	{
		skill: 'React',
		icon: FaReact,
	},
	{
		skill: 'Next.js',
		icon: RiNextjsFill,
	},
	{ skill: 'Redux', icon: SiRedux },
	{ skill: 'tailwindcss', icon: RiTailwindCssFill },
];

const AllSkillsSM = () => {
	return (
		<div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
			{skills.map((item) => {
				return (
					<div
						key={item.skill}
						className="flex flex-col items-center"
					>
						<item.icon className="text-7xl text-amber-400" />
						<p className="text-center mt-4">{item.skill}</p>
					</div>
				);
			})}
		</div>
	);
};

export default AllSkillsSM;
