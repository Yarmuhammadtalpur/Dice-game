//Generating Random number form 1 to 6
var randomnumber1=Math.floor(Math.random()*6)+1;
var randomnumber2=Math.floor(Math.random()*6)+1;

//changing dice image with refresh
document.querySelector(".img1").setAttribute("src", "images/dice"+randomnumber1+".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+randomnumber2+".png");

//if player 2 wins
if(randomnumber1<randomnumber2){
    document.querySelector("h1").textContent="🚩 Player 2 Won";
}

//if player 1 wins
else if(randomnumber1>randomnumber2){
    document.querySelector("h1").textContent="Player 1 Won 🚩";
}
//if both win
else if (randomnumber2===randomnumber1){
    document.querySelector("h1").textContent="Draw";
}