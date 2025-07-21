import React from 'react';
import {Link} from "react-scroll";

const Links = [
	{ link: 'About Me', section: 'about' },
	{ link: 'Skills', section: 'skills' },
	{ link: 'Experience', section: 'experience' },
	{ link: 'Projects', section: 'projects' },
	{ link: 'Contact', section: 'contact' },
];

const NavbarLinks = ({setIsOpen, isOpen}) => {
	const handleLinkClick = () => {
	  setIsOpen(!isOpen);
	}

	return (
		<ul className="flex gap-6 text-white font-bold text-center lg:flex-row xs:flex-col sm:flex-col lg:relative xs:absolute sm:absolute xs:top-[110%] sm:top-[110%] left-[50%] -translate-x-[50%] lg:text-md xs:text-xl sm:text-xl xs:bg-cyan-400/30 sm:bg-cyan-400/30 backdrop-blur-lg lg:bg-black xs:w-full sm:w-full py-4">
			{Links.map((item) => {
				return (
					<li key={item.section} className="group">
						<Link
							onClick={handleLinkClick}
							spy={true}
							smooth={true}
							duration={500}
							offset={-130}
							to={item.section}
							className="cursor-pointer hover:text-cyan-400 translation-all duration-500"

						>
							{item.link}
						</Link>
						<div className="mx-auto bg-cyan-400 w-0 group-hover:w-full h-[1px] translation-all duration-500"></div>
					</li>
				);
			})}
		</ul>
	);
};

export default NavbarLinks;
