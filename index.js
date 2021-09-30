//jshint esversion:6
var d = document.querySelectorAll('h1');
var div = document.querySelector('div');
var button = document.querySelectorAll('button');
var h2 = document.querySelector('h2');
// var label = document.querySelector('label');

var pull_switch = new Audio("pullchain.wav");
var neonSound = new Audio("neonSound.flac");
var crikets = new Audio("crikets.wav");

d[0].style.visibility = "hidden";

button[1].onclick = onClick;
button[0].onclick = offClick;

// var timer = setTimeout(()=>{
//   d[0].style.visibility = "visible";
//   div.style.display = "none";
//
// }, 4000);
function turnOff(){

  h2.style.visibility = "hidden";
  pull_switch.play();
}

function onClick(){
  pull_switch.play();
  d[0].style.visibility = "visible";
  div.style.display = "none";
  neonSound.play();
  crikets.pause();
}

function offClick(){
  pull_switch.play();
  d[0].style.visibility = "hidden";
  div.style.display = "inherit";
  neonSound.pause();
  crikets.play();

  var timer = setTimeout(turnOff, 3000);
}
