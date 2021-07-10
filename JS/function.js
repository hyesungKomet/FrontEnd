'use strict';

// Function
// -fundamental building block in the program
// -subprogram can be used multiple times
// -performs a task or calculatesa value

// 1. Function declaration
// function name(param1, param2){body... return;}
// one function === one thing
// naming: do sth, command, verb
// function is object in JS - 함수명 뒤에 .을 입력하면 관련 obj들이 쭈욱 뜬다!
function printHello() {
    console.log('What\'s up');
}
printHello();

function log(msg) {
    console.log(msg);
}
log('What\'s up');

/* //in TypeScript
function log(msg: string): number {
    console.log(msg);
    return 0;
}
*/

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const comet = { name: 'comet' };
changeName(comet);
console.log(comet);

// 3. Default parameters
// added in ES 6
// msg만 값 주고 from 안주면 from은 default로 undefined가 찍힌다 
function showMsg(msg, from) {
    console.log(`${msg} by ${from}`);
}
showMsg('Hi!');


// 4. Rest parameters
// added in ES 6
// ...args : array가 전달됨
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    /* 
    for (const arg of args){
        console.log(arg);
    }
    */
    /*
    args.forEach((arg) => console.log(arg));
    */
}

printAll('dream', 'coding', 'comet');

// 5. Local scope
// local, global variable
// "밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다"
let globalMsg = 'global'; // global
function printMsg() {
    let msg = 'hello';  // local
    console.log(msg);
    console.log(globalMsg);
    function printAnother() {
        console.log(msg);
        let childMsg = 'hello';
    }
    //console.log(childMsg); // error!! local variable outside --> meaningless
}

printMsg();

// 6. Return a value
// 반환x는 return undefined가 생략된 것
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(result);

// 7. Early return, early exit
// 가능한 빨리 return 또는 exit하도록...
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    //이 방식이 10보다 클 때를 먼저 처리하는 것보다 더 빠름
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted - 함수 선언 이전에 호출해도 된다)
// a function expression is created when the execution reaches it
const print = function () { // anonymous function(함수 명이 읎다)
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer == 'love you') {
        printYes();
    }
    else {
        printNo();
    }
}
const printYes = function () {
    console.log('yes!');
};
const printNo = function () {
    console.log('No!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous function
const simpleBrint = function () {
    console.log('siimplePrint!');
};

const simplePrint = () => console.log('simplePrnt!');
const add = (a, b) => a + b;

// IIFE(Immediately Invoked Function Expression)
// 함수를 선언하고 바로 호출하고 싶을 때 유용!
(function hello() {
    console.log('IIFE');
})();