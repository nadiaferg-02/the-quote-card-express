"use strict"

const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
};


const quotes = [
    {
        quote: "I came, I saw, I conquered.",
        author: "Julius Caesar",
    },

    {
        quote: "Doh!",
        author: "Homer Simpson",
    },

    {
        quote: "The Internet is the first thing that humanity has built that humanity doesn't understand, the largest experiment in anarchy that we have ever had.",
        author: "Eric Schmidt",
    },

     {
        quote: "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
        author: "Albert Einstein",
    }   
]

function loopThroughQuotes() {
    let quoteIndex = 0;
    setInterval(() => {
        if (quoteIndex < quotes.length) {
            elements.quote.textContent = quotes[quoteIndex].quote;
            elements.author.textContent = quotes[quoteIndex].author;
            quoteIndex++;
        } else {
            quoteIndex = 0;
        }
    }, 3000);
}

setTimeout(loopThroughQuotes, 3000);