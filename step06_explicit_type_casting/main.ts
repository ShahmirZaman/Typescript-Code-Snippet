let myName: unknown = "Ahmed";
console.log(myName);
//explicit type casting syntax
console.log((myName as string).length);
let age:number = 23;
// console.log((age as string));//error
//you can not convert number into string type 
let age2:unknown = age as unknown;
console.log((age2));
//First you have to convert it to unknown type than to number
console.log((age2 as string).length);

//Alternate syntax explicit type casting
    console.log((<string> myName).toUpperCase());