let number1 = '';
let number2 = ''; 
let operator = '';
let result = false;

const numbersbuttons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const operators = ['+', '-', 'x', '/'];

const displayres = document.querySelector('.stroka-1'); 

function clearCE() {
    number1 = '';
    number2 = '';
    operator = '';
    result = false;
    displayres.textContent = '0';
}

document.querySelector('.clearspan').onclick = clearCE;

document.querySelectorAll('.stroka-2, .stroka-3, .stroka-4, .stroka-5, .stroka-6').forEach(row => {
    row.onclick = (event) => { 
        if(!event.target.classList.contains('button')) return;
        if(event.target.classList.contains('clearspan')) return;

        const key = event.target.textContent;

        if(numbersbuttons.includes(key)) {
            if (result && operator === '') {
                number1 = key;
                result = false;
            } else if (operator === '') {
                number1 += key;
            } else {
                number2 += key;
            }
            displayres.textContent = operator === '' ? number1 : `${number1} ${operator} ${number2}`;
        } else if (operators.includes(key)) {
            if (number1 !== '' && number2 === '') {
                operator = key;
                displayres.textContent = `${number1} ${operator}`;
            } else if (number1 !== '' && number2 !== '') {
                number1 = calculate(number1, number2, operator);
                operator = key;
                number2 = '';
                displayres.textContent = `${number1} ${operator}`;
                result = false;
            }
        } else if (key === '=') {
            if (number1 !== '' && operator !== '' && number2 !== '') {
                number1 = calculate(number1, number2, operator);
                displayres.textContent = number1;
                result = true;
                operator = '';
                number2 = '';
            }
        }
    };
});

function calculate(num1, num2, operator) {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let result;

    switch (operator) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case 'x':
            result = n1 * n2;
            break;
        case '/':
            if (n2 === 0) {
                clearCE();
                return 'Error';
            }
            result = n1 / n2;
            break;
        default:
            return num1;
    }

    return result.toString(); 
}
