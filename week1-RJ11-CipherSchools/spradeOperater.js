//operator overloading 
// ... rest operator  same operotr but different function
// ... sprade operator

// let array = [1,2,4,5,6];

// console.log(array)  // return array [ 1, 2, 4, 5, 6 ]

// console.log(...array) // return array element 1 2 4 5 6 sprade operator

// 
let object = {
        a: 34, b: 45,
        c:{ A: 43, B: 343},
        d: 322
}
console.log(object) // will return object

let newObject = {...object};
console.log(newObject)

newObject.c.A = 777; // changing the value also in object (pass by reference)

console.log(newObject)
console.log(object)

//deepcloning in js

// let newArray = [23,43,...array,33,22,43]; // will create a new array with same array elements we can also add extra elements by using comma
// console.log(newArray)


//  rest operator ......>>>>

// let maxOfTwoNumbers = (num1,num2) => Math.max(num1,num2);

// let maxOfThreeNumbers = (num1,num2,num3) => Math.max(num1,num2,num3);

// let maxOfNumbers = (...numbers) => { 
//     console.log(numbers) // return array of numbers
//     Math.max(...numbers)};

// maxOfNumbers(3,2,5,6,4,34,6,3,22,64);

