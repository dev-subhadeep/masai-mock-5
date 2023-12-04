const mongoose = require("mongoose")
const Contact = require("./contact")

const SlotSchema = mongoose.Schema({
  time: Date,
  contact: { type: mongoose.Types.ObjectId, ref: Contact },
  slot: String,
})

const Slot = mongoose.model("Slot", SlotSchema)

module.exports = Slot
