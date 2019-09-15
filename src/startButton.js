// @flow

import {playSequence, generateColArr, userInput} from "./helpers";

const startButtonContainer = window.document.querySelector(
    ".start-button-container"
);
const button = document.createElement("button");
const text = document.createTextNode("Start");
button.appendChild(text);
button.setAttribute("class", "start");

export function startButton() {
    startButtonContainer.append(button);

    button.addEventListener(
        "click",
        () => {
            startButtonContainer.removeChild(button);
            playSequence(generateColArr(5)).then(userInput);
        },
        {
            once: true
        }
    );
}
