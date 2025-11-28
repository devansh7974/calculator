let screen = document.getElementById("screen");
let memory = 0;

function pressKey(value) {
    if (value === "AC") {
        screen.innerText = "0";
        return;
    }

    if (value === "CE") {
        screen.innerText = screen.innerText.slice(0, -1) || "0";
        return;
    }

    // Memory Functions
    if (value === "M+") { memory += Number(screen.innerText); return; }
    if (value === "M-") { memory -= Number(screen.innerText); return; }
    if (value === "MRC") { screen.innerText = memory; return; }

    if (screen.innerText === "0") {
        screen.innerText = value;
    } else {
        screen.innerText += value;
    }
}

function calculate() {
    try {
        let expression = screen.innerText.replace("÷", "/");
        screen.innerText = eval(expression);
    } catch {
        screen.innerText = "Error";
    }
}
