import { useParams } from "react-router";
import { projects } from "../data/Projects.js";
import { useState } from "react";
import ToolTipIcon from "../components/ToolTipIcon.jsx";
import {SiCss3, SiHtml5, SiJavascript, SiLaravel, SiPhp, SiReact, SiTailwindcss, SiUnity} from "react-icons/si";

function ProjectsDetailPage() {
    const { slug } = useParams();
    const project = projects.find(p => p.slug === slug);

    const iconMap = {
        HTML: SiHtml5,
        CSS: SiCss3,
        Javascript: SiJavascript,
        PHP: SiPhp,
        Unity: SiUnity,
        TailwindCSS: SiTailwindcss,
        Laravel: SiLaravel,
        React: SiReact
    };

    const [activeIndex, setActiveIndex] = useState(null);
    const screenshots = project.screenshots;

    const prevImage = () => setActiveIndex(prev => prev === 0 ? screenshots.length - 1 : prev - 1);
    const nextImage = () => setActiveIndex(prev => prev === screenshots.length - 1 ? 0 : prev + 1);

    return (
        <>
            {/* Hero section */}
            <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-8 md:gap-20 px-4 sm:px-6 md:px-20 py-8">
                {/* Text */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-[#D83A00] text-3xl sm:text-4xl md:text-5xl font-bold py-2">{project.title}</h1>
                    <p className="text-amber-50 text-base sm:text-lg mt-4">{project.longDescription}</p>
                </div>

                {/* Image */}
                <div className="w-full max-w-md md:max-w-lg aspect-[4/3] bg-[#1F2230] flex items-center justify-center rounded-xl overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain p-4"
                    />
                </div>
            </div>

            {/* Screenshots */}
            {screenshots && screenshots.length > 0 && (
                <div className="my-12 px-4 sm:px-6 md:px-20">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-amber-50 mb-6 text-center md:text-left">
                        Images
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                        {screenshots.map((screenshot, index) => (
                            <div
                                key={index}
                                className="rounded-xl overflow-hidden bg-[#1F2230] border border-white/5 cursor-pointer flex items-center justify-center"
                                onClick={() => setActiveIndex(index)}
                            >
                                <img
                                    src={screenshot}
                                    alt={`${project.title} screenshot ${index + 1}`}
                                    className="w-full h-auto max-h-80 object-contain transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Lightbox */}
                    {activeIndex !== null && (
                        <div
                            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 sm:p-8"
                            onClick={() => setActiveIndex(null)}
                        >
                            <button
                                onClick={() => setActiveIndex(null)}
                                className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white text-3xl sm:text-4xl hover:scale-110 transition"
                            >
                                ✕
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                className="absolute left-4 sm:left-6 text-white text-4xl sm:text-5xl hover:scale-110 transition"
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
                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                className="absolute right-4 sm:right-6 text-white text-4xl sm:text-5xl hover:scale-110 transition"
                            >
                                ›
                            </button>
                        </div>
                    )}
                </div>
            )}

            {/* Tech & Status */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 px-4 sm:px-6 md:px-20 py-8">
                {/* Icons */}
                <div>
                    <h3 className="text-2xl font-semibold text-amber-50 mb-4">Tech & Tools</h3>
                    <div className="flex flex-wrap gap-4">
                        {project.icons.map((iconKey) => {
                            const Icon = iconMap[iconKey];
                            return Icon ? (
                                <ToolTipIcon
                                    key={iconKey}
                                    icon={Icon}
                                    label={iconKey}
                                    size="text-4xl sm:text-5xl"
                                />
                            ) : null;
                        })}
                    </div>
                </div>

                {/* Status & live URL */}
                <div className="mt-4 md:mt-0">
                    <h4 className="text-xl sm:text-2xl text-amber-50">
                        Status: <span className="font-semibold">{project.status}</span>
                    </h4>
                    {(project.status === "Published" || project.status === "Showcase") && project.liveURL && (
                        <a
                            href={project.liveURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#D83A00] hover:underline mt-2 inline-block"
                        >
                            See live →
                        </a>
                    )}
                </div>
            </div>
        </>
    );
}

export default ProjectsDetailPage;