"use strict";
//-----------TypeScript Tutorial #6 - Dynamic (any) Types-----------
// // We can store any type of value into this
// let age: any = 25;
// age = true;
// console.log(age);
// age = 'hello';
// console.log(age);
// age = {name: 'luigi'}
// console.log(age);
// // We can push any kind of value inside the array
// let mixed: any[] = []
// mixed.push('sd');
// mixed.push(32);
// mixed.push(true);
// console.log(mixed);
// // The values of these properties can be of any type
// let ninja: {name: any, age: any}
// ninja ={name: 'yoshi', age: 23}
// console.log(ninja);
//-----------TypeScript Tutorial #7 - Better Workflow & tsconfig-----------
// Prettyt much about arranging the files and configuring the cnofig file of ts
// console.log('test');
// ----------TypeScript Tutorial #8 - Function Basics---------
// function type with 'F'
var greet;
// greet='hello'
greet = function () {
    console.log('hello');
};
// Giving a question mark makes it optional when calling the function, it remains as undefned. but, if we passing a default value to it, then no need for ? mark
var add = function (a, b, c) {
    if (b === void 0) { b = 10; }
    console.log(a + b);
};
add(5, 25);
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
