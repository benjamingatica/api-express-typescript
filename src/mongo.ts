import mongoose from 'mongoose';

const connectionString = String(process.env.MONGO_DB_URI);

console.log('connectionString: ', connectionString);

mongoose.connect(connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true,
})
	.then(() => {
		console.log('Database connected');
	})
	.catch((err) => {
		console.error(err);
	});

process.on('uncaughtException', (error) => {
	console.error(error);
	mongoose.disconnect();
});
