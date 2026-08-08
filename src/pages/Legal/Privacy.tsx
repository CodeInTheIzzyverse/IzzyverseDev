import useSEO from "@/hooks/useSEO";
import { useTranslation } from "react-i18next";
import './Privacy.scss';

const Privacy = () => {
    const { t } = useTranslation();
    useSEO({
        title: t('pages.legal.title'),
        description: t('pages.legal.description'),
        keywords: t('pages.legal.keywords'),
    });

    return (
        <main className="privacyPage">
            <section className="privacyPage__header">
                <h1>{t('pages.legal.header')}</h1>
                <p>{t('pages.legal.subHeader')}</p>
            </section>

            <section className="privacyPage__list">
                <article>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91c4.59-1.15 8-5.86 8-10.91V5zm6 9.09c0 4-2.55 7.7-6 8.83c-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25l6 2.25z" />
                    </svg>
                    <div>
                        <h2>{t('pages.legal.dataEncryptionTitle')}</h2>
                        <p>{t('pages.legal.dataEncryptionDesc')}</p>
                    </div>
                </article>

                <article>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" d="M12 6.5a9.77 9.77 0 0 1 8.82 5.5c-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12A9.77 9.77 0 0 1 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5m0 5a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0-5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5" />
                    </svg>
                    <div>
                        <h2>{t('pages.legal.zeroTrackingTitle')}</h2>
                        <p>{t('pages.legal.zeroTrackingDesc')}</p>
                    </div>
                </article>

                <article>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2M9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9zm9 14H6V10h12zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2" />
                    </svg>
                    <div>
                        <h2>{t('pages.legal.accessControlTitle')}</h2>
                        <p>{t('pages.legal.accessControlDesc')}</p>
                    </div>
                </article>

                <article>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm4 18H6V4h7v5h5z" />
                    </svg>
                    <div>
                        <h2>{t('pages.legal.complianceTitle')}</h2>
                        <p>{t('pages.legal.complianceDesc')}</p>
                    </div>
                </article>
            </section>
        </main>
    );
};

export default Privacy;