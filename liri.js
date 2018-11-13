require("dotenv").config();
 
// require("./keys").config();
var request = require("request");
var spotify = require('node-spotify-api');
var bandsintown = require('bandsintown');
var moment = require('moment');
var fs = require("fs");
var found = false


var spotify = new spotify({
    id: 'f86b097a7dc94d03a1f599641cbc2d1e',
    secret: '77d0bcf62efa4d5b89ef8f3509dca0c6'
  });

var command = process.argv[2];
var data = process.argv.slice(3).join("-");

console.log(data)

switch (command) {
    
    case 'concert-this':
    console.log("you want concert info on",data)
       
        request("https://rest.bandsintown.com/artists/"+data+"/events?app_id=codingbootcamp", function(error, response, body) {

            // If the request is successful (i.e. if the response status code is 200)
            if (!error && response.statusCode === 200) {
        
                parsedData = (JSON.parse(body));
                if (parsedData.length === 0){
                    console.log("Nothing found");
                }

                else {
                    for (let i = 0; i < parsedData.length; i++) {
                        console.log('EVENT NUMBER ',(i+1))
                        console.log("Name of venue - ",parsedData[i].venue.name);
                        console.log("Venue location - ",parsedData[i].venue.city);
                        var date = (parsedData[i].datetime);
                        moment(date, "MM-DD-YYYY");
                        console.log("Date of the Event - ",date);
                        console.log(" ")
                        found = true
                    }
                }

                if (found === true){
                    dataArray = [command + " " + data]
                    logToFile();
                    
                }

                }
            });

        
    break;
    
    case 'spotify-this-song':
    // console.log("you want spotify info on",data)
    if(data === ""){
        // console.log("nothing to look for")
        spotify
        .request('https://api.spotify.com/v1/search?query=the-sign&type=track&limit=5')
        .then(function(response) {
                // console.log(response)
                console.log("The artist name is - " + response.tracks.items[0].artists[0].name);
                console.log("The songs name is - " + response.tracks.items[0].name); 
                console.log("A preview link of the song from Spotify - " + response.tracks.items[0].preview_url);
                console.log("The album that the song is from - " + response.tracks.items[0].album.name);
                console.log(" ")
                return;
         
        })

        }
        else {
    spotify
    .request('https://api.spotify.com/v1/search?query=' + data + '&type=track&limit=5')
    .then(function(response) {
    
            console.log("The artist name is - " + response.tracks.items[0].artists[0].name);
            console.log("The songs name is - " + response.tracks.items[0].name); 
            console.log("A preview link of the song from Spotify - " + response.tracks.items[0].preview_url);
            console.log("The album that the song is from - " + response.tracks.items[0].album.name);
            console.log(" ")
            found = true;
            
        
        if (found === true){
            dataArray = [command + " " + data]
            logToFile();
            
        }
    })
    .catch(function(err) {
        console.error('Error occurred: ' + err); 
    });
        }
            
    break;

    case 'movie-this':
    console.log("Details for the movie",data)

    if (data === ''){
        request("http://www.omdbapi.com/?t=mr-nobody&y=&plot=short&tomatoes=true&apikey=trilogy", function(error, response, body) {
            console.log("Title of the movie - "+JSON.parse(body).Title);
            console.log("Year the movie came out - "+JSON.parse(body).Year);
            console.log("IMDB Rating of the movie - " + JSON.parse(body).imdbRating);
            console.log("Rotten Tomatoes Rating of the movie - " + JSON.parse(body).tomatoRating);
            console.log("Country where the movie was produced - " + JSON.parse(body).Country);
            console.log("Language of the movie - " + JSON.parse(body).Language);
            console.log("Plot of the movie - " + JSON.parse(body).Plot);
            console.log("Actors in the movie - " + JSON.parse(body).Actors);
        });
        break;
    }
    request("http://www.omdbapi.com/?t="+data+"&y=&plot=short&tomatoes=true&apikey=trilogy", function(error, response, body) {

    // If the request is successful (i.e. if the response status code is 200)
    if (!error && response.statusCode === 200) {

        console.log("Title of the movie - "+JSON.parse(body).Title);
        console.log("Year the movie came out - "+JSON.parse(body).Year);
        console.log("IMDB Rating of the movie - " + JSON.parse(body).imdbRating);
        console.log("Rotten Tomatoes Rating of the movie - " + JSON.parse(body).tomatoRating);
        console.log("Country where the movie was produced - " + JSON.parse(body).Country);
        console.log("Language of the movie - " + JSON.parse(body).Language);
        console.log("Plot of the movie - " + JSON.parse(body).Plot);
        console.log("Actors in the movie - " + JSON.parse(body).Actors);
        found = true;
        }
    });
    if (found === true){
        dataArray = [command + " " + data]
        logToFile();
        
    }

                
    break;

    case 'do-what-it-says':
    console.log("do what is says is chosen");

    // i figured out how to do this but it will require some code rewriting.  I should have made each switch
    // statment a seperate method and then I could have just call the switch method from the begining
    // or if the switch was itself a method, I could have then called within this seperate case
    // Unfortunately I don't have time to correct this now and submit homework on time so I will
    // correct at a later date.

    fs.readFile("./log.txt", "utf8", function(err, data) {
        if (err) {
          return console.log(err);
        }
    
        // Break down all the information inside log.txt
        dataArray = data.split(", ");
        var chosenArray = dataArray[0].split(" ");
        // console.log(chosenArray[0])
        // console.log(chosenArray[1])
        command = (chosenArray[0])
        data = (chosenArray[1])
        console.log(command);
        console.log(data)
        command();

        
        
    }
        );
        
                    
    break;
    
    
    default:

        break;

    }

var logToFile = function(){

fs.appendFile("log.txt", (dataArray+", "), function(err) {

    // If an error was experienced we will log it.
    if (err) {
      console.log(err);
    }
  
    // If no error is experienced, we'll log the phrase "Content Added" to our node console.
    else {
      console.log("Content Added to log.txt!");
    }
  
  });
};



 // We will read the existing bank file
 