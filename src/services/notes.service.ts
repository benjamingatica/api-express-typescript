import Note from '../models/Note';
import { NewNoteEntry } from '../types';

export const getNotes = async () => {
	return Note.find({});
};

export const getNote = async (id: string) => {
	return Note.findById(id);
};

export const saveNote = async (newNoteEntry: NewNoteEntry) => {
	const newNote = new Note({...newNoteEntry});

	return newNote.save();
};

export const updateNote = async (id: string, updateNote: any) => {
	return Note.findByIdAndUpdate(id, updateNote, { new: true });
};

export const deleteNote = async (id: string) => {
	return Note.findByIdAndDelete(id);
};
