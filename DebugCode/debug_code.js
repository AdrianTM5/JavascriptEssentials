function performOperation() {
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    if(!isNaN(num1) && !isNaN(num2)) {
        let result;
        debugger;
        let op = document.getElementById('op').value;
        console.log(op);
        switch(op) {
            case 'x': result = multi(num1, num2); break;
            case '+': result = sum(num1, num2); break;
            case '-': result = resta(num1, num2); break;
            case '/': result = divi(num1, num2); break;
        }
        displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function multi(a, b) {
    return a * b;
}

function sum(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function divi(a, b) {
    return a / b;
}

function displayResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}