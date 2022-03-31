/* JavaScript for Beginners */
/* Final Project */
/* Magic 8-Ball */
/* Allen P */
/* (K0mputer N3rd) */
/* 03/27/2022 */

/* main.js */

// Your final project will be to build a magic 8 ball app
// Create a new repository named: magic8ball
// Clone your repository
// Add your index file, stylesheet, script file and the provided 8ball images
// Main objectives:
// Create an input field for users to ask a question
// Create a label for your input field telling your user to "Ask me anything!"
// Create an "ask" button (this will run the function that outputs a random magic 8 ball image)
// Create a div with an id of "answers" that you will insert the images into using js
// Create an "ask" function that when clicked, will choose a random 8ball image and insert it into your "answers" div
// Replace the input field with the user's question when displaying the answer
// Style your page any way you like
// Activate Github Pages for your project

// I added more challenges to this:
// Do the entire project in JavaScript.
// Handle mobile-friendly scaling (portrait and landscape).
// HTML will link the JavaScript and have an empty body.

// Bug List:
// Why does the portrait text sometimes look small?
// Footer styles done at initialization, not every resize.
// Add vertical spacing to form.
// Adjust width of question text box.
// Consider using .createElement and adding each element to the HTML.
// Remove console.log statements.
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
var div1, div2, footer1, form1, title1, label1, question1, button1, image1;
var break1, break2, break3;

initHTML(); // Initialize HTML Body
resizeHTML(); // Handle Initial Size

// Set an Event Listener for the button
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
  innerHTML += `<h1 id="title1">Magic 8-Ball</h1>`;
  innerHTML += `<form id="form1" onsubmit="event.preventDefault(); ask8Ball();" autocomplete="off">`;
  innerHTML += `<label id="label1" for="question">Ask me anything!</label>`;
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
  innerHTML += `Website Design and Content `;
  innerHTML += `<br id="break1">`;
  innerHTML += `Copyright &copy; 2022 K0mputer N3rd`;
  innerHTML += `<br>`;
  innerHTML += `<br id="break2">`;
  innerHTML += `Images supplied by BitWise Industries `;
  innerHTML += `<br id="break3">`;
  innerHTML += `with some edits by K0mputer N3rd`;
  innerHTML += `</p>`;
  innerHTML += `</footer>`;
  document.body.innerHTML = innerHTML;
  document.body.style.margin = 0;

  // Get HTML Objects as Variables
  div1 = document.getElementById("div1");
  div2 = document.getElementById("div2");
  footer1 = document.getElementById("footer1");
  form1 = document.getElementById("form1");
  title1 = document.getElementById("title1");
  label1 = document.getElementById("label1");
  question1 = document.getElementById("question1");
  button1 = document.getElementById("button1");
  image1 = document.getElementById("image1");
  break1 = document.getElementById("break1");
  break2 = document.getElementById("break2");
  break3 = document.getElementById("break3");
}

/************\
* resizeHTML *
\************/

// Resize HTML Objects based on Screen Size

function resizeHTML() {
  var div1Width, div1Float, div2Width, div2Float;
  var imagePad, imageWidth, textMargin, breakDisplay;

  // If Landscape (Width > Height)
  if (dispWidth > dispHeight) {
    div1Width = Math.floor(dispWidth * 0.4);
    div1Float = "left";
    div2Width = Math.floor(dispWidth * 0.6) - 17; // Allow for width of scroll bar
    div2Float = "right";
    imagePad = Math.floor(dispWidth * 0.02);
    imageWidth = dispHeight > div2Width ? div2Width : dispHeight;
    imageWidth -= 2 * imagePad;
    textMargin = Math.floor((imageWidth - 100) / 5);
    textMargin = textMargin < 2 ? 2 : textMargin;

    // Else Portrait (Width <= Height)
  } else {
    div1Width = Math.floor(dispWidth);
    div1Float = "none";
    div2Width = Math.floor(dispWidth);
    div2Float = "none";
    imagePad = Math.floor(dispWidth * 0.02);
    imageWidth = dispWidth - 2 * imagePad;
    textMargin = Math.floor((dispHeight - imageWidth - 100) / 5);
    textMargin = textMargin < 2 ? 2 : textMargin;
  }
  
  // Handle Breaks for Narrow Footer
  breakDisplay = ((dispWidth > 500) ? "none" : "inherit");

  // Set Style Values
  div1.style.width = `${div1Width}px`;
  div1.style.float = div1Float;
  div2.style.width = `${div2Width}px`;
  div2.style.float = div2Float;
  title1.style.marginTop = `${textMargin}px`;
  title1.style.marginBottom = `${textMargin}px`;
  question1.style.marginTop = `${textMargin}px`;
  button1.style.marginTop = `${textMargin}px`;
  button1.style.marginBottom = `${textMargin}px`;
  image1.style.padding = `${imagePad}px`;
  image1.style.width = `${imageWidth}px`;

  // footer1.style.width =`${dispWidth}px`;
  footer1.style.width =`100%`;
  footer1.style.float = "none";
  footer1.style.clear = "both";
  break1.style.display = breakDisplay;
  break2.style.display = breakDisplay;
  break3.style.display = breakDisplay;
  appendInfo();
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
  question1.value = "";
  question1.placeholder = prevAsk;
  let imgIndex = Math.trunc(Math.random() * imgArray.length);
  if (imgIndex === prevImg) {
    imgIndex++;
    if (imgIndex === imgArray.length) {
      imgIndex = 0;
    }
  }
  prevImg = imgIndex;
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
  }, 3000);
}

// debug

function appendInfo() {
  let para = document.createElement("p");
  footer1.append(para);
  let w = window.innerWidth;
  let h = window.innerHeight;
  let t = `Debug: ${w} ${h}`;
  para.innerHTML = t;
}
