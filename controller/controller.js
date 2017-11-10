const express = require("express");
const search = require ("../src/search")
const app = express.Router();

 module.exports = function(app){

    app.get("/", function (req, res){
        res.render("index")
        //search.megaSearch("ucf");
        console.log('route hit');
    })

    app.get("/search", function (req, res){
        res.render("search")
    })

    app.post("/search", function (req, res){
        //console.log("fgjkfskldgjjfklds" , req)
        //let locationSearch = res.location
        //console.log(locationSearch)
       search.megaSearch("fsu");
       res.render("search", {data: res})
        //console.log(res)
    })
 };