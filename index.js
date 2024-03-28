let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let highscore = -1;
let h3 = document.querySelector("h3");
let hs = document.querySelector("#hs");
let btns = ['yellow', 'red', 'blue', 'green'];
let body = document.querySelector("body");
//starting the Game
document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        levelUp();
    }
})
//Flashing the button
function buttonFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250)
}
//Checking the answer
function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else {
        h3.innerHTML = `Game Over ! your score was <b>${level}</b> <br> press any key to start `;
        body.classList.add("GameOver");
        setTimeout(function () {
            body.classList.remove("GameOver");
        }, 150)
        reset();
    }
}
//Levelling up the game
function levelUp() {
    userSeq = [];
    level++;
    if (level > highscore) {
        highscore = level;
    }
    h3.innerText = `Level ${level}`;
    let idx = Math.floor(Math.random() * 4);
    let ranColor = btns[idx];
    gameSeq.push(ranColor);
    let ranBtn = document.querySelector(`.${ranColor}`);
    buttonFlash(ranBtn);
    hs.innerText = `HighScore ${highscore}`;

}
//user pressing the button
function btnPress() {
    let btn = this;
    buttonFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}
let allBtns = document.querySelectorAll(".box");
for (btn of allBtns) {

    btn.addEventListener("click", btnPress);
}
//resetting the game
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
