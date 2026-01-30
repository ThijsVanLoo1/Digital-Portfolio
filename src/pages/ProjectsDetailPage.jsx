import {useParams} from "react-router";
import {projects} from "../data/Projects.js";
import {useState} from "react";
import ToolTipIcon from "../components/ToolTipIcon.jsx";
import {SiCss3, SiHtml5, SiJavascript, SiLaravel, SiPhp, SiTailwindcss, SiUnity} from "react-icons/si";

function ProjectsDetailPage() {
    const { slug } = useParams();

    const project = projects.find(
        (project) => project.slug === slug
    );

    const iconMap = {
        HTML: SiHtml5,
        CSS: SiCss3,
        Javascript: SiJavascript,
        PHP: SiPhp,
        Unity: SiUnity,
        TailwindCSS: SiTailwindcss,
        Laravel: SiLaravel
    }

    const [activeIndex, setActiveIndex] = useState(null);

    const screenshots = project.screenshots;
    const prevImage = () => {
        setActiveIndex((prev) =>
            prev === 0 ? screenshots.length - 1 : prev - 1
        );
    };

    const nextImage = () => {
        setActiveIndex((prev) =>
            prev === screenshots.length - 1 ? 0 : prev + 1
        );
    };

    return(
        <>
            <div className="flex justify-center items-center gap-20 mx-20">
                <div className="flex-1">
                    <h1 className="text-[#D83A00] text-3xl py-2">{ project.title }</h1>
                    <p className="text-amber-50 text-lg">{ project.longDescription }</p>
                </div>
                <div className="w-full max-w-md aspect-[4/3] bg-[#1F2230] flex items-center justify-center">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain p-4"
                    />
                </div>
            </div>
            <div>
                {project.screenshots && project.screenshots.length > 0 && (
                    <div className="my-12 mx-20">
                        <h2 className="text-2xl font-semibold text-amber-50 mb-6">
                            Images
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {project.screenshots.map((screenshot, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl overflow-hidden bg-[#262A3A] border border-white/5"
                                >
                                    <img
                                        src={screenshot}
                                        alt={`${project.title} screenshot ${index + 1}`}
                                        onClick={() => setActiveIndex(index)}
                                        className="w-full h-48 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            ))}
                            {activeIndex !== null && (
                                <div
                                    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
                                    onClick={() => setActiveIndex(null)}
                                >
                                    <button
                                        onClick={() => setActiveIndex(null)}
                                        className="absolute top-6 right-6 text-white text-3xl hover:scale-110 transition"
                                    >
                                        ✕
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            prevImage();
                                        }}
                                        className="absolute left-6 text-white text-4xl hover:scale-110 transition"
                                    >
                                        ‹
                                    </button>
                                    <img
                                        src={screenshots[activeIndex]}
                                        alt="Enlarged screenshot"
                                        onClick={(e) => e.stopPropagation()}
                                        className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl"
                                    />
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            nextImage();
                                        }}
                                        className="absolute right-6 text-white text-4xl hover:scale-110 transition"
                                    >
                                        ›
                                    </button>
                                </div>
                            )}

                        </div>
                    </div>
                )}
            </div>
            <div className="m-20 flex justify-between items-center">
                <div className="">
                    <h3 className="text-2xl font-semibold text-amber-50 mb-6">Tech & Tools: </h3>
                    <div className="flex items-center gap-6">
                        {project.icons.map((iconKey) => {
                            const Icon = iconMap[iconKey];

                            return Icon ? (
                                <ToolTipIcon
                                    key={iconKey}
                                    icon={Icon}
                                    label={iconKey}
                                    size="text-5xl"
                                />
                            ) : null;
                        })}
                    </div>
                </div>
                <div>
                    <h4 className="text-xl mt-2 text-amber-50">
                        Status:{" "}
                        <span className="font-semibold text-amber-50">
                            {project.status}
                        </span>

                        {(project.status === "Published" || project.status === "Showcase") && (
                            <div>
                                <a
                                    href={project.liveURL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#D83A00] hover:underline"
                                >
                                    See live →
                                </a>
                            </div>
                        )}
                    </h4>

                </div>
            </div>
        </>
    )
}

export default ProjectsDetailPage;
