import { createHashRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/ProjectsPage.jsx";
import ProjectsDetailPage from "./pages/ProjectsDetailPage.jsx";

const router = createHashRouter([
    {
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "about", element: <About /> },
            { path: "projects", element: <Projects /> },
            { path: "projects/:slug", element: <ProjectsDetailPage /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
