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
    SiUnity
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
                        Hi there! I'm so glad you're here to learn more about me as a creative developer.
                        Currently I'm a student at Rotterdam University of Applied Sciences where I'm working
                        towards my Bachelor's degree in the course Creative Media & Game Technologies.
                        I've been exploring the field of interactive technology and have been expanding my
                        skillset for a couple of years now.
                    </Paragraph>

                    <Paragraph>
                        Besides my own study I'm also a peer-coach for CMGT, which means I act as a
                        representative of the course on open days. It also involves assisting and
                        supporting the first years of our course during their subjects and projects.

                        For this, I get special classes which focuses on the key aspects of being a
                        good coach. This includes training in feedback delivery, questioning
                        techniques, and group explanations.
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

                            <div className="grid grid-cols-3 sm:grid-cols-5 gap-6">
                                <ToolTipIcon icon={SiHtml5} label="HTML" />
                                <ToolTipIcon icon={SiCss3} label="CSS" />
                                <ToolTipIcon icon={SiJavascript} label="Javascript" />
                                <ToolTipIcon icon={SiReact} label="React" />
                                <ToolTipIcon icon={SiTailwindcss} label="Tailwindcss" />
                            </div>
                        </div>

                        {/* Backend */}
                        <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-4 items-center">
                            <p className="text-lg text-[#D83A00]">Back-End</p>

                            <div className="grid grid-cols-3 sm:grid-cols-5 gap-6">
                                <ToolTipIcon icon={SiPhp} label="PHP" />
                                <ToolTipIcon icon={SiLaravel} label="Laravel" />
                            </div>
                        </div>

                        {/* Design */}
                        <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-4 items-center">
                            <p className="text-lg text-[#D83A00]">Design</p>

                            <div className="grid grid-cols-3 sm:grid-cols-5 gap-6">
                                <ToolTipIcon icon={SiFigma} label="Figma" />
                            </div>
                        </div>

                        {/* Game engines */}
                        <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-4 items-center">
                            <p className="text-lg text-[#D83A00]">Game engines</p>

                            <div className="grid grid-cols-3 sm:grid-cols-5 gap-6">
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