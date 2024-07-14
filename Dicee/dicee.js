var RandomNumber1 = Math.random();
RandomNumber1 = RandomNumber1 * 6;
RandomNumber1 = Math.floor(RandomNumber1) + 1;
var str = "./images/dice"+RandomNumber1+".png";
document.querySelector(".img1").setAttribute("src",str);
var RandomNumber2 = Math.random();
RandomNumber2 = RandomNumber2 * 6;
RandomNumber2 = Math.floor(RandomNumber2) + 1;
var str1 = "./images/dice"+RandomNumber2+".png";
document.querySelector(".img2").setAttribute("src",str1);
if(RandomNumber1>RandomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins";
}
else if (RandomNumber1<RandomNumber2){
    document.querySelector("h1").textContent = "Player 2 Wins";
}
else{
    document.querySelector("h1").textContent = "Tieeee";
}