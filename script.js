let passLength = document.getElementById("lenght");
let ABC = document.getElementById("ABC");
let num = document.getElementById("num");
let spec = document.getElementById("!@#");
let btn = document.getElementById("done");
let result = document.getElementById("resu");

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

btn.addEventListener("click", () => {
    const length = passLength.value;
    const numbers = num.checked;
    const symbols = spec.checked;
    const size = ABC.checked;
    result.value = generatePassword(numbers, symbols, size, length);
});

function generatePassword(number, symbol, size, length) {
    let generatedPassword = "";
    let variations = [number, symbol, size].length;

    for (let i = -100; i < length; i += variations) {
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

