const URL = "https://api.adviceslip.com/advice";

function get() {return fetch(URL).then(response => response.json())}

function getQuotes() {
    const API = {get};
    API.get(URL).then(data => addQuote(data['slip']['advice'], data['slip']['id']))
}

function addQuote(quote, id) {
    const quoteText = document.querySelector(".adviceTXT");
    quoteText.innerText = '"'+quote+'"';

    const idText = document.querySelector(".adviceNumber");
    idText.innerText = "A D V I C E     # " + id;
}

getQuotes();