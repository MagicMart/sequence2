// @flow

import startButton from "./startButton";
import { colors } from "../utils/buttonColors";

const synth = new window.Tone.Synth().toMaster();

const buttons = window.document.querySelector(".buttons");

const colourSounds = {
    [colors[0]]: "C4",
    [colors[1]]: "D4",
    [colors[2]]: "E4",
    [colors[3]]: "F4",
};

function clickButton(e) {
    const { style } = e.target;
    if (e.target && e.target.nodeName === "BUTTON") {
        const org = e.target.classList[1];
        synth.triggerAttackRelease(colourSounds[org], "16n");
        style.cssText = "background: white; border: 5px solid " + org;
        setTimeout(() => (style.cssText = `background: ${org}`), 200);
    }
}

buttons.addEventListener("click", clickButton);

startButton({ len: 5, score: 0, lives: 3 });
