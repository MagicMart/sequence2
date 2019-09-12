export function generateColArr(len = 0, arr = []) {
    const colors = ["red", "green", "blue", "yellow"];
    const rand = () => Math.floor(Math.random() * 4);
    while (len >= 1) {
        arr = [colors[rand()], ...arr];
        len -= 1;
    }
    return arr;
}

console.log("res", generateColArr(5));
