import 'dotenv/config';
import app from './app';
import './mongo';

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
});
