import { PiGithubLogoFill } from "react-icons/pi";
import { FaEye } from "react-icons/fa";
import "./ProjectCard.styles.css";

const ProjectCard = (project) => {
    const { title, imgUrl, imgAlt, description, links, tags } = project.project;

    return (
        <article className="projects__container-project">
            <div className="project__img">
                <img src={imgUrl} alt={imgAlt} />
            </div>
            <div className="project__content">
                <h4 className="project__content-title">{title}</h4>
                <div className="project__content-tags">
                    {tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                    ))}
                </div>
                <p className="project__content-description">{description}</p>
                <div className="project__content-links">
                    <a href={links.gitHubUrl} aria-label="View GitHub project" className="repository">
                        <PiGithubLogoFill />
                        Repository
                    </a>
                    <a href={links.preview} aria-label="Preview the project">
                        <FaEye />
                        Preview
                    </a>
                </div>
            </div>
        </article>
    );
};
export default ProjectCard;
