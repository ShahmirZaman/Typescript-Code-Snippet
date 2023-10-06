//Note: All parameters are required

//Named Function
// function display() {
//     console.log("Hello Typescript");
// }
// display();
//Named Function with parameters and return type
function sum(x:number,y:number):number {
    return x + y;
}
console.log(sum(2,3));
//Anonymous Function
let greeting = function() {
    console.log("Hello World")
}
greeting();
//Anonymous Function with parameters and return type
let subtract = function(x:number,y:number):number {
    return x - y;
}
console.log(subtract(50,10));

display();
function display() {
    console.log("Hello Typescript");
}
//Anonymous Function with exlicit type

let myAdd:(x:number,y:number) => number = function(x:number,y:number):number {
    return x + y;
}
console.log(myAdd(10,20));

//Type names dont matter 
let multiply:(baseValue:number,increment:number) =>number = function(baseValue:number,increment:number):number {
    return baseValue*increment;
}
console.log(multiply(5,5));

//Lamba Function or Arrow Function without return 
let myAdd1 = (a:number,b:number) => a + b;
console.log(myAdd1(12,4));

//This explain that how to pass function as an argument in another function in Typescript 
type GreetFunction = (a:string) => void;
const greetFunction: GreetFunction = (name: string) => {
    console.log(`Hello, ${name}!`);
};
function greeter(fn:GreetFunction) {
    console.log("HelloWorld")
}
greetFunction("Shahmir")
greeter(greetFunction);


