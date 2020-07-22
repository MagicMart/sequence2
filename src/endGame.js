// @flow

import startButton from "./startButton";
const modal = window.document.querySelector(".modal");
const close = window.document.querySelector(".close");
const endMessage = window.document.querySelector(".end-message");

function closeNReset() {
    const livesNode = window.document.querySelector(".lives");
    const scoreNode = window.document.querySelector(".score");
    modal.style.display = "none";
    livesNode.textContent = "3";
    scoreNode.textContent = "000";
}

export default function endGame({ score }: { score: number }) {
    modal.style.display = "initial";
    endMessage.textContent = "End of Game: You scored: " + String(score);
    close.addEventListener("click", closeNReset, { once: true });
    startButton({ len: 5, score: 0, lives: 3 });
}
