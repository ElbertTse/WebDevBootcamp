const express = require('express');
const app = express();
const port = 3000;

// basically did npm init, then npm install express, then for nodemon, npm install -g nodemon

app.get("/", function(req, res){

    // req = request, res = response, "/" is the route
    // this is what the server will respond with when a get request is made
    res.send("<h1>Hello</h1>");
});

app.get("/contact", function(req, res){

    // this is what is used for the response when the route is /contact, so localhost:3000/contact
    res.send("<p>Contact me at etse@mail.com</p>");
});

app.get("/about", function(req, res){

    res.send("<p>Hello, this page was made by Elbert Tse in 2021</p>");
});


app.listen(3000, function (){
    // this has us listen in on port 3000
    console.log("Server started on port 3000");
});