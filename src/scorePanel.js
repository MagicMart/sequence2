// @flow

const state = {
    score: 0,
    lives: 3
};

const lives = window.document.querySelector(".lives");
const score = window.document.querySelector(".score");

export function setLives(l: number = 0) {
    state.lives = state.lives + l;
    lives.textContent = state.lives;

    return state.lives;
}

export function setScore(s?: number) {
    if (s === 0) {
        state.score = 0;
    } else if (s !== undefined) {
        state.score = state.score + s;
    }
    score.textContent = state.score;
    return state.score;
}
