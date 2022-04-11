const makeLower = document.getElementById("makeLower");
const lowerOutput = document.querySelector(".result");
const button = document.querySelector(".button");

button.addEventListener('click', (event) => {
    lowerOutput.innerText = `${makeLower.value.toLowerCase()}`;
});

