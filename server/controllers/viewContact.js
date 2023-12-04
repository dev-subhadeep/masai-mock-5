const Contact = require("../models/contact")

const viewContact = async (req, res) => {
  const { _id } = req.params
  try {
    const contact = await Contact.findOne({ _id })
    if (contact) {
      res.status(200).send({ message: "Contact Found", contact })
    } else {
      res.status(400).send({ error: "Contact not found" })
    }
  } catch (error) {
    res.status(500).send({ error: `${error}` })
  }
}

module.exports = viewContact
