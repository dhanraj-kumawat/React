// class

class Animal{
    noOfLegs;
    color;
    family;
    sound;

    constructor(noOfLegs, color, family,sound){
        this.noOfLegs = noOfLegs;
        this.color = color;
        this.family = family;
        this.sound = sound;
    }
}

let a1 = new Animal(4,"brown", "rat", "chuchu" );

console.log(a1.sound)