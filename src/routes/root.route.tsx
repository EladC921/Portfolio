import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavComponent/nav.component";
import HomePage from "./HomePage/home.route";
import AboutPage from "./AboutPage/about.route";
import ProjectsPage from "./ProjectsPage/projects.route";
import ContactPage from "./ContactPage/contact.route";
import Footer from "../components/FooterComponent/footer.component";

export default function Root() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Footer />
        </>
    );
}