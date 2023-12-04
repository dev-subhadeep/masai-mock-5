const express = require("express")
const createContact = require("../controllers/createContact")
const getContacts = require("../controllers/getContacts")
const deleteContact = require("../controllers/deleteContact")
const findContact = require("../controllers/findContact")
const createAppointment = require("../controllers/createAppointment")
const contactRouter = express.Router()

contactRouter.get("/", getContacts)
contactRouter.post("/", createContact)
contactRouter.get("/find", findContact)
contactRouter.delete("/delete/:_id", deleteContact)
contactRouter.post("/appointment/:_id", createAppointment)

module.exports = contactRouter
