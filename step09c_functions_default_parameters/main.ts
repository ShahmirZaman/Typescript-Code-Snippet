//Named Function with optional and default parameters
//Note that the parameter type will be optional when used with default parameter

function buildName(fName:string,lName = "Smith") {
    if(lName) {
        return `${fName} ${lName}`;
    }
    else {
        return fName;
    }
}
let result1 = buildName("Steve");   //works correctly because last parameter is optional
console.log(result1);
let result2 = buildName("John","Walker");
console.log(result2);

//anonymous function type with defult parameters 
//(Note that the parameter type will be optional when used with defult value)

let fullName:(firstName:string,lastName?:string) => string = 
function(firstName:string,lastName = "Stokes") {
    if(lastName) {
        return firstName + " " + lastName
    }
    else {
        return firstName;
    }
}
let name1 = fullName("Ben");
console.log(name1);
let name2 = fullName("David","Warner");
console.log(name2);

