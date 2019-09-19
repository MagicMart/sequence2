// @flow

import startButton from "./startButton";

const synth = new window.Tone.Synth().toMaster();

const buttons = window.document.querySelector(".buttons");

const colourSounds = {
    red: "C4",
    green: "E4",
    blue: "F4",
    yellow: "G4"
};

function clickButton(e) {
    const {style} = e.target;
    if (e.target && e.target.nodeName === "BUTTON") {
        const org = e.target.classList[1];
        synth.triggerAttackRelease(colourSounds[org], "16n");
        style.cssText = "background: white; border: 5px solid " + org;
        setTimeout(() => (style.cssText = `background: ${org}`), 200);
    }
}

buttons.addEventListener("click", clickButton);

startButton();
