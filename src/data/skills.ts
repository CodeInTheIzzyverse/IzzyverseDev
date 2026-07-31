import type Skill from "@/types/Skill";

const skills: Skill[] = [
	{
		name: "Android Studio",
		slug: "android-studio",
		category: ["mobile", "tool"],
	},
	{
		name: "Azure DevOps",
		slug: "azure-devops",
		category: ["tool"],
	},
	{
		name: "Vercel",
		slug: "vercel",
		category: ["deploy"],
	},
	{
		name: "Netlify",
		slug: "netlify",
		category: ["deploy"],
	},
	{
		name: "C#",
		slug: "csharp",
		category: ["backend"],
	},
	{
		name: "CSS",
		slug: "css",
		category: ["frontend"],
	},
	{
		name: "Docker",
		slug: "docker",
		category: ["deploy", "tool"],
	},
	{
		name: "GitHub",
		slug: "github",
		category: ["tool"],
	},
	{
		name: "HTML",
		slug: "html",
		category: ["frontend"],
	},
	{
		name: "JavaScript",
		slug: "javascript",
		category: ["frontend"],
	},
	{
		name: "Kotlin",
		slug: "kotlin",
		category: ["mobile", "backend"],
	},
	{
		name: "Kubernetes",
		slug: "kubernetes",
		category: ["deploy"],
	},
	{
		name: "Markdown",
		slug: "markdown",
		category: ["tool"],
	},
	{
		name: "MongoDB",
		slug: "mongodb",
		category: ["db"],
	},
	{
		name: "MySQL",
		slug: "mysql",
		category: ["db"],
	},
	{
		name: "n8n",
		slug: "n8n",
		category: ["tool"],
	},
	{
		name: "Node.js",
		slug: "nodejs",
		category: ["backend"],
	},
	{
		name: "PostgreSQL",
		slug: "postgresql",
		category: ["db"],
	},
	{
		name: "Postman",
		slug: "postman",
		category: ["tool"],
	},
	{
		name: "React",
		slug: "reactjs",
		category: ["frontend"],
	},
	{
		name: "Sass",
		slug: "sass",
		category: ["frontend"],
	},
	{
		name: "SonarCloud",
		slug: "sonarcloud",
		category: ["tool"],
	},
	{
		name: "Spring Boot",
		slug: "spring-boot",
		category: ["backend"],
	},
	{
		name: "Supabase",
		slug: "supabase",
		category: ["db", "deploy"],
	},
	{
		name: "Swagger",
		slug: "swagger",
		category: ["tool"],
	},
	{
		name: "TypeScript",
		slug: "typescript",
		category: ["frontend"],
	},
	{
		name: "Unity",
		slug: "unity",
		category: ["game dev"],
	},
	{
		name: "Java",
		slug: "java",
		category: ["backend"],
	},
	{
		name: "Render",
		slug: "render",
		category: ["deploy"],
	},
	{
		name: "Python",
		slug: "python",
		category: ["backend"],
	},
];

export const skillsBySlug = new Map(skills.map((skill) => [skill.slug, skill]));

export const resolveSkillsFromSlugs = (slugs: string[]) => {
	return slugs
		.map((slug) => skillsBySlug.get(slug))
		.filter((skill): skill is Skill => Boolean(skill));
};

export default skills;
