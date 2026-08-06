import Button from "@/components/UI/Button/Button";
import './NotFound.scss';
import { PATHS } from "@/constants/routes";
import useSEO from "@/hooks/useSEO";
import { useTranslation } from "react-i18next";

const NotFound = () => {
    const { t } = useTranslation();
    useSEO({
        title: t('pages.notFound.title'),
        description: t('pages.notFound.description'),
        keywords: t('pages.notFound.keywords'),
    });

    return (
        <main className="notFoundPage">
            <h1>{t('pages.notFound.heading')}</h1>
            <a href={PATHS.HOME}>
                <Button>{t('pages.notFound.goHome')}</Button>
            </a>
        </main>
    );
};

export default NotFound;