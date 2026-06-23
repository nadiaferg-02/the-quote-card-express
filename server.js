//server.js is going to be our entry point to our application. We are about to write the code that will be executed first. 

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

//serve our front-end
app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process.");
});
 