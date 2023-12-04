const express = require("express")
const connection = require("./utils/connection")
const contactRouter = require("./routes/contact.routes")
const app = express()
const cors = require("cors")

require("dotenv").config()

app.use(cors())
app.use(express.json())

app.use("/contact", contactRouter)

app.listen(process.env.PORT, async () => {
  try {
    await connection
    console.log("DB connected")
    console.log(`Server running on port ${process.env.PORT}`)
  } catch (error) {
    console.log({ error: error })
  }
})
