//jshint esversion:6
var d = document.querySelectorAll('h1');
var div = document.querySelector('div');
var button = document.querySelector('button');
// var label = document.querySelector('label');

d[0].style.visibility = "hidden";

button.onclick = clickMe;

// var timer = setTimeout(()=>{
//   d[0].style.visibility = "visible";
//   div.style.display = "none";
//
// }, 4000);



function clickMe(){
  d[0].style.visibility = "visible";
  div.style.display = "none";
}
