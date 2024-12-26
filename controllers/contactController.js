const Contact = require('../models/Contact');

// @desc    Add a new contact
// @route   POST /api/contacts
exports.addContact = async (req, res) => {
  try {
    const { name, mobile, email, message } = req.body;

    if (!name || !mobile || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const contact = new Contact({ name, mobile, email, message });
    await contact.save();

    res.status(201).json({ message: 'Contact saved successfully', contact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Get all contacts
// @route   GET /api/contacts
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};
