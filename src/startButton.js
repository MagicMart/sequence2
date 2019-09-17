// @flow

import {playSequence, generateColArr, userInput} from "./helpers";

const start = window.document.querySelector(".start");

export function startButton() {
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
