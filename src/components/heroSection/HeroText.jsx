import React from 'react';

const HeroText = () => {
	return (
		<div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
			<h2 className="lg:text-2xl sm:text-xl uppercase text-cyan-400">
				Software Engineer
			</h2>
			<h1 className="lg:text-6xl md:text-[2.8rem] sm:text-4xl font-bold text-amber-400">
				Raynaldo Francis
			</h1>
			<p className="text-lg mt-4">
				A passionate developer who have gained extensive experience in
				web development, working collaboratively across front-end and
				back-end.
			</p>
		</div>
	);
};

export default HeroText;
