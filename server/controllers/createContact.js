const Contact = require("../models/contact")

const createContact = async (req, res) => {
  const { name, email, phone, label } = req.body
  //   const first_name = fullname.split(" ")[0]
  //   const last_name = fullname.split(first_name + " ")[1]
  try {
    const contact = await Contact.create({
      name,
      email,
      phone,
      label,
    })
    if (contact) {
      res.status(200).send(contact)
    } else {
      res.status(500).send({ error: "Error creating contact" })
    }
  } catch (error) {
    res.status(400).send({ error })
  }
}

module.exports = createContact
