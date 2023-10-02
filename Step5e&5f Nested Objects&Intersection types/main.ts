//===================Nested Objects=============//

// type Author = {
//     firstName: string;
//     lastName: string;
// };
// type Book = {
//     author:Author;
//     name:string;
// };

// const myBook:Book = {
//     author : {
//         firstName:"Shahmir",
//         lastName:"Zaman",
//     },
//     name:"Typescript",
// };
// console.log(myBook);
// console.log(myBook.author.firstName);


//=========================Intersection Type====================//

type personalDetail = {
    name:string;
    age:number;
};

type officialDetail = {
    email:string;
    status:string;
    salary:number;
}

type Person = personalDetail & officialDetail;

let person:Person = {
    name:"Bilal",
    age:40,
    email:"abc@abc.com",
    status:"Manager",
    salary:5000,
}

interface Student {
    student_id:number;
    name:String;
}
interface Teacher {
    teacher_id:number;
    teacher_name:string;
}
type intersected_type = Student & Teacher;
let obj1:intersected_type = {
    student_id:3323,
    name:"Ahmed",
    teacher_id:222,
    teacher_name:"Zia",
}
console.log(obj1.teacher_name);
console.log(obj1.student_id);