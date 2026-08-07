import { useTranslation } from "react-i18next";
import type Project from "@/types/Project";
import enProjects from "../data/locales/en/projects.json";
import esProjects from "../data/locales/es/projects.json";

export const useI18n = () => {
    const { t, i18n } = useTranslation(["translation", "projects", "education"]);

    const resolvedLanguage = (i18n.resolvedLanguage ?? i18n.language ?? "en").toLowerCase();
    const currentLang = resolvedLanguage.startsWith("en") ? "en" : "es";
    const defaultProjects = (currentLang === "en" ? enProjects : esProjects) as Project[];

    const rawProjects = t("projects", { ns: "projects", returnObjects: true }) as Project[];
    const projects: Project[] = Array.isArray(rawProjects) && rawProjects.length > 0
        ? rawProjects
        : defaultProjects;

    return {
        projects,
        t,
        i18n,
        language: i18n.language,
        changeLanguage: (lng: string) => i18n.changeLanguage(lng),
    };
};

export default useI18n;
