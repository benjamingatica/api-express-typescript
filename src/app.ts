import express from 'express';
import notesRouter from './controllers/notes.controller';
import notFound from './middleware/notFound';

const app = express();
app.use(express.json());

app.get('/ping', (_req, res) => {
	console.log('someone pinged here!!');
	res.send('pooong');
});

app.use('/api/notes', notesRouter);

app.use(notFound);

export default app;
