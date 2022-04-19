/******************************************
Treehouse FSJS Techdegree:
Project 1 - A Random Quote Generator
******************************************/


/*** 
 * `quotes` array - An array of objects to store random quotes and their properties
 * 
 * @property {string} quote - A quote
 * @property {string} source - The person or character who said it.
 * @property {string} citation - A reference to the source of the quote (i.e. book, movie, song, ...)
 * @property {number} year - The year the quote originated.
 * @property {string} hashtag - A hashtag to categorize the quote.
***/
const quotes = [
  {
    quote: "If you really want to do something, you'll find a way. If you don't, you'll find an excuse",
    source: "Jim Rohn",
    hasthag: "#motivation"
  },
  {
    quote: "Success is nothing more than a few simple disciplines, practiced every day",
    source: "Jim Rohn",
    hasthag: "#success"
  },
  {
    quote: "If you focus on success, you'll have stress. But if you pursue excellence, success will be guaranteed.",
    source: "Deepak Chopra",
    hasthag: "#success"
  },
  {
    quote: "The dawn right before the sun rises is the darkest.",
    source: "BTS",
    citation: "Tomorrow",
    year: 2014
  },
  {
    quote: "Even if you're not perfect, you're a limited edition.",
    source: "RM",
    citation: "Do You",
    year: 2015
  },
  {
    quote: "The morning will come again. No darkness, no season is eternal.",
    source: "BTS",
    citation: "Spring Day",
    year: 2017
  },
  {
    quote: "No amount of money ever bought a second of time.",
    source: "Tony Stark",
    citation: "Avengers: Endgame",
    year: 2019,
    hasthag: "#money"
  },
  {
    quote: "Believe you can and you're halfway there.",
    source: "Theodore Roosevelt",
    hasthag: "#courage"
  },
  {
    quote: "Those who dare to fail miserably can achieve greatly.",
    source: "John F. Kennedy",
    hasthag: "#courage"
  },
  {
    quote: "Courage isn't having the strength to go on - it is going on when you don't have strength.",
    source: "Napoleon",
    hasthag: "#courage"
  },
  {
    quote: "Through discipline comes freedom.",
    source: "Aristotle"
  },
  {
    quote: "If not now, when?",
    source: "Eckhart Tolle"
  },
  {
    quote: "The journey of a thousand miles begins with a single step.",
    source: "Lao Tzu"
  },
  {
    quote: "There are always flowers for those who want to see them.",
    source: "Henri Matisse",
    hasthag: "#beautiful"
  },
  {
    quote: "Everything you can imagine is real.",
    source: "Pablo Picasso",
    hasthag: "#life"
  },
  {
    quote: "Life is 10% what happens to you and 90% how you react to it.",
    source: "Charles R. Swindoll",
    hasthag: "#positive"
  },
  {
    quote: "All the world's a stage.",
    source: "William Shakeshpeare"
  },
  {
    quote: "Life begins where fear ends.",
    source: "Osho"
  }
];

/***
 * `getRandomQuote` function - Returns a random quote from a list of quotes.
 * 
 * @param {Array} quotesArray - The array storing a list of quotes.
 * @returns {object} An object containing a quote and its properties.
***/
let quotesCopy = [...quotes];

function getRandomQuote(quotesArray) {
  let randomNumber = Math.ceil(Math.random() * quotesArray.length) - 1;
  const fullQuote = quotesArray[randomNumber];
  quotesArray.splice(randomNumber, 1);
  if (quotesArray.length < 1) {
    quotesCopy = [...quotes];
  }
  return fullQuote;
}

/***
 * `printQuote` function - Display a random quote in the browser.
 * 
 * 1. Call the getRandomQuote function.
 * 2. Use the returned quote object to build a string of HTML and quote properties.
 * 3. Use that string to display a random quote in the browser
***/
function printQuote() {
  let randomQuoteObject = getRandomQuote(quotesCopy);
  let html = `
    <p class="quote"> ${randomQuoteObject.quote} </p>
    <p class="source"> ${randomQuoteObject.source} 
  `;

  if (randomQuoteObject.citation) {
    html += `<span class="citation"> ${randomQuoteObject.citation} </span>`;
  }
  if (randomQuoteObject.year) {
    html += `<span class="year"> ${randomQuoteObject.year} </span>`;
  }
  if (randomQuoteObject.hasthag) {
    html += `<span class="hashtag"> ${randomQuoteObject.hasthag} </span>`;
  }

  html += `</p>`;

  document.getElementById('quote-box').innerHTML = html;
}

/***
 * click event listener for the load-quote button
 * Calls the `printQuote` function each time the user clicks the "Show another quote" button
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

/*** 
 * `changeColor` function - Updates the background color to a random color.
 *
 * 1. Selects the body element.
 * 2. Generates random RGB values.
 * 3. Replaces the background-color property with the new RGB values.
***/
function changeColor() {
  let body = document.querySelector('body');
  const randomRGB = [];
  for (let i = 0; i < 3; i++) {
    let randomNumber = Math.ceil(Math.random() * 256) - 1;
    randomRGB.push(randomNumber);
  }
  body.style.backgroundColor = `rgb(${randomRGB.join(', ')})`;
}

/***
 * click event listener for the load-quote button
 * Calls the `changeColor` function each time the user clicks the "Show another quote" button
***/
document.getElementById('load-quote').addEventListener("click", changeColor, false);