const quotes = [

{
quote:"Success is not final, failure is not fatal.",
author:"Winston Churchill"
},

{
quote:"Dream big and dare to fail.",
author:"Norman Vaughan"
},

{
quote:"Stay hungry, stay foolish.",
author:"Steve Jobs"
},

{
quote:"Believe you can and you're halfway there.",
author:"Theodore Roosevelt"
},

{
quote:"Hard work beats talent when talent doesn't work hard.",
author:"Unknown"
}

];

function newQuote(){

let random =
Math.floor(Math.random() * quotes.length);

document.getElementById("quote").innerText =
quotes[random].quote;

document.getElementById("author").innerText =
"- " + quotes[random].author;

}