//server.js is going to be our entry point to our application. (Backend Operations) We are about to write the code that will be executed first. 
 
//importing express package
"use strict";

const express = require("express");
const app = express();

//creating a const port to store the port number our application will be served on.
const port = 8080;

//serve our static files from a directory in the root of the project named public. Static files are on the front-end.
app.use(express.static("./public"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));


//moved async from index.js to server.js to invoke .env  
async function getRandomImage() {
      const endpoint = `https://api.unsplash.com/photos/random/?client_id=${process.env.CLIENT_ID}`;

    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.urls.regular;
 
        return receivedPhotoUrl;
    
    } catch (error) {
        console.error(error)
    }
}



// creating a route or endpoint on our back-end with app.use(). 
// The first argument is our route. 
// The second argument is a callback function that takes the response, sets the status code of 200, then sends the response in JSON format. 
app.use("/api/v1/getRandomImage", async (request, response) => {
    response.status(200).json({
        status: 200,
        data: await getRandomImage(),
    });
});
 

//serve our front-end
app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process.");
});
 
// With the dotenv package, we are able to load our existing .env file into process.env by default. 
require("dotenv").config();

//With the cors package, add cors with options so that it can not be called from another application
const cors = require("cors");
const corsOptions = {
    origin: `http://localhost:${port}`
}
  
app.use(cors(corsOptions));