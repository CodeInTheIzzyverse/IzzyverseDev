import { useState, useMemo } from 'react';
import Button from '@/components/UI/Button/Button';
import './Projects.scss';
import useSEO from "@/hooks/useSEO";
import ProjectCard from '@/components/UI/Card/ProjectCard';
import useI18n from '@/hooks/useI18n';

const Projects = () => {
    const { projects, t } = useI18n();
    useSEO({
        title: t('pages.projects.title'),
        description: t('pages.projects.description'),
        keywords: t('pages.projects.keywords'),
    });
    const [activeFilter, setActiveFilter] = useState<string>('All');
    const [techSearch, setTechSearch] = useState<string>('');

    const getCategoryTranslation = (category: string) => {
        if (category === 'All') return t('common.all');
        return t(`common.${category.toLowerCase()}`, category);
    };

    // Automatically extract categories that have at least 1 project
    const availableCategories = useMemo(() => {
        const typesSet = new Set<string>();
        projects.forEach((project) => {
            const types = Array.isArray(project.type) ? project.type : [project.type];
            types.forEach((t) => typesSet.add(t));
        });
        return ['All', ...Array.from(typesSet)];
    }, [projects]);

    const filteredProjects = useMemo(() => {
        const searchTerms = techSearch
            .toLowerCase()
            .trim()
            .split(/\s+/)
            .filter(Boolean);

        return projects.filter((project) => {
            const types = Array.isArray(project.type) ? project.type : [project.type];
            const matchesCategory =
                activeFilter === 'All' ||
                types.some((t) => t.toLowerCase() === activeFilter.toLowerCase());

            const projectText = [project.name, ...project.weapons].join(' ').toLowerCase();
            const matchesTech =
                searchTerms.length === 0 ||
                searchTerms.every((term) => projectText.includes(term));

            return matchesCategory && matchesTech;
        });
    }, [projects, activeFilter, techSearch]);

    return (
        <main className="projectsPage">
            <section className="projectsPage__header">
                <article>
                    <h1>{t('pages.projects.header')}</h1>
                    <p>{t('pages.projects.subHeader')}</p>
                </article>

                <article className="projectsPage__options">
                    <div>
                        {availableCategories.map((cat) => (
                            <Button
                                key={cat}
                                variant="filter"
                                onClick={() => setActiveFilter(cat)}
                                className={activeFilter.toLowerCase() === cat.toLowerCase() ? 'active' : ''}
                            >
                                {getCategoryTranslation(cat)}
                            </Button>
                        ))}
                    </div>
                    <input
                        type="text"
                        placeholder={t('pages.projects.filterPlaceholder')}
                        value={techSearch}
                        onChange={(e) => setTechSearch(e.target.value)}
                    />
                </article>
            </section>

            {filteredProjects.length > 0 ? (
                <section className="projectsPage__grid">
                    {
                        filteredProjects.map((project) => (
                            <ProjectCard key={project.slug} {...project} />
                        ))
                    }
                </section>
            ) : (
                <p className='projectsPage__404'>{t('pages.projects.noProjects')}</p>
            )}
        </main>
    );
};

export default Projects;