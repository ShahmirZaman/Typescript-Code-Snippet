//Array Filter()
//Does return a new array 
//can manipulate the size of new array
//returns based on condition

interface People {
        name:string,
        age:number,
        position:string
    }
    const people:People[] = [
        {
            name:"bob",
            age:20,
            position:"developer"
        },
        {
            name:"peter",
            age:25,
            position:"designer"
        },
        {
            name:"susy",
            age:30,
            position:"the boss"
        },
        {
            name:"anna",
            age:35,
            position:"Intern"
        },
    ]
//Map method return undefined if the condition is false so for this reason we can used filter method

// const names = people.map(function(value) {
//     if(value.name === "john") {
//         return console.log(value.name);
//     }
//     else {
//         return console.log("Hello World");
//     }
// })
// console.log(people);
// console.log(names);

// const nameCheck = people.filter((element) => {
//     if(element.name === "John") {
//         return console.log(element.name);
//     }
//     else {
//         return console.log(element)
//     }
// })
// console.log(nameCheck);

// const youngPeople = people.filter(function(person){
//     return person.age<= 25 && person.position === "developer";
// })
// console.log(youngPeople);
const developers = people.filter(function(person){
    return person.position === "senior developer";
})
console.log(developers);

//Filter() with number array and 3 parameters
//with Arrow Function
let arr:number[] = [1,2,3,4,5];
let newArr:number[] = arr.filter((elem,i,refArr) => {
    console.log("Index Nummber: ",i);
    console.log("Reference Array: ",refArr);
    return elem < 4 && elem > 2
})
console.log("Original Array: ",arr);
console.log("new Array: ",newArr);

//without return keyword

const myNumber:number[] = [100,101,102,103,104];
const filteredNumber : number[] = myNumber.filter(element => element > 102);
console.log("Original Array: ",myNumber);
console.log("Filtered Array: ",filteredNumber);



