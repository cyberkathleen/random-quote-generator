/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "If you really want to do something, you'll find a way. If you don't, you'll find an excuse",
    source: "Jim Rohn"
  },
  {
    quote: "Success is nothing more than a few simple disciplines, practiced every day",
    source: "Jim Rohn"
  },
  {
    quote: "If you focus on success, you'll have stress. But if you pursue excellence, success will be guaranteed.",
    source: "Deepak Chopra"
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
    year: 2019
  },
  {
    quote: "Believe you can and you're halfway there.",
    source: "Theodore Roosevelt"
  },
  {
    quote: "Those who dare to fail miserably can achieve greatly.",
    source: "John F. Kennedy"
  },
  {
    quote: "Courage isn't having the strength to go on - it is going on when you don't have strength.",
    source: "Napoleon"
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
    source: "Henri Matisse"
  },
  {
    quote: "Everything you can imagine is real.",
    source: "Pablo Picasso"
  },
  {
    quote: "Life is 10% what happens to you and 90% how you react to it.",
    source: "Charles R. Swindoll"
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
 * `getRandomQuote` function
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
 * `printQuote` function
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

  html += `</p>`;

  document.getElementById('quote-box').innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);