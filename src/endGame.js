// @flow

import {setScore, setLives} from "./scorePanel";
import {startButton} from "./startButton";
const modal = window.document.querySelector(".modal");
const close = window.document.querySelector(".close");
const endMessage = window.document.querySelector(".end-message");

function closeNReset() {
    modal.style.display = "none";
    setScore(0);
    setLives(3);
}

export function endGame() {
    modal.style.display = "initial";
    endMessage.textContent = "End of Game: You scored: " + setScore();
    close.addEventListener("click", closeNReset, {once: true});
    startButton();
}
