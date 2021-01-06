const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs"); // this line adds ejs. will need to make a directory called views that has a file named list or *.ejs
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); // allows for express to make the public directory kinda static
let items = [];
let workItems = [];

app.get("/", function (req, res) {

    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    const day = today.toLocaleDateString("en-US", options);
    
    

    // render takes 2 args, "list" is the file we want to render, and the object is the KV pair for the variables
    // in the ejs tag in list.ejs. the ejs file is basically html.
    res.render("list", { listTitle: day, newItems: items });
});

app.post("/", function(req, res){

    let item = req.body.newItem;

    // have to split since the button's route goes back to root.
    // we check the list title attribute to see where we push the newly written item to.
    console.log(req.body);

    if(req.body.list === "Work List"){
        workItems.push(item);
        res.redirect("/work");

    }
    else{
        items.push(item);
        res.redirect("/");
    }

});

app.get("/work",function(req, res){
    res.render("list", {listTitle: "Work List", newItems: workItems});
});

app.post("/work", function(req, res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});