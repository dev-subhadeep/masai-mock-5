const mongoose = require("mongoose")

const ContactSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  label: String,
  booked_slots: [],
})

const Contact = mongoose.model("contact", ContactSchema)

module.exports = Contact
