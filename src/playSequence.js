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


export function listenForResponse({score, lives, arr}: Props) {
    return new Promise<Object>(resolve => {
        const buttons = window.document.querySelector(".buttons");
        let clicks = 0;

        buttons.addEventListener("click", function evaluateResponse(e) {
            if (!e.target || e.target.nodeName !== "BUTTON") return;
           
            const buttonColor = e.target.classList[1];
            if (colors.includes(buttonColor) === false) return;
            
            clicks += 1;
            const sequenceColor = arr[clicks - 1];
            // incorrect choice
            if (sequenceColor !== buttonColor) {
                buttons.removeEventListener("click", evaluateResponse);
                resolve({score, lives: lives - 1});
            } 
            // the user matched the sequence
            if (clicks === arr.length) {
                buttons.removeEventListener("click", evaluateResponse);
                resolve({score: score + 5, lives});
            }
        });
    });
}
