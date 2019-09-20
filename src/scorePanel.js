// @flow

let state = {
    score: 0,
    lives: 3
};

const lives = window.document.querySelector(".lives");
const score = window.document.querySelector(".score");

export function setLives(l: number = 0) {
    state = {...state, lives: state.lives + l};
    lives.textContent = state.lives;

    return state.lives;
}

export function setScore(s?: number) {
    switch (s) {
        case undefined:
            return state.score;
        case 0:
            state = {...state, score: 0};
            break;
        default:
            state = {...state, score: (state.score += s)};
    }

    score.textContent = state.score;
}
