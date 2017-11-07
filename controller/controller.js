const express = require("express");
const search = require ("../src/search");

const router = express.Router()

router.get("/", function (request, response){
    response.render("index", {layout: "main"})
})

router.get("/search", function (request, response){
    response.render("search", {layout: "main"})
})

router.post("/search", function (request, response){
    search(request.body.location)
    console.log(request.body.location)
})

module.exports = router