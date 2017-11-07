const eventful = require('eventful-node');
const client = new eventful.Client("HczB5FQVwXz7KhLN");
const NodeGeocoder = require('node-geocoder');
const Twit = require('twit')

//object for geocoder
const options = {
  provider: 'google',
  httpAdapter: 'https',
};

const geocoder = NodeGeocoder(options);

//object for twitter keys
var T = new Twit({
  consumer_key: 'K8m79BkeocCVPBoVDhgLKnnUP',
  consumer_secret: 'bhIFjro10EsQm8l56D5MkUkSkXFQ4LXuKJydFMyKnzsswkaDwS',
  access_token: '911976610269679617-NuCY2SJE0S0OZi7C5EWuZPhypdoJ68e',
  access_token_secret: 'ewohY9FQgjUrcaIR17x02iGvsRyr1B61466BDfIA7FpbZ',
});

let input="ucf";

function search (input) {
  geocoder.geocode(input, function(error, data) {
    //console.log("Address: " + data[0].formattedAddress + "\nLatitude: " + data[0].latitude + "\nLongitude" + data[0].longitude);
   //set var for lat and long
    let lat = data[0].latitude
    //console.log(lat)
    let long = data[0].longitude
      T.get('geo/search', { lat: lat, long: long, radius: "1mi", count: 2 }, function(err, data, response) {
        //console.log("Twitter: " + JSON.stringify(data))
        //console.log(data.result.places[0].id);
        let placeID = data.result.places[0].id
          T.get('search/tweets', { q: 'place:' + placeID, count: 20 }, function(err, data, response) {
          //console.log(data)
            for (j=0; j < data.statuses.length; j++){
              console.log("Text: " + data.statuses[j].text + "\nCreated: " + data.statuses[j].created_at + "\nUser: " + data.statuses[j].user.screen_name)
            }
          })
      }) 
  });

  client.searchEvents({ keywords: input }, function(err, data){
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

module.exports = search(input)