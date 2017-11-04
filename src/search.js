//const eventfulKey = require("apiKeys.js")

$(document).ready(function(){
    // new change: eventful api

    const searchTerm = "ucf"
    const eventfulKey = "HczB5FQVwXz7KhLN"

    function pullLocation() {

        const eventfulURL = "http://api.eventful.com/json/events/search?app_key=" + eventfulKey + "&keywords=" + searchTerm

        $.ajax({
            url: eventfulURL,
            dataType: 'jsonp',
            method: "GET"
        }).done(response => {
            //console.log(response)
            //Path for Event
            //console.log(response.events.event[i])
        })
    }

    pullLocation();

})
