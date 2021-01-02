const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

function playSound(name){
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut().fadeIn();
    playSound(randomChosenColor);
}

function animatePress(currentColor){
    $("." + currentColor).addClass("pressed")

    setTimeout(function(){
        $("." + currentColor).removeClass("pressed");
    }, 100);
}

$(".btn").on("click", function(){
    let userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
});

$("document").on("keydown", function(){
    if(level === 0)
    {
        // do sum stuff
    }
    else
    {

    }
});