import { createContext } from "react";
import type Project from "@/types/Project";

export interface ProjectContextType {
    projects: Project[];
    filteredProjects: Project[];
    selectedProject: Project | null;
    otherProjects: Project[];
    selectedSlug: string;
    filter: string;
    searchTerm: string;
    selectProject: (slug: string) => void;
    nextProject: () => void;
    prevProject: () => void;
    setFilter: (filter: string) => void;
    setSearchTerm: (term: string) => void;
}

export const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export default ProjectContext;
