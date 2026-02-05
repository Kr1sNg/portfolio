import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import contactRoute from './routes/contact.js';

dotenv.config({ path: "backend/.env" });
const app = express();
app.use(express.static('frontend'));

app.use(express.json());
app.use('/api/contact', contactRoute);

const PORT = process.env.PORT || 3000;
connectDB().then(() => {
	app.listen(PORT, () => {
		console.log(`Server running on port ${PORT}`);
	});
});
