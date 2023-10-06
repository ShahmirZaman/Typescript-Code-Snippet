//Array.map()
//does return a new array 
//does not change size of original array
//uses values from original array when making new one 

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
        name:"bob",
        age:30,
        position:"the boss"
    }
]

// const messages = people.map(function(personValue) {
//     // console.log(personValue);
//     // return "Hello World"  
//     return personValue;
// })
// console.log(messages);

// const ages = people.map(function(peopleAge) {
//     // return peopleAge.age
//     return peopleAge.age + 20;
// })
// console.log(ages);

// const newPeople = people.map(function(newperson) {
//     return {
//         firstName: newperson.name.toUpperCase(),
//         oldAge: newperson.age + 20,
//     }
// });
// console.log(newPeople);

//Map() with number array and 3 parameters
//with Arrow Function

let numberArray:number[] = [1,2,3];
let newArr = numberArray.map((elem) => {
    return elem + 10;
})
let sqrt = numberArray.map((val) => {
    return val**2;
})
let arrOfObj = numberArray.map((elem,i,refArr) => {
    return {
        elemVal:elem,
        elemIndex:i,
        refArr:refArr,
    }
})
console.log("Original Array: ",numberArray);
console.log("New Array: ",arrOfObj);
console.log("SquareRoot Array: ",sqrt);

//without return key word 

let multiplyNumber = numberArray.map(val => val*5);
console.log(multiplyNumber);

