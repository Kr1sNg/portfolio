import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

router.post('/', async (req, res) => {
	try {
		const { name, email, phone, message } = req.body;
		const contact = new Contact({ name, email, phone, message });

		const newContact = await contact.save();
		res.status(201).json(newContact);
	} catch (error) {
		console.error('create Contact error:', error);
		res.status(500).json({ message: 'system error!' });
	}
});

export default router;