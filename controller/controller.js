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
    let input = request.body.location
    search(request.body.location)
    response.render("search", {layout: "main"})
    console.log(request.body.location)
})

module.exports = router