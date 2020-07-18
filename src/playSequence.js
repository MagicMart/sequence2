// @flow

import {colors} from "../utils/buttonColors";

type PropsGCA = {
    len: number,
    score: number,
    lives: number
};

export function randomColourSequence({len, score, lives}: PropsGCA) {
    const random = (): number => Math.floor(Math.random() * 4);
    const arr: Array<string> = Array(len).fill(random).map(fn => colors[fn()]);
    return {len, score, lives, arr};
}

type Props = {
    score: number,
    lives: number,
    arr: Array<string>
};

export function playSequence({score, lives, arr}: Props) {
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

export function listenForUserResponse({score, lives, arr}: Props) {
    return new Promise<Object>(resolve => {
        const buttons = window.document.querySelector(".buttons");
        let input = [];
        const doTheyFollow = e => {
            if (!e.target || e.target.nodeName !== "BUTTON") return;
           
            const buttonColor = e.target.classList[1];
            if (colors.includes(buttonColor) === false) return;
            
            input = [...input, buttonColor];
            if (
                arraysTheSame(arr.slice(0, input.length), input) === false
            ) {
                buttons.removeEventListener("click", doTheyFollow);
                resolve({score, lives: lives - 1});
            } else if (input.length === arr.length) {
                // the user matched the sequence
                buttons.removeEventListener("click", doTheyFollow);
                resolve({score: score + 5, lives});
            }
            
        };

        buttons.addEventListener("click", doTheyFollow);
    });
}
