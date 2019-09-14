import {generateColArr, playSequence, userInput} from "./helpers";
import {setLives, setScore} from "./scorePanel";
import {startButton} from "./startButton";

const buttons = document.querySelector(".buttons");
const body = document.querySelector("body");

function clickButton(e) {
    const {style} = e.target;
    if (e.target && e.target.nodeName === "BUTTON") {
        const org = e.target.classList[1];
        style.cssText = `background: white; border: 5px solid black`;
        setTimeout(() => (style.cssText = `background: ${org}`), 200);
    }
}

buttons.addEventListener("click", clickButton);

startButton(true);
