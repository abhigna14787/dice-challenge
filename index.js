
//generating variable numbers
var randomnumber =Math.floor(Math.random()*6)+1;//math.random gives numbers between 0 to 0.99 s0 we mutlipy with 6 to get numbers between 0 and 6

var randomdice ="dice"+randomnumber+".png";
var randomimg="images/"+randomdice;//it gives a random image from image pictures of dice
//it gives a random image from image pictures of dice
var image1= document.querySelectorAll("img")[0];//0 represents its for first image
image1.setAttribute("src" , randomimg);

//for change in image number 2
var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomimg2="images/dice"+randomnumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimg2)


if(randomnumber>randomnumber2){
    document.querySelector("h1").innerHTML="player1 won";

}
else if(randomnumber<randomnumber2){
    document.querySelector("h1").innerHTML="player2 won";

}
else{
    document.querySelector("h1").innerHTML="draw";
}






