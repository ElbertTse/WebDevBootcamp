
// document.querySelector("button").addEventListener("click", handleClick); // dont add () to the end of event listener function. That would be a method call.

// function handleClick(){
//     alert("I got clicked!");
// }

// or can do this w/ an anon fncn.

// document.querySelector("button").addEventListener("click", function(){
//     alert("I got clicked.");
// });

// USE KEYDOWN INSTEAD OF KEYPRESS for event

for (var i = 0; i < document.querySelectorAll(".drum").length; i++)
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        checkKey(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });

document.addEventListener("keydown", function(event){ // need to actually define a function then call the check key function
    checkKey(event.key); // e.key is the key pressed
    buttonAnimation(event.key);
});


function checkKey(c) {
    switch (c) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        default:
            console.log(c);
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
       activeButton.classList.remove("pressed"); 
    }, 100);
}