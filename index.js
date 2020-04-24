
var randomNo1=Math.floor(Math.random()*6)+1;
var imageRandom1="dice"+randomNo1+".png";
document.querySelectorAll("img")[0].setAttribute("src",imageRandom1);
var randomNo2=Math.floor(Math.random()*6)+1;
var imageRandom2="dice"+randomNo2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imageRandom2);
if(randomNo1>randomNo2){
    document.querySelector("h1").innerHTML="Player1Wins!..🚩";
}
else if(randomNo1<randomNo2){
    document.querySelector("h1").innerHTML="Player2Wins!..🚩";
}
else{
    document.querySelector("h1").innerHTML="KeepFighting!.. 🚩";
}