import React from 'react';

const HeroGradient = () => {
	return (
		<div>
			<div className="shadow-gradient-cyanMedium absolute top-[-50px] right-[750px] -z-10 animate-pulse rounded-full"></div>
			<div className="shadow-gradient-amberMedium absolute top-0 right-[500px] -z-10 animate-pulse rounded-full"></div>
			<div className="shadow-gradient-cyanMedium absolute top-[200px] left-30 -z-10 opacity-50"></div>
			<div className="shadow-gradient-amberMedium absolute top-[400px] left-40 -z-10 opacity-50"></div>
		</div>
	);
};

export default HeroGradient;
