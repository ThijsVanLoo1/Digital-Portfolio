import { projects } from "../data/projects";
import Project from "../components/Project";
import {FaGithub} from "react-icons/fa";

function ProjectsPage() {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-8">
                {projects.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </div>
            <div className="flex justify-center items-center gap-4 text-amber-50 p-20">
                <h3 className="text-xl">See more of my code snippets on Github!</h3>
                <a
                    href="https://github.com/ThijsVanLoo1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profiel"
                >
                    <FaGithub className="text-4xl hover:text-gray-400 transition-colors" />
                </a>
            </div>
        </div>
    );
}

export default ProjectsPage;