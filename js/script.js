// Var Global
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

// Eventos
document.querySelector("#actionEventStart").addEventListener("click",toggleScreen)
document.querySelector("#actionEventReset").addEventListener("click",toggleScreen)


// Função callback
function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}