const eventful = require('eventful-node');
const client = new eventful.Client("HczB5FQVwXz7KhLN");
const NodeGeocoder = require('node-geocoder');

const options = {
  provider: 'google',
  httpAdapter: 'https',
};

const geocoder = NodeGeocoder(options);
let input ="ucf"

function search (input) {
  geocoder.geocode(input, function(error, data) {
    console.log("Address: " + data[0].formattedAddress + "\nLatitude: " + data[0].latitude + "\nLongitude" + data[0].longitude);
    let lat = data[0].latitude
    // console.log("Lat: " + lat)
    let long = data[0].longitude
    
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
}

search(input)
