// @flow

import {setScore, setLives} from "./scorePanel";
import startButton from "./startButton";
import endGame from "./endGame";
import {colors} from "../utils/buttonColors";

export function generateColArr(len: number) {
    let arr = [];

    const rand = () => Math.floor(Math.random() * 4);
    while (len >= 1) {
        arr = [colors[rand()], ...arr];
        len -= 1;
    }
    return arr;
}

export function playSequence(arr: Array<string>) {
    return new Promise<Array<string>>(resolve => {
        let delay = 500;
        arr.map((col, i) => {
            setTimeout(() => {
                window.document.querySelector(`.${col}`).click();
                if (i === arr.length - 1) {
                    resolve(arr);
                }
            }, delay);
            delay += 500;
        });
    });
}

function arraysTheSame(arr, userArr) {
    return arr.toString() === userArr.toString();
}

export function userInput(arr: Array<string>) {
    const buttons = window.document.querySelector(".buttons");
    let input = [];
    const userclickButton = e => {
        if (e.target && e.target.nodeName === "BUTTON") {
            const buttonColor = e.target.classList[1];
            if (colors.includes(buttonColor) === false) {
                return;
            }
            input = [...input, buttonColor];
            // if the input doesn't match arr of the same length, take away a life
            if (arraysTheSame(arr.slice(0, input.length), input) === false) {
                setLives(-1);
                buttons.removeEventListener("click", userclickButton);
                if (setLives() < 1) {
                    return endGame();
                } else {
                    return startButton();
                }
            } else if (input.length === arr.length) {
                // the user matched the sequence
                setScore(5);
                buttons.removeEventListener("click", userclickButton);
                return startButton();
            }
        }
    };

    buttons.addEventListener("click", userclickButton);
}
