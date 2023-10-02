//Structural Typing  
//Type Compatibility
//Stale Object
//Fresh Objects
//Optional Property
//Readonly property

//Nominal Property mae interface and object name jo hai wo same hona chaiye

// Structural Typing
//Is mae apky Interface ka structure jo hai agr wo same hai tou usko objects assign kar sakhty 
// Is mae wo key and values nai dekhy ga
// Properties same honi chaiye
// And properties kam nai honi chaiye object mae as per interface

// interface Student {
//     firstName:string,
//     lastName:string,
//     age:number,
// }
// let Student1: Student = {
//     firstName:"Shahmir",
//     lastName:"Zaman",
//     age:25,
// }
// let Student2: Student = {
//     firstName:"Abdul",
//     lastName:"Basit",
//     age:25,
// }

//Type Compatibility 
// Hum ik object mae dusry ko assign kar skaty per uski sari properties assign hogi
// interface Teacher {
//     firstName:string,
//     lastName:string,
// }
// let teacher1:Teacher = {
//     firstName:"Zeeshan",
//     lastName:"Hanif",
// }
// interface Student {
//     firstName:string,
//     lastName:string,
//     age:number,
// }
// let Student1: Student = {
//     firstName:"Shahmir",
//     lastName:"Zaman",
//     age:25,
// }

// teacher1 = Student1; // Type Compatibility
// console.log(teacher1) //age is excess property
// teacher1 ki properties student1 mae majood hai 
// Student1 = teacher1; //Error
//teacher1 mae student1 ki sari properties majood nai is liye error ayega

// function printName(teacher:Teacher) {
//     console.log(teacher.firstName);
// }
// console.log(printName(teacher1));
// printName(Student1);
// printName({firstName: "ali",lastName:"Ahmed",age:24})
//Is case mae excess property ko bhi except kar leta hai 

//Stale Object

// let Student2: Student = {
//     firstName:"Shahmir",
//     lastName:"Zaman",
//     age:25,
// }
// teacher1 = Student1;  //Type compatibility in case of Stale Object
//Not Compatible in case of Fresh Object or Object Literals
// teacher1 = {firstName: "ali",lastName:"Ahmed",age:24}
//is case mae excess property bug bhi hosakhti ismy type check bhi karta hai excess property ki

// interface Icecream {
//     milk:string,
//     strawberry:string,
//     toppings: string
// }
//Stale object mae direct object assign kardengy
//Fresh object mae excess property assign nai kar skhty hai

// interface Student {
//     firstName:string,
//     lastName:string,
//     age?:number, //Optional Property means ?
// }
// let Student1: Student = {
//     firstName:"Shahmir",
//     lastName:"Zaman",
//     age:25,
// }

// function printName2(student:Student) {
//     if(student.age === undefined ) {
//     console.log(student.firstName);
//     console.log(student.lastName);
//     }
//     else{
//         console.log(student.firstName);
//         console.log(student.lastName);
//         console.log(student.age);
//     }
    
// }
// printName2(teacher1); //Error khatam because of optional property
// printName2(Student1);

//Readonly Property

// interface Teacher {
//     readonly id:string,
//     firstName:string,
//     lastName:string,
// }
// let teacher1:Teacher = {
//     id:"123",
//     firstName:"Zeeshan",
//     lastName:"Hanif",
// }
// teacher1.lastName = "Hammad";
// teacher1.id = "456"


//=========================Revision from Sir Repo===================//

interface Ball {
    diameter:number;
}

interface Sphere {
    diameter:number;
}

let ball:Ball = {
    diameter:10
}
let sphere:Sphere = {
    diameter: 20
}
sphere = ball;
ball = sphere;
// both are assign because in structural typing system both interfaces have same properties

interface Tube {
    diameter:number;
    length:number;
}
let tube:Tube = {
    diameter:12,
    length: 3
}
ball = tube; // Minimum require property of ball is in tube 
// tube = ball // Error minimum require properties of tube is not in ball

//Fresh Object Cases
let myType = {name:"Zia",id:1};
//Case1
myType = {id:2,name:"Tom"};
// assign hosakhti hai kyun ky sari properties hai

//Case2a
// myType = {id:2,name_person:"Tom"}
//Error rename orr missing property 

//case2b
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:
var x:{id:number,[x:string]:any}; //note now x can have any name, just that the property should be of type string

x = { id:1, fullName:"Zia"};

//case 3
// myType = {id:2,name:"Tom",age:22}
//case 3 error occurs because of excess property

//===================Stale Object Case===============//

let myType2 = {id:2, name:"Tom"};
//Case1

myType = myType2; //Case 1: can only assign a type which has the the same properties, rule same for fresh and stale object

let myType3 = {id:2,name_person:"Tom"}
//Case2a
// myType = myType3
//Case 2: Error, renamed or missing property, rule same for stale and fresh object 

//Case 2b
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:
var x: {id:number,[x:string]:any};
var y = {id:3,fullName:"Zia"};
x = y;// Ok, `fullname` matched by index signature

var myType4 = {id:2,name:"Tom",age:22};

//case3
myType = myType4;//Case 3: Ok, excess property allowed in case of stale object which is different from fresh object

var a: {
    foo:number;
}
// a = {
//     foo:1,
//     baz:2
// } //Error because of excess property baz

var b:{
    foo:number,
    baz?:number
}
// b = {
//     foo:2,
//     bar:4
// }
//error b/c of misspelled and excess property bar

var c:{foo:number};
var c1 = {foo:1,baz:2};
c = c1; //No error

var z:{foo:number,bar?:number};
var z1 = {foo:4,baz:2};
z = z1 //No error b/c of optional property

