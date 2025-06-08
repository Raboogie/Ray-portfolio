import React, { useState } from 'react';
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import NavbarBtn from './NavbarBtn';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavbarMain = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<nav className="max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
			<div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[.5px] border-yellow-500">
				<NavbarLogo />
				<div
					className={`${isOpen ? 'sm:block' : 'sm:hidden'} lg:block`}
				>
					<NavbarLinks />
				</div>
				<NavbarBtn />
			</div>
			<div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-[1.5px] border-yellow-500">
				<button
					className="text-2xl p-3 border border-yellow-500 rounded-full text-white"
					onClick={toggleMenu}
				>
					<GiHamburgerMenu />
				</button>
			</div>
		</nav>
	);
};

export default NavbarMain;
