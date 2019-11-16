//all requires
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");

//making new spotify object with keys provided by user
var spotify = new Spotify(keys.spotify);


//getting command line arguements
var command = process.argv[2];
var search = process.argv.slice(3).join(" ");

//console logs the command and search in a readable format
console.log("\nCommand: " + command);
console.log("Search: " + search + "\n");

//function to check the passed through command against the valid commands
function switchCommand(term) {
    switch (term) {
        case "concert-this":
            bandSearch(search);
            break;
        case "spotify-this-song":
            spotifySearch(search);
            break;
        case "movie-this":
            movieSearch(search);
            break;
        case "do-what-it-says":
            doWhatItSays();
            break;
        default:
            //this is run if a valid command is not inputted
            console.log("\nYou have entered an invalid command." +
                "\n\nList of valid commands:" +
                "\nconcert-this 'band'" +
                "\nspotify-this-song 'song'" +
                "\nmovie-this 'movie'" +
                "\ndo-what-it-says\n");
            break;
    }
}

//function to append a formatted string to a file called log.txt
function appendResponse(stringResponse) {
    var divider = "\n-----------------------------------------\n";
    fs.appendFile("log.txt", stringResponse + divider, function (err) {
        if (err) {
            console.log(err);
        }

        console.log(stringResponse);
    });
}

//function to search BandsInTown with axios and then append the necessary information to a string
function bandSearch(search) {
    axios({
        method: 'get',
        url: "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp"
    })
        .then(function (response) {

            var data = response.data[0];

            var responseString = "Venue Name: " + data.venue.name +
                "\nLocation: " + data.venue.region + ", " + data.venue.city +
                "\nDate: " + moment(data.datetime.substring(0, 10)).format("MM-DD-YYYY");

            appendResponse(responseString);
        });
}

//function to search spotify with node-spotify-api and then append the necessary information to a string
function spotifySearch(search) {
    spotify.search({ type: 'track', query: search, limit: 1 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        var data = data.tracks.items[0];
        if (data) {
            var responseString = "Artist: " + data.artists[0].name +
                "\nSong Name: " + data.name +
                "\nLink to Listen: " + data.external_urls.spotify +
                "\nAlbum: " + data.album.name;
            appendResponse(responseString);
        } else {
            search = "The Sign Ace of Base";
            spotifySearch(search);
        }
    });
}

//function to search omdb with axios and then append the necessary information to a string
function movieSearch(search) {
    axios({
        method: 'get',
        url: "http://www.omdbapi.com/?apikey=trilogy&t=" + search
    })
        .then(function (response) {

            var data = response.data;

            if (data.Response === "True") {
                var responseString = "Movie Title: " + data.Title +
                    "\nRelease Year: " + data.Year +
                    "\nIMDB Rating: " + data.imdbRating +
                    "\nRotten Tomatoes Rating: " + data.Ratings[1].Value +
                    "\nCountry: " + data.Country +
                    "\nLanguages: " + data.Languages +
                    "\nPlot: " + data.Plot +
                    "\nActors: " + data.Actors;
                appendResponse(responseString);
            } else {
                search = "Mr. Nobody";
                movieSearch(search);
            }
        });
}

//function to change command and search and then rerun the switch statement
function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (error, contents) {
        if (error) {
            console.log(error);
        }
        //since the data in random.txt is in csv i split them at the , into an array
        var data = contents.split(",");
        command = data[0];
        search = data[1];

        switchCommand(command);
    });
}

//initally run the switch statement
switchCommand(command);

