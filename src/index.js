const buttons = document.querySelector(".buttons");
const body = document.querySelector("body");

function clickButton(e) {
    const {style} = e.target;
    if (e.target && e.target.nodeName === "BUTTON") {
        const org = style.background;
        style.cssText = "background: green; border: 5px solid black";
        setTimeout(() => (style.cssText = `background: ${org}`), 300);
    }
}

buttons.addEventListener("click", clickButton);
