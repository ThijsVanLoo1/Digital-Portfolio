import profilePic from "../assets/profile-picture.png";
import PrimaryButton from "../components/PrimaryButton.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import novaraHealth from "../assets/novaraHealth.png";
import { projects } from "../data/projects";

function Home() {
    return (
        <>
            <section className="px-6 md:px-12 lg:px-20 mt-16 p-12">
                <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">

                    {/* Text */}
                    <div className="w-full md:w-1/2 text-center md:text-left">

                        <h1 className="text-[#D83A00] text-4xl md:text-6xl font-bold py-2">
                            Thijs van Loo
                        </h1>

                        <h2 className="text-[#D83A00] text-xl md:text-3xl py-2">
                            Creative Developer
                        </h2>

                        <p className="text-amber-50 text-base md:text-lg py-4 max-w-lg mx-auto md:mx-0">
                            Welcome to my portfolio: a collection of projects and ideas where
                            creativity is tested by boundaries and learning happens along the way.
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-6 py-4">
                            <PrimaryButton to="/about">About me</PrimaryButton>
                            <PrimaryButton to="/projects">My work</PrimaryButton>
                        </div>

                    </div>

                    {/* Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            className="w-40 sm:w-56 md:w-72 rounded-full"
                            src={profilePic}
                            alt="Picture of me"
                        />
                    </div>

                </div>
            </section>
            <section className="my-8 px-6 md:px-12 lg:px-20 pt-8">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-[#D83A00] text-3xl font-semibold mb-4 text-center md:text-left">
                        About me
                    </h3>
                    <p className="text-amber-50 text-base md:text-left text-center max-w-lg mx-auto md:mx-0">
                        I'm a Creative Media & Game Technologies student at
                        Rotterdam University of Applied Sciences with a focus
                        on interactive development and web technologies.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start">
                        <PrimaryButton className="my-4 " to="/about">Read more</PrimaryButton>
                    </div>
                </div>
            </section>
            <section className="my-8 px-6 md:px-12 lg:px-20 pt-8">
                <div className="max-w-6xl mx-auto">
                    <h4 className="text-[#D83A00] text-3xl font-semibold mb-8 text-center md:text-left">
                        Featured Projects
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                        {projects
                            .filter(project =>
                                ["novarahealth", "scale", "natuurtocht"].includes(project.slug)
                            )
                            .map(project => (
                                <ProjectCard
                                    key={project.slug}
                                    ProjectName={project.title}
                                    ProjectImage={project.image}
                                    Link={`/projects/${project.slug}`}
                                    Description={project.description}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;