import React from 'react';

const SubHeroSection = () => {
	return (
		<div className="w-full border-y border-y-gray-400 text-gray-400 flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 items-center gap-4 bg-stone-700">
			<p className="md:block sm:hidden">Fast Learner</p>
			<p className="md:block sm:hidden">Collaborator</p>
			<p>Detail Master</p>
		</div>
	);
};

export default SubHeroSection;
