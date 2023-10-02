// let user = {
//       //Key       value
//     firstName: "Shahmir", 
//     lastName: "Zaman",
//     age: 25,
//     hobbies: ["cricket","football","gaming"],
//     salary:()=> (25000),
//     office : {
//         address:"abc street",
//         officeName:"xyz ltd"
//     }
    
// };
// console.log(user);
// console.log(user.firstName);
// console.log(user["age"]);
// console.log(user.hobbies[1]);
// console.log(user.salary());
// // delete user.salary
// console.log(user)
// // user["email"] = "abc@abc.com";
// console.log("email" in user);
// console.log(user.office)
// for(let key in user) {
//     // console.log(key + " : " + user[key]);
//     console.log(key);
// }
// // console.log(user.office.officeName);

// let teacher = {
//     name: "Zeeshan",
//     experience: "10 years"
// }
// console.log(teacher.name); // Dot Notation
// console.log(teacher["experience"]); //Bracket Notation

// //Type declaration
// let student: {
//     name:string,
//     age:number,
// }

// student = {
//     name:"Hira",
//     age: 30
// }
// console.log(student.name);
// console.log(student.age);

// let myOject = {
//     fName:"Muhammad",
//     lName:"Rehan",
//     age:38,
//     address:{
//         street: "G-12",
//         city:"Islamabad",
//     }
// }

//====================InterFace=======================//
// interface objType {
//     fName:string,
//     age:number,
//     function:()=>void
//     hobbies:string[],
//     socialMedia:{
//         s1:string,
//         s2:string,
//     }
// }

// let obj:objType = {
//     fName:"Bilal",
//     age:40,
//     function:()=>{
//         console.log("Hello")
//     },
//     hobbies:["cricket","Devops","FullStack"],
//     socialMedia:{
//         s1:"FB",
//         s2:"IG",
//     }
// }
// console.log(obj);

// let obj2:objType = {
//     fName:"Bilal",
//     age:40,
//     function:()=>{
//         console.log("Hello")
//     },
//     hobbies:["cricket","Devops","FullStack"],
//     socialMedia:{
//         s1:"FB",
//         s2:"IG",
//     }
// }
// console.log(obj2);

// let teacher: {name:string,exp:number} = {
//     name:"Zeeshan",
//     exp: 10,
// }
// //Above object means anonymous 

// type Student = {
//     name:string,
//     // age:number,
//     age?:number,
// }

// let std1: Student = {
//     name:"Fahad",
//     age: 34
// }
// //Above object is Type Aliased and all the properties are required to enter in object otherwise error occurs
// // if we used ? then it is not required to complete the properties

// interface Manager {
//     managerName:string,
//     subordinates?:number,
// }

// let storeManager:Manager = {
//     managerName:"Bilal",
//     // subordinates: 234,
// }


// interface Person {
//     name:string,
//     age:number,
// }

// let person:Person = {
//     name:"Bilal",
//     age:40,
// }

// interface Employee extends Person {
//     email:string
// }

// let employee:Employee = {
//     name:"Bilal",
//     age:40,
//     email:"abc"
// }
// interface Director extends Employee {
//     role:boolean
// }

// let director:Director = {
//     name:"Bilal",
//     age:40,
//     email:"abc",
//     role:true,
// }

// interface Person {
//     name:string,
//     age:number,
// }
// interface Person {
//     email:string,
// }

// let person:Person = {
//     name:"Bilal",
//     age:40,
//     email:"xyz",
// }

//=======================Type Vs Interface===================//

// type abc = {};
// interface test {};

// type cannot used extends 
//interface used extends

//type cannot merge the same name type
//interface can merge same name interface

//type nam = string;
//type age = number
//type obj = {
//     name:nam,
//     rollnum: age,
// }
// in interface we cannot do this above 

