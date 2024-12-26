const express = require('express');
const router = express.Router();
const { addContact, getContacts } = require('../controllers/contactController');

// Route to add a new contact
router.post('/contacts', addContact);

// Route to get all contacts
router.get('/contacts', getContacts);

module.exports = router;
