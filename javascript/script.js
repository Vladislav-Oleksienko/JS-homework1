'use strict'
// ==================== Перша задача з задачника Ruby ====================

console.log('=== ПЕРША ЗАДАЧА. Перший спосіб першої задачи з задачника Ruby ===');

let array = [99, 12, 5, 32, 4, 51, 6, 712, 8, 10];
let even = [];
let odd = [];

array.forEach((item, index) => {
    if (index % 2 === 0) {
        even.push(array[index]);
    } else {
        odd.push(array[index]);
    }
})

let fullArray = even.concat(odd);

console.log(fullArray);


// Другий спосіб

console.log('=== ПЕРША ЗАДАЧА. Другий спосіб першої задачи з задачника Ruby ===');

let renderArray1 = (arrayHandle) => {
    let newArray = []
    arrayHandle.forEach((item, index) => {
        if (index % 2 === 1) {
            newArray.push(item);
        } else {
            newArray.unshift(item);
        }
    })
    return newArray
}

console.log(renderArray1([99, 12, 5, 32, 4, 51, 6, 712, 8, 10]));



// ==================== Друга задача з задачника Ruby ====================

console.log('=== ДРУГА ЗАДАЧА. Перша спосіб першої задачи з задачника Ruby ===');

let evenSecond = [];
let oddSecond = [];

array.forEach((item, index) => {
    if (index % 2 === 0) {
        oddSecond.push(array[index]);
    } else {
        evenSecond.push(array[index]);
    }
})

let fullSecondArray = evenSecond.concat(oddSecond);

console.log(fullSecondArray);

// Другий спосіб

console.log('=== ДРУГА ЗАДАЧА. Другий спосіб першої задачи з задачника Ruby ===');

const renderArray = (arrayHandle) => {
    let newArray = []
    arrayHandle.forEach((item, index) => {
        if (index % 2 === 0) {
            newArray.push(item);
        } else {
            newArray.unshift(item);
        }
    })

    return newArray
}

console.log(renderArray([99, 12, 5, 32, 4, 51, 6, 712, 8, 10]));

// ==================== 1.Перша задача з задачника JavaScript ====================

console.log('=== ПЕРША ЗАДАЧА. Задачі з задачника JS ===');

const remainder = (a, b) => {
    return a % b;
}

console.log(remainder(5, 2));

// ==================== 2.Друга задача з задачника JavaScript ====================

console.log('=== ДРУГА ЗАДАЧА ===');

const checkRemainder = (a, b) => {
    if (a % b == 0) {
        return ('Делится');
    } else {
        return ('Делится с остатком');
    }
}

console.log(checkRemainder(5, 2));

// ==================== 3.Третя задача з задачника JavaScript ====================

console.log('=== ТРЕТЯ ЗАДАЧА ===');

let st = Math.pow(2, 10);

const degree = (a, b) => {
    return Math.pow(a, b);
}

console.log(st);

// ==================== 4.Четверта задача з задачника JavaScript ====================

console.log('=== ЧЕТВЕРТА ЗАДАЧА ===');

const squareRoot = (a) => {
    return Math.sqrt(a);
}

console.log(squareRoot(245));

// ==================== 5.П'ята задача з задачника JavaScript ====================

console.log('=== П\'ЯТА ЗАДАЧА ===');

const arrayElem = [4, 2, 5, 19, 13, 0, 10];

const getSqrt = (arr) => {
    let sum = 0;
        arr.forEach((item, i) => {
            sum += Math.pow(item, 3);
        })
    console.log(Math.sqrt(sum));
}

getSqrt(arrayElem);

// ==================== 6.Шоста задача з задачника JavaScript ====================

console.log('=== ШОСТА ЗАДАЧА ===');

console.log(Math.round(squareRoot(379)));
console.log(squareRoot(379).toFixed(1));
console.log(squareRoot(379).toPrecision(4));

// ==================== 7.Сьома задача з задачника JavaScript ====================

console.log('=== СЬОМА ЗАДАЧА ===');

console.log(Math.floor(squareRoot(587)));
console.log(Math.ceil(squareRoot(587)));

// ==================== 8.Восьма задача з задачника JavaScript ====================

console.log('=== ВОСЬМА ЗАДАЧА ===');

