"use strict";



window.addEventListener("DOMContentLoaded", start);


let picked;
let defaultColor = "#0000ff";
const HTML = {};


function start() {
  console.log("start");
  HTML.colorLabel = document.querySelector("#label");

  startup();
}


function startup() {


  picked = document.querySelector("#picked");
  picked.value = defaultColor;
  picked.addEventListener("input", updateFirst, false);
  picked.select();
}


function updateFirst(event) {
  const newColor = document.querySelector(".my-color");

  if (newColor) {
    newColor.style.background = event.target.value;
  }
}

function setColor() {
	body.style.backgroundColor = input.value;
  colorCode.innerHTML = input.value;
  
  const colorCode = document.getElementById("colorCode");
  colorCode.innerHTML = input.value;

 
}


// function updateAll(event) {
//   document.querySelectorAll("p").forEach(function(p) {
//     p.style.color = event.target.value;
//   });
// }

// function changeColor() {
//   let h, s, l;
 
//    const min = Math.min(r,g,b);
//    const max = Math.max(r,g,b);
  
//    if( max === min ) {
//      h = 0;
//    } else
//    if (max === r) {
//      h = 60 * (0 + (g - b) / (max - min) );
//    } else
//    if (max === g) {
//      h = 60 * (2 + (b - r) / (max - min) );
//    } else
//    if (max === b) {
//      h = 60 * (4 + (r - g) / (max - min) );
//    }
  
//    if (h < 0) {h = h + 360; }
  
//    l = (min + max) / 2;
  
//    if (max === 0 || min === 1 ) {
//      s = 0;
//    } else {
//      s = (max - l) / ( Math.min(l,1-l));
//    }
//    // multiply s and l by 100 to get the value in percent, rather than [0,1]
//    s *= 100;
//    l *= 100;
 
//    console.log("hsl(%f,%f%,%f%)", h, s, l);

//   }


