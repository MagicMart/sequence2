// @flow

import {playSequence, generateColArr, userInput} from "./playSequence";
import scorePanel from "./scorePanel";

const start = window.document.querySelector(".start");

type Props = {
    len: number,
    score: number,
    lives: number
};

export default function startButton({len, score, lives}: Props) {
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
