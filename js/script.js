console.log("Witam");

let button = document.querySelector(".button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName")

button.addEventListener("click", () => {
    body.classList.toggle("blue");
    themeName.innerText = body.classList.contains("blue") ? "jasny niebieski" : "jasny różowy";
});



