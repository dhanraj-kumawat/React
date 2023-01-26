// array methods

// let array =[1,2,3,4,5]
// let newArray = [];

// for(let i=0; i<array.length; i++){
//     newArray[i] = array[i]*array[i];
// }
// console.log(newArray)

// .map method
// let array =[1,2,3,4,5];   // in js, a function is also a js object
// console.log(array.map) // map function take a function as object

// let newArray = array.map((element,index, x)=>{  // acts like a loop which run array.map(value, index, array)
//     console.log(index);
//     console.log(x)
//     return element*element;
// })

// console.log(newArray)


// for each method
// return type void. does not return anything
// let array = [1,2,3,4,5];

// array.forEach((element, index) => console.log(element));



// .fiter method

// let array = [1,2,4,5]
// console.log(array.filter)
// let filterArray = array.filter((element) =>{
//     return element >= 3;   //check boolean if >=3 is true then add to new array
// })
// console.log(filterArray)


// .find method
// let array = [1,2,3,4,5]
// let temp = array.find((value)=>{
//     return value > 2;
// })
// console.log(temp);


// .sort method
// let array = [3,4,52,54,22,3,43,54,32,-3]
// // let sortArray = array.sort(); // does not sort perfectly because they use them as strngs

// let sortArray = array.sort((el1,el2)=>{
//     el1 = Number(el1); 
//     el2 = Number(el2);
//     return el1-el2;
// })
// console.log(array)
// console.log(sortArray) 

//object destructuring

// let details = {
//     name:"alex",
//     age: 32,
//     address: {
//         street: "broklyn",
//         city:"newyork",
//         coutry:"usa",
//         passportDeatials:{
//             passportnumber:"sfds212x455548"
//         }
//     }

// };

// let myName = details.name;
// let age  = details.age;
// let {name, age} = details;
// console.log(name, age)


