require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

//making new spotify object with keys provided by user
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var search = process.argv.slice(3).join(" ");

//console logs the command and search in a readable format
console.log("\nCommand: " + command);
console.log("Search: " + search + "\n");


function switchCommand(command) {
    switch (command) {
        case "concert-this":
            bandSearch();
            break;
        case "spotify-this-song":
            spotifySearch();
            break;
        case "movie-this":
            movieSearch();
            break;
        case "do-what-it-says":
            break;
        default:
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

}

//function to search BandsInTown with axios and then append the necessary information to a string
function bandSearch() {

}

//function to search spotify with node-spotify-api and then append the necessary information to a string
function spotifySearch() {

}

//function to search omdb with axios and then append the necessary information to a string
function movieSearch() {

}

//function to change command and search and then rerun the switch statement
function doWhatItSays() {

}

//initally run the switch statement
switchCommand(command);