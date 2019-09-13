import {generateColArr, playSequence, userInput} from "./helpers";
import {setLives, setScore} from "./scorePanel";

const buttons = document.querySelector(".buttons");
const body = document.querySelector("body");
const start = document.querySelector(".start");

function clickButton(e) {
    const {style} = e.target;
    if (e.target && e.target.nodeName === "BUTTON") {
        const org = e.target.classList[1];
        style.cssText = `background: white; border: 5px solid black`;
        setTimeout(() => (style.cssText = `background: ${org}`), 200);
    }
}

setLives();
setScore();

buttons.addEventListener("click", clickButton);
start.addEventListener(
    "click",
    () => playSequence(generateColArr(5)).then(userInput),
    {
        once: true
    }
);
