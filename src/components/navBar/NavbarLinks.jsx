import React from 'react';

const Links = [
	{ link: 'About Me', section: 'about' },
	{ link: 'Skills', section: 'skills' },
	{ link: 'Experience', section: 'experience' },
	{ link: 'Projects', section: 'projects' },
	{ link: 'Contact', section: 'contact' },
];

const NavbarLinks = () => {
	return (
		<ul className="flex gap-6 text-white font-bold text-center lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan-400/30 backdrop-blur-lg lg:bg-black sm:w-full py-4">
			{Links.map((item) => {
				return (
					<li key={item.section} className="group">
						<a
							href="#"
							className="cursor-pointer hover:text-cyan-400 translation-all duration-500"
						>
							{item.link}
							<div className="mx-auto bg-cyan-400 w-0 group-hover:w-full h-[1px] translation-all duration-500"></div>
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default NavbarLinks;
