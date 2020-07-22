// @flow

import endGame from "./endGame";
import startButton from "./startButton";

type Props = {
    score: number,
    lives: number,
};

export default function scorePanel({ score, lives }: Props) {
    const livesNode = window.document.querySelector(".lives");
    const scoreNode = window.document.querySelector(".score");
    livesNode.textContent = lives;
    scoreNode.textContent = String(score).padStart(3, "0");
    if (lives === 0) {
        endGame({ score });
    } else {
        startButton({ len: 5, score, lives });
    }
}
