export type Category = 'frontend' | 'backend' | 'game dev' | 'mobile' | 'db' | 'deploy' | 'tool';

export type SupportedLanguage = 'en' | 'es';

export const CATEGORY_LABELS: Record<Category, Record<SupportedLanguage, string>> = {
    frontend: {
        en: 'Frontend',
        es: 'Frontend'
    },
    backend: {
        en: 'Backend',
        es: 'Backend'
    },
    'game dev': {
        en: 'Game Dev',
        es: 'Desarrollo de videojuegos'
    },
    mobile: {
        en: 'Mobile',
        es: 'Móvil'
    },
    db: {
        en: 'Database',
        es: 'Base de datos'
    },
    deploy: {
        en: 'Deploy',
        es: 'Despliegue'
    },
    tool: {
        en: 'Tool',
        es: 'Herramienta'
    }
};

export const getCategoryLabel = (category: Category, language: SupportedLanguage = 'en') => {
    return CATEGORY_LABELS[category][language];
};