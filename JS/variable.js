//1. Use strict
// added in ES 5
// use this for Vanila Javascript
//js is flexible --> protect from lots of errors
'use strict';

// 2. variable rw(read/write)
// let (added in ES 6)

let globalName = 'James';
{
    let name = 'Comet';
    console.log(name);
    name = 'hello';
    console.log(name);
}

console.log(name); //not printed ({}안의 내용은 지역변수)
console.log(globalName);//printed (globalVariable은 글로벌변수)

// var (don't ever use this!!) - before ES 6
// var hoisting: move declaration from bottom to top
// has no block scope - 괄호 안에서 넣어도 밖에서 사용 가능
// --> too much risk!!
age = 21; //선언 전에 값 할당 가능--> 미친 짓
var age;

// 3. Constant, r(read only)
// favor immutable data type always for a few reasons:
//      - security : 값 변경 불가능
//      - thread safety : 다양한 스레드가 동시에 돌아갈 때 값에 접근, 변경 불가능
//      - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

//  Note!
//  Immutable data types: premitive types, frozen objects(i.e. object.freeze())
//  Mutable data types: all objects by default are mutable in JS

// 4. Variable types
//primitive, single item:number, string, boolean, null, undefined, symbol
//object, box container
//function, first-class function
//number: only number (dynamically assigned) - let a = 12 이런식으로 쓰면 알아서 타입 결정됨
//      special numeric values: infinity, -infinity, NaN

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bitInt (fairly new, don't use it yet)
const bigInt = 123456789012345678901234567890n;
console.log('value: ${bigInt}, type: ${typeof bigInt}');

// string
const char = 'c';
const james = 'james';
const greeting = 'hello' + james;
console.log('value: ${greeting}, type: ${typeof greeting}');
const helloBob = 'hi ${james}!'; // template literals(string)
console.log('value: ${helloBob}, type: ${typeof helloBob}');

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true; // true
const test = 3 < 1; // false

// null
let nothing = null;

// undefined
let x = undefined;
//  or 
let x; // only declaration

// symbol, create unique identifiers for objs
// 다른 자료구조에서 고유한 식별자 필요시 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2); //false - 같은 값이어도 다름

const gSymbol1 = Symbol.for('id');// 두 가지가 같아짐
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 == gSymbol2);// 이건 같다
console.log('value: ${symbol1.description}, type: ${typeof symbol1}');
//.description으로 타입 string으로 고치고 출력해야함

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log('value: ${text}, type: ${typeof text}'); // string
console.log(text.charAt(0)); // h - index 0부터 but 형이 정수형일 경우 오류발생!!!주의!!!!!
text = 1;
console.log('value: ${text}, type: ${typeof text}'); // number
text = '7' + 5; // '7' + '5' = '75'
console.log('value: ${test}, type: $typeof text}'); // string
text = '8' + '4'; // 8 / 4 = 2
console.log('value: ${test}, type: $typeof text}'); // number

// 6. object, real-life object, data structure
const james = { name: 'james', age: 21 }; // 다른 obj로 할당 불가능
james.age = 560; // 이런식으로 변경 가능