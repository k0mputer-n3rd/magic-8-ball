/* JavaScript for Beginners */
/* Final Project */
/* Magic 8-Ball */
/* Allen P */
/* 03/25/2022 */

/* main.js */

// Bug List:
// Doesn't handle scroll bar on desktop screen.
// Add vertical spacing to form.
// Add line breaks to footer on narrow screens.
// Spinner needs to be finished. Maybe one full spin, then stop?
// Handle return after question is entered, defaultbutton?
// Eliminate display of previous answers.
// Do I need to force display refresh for it to look right?

/******\
* main *
\******/

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
var prevImg = -1;

// First-time Initialization

var dispWidth = window.innerWidth;
var dispHeight = window.innerHeight;

// Add Event Listener for Window Resize
window.addEventListener("resize", dispOnResize);

// Define variables for HTML Objects
var div1, div2, footer1, form1, question1, button1, image1;
initHTML(); // Initialize HTML Body
resizeHTML(); // Handle Initial Size

// Set an event for the button
button1.addEventListener("click", ask8Ball);

var prevAsk = ""; // Previous question asked (don't ask twice)

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

  console.log("initHTML");
}

/************\
* resizeHTML *
\************/

// Resize HTML Objects based on Screen Size

function resizeHTML() {
  // If Landscape (Width > Height)
  if (dispWidth > dispHeight) {
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

    // Else Portrait (Width <= Height)
  } else {
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
* ask8Ball *
\**********/

// Activated when "Ask" button is clicked.

function ask8Ball() {
  let questionAsk = question1.value;
  if (questionAsk.length === 0) {
    alert("You must type your question first");
    return;
  }
  if (questionAsk === prevAsk) {
    alert("You already asked that question");
    return;
  }
  prevAsk = questionAsk; // Save Answer
  let imgIndex = Math.trunc(Math.random() * imgArray.length);
  if (imgIndex === prevImg) {
    imgIndex++;
    if (imgIndex === imgArray.length) {
      imgIndex = 0;
    }
  }
  prevImg = imgIndex;
  console.log(imgIndex);
  spinAnswer(imgIndex);
}

/************\
* spinAnswer *
\************/

// Displan Spin Image, then Answer Image

function spinAnswer(index) {
  image1.src = imgSpin;
  setTimeout(function () {
    image1.src = imgArray[index];
  }, 4000);
}
