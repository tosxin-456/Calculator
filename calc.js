const backGround = document.querySelector("body")
let moonShine = document.getElementById("moon")
let navBa = document.querySelector("nav")
let sunShine = document.getElementById("sun")
function toNight(){
backGround.style.backgroundColor = "black";
navBa.style.backgroundColor = "black";
navBa.style.borderColor = "rgb(255, 231, 231)";
moonShine.style.display = "none";
sunShine.style.display = "block";
}
function toDay(){
  backGround.style.backgroundColor = "white";
  navBa.style.backgroundColor = "white";
  navBa.style.borderColor = "rgb(79, 89, 97)";
  sunShine.style.display = "none";
  moonShine.style.display = "block";
  }