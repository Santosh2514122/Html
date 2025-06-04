function calculate(operation) {
    const num1 = parseFloat(document.getElementById("textbox1").value);
    const num2 = parseFloat(document.getElementById("textbox2").value);
    const resultField = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2)) {
        resultField.value = "Invalid input";
        return;
    }

    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num2 === 0 ? "Cannot divide by zero" : num1 / num2;
            break;
        default:
            result = "Unknown operation";
    }

    resultField.value = result;
}