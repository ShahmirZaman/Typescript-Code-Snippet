//Rest parameter with named function
function buildName(firstName:string,...restOfName:string[]):string {
    return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName("Joseph","Samuel","Lucas","Mackinzie")
console.log(employeeName);

//anonymous function type with Rest parameters
// let buildNameFun: ( ...rest: string[],fname: string)=>string =
// function (firstName: string, ...restOfName: string[]) {
// 	return firstName + " " + restOfName.join(" ");
// }

//error reason below:
//Note: Rest, optional and default parameters can only
// be at the end of the parameter list

let schoolCampuses:(mainCampus:string,...otherCampuses:string[]) => string =
function(mainCampus:string,...otherCampuses:string[]) {
    return `Beacon House School main campus is at ${mainCampus} and other campuses are at ${otherCampuses.join(", ")}`
}
console.log(schoolCampuses("Clifton","DHA","Gulshan","Jauhar","Nazimabad","PECHS"));


function getAverage(...args:number[]) {
    var avg = args.reduce((acc,curr) => {
        return acc + curr;
    },0)/args.length
    return avg;
}
let score1 = getAverage(2,4,6);
console.log(score1);
let score2 = getAverage(80,95,75,65);
console.log(score2);
let score3 = getAverage(79,81,78,93,56);
console.log(score3);

function getTotal(...numbers:number[]):number {
    let total = 0;
    numbers.forEach((num) => total+=num)
    return total;
}
let result1 = getTotal(10,20,30,40);
console.log(result1);
let result2 = getTotal(2.4,5.6,11.9,16.7);
console.log(Math.round(result2));

