import './ProjectSelectorCard.scss';
import type Project from "@/types/Project";
import { resolveSkillsFromSlugs } from "@/data/skills";

interface ProjectSelectorCardProps extends Project {
    onClick?: () => void;
}

const ProjectSelectorCard = ({ onClick, ...project }: ProjectSelectorCardProps) => {
    const weapons = resolveSkillsFromSlugs(project.weapons);

    return (
        <div className="projectSelectorCard" onClick={onClick}>
            <img src={`/projects/${project.slug}.png`} alt={`${project.name} screenshot`} />
            <div>
                <h4>{project.name}</h4>
                <p className="projectSelectorCard__weapons">
                    {
                        weapons.map((weapon) => (
                            <span key={`${project.slug}-${weapon.slug}`}>{weapon.name}</span>
                        ))
                    }
                </p>
            </div>
        </div>
    )
}

export default ProjectSelectorCard;