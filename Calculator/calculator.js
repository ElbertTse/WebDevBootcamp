// using body-parser to parse the html to access num1 and num2

const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true})); // use urlencoded when trying to access data entered in a html form

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html"); // needs absolute path when deploying

    // __dirname is current directory path, regardless of user
});

app.post("/", function(req, res){
    // gets called whenever the calculate button is pressed. post corresponds to the form action in the html

    let num1 = Number(req.body.num1); // need to cast these as numbers, req.body is of type string
    let num2 = Number(req.body.num2);
    let result = num1 + num2;
    res.send("Result is: " + result);
});

app.get("/bmicalculator", function(req, res){
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