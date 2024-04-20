var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;
var randomDiceImage="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",randomDiceImage);

var randomNumber2=Math.floor((Math.random()*6)+1);
var randomDiceImage2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

function whoIsTheWinner(){
    if(randomNumber1===randomNumber2){
        document.querySelectorAll("h1")[0].innerHTML="DRAW!";
    }
    else if(randomNumber1>randomNumber2){
        document.querySelectorAll("h1")[0].innerHTML="🎌 Player 1 Wins!";
    }else{
        document.querySelectorAll("h1")[0].innerHTML="Player 2 Wins! 🎌";

    }
}
whoIsTheWinner();