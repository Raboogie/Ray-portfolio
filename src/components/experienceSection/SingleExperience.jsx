import React from 'react';

const SingleExperience = ({ experiences }) => {
	return (
		<div className="md:h-[380px] md:w-[240px] sm:h-auto sm:w-full border-2 border-amber-300 border-dashed rounded-2xl mt-12 p-4">
			<p className="font-bold text-cyan-400">{experiences.position}</p>
			<p className="text-amber-300">{experiences.company}</p>
			<p className="text-gray-400 text-[.9rem]">
				{experiences.startDate} - {experiences.endDate}
			</p>
			<p className="pt-1">{experiences.description}</p>
			<ul className="list-disc mt-4 pl-4">
				{experiences.responsibilities.map((item) => {
					return <li key={`${item}`}>{item}</li>;
				})}
			</ul>
		</div>
	);
};

export default SingleExperience;
