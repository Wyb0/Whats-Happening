    //npm packages
const express = require("express")
const path = require("path")
const request = require("request")
const bodyParser = require('body-parser');
const exphbrs = require('express-handlebars');
    
    //express setup
const app = express()
const PORT = process.env.PORT || 8000

    //dependant files
require("./controller/controller.js")(app)

    //expose public files
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

    //handlebars set as serverside templete
app.engine("handlebars", exphbrs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

    //set up our port.
app.listen(PORT, function () {
    console.log("Listening on Port: " + PORT)
})
