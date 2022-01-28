/*
    Regular function : have their own this; this refers to custom object
    Arrow function => this refers to global object
    Object method : this refers to the object
*/

'use strict';

// Behaviour of 'this' in normal vs arrow function
function fun(){
    console.log(this);
}
fun(); // Undefined (only in strict mode)

let fun2 = () => {
    console.log(this);
}
fun2(); // refers to global object
console.log();

/////////////////////////////////////////////////////

// this in Object
let myObj = {
    myFunction: () => {
        console.log("Arrow func inside object:");
        console.log(this); // global object
        console.log(this.b); // this.b is nothing
    },
    a: this, // global object
    b: 10,

    // in object method (function in an object),
    // this refers to the object (myObj)
    fun() {
        console.log("object method (normal func inside object):");
        console.log(this); // myObj object
        console.log(this.b); // myObj.b
    },
};
myObj.myFunction();
myObj.fun();