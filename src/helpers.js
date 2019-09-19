// @flow

import {setScore, setLives} from "./scorePanel";
import startButton from "./startButton";
import endGame from "./endGame";

export function generateColArr(len: number) {
    let arr = [];
    const colors = ["red", "green", "blue", "yellow"];
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
            input = [...input, e.target.classList[1]];
            if (arraysTheSame(arr.slice(0, input.length), input) === false) {
                setLives(-1);
                buttons.removeEventListener("click", userclickButton);
                if (setLives() < 1) {
                    return endGame();
                }
                return startButton();
            }
        }
        if (input.length === arr.length) {
            setScore(5);
            buttons.removeEventListener("click", userclickButton);
            return startButton();
        }
    };

    buttons.addEventListener("click", userclickButton);
}
