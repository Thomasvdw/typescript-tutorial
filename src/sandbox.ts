// example 1:
let greet: (a:string,b:string) => void;
greet = (name: string, greeting: string) =>{
    console.log(`${name} says ${greeting}`);
}

// example 2:
let calc: (a: number, b:number, c:string) => number;
calc = (numOne:number, numTwo:number, action:string) => {
    if (action === ' add'){
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
}

// example 3:
let logDetails: (obj: {name: string, age: number}) => void;

type person = {name: string, age:number};

logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}


greet = () => {
    console.log(' hello again' );
}

const add = (a: number, b:number, c: number|string = 10) => {
    console.log(a+b);
    console.log(c);
}

add(5,10,20);

const minus = (a: number, b:number) =>{
    return a + b;
}

let result = minus(10,7);

type StringOrNum = string | number;


// Generics
// Re-usable blocks of code which can be used with different types
// Example
const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

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
let tup: [string,number,boolean] = ['ryu',25,true];
console.log(tup);



