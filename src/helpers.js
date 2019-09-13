import {setScore, setLives} from "./scorePanel";

export function generateColArr(len = 0, arr = []) {
    const colors = ["red", "green", "blue", "yellow"];
    const rand = () => Math.floor(Math.random() * 4);
    while (len >= 1) {
        arr = [colors[rand()], ...arr];
        len -= 1;
    }
    return arr;
}

export function playSequence(arr = []) {
    return new Promise(resolve => {
        let delay = 500;
        arr.map((col, i) => {
            setTimeout(() => {
                document.querySelector(`.${col}`).click();
                if (i === arr.length - 1) {
                    resolve(arr);
                }
            }, delay);
            delay += 500;
        });
    });
}

function checkArray(arr = [], userArr = []) {
    return arr.toString() === userArr.toString();
}

export function userInput(arr = []) {
    const buttons = document.querySelector(".buttons");
    let input = [];
    function userclickButton(e) {
        const {style} = e.target;
        if (e.target && e.target.nodeName === "BUTTON") {
            input = [...input, e.target.classList[1]];
            if (checkArray(arr.slice(0, input.length), input) === false) {
                setLives(-1);
                buttons.removeEventListener("click", userclickButton);
                setTimeout(
                    () => playSequence(generateColArr(5)).then(userInput),
                    3000
                );
            }
        }
        if (input.length === arr.length) {
            setScore(5);
            buttons.removeEventListener("click", userclickButton);
            setTimeout(
                () => playSequence(generateColArr(5)).then(userInput),
                500
            );
        }
    }

    buttons.addEventListener("click", userclickButton);
}
