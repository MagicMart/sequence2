// @flow

import {playSequence, generateColArr, userInput} from "./playSequence";
import scorePanel from "./scorePanel";

const start = window.document.querySelector(".start");

export default function startButton({
    len,
    score,
    lives
}: {
    len: number,
    score: number,
    lives: number
}) {
    start.style.visibility = "visible";

    start.addEventListener(
        "click",
        () => {
            start.style.visibility = "hidden";
            playSequence(generateColArr({len, score, lives}))
                .then(userInput)
                .then(scorePanel);
        },
        {
            once: true
        }
    );
}
