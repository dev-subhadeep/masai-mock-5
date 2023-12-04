const Contact = require("../models/contact")

const findContact = async (req, res) => {
  const { firstname } = req.body
  try {
    const contact = await Contact.findOne({
      name: { $regex: firstname, $options: "i" },
    })
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
