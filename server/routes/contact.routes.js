const express = require("express")
const createContact = require("../controllers/createContact")
const getContacts = require("../controllers/getContacts")
const deleteContact = require("../controllers/deleteContact")
const findContact = require("../controllers/findContact")
const contactRouter = express.Router()

contactRouter.get("/", getContacts)
contactRouter.post("/", createContact)
contactRouter.get("/find", findContact)
contactRouter.delete("/delete/:_id", deleteContact)

module.exports = contactRouter
