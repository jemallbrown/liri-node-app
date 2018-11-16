# liri-node-app
Homework 10 - Liri.js

What does this project do?

    This project is provided to address the requirments of Rutgers coding bootcamp, homework for week 10 (homework 10).
    The assignment required use of several node libraries as well as several different api.
    The node application "liri.js" is prompt driven using the node inquirer package and can take in one of four commands:
        1. `concert-this`
            This will show the following information about the song in your terminal/bash window;  Artist, Song name, preview link from Spotify and album the song is from.

        2. `spotify-this-song`
            This will output the following information to your terminal/bash window; 
            Name of the venue, location and date of event.

        3. `movie-this`
            This will output the following information to your terminal/bash window; Title, Year, IMDB Rating, Tomatoes Rating, Country of movie production, .Language, plot and actors.

        4. `do-what-it-says` - 
            This will output search results based on the content of "random.txt" file.


   This assignment shows various node.js methods necessary to perform api calls, json parsing, data storage and uses multiple NMP packages.

How to use the project -

    to begin user will type "node liri.js" at the command prompt
    afterwards the user will be prompted to provide more details

    concert-this - user must input a performing artist to search concert offerings and confirm the selection.
    spotify-this-song - user must provide a song title to search for and confirm the selection.
    movie-this - user must provide the title of a movie to search for and confirm the selection.
    do-what-it-says - once selected, the remaining prompts are ignored (with the exception of the confirmation prompt).

         
More detail and additional resources can be found at the following links;
    [NPM detail](https://www.npmjs.com/)
    [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
    [Request](https://www.npmjs.com/package/request)
    [OMDB API](http://www.omdbapi.com)
    [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)
    [Moment](https://www.npmjs.com/package/moment)
    [DotEnv](https://www.npmjs.com/package/dotenv)

Contributors;
    This homework assignment is the sole work of Jemall A. Brown