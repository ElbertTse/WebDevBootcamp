// To create a node project, npm init
// add -y flag if you dont wanna deal with pressing yes

// To run, node calculator.js

// if making changes and you want the site to auto update, use nodemon
// to install, npm i nodemon
// to run, nodemon calculator.js

// To see this page, open your browser and type localhost:3000

const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");

// using body-parser to parse the html to access num1 and num2
// use urlencoded when trying to access data entered in a html form
app.use(bodyParser.urlencoded({extended: true})); 

app.get("/", function(req, res){

    // Sending a file back as a response
    res.sendFile(__dirname + "/index.html"); // needs absolute path when deploying

    // __dirname is current directory path, regardless of machine
});

app.post("/", function(req, res){
    // gets called whenever the calculate button is pressed. post corresponds to the form action in the html

    let num1 = Number(req.body.num1); // need to cast these as numbers, req.body is of type string
    let num2 = Number(req.body.num2);
    let result = num1 + num2;

    // Just sending text
    res.send("Result is: " + result);
});

app.get("/bmicalculator", function(req, res){

    // triggered when user adds /bmicalculator to url
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);
    let bmi = weight / (height * height);

    res.send("Your BMI is " + bmi);
});

app.listen(3000, function (){
    console.log("Server started on port " + port);
});