import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard/ProjectCard";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import "./Projects.styles.css";

const Projects = () => {
    return (
        <SectionContainer title="Projects">
            <div className="projects__container">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </SectionContainer>
    );
};
export default Projects;
