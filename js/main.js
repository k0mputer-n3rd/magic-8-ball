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

const theURL = "https://cat-fact.herokuapp.com/facts";
const theButton = document.getElementById("theButton");
const theFact = document.getElementById("theFact");
const theImage = document.getElementById("theImage");

var factArray;
getFacts(); // Get fact array and put it in factArray
var lastFact = -1;

const imgArray = [
  "./img/pexels-aleksandr-nadyojin-4492170-a.jpg",
  "./img/pexels-anel-rossouw-2558605-a.jpg",
  "./img/pexels-cats-coming-1543793-a.jpg",
  "./img/pexels-danielle-daniel-479009-a.jpg",
  "./img/pexels-flickr-156934-a.jpg",
  "./img/pexels-francesco-ungaro-96428-a.jpg",
  "./img/pexels-pixabay-248280-a.jpg",
];
var lastImg = -1;

/**********\
* getFacts *
\**********/

// Get fact array

function getFacts() {
  return fetch(theURL).then((result) =>
    result.json().then((resultArray) => (factArray = resultArray))
  );
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
