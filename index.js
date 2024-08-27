const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { app, httpServer } = require("./socket/socket")
require("dotenv").config()
mongoose.connect(process.env.MONGO_URL)

// const app = express()

app.use(express.json())
app.use(express.static("dist"))
app.use(cors({
    origin: true,
    credentials: true
}))

app.use("/api/notes", require("./routes/todoRoute"))


app.use("*", async (req, res) => {
    res.status(404).json({ message: "Resource Not found" })
})


app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message || "something went wrong" })
})
mongoose.connection.once("open", () => {
    console.log("MONGO CONNECT")
    httpServer.listen(process.env.PORT, console.log("SERVER RUNNING"))
})