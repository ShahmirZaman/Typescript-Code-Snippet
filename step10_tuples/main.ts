//Elements in order
//Fixed Length
//Elements types different

//Normal Array
// type ArrType = number[];
// let myArray : ArrType = [1,2,3];
// myArray[7] = 100;
// console.log(myArray);

// let myTuple: [string,number] = ["Rehan","22"] //error
// type myTupleArray = [string,number,string];
// let myTuple: myTupleArray = ["Rehan",22,"Ahmed"];
// console.log(myTuple);
// myTuple.push("Bilal");
// console.log(myTuple);
//Tuple allow array methods

// function printMe(...list:myTupleArray) {
//     console.log(list);
//     console.log(list[0]);
//     console.log(list[1]);
//     console.log(list[2]);
// }
// printMe(...myTuple);
// printMe([])    //error
//tuple cannot pass [] empty array

// function printMe(...list:number[]) {
//     console.log(list);
//     console.log(list[0]);
//     console.log(list[1]);
//     console.log(list[2]);
// }
// printMe(...[2,3,4]);
//Array case accept [] empty array

// let myArr3 = [3,4,5,6,7,8,99];
// let myArr4 = [...myArr3];
// console.log(myArr4);
//With spread operator
// type newType = [string,...number[]]
// let myTuple3:newType = ["Rehan",...[23,45,56,78,98,99]]
// function printMe(list:newType) {
//     console.log(list);
//     console.log(list[0]);
//     console.log(list[1]);
//     console.log(list[2]);
// }
// printMe(myTuple3);
//without spread operator
// type newType = [string,number[]]
// let myTuple3:newType = ["Rehan",[23,45,56,78,98,99]]
// function printMe(list:newType) {
//     console.log(list);
//     console.log(list[0]);
//     console.log(list[1]);
//     // console.log(list[2]);
// }
// printMe(myTuple3);
// type tupleType6 = [string,string?,number?]; 
// let myTuple5 : tupleType6 = ["Muhammad"];
// let myTuple6 : tupleType6 = ["Muhammad","Rehan"];
// let myTuple7 : tupleType6 = ["Muhammad","Rehan",38];

//Tuple types have the advantage that you can accurately describe the type of an array of mixed types

var tuple: [number,string] = [1,"bob"];
var secondElement = tuple[1];    // secondElement now has type 'string' 

// Typically an array contains zero to many objects of a
// single type. TypeScript has special analysis around
// arrays which contain multiple types, and where the order
// in which they are indexed is important.

// These are called tuples. Think of them as a way to
// connect some data, but with less syntax than keyed objects.

// You can create a tuple using JavaScript's array syntax:
const fallingResponse = ["Not found",404];

// but you will need to declare its type as a tuple.

const passingResponse: [string,number] = ["{}", 200];

// If you hover over the two variable names you can see the
// difference between an array ( (string | number)[] ) and
// the tuple ( [string, number] ).

// As an array, the order is not important so an item at
// any index could be either a string or a number. In the
// tuple the order and length are guaranteed.

if(passingResponse[1] === 200) {
    const localInfo = JSON.parse(passingResponse[0]);
    console.log(localInfo);
}
// This means TypeScript will provide the correct types at
// the right index, and even raise an error if you try to
// access an object at an un-declared index.

// passingResponse[2];   //error of extra index

// A tuple can feel like a good pattern for short bits of
// connected data or for fixtures.

type StaffAccount = [number,string,string,string?];

const staff: StaffAccount[] = [
    [0, "Adankwo", "adankwo.e@"],
    [1, "Kanokwan", "kanokwan.s@"],
    [2, "Aneurin", "aneurin.s@", "Supervisor"],
];
console.log(staff);

// When you have a set of known types at the beginning of a
// tuple and then an unknown length, you can use the spread
// operator to indicate that it can have any length and the
// extra indexes will be of a particular type:

type PayStubs = [StaffAccount, ...number[]];
const payStubs: PayStubs[] = [
    [staff[0], 250],
    [staff[1], 250, 260],
    [staff[0], 300, 300, 300],
];
console.log(payStubs);
const monthOnePayments = payStubs[0][1] + payStubs[1][1] + payStubs[2][1];
const monthTwoPayments = payStubs[1][2] + payStubs[2][2];
const monthThreePayments = payStubs[2][2];
console.log(monthOnePayments);
console.log(monthTwoPayments);
console.log(monthThreePayments);

// You can use tuples to describe functions which take
// an undefined number of parameters with types:

declare function calculatePayForEmployee(id: number, ...args: [...number[]]): number;

calculatePayForEmployee(staff[0][0], payStubs[0][1]);
calculatePayForEmployee(staff[1][0], payStubs[1][1], payStubs[1][2]);