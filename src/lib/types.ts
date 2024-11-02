export type Experience  = {
	title?: string;
	company?: string;
	location?: string;
	startDate?: string;
	endDate?: string;
	description?: string;
}

export type Education = {
	degree?: string;
	institution?: string;
	location?: string;
	startDate?: string;
	endDate?: string;
	description?: string;
}

export type Project = {
	name?: string;
	link?: string;
	srcLink?: string;
	startDate?: string;
	endDate?: string;
	description?: string;
	technologies?: string[];
}

export type Certification = {
	name?: string;
	institution?: string;
	link?: string;
	date?: string;
}

export type Skill = {
	name?: string;
	expertise?: string;
}

export type ListableType = Project | Experience | Education | Certification | Skill;

export type ResumeData = {
	name?: string;
	email?: string;
	phone?: string;
	address?: string;
	summary?: string;
	skills?: Skill[];
	experiences?: Experience[];
	educations?: Education[];
	projects?: Project[];
	certifications?: Certification[];
}
