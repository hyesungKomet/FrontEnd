'use strict';
/*
object vs 자료구조
object: 서로 연관된 특징이나 행동 묶어놓음(property & method)
자료구조: 비슷한 obj를 묶은 것
JS에서의 자료구조? : 다른 data type도 묶기 가능!
자구의 핵심: 검색, 정렬, 삽입, 삭제

배열- index로 접근한다!
*/

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['python', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all elements

// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('butter', 'comet');
console.log(fruits);
// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);
// unshift: add an item to the beginning
fruits.unshift('butter', 'comet');
// shift: remove an itemfrom the beginning
fruits.shift();
fruits.shift();
console.log(fruits);
// note!!!!! shift, unshift are much slower than pop and push
// 맨 앞에 넣으려면 죄다 뒤로 한칸씩 옮겨주어야 함

// splice: remove an item by index position
fruits.push('airplane', 'coke', 'sleep');
console.log(fruits);
fruits.splice(1); //인덱스 1번부터 끝까지 다지움(0만 남음)
fruits.splice(1, 1); //인덱스 1번부터 1개(1번만) 지움
fruits.splice(1, 2, 'js', 'node'); // 1,2 지우고 그 자리에 js, node 넣음

// combine two arrays
const fruits2 = ['pear', 'ship'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching
// indexof: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('python'));
// includes
console.log(fruits.includes('JS'));
// lastIndexof
console.clear();
fruits.push('node');
console.log(fruits);
console.log(fruits.indexOf('node')); // 가장 먼저 오는 인덱스번호 반환
console.log(fruits.lastIndexOf('node')); //last이기에 여러개 있으면 그중 가장 큰 인덱스번호 반환

