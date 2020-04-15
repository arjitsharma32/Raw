/*          
                                    JAVASCRIPT BASICS

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
    Functions : function myFunc(){}
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


--------------
MATH

let x;

x = Math.PI;
x = Math.E;
x = Math.round(2.8);//3
x = Math.floor(2.4);//2
x = Math.ceil(2.4);//3
x = Math.sqrt(64);//4
x = Math.abs(-3);//3
x = Math.pow(8,2);//64
x = Math.min(2,5,7);//2
x = Math.max(2,5,7);//7
x = Math.random();//generate random decimal between 0 and 1

--------------
STRING

const a


---------------***************************************---------------------
---------------***************************************---------------------
---------------***************************************---------------------
                                    
                                    DOM MANIPUATION

                                    INTRO


val = document;
val = document.all;
val = document.all[2];
val = document.all.length;//counts all elements in dom
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;//Return all forms in a document
val = document.forms[0];//1st form 
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;//Returns all links
val = document.links[0];

val = document.images;

val = document.scripts;

let scripts = document.scripts;


                                        SELECTING:

document.getElementById("task-title");
document.getElementById("task-title").className;//Gives class Name of element with id = task-title
//Can also store in a variable
const tasktitle = document.getElementById("task-title");

const items = document.getElementsByClassName("collection-item");
items[0].style.color = "red";

const li = document.getElementsByTagName("li");
console.log(li[0]);


CONVERTING HTML COLLECTION TO ARRAY:
let li = document.getElementByTagName("li");
li = Array.from(li);
li.reverse();//Works
li.forEach(function(li){
    console.log(li);
});


QUERY SELECTOR:

document.querySelector("#task-title");//Gets id 
document.querySelector(".card-title");//Gets class
document.querySelector("h3");//Gets 1st h3 in doc
document.querySelector("ul li").style.color = "blue";//Gets al list items in ul

//Get all ul with class name "collection-item"
const listItems = document.querySelector("ul").getElementsByClassName("collection-item");

//querySelectorAll
const item = document.querySelectorAll('ul.collection li.collection-item');//ul with class of collection and li in ul with class of collection-item selected


CHANGING STYLE:
document.getElementById("task-title").style.background = "#333";
document.getElementById("task-title").style.color = "#fff";
document.getElementById("task-title").style.dispaly = "none";


CHANGING CONTENT:
document.getElementById("task-title").textContent = "New text";
document.getElementById("task-title").innerText = "My Tasks";
document.getElementById("task-title").innerHTML = "<span>Hello</span>";



CLASSES AND ATTRIBUTES
const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

let x;
x = link.className;//Classes in string format 

x = link.classList;//Array of classes
x = link.classList[0];

link.classList.add("test");
link.classList.remove("test");


x = link.hasAttribute("href");
x = link.getAttribute("href");
x = link.setAttribute("href","http://google.com");
link.removeAttribute("href");




                                TRAVERSING THE DOM:

let x;
const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

//Getting Child Node

x = list.childNode;//Returns Node list .We get children of ul(Also include Text nodes)
x = list.children;//Returns Html collection .We get children of ul(without text nodes)

x = list.childNode[0].nodeName;
x = list.childNode[3].nodeType;

//Node Type : 
// 1 - Element
// 2 - Attribute
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

//Getting 1st child
x = list.firstChild;//All node types included
x = list.fistElementChild;//Only 1st html element returned

//Getting Last Child
x = list.lastChild;
x = list.lastElementChild;

//Counting total child elements
x = list.childElementCount;


//Getting children of children
x = list.children[3].children;//returns li in ul then returns a tag in that li
x = list.children[3].children[0].id="test-link";//Return a tag with id of test-link in li of ul



//Getting parent Node
x = listItem.parentNode;//All node type
x = listItem.parentElement;//Only html element

//Parent of parent
x = listItem.parentElement.parentElement;



//Get next Siblings
x = listItem.nextSibling;
x = listItem.nextElementSibling;
x = listItem.nextElementSibling.nextElementSibling;

//Get previous Sibling
x = listItem.previousSibling;
x = listItem.previousElementSibling.previousElementSibling;


                                CREATING ELEMENTS
<li class="collection-item">Hello World <a><i class = "fa fa-remove"></a></li>

//Creating li tag
const li = document.createELement("li");
li.className = "collection-item";//Added class name to li
li.id = "new-item"//Added id
li.setAttribute("title","New Item")//Added title attribute to li

//Adding a tag in li --> <li> <a></a> </li>
const link = document.createElement("a");
link.className = "delete-item secondary-content";
link.innerHTML = '<i class = "fa fa-remove"></i>';
li.appendChild(link);

//Adding text node to li
li.appendChild(document.createTextNode("hello World"));//Inserting Text node inside li

//Appending this li tag in ul with class collection
document.querySelector("ul.collection").appendChild(li);


                                REMOVING / REPLACING 
const newHeading = document.createElement("h2");
newHeading.id="task-title";
newHeading.appendChild(document.createTextNode("Task list"));

const oldHeading = document.getElementById("task-title");
const cardAction = document.querySelector(".card-action");

cardAction.replaceChild(newHeading, oldHeading);

//Remove Element
const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

lis[0].remove(); 

list.removeChild(lis[3]);



                                EVENT LISTENERS

document.querySelector('.clear-task').addEventListener('click',
function(e){
    console.log("button clicked");
    //e.preventDefault();
});

document.querySelector('.clear-task').addEventListener('click',onClick);

function onClick(e){
    console.log("button clicked");
}



document.querySelector('.clear-task').addEventListener('click',onClick);

function onClick(e){

    //Event Target Element
    val = e.target;
    val = e.target.id;
    val = e.target.classList;

    //Change Text in button on click
    e.target.innerText("Hello");

    //Getting Timestamp on clicking
    val = e.timeStamp;

    //Getting Event Type
    val = e.type;

    //Coords event relative to window
    val = e.clientY;
    val = e.clientX;

    //Coords event relative to element
    val = e.offsetY;
    val = e.offsetX;


    console.log("button clicked");
}


                            DIFFERENT MOUSE EVENTS

btn = document.querySelector('.btn');

btn.addEventListener('click',runEvent);
function runEvent(e){
    console.log(`Event Type : ${e.type}`);
}

dblclick
mousedown
mouseup
mouseenter
mouseleave
mouseover : Fires everytime we go inside other elements within parent(for which mouseover is set)
            Ex: We go inside card the inside a list then inside button in li...it fires everytime though only defined for card
mouseout :
mousemove


                            DIFFERENT KEYBOARD EVENTS

const form = document.querySelector('form');
const taskinput = document.getElementById('task');

form.addEventListener("submit", formEvent);

function formEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);
    
    //log value entered in input field of form
    console.log(taskInput.value);


    //e.preventDefault();
}

taskInput.addEventListener("keydown", inputEvent);

function inputEvent(e){
    console.log(e.target.value);//Every letter we type output to console
}

keyup
keypress - General keypress
focus - Focus on input field
blur - focus outside input field
cut - Anything is cut from input field
paste - Anything pasted to input field
input - general input field...anything we do with input fires this event


EVENT BUBBLING / DELEGATION












LOCAL AND SESSION STORAGE

//Set Local Storage 
localStorage.setItem('name','John');

//Set Session Storage
sessionStorage.setItem('name','Beth');

//Deleting
localStorage.removeItem('name');
localStorage.clear()

//Getting from Storage
const name = localStorage.getItem('name');



*/