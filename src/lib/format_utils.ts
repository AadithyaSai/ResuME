import type { ListableType, ResumeData } from './types';

// Convert markdown to LaTeX
function markdownToTex(markdown: string): string {
	// Match bold text
	markdown = markdown.replace(/\*\*(.*?)\*\*/g, '\\textbf{$1}');
	// Match italic text
	markdown = markdown.replace(/\*(.*?)\*/g, '\\textit{$1}');
	// Convert links
	markdown = markdown.replace(/\[(.*?)\]\((.*?)\)/g, '\\href{$2}{$1}');

	return markdown;
}

// Get next non-whitespace character
function lookahead(str: string, offset: number, target: string): boolean {
	let i = offset;
	while (/\s/.test(str[i])) {
		i++;
	}
	return str[i] === target;
}

// Implement a simple templating engine
function formatTex(template: string, data: ResumeData) {
	const stack = [data];
	let level = 0;
	let output = '';
	let key = '';
	let i = 0;

	while (i < template.length) {
		const char = template[i];
		const next = template[i + 1];

		if (char === '{' && next === '{') {
			level++;
			i += 2;
			key = '';
		} else if (char === '}' && next === '}') {
			level--;
			i += 2;
			const value = key.split('.').reduce((acc, key) => acc[key], stack[level]);
			output += value;
		} else if (level > 0) {
			key += char;
			i++;
		} else {
			output += char;
			i++;
		}
	}
}
