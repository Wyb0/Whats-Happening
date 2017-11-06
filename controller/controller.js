const express = require("express")

const router = express.Router()

router.get("/", function (request, response){
    response.render("index", {layout: "main"})
})

module.export = router