import React from 'react';
import experiencesImage from '../../images/experience-image.png';

const ExperienceTopMiddle = () => {
	return (
		<div className="lg:w-[35%] md:w-[50%] sm:w-[80%]">
			<img
				src={experiencesImage}
				alt="Experience image"
			/>
		</div>
	);
};

export default ExperienceTopMiddle;
