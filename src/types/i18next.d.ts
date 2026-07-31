import "react-i18next";
import common from "../data/locales/es/common.json";
import projects from "../data/locales/es/projects.json";

declare module "react-i18next" {
	interface CustomTypeOptions {
		defaultNS: "common";
		resources: {
			common: typeof common;
			projects: typeof projects;
		};
	}
}


