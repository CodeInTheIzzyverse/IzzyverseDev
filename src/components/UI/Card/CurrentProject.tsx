import type Project from "@/types/Project";
import Button from "../Button/Button";
import { resolveSkillsFromSlugs } from "@/data/skills";
import './CurrentProject.scss';
import { Link } from "react-router-dom";

const normalizeLinks = (value: string | string[] | undefined) => {
    if (!value) return [];

    return (Array.isArray(value) ? value : [value]).filter(Boolean);
};

const CurrentProject = (project: Project) => {
    const liveLinks = normalizeLinks(project.live);
    const githubLinks = normalizeLinks(project.github);
    const weapons = resolveSkillsFromSlugs(project.weapons);

    return (
        <div className="currentProject">
            <img src={`/projects/${project.slug}.png`} alt={`${project.name} screenshot`} />
            <div className="projectSelectorCard__body">
                <div className="projectSelectorCard__weapons">
                    {
                        weapons.map((weapon) => (
                            <span key={`${project.slug}-${weapon.slug}`}>{weapon.name}</span>
                        ))
                    }
                </div>
                <h3>{project.name}</h3>
                <p>// {project.description}</p>
                <div className="projectSelectorCard__buttons">
                    {liveLinks.map((link, index) => (
                        <Link key={`live-${project.slug}-${index}`} to={link} target="_blank" rel="noopener noreferrer">
                            <Button>Live demo</Button>
                        </Link>
                    ))}

                    {githubLinks.map((link, index) => (
                        <Link key={`github-${project.slug}-${index}`} to={link} target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary" className="github">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
                                </svg>
                            </Button>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CurrentProject;