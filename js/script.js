// Select element
const quizButton = document.querySelector(".quizBtn button");
const rulesBox = document.querySelector(".rules-box")
const exitButton = document.querySelector(".buttons .exitBtn")

quizButton.onclick = ()=> {
    rulesBox.classList.add("activeInfo")
}

exitButton.onclick = ()=> {
    rulesBox.classList.remove("activeInfo")
}