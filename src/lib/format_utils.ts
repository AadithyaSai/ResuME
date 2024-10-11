import { ResumeData, ListableType } from './types';

function markdownToTex(markdown: string): string {
	// Match bold text
	markdown = markdown.replace(/\*\*(.*?)\*\*/g, '\\textbf{$1}');
	// Match italic text
	markdown = markdown.replace(/\*(.*?)\*/g, '\\textit{$1}');
	// Convert links
	markdown = markdown.replace(/\[(.*?)\]\((.*?)\)/g, '\\href{$2}{$1}');

	return markdown;
}

function format(template: string, key: string, val: string | ListableType[]): string {
	if (Array.isArray(val)) {
		const innerTemplate = template.match(RegExp(`#${key}\\s*\\[(.*)\\]`, 's'));
		if (!innerTemplate) {
			return template;
		}
		let formatted = '';
		for (const item of val) {
			formatted += innerTemplate[1].replace(/#(\w+)/g, (match, p1) => {
				return format(match, p1, item[p1 as keyof ListableType]);
			});
		}
		return template.replace(innerTemplate[0], formatted);
	}
	return template.replaceAll(`#${key}`, markdownToTex(val));
}
