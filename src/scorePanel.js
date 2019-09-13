const state = {
    score: 0,
    lives: 3
};

const lives = document.querySelector(".lives");
const score = document.querySelector(".score");

export function setLives(l = 3) {
    state.lives = state.lives + l;
    lives.textContent = state.lives;
}

export function setScore(s = 0) {
    state.score = state.score + s;
    score.textContent = state.score;
}
