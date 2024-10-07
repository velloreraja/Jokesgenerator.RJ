const btnEl = document.getElementById("btn");
const jokesEl = document.getElementById("joke");

const apiKey = "/QChUBTOFvim+M86tJOi4A==YQnostFxbvhPWjZG";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/jokes?limit=1";

async function getJoke() {
  try {
    jokesEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();
    console.log(data[0].joke);
    jokesEl.innerText = data[0].joke;
    btnEl.disabled = false;
    btnEl.innerText = "TELL ME A JOKE";
  } catch (error) {
    jokesEl.innerText = "An Error Happend, Try Again Later";
    btnEl.disabled = false;
    btnEl.innerText = "TELL ME A JOKE";
  }
}

btnEl.addEventListener("click", getJoke);