console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
console.log(Math.min(4, -2, 5, 19, -130, 0, 10));

// ==================== 9.Дев'ята задача з задачника JavaScript ====================

console.log('=== ДЕВ\'ЯТА ЗАДАЧА ===');

const getRandomNumber = (max, min) => {
    return Math.floor(Math.random() * min + max);
}

console.log(getRandomNumber(1,100));

// ==================== 10.Десята задача з задачника JavaScript ====================

console.log('=== ДЕСЯТА ЗАДАЧА ===');


const empty = [];
let i = 0;

while (i < 10) {
    empty[i] = Math.floor(Math.random() * (1 + 9999));
    i++;
}

console.log(empty);

// ==================== 11.Одинадцята задача з задачника JavaScript ====================

console.log('=== ОДИНАДЦЯТА ЗАДАЧА ===');

const abs = (a, b) => {
    return Math.abs(a - b);
}

console.log(abs(-10, -5));

// ==================== 12.Дванадцята задача з задачника JavaScript ====================

console.log('=== ДВАНАДЦЯТА ЗАДАЧА ===');

const positiveNumber = (a, b, c) => {
    c = a - b;
    return Math.abs(c);
}

console.log(positiveNumber(1,6));

// ==================== 13.Тринадцята задача з задачника JavaScript ====================

console.log('=== ТРИНАДЦЯТА ЗАДАЧА ===');
const newArr = [12, 15, 20, 25, 59, 79];

const average = (mass) => {
    let sum = 0;
    let test = 0;
    mass.forEach((item) => {
        sum += item;
        test = sum / mass.length;
    })
    console.log(test);
}
average(newArr);

// ==================== 14.Чотирнадцята задача з задачника JavaScript ====================

console.log('=== ЧОТИРНАДЦЯТА ЗАДАЧА ===');

const factorial = (a) => {
    if (a == 1) {
        return a; 
    } else {
        return a * factorial(a - 1);
    }
}

console.log(factorial(5));

////////////////////////////////////////////////////////////////////////////////////////////////////

// ==================== 1. Задача №1 з другої сторінки задачника JavaScript ====================

console.log('=== Задача №1 З ДРУГОЇ СТОРІНКИ ===');

const str = "aaa@bbb@ccc";

const repl = /@/g;

console.log(str.replace(repl, "!"));

// ==================== 2. Задача №2 з другої сторінки задачника JavaScript ====================

console.log('=== ДРУГА ЗАДАЧА З ДРУГОЇ СТОРІНКИ ===');

const secondStr = "aaa bbb ccc";

console.log(secondStr.substr(4, 3));
console.log(secondStr.substring(4, 7));
console.log(secondStr.slice(4, 7));

// ==================== 3. Задача №3 з другої сторінки задачника JavaScript ====================

console.log('=== ТРЕТЯ ЗАДАЧА З ДРУГОЇ СТОРІНКИ ===');

const date = '2025-12-31';

const fixDate = /-/g;

console.log(date.replace(fixDate, "/" ));

// ==================== 1. Перша задача з другої сторінки задачника JavaScript ====================

console.log('=== ПЕРША ЗАДАЧА З ДРУГОЇ СТОРІНКИ ===');

const string = "js";
console.log(string.toLocaleUpperCase());

// ==================== 2. Друга задача з другої сторінки задачника JavaScript ====================

console.log('=== ДРУГА ЗАДАЧА З ДРУГОЇ СТОРІНКИ ===');

const stringg = "JS";
console.log(stringg.toLowerCase());

// ==================== 3. Третя задача з другої сторінки задачника JavaScript ====================

console.log('=== ТРЕТЯ ЗАДАЧА З ДРУГОЇ СТОРІНКИ ===');

const learnJs = "я учу javascript!"

console.log(learnJs.length);

// ==================== 4. Четверта задача з другої сторінки задачника JavaScript ====================

console.log('=== ЧЕТВЕРТА ЗАДАЧА З ДРУГОЇ СТОРІНКИ ===');

console.log(learnJs.substr(2,3));
console.log(learnJs.substring(2,5));
console.log(learnJs.slice(2,5));

// ==================== 5. П'ята задача з другої сторінки задачника JavaScript ====================

