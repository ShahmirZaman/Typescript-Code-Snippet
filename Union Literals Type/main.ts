// let mobile:string | number | boolean | undefined = "samsung";
// mobile = 22;
// mobile = true;
// mobile = undefined;

// let myName: string | null;
// myName = null;
// console.log(myName);
// myName = "shahmir";
// console.log(myName);

// myName = undefined; error
// myName = 12; error

// let myAge : string | number;
// myAge = 24;
// console.log(myAge);

// // console.log(myAge.toLowerCase()); error

// myAge = "Dont Know";
// console.log(myAge);

// console.log(myAge.toString()); // common to both number and string without narrowiing 

// console.log(myAge.toLocaleUpperCase()); // can be called only with narrowing

// let newAge = Math.random() > 0.6 ? "Zaman" : 24;
// console.log(newAge);
// // newAge.toLowerCase();error Transpiler cannot narrow

// if(newAge === "Zaman") {
//     //Type of newAge:string
//     newAge.toUpperCase;
//     console.log(newAge);
// }
// if(typeof newAge === "string") {
//     newAge.toUpperCase();
//     console.log(newAge);
// }

// typeof newAge === "string"? newAge.toUpperCase : newAge.toFixed;
// console.log(newAge);


// let a:string | number;
// a = "shahmir";
// console.log(a.toLowerCase());
// a = 12;
// console.log(a.toExponential());


// function getType(val:string | number) {
//     if(typeof val === "string") {
//         console.log(val.toUpperCase);
//     }
//     else {
//         console.log(val + 23);
//     }
// }
// getType(23);
// getType("string");

// function getId(id:string|null){
//     if(!id) {
//         console.log("Kindly enter the id")
//         return
//     }
//     return console.log(id?.toLowerCase())
// }
// getId("abc");
// getId(" ");

// function printId(id: number | string) {
//     if (typeof id === "string") {
//       // In this branch, id is of type 'string'
//       console.log(id.toUpperCase());
//     } else {
//       // Here, id is of type 'number'
//       console.log(id);
//     }
//   }
// printId(23);
// printId("abc")

// function welcomePeople(x: string[] | string) {
//     if (Array.isArray(x)) {
//       // Here: 'x' is 'string[]'
//       console.log("Hello, " + x.join(" and "));
//     } else {
//       // Here: 'x' is 'string'
//       console.log("Welcome lone traveler " + x);
//     }
//   }
// welcomePeople("SHAHMIR")
// welcomePeople(["Shahmir","zaman"])


//--------------------------------Literal types----------------------------------//

// let unionType: string | number;

// let literalType: "Shahmir" | 123;
// // literalType = "zaman"; error because it only accept "Shahmir"
// literalType = "Shahmir";
// // literalType = 234; error because it only accept 123
// literalType = 123;

// type World = "world";
// type Greeting = `Hello ${World}`;
// let a:Greeting = "Hello world";

// let age: number| "died" | "unknown";

// age = 90;
// age = "died"
// age = "unknown"
// // age = "living" error because it is not declare as literal type 

// let zia: "zia"
// zia = "zia"
// // zia = "khan" error 

// let yourName = Math.random() > 0.6 ? "Hira Khan" : undefined

// if(yourName) {
//     yourName.toUpperCase(); // Truthiness Narrowing
// }
// yourName.toUpperCase error object is undefined
// yourName?: This is the optional chaining operator (?.). It is used to access a property or call a method on an object, but it guards against the object being null or undefined. If yourName is null or undefined, the expression will short-circuit and return undefined instead of throwing an error.



//-------------------------------------Type------------------------------

type idType = number | string;
type nameType = string;
type ageType = number;

let id:idType = 123;
let name1:nameType = "shahmir";
let age:ageType = 24;

type employeeType = {
    empId:idType,
    empName: nameType,
    empAge:ageType
}

let employee:employeeType = {
    empId:id,
    empName:name1,
    empAge:age
}
console.log(employee);
let employee2:employeeType = {
    empId:"123",
    empName:"zaman",
    empAge:25
}
console.log(employee2);

let employee3:employeeType = {
    empId:678,
    empName:"Ali",
    empAge: 27,
}
console.log(employee3);

type RawData = boolean | string | number | null | undefined

let data:RawData = 23;
console.log(data);

type Id = number | string;

let ids:Id = "234";
console.log(ids);

type IdMayBe = Id | undefined | null;

let mayBeId:IdMayBe;
console.log(mayBeId);









