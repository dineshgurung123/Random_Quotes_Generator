const quotes = [
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "Do not watch the clock. Do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "Keep your eyes on the stars, and your feet on the ground.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "The best way to predict the future is to invent it.",
        author: "Alan Kay"
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    }
];


 const quotesText = document .getElementById("qoutes");
const quotesAuthor = document .getElementById("author");
 const quotesButton = document .getElementById("button");



       
     let count = 0;
     
     function generateQuotes() {
        
      

            let index=  Math.floor(Math.random()*quotes.length);

           

            const randomQuote = quotes[index];

          quotesText.innerHTML =  randomQuote.quote;
          quotesAuthor.innerText =  randomQuote.author;
          

     }
      
     quotesButton.addEventListener("click", generateQuotes);




