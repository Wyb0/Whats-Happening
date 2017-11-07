const eventful = require('eventful-node');
const client = new eventful.Client("HczB5FQVwXz7KhLN");

client.searchEvents({ keywords: 'ucf' }, function(err, data){
    if(err){
        return console.error(err);
     }
     //console.log('Event listings: ' + JSON.stringify(data.search.events.event[0]));
     //print the title of each event, url, description, start_time
     for (var i=0; i < data.search.events.event.length; i++){
       //console.log("Title: " + data.search.events.event[i].title + "\n" + "URL: " + data.search.events.event[i].url+ "\n" + "Description: " + data.search.events.event[i].description + "\n" + "Start Time: " + data.search.events.event[i].start_time);
     }
   });



