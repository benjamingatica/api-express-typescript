import { NewNoteEntry } from './types';

const parseContent = (content: any): string => {
	if (!content || typeof content !== 'string') throw new Error('Incorrect or missing content');

	return content;
};

const parseDate = (date: any): string => {
	if (!date || typeof date !== 'string' || !Date.parse(date)) throw new Error('Incorrect or missing date');

	return date;
};

const parseImportant = (important: any): boolean => {
	if (typeof important !== 'boolean') return false;

	return important;
};

export const toNewNoteEntry = (object: any): NewNoteEntry => {
	const newNote: NewNoteEntry = {
		content: parseContent(object.content),
		date: parseDate(object.date),
		important: parseImportant(object.important),
	};

	return newNote;
};

export const toUpdatedNoteEntry = (object: any): any => {
	const updatedNote: any = {};

	if (object.content) updatedNote.content = parseContent(object.content);
	if (object.important !== undefined && typeof object.important === 'boolean') updatedNote.important = object.important;
	console.log(updatedNote);
	return updatedNote;
};
