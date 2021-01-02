const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];

    // Changing level
    level++;
    $("#level-title").text("Level " + level);

    // pushing new color and playing sounds
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut().fadeIn();
    playSound(randomChosenColor);
}

function animatePress(currentColor) {
    $("." + currentColor).addClass("pressed")

    setTimeout(function () {
        $("." + currentColor).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    let correct = true;
    for (var i = 0; i < currentLevel && correct; i++) {
        if (userClickedPattern[i] !== gamePattern[i])
            correct = false;
    }

    if (correct) {
        // move to next level
        if (i === level) {
            setTimeout(function () {
                nextSequence();
                userClickedPattern = []; // clear out user move pattern
            }, 1000);
        }
    }
    else{
        let audio = new Audio("sounds/wrong.mp3");
        audio.play();

        $("body").addClass("game-over");

        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
}

$(".btn").on("click", function () {
    let userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length);
});

$("body").on("keydown", function () {
    if (level === 0) {
        $("#level-title").text("Level " + level);
        nextSequence();
    }
});