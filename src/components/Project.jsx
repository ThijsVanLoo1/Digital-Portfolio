import {Link} from "react-router";
import {SiCss3, SiHtml5, SiJavascript, SiLaravel, SiPhp, SiTailwindcss, SiUnity} from "react-icons/si";
import ToolTipIcon from "./ToolTipIcon.jsx";

function Project({ project }) {
    const iconMap = {
        HTML: SiHtml5,
        CSS: SiCss3,
        Javascript: SiJavascript,
        PHP: SiPhp,
        Unity: SiUnity,
        TailwindCSS: SiTailwindcss,
        Laravel: SiLaravel
    }

    return (
        <div className="rounded-2xl overflow-hidden bg-[#262A3A] border border-white/5 shadow-lg shadow-black/20 transition-transform duration-300 hover:-translate-y-1">
            <img src={project.image} alt={project.title}
                 className="w-full h-48 object-contain p-6 bg-[#1F2230]"/>
            <div  className="p-6 flex flex-col h-full">
                <h2 className="text-3xl text-[#D83A00] font-bold">{project.title}</h2>
                <p className="text-sm text-gray-300 mt-2">
                    {project.description}
                </p>
                <Link to={`/projects/${project.slug}`}
                      className="inline-block mt-4 text-[#D83A00] hover:text-amber-50 transition-colors">
                    See more of {project.title} →
                </Link>
                <div className="flex gap-3 mt-4">
                    {project.icons.map((iconKey) => {
                        const Icon = iconMap[iconKey];

                        return Icon ? (
                            <ToolTipIcon
                                key={iconKey}
                                icon={Icon}
                                label={iconKey}
                                size="text-4xl"
                            />
                        ) : null;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Project;