const eventful = require('eventful-node');
const client = new eventful.Client("HczB5FQVwXz7KhLN");
const NodeGeocoder = require('node-geocoder');

const options = {
  provider: 'google',
 
  // Optional depending on the providers
  httpAdapter: 'https', // Default
  //apiKey: 'YOUR_API_KEY', // for Mapquest, OpenCage, Google Premier
  //formatter: "string"         // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

geocoder.geocode('ucf', function(error, data) {
  console.log(data[0])
});

client.searchEvents({ keywords: 'ucf' }, function(err, data){
    if(err){
        return console.error(err);
     }
     //console.log('Event listings: ' + JSON.stringify(data.search.events.event[0]));
     //print the title of each event, url, description, start_time
     for (var i=0; i < data.search.events.event.length; i++){
       console.log("Title: " + data.search.events.event[i].title + "\nURL: " + data.search.events.event[i].url+ "\nDescription: " + data.search.events.event[i].description + "\nStart Time: " + data.search.events.event[i].start_time);
     }
   });



