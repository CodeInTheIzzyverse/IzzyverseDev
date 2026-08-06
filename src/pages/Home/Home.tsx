import { useState, useMemo } from 'react';
import Badge from '@/components/UI/Badge/Badge';
import './Home.scss';
import useSEO from "@/hooks/useSEO";
import Button from '@/components/UI/Button/Button';
import { PATHS } from '@/constants/routes';
import { Link } from 'react-router-dom';
import CurrentProject from '@/components/UI/Card/CurrentProject';
import ProjectSelectorCard from '@/components/UI/Card/ProjectSelectorCard';
import ProjectProvider from '@/context/ProjectProvider';
import { useProjects } from '@/hooks/useProjects';
import skills from '@/data/skills';
import { CATEGORY_LABELS, type Category, getCategoryLabel, type SupportedLanguage } from '@/types/Category';
import type { Core, Course } from '@/types/Education';
import useI18n from '@/hooks/useI18n';
import { SOCIAL } from '@/constants/social';
import PDFViewer from '@/components/UI/Viewer/PDFViewer';
import AcademyCard from '@/components/UI/Card/AcademyCard';
import CertificationCard from '@/components/UI/Card/CertificationCard';
import EducationModal from '@/components/UI/Modal/EducationModal';

const HomeContent = () => {
    const { language, t } = useI18n();
    const lang: SupportedLanguage = language?.startsWith('es') ? 'es' : 'en';
    const [activePdfSlug, setActivePdfSlug] = useState<string | null>(null);
    const [modalState, setModalState] = useState<{ title: string; slug: string[] } | null>(null);

    const coreEducation = useMemo(() => {
        const rawCore = t('core', { ns: 'education', returnObjects: true }) as Core[];
        return Array.isArray(rawCore) ? rawCore : [];
    }, [t]);

    const certificationEducation = useMemo(() => {
        const rawCourses = t('courses', { ns: 'education', returnObjects: true }) as Course[];
        return Array.isArray(rawCourses) ? rawCourses : [];
    }, [t]);

    const openPdf = (slug: string) => {
        setActivePdfSlug(slug);
        setModalState(null);
    };

    const openEducationSelection = (title: string, slug: string[]) => {
        if (slug.length === 1) {
            openPdf(slug[0]);
            return;
        }

        setModalState({ title, slug });
    };

    useSEO({
        title: t('pages.home.title'),
        description: t('pages.home.description'),
        keywords: t('pages.home.keywords'),
    });

    const {
        projects,
        selectedProject,
        otherProjects,
        selectProject,
        nextProject,
        prevProject,
        filter,
        setFilter,
        searchTerm,
        setSearchTerm,
    } = useProjects();

    const projectCategories = useMemo(() => {
        const typesSet = new Set<string>();
        projects.forEach((p) => {
            const types = Array.isArray(p.type) ? p.type : [p.type];
            types.forEach((t) => typesSet.add(t));
        });
        return ['All', ...Array.from(typesSet)];
    }, [projects]);

    const getCategoryTranslation = (category: string) => {
        if (category === 'All') return t('common.all');
        return t(`common.${category.toLowerCase()}`, category);
    };

    const skillCategories = useMemo<(Category | 'all')[]>(() => {
        return ['all', ...(Object.keys(CATEGORY_LABELS) as Category[])];
    }, []);

    const [activeSkillCategory, setActiveSkillCategory] = useState<Category | 'all'>('all');

    const filteredSkills = useMemo(() => {
        if (activeSkillCategory === 'all') return skills;
        return skills.filter((skill) => skill.category.includes(activeSkillCategory));
    }, [activeSkillCategory]);

    return (
        <main className="homePage">
            <section className='homePage__hero'>
                <div className='homePage__hero-content'>
                    <Badge>{t('pages.home.badge')}</Badge>
                    <h1>{t('pages.home.brandName')}</h1>
                    <h2>{t('pages.home.headline')}</h2>

                    <article className='homePage__hero-buttons'>
                        <Link to={PATHS.PROJECTS}>
                            <Button>{t('pages.home.viewProjects')}</Button>
                        </Link>
                        <Link to={PATHS.CONTACT}>
                            <Button variant='secondary'>{t('pages.home.contact')}</Button>
                        </Link>
                    </article>
                </div>

                <div className='homePage__hero-img'>
                    <img src="/banner.png" alt="IzzyverseDev" />
                </div>
            </section>

            <section className='homePage__about'>
                <span>{t('pages.home.missionProtocol')}</span>

                <article className='homePage__about-content'>
                    <p>{t('pages.home.about')}</p>
                    <div>
                        <span>{t('pages.home.goalTag')}</span> <span>{t('pages.home.hpTag')}</span>
                    </div>
                </article>
            </section>

            <section className='homePage__projects'>
                <article className='homePage__projects-header'>
                    <h2>{t('pages.home.projectSelector')}</h2>
                    <p>{t('pages.home.projectSelectorSub')}</p>
                </article>

                <article className='homePage__projects-options'>
                    <div className='homePage__projects-filters'>
                        <p><span></span> {t('pages.home.activeProjectSelector')}</p>
                        <div>
                            {projectCategories.map((cat) => (
                                <Button
                                    key={cat}
                                    variant='filter'
                                    onClick={() => setFilter(cat)}
                                    className={filter.toLowerCase() === cat.toLowerCase() ? 'active' : ''}
                                >
                                    {getCategoryTranslation(cat)}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div className='homePage__projects-search'>
                        <input
                            type="text"
                            placeholder={t('pages.home.searchPlaceholder')}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Button variant='secondary' onClick={prevProject}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="currentColor" d="m14 7l-5 5l5 5z" />
                            </svg>
                        </Button>
                        <Button variant='secondary' onClick={nextProject}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="currentColor" d="m10 17l5-5l-5-5z" />
                            </svg>
                        </Button>
                    </div>
                </article>

                <article className='homePage__projects-content'>
                    {selectedProject && <CurrentProject {...selectedProject} />}

                    <aside>
                        <div className="homePage__projects-mission">
                            <h3>{t('pages.home.missionIntel')}</h3>
                            <p>{selectedProject?.mission}</p>
                        </div>

                        {otherProjects.length > 0 && <h3>{t('pages.home.activeDatabase')}</h3>}

                        <div className="homePage__projects-db">
                            {otherProjects.map((project) => (
                                <ProjectSelectorCard
                                    key={project.slug}
                                    {...project}
                                    onClick={() => selectProject(project.slug)}
                                />
                            ))}
                        </div>
                    </aside>
                </article>
            </section>

            <section className='homePage__skills'>
                <article className='homePage__skills-header'>
                    <h2>{t('pages.home.skillsTree')}</h2>
                    <p>{t('pages.home.skillsDesc')}</p>
                </article>

                <article className='homePage__skills-content'>
                    <div className='homePage__skills-options'>
                        <div>
                            <span>{t('pages.home.systemCapabilities')}</span>
                            <h3>{t('pages.home.skillInventory')}</h3>
                        </div>

                        <div className='homePage__skills-filters'>
                            {skillCategories.map((cat) => {
                                const label = cat === 'all'
                                    ? t('pages.home.skillAll')
                                    : getCategoryLabel(cat, lang);
                                return (
                                    <Button
                                        key={cat}
                                        variant='filter'
                                        onClick={() => setActiveSkillCategory(cat)}
                                        className={activeSkillCategory === cat ? 'active' : ''}
                                    >
                                        {label}
                                    </Button>
                                );
                            })}
                        </div>
                    </div>

                    <div className='homePage__skills-body'>
                        {filteredSkills.map((skill) => (
                            <div key={skill.slug} className="skill" title={skill.name}>
                                <img src={`/skills/${skill.slug}.png`} alt={`${skill.name} logo`} />
                                <span className="skill__name">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </article>
            </section>

            <section className='homePage__education'>
                <article className='homePage__education-header'>
                    <h2>{t('pages.home.educationTitle')}</h2>
                </article>

                <article className='homePage__education-content'>
                    <div className='homePage__education-core'>
                        <span>{t('common.coreAcademy')}</span>

                        <div className='homePage__education-list'>
                            {coreEducation.map((item) => (
                                <AcademyCard
                                    key={`${item.institution}-${item.degree}-${item.startDate}`}
                                    {...item}
                                    onOpen={() => openEducationSelection(item.degree, item.slug)}
                                />
                            ))}
                        </div>
                    </div>

                    <aside className='homePage__education-certifications'>
                        <span>{t('common.certificationLogs')}</span>

                        <div className='homePage__education-list'>
                            {certificationEducation.map((item) => (
                                <CertificationCard
                                    key={`${item.institution}-${item.name}-${item.endDate}`}
                                    {...item}
                                    onOpen={() => openEducationSelection(item.name, item.slug)}
                                />
                            ))}
                        </div>
                    </aside>
                </article>

                {activePdfSlug && (
                    <PDFViewer
                        slug={activePdfSlug}
                        onClose={() => setActivePdfSlug(null)}
                    />
                )}
                {modalState && (
                    <EducationModal
                        title={modalState.title}
                        slug={modalState.slug}
                        onClose={() => setModalState(null)}
                        onSelect={(selectedSlug) => openPdf(selectedSlug)}
                    />
                )}
            </section>

            <section className='homePage__side'>
                <article className='homePage__side-quests'>
                    <h3>{t('pages.home.sideQuests')}</h3>

                    <div className='homePage__side-grid'>
                        <div>🎮 {t('pages.home.gaming')}</div>
                        <div>🎬 {t('pages.home.movies')}</div>
                        <div>📚 {t('pages.home.learning')}</div>
                        <div>💻 {t('pages.home.coding')}</div>
                        <div>🧩 {t('pages.home.puzzles')}</div>
                    </div>
                </article>

                <article className='homePage__side-music'>
                    <span>Eurowave Nights</span>
                    <h3>Late_Passenger</h3>
                    <p>{t('pages.home.musicDesc')}</p>
                    <a href={SOCIAL.latepassenger} target='_blank' rel='noopener noreferrer'>
                        <Button variant='tertiary'>{t('pages.home.hearMusic')}</Button>
                    </a>
                </article>

                <article className='homePage__side-tech'>
                    <span>{t('pages.home.techBrand')}</span>
                    <h3>{t('pages.home.techTitle')}</h3>
                    <p>{t('pages.home.techDesc')}</p>
                    <a href={SOCIAL.izzyversetech} target='_blank' rel='noopener noreferrer'>
                        <Button variant='tertiary'>{t('pages.home.techPortfolio')}</Button>
                    </a>
                </article>
            </section>
        </main>
    );
};

const Home = () => {
    return (
        <ProjectProvider>
            <HomeContent />
        </ProjectProvider>
    );
};

export default Home;