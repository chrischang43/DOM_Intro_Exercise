var greeting = document.getElementById('greeting');
var allList = document.getElementsByTagName('li');
var addImage = document.createElement("img");
var unorderList = document.getElementsByTagName('ul');
var getImage = document.getElementsByTagName("img");
var imgStack = ['./images/milk.jpeg', "./images/honey.jpeg", 
                "./images/water.jpeg", "./images/wine.jpeg", 
                "./images/beer.jpeg"];
var ghost = document.getElementById("ghosting");
var resize = document.getElementById("resize");
var getInput = document.getElementsByTagName("input");
var konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var counter = [];
var konamiVerify = "";
var counterVerify = "";

document.addEventListener("DOMContentLoaded", function() {
  greeting.innerText = "Hello, World";
  for (var i = 0; i < allList.length; i++) {
    allList[i].style.backgroundColor = "yellow";  
  }
  addImage.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
  greeting.appendChild(addImage);

  unorderList[0].addEventListener("click", function(event){
    for (var j = 0; j < allList.length; j++) {
      allList[j].removeAttribute("class");
      event.target.setAttribute("class", "selected");
    }
      getImage[1].src = "./images/" + event.target.innerHTML + ".jpeg";
  });

  ghost.addEventListener("mouseover", function(){
    event.target.remove();
  });

  resize.addEventListener("mouseover", function(event){
    event.target.style.width = "400px";
    event.target.style.height = "400px";
  });
  resize.addEventListener("mouseleave", function(event){
    event.target.style.width = parseInt(event.target.style.width) / 2 + "px";
    event.target.style.height = parseInt(event.target.style.height) / 2 + "px";
  });

  getInput[0].addEventListener("click", function() {
    for (var j = 0; j < allList.length; j++) {
      allList[j].removeAttribute("class");
    }
    getImage[0].src = "./images/panic.jpeg";
  });

    
  document.addEventListener("keypress", function(item){
    for (var a = 48; a <= 57; a++) {
      if(item.keyCode === a) {
        alert("I HATE NUMBERZZZ!");
      }  
    }
  });

/* 
 Once the user pressdown 10 keys, it will check to see if user entered the correct
 konami code in sequence.  If so, an alert will pop off congrats him/her.
 If the user did not press the correct sequence, then an alert will pop and let the user knows
 that he/she can try again.

 I thought about refactoring my code, but I think I should go to bed.
*/
  document.addEventListener("keydown", function(key){
      counter.push(key.keyCode);
      if (counter.length >= 10) {
        konamiVerify = konami.join("");
        counterVerify = counter.join("");
        if (konamiVerify === counterVerify) {
          alert('YOU ARE AN EVENT HANDLER GURUUUUUUUUU!');     
        } else {
          alert("TRY HARDER, BRO! YOU CAN TRY AGAIN NOW!");
          counter = [];
        } 
      }    
  });
});