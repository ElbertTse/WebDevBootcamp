const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true}); // pass these two to get rid of deprecation warnings.


// definining document, adding data
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Missing fruit name."] // for required, takes array where [0] is true, [1] is error message
    },
    rating: {
        // adding validation, setting min and max
        type: Number,
        min: 1, 
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema); // creates a new collection. pass in the singular name of the collection and the schema

const fruit = new Fruit({
     // filling out a new document
     name: "Apple",
     rating: 7,
     review: "Solid as a fruit."
});

//fruit.save(); // adds to fruits collection in fruits db

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "Elbert",
    age: 21
});

// person.save();

// reading data
Fruit.find(function(err, fruits){
    // the find function takes 2 args, err for errors, and fruits but its whatevers being returned so fruits in this case.

    if(err)
        console.log(err);
    else{
        console.log(fruits);
        mongoose.connection.close(); // closing the connection
    }

});


// updating
Fruit.updateOne({_id: "5ffb78bcad4dc81ba46606e3"}, {name: "Peach"}, function(err){
    if(err)
        console.log(err);
});

// deleting
// Fruit.deleteOne({name: "Peach"}, function(err){
//     if(err)
//         console.log(err);
// });

Person.deleteOne({name: "Elbert"}, function(err){
    if(err)
        console.log(err);
});