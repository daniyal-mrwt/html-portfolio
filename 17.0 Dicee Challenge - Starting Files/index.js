
 /*random image 2*/ 
 var randomNumber1 = Math.floor(Math.random() * 6 +1 );

var  randomImage = "dice" + randomNumber1 + ".png";/*dice1.png*/ 

var randomImageSource = "images/" + randomImage ;/*images/dice1.png*/ 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

/*random image 2*/ 
var randomNumber2 = Math.floor(Math.random() * 6 +1 );

var  randomImage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImage2);

/*greater 1 or greater 2*/ 
//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
