/* JavaScript for Beginners */
/* Final Project */
/* Magic 8-Ball */
/* Allen P */
/* 03/25/2022 */

/* main.js */

/******\
* main *
\******/

// First-time Initialization

var dispWidth = window.innerWidth;
var dispHeight = window.innerHeight;

// Add Event Listener for Window Resize
window.addEventListener("resize", dispOnResize);

// Constants for Image Files
const imgStart = "./img/magic8ball_start.png";
const imgSpin = "./img/magic8ball_spin.gif";
const imgArray = [
  "./img/magic8ball_01.png",
  "./img/magic8ball_02.png",
  "./img/magic8ball_03.png",
  "./img/magic8ball_04.png",
  "./img/magic8ball_05.png",
  "./img/magic8ball_06.png",
  "./img/magic8ball_07.png",
  "./img/magic8ball_08.png",
  "./img/magic8ball_09.png",
  "./img/magic8ball_10.png",
  "./img/magic8ball_11.png",
  "./img/magic8ball_12.png",
  "./img/magic8ball_13.png",
  "./img/magic8ball_14.png",
  "./img/magic8ball_15.png",
  "./img/magic8ball_16.png",
  "./img/magic8ball_17.png",
  "./img/magic8ball_18.png",
  "./img/magic8ball_19.png",
  "./img/magic8ball_20.png",
];
var lastImg = -1;

// Define variables for HTML Objects
var div1, div2, footer1, form1, question1, button1, image1;
initHTML(); // Initialize HTML Body
resizeHTML(); // Handle Initial Size

/**************\
* dispOnResize *
\**************/

// Handle Window Resize Event

function dispOnResize() {
  // Get width and height of the window excluding scrollbars
  dispWidth = window.innerWidth;
  dispHeight = window.innerHeight;
  resizeHTML(); // Resize the HTML Objects
}

/**********\
* initHTML *
\**********/

// Initialize HTML Body

function initHTML() {
  // Written as separate expressions for clarity
  let innerHTML = `<div id="div1" style="text-align: center">`;
  innerHTML += `<h1>Magic 8-Ball</h1>`;
  innerHTML += `<form id="form1">`;
  innerHTML += `<label for="question">Ask me anything!</label>`;
  innerHTML += `<br>`;
  innerHTML += `<input type="text" id="question1"></input>`;
  innerHTML += `<br>`;
  innerHTML += `<button id="button1" type="button">Ask</button>`;
  innerHTML += `</form>`;
  innerHTML += `</div>`;
  innerHTML += `<div id="div2" style="text-align: center">`;
  innerHTML += `<img id="image1" src="${imgStart}" />`;
  innerHTML += `</div>`;
  innerHTML += `<footer id="footer1" style="text-align: center">`;
  innerHTML += `<p>`;
  innerHTML += `Website Design and Content Copyright &copy; 2022 K0mputer N3rd`;
  innerHTML += `<br>`;
  innerHTML += `Images supplied by BitWise Industries, with some edits by K0mputer N3rd`;
  innerHTML += `</p>`;
  innerHTML += `</footer>`;
  document.body.innerHTML = innerHTML;
  document.body.style.margin = 0;

  // Get HTML Objects as Variables
  div1 = document.getElementById("div1");
  div2 = document.getElementById("div2");
  footer1 = document.getElementById("footer1");
  form1 = document.getElementById("form1");
  question1 = document.getElementById("question1");
  button1 = document.getElementById("button1");
  image1 = document.getElementById("image1");

  // Set a few style attributes

  console.log("initHTML");
}

/************\
* resizeHTML *
\************/

// Resize HTML Objects based on Screen Size

function resizeHTML() {
  if (dispWidth > dispHeight) { // If Landscape (Width > Height)
    let div1Width = Math.floor(dispWidth * 0.4);
    let div2Width = Math.floor(dispWidth * 0.6);
    let imagePad = Math.floor(dispWidth * 0.02);
    if (dispHeight > div2Width) {
      imageWidth = div2Width;
    } else {
      imageWidth = dispHeight;
    }
    imageWidth -= 2 * imagePad;
    div1.style.width = `${div1Width}px`;
    div1.style.float = "left";
    div2.style.width = `${div2Width}px`;
    div2.style.float = "right";
    image1.style.padding = `${imagePad}px`;
    image1.style.width = `${imageWidth}px`;

    footer1.style.clear = "both";
    console.log(div1.style.width, div2.style.width);
    console.dir(footer1);
  } else { // Else Portrait (Width <= Height)
    let div1Width = Math.floor(dispWidth);
    let div2Width = Math.floor(dispWidth);
    let imagePad = Math.floor(dispWidth * 0.02);
    imageWidth = dispWidth - 2 * imagePad;
    div1.style.width = `${div1Width}px`;
    div1.style.float = "none";
    div2.style.width = `${div2Width}px`;
    div2.style.float = "none";
    image1.style.padding = `${imagePad}px`;
    image1.style.width = `${imageWidth}px`;

  }

  console.log("resizeHTML", dispWidth, dispHeight);
}

/**********\
* getFacts *
\**********/

// Get a single fact, display fact and image

function getFact() {
  let factIndex = Math.trunc(Math.random() * factArray.length);
  if (factIndex === lastFact) {
    factIndex++;
    if (factIndex === factArray.length) {
      factIndex = 0;
    }
  }
  lastFact = factIndex;
  theFact.innerHTML = factArray[factIndex].text;
  let imgIndex = Math.trunc(Math.random() * imgArray.length);
  if (imgIndex === lastImg) {
    imgIndex++;
    if (imgIndex === imgArray.length) {
      imgIndex = 0;
    }
  }
  lastImg = imgIndex;
  theImage.src = imgArray[imgIndex];
}
