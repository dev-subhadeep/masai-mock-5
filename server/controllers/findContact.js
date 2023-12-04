const Contact = require("../models/contact")

const findContact = async (req, res) => {
  const { _id } = req.params
  try {
    const contact = await Contact.findOne({ _id })
    if (contact) {
      res.status(200).send({ contact })
    } else {
      res.status(404).send({ error: "Contact not found" })
    }
  } catch (error) {
    res.status(404).send({ error })
  }
}

module.exports = findContact
