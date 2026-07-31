import { PATHS } from '@/constants/routes';
import { SOCIAL } from '@/constants/social';
import useSEO from '@/hooks/useSEO';
import type { ReactElement } from 'react';
import './Links.scss';
import { useTranslation } from 'react-i18next';

interface LinkItem {
    label: string;
    href: string;
    icon: ReactElement;
    variant?: 'primary' | 'secondary';
}

const linkItems: LinkItem[] = [
    {
        label: 'WhatsApp',
        href: SOCIAL.whatsapp,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path fill="currentColor" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.2 8.2 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18s.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01" />
            </svg>
        ),
        variant: 'primary'
    },
    {
        label: 'Email',
        href: `mailto:${SOCIAL.email}`,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path fill="currentColor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" />
            </svg>
        )
    },
    {
        label: 'Website',
        href: PATHS.HOME,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path fill="currentColor" d="M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.7 15.7 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" />
            </svg>
        ),
        variant: 'secondary'
    },
    {
        label: 'GitHub',
        href: SOCIAL.github,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
            </svg>
        ),
        variant: 'secondary'
    },
    {
        label: 'GitHub UdeA',
        href: SOCIAL.universityGithub,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
            </svg>
        ),
        variant: 'secondary'
    },
    {
        label: 'Instagram',
        href: SOCIAL.instagram,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
            </svg>
        )
    },
    {
        label: 'Facebook',
        href: SOCIAL.facebook,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path fill="currentColor" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02" />
            </svg>
        )
    },
    {
        label: 'YouTube',
        href: SOCIAL.youtube,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path fill="currentColor" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73" />
            </svg>
        )
    },
    {
        label: 'Discord',
        href: SOCIAL.discord,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path fill="currentColor" d="M19.27 5.33A17.2 17.2 0 0 0 15.65 4l-.2.4c1.31.39 2.43.94 3.47 1.6a13.5 13.5 0 0 0-10.2 0c1.04-.66 2.16-1.21 3.47-1.6l-.2-.4a17.2 17.2 0 0 0-3.62 1.33C3.82 9.56 3.2 13.53 3.58 17.39a17.7 17.7 0 0 0 5.48 2.76l.43-.57a14.5 14.5 0 0 1-2.45-1.19l.2-.15c.1.07.2.14.3.2a14.1 14.1 0 0 0 10.11 0c.1-.06.2-.13.3-.2l.2.15a14.5 14.5 0 0 1-2.45 1.19l.43.57a17.7 17.7 0 0 0 5.48-2.76c.42-3.86-.24-7.83-2.56-12.06M8.9 15.27c-1.05 0-1.91-.96-1.91-2.14s.84-2.14 1.91-2.14c1.08 0 1.93.97 1.92 2.14s-.84 2.14-1.92 2.14m6.2 0c-1.05 0-1.91-.96-1.91-2.14s.84-2.14 1.91-2.14c1.08 0 1.93.97 1.92 2.14s-.84 2.14-1.92 2.14" />
            </svg>
        )
    },
    {
        label: 'Donar',
        href: SOCIAL.kofi,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
                <path d="M0 0h512v512H0z" fill="none" />
                <path fill="currentColor" d="M204.7 461.3c-74.5 0-135.1-33.4-170.6-93.9C2.5 314.3 0 256.9 0 192.7c0-38 11.5-71.2 33.1-95.8C53 74.3 81.2 59.6 112.5 55.6c37.2-4.7 83.3-5.1 131.4-5.1c78.2 0 100.3.9 131 4.1c41 4.1 75.3 19.4 99.6 44.2c24.5 25.2 37.6 58.9 37.6 97.4v7.7c0 65.8-44 120.8-105.2 135.8c-4.6 10.7-10.2 21.5-16.9 32.1l-.2.3c-21.6 33.4-72.3 89.3-169.5 89.3z" />
                <path fill="#ff5a16" d="M116.1 223.7c0 28.6 16 53.2 36.3 72.6c13.6 13.1 34.9 26.7 49.4 35.4c4.4 2.4 8.7 3.9 13.6 3.9c5.8 0 10.6-1.4 14.5-3.9c14.5-8.7 35.8-22.3 48.9-35.4c20.8-19.4 36.8-44 36.8-72.6c0-31-23.2-58.6-56.7-58.6c-19.9 0-33.4 10.1-43.6 24.2c-9.2-14-23.2-24.2-43.1-24.2c-33.8 0-56.1 27.6-56.1 58.6" />
            </svg>
        ),
        variant: 'secondary'
    }
];

const Links = () => {
    const { t } = useTranslation();
    useSEO({
        title: t('pages.links.title'),
        description: t('pages.links.description'),
        keywords: t('pages.links.keywords'),
    });

    return (
        <main className="linksPage">
            <section className="linksPage__card">
                <div className="linksPage__brand">
                    <img src="/Logotype.png" alt="" />
                    <p>{t('pages.links.tagline')}</p>
                </div>

                <div className="linksPage__actions">
                    {linkItems.map((item) => {
                        const isInternal = item.href === PATHS.HOME;

                        return (
                            <a
                                key={item.label}
                                className={`linksPage__action linksPage__action--${item.variant ?? 'primary'}`}
                                href={item.href}
                                target={isInternal ? undefined : '_blank'}
                                rel={isInternal ? undefined : 'noreferrer'}
                            >
                                <span className="linksPage__action-icon">{item.icon}</span>
                                <span>{item.label}</span>
                            </a>
                        );
                    })}
                </div>
            </section>
        </main>
    );
};

export default Links;
