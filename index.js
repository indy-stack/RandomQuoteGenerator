const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const btnEl = document.getElementById("btn");
const catEl = document.querySelectorAll(".category");
let radioVal;
const apiKey = "qIMeav8yHdFdhBrm6jPpmQ==Z3egrkOuajdNkHtS";
const options = {
    method: 'GET',
    headers: { 'X-Api-Key': apiKey },
    contentType: 'application/json',
};

async function getQuote() {
    try {
        btnEl.innerText = "...loading";
        btnEl.disabled = true;
        if (radioVal) {
            const url = `https://api.api-ninjas.com/v1/quotes?category=${radioVal}`;
            const response = await fetch(url, options);
            const result = await response.json();
            let quoteContent = result[0].quote;
            let quoteAuthor = result[0].author;
            quoteEl.innerHTML = `<i class="fa-solid fa-quote-left"></i> ` + quoteContent + ` <i class="fa-solid fa-quote-right"></i>`;
            authorEl.innerText = '~' + quoteAuthor + "~";
            btnEl.innerText = "Get Quote";
            btnEl.disabled = false;
        }
        else {
            quoteEl.innerHTML = `please select a category`;
            authorEl.innerText = ``;
            btnEl.innerText = "Get Quote";
            btnEl.disabled = false;
        }
    } catch (error) {
        console.error(error);
        quoteEl.innerHTML = `There was an error, please try again later`;
        authorEl.innerText = `try again`;
        btnEl.innerText = "Get Quote";
            btnEl.disabled = false;
    }
}

//getting which radio button is checked and storing its value
function handleRadioButtonClick(event) {
    radioVal = event.target.value;
}


catEl.forEach(el => {
    el.addEventListener('click', handleRadioButtonClick);
});



btnEl.addEventListener("click", getQuote);



