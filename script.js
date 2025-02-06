let stra = 'aaa@bbb@ccc';
let newstr = stra.split('@').join('!');
console.log(newstr);

let str = 'aaa@bbb@ccc';
let newstra = str.replace(/@/g, '!');
console.log(newstra);


let date = '2025-12-31';
let [year, month, day] = date.split('-');
let format = `${day}-${month}-${year}`;
console.log(format);



let str_3 = 'Я учу javascript!';
let word1 = str_3.substr(2, 3); // "учу"
let word2 = str_3.substr(6, 10); // "javascript"

console.log(word1); // вывод: "учу"
console.log(word2); // вывод: "javascript"

let str_3_1 = 'Я учу javascript!';
let word1_1 = str_3_1.substring(2, 5); // "учу"
let word2_1 = str_3_1.substring(6, 16); // "javascript"

console.log(word1_1); // вывод: "учу"
console.log(word2_1); // вывод: "javascript"

let str_3_2 = 'Я учу javascript!';
let word1_2 = str_3_2.slice(2, 5); // "учу"
let word2_2 = str_3_2.slice(6, 16); // "javascript"

console.log(word1_2); // вывод: "учу"
console.log(word2_2); // вывод: "javascript"


let arr1 = [4, 2, 5, 19, 13, 0, 10];
let sumOfCubes = 0;

for (let i = 0; i < arr1.length; i++) {
    sumOfCubes += Math.pow(arr1[i], 3);
}

let result = Math.sqrt(sumOfCubes);

console.log(result); 



// let c = 0;
// function sums(a, b) {
//     c = a - b;
//     while (c <= 0) {
//         a++;
//         c = a - b;
//     }
//     return c;
// }

// console.log(c);

// sums(3, 5);
// console.log(c); 


// let c = 0;
// function sums(a, b) {
//     c = a - b;
//     if (c <= 0) {
//         return sums(a + 1, b);
//     }
//     return c;
// }

// sums(3, 5);
// console.log(c); 


let a = 3;
let b = 5;
let c = Math.abs(a - b); 
console.log(c); 

a = 6;
b = 1;
c = Math.abs(a - b);
console.log(c); 



function addZero(num) {
    return num < 10 ? '0' + num : num;
}

function getDateTime() {
    let now = new Date();
    
    let hours = addZero(now.getHours());
    let minutes = addZero(now.getMinutes());
    let seconds = addZero(now.getSeconds());
    
    let day = addZero(now.getDate());
    let month = addZero(now.getMonth() + 1); 
    let year = now.getFullYear();
    
    return `${hours}:${minutes}:${seconds} ${day}.${month}.${year}`;
}

console.log(getDateTime());



let str7 = 'aa aba abba abbba abca abea';
let matches = str7.match(/ab+a/g);
console.log(matches); // вывод: ['aba', 'abba', 'abbba']




function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^\+\d{1,3} \d{1,4} \d{4,}$/;
    return phoneRegex.test(phoneNumber);
}

console.log(validatePhoneNumber('+375 29 1234567')); // true



function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,11}$/;

    if (!emailRegex.test(email)) {
        return false;
    }
    
    
    const localPart = email.split('@')[0];
    if (localPart.length <= 2 || /^\d+$/.test(localPart)) {
        return false;
    }
    
    const domainPart = email.split('@')[1];
    const tld = domainPart.split('.').pop();
    if (tld.length < 2 || tld.length > 11) {
        return false;
    }
    
    return true;
}

console.log(validateEmail('example.email@example.com')); 
console.log(validateEmail('e@ex.com')); 
console.log(validateEmail('example@ex@ample.com')); 
console.log(validateEmail('example@domain.russia')); 
console.log(validateEmail('пример@пример.com')); 




function extractUrlComponents(url) {
    const urlPattern = /^(https?:\/\/[^\/?#]+)([^?#]*)(\?[^#]*)?(#.*)?$/;
    const match = url.match(urlPattern);

    const domain = match[1] || '';
    const path = match[2] || '';
    const queryParams = match[3] ? match[3].substring(1) : '';
    const fragment = match[4] ? match[4].substring(1) : '';

    return [domain, path, queryParams, fragment];
}

const url = 'https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3';
console.log(extractUrlComponents(url));
