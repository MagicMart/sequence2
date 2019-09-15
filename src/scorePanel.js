// @flow

const state = {
    score: 0,
    lives: 3
};

const lives = window.document.querySelector(".lives");
const score = window.document.querySelector(".score");

export function setLives(l: number = 3) {
    state.lives = state.lives + l;
    lives.textContent = state.lives;
}

export function setScore(s: number = 0) {
    state.score = state.score + s;
    score.textContent = state.score;
}