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
// // ----------TypeScript Tutorial #8 - Function Basics---------
// // function type with 'F'
// let greet: Function;
// // greet='hello'
// greet = () => {
//   console.log('hello');
// }
// // Giving a question mark makes it optional when calling the function, it remains as undefned. but, if we passing a default value to it, then no need for ? mark
// // Also, write the required parameters at first and then the optional parameters later.
// const add = (a:number, b:number=10, c?:number | string):void => {
//   console.log(a+b);
//   console.log(c);
// }
// add(5,25);
// const minus = (a:number, b:number):number => {
//   return a+b;
// }
// let result = minus(10,7);
// // ----------TypeScript Tutorial #9 Type Aliases---------
// // Reduce code duplication by having type aliases
// type StringOrNum = string | number;
// type objWithName = { name:string, uid: string };
// const logDetails = (uid: StringOrNum, item: string) => {
//   console.log(`${item} has a uid of ${uid}`);
// }
// const greet = (user: objWithName) => {
//   console.log(`${user.name} says hello`);
// }
// const greetAgain = (user: objWithName) => {
//   console.log(`${user.name} says hello`);
// }
// ----------TypeScript Tutorial #10 - Function Signatures---------
// Function signature descrbes the general definition of a function,
//  what argument it takes in and what type it returns.
// let greet : Function
// example 1
var greet; // It's hgoing to retr me void.
greet = function (name, greetings) {
    console.log(name + " says " + greetings);
};
// example 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
var logDetails;
logDetails = function (ninja) {
    console.log(ninja.name + " is a " + ninja.age + " years old");
};
