import PrimaryButton from "./PrimaryButton.jsx";

function ProjectCard({ ProjectName, ProjectImage, Link, Description }) {
    return (
        <div className="flex flex-col overflow-hidden w-72 md:w-72 lg:w-72">

            {/* Image */}
            <div className="w-full aspect-4/3 overflow-hidden">
                <img
                    src={ProjectImage}
                    alt={ProjectName}
                    className="w-full h-full object-contain object-center transition-transform duration-300"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center gap-2 p-4 flex-1">

                {/* Titel */}
                <p className="text-xl text-amber-50 font-semibold text-center">
                    {ProjectName}
                </p>

                {/* Description met vaste hoogte */}
                <p className="text-xs text-amber-50 font-light text-center">
                    {Description}
                </p>

                {/* Button */}
                <PrimaryButton
                    to={Link}
                    className="w-fit self-center text-sm sm:text-base mt-auto"
                >
                    {`See more of ${ProjectName}`}
                </PrimaryButton>

            </div>
        </div>
    );
}

export default ProjectCard;