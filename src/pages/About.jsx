import Paragraph from "../components/Paragraph.jsx";
import {
    SiCss3,
    SiFigma,
    SiHtml5,
    SiJavascript,
    SiLaravel,
    SiPhp,
    SiReact,
    SiTailwindcss,
    SiUnity,
    SiVite,
    SiExpress
} from "react-icons/si";
import ToolTipIcon from "../components/ToolTipIcon.jsx";

function About() {
    return (
        <>
            <section className="mt-12 px-6 md:px-12 lg:px-20">
                <div className="max-w-3xl">

                    <h1 className="text-3xl md:text-4xl py-4 text-[#D83A00] font-bold">
                        About me
                    </h1>

                    <Paragraph>
                        I’m a second-year student in Creative Media & Game Technologies (CMGT) with a strong interest in full-stack development.
                        During my studies, I’ve developed both front-end and back-end skills and enjoy building complete digital experiences from concept to implementation.
                        I’m familiar with core web programming languages such as HTML, CSS, JavaScript, and PHP, as well as experience working with frameworks like Laravel and React.
                    </Paragraph>
                    <Paragraph>
                        While I see myself primarily as a starting full-stack developer, I naturally gravitate a bit more toward front-end development because of my interest in creating intuitive and engaging user experiences.
                    </Paragraph>
                </div>
            </section>
            <section className="px-6 md:px-12 lg:px-20 my-20">
                <div className="max-w-4xl">

                    <h2 className="text-3xl md:text-4xl py-4 text-[#D83A00] font-bold">
                        Tech & Tools
                    </h2>

                    <h3 className="text-base md:text-lg text-amber-50 font-medium">
                        Languages & tools that I use to build my projects:
                    </h3>

                    <div className="grid gap-10 py-6">

                        {/* Frontend */}
                        <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-4 items-center">
                            <p className="text-lg text-[#D83A00]">Front-End</p>

                            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 justify-items-center">
                                <ToolTipIcon icon={SiHtml5} label="HTML" />
                                <ToolTipIcon icon={SiCss3} label="CSS" />
                                <ToolTipIcon icon={SiJavascript} label="Javascript" />
                                <ToolTipIcon icon={SiReact} label="React" />
                                <ToolTipIcon icon={SiTailwindcss} label="Tailwindcss" />
                                <ToolTipIcon icon={SiVite} label="Vite" />
                            </div>
                        </div>

                        {/* Backend */}
                        <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-4 items-center">
                            <p className="text-lg text-[#D83A00]">Back-End</p>

                            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 justify-items-center">
                                <ToolTipIcon icon={SiPhp} label="PHP" />
                                <ToolTipIcon icon={SiLaravel} label="Laravel" />
                                <ToolTipIcon icon={SiExpress} label="Express" />
                            </div>
                        </div>

                        {/* Design */}
                        <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-4 items-center">
                            <p className="text-lg text-[#D83A00]">Design</p>

                            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 justify-items-center">
                                <ToolTipIcon icon={SiFigma} label="Figma" />
                            </div>
                        </div>

                        {/* Game engines */}
                        <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-4 items-center">
                            <p className="text-lg text-[#D83A00]">Game engines</p>

                            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 justify-items-center">
                                <ToolTipIcon icon={SiUnity} label="Unity" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default About;