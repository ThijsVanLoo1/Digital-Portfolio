import {NavLink, Outlet} from "react-router";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import ScrollToTop from "./ScrollToTop.jsx";

function Layout() {
    return (
        <>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col">
                <header className="p-8">
                    <nav className="flex justify-end gap-6 mr-12">
                        <NavLink to="/" className={({ isActive }) =>
                            `text-xl font-bold transition-colors duration-200 hover:text-[#FB5012] ${isActive ? "text-[#FB5012]" : "text-amber-50"}`}>
                            Home
                        </NavLink>

                        <NavLink to="/about" className={({ isActive }) =>
                            `text-xl font-bold transition-colors duration-200 hover:text-[#FB5012] ${isActive ? "text-[#FB5012]" : "text-amber-50"}`}>
                            About me
                        </NavLink>

                        <NavLink to="/projects" className={({ isActive }) =>
                            `text-xl font-bold transition-colors duration-200 hover:text-[#FB5012] ${isActive ? "text-[#FB5012]" : "text-amber-50"}`}>
                            Projects
                        </NavLink>
                    </nav>
                </header>
                <main className="flex-1">
                    <Outlet />
                </main>
                <footer>
                    <div className="flex justify-between text-amber-50 ml-12">
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/ThijsVanLoo1"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub profiel"
                            >
                                <FaGithub className="text-3xl hover:text-gray-400 transition-colors" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/thijs-van-loo-9052353b7/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn profiel"
                            >
                                <FaLinkedin className="text-3xl hover:text-gray-400 transition-colors" />
                            </a>
                        </div>
                        <div className="flex justify-end gap-4 mr-12">
                            <NavLink to="/" className="text-amber-50 transition-colors duration-200 hover:text-[#FB5012]">
                                Home
                            </NavLink>

                            <NavLink to="/about" className="text-amber-50 transition-colors duration-200 hover:text-[#FB5012]">
                                About me
                            </NavLink>

                            <NavLink to="/projects" className="text-amber-50 transition-colors duration-200 hover:text-[#FB5012]">
                                Projects
                            </NavLink>
                        </div>
                    </div>
                    <div className="flex justify-center text-amber-50 p-4">
                        &copy; Thijs van Loo 2026
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Layout;