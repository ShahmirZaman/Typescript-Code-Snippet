//Enum --- Enumeration --- declaring values one by one
//Enum the set of values
//which return index or define index
// or return value


//Enum --- number
//by default index 0 start
// enum Color {
//     Blue = 5,
//     White = 10,
//     Yellow = 15
// }

// const x:Color = Color.Blue;
// console.log(x);
// console.log(Color["Blue"]);
// console.log(Color.Blue);
// console.log(Color[5]);

// const x:Color = 10; //error b/c enum is basically const values we can not change it and re assign
// Color.Blue = 34; //error


// enum Students {
//     bilal,
//     tehseen = 20,
//     ahmed,
// }
// const student:Students = Students.tehseen;
// console.log(student);
// const student2:Students = Students["ahmed"];
// console.log(student2);

// enum TrafficLights {
//     Red = 12,
//     Green = 16,
//     Yellow = 20
// }
// let redColor:string = TrafficLights[12];
// console.log(redColor);
//ENUM --- string

// enum user {
//     active = "Active",
//     inactive = "Inactive"
// }
// console.log(user.active);
// console.log(user["Active"]);

// for(const key in user) {
//     if(user[key] === "Active") {
//         console.log(key);
//     }
// }

// enum Students {
//     bilal = "Bilal",
//     tehseen = "Tehseen",
//     ahmed = "Ahmed"
// }

// const std1:Students = Students.tehseen;
// console.log(std1);
// enum user {
//     active = "Active",  //constant member 
//     inactive = "Inactive".length //computed member
// }

//constant member whose value is constant
//computed member whose value is computed by any method or function etc
//computed member if does not return number than it is not compute.

// function add(a:number,b:number) {
//     return a + b;
// }
// enum user {
//     active = "Active",
//     inactive = add(5,6),
// }

//=========================Const ENUM========================//

const enum Direction {
    up,
    down,
    left,
    right,
}

let directions = [
    Direction.up,
    Direction.down,
    Direction.left,
    Direction.right
];
console.log(directions);

const enum Enum {
    A = 1,
    B = A*2,
}

// let value:string = Enum[1]; //error a const enum can only used string literals

