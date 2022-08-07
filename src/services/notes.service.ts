import Note from '../models/Note';

export const getNotes = async () => {
	return Note.find({});
};

export const getNote = async (id: string) => {
	return Note.findById(id);
};
