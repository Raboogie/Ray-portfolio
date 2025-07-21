import { Link } from "react-scroll";

const FooterMain = () => {
    const footerLinks = [
        {
            name: "About Me",
            section: "about",
        },
        {
            name: "Skills",
            section: "skills",
        },
        {
            name: "Experience",
            section: "experience",
        },
        {
            name: "Projects",
            section: "projects",
        },
    ];
    return (
        <div className="px-4">
            <div className="w-full h-[1px] bg-gray-400 mt-24"></div>
            <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto xs:hidden sm:hidden">
                <p className="text-3xl text-gray-400 ">Raynaldo Francis</p>
                <ul className="flex gap-4 text-gray-400 text-xl">
                    {footerLinks.map((item) => {
                        return (
                            <li key={item.name}>
                                <Link
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-120}
                                    to={item.section}
                                    className="hover:text-white transition-all duration-500 cursor-pointer"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-gray-500">
                © 2024 Raynaldo | All Rights Reserved.
            </p>
        </div>
    );
};

export default FooterMain;