
const people = [
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
const age = people.find((element) => {
    return element.age == 20;
})
console.log(age);