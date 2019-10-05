// @flow

import endGame from "./endGame";
import startButton from "./startButton";

export default function scorePanel({
    score,
    lives
}: {
    score: number,
    lives: number
}) {
    const livesNode = window.document.querySelector(".lives");
    const scoreNode = window.document.querySelector(".score");
    livesNode.textContent = lives;
    scoreNode.textContent = score;
    if (lives === 0) {
        endGame({score});
    } else {
        startButton({len: 5, score, lives});
    }
}
