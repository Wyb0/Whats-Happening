const express = require("express")
const path = require("path")
const request = require("request")
const router = require("./controller/controller.js")
const bodyParser = require('body-parser');
const exphbrs = require('express-handlebars');

const app = express()
const PORT = process.env.PORT || 8000

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbrs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", router);

app.listen(PORT, function () {
    console.log("Listening on Port: " + PORT)
})
