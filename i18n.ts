import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "./src/data/locales/en/common.json";
import esCommon from "./src/data/locales/es/common.json";
import enProjects from "./src/data/locales/en/projects.json";
import esProjects from "./src/data/locales/es/projects.json";
import enEducation from "./src/data/locales/en/education.json";
import esEducation from "./src/data/locales/es/education.json";

const resources = {
	en: {
		translation: enCommon,
		projects: enProjects,
		education: enEducation,
	},
	es: {
		translation: esCommon,
		projects: esProjects,
		education: esEducation,
	},
};

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		supportedLngs: ["en", "es"],
		fallbackLng: "en",
		load: "languageOnly",
		debug: false,
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;

