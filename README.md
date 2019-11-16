# LIRI-Node

<h1> The Purpose </h1>
<hr>
<p> The purpose of thise node app is to able to search movies, songs, or bands through the command line.  It does this through the use of APIs, node packages, and node. </p>

<br>
<h1> Overview </h1>
<hr>
<p> This app is pretty basic in how it is organized.  When a command is put in the command line it goes through some conditionals to decide which search to use.  After doing the search that data is organized into a readable format.  Finally after being put into a readable format the data is output to the console and to an external log.txt file.  If the search fails then a default search will be used. </p>

<br>
<h1> How to Run </h1>
<hr>

To run this app you will need Node.

<h3> Step 1 </h3>
<hr>
<p> First you will need to clone the repository and run 'npm install'. </p>

<br>
<h3> Step 2 </h3>
<hr>
<p> Second you will need to make a .env file with the following format
  <br> <br>
  SPOTIFY_ID=your-spotify-id <br>
  SPOTIFY_SECRET=your-spotify-secret
  <br> <br>
  Make sure to put your own spotify API keys into the appropriate spots.
  <br>
  To get an API key for spotify go to https://developer.spotify.com/my-applications/#!/</p>

<br>
<h3> Step 3 </h3>
<hr>

Now you can run the app.
<br>
The valid commands are as follows:
<br><br>
concert-this 'band name here' <br>
spotify-this-song 'song name here' <br>
movie-this 'movie name here' <br>
do-what-it-says 


<br>
<h1> About the Commands </h1>
<hr>

<h3>concert-this 'band name here'</h3> <br>
<p> This command will give information on the band you search upcoming concert. </p><br>
<h3>spotify-this-song 'song name here'</h3> <br>
<p> This command will give you information on the song you search, the fallback search is "The Sign" by Ace of Base. </p><br>
<h3>movie-this 'movie name here'</h3> <br>
<p> This command will give you information on the movie you search, the fallback search is "Mr. Nobody". </p><br>
<h3>do-what-it-says </h3><br>
<p> This command will take the command from the "random.txt" file and then execute it.  If you would like to change the command in "random.txt" use the format 'command','search'. </p><br>

<br>
<h1> Technologies </h1>
<hr>
<ul>
  <li> Node </li>
  <li> Node-Spotify-API - https://www.npmjs.com/package/node-spotify-api </li>
  <li> Axios - https://www.npmjs.com/package/axios </li>
  <li> Moment - https://www.npmjs.com/package/moment </li>
  <li> DotEnv - https://www.npmjs.com/package/dotenv </li>
 </ul>


<br>
<h1> My Role in Development </h1>
<hr>
<p> My role in the development in this project is pretty simple.  This project was developed solely by me. </p>

<br>
<h1> Screenshots </h1>
<hr>
<p> An album of screenshots demonstrating the application can be found here<br>
  https://photos.app.goo.gl/BYDPfvZkWLeyjGh5A </p>
