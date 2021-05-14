var userClickedPattern = [];
var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var level = 0;
var started = false;
$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });
    
    

$(".btn").on("click",function(){
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    $("#"+userChosenColor).addClass("pressed");
    setTimeout(function() {
        $("#"+userChosenColor).removeClass("pressed");
    }, 100);
    playSound(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
   
    
});


function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("successfull");
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
              nextSequence();
            }, 1000);
        
    }} 
        
        else {
        var wrong = new Audio("sounds/wrong.mp3");
        wrong.play();
            $("body").addClass("game-over");
            $("#level-title").text("Game Over, Press Any Key to Restart");
      
            setTimeout(function () {
              $("body").removeClass("game-over");
            }, 200);
      
            startOver();
          }
    }

function nextSequence(){
    userClickedPattern = [];
    level++;
    $("h1").text("level "+level);
  
    var randomNumber = Math.round(Math.random()*3);

    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);


    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);


}
function playSound(name){
    switch (name) {
        case "blue":
            var blue = new Audio("sounds/moiz.mp3");
            blue.play();
            break;
        case "green":
            var green = new Audio("sounds/jz.mp3");
            green.play();
            break;
        case "red":
            var red = new Audio("sounds/ghufran.mp3");
            red.play();
            break;
        case "yellow":
            var yellow = new Audio("sounds/kashan.mp3");
            yellow.play();
            break;
    
        default:
            console.log(randomChosenColor);
            break;
    }

}

function startOver(){
level = 0;
  gamePattern = [];
  started = false;
 
}