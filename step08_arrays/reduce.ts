//reduce
//iterates, callback function
//reduces to a single value-- number,array,object
//1 parameter ("acc") --- accumulator -- total of all calculations
//2 parameter ("curr") --- current iteration/value
// index,refArr parameter as well
//we can used give any name to the parameters

// let arr:number[] = [5,10,15,20];
// let response:number = arr.reduce((acc,curr) => {
//     console.log(`Accumulator: ${acc} + Current Value: ${curr}`);
//     return acc + curr;
// },0);                    // 0 is initial value which is first store in acc
// console.log(response);
// let response:number = arr.reduce((acc,curr) => {
//     console.log(`Accumulator: ${acc} + Current Value: ${curr}`);
//     return acc + curr;
// },100);                     // initial value now 100
// // console.log(response);
// let response:number = arr.reduce((acc,curr) => {
//     console.log(`Accumulator: ${acc} + Current Value: ${curr}`);
//     return acc + curr;
// });                            // without initial value
// console.log(response);

// let response:number = arr.reduce((acc,curr,index,refArr) => {
//     console.log("Index Number: ",index);
//     console.log("Reference Array: ",refArr);
//     // console.log(`Accumulator: ${acc} + Current Value: ${curr}`);
//     return acc + curr;
// },0);
// console.log(response);

//Purpose of Initial Value

// let arr:number[] = [];
// let response:number = arr.reduce((acc,curr) => {
//     console.log(`Accumulator: ${acc} + Current Value: ${curr}`);
//     return acc + curr;
// },0); 
// console.log(response);

//without Initial Value the code will crash
// let response:number = arr.reduce((acc,curr) => {
//     console.log(`Accumulator: ${acc} + Current Value: ${curr}`);
//     return acc + curr;
// }); 
// console.log(response);

const myCart = [
    {product:"Sketchers",price:25000,category:"Shoes"},
    {product:"Shirt",price:5000,category:"Clothing"},
    {product:"Nike",price:20000,category:"Shoes"},
    {product:"Addidas",price:22000,category:"Shoes"},
    {product:"Trouser",price:8000,category:"Clothing"},
];

const totalBill = myCart.reduce((acc,curr) => {
    console.log(`Accumulator: `,acc);
    console.log(`Current: `,curr.price);
    return acc + curr.price;
},250);
console.log(`Total Bill ${totalBill.toLocaleString()}`);

//Chaining of Reduce and Filter

const allCourses = [
    {courseName: "TypeScript",price:3000},
    {courseName: "JavaScript",price:2500},
    {courseName: "CSS",price:1000},
    {courseName: "HTML",price:500},
];
const selectedCourses = ["TypeScript","JavaScript"];

const coursePrice = allCourses
    .filter((course) => {return selectedCourses.includes(course.courseName)})
    .reduce((acc,course) => acc + course.price,0);
console.log(coursePrice);
