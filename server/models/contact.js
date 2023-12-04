const mongoose = require("mongoose")

const ContactSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  phone: Number,
  label: String,
})

const Contact = mongoose.model("contact", ContactSchema)

module.exports = Contact
