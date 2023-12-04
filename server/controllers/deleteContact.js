const Contact = require("../models/contact")

const deleteContact = async (req, res) => {
  const { _id } = req.params
  try {
    const deletedContact = await Contact.findOneAndDelete(_id)
    if (deletedContact) {
      res.status(201).send({ message: "Successfully deleted contact" })
    } else {
      res.status(404).send({ error: "Error deleting contact" })
    }
  } catch (error) {
    res.status(500).send({ error: `${error}` })
  }
}

module.exports = deleteContact
