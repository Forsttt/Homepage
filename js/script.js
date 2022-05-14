{
   const welcome = () => {
    console.log("Witam");
   };


const changeBackground = () => {
const buttonElement = document.querySelector(".js-button")

buttonElement.addEventListener("click", () => {
    const bodyElement = document.querySelector(".js-body");
    const themeName = document.querySelector(".js-themeName");

    bodyElement.classList.toggle("colorChange");
    themeName.innerText = bodyElement.classList.contains("colorChange") ? "jasny niebieski" : "jasny różowy";
});
}

const init = () => {
    welcome();
    changeBackground();
}

init();
    
}