console.log('=== П\'ЯТА ЗАДАЧА З ДРУГОЇ СТОРІНКИ ===');

console.log(learnJs.indexOf('учу'));

// ==================== 6. ШОСТА задача з другої сторінки задачника JavaScript ====================

console.log('=== ШОСТА ЗАДАЧА З ДРУГОЇ СТОРІНКИ ===');

const anyText = "Какой либо текст";

const test = () => {
    if (anyText.length > 14) {
        return anyText.substring(0, 14) + "...";
    } else {
        return anyText;
    }
}

console.log(test(anyText));

// ==================== 7. Сьома задача з другої сторінки задачника JavaScript ====================

console.log('=== СЬОМА ЗАДАЧА З ДРУГОЇ СТОРІНКИ ===');

const iLearn = "Я-учу-javascript";

const find = /-/g;

console.log(iLearn.replace(find, "!"));

// ==================== 8. Восьма задача з другої сторінки задачника JavaScript ====================

console.log('=== ВОСЬМА ЗАДАЧА З ДРУГОЇ СТОРІНКИ ===');

const everyWord = learnJs.split(' ');
console.log(everyWord);

// ==================== 9. ДЕВ'ЯТА задача з другої сторінки задачника JavaScript ====================

console.log('=== ДЕВ\'ЯТА ЗАДАЧА З ДРУГОЇ СТОРІНКИ ===');

const everySymbol = learnJs.split ('');
console.log(everySymbol);

// ==================== 10. Десята задача з другої сторінки задачника JavaScript ====================

console.log('=== ДЕСЯТА ЗАДАЧА З ДРУГОЇ СТОРІНКИ ===');

const splitDate = date.split('-');

const reversedDate = splitDate.reverse();

const joinDate = reversedDate.join(".");

console.log(joinDate);

// ==================== 11. Одинадцята задача з другої сторінки задачника JavaScript ====================

console.log('=== ОДИНАДЦЯТА ЗАДАЧА З ДРУГОЇ СТОРІНКИ ===');

const learnArray = ['я', 'учу', 'javascript', '!'];

const joinLearnArray = learnArray.join("+");

console.log(joinLearnArray);

// ==================== 12. Дванадцята задача з другої сторінки задачника JavaScript ====================

console.log('=== ДВАНАДЦЯТА ЗАДАЧА З ДРУГОЇ СТОРІНКИ ===');



const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize(learnJs));

// ==================== 13. Тринадцята задача з другої сторінки задачника JavaScript ====================

console.log('=== ТРИНАДЦЯТА ЗАДАЧА З ДРУГОЇ СТОРІНКИ ===');

const capitalizeEveryWord = (someString) => {
    let learnSplit = someString.split(' ');
    for (let i = 0; i < learnSplit.length; i++){
        learnSplit[i] =  learnSplit[i].charAt(0).toUpperCase() + learnSplit[i].substring(1);
    }
    return learnSplit.join(' ');
}

console.log(capitalizeEveryWord("любой текст фыв ыфв укц"));

// ==================== 14. Чотирнадцята задача з другої сторінки задачника JavaScript ====================

console.log('=== ЧОТИРНАДЦЯТА ЗАДАЧА З ДРУГОЇ СТОРІНКИ ===');

const transformString = (string) => {
    let learnSplit = string.split('_');
    for (let i = 0; i < learnSplit.length; i++){
        learnSplit[i] =  learnSplit[i].charAt(0).toUpperCase() + learnSplit[i].substring(1);
    }
    return learnSplit.join('');
}

console.log(transformString("var_text_asd"));

// ==================== 1. Перша задача з третьої сторінки задачника JavaScript ====================

console.log('=== ПЕРША ЗАДАЧА З ТРЕТЬОЇ СТОРІНКИ ===');

const anyArray = [1, 2, 3];
const anyArray2 = [4, 5, 6];

const anyArrayConcat = anyArray.concat(anyArray2);

console.log(anyArrayConcat);

// ==================== 2. Друга задача з третьої сторінки задачника JavaScript ====================

console.log('=== ДРУГА ЗАДАЧА З ТРЕТЬОЇ СТОРІНКИ ===');

const reverseAnyArray = anyArray.reverse();

console.log(reverseAnyArray);

// ==================== 3. Третя задача з третьої сторінки задачника JavaScript ====================

