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

var search = {

  megaSearch: function(input) {

      geocoder.geocode(input, function(error, data){

        //console.log('here is data', data);

          let lat = data[0].latitude
          let long = data[0].longitude

          T.get('geo/search', {lat: lat, long: long, radius: "1mi", count: 2 }, function (err, data, response) {

              let placeID = data.result.places[0].id

              T.get('search/tweets', {q: 'place:' + placeID, count: 20 }, function(err, data, response) {

                  for (var i = 0; i < data.statuses.length; i++) {

                      console.log('text:' + data.statuses[i].text);
                    
                  }
              })
          })
      });

      client.searchEvents({ keywords: input}, function(err, data){

        if (err) throw err;

        for (var j = 0; j < data.search.events.event.length; j++) {
          
            console.log('Title Event Search: ' + data.search.events.event[j].title)
        }
      })
  }
}

module.exports = search;