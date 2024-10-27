const buttonColors = ["red" , "blue" , "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var gameStarted = false;



function nextSequence(){

    userClickedPattern = [];

    $("h1").text("Level "+level);
    
    level+=1;
    
    var randomNumber = Math.floor(Math.random()*4);
    
    var randomChosenColour = buttonColors[randomNumber];
    
    gamePattern.push(randomChosenColour);

    
        $("#"+randomChosenColour).fadeOut().fadeIn();
    
    playSound(randomChosenColour);
    console.log(gamePattern);
    ;}


    
    $(".btn").click( function (){
        
        
        var userChosenColor = $(this).attr("id");
        animatePress(userChosenColor);
        userClickedPattern.push(userChosenColor);
        console.log(userClickedPattern);
        playSound(userChosenColor);
        checkAnswer( userClickedPattern.length - 1);
    } );
    
    
    $(document).keypress(
        
        
        function(){
            if(!gameStarted){

                gameStarted = true;
                nextSequence();

            }
        }
    )
    
    
    function animatePress(currentColour){
        
        $("#"+currentColour).addClass("pressed");
        setTimeout(function() {
        $("#"+currentColour).removeClass("pressed");
      }, 50);
    


}

function playSound(name){
    var audio = new Audio("./sounds/"+name+".mp3");
    audio.play();
}

function checkAnswer(currentLevel){

    if( gamePattern[currentLevel] != userClickedPattern[currentLevel]){
            playSound("wrong");
            $("body").addClass("game-over");
            setTimeout(function() {
                $("body").removeClass("game-over");
              }, 200);
            console.log("fails");
            gameStarted = false;
            gamePattern = [];
            level = 0;
            $("h1").text("Game Over, Press any key to restart! ");
    }
    else{
        console.log("success");
        if( currentLevel == level-1){
            setTimeout(function() {
                nextSequence();
              }, 500);
        }
    }

}

