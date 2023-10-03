//Push Method
//This method insert the element from the end
//return the length as well after inserting element
//You can add 1 or more elements

// let kitchenIngredients:string[] = ["Salt","Sugar","Milk"];
// console.log(kitchenIngredients);
// let pushItem:number = kitchenIngredients.push("Spice");
// console.log(kitchenIngredients);
// console.log(pushItem);
// kitchenIngredients.push("Flour","Rice");
// console.log(kitchenIngredients);

// //Pop Method 
// // Remove element from the end
// //return the element which is removed
// let popItem:string | undefined = kitchenIngredients.pop();
// console.log(popItem);
// console.log(kitchenIngredients);

// //Unshift Method
// //Insert element from the beginning
// //Return length as well
// //You can add 1 or more elements

// let unshiftItem:number = kitchenIngredients.unshift("Vegetable oil");
// console.log(kitchenIngredients);
// console.log(unshiftItem);

// //Shift method
// //Remove element from the beginning 
// //return the remove element

// let shiftItem:string | undefined = kitchenIngredients.shift();
// console.log(kitchenIngredients);
// console.log(shiftItem);

// //Splice Method 
// // adding and removing elements from any position in an array

// //first adding elements nothing remove from array
// kitchenIngredients.splice(1,0,"Beans","Herbs");     //splice(index number,no.of elements to remove,"element1","element2")
// console.log(kitchenIngredients);
// //adding but removing previous elements
// kitchenIngredients.splice(3,2,"Garlic");
// console.log(kitchenIngredients);
// //removing elements only 
// kitchenIngredients.splice(2,1);
// console.log(kitchenIngredients);

// //slice method
// //make copy of an array from where you want to copy 
// //return an array

// let copyArray:string[] = kitchenIngredients.slice(2,5);         //slice(index number,length number);
// console.log(copyArray);

//indexOf() method
// Every array element has an index. This method returns the index of an element in an array.
// a. If specific element doesn’t exist within array, indexOf() returns -1.
// Hence, this method can be used to check whether an element exists in an array or not.

// let furnitures:string[] = ["Sofa","Bed","Cupboard","Chair","Table"];
// console.log(furnitures);
// console.log(furnitures.indexOf("Chair"));
// console.log(furnitures.indexOf("Dining Table"));
// console.log(furnitures.indexOf("Bed") !== -1);

// //lastIndexOf()
// //This method returns an array’s last element’s index.
// // a. If an array is empty then, it returns -1 as of the indexOf() function.
// // b. If an array has one more same element, then it returns the maximum index of duplicate items.
// let items:string[] = [];
// console.log(items.lastIndexOf("item1"));
// console.log(furnitures.lastIndexOf("Cupboard"));

// // concat()
// // As the name suggests, this method simply merges two arrays and returns a combined result.

// let fruits:string[] = ["Apple","Banana","Strawberry","Mango"];
// const vegetables:string[] = ["Potato","Tomato","Onion"];
// let itemBasket:string[] = fruits.concat(vegetables);
// console.log(itemBasket);

// // join()
// // According to the name, this method joins all elements of the array into a string with a given operator.
// // a. If an operator is not given, it joins elements with a comma(,).
// // syntax:
// // array.join(operator)

// let cars:string[] = ["Honda","Toyota","Suzuki"];
// console.log(`Result: ${cars.join("/")}`);
// console.log(`Result: ${cars.join()}`);

// // reverse()
// // As per the name, this method reverts the order of an array.
// // syntax:
// // array.reverse()

// console.log(`Reverse Array: ${cars.reverse()}`);

// // toString()
// // This method converts an array to a comma-separated string.
// // syntax:
// // array.toString()

// console.log(`To string: ${fruits.toString()}`);

