// string interpolaton

let first = "Raj";
let last = "kumar";

// let fullName =   first+" "+ last;
// in memory
// [first ='Raj'][last = 'kumar'][" "]["Raj "][fullName = "Raj kumar"] // lot of memory waste

// new method in js to save memory

let fullName = `${first} ${last}`;

console.log(fullName);


