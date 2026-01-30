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
            <div className="mt-12 mx-40">
                <div className="block w-2/3">
                    <h1 className="text-3xl py-4 text-[#D83A00] font-bold">About me</h1>
                    <Paragraph>
                        Hi there! I'm so glad you're here to learn more about me as a creative developer.
                        Currently I'm a student at Rotterdam University of Applied Sciences where I'm working towards my Bachelor's degree in the course Creative Media & Game Technologies.
                        I've been exploring the field of interactive technology and have been expanding my skillset for a couple of years now.
                    </Paragraph>
                    <br/>
                    <Paragraph>
                        Besides my own study I'm also a peer-coach for CMGT, which means I act as a representative of the course on open days.
                        It also involves assisting and supporting the first years of our course during their subjects and projects.
                        For this, I get special classes which focuses on the key aspects of being a good coach.
                        This includes training in feedback delivery, questioning techniques, and group explanations.
                    </Paragraph>
                </div>
            </div>
            <div className="mx-40 my-28">
                <h2 className="text-3xl py-4 text-[#D83A00] font-bold">Tech & Tools</h2>
                <h3 className="text-lg text-amber-50 font-medium">Languages & tools that I use to build my projects:</h3>
                <div className="flex flex-col gap-8 py-4">
                    <div className="flex gap-8 items-center">
                        <p className="text-lg text-[#D83A00]">Front-End:</p>
                        <ToolTipIcon icon={SiHtml5} label="HTML" />
                        <ToolTipIcon icon={SiCss3} label="CSS" />
                        <ToolTipIcon icon={SiJavascript} label="Javascript" />
                        <ToolTipIcon icon={SiReact} label="React" />
                        <ToolTipIcon icon={SiTailwindcss} label="Tailwindcss" />
                    </div>
                    <div className="flex gap-8 items-center">
                        <p className="text-lg text-[#D83A00]">Back-End:</p>
                        <ToolTipIcon icon={SiPhp} label="PHP" />
                        <ToolTipIcon icon={SiLaravel} label="Laravel" />
                    </div>
                    <div className="flex gap-8 items-center">
                        <p className="text-lg text-[#D83A00]">Design:</p>
                        <ToolTipIcon icon={SiFigma} label="Figma" />
                    </div>
                    <div className="flex gap-8 items-center">
                        <p className="text-lg text-[#D83A00]">Game-engines:</p>
                        <ToolTipIcon icon={SiUnity} label="Unity" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;