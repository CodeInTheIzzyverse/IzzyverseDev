import { useState, useMemo, type ReactNode } from "react";
import useI18n from "@/hooks/useI18n";
import ProjectContext from "./ProjectContext";

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
    const { projects } = useI18n();
    const [selectedSlug, setSelectedSlug] = useState<string>("");
    const [filter, setFilter] = useState<string>("All");
    const [searchTerm, setSearchTerm] = useState<string>("");

    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            const types = Array.isArray(project.type) ? project.type : [project.type];
            const matchesFilter =
                filter === "All" ||
                types.some((t) => t.toLowerCase() === filter.toLowerCase());

            const searchTerms = searchTerm
                .toLowerCase()
                .trim()
                .split(/\s+/)
                .filter(Boolean);

            const projectText = [project.name, ...project.weapons].join(' ').toLowerCase();

            const matchesSearch =
                searchTerms.length === 0 ||
                searchTerms.every((term) => projectText.includes(term));

            return matchesFilter && matchesSearch;
        });
    }, [projects, filter, searchTerm]);

    const activeSlug = useMemo(() => {
        if (selectedSlug && filteredProjects.some((p) => p.slug === selectedSlug)) {
            return selectedSlug;
        }
        return filteredProjects[0]?.slug || projects[0]?.slug || "";
    }, [selectedSlug, filteredProjects, projects]);

    const selectedProject = useMemo(() => {
        return projects.find((p) => p.slug === activeSlug) || projects[0] || null;
    }, [projects, activeSlug]);

    const otherProjects = useMemo(() => {
        if (!selectedProject) return filteredProjects;
        return filteredProjects.filter((p) => p.slug !== selectedProject.slug);
    }, [filteredProjects, selectedProject]);

    const selectProject = (slug: string) => {
        setSelectedSlug(slug);
    };

    const nextProject = () => {
        if (filteredProjects.length === 0) return;
        const currentIndex = filteredProjects.findIndex((p) => p.slug === activeSlug);
        const nextIndex = (currentIndex + 1) % filteredProjects.length;
        setSelectedSlug(filteredProjects[nextIndex].slug);
    };

    const prevProject = () => {
        if (filteredProjects.length === 0) return;
        const currentIndex = filteredProjects.findIndex((p) => p.slug === activeSlug);
        const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
        setSelectedSlug(filteredProjects[prevIndex].slug);
    };

    return (
        <ProjectContext.Provider
            value={{
                projects,
                filteredProjects,
                selectedProject,
                otherProjects,
                selectedSlug: activeSlug,
                filter,
                searchTerm,
                selectProject,
                nextProject,
                prevProject,
                setFilter,
                setSearchTerm,
            }}
        >
            {children}
        </ProjectContext.Provider>
    );
};

export default ProjectProvider;
