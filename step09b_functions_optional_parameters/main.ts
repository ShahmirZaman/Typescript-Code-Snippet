//Named Function with optional parameters
function buildName(firstName:string,lastName?:string):string {
    if(lastName) {
        return firstName + " " + lastName
    }
    else {
        return firstName
    }
}
let result1 = buildName("Bob"); //No error b/c 2 paramter is optional
console.log(result1);
let result2 = buildName("Bob","Adams");
console.log(result2);
// let result3 = buildName("Bob","Adams","Sr.");   //error b/c of 3 parameter

function multiply(a:number,b:number,c?:number):number {
    if(typeof c !== 'undefined') {
        return a*b*c;
    }
    return a*b;
}
console.log(multiply(2,3));
console.log(multiply(2,3,4));

//Anonymous Function explicit type with optional parameters
let buildName1: (firstName:string,lastName?:string) => string = function(firstName:string,lastName?:string):string {
    if(lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}
console.log(buildName1("John"));
console.log(buildName1("John","Walker"));
