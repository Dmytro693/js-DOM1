document.addEventListener("DOMContentLoaded", () => {
    
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");

    const addBtn = document.getElementById("addBtn");
    const subtractBtn = document.getElementById("subtractBtn");
    const multiplyBtn = document.getElementById("multiplyBtn");
    const divideBtn = document.getElementById("divideBtn");

    const resultOutput = document.getElementById("result-output");
    const errorMessage = document.getElementById("error-message");

    function performCalculation(operation) {
        errorMessage.textContent = "";
        resultOutput.textContent = "";

        const val1 = num1Input.value;
        const val2 = num2Input.value;

        if (val1 === "" || val2 === "") {
            errorMessage.textContent = "Будь ласка, заповніть обидва поля.";
            return;
        }

        const num1 = parseFloat(val1.replace(",", "."));
        const num2 = parseFloat(val2.replace(",", "."));

        if (isNaN(num1) || isNaN(num2)) {
            errorMessage.textContent = "Введені дані не є числами.";
            return;
        }

        let result = 0;

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

                if (num2 === 0) {
                    errorMessage.textContent = "Ділення на нуль неможливе.";
                    return;
                }
                result = num1 / num2;
                break;
        }
        
        if (result % 1 !== 0) {
            result = Math.round(result * 100) / 100;
        }

        resultOutput.textContent = result;
    }

    addBtn.addEventListener('click', () => {
        performCalculation('add');
    });

    subtractBtn.addEventListener('click', () => {
        performCalculation('subtract');
    });

    multiplyBtn.addEventListener('click', () => {
        performCalculation('multiply');
    });

    divideBtn.addEventListener('click', () => {
        performCalculation('divide');
    });
});