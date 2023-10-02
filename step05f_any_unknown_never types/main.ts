// Any
// Avoid using anytype in code 
let myVal: any;

myVal = true;
myVal = 42;
myVal = "hey!";
myVal = []
myVal = {}
myVal = Math.random();
myVal = null;
myVal = undefined;
myVal = () => {
    console.log("Hello!");
}

// Unknown 

let value: unknown;

value = true;
value = 42;
value = "hey!";
value = []
value = {}
value = Math.random();
value = null;
value = undefined;
value = () => {
    console.log("Hello!");
}

//Assigning a value of type unknown to variables of other types

let val:unknown;

const val1:unknown = val; //ok
const val2:any = val //ok
// const val3: boolean = val; // Will throw error
// const val4: number = val; // Will throw error
// const val5: string = val; // Will throw error
// const val6: Record<string, any> = val; // Will throw error
// const val7: any[] = val; // Will throw error
// const val8: (...args: any[]) => void = val; // Will throw error

// Never

// Function returning never must not have a reachable end point
function error(message: string): never {
    throw new Error(message);
  }
   
  // Inferred return type is never
  function fail() {
    return error("Something failed");
  }
   
  // Function returning never must not have a reachable end point
  function infiniteLoop(): never {
    while (true) {}
  }
  