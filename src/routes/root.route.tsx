import { Outlet, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavComponent/nav.components";
import HomePage from "./HomePage/home.route";
import AboutPage from "./AboutPage/about.route";
import ProjectsPage from "./ProjectsPage/projects.route";
import ContactPage from "./ContactPage/contact.route";

export default function Root() {
    return (
        <>
            <NavBar />
            <Outlet />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </>
    );
}