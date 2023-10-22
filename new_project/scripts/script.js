const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote');

// Function to get a random quote from Quotable API
async function getRandomQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching quote:', error);
        return null;
    }
}

// Function to display a new random quote
async function displayNewQuote() {
    const randomQuote = await getRandomQuote();
    if (randomQuote) {
        quoteText.textContent = randomQuote.content;
        quoteAuthor.textContent = `- ${randomQuote.author}`;
    }
}

// Event listener for the "New Quote" button
newQuoteBtn.addEventListener('click', displayNewQuote);

// Initial display of a random quote
displayNewQuote();