console.log('=== ТРЕТЯ ЗАДАЧА З ТРЕТЬОЇ СТОРІНКИ ===');

anyArray.reverse();

anyArray.push(4, 5, 6);
console.log(anyArray);

// ==================== 4. Четверта задача з третьої сторінки задачника JavaScript ====================

console.log('=== ЧЕТВЕРТА ЗАДАЧА З ТРЕТЬОЇ СТОРІНКИ ===');

anyArray.unshift(4, 5, 6);

anyArray.splice(6, 3);

console.log(anyArray);

// ==================== 5. П'ята задача з третьої сторінки задачника JavaScript ====================

console.log('=== П\'ЯТА ЗАДАЧА З ТРЕТЬОЇ СТОРІНКИ ===');

const arrayJs = ['js', 'css', 'jq'];

console.log(arrayJs.shift());

// ==================== 6. Шоста задача з третьої сторінки задачника JavaScript ====================

console.log('=== ШОСТА ЗАДАЧА З ТРЕТЬОЇ СТОРІНКИ ===');

console.log(arrayJs.pop());

// ==================== 7. Сьома задача з третьої сторінки задачника JavaScript ====================

console.log('=== СЬОМА ЗАДАЧА З ТРЕТЬОЇ СТОРІНКИ ===');

const someArray = [1, 2, 3, 4, 5];

console.log(someArray.slice(0,3));

// ==================== 8. Восьма задача з третьої сторінки задачника JavaScript ====================

console.log('=== ВОСЬМА ЗАДАЧА З ТРЕТЬОЇ СТОРІНКИ ===');

console.log(someArray.slice(3));

// ==================== 9. Дев'ята задача з третьої сторінки задачника JavaScript ====================

console.log('=== ДЕВ\'ЯТА ЗАДАЧА З ТРЕТЬОЇ СТОРІНКИ ===');

someArray.splice(1, 2);

console.log(someArray);

// ==================== 10. Десята задача з третьої сторінки задачника JavaScript ====================

console.log('=== ДЕСЯТА ЗАДАЧА З ТРЕТЬОЇ СТОРІНКИ ===');

const someArray2 = [1, 2, 3, 4, 5];

someArray2.splice(0,1) + someArray2.splice(3,1);

console.log(someArray2);

// ==================== 11. Одинадцята задача з третьої сторінки задачника JavaScript ====================

console.log('=== ОДИНАДЦЯТА ЗАДАЧА З ТРЕТЬОЇ СТОРІНКИ ===');

const someArray3 = [1, 2, 3, 4, 5];

someArray3.splice(3, 0, 'a', 'b', 'c');

console.log(someArray3);

// ==================== 12. Дванадцята задача з третьої сторінки задачника JavaScript ====================

console.log('=== ДВАНАДЦЯТА ЗАДАЧА З ТРЕТЬОЇ СТОРІНКИ ===');

const someArray4 = [1, 2, 3, 4, 5];

someArray4.splice(1, 0, "a", "b") + someArray4.splice(6, 0, "c") + someArray4.splice(8, 0, "e");

console.log(someArray4);

// ==================== 13. Тринадцята задача з третьої сторінки задачника JavaScript ====================

console.log('=== ТРИНАДЦЯТА ЗАДАЧА З ТРЕТЬОЇ СТОРІНКИ ===');

const sortArray = [3, 4, 1, 2, 7];

sortArray.sort();

console.log(sortArray);

// ==================== 14. Чотирнадцята задача з третьої сторінки задачника JavaScript ====================

console.log('=== ЧОТИРНАДЦЯТА ЗАДАЧА З ТРЕТЬОЇ СТОРІНКИ ===');

let object = {
    js:'test',
    jq: 'hello',
    css: 'world'
}

console.log(Object.keys(object));

///////////////////////////////////

let arrio = [1, 5, 2, 3, 4];

// const ravensto = (a, b) => {
//     if (a[0] < a[i] < a[-1]) {
//         return a[2];
//     } else {
//         console.log("sad");
//     }
// }

arrio.forEach((item, index) => {
    if (arrio[0] < arrio[index] < arrio[-1] ) {
        arrio.push("asd");
    } else {
        arrio.push("213");
    }
})


console.log(arrio);