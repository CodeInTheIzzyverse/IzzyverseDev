import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "./src/data/locales/en/common.json";
import esCommon from "./src/data/locales/es/common.json";
import enProjects from "./src/data/locales/en/projects.json";
import esProjects from "./src/data/locales/es/projects.json";

const resources = {
	en: {
		translation: enCommon,
		projects: enProjects,
	},
	es: {
		translation: esCommon,
		projects: esProjects,
	},
};

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: "en",
		debug: false,
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;

