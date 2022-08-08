import express from 'express';
import * as notesService from '../services/notes.service';
import { toNewNoteEntry } from '../utils';

const router = express.Router();

router.get('/', async (_req, res) => {
	try {
		const notes = await notesService.getNotes();
		res.status(200).send(notes);
	} catch (error) {
		res.status(400).send(
			error instanceof Error ? error.message : 	'Unexpected error ' + error
		);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const note = await notesService.getNote(id);

		if (!note) {
			return next();
		}

		res.status(200).send(note);
	} catch (error) {
		res.status(400).send(
			error instanceof Error ? error.message : 	'Unexpected error ' + error
		);
	}
});

router.post('/', async (req, res) => {
	try {
		const newNoteEntry = toNewNoteEntry(req.body);

		const saveNote = await notesService.saveNote(newNoteEntry);

		res.status(201).send(saveNote);
	} catch (error) {
		res.status(400).send(
			error instanceof Error ? error.message : 	'Unexpected error ' + error
		);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;

		await notesService.deleteNote(id);

		res.status(204).end();
	} catch (error) {
		res.status(400).send(
			error instanceof Error ? error.message : 	'Unexpected error ' + error
		);
	}
});

export default router;

router.put('/:id', );
