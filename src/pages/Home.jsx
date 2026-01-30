import profilePic from "../assets/profile-picture.png";
import PrimaryButton from "../components/PrimaryButton.jsx";

function Home() {
    return(
        <div className="flex justify-around items-center mt-12">
            <div className="block w-1/3">
                <h1 className="text-[#D83A00] text-6xl font-bold py-2">Thijs van Loo</h1>
                <h2 className="text-[#D83A00] text-3xl py-2">Creative Developer</h2>
                <p className="text-amber-50 text-base py-4">Welcome to my portfolio:
                    a collection of projects and ideas where creativity is tested by boundaries
                    and learning happens along the way.</p>
                <div className="flex gap-8 py-4">
                    <PrimaryButton to="/about">About me</PrimaryButton>
                    <PrimaryButton to="/projects">My work</PrimaryButton>
                </div>
            </div>
            <img className="w-1/5 rounded-full" src={profilePic} alt="Picture of me" />
        </div>
    )
}

export default Home;