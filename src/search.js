//const eventfulKey = require("apiKeys.js")
//const twitterKeys = require("./apiKeys.js")
//const twitter = require("twitter")
const eventful = require('eventful-node');
const client = new eventful.Client("HczB5FQVwXz7KhLN");


client.searchEvents({ keywords: 'ucf' }, function(err, data){
    
     if(err){
     
       return console.error(err);
     
     }
     
     console.log('Recieved ' + data.search.total_items + ' events');
     
     //console.log('Event listings: ' + JSON.stringify(data.search.events.event[0]));
     
     //print the title of each event 
     //url
     //description
     //start_time
     for (var i=0; i < data.search.events.event.length; i++){
       console.log("Title: " + data.search.events.event[i].title + "\n" + "URL: " + data.search.events.event[i].url+ "\n" + "Description: " + data.search.events.event[i].description + "\n" + "Start Time: " + data.search.events.event[i].start_time);
     }
   });


// $(document).ready(function(){
//     // new change: eventful api
    

//     const searchTerm = "ucf"
//     const eventfulKey = "HczB5FQVwXz7KhLN"

//     function pullLocation() {

//         const eventfulURL = "http://api.eventful.com/json/events/search?app_key=" + eventfulKey + "&keywords=" + searchTerm

//         $.ajax({
//             url: eventfulURL,
//             dataType: 'jsonp',
//             method: "GET"
//         }).done(response => {
//             //Path for Event
//             console.log(response)
            
//             for (var i=0; i < response.events.event.length; i++){
//                 console.log(response.events.event[i].title)

//             }
//             //console.log(response.events.event[i])
//         })
//     }
    
//     // function twitterPull(){

//     //     const client = new Twitter(twitterKeys)

//     //     client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
//     //         console.log(tweets);
//     //     });
//     // }

//     pullLocation();
//     //twitterPull();

// })
