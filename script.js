const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

/* loading */
function showloadingSpinner(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function removeloadingSpinner(){
    loader.hidden = true;
    quoteContainer.hidden = false;
}

/* New quote */
function newQuote(){
    showloadingSpinner();
    const quote = localQuotes[Math.floor(Math.random() * 138)];
/*     quoteText.textContent = quote.text;
    authorText.textContent = quote.author; */
    if(!quote.author){
        authorText.textContent = 'Unknown';
    } else {
        author.textContent = quote.author;
    }
    if(quote.text.length > 120){
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
    removeloadingSpinner();
}

async function getQuote(){
    showloadingSpinner()
    const url = 'https://type.fit/api/quotes';
    try{
        const res = await fetch(url);
        apiQuotes = await res.json();
        newQuote();
    } catch (error){
    }
}

/* Tweet Quote */

/* Event Listeners */
newQuoteBtn.addEventListener('click', newQuote);

getQuote();
