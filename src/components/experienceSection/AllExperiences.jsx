import React from 'react';
import { experiences } from '../../lib/constant/experiences.js';
import SingleExperience from './SingleExperience.jsx';
import { FaArrowRight } from 'react-icons/fa';

const AllExperiences = () => {
	const displayArrows = experiences.length - 1;

	return (
		<div className="flex md:flex-row sm:flex-col justify-between items-center">
			{experiences.map((item, index) => {
				return (
					<React.Fragment key={item.id}>
						<SingleExperience
							key={item.company}
							experiences={item}
						/>
						{index < displayArrows ? (
							<FaArrowRight className="text-6xl text-amber-400 lg:block sm:hidden" />
						) : (
							''
						)}
					</React.Fragment>
				);
			})}
		</div>
	);
};

export default AllExperiences;
