const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote');

async function getRandomQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch a quote:', error);
        return null;
    }
}

async function displayNewQuote() {
    const randomQuote = await getRandomQuote();
    if (randomQuote) {
        quoteText.textContent = `"${randomQuote.content}"`;
        quoteAuthor.textContent = `— ${randomQuote.author}`;
    }
}

newQuoteBtn.addEventListener('click', displayNewQuote);

displayNewQuote();
