const express = require("express")
const createContact = require("../controllers/createContact")
const getContacts = require("../controllers/getContacts")
const contactRouter = express.Router()

contactRouter.get("/", getContacts)
contactRouter.post("/", createContact)
contactRouter.get("/find/:_id", createContact)

module.exports = contactRouter
