import React from 'react';
import { FaHtml5 } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTypescript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiRedux } from 'react-icons/si';
import SingleSkill from './SingleSkill';

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
const AllSkills = () => {
	return (
		<div>
			<div className="flex justify-center items-center relative gap-2 max-w-[1200px] mx-auto">
				{skills.map((item) => {
					return (
						<SingleSkill
							key={item.skill}
							textProp={item.skill}
							imgSvg={<item.icon />}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default AllSkills;
