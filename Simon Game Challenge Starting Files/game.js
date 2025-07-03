
let buttonColours =["red", "blue", "green", "yellow" ];

let gamePattern = [];

let userClickedPattern = [];

let level = 0;

let gameStarted = false;

//means not equal


   $(document).keypress( function(){
      if (!gameStarted) {
         //change text of h1
         $("#level-title").text("Level " + level);
         nextSequence(); 
         gameStarted = true; 
      } 
   }) ;


//select which button is clicked.
$('.btn').click( function(){ 
   /*when we click on button it
    will tell us which button we
   selected by their attribute(id)
   value*/
  let userChosenColour = $(this).attr('id');
   /*Put userChose color into array 
   and generate array in console log.*/
    userClickedPattern.push(userChosenColour);
    //call a function.
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel){

   if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");
   
      if(userClickedPattern.length === gamePattern.length){

         setTimeout(function() {
            nextSequence();

         }, 1000);
      }
} else {

   console.log("wrong");
   //call function with parameter
   playSound("wrong");

   //add class to the body
      $("body").addClass('game-over');

      //it add delay to button we clicked.
      setTimeout(function(){
      $("body").removeClass("game-over");
      
      },200);

   //change text of h1
   $("h1").text("Game Over, Press Any Key to Restart");

   //call function
   startOver();
}
}

function nextSequence(){

   //delete previus userClickPattern value 
    userClickedPattern = [];
   

   //increse level by one every time it called
   //level++; (or) level = level + 1;
   level += 1;
   //change level than
   $("#level-title").text("Level " + level)

   let randomNumber = Math.floor(Math.random() * 4);
   let randomChosenColour = buttonColours[randomNumber];
   gamePattern.push(randomChosenColour);

   // make animation(fadeIn,fadeOut) to it.
      $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);   
    //call a function playSound();
   playSound(randomChosenColour);   
}

function playSound(name){
   //play random audio when page is refresh
      var audio = new Audio('sounds/'+ name + '.mp3');
      audio.play();
}

function animatePress(currentColor){
//it add class to the button we click
   $("#" + currentColor).addClass('pressed');
   //it add delay to button we clicked.
   setTimeout(function(){
   $("#" + currentColor).removeClass("pressed");
   
   },100);
   
}


function startOver(){

   level = 0;
   gamePattern = [] ;
   gameStarted = false ;

}


