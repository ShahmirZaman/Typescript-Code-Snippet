//Structural Typing  
//Type Compatibility
//Stale Object
//Fresh Objects
//Optional Property
//Readonly property
var Student1 = {
    firstName: "Shahmir",
    lastName: "Zaman",
    age: 25,
};
function printName2(student) {
    if (student.age === undefined) {
        console.log(student.firstName);
        console.log(student.lastName);
    }
    else {
        console.log(student.firstName);
        console.log(student.lastName);
        console.log(student.age);
    }
}
// printName2(teacher1); //Error khatam because of optional property
printName2(Student1);
var teacher1 = {
    id: "123",
    firstName: "Zeeshan",
    lastName: "Hanif",
};
teacher1.lastName = "Hammad";
// teacher1.id = "456"
