const express = require("express")

const router = express.Router()

router.get("/", function (request, response){
    response.render("index", {layout: "main"})
})

router.get("/search", function (request, response){
    response.render("search", {layout: "main"})
})

module.exports = router