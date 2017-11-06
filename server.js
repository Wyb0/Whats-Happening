const express = require("express")
const path = require("path")
const request = require("request")
const router = require("./controller/controller.js")

const app = express()
const PORT = process.env.PORT || 8000

app.listen(PORT, function () {
    console.log("Listening on Port: " + PORT)
})
