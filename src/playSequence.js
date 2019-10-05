// @flow

import {colors} from "../utils/buttonColors";

export function generateColArr({
    len,
    score,
    lives
}: {
    len: number,
    score: number,
    lives: number
}) {
    let arr = [];

    const rand = () => Math.floor(Math.random() * 4);
    while (len >= 1) {
        arr = [colors[rand()], ...arr];
        len -= 1;
    }
    return {len, score, lives, arr};
}

export function playSequence({
    score,
    lives,
    arr
}: {
    score: number,
    lives: number,
    arr: Array<string>
}) {
    return new Promise<Object>(resolve => {
        let delay = 500;
        arr.forEach((col, i) => {
            setTimeout(() => {
                window.document.querySelector(`.${col}`).click();
                if (i === arr.length - 1) {
                    resolve({score, lives, arr});
                }
            }, delay);
            delay += 500;
        });
    });
}

function arraysTheSame(arr, userArr) {
    return arr.toString() === userArr.toString();
}

export function userInput({
    score,
    lives,
    arr
}: {
    score: number,
    lives: number,
    arr: Array<string>
}) {
    return new Promise<Object>(resolve => {
        const buttons = window.document.querySelector(".buttons");
        let input = [];
        const userclickButton = e => {
            if (e.target && e.target.nodeName === "BUTTON") {
                const buttonColor = e.target.classList[1];
                if (colors.includes(buttonColor) === false) {
                    return;
                }
                input = [...input, buttonColor];
                if (
                    arraysTheSame(arr.slice(0, input.length), input) === false
                ) {
                    buttons.removeEventListener("click", userclickButton);
                    resolve({score, lives: lives - 1});
                } else if (input.length === arr.length) {
                    // the user matched the sequence
                    buttons.removeEventListener("click", userclickButton);
                    resolve({score: score + 5, lives});
                }
            }
        };

        buttons.addEventListener("click", userclickButton);
    });
}
