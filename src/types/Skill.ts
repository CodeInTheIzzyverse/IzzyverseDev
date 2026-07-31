import type { Category, SupportedLanguage } from "./Category";

export default interface Skill {
    name: string;
    slug: string;
    category: Category[];
    translations?: Partial<Record<SupportedLanguage, string>>;
}