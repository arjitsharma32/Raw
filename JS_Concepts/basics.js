/*
alert(123);

//Log to console 
console.log("Hello World");
console.error("Yellow");
console.warn("Warning Mssg");

//Gives time taken between
console.time("note time");
    console.log("heck yea");
    console.log("heck yea");
    console.log("heck yea");
    console.log("heck yea");
    console.log("heck yea");
console.timeEnd("note time");

VARIABLES

//var is older way
var name = "arjit";
console.log(name);
name = "Adam"; //Can change variable
console.log(name);

//let is newer way to initialize variables
let name = "Arjit";
console.log(name);

-----------

CONSTANT

const a = 10;
console.log(a);
a = 20; //Cannot do ,Error

//Cannot change object, but can change property of objects
const person = {
    name: "John",
    age: 20
}
person.name = "Arjit"; //Possible
console.log(person);

//Not Possbile reassigning const object
person = {
    name: "XYZ",
    age:45
}

-------------

DATA TYPES:
Dynamically Typed Language
typeof variable_name is used to know type of variable

Primitive Data Types:
    String  : const name = "John Doe";
    Number :  const age = 18;
    Boolean : const isValid = true;
    Null : const a = null;//typeof null gives object,a bug in language
    Undefined : let test;
    Symbols : const sym = Symbol();

Referrence Data Types:
    Arrays : const names = ['Arjit','Adam']
    Object Literals : const person = { name:"Arjit", age:19}
    Functions : 
    Dates : const today = new Date();

-------------
TYPE CONVERSION
let a;

Number to String:
a = String(89);
a = (90).toString();

Date to String
a = String(new Date());


String to Number
a = Number('5');
a = Number("Hello");//NaN = Not a Number
a = parseInt('100.30');//100


a = parseFloat('100.30');
//toFixed specifies decimal places
console.log(a.toFixed(2));//100.30 

*/