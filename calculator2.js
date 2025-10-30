const outPut = document.getElementById("displayOutput");
const inPut = document.getElementById("displayInput");

let firstNum = " ";
let secondNum = " ";
let operator = " ";
let isOperatorClicked = false;

document.querySelectorAll("div.numberArea button").forEach((button) => {
    button.addEventListener("click", () => {

        const getValue = button.id;

        if (!isOperatorClicked) {
            firstNum += getValue;

            inPut.textContent = firstNum;

        } else {
            secondNum += getValue;
            inPut.textContent = firstNum + " " + operator + " " + secondNum;
        }
    });
});

document.querySelectorAll("div.operatorButtons button").forEach((button) => {
    button.addEventListener("click", () => {
    
    
        if (secondNum !== " ") {
            miniOperate();
            secondNum = " ";
        }
        
        operator = button.id;
        console.log(operator);
        inPut.textContent = firstNum + operator;
        isOperatorClicked = true;

    });
});

document.querySelectorAll("div.miscButtons button").forEach((button) => {
    button.addEventListener("click", () => {
        const getValue = button.id;
        
        
        if (getValue === "=") {
            operate();
        }
        else {
            firstNum = " ";
            secondNum = " ";
            operator = " ";
            isOperatorClicked = false;
            inPut.textContent = " ";
            outPut.textContent = " ";
        }
    });
});

function miniOperate() {
    let num1 = parseFloat(firstNum);
    let num2 = parseFloat(secondNum);
    let result = 0;

    switch (operator) {
        case "+":
            result = num1 + num2;
            firstNum = result;
            break;
        case "-":
            result = num1 - num2;
            firstNum = result;
            break;
        case "×":
            result = num1 * num2;
            firstNum = result;
            break;
        case "÷":
            result = num1 / num2;
            firstNum = result;
            break;
        case "%":
            result = num1 % num2;
            firstNum = result;
            break;

        default:
            result = "error";
    }

    outPut.textContent = result;
}

function operate() {
    let num1 = parseFloat(firstNum);
    let num2 = parseFloat(secondNum);
    let result = 0;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "×":
            result = num1 * num2;
            break;
        case "÷":
            result = num1 / num2;
            break;
        case "%":
            result = num1 % num2;
            break;

        default:
            result = "error";
    }

    outPut.textContent = result;
}