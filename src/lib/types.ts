export interface Experience {
	title?: string;
	company?: string;
	location?: string;
	startDate?: string;
	endDate?: string;
	description?: string;
}

export interface Education {
	degree?: string;
	institution?: string;
	location?: string;
	startDate?: string;
	endDate?: string;
	description?: string;
}

export interface Project {
	title?: string;
	link?: string;
	srcLink?: string;
	startDate?: string;
	endDate?: string;
	description?: string;
}

export interface Certification {
	title?: string;
	institution?: string;
	link?: string;
	date?: string;
}

export type ListableType = Project | Experience | Education | Certification;

export interface ResumeData {
	name?: string;
	email?: string;
	phone?: string;
	address?: string;
	summary?: string;
	skills?: string[];
	experiences?: Experience[];
	educations?: Education[];
	projects?: Project[];
	certifications?: Certification[];
}
