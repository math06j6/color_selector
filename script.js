"use strict";

window.addEventListener("DOMContentLoaded", start);

let picked;
const HTML = {};

function start() {
  console.log("start");

  HTML.newColor = document.querySelector(".my-color");
  HTML.defaultColor = document.querySelector("#picked");
  HTML.defaultColor.addEventListener("input", getColors);
  HTML.hexCode = document.querySelector(".hex");
  HTML.rgbCode = document.querySelector(".rgb");
  HTML.hslCode = document.querySelector(".hsl");
}

function getColors() {
  const currentColor = event.target.value;
  displayColor(currentColor);
}

function displayColor(currentColor) {
  let color = HTML.rgbCode.style.color;

  const rgb = fromHEXtoRGB(currentColor);
  // const hsl = fromRGBtoHSL(currentColor);

  HTML.rgbCode.innerText = "HEX: " + currentColor;
  HTML.rgbCode.textContent = "RGB: " + `(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  // HTML.hslCode.textContent = "HSL: " + `(${hsl.h}, ${hsl.s}%, ${hsl.l}% )`;
  HTML.newColor.style.backgroundColor = currentColor;
}

// ------------------------------------------------------------------
// This function converts HEX to RGB using the parseInt() function.
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
function fromHEXtoRGB(currentColor) {
  let r;
  let g;
  let b;
  r = parseInt(currentColor.substring(1, 3), 16);
  g = parseInt(currentColor.substring(3, 5), 16);
  b = parseInt(currentColor.substring(5, 7), 16);

  return {
    r,
    g,
    b
  };
}
// ------------------------------------------------------------------

// function bigFunction() {
//   const value = getValueFunction();
//   const converted = convertValueFunction(value);
//   displayValueFunction(converted);
//   const othervalue = convertAgain(converted);
//   displayOtherValue(otherValue);
// }

// //one of the convertValueFunctions could convert HEX (as a string) to RGB (as an object), and the corresponding display function would then display the RGB object on the page, maybe like textContent = `rgb( ${rgb.r}, ${rgb.g}, ${rgb.b})`;

// function convertValueFunction(a_value) {
//   // do some calculation
//   return a_convertedvalue;
// }

// function convertAgain(a_different_value) {
//   // do some calculation
//   return a_new_kind_of_value;
// }

// function hsltorgb(h, s, l) {
//   h /= 360;
//   s /= 100;
//   l /= 100;
//   var m2 = (l <= 0.5) ? l*(s+1) : l+s-(l*s),
//     m1 = l*2-m2,
//     r = parseInt(huetorgb(m1, m2, h+1/3)*255),
//     g = parseInt(huetorgb(m1, m2, h)*255),
//     b = parseInt(huetorgb(m1, m2, h-1/3)*255);
//   return [r, g, b];
// }

// function fromRGBtoHSL(r, g, b) {
//   // console.log("r, g, b");

//   r /= 255;
//   g /= 255;
//   b /= 255;

//   let h, s, l;
//   (h = 0), (s = 0), (l = 0);

//   const min = Math.min(r, g, b);
//   const max = Math.max(r, g, b);

//   if (max === min) {
//     h = 0;
//   } else if (max === r) {
//     h = 60 * (0 + (g - b) / (max - min));
//   } else if (max === g) {
//     h = 60 * (2 + (b - r) / (max - min));
//   } else if (max === b) {
//     h = 60 * (4 + (r - g) / (max - min));
//   }

//   if (h < 0) {
//     h = h + 360;
//   }

//   l = (min + max) / 2;

//   if (max === 0 || min === 1) {
//     s = 0;
//   } else {
//     s = (max - l) / Math.min(l, 1 - l);
//   }
//   // multiply s and l by 100 to get the value in percent, rather than [0,1]
//   s *= 100;
//   l *= 100;

//   return { h, s, l };
// }
