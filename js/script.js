{
    console.log("Witam");

const changeBackground = () => {

button.addEventListener("click", () => {
    const body = document.querySelector(".js-body");
    const themeName = document.querySelector(".js-themeName");

    body.classList.toggle("colorChange");
    themeName.innerText = body.classList.contains("colorChange") ? "jasny niebieski" : "jasny różowy";
});
}

}