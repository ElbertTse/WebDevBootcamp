// exports this to whatever the parent module is. 
// module.exports is an object so these are methods.

exports.getDate = function () {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    return today.toLocaleDateString("en-US", options);
}

// this is another way to do it.
// module.exports.getDate = getDate; // w/out () since we dont wanna call it yet.

// function getDate() {
//     let today = new Date();
//     let options = {
//         weekday: "long",
//         day: "numeric",
//         month: "long",
//     };

//     return today.toLocaleDateString("en-US", options);
// }


exports.getDay = function () {
    let today = new Date();
    let options = {
        weekday: "long",
    };

    return today.toLocaleDateString("en-US", options);
}