// VARIABLES //
const startBtt = document.getElementById("start_again_btt");
const rollBtt = document.getElementById("roll_btt");

const gameRst = document.getElementsByTagName("p")[0];
const score = document.getElementsByTagName("p")[1];

const dice = document.getElementsByTagName("img")[0];

let sum = 0;

/////////

rollBtt.addEventListener("click", roll)

function roll() {

    // It generates a random  integer number from 1 to 6:
    const play = Math.floor((Math.random() * 6) + 1);

    //It generates img/dice1 to img/dice6:
    const diceFace = "img/dice" + play + ".png";

    //It changes the dice face according to the random number:
    dice.setAttribute("src", diceFace)

    if (play == 1) {
        gameRst.textContent = "You lost!"
        buttons()
    } else {
        sum += play
        score.innerHTML = sum
    }

    if (sum > 30) {
        gameRst.textContent = "You won!"
        buttons()
    }

}

function buttons() {
    rollBtt.style.visibility == "hidden" ? rollBtt.style.visibility = "visible" : rollBtt.style.visibility = "hidden";
    startBtt.style.visibility == "visible" ? startBtt.style.visibility = "hidden" :  startBtt.style.visibility = "visible";
}

startBtt.addEventListener("click", () => {
    sum = 0
    gameRst.textContent = "Score"
    score.textContent = sum
    buttons()
    roll()
})



