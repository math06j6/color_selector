"use strict";

window.addEventListener("DOMContentLoaded", start);

let picked;
let currentColor = "#0000ff";
const HTML = {};

function start() {
  console.log("start");
  HTML.colorLabel = document.querySelector("#label");
  HTML.colorLabel = document.querySelector("#hexcode");
  // const colorLabel = document.querySelector("#label");
  startup();
}

function startup() {
  console.log("startup");

  picked = document.querySelector("#picked");
  picked.value = currentColor;
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
  console.log("setColor");

  colorCode.innerHTML = input.value;

  // const colorCode = document.querySelector("colorCode");

  const colorCode = HTML.colorCode.value;

  showHex(colorCode);
}

function bigFunction() {
  const value = getValueFunction();
  const converted = convertValueFunction(value);
  displayValueFunction(converted);
  const othervalue = convertAgain(converted);
  displayOtherValue(otherValue);
}

//one of the convertValueFunctions could convert HEX (as a string) to RGB (as an object), and the corresponding display function would then display the RGB object on the page, maybe like textContent = `rgb( ${rgb.r}, ${rgb.g}, ${rgb.b})`;

function convertValueFunction(a_value) {
  // do some calculation
  return a_convertedvalue;
}

function convertAgain(a_different_value) {
  // do some calculation
  return a_new_kind_of_value;
}

function calcMyColors(r, g, b) {
  console.log("calcMyColors");

  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  console.log("hsl(%f,%f%,%f%)", h, s, l);
}
