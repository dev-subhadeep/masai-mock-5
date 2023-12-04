const Contact = require("../models/contact")

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find()
    res.status(200).send({ contacts })
  } catch (error) {
    res.status(404).send({ error })
  }
}

module.exports = getContacts
