function calculateResult(a, b, c) {
    let result = (a - b) / c;
    return result;
}

let a = 20;
let b = 10;
let c = 2;
let result = calculateResult(a, b, c);
console.log("результат:", result);



function calculateResult2(d) {
    let square = d * d;
    let cube = d * d * d;
    return { square: square, cube: cube };
}

let d = 10;
let result2 = calculateResult2(d);
console.log("число в квадрате = ", result2.square);
console.log("число в кубе = ", result2.cube);



function min(f,g) {
    if (f<g) {
        return f;
    } else {
        return g;
    }
};

function max(f,g) {
    if (f>g) {
        return f;
    } else {
        return g;
    }
};

let f = 20;
let g = 30;

console.log("минимальное = ", min(f,g))
console.log("максимальное = ", max(f,g))



function createArray(start, end) {
    let array = [];

    for (let i = start; i <= end; i++) {
        array.push(i);   
    }
    return array;
}

function displayArray(array) {
    console.log("полученный массив:",array); 
}

let start = parseInt(prompt('введите начальное значение массива'));
let end = parseInt(prompt('введите конечное значение массива'));


let array = createArray(start,end);
displayArray(array);



function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let number = parseInt(prompt("введите число"));
let result3 = isEven(number);

console.log("число", number, "чётное?", result3);



function isEven(number) {
    return number % 2 === 0;
}

function filter(array1) {
    let evennumbers = [];
    for (let i = 0; i < array1.length; i++) {
        if (isEven(array1[i])) {
            evennumbers.push(array1[i]);
        }
    }
    return evennumbers;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evennumbers = filter(numbers);

console.log("четные числа:", evennumbers);
console.log("исходный массив:", numbers);




function Pyramid(rows, symbol) {
    for (let i = 1; i <= rows; i++) {
        let line = '';
        for (let j = 0; j < i; j++) {
            line += symbol || i;
        }
        console.log(line);
    }
}

let rows = parseInt(prompt("введите количество рядов:"));
let symbol = prompt("введите символ для пирамиды или оставьте ");

Pyramid(rows, symbol);





function drawpiramid(p__rows, p__symbol) {
    for (let i = 1; i <= p__rows; i++) {
        let line = "";
        let space = "";
        for (let j = 0; j < i * 2 - 1; j++) {
            line = line + p__symbol;
        }

        for (let j = i; j <= p__rows; j++) {
            space += " "; 
        }

        document.write('<pre style="margin: 0;">' + space + line + '</pre>');
    }
}

let p__symbol = "*";
let p__rows = parseInt(prompt("Введите количество рядов:"));

drawpiramid(p__rows, p__symbol);



function fibonacciArray() {
    let fibArray = [0, 1];
    let nextFib = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];

    while (nextFib <= 1000) {
        fibArray.push(nextFib);
        nextFib = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
    }

    return fibArray;
}


let fibArray = fibonacciArray();
console.log("массив чисел Фибоначчи от 0 до 1000:", fibArray);




function sumDigits(numberss) {

    let digits = numberss.toString().split('').map(function(digit) {
        return parseInt(digit);
    });
    
    let sum = digits.reduce(function(acc, digit) {
        return acc + digit;
    }, 0);
    
    if (sum > 9) {
        return sumDigits(sum);
    } else {
        return sum;
    }
}


let numberss = 12345;
let resultss = sumDigits(numberss);
console.log("Результат:", resultss);



function arrayelements(array, index = 0) {
    
    if (index >= array.length) {
        return;
    }
 
    console.log(array[index]);
    arrayelements(array, index + 1);
}

let numbersss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arrayelements(numbersss);





function studetinfo() {
    
    let name = prompt("введите имя");
    let seurname = prompt("введите фамилию");
    let firstname = prompt("введите отчество");
    let groopnumber = prompt("введите номер группы");

    let title = "Домашняя работа: «Функции»";
    let studentInfo = `Выполнил: студент гр. ${groopnumber}`;
    let fullName = `${firstname} ${name} ${seurname}`;

    let maxlenght = title.length;
    if (studentInfo.length > maxlenght) {
        maxlenght = studentInfo.length;
    }

    if (fullName.length > maxlenght) {
        maxlenght = fullName.length;
    }

    function createline(char, length) {
        let line = "";
        for (let i = 0; i < length; i++) {
            line += char;
        }
        return line;
    }

    function createprobelline(text, length) {
        let probelline = text;
        while (probelline.length < length) {
            probelline += " ";
        }
        return probelline;
    }

    console.log(createline("*", maxlenght + 4));
    console.log(`* ${createprobelline(title, maxlenght)} *`);
    console.log(`* ${createprobelline(studentInfo, maxlenght)} *`);
    console.log(`* ${createprobelline(fullName, maxlenght)} *`);
    console.log(createline("*", maxlenght + 4));
}

studetinfo();




function isValidEmail(email) {
    let atindex = email.indexOf("@");
    if (atindex === -1 || email.indexOf("@", atindex + 1) !== -1) {
        return false;
        
    }

}



let email = prompt("введите email");
