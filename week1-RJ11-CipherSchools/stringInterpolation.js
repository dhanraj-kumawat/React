// string interpolaton

let first = "Raj";
let last = "kumar";
let verb = "is";
let color = "Brown";
let gender = "munda";

// let fullName =   first+" "+ last;
// in memory
// [first ='Raj'][last = 'kumar'][" "]["Raj "][fullName = "Raj kumar"] // lot of memory waste

// new method in js to save memory

let line = `${first} ${last} ${verb} a ${color} ${gender}.`;

console.log(line);


