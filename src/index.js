// @flow

import {startButton} from "./startButton";

const buttons = window.document.querySelector(".buttons");

function clickButton(e) {
    const {style} = e.target;
    if (e.target && e.target.nodeName === "BUTTON") {
        const org = e.target.classList[1];
        style.cssText = "background: white; border: 5px solid " + org;
        setTimeout(() => (style.cssText = `background: ${org}`), 200);
    }
}

buttons.addEventListener("click", clickButton);

startButton();
