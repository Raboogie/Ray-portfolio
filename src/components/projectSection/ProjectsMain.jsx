import ProjectsText from './ProjectsText';
import SingleProject from './SingleProject';
import "../../../public/images/Antique-Carpet-website.png"
import "../../../public/images/book-a-session-project.png"
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants.js";
const projects = [
	{
		name: 'Course Booking Session',
		year: 'Nov2024',
		align: 'right',
		image: '../../../public/images/book-a-session-project.png',
		link: '#',
	},
	{
		name: 'Carpet Management System',
		year: 'Jan2025',
		align: 'left',
		image: '../../../public/images/Antique-Carpet-website.png',
		link: '#',
	},
];

const ProjectsMain = () => {
	return (
		<div id="projects" className="max-w-[1200px] mx-auto px-4">
			<motion.div
				variants={fadeIn('up', 0.2)}
				initial={"hidden"}
				whileInView={"show"}
				viewport={{once: false, amount: 0}}
			>
				<ProjectsText />
			</motion.div>

			<div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
				{projects.map((project) => {
					return (
						<SingleProject
							key={project.name}
							name={project.name}
							year={project.year}
							align={project.align}
							image={project.image}
							link={project.link}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectsMain;
