let jokeTextEl = document.getElementById("jokeText");
let jokeBtnEl = document.getElementById("jokeBtn");
let spinnerEl = document.getElementById("spinner");
let url = "https://apis.ccbp.in/jokes/random";

function getJoke() {
    spinnerEl.style.display = "inline-block"; // Show the spinner

    fetch(url)
        .then(response => response.json())
        .then(jsondata => {
            const jokeText = jsondata.value; // Access the joke text directly
            jokeTextEl.textContent = jokeText;
            spinnerEl.style.display = "none"; // Hide the spinner
        });
}

jokeBtnEl.addEventListener("click", getJoke);