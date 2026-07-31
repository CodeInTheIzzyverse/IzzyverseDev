import type { ProjectType } from "./ProjectType";

export default interface Project {
    name: string;
    slug: string;
    description: string;
    mission: string;
    weapons: string[];
    type: ProjectType | ProjectType[];
    live: string | string[];
    github: string | string[];
}