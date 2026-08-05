export interface Education {
    institution: string;
    endDate: string;
    slug: string[];
}

export interface Core extends Education {
    degree: string;
    level: string;
    startDate: string;
}

export interface Course extends Education {
    name: string;
    content: string;
}