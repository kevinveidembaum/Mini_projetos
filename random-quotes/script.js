document.addEventListener("DOMContentLoaded", ()=>{
    //DOM Elements
    const Aquote = document.getElementById("quote");
    const author = document.getElementById("author");
    const button = document.getElementById("btn");
    
    const getNewQuote = async () =>
    {
        //api for quotes
        var url="https://type.fit/api/quotes";    
    
        // fetch the data from api
        const response=await fetch(url);
        console.log(typeof response);
        //convert response to json and store it in quotes array
        const allQuotes = await response.json();
    
        // Generates a random number between 0 and the length of the quotes array
        const indx = Math.floor(Math.random()*allQuotes.length);
    
        //Store the quote present at the randomly generated index
        const quote=allQuotes[indx].text;
        
        //Store the author of the respective quote
        const auth=allQuotes[indx].author;
    
        Aquote.innerHTML=quote;
        author.innerHTML="~ "+auth;
       
    }
    
     
    button.addEventListener("click", getNewQuote);
    getNewQuote();
    
});


