console.log("Witam");

let button = document.querySelector(".js-button");
let body = document.querySelector(".js-body");
let themeName = document.querySelector(".js-themeName")

button.addEventListener("click", () => {
    body.classList.toggle("blue");
    themeName.innerText = body.classList.contains("blue") ? "jasny niebieski" : "jasny różowy";
});



