// @flow

import {playSequence, generateColArr, userInput} from "./playSequence";

const start = window.document.querySelector(".start");

export default function startButton() {
    start.style.visibility = "visible";

    start.addEventListener(
        "click",
        () => {
            start.style.visibility = "hidden";
            playSequence(generateColArr(5)).then(userInput);
        },
        {
            once: true
        }
    );
}
