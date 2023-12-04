const Contact = require("../models/contact")
const Slot = require("../models/slot")

const createAppointment = async (req, res) => {
  const { _id } = req.params
  const { slot_picked } = req.body
  try {
    const contact = await Contact.findOne({ _id })
    if (contact) {
      if (!contact.booked_slots.includes(slot)) {
        const slot = await Slot.create({
          contact: _id,
          time: Date.UTC(),
          slot: slot_picked,
        })
        let slots = contact.booked_slots
        slots.push(slot)
        const booked_slot = await Contact.findByIdAndUpdate(_id, {
          $set: { booked_slots: slots },
        })
        res
          .status(200)
          .send({ message: "Slot booked successfully", booked_slot })
      }
    } else {
      req.status(400).send({ error: "Error booking slot" })
    }
  } catch (error) {}
}

module.exports = createAppointment
