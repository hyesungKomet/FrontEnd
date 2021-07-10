'use strict';

// 1. String concatenation
// escape 문자들 - \n \t \' etc
console.log('my' + 'cat');
console.log('1' + 2);

// 2. Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 * 1);
console.log(1 / 1);
console.log(1 % 1);
console.log(1 ** 1);

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; //전위
const postIncrement = counter++; //후위

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators
// || (or) && (and) ! (not)
// 중요!!! 밑의 OR 두번 들어간 식에서는 true가 하나라도 나오면 전체 값이 true가 되기에
// 복잡한 식일수록 뒤에 배치하고 간단한 값이나 수식을 앞쪽에 배치해야 효율이 좋다
// 마찬가지로 and인 경우 하나라도 false가 나오면 false
console.log('or: ${value1 || value2 || check()}');

function check() {
    for (let i = 0; i < 10; i++) {
        console.log('wanna sleep\n');
    }
    return true;
}

// 7. Equality
const stringNum = '5';
const numberNum = 5;

// == : loose equality, with type conversion
console.log(stringNum == numberNum);
console.log(stringNum != numberNum);

// ===: strong equality, no type conversion
console.log(stringNum === numberNum);
console.log(stringNum !== numberNum);

// object equality by reference
const comet1 = { name: 'comet' };
const comet2 = { name: 'comet' };
const comet3 = comet1;
console.log(comet1 == comet2);
console.log(comet1 === comet2);
console.log(comet1 === comet3);
//fft

// quiz!!!
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);
//tftftf

// 8. Conditional operators: if
//if, else if, else
const name = 'comet';
if (name == 'comet') {
    console.log('Hello Comet');
}
else if (name == 'kim') {
    console.log('Hey, Kim');
}
else {
    console.log('Who are you?');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
// true -> value1 | false -> value2
console.log(name == 'comet' ? 'yeah' : 'nooo');

// 10. Switch statement
// use for multiple if checks
// use for enum-like(enumeration - 열거) value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('I hate you');
        break;
    case 'Chrome':
        console.log('Good to go');
        break;
    case 'Firefox':
        console.log('Okay');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy, 
// body code is executed
let i = 3;
while (i > 0) {
    console.log('i: ${i}');
    i--;
}

// do while loop
do {
    console.log('i: ${i}');
    i--;
} while (i > 0);

// for loop
// for(begin; condition; step)
for (let i = 0; i < 5; i++) {
    console.log('printing i: ${i}');
}

// nested loops
// 다중 반복문 - 연산처리 효율 bad - 지양!!

// break, continue