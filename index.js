//jshint esversion:6
var d = document.querySelectorAll('h1');
var div = document.querySelector('div');
var button = document.querySelectorAll('button');
// var label = document.querySelector('label');

var pull_switch = new Audio("pullchain.wav");

d[0].style.visibility = "hidden";

button[1].onclick = onClick;
button[0].onclick = offClick;

// var timer = setTimeout(()=>{
//   d[0].style.visibility = "visible";
//   div.style.display = "none";
//
// }, 4000);


function onClick(){
  pull_switch.play();
  d[0].style.visibility = "visible";
  div.style.display = "none";
}
function offClick(){
  pull_switch.play();
  d[0].style.visibility = "hidden";
  div.style.display = "inherit";
}
