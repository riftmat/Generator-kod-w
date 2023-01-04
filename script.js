let passLength = document.getElementById("lenght");
let ABC = document.getElementById("ABC");
let num = document.getElementById("num");
let spec = document.getElementById("!@#");
let btn = document.getElementById("done");
let result = document.getElementById("resu");

    //each input random generator
function RandomSmall() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

function RandomBig() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97).toUpperCase();
};

function RandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

function RandomSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,.`':;?/+_-";
    return symbols[Math.floor(Math.random() * symbols.length)];
};

    //btn gets password outcome
btn.addEventListener("click", () => {
    const length = passLength.value;
    const numbers = num.checked;
    const symbols = spec.checked;
    const size = ABC.checked;
    result.value = generatePassword(numbers, symbols, size, length);
});

    //loop that checks if inputs are checked and generates password acording to selected options
    /* i = -100 because if i = 0 and non of the inputs are checked it only generates 2 values.
    Max user input is set to 50 so double the amount of values is enough to meet max and min user input
    */
function generatePassword(number, symbol, size, length) {
    const lenghtTwo = passLength.value * 2;
    let generatedPassword = "";
    let variations = [number, symbol, size].length;

    for (let i = -lenghtTwo; i < length; i += variations) {
        if (number) {
            generatedPassword += RandomNumber();
        }
        if (symbol) {
            generatedPassword += RandomSymbol();
        }
        if (size) {
            generatedPassword += RandomBig();
        }
        generatedPassword += RandomSmall();
    };
    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
};

    // button and checkbox animation

const play = [
    { transform: "scale(1)"},
    { transform: "scale(0.95)"},
    { transform: "scale(0.90)"},
    { transform: "scale(0.95)"},
    { transform: "scale(1)"},
];

const playtime = {
    duration: 150,
}

document.querySelectorAll(".big input, .number input, .special input, .done input").forEach(item => {
    item.addEventListener("click", () => {
        item.animate(play, playtime);
    })
});