//Array declaration with different types
let numberedArray:number[] = [1,2,3,4,5,6,7,8];
console.log(numberedArray);

let names:string[] = ["ALi","Ahmed","Kamran","Farhan","Imran"];
console.log(names);

let mixArray:(string | number)[] = ["Bilal",34,"Tehseen",12];
console.log(mixArray);

type newType = [number,string,number,string,boolean];

let myArray:newType = [20,"abc",40,"xyz",true];
console.log(myArray);

//Array indexing
//Index in array always start from 0
let numberFromArray:number = numberedArray[3];
console.log(numberFromArray);

let personName:string = names[2];
console.log(personName);

let mixArrayElement:string|number = mixArray[1];
console.log(mixArrayElement);

let myArrayElement:string | number | boolean = myArray[4];
console.log(myArrayElement);

//length method in Array
//Length of array always start from 1 


console.log(`The length of an array is: ${mixArray.length}`);
console.log(`The length of numberedArray is ${numberedArray.length}`);
console.log(`The length of names array is ${names.length}`);
console.log(`The length of myArray is ${myArray.length}`);

//Inserting elements in array from length
//Its is used when you have very small array

let bakeryItems:string[] = ["Cake","Pastries","Biscuit"];
console.log(bakeryItems);
bakeryItems[bakeryItems.length] = "Muffins";
console.log(bakeryItems);
//Remove Muffins from and add chips 
bakeryItems[bakeryItems.length-1] = "Chips";
console.log(bakeryItems);

//print array elements one at a time from for loop

for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(element);
}
 