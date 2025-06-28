import NavbarMain from './components/navBar/NavbarMain';
import HeroMain from './components/heroSection/heroMain';
import HeroGradient from './components/heroSection/HeroGradient';
import SubHeroSection from './components/heroSection/SubHeroSection';
import AboutMeMain from './components/aboutMeSection/AboutMeMain';
import SkillsMain from './components/skillSection/SkillsMain';
import SubSkills from './components/skillSection/SubSkills';
import ExperienceMain from './components/experienceSection/ExperienceMain';
import ProjectsMain from './components/projectSection/ProjectsMain';
import ContactMeMain from "./components/contactMeSection/ContactMeMain.jsx";
import FooterMain from "./components/footer/FooterMain.jsx";

function App() {
	return (
		<>
			<main className="text-white">
				<NavbarMain />
				<HeroMain />
				<HeroGradient />
				<SubHeroSection />
				<AboutMeMain />
				<SkillsMain />
				<SubSkills />
				<ExperienceMain />
				<ProjectsMain />
				<ContactMeMain/>
				<FooterMain/>
			</main>
		</>
	);
}

export default App;
