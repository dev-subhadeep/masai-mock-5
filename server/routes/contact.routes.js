const express = require("express")
const createContact = require("../controllers/createContact")
const getContacts = require("../controllers/getContacts")
const deleteContact = require("../controllers/deleteContact")
const contactRouter = express.Router()

contactRouter.get("/", getContacts)
contactRouter.post("/", createContact)
contactRouter.get("/find/:_id", createContact)
contactRouter.delete("/delete/:_id", deleteContact)

module.exports = contactRouter
