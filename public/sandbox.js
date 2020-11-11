"use strict";
// example 1:
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example 2:
let calc;
calc = (numOne, numTwo, action) => {
    if (action === ' add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3:
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
greet = () => {
    console.log(' hello again');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, 20);
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
// Generics
// Re-usable blocks of code which can be used with different types
// Example
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
// let docOne = addUID({name: 'thomas', age: 27});
// console.log(docOne.name);
// Generics with interfaces
// interface Resource<T> {
//     uid: number;
//     resourceName: string;
//     data: T;
// }
// const docThree: Resource<string> = {
//     uid: 1,
//     resourceName: 'person',
//     data: 'thomas'
// }
// ENUMS
// enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON}
// interface Resource<T>{
//     uid: number;
//     resourceType: ResourceType;
//     data:T;
// }
// const docOne: Resource<string> ={
//     uid: 1,
//     resourceType: ResourceType.BOOK,
//     data: 'A dust in the wind'
// }
// console.log(docOne);
// TUPLES
let arr = ['ryu', 25, true];
let tup = ['ryu', 25, true];
console.log(tup);